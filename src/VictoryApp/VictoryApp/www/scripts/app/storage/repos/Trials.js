
/**
 * Created by hcasa on 09/17/2015.
 */

LocalStorage.Trials = {
    entity: null,
    cropEntity: null,

    setEntity: function (trialEntity, cropEntity) {
        this.entity = trialEntity;
        this.cropEntity = cropEntity;
    },

    save: function (t) {
        var trial = new this.entity();
        trial.TrialId = t.TrialID;
        trial.Name = t.Name;
        trial.City = t.City;
        trial.State = t.State;
        trial.TrialYear = t.TrialYear;
        trial.Zip = t.Zip;
        trial.CropName = CropCache[t.CropID].Name;
        trial.TraitName = TraitCache[t.TraitID].Name;
        trial.SiteName = SiteCache[t.SiteID].Name;


        if (typeof t.PrimarySRRUserID !== 'undefined' && t.PrimarySRRUserID != null) {
            trial.PrimarySRRUserId = t.PrimarySRRUserID;
        }

        persistence.add(trial);
        persistence.flush(function (tx, err) {
            if (typeof err !== 'undefined' && err != null) {
                //debugger;
            }
        });
    },

    get: function (id) {
        var deferred = $.Deferred();

        this.entity.findBy("TrialId", id, function (trial) {
            var a = "";
            deferred.resolveWith(this, [trial, a]);
        });

        return deferred;
    },

    getComplianceStatus: function (id) {

        var deferred = $.Deferred();

        persistence.transaction(function (tx) {
            var qry = "select w.WorkflowId, w.WorkflowName, w.WorkflowOrder, tp.Answered, tp.Locked from workflow w left outer join (select * from trialprogress where TrialId = ?) tp on w.WorkflowId = tp.WorkflowId order by w.WorkflowOrder asc";
            var param = [id];
            tx.executeSql(
                qry,
                param,
                function (data) {
                    var status = [];

                    var i, len;
                    for (i = 0, len = data.length; i < len; i += 1) {
                        var p = data[i];

                        var compliance = 0;

                        if (p.Locked == 1) {
                            compliance = 4;
                        } else if (p.Locked == 0 && p.Answered == 1) {
                            compliance = 3;
                        } else if (false) {
                            compliance = 2;
                        } else if (p.Locked == 0 && p.Answered == 0) {
                            compliance = 1;
                        }

                        var formCodeName = FormArrayName[p.WorkflowId];
                        status[formCodeName] = compliance;

                    }

                    deferred.resolveWith(this, [status]);

                },
                function (tx, err) {
                    deferred.rejectWith(this, [tx, err]);
                }
            )
        });

        return deferred.promise();
    },

    getGPSInfo: function(id){
        var deferred = $.Deferred();

        persistence.transaction(function (tx) {
            var qry = "select QuestionId, ResponseValue from Response where QuestionId in (56, 57, 58, 59, 60, 61, 62, 63) and TrialId = ?";
            var param = [id];
            tx.executeSql(
                qry,
                param,
                function (data) {
                    var gps_info = [];

                    var i, len;
                    for (i = 0, len = data.length; i < len; i += 1) {

                        var r = data[i];
                        gps_info[r.QuestionId] = r.ResponseValue;

                    }

                    deferred.resolveWith(this, [gps_info]);

                },
                function (tx, err) {
                    deferred.rejectWith(this, [tx, err]);
                }
            )
        });

        return deferred.promise();
    },

    getWithResponses: function (id) {
        var deferred = $.Deferred();

        $.when(this.get(id))
            .then(function (trial) {
                persistence.transaction(function (tx) {

                    /** load responses */
                    var qry = "select WorkflowId, QuestionId, ResponseValue from Response where TrialId = ? order by WorkflowId, QuestionId";
                    var param = [trial.TrialId];
                    tx.executeSql(
                        qry,
                        param,
                        function (data) {
                            trial.Responses = [];

                            var i, len;
                            for (i = 0, len = data.length; i < len; i += 1) {
                                var p = data[i];
                                trial.Responses.push(p);
                            }

                            /** load attachemnts */
                            var qry2 = "select AttachmentId, TrialId, WorkflowId, Name from Attachment where TrialId = ? order by TrialId, WorkflowId";
                            var param2 = [trial.TrialId];
                            tx.executeSql(
                                qry2,
                                param2,
                                function (attachments) {
                                    trial.Attachments = [];

                                    var i, len;
                                    for (i = 0, len = attachments.length; i < len; i += 1) {
                                        var a = attachments[i];
                                        trial.Attachments.push(a);
                                    }

                                    deferred.resolveWith(this, [trial]);

                                },
                                function (tx, err) {
                                    deferred.rejectWith(this, [tx, err]);
                                }
                            );
                            /** */

                        },
                        function (tx, err) {
                            deferred.rejectWith(this, [tx, err]);
                        }
                    );
                });
            }, function (err) {
            }, function (progress) {
            });

        return deferred.promise();
    }
    ,

    getWithTrialProgress: function (id) {

        var deferred = $.Deferred();

        $.when(this.get(id))
            .then(function (trial) {

                persistence.transaction(function (tx) {
                    var qry = "select w.WorkflowId, w.WorkflowName, w.WorkflowOrder, tp.Answered, tp.Locked from workflow w left outer join (select * from trialprogress where TrialId = ?) tp on w.WorkflowId = tp.WorkflowId order by w.WorkflowOrder asc";
                    var param = [trial.TrialId];
                    tx.executeSql(
                        qry,
                        param,
                        function (data) {
                            trial.Progress = [];

                            var i, len;
                            for (i = 0, len = data.length; i < len; i += 1) {
                                var p = data[i];
                                trial.Progress.push(p);
                            }

                            deferred.resolveWith(this, [trial]);

                        },
                        function (tx, err) {
                            deferred.rejectWith(this, [tx, err]);
                        }
                    )
                });
            }, function (err) {
            }, function (progress) {
            });

        return deferred.promise();

    }
    ,

    /*
     * filter parameter: { status: 0|1|2|3|4, workflowId: int}
     * */
    list: function (filter) {

        var deferred = $.Deferred();

        var noFilterQuery = "select * from trial t order by t.TrialId";
        var workflowFilterQueryInBankStatus = "select * from trial t where t.TrialId not in (select tp.TrialId from trialprogress tp where tp.WorkflowId = ?) order by t.TrialId";
        var workflowFilterQueryInProgressStatus = "select * from trial t where t.TrialId in (select tp.TrialId from trialprogress tp where tp.WorkflowId = ? and tp.Answered = 0 and tp.Locked = 0) order by t.TrialId";

        //TODO: pending for approval don't yet complete defined by business.
        var workflowFilterQueryInPendingForApprovalStatus = "select * from trial t where t.TrialId in (select tp.TrialId from trialprogress tp where tp.WorkflowId = ? and tp.Answered = -1 and tp.Locked = -1) order by t.TrialId";

        var workflowFilterQueryInPendingForLockStatus = "select * from trial t where t.TrialId in (select tp.TrialId from trialprogress tp where tp.WorkflowId = ? and tp.Answered = 1 and tp.Locked = 0) order by t.TrialId";
        var workflowFilterQueryCompletedStatus = "select * from trial t where t.TrialId in (select tp.TrialId from trialprogress tp where tp.WorkflowId = ? and tp.Locked = 1) order by t.TrialId";

        var query = noFilterQuery;
        var params = null;

        if (filter !== 'undefined' && filter != null) {
            if (filter.workflowId !== 'undefined' && filter.workflowId != null) {
                if (filter.status !== 'undefined' && filter.status != null) {


                    if (filter.status === 0) { //InBank status

                        query = workflowFilterQueryInBankStatus;
                        params = [filter.workflowId];

                    } else if (filter.status === 1) { //InProgress status

                        query = workflowFilterQueryInProgressStatus;
                        params = [filter.workflowId];

                    } else if (filter.status === 2) { //Pending for approval status

                        query = workflowFilterQueryInPendingForApprovalStatus;
                        params = [filter.workflowId];

                    } else if (filter.status === 3) { //Pending for lock status

                        query = workflowFilterQueryInPendingForLockStatus;
                        params = [filter.workflowId];

                    } else if (filter.status === 4) { //Completed status

                        query = workflowFilterQueryCompletedStatus;
                        params = [filter.workflowId];

                    }
                }
            }
        }

        persistence.transaction(function (tx) {

            tx.executeSql(
                query,
                params,
                function (data) {
                    deferred.resolveWith(this, [data]);
                },
                function (tx, err) {
                    deferred.rejectWith(this, [tx, err]);
                });

        });


        return deferred;
    }
    ,

    listAssignedToLeadSRR: function (primarySRRUserId) {

        var deferred = $.Deferred();

        var query = "select * from trial t where t.PrimarySRRUserId = ?";
        var params = [primarySRRUserId];

        persistence.transaction(function (tx) {

            tx.executeSql(
                query,
                params,
                function (data) {
                    deferred.resolveWith(this, [data]);
                },
                function (tx, err) {
                    deferred.rejectWith(this, [tx, err]);
                });

        });


        return deferred;
    },

    saveSync: function (trial) {

        var deferred = $.Deferred();

        var trialEntity = this.entity;

        trialEntity.findBy("TrialId", trial.TrialID, function (trialObject) {

            if (trialObject == null) {
                trialObject = new trialEntity();
                trialObject.TrialId = trial.TrialID;
            }

            trialObject.Name = trial.Name;
            trialObject.City = trial.City;
            trialObject.State = trial.State;
            trialObject.FarmName = trial.FarmName;
            trialObject.TrialYear = trial.TrialYear;
            trialObject.Address = trial.Addess;
            trialObject.Zip = trial.Zip;
            trialObject.CropName = CropCache[trial.CropID].Name;
            trialObject.TraitName = TraitCache[trial.TraitID].Name;
            trialObject.SiteName = SiteCache[trial.SiteID].Name;
            trialObject.County = trial.Country;
            trialObject.ComplianceStatus = trial.ComplianceStatus;
            trialObject.IRPUserId = trial.IRPUserID;
            trialObject.LeadSRRUserId = trial.LeadSRRUserID;
            trialObject.PrimarySRRUserId = trial.PrimarySRRUserID;

            trialObject.GPSLat1 = trial.GPSLat1;
            trialObject.GPSLat2 = trial.GPSLat2;
            trialObject.GPSLat3 = trial.GPSLat3;
            trialObject.GPSLat4 = trial.GPSLat4;

            trialObject.GPSLong1 = trial.GPSLong1;
            trialObject.GPSLong2 = trial.GPSLong2;
            trialObject.GPSLong3 = trial.GPSLong3;
            trialObject.GPSLong4 = trial.GPSLong4;

            persistence.add(trialObject);
            persistence.flush(function (tx, err) {
                if (typeof err !== 'undefined' && err != null) {
                    //debugger;
                    deferred.reject();
                } else {
                    deferred.notify();
                    deferred.resolve();
                }
            });
        });

        return deferred;

    }
    ,

    saveSyncArray: function (trials) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = trials.length; i < len; i += 1) {
            saveArray.push(this.saveSync(trials[i]));
        }

        var done = 0;
        var total = len;

        $.when.apply($, saveArray)
            .progress(function () {
                done++;
                deferred.notifyWith(this, [done, total]);
            })
            .done(function () {
                //debugger;
                deferred.resolveWith(this, [done, total]);
            })
            .fail(function (err) {
                //debugger;
                deferred.rejectWith(this, [done, total, err]);
            });

        return deferred.promise();

    }
    ,
}
;