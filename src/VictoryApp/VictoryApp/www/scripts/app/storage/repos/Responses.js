
/**
 * Created by hcasa on 09/22/2015.
 */

LocalStorage.Responses = {

    entity: null,

    setEntity: function (entity) {
        this.entity = entity;
    },

    saveSync: function (trialId, workflowId, response) {

        var deferred = $.Deferred();

        var responseEntity = this.entity;

        deferred.notify();

        responseEntity.all()
            .filter("TrialId", "=", trialId)
            .and(new persistence.PropertyFilter("WorkflowId", "=", workflowId))
            .and(new persistence.PropertyFilter("QuestionId", "=", response.QuestionID))
            .one(null, function (result) {

                deferred.notify();

                var responseObject = null;

                if (typeof result !== 'undefined' && result != null) {
                    responseObject = result;
                } else {
                    responseObject = new responseEntity();
                    responseObject.TrialId = trialId;
                    responseObject.WorkflowId = workflowId;
                    responseObject.QuestionId = response.QuestionID;
                }

                //IMPORTANT!!!! when responses previously exists must be a synced response, if not then DON'T overwrite because a DATA LOST can occur
                if (responseObject.WaitingToSync == 1) {
                    var msg = "there are responses waiting to sync";
                    deferred.rejectWith(this, [msg]);
                } else {
                    //debugger;
                    responseObject.ResponseValue = response.ResponseValue;

                    //TODO: make a refactoring to do this better.
                    if (typeof formdata !== 'undefined' && formdata != null) {
                        if (typeof formdata.Sync !== 'undefined' && formdata.Sync != null) {
                            if (formdata.Sync == 1) {
                                responseObject.WaitingToSync = 1;
                            }
                        }
                    }

                    persistence.add(responseObject);
                    persistence.flush(function (tx, err) {
                        //debugger;
                        if (typeof err !== 'undefined' && err != null) {
                            deferred.rejectWith(this, [tx, err]);
                        }
                        else {
                            deferred.notify();
                            deferred.resolveWith(this, [responseObject]);
                        }
                    });
                }
            });

        return deferred.promise();

    },


    ////TODO: this way don't generete UUID id column value
    //saveSync: function (trialId, workflowId, response) {
    //
    //    var deferred = $.Deferred();
    //
    //    var waitingToSync = 0;
    //    if (typeof formdata !== 'undefined' && formdata != null) {
    //        if (typeof formdata.Sync !== 'undefined' && formdata.Sync != null) {
    //            if (formdata.Sync == 1) {
    //                waitingToSync = 1;
    //            }
    //        }
    //    }
    //
    //    persistence.transaction(function (tx) {
    //
    //        var qry = "insert into response " +
    //            "(TrialId, WorkflowId, QuestionId, ResponseValue, WaitingToSync) " +
    //            "values (?, ?, ?, ?, ?)";
    //        var param = [trialId, workflowId, response.QuestionID, response.ResponseValue, waitingToSync];
    //
    //        var updateDeferred = $.Deferred();
    //
    //        tx.executeSql(
    //            qry,
    //            param,
    //            function (result) {
    //                //debugger;
    //
    //                //don't update.
    //                updateDeferred.reject();
    //
    //                deferred.notify();
    //                deferred.resolveWith(this, [result]);
    //
    //            },
    //            function (tx, err) {
    //                //debugger;
    //
    //                //please, update instead
    //                updateDeferred.resolve();
    //            });
    //
    //        $.when(updateDeferred.promise())
    //            .then(function () {
    //                var qry = "update response set ResponseValue = ?, WaitingToSync = ? where TrialId = ? and WorkflowId = ? and QuestionId = ?";
    //                var param = [response.ResponseValue, waitingToSync, trialId, workflowId, response.QuestionID];
    //                tx.executeSql(
    //                    qry,
    //                    param,
    //                    function (result) {
    //                        //debugger;
    //
    //                        deferred.notify();
    //                        deferred.resolveWith(this, [result]);
    //
    //                    },
    //                    function (tx, err) {
    //                        //debugger;
    //                        deferred.rejectWith(this, [tx, err]);
    //                    });
    //            });
    //
    //    });
    //
    //
    //    deferred.notify();
    //
    //    return deferred.promise();
    //
    //},


    //saveSyncArray: function (trialId, workflowId, responses) {
    //
    //
    //    var deferred = $.Deferred();
    //
    //    var saveArray = [], i, len;
    //    for (i = 0, len = responses.length; i < len; i += 1) {
    //        var r = responses[i];
    //        saveArray.push(this.saveSync(trialId, workflowId, r));
    //    }
    //
    //    $.when.apply($, saveArray)
    //        .done(function () {
    //            //debugger;
    //            deferred.resolve();
    //        })
    //        .fail(function () {
    //            //debugger;
    //            deferred.reject();
    //        })
    //        .progress(function () {
    //            //debugger;
    //            deferred.notify();
    //        });
    //
    //    return deferred.promise();
    //
    //}
    //,

    saveSyncArray2: function (trialId, workflowId, responses) {

        var deferred = $.Deferred();

        var responseEntity = this.entity;

        var waitingToSync = 0;
        if (typeof formdata !== 'undefined' && formdata != null) {
            if (typeof formdata.Sync !== 'undefined' && formdata.Sync != null) {
                if (formdata.Sync == 1) {
                    waitingToSync = 1;
                }
            }
        }

        debugger;

        responseEntity.all().filter("TrialId", "=", trialId)
            .and(new persistence.PropertyFilter("WorkflowId", "=", workflowId))
            .list(null, function (previousResponses) {

                var i, len;
                for (i = 0, len = responses.length; i < len; i += 1) {

                    var r = responses[i];

                    var updateableResponse = Response.getResponse(r.QuestionID, previousResponses);
                    if (updateableResponse == null) {
                        updateableResponse = new responseEntity();
                        updateableResponse.TrialId = trialId;
                        updateableResponse.WorkflowId = workflowId;
                        updateableResponse.QuestionId = r.QuestionID;
                    }

                    updateableResponse.ResponseValue = r.ResponseValue;
                    updateableResponse.WaitingToSync = waitingToSync;

                    //DON'T SAVE PSEUDO-RESPONSES USED FOR CHECK ATTACHMENTS INTO FORMS.
                    if (updateableResponse.QuestionId < 8800){
                        persistence.add(updateableResponse);
                    }

                }

                persistence.flush(function (tx, err) {

                    if (typeof err !== 'undefined' && err != null) {
                        deferred.rejectWith(this, [tx, err]);
                    }
                    else {
                        deferred.notify();
                        deferred.resolve();
                    }
                });

            });


        return deferred.promise();

    },

    saveSyncFormArray: function (trialProgressArray) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = trialProgressArray.length; i < len; i += 1) {
            var trialprogress = trialProgressArray[i];
            saveArray.push(this.saveSyncArray2(trialprogress.TrialID, trialprogress.WorkflowID, trialprogress.Responses));
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

