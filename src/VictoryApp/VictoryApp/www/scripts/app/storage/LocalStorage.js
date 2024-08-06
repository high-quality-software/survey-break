
/**
 * Created by hcasa on 11/24/2015.
 */

var LocalStorage = Object.create(Storage);

LocalStorage.schemaUpdate = function () {
    log.debug('executing schema update function');

    var deferred = $.Deferred();
    var initDeferred = $.Deferred();
    var current_version = 0;

    persistence.migrations.init(function () {
        initDeferred.resolve();
    });


    $.when(initDeferred)
        .then(function () {
            return VictoryStorage.getStorageVersion();
        })
        .then(function (storage_version) {
            current_version = storage_version;
        })
        .then(function () {
            if (current_version < 1) {
                var m1 = $.Deferred();
                persistence.migrate(1, function () {
                    m1.resolve();
                });
                return m1.promise();
            }
        })
        .then(function () {
            if (current_version < 2) {
                var m2 = $.Deferred();
                persistence.migrate(2, function () {
                    m2.resolve();
                });
                return m2.promise();
            }
        })
        .then(function () {
            if (current_version < 3) {
                var m3 = $.Deferred();
                persistence.migrate(3, function () {
                    m3.resolve();
                });
                return m3.promise();
            }
        })
        .then(function () {
            if (current_version < 4) {
                var m4 = $.Deferred();
                persistence.migrate(4, function () {
                    m4.resolve();
                });
                return m4.promise();
            }
        })
        .then(function () {
            if (current_version < 5) {
                var m5 = $.Deferred();
                persistence.migrate(5, function () {
                    m5.resolve();
                });
                return m5.promise();
            }
        })
        .then(function () {
            if (current_version < 6) {
                var m6 = $.Deferred();
                persistence.migrate(6, function () {
                    m6.resolve();
                });
                return m6.promise();
            }
        })
        .then(function () {
            deferred.resolve();
        });

    return deferred.promise();

};


LocalStorage.init = function () {

    log.debug('executing init function');

    this._repo.Login = persistence.define('Login', {
        "LoginId": 'INT',
        "UserId": 'INT',
        "UserAlias": 'TEXT',
        "UserTypeId": 'INT',
        "FirstName": 'TEXT',
        "LastName": 'TEXT',
        "LastTrialId": 'INT',
    });
    this.Login.setEntity(this._repo.Login);

    this._repo.LastSync = persistence.define('LastSync', {
        "LastSyncId": 'INT',
        "Crops": 'TEXT',
        "Traits": 'TEXT',
        "Workflows": 'TEXT',
        "Sites": 'TEXT',
        "Users": 'TEXT',
        "AttachmentTypes": 'TEXT',
        "Trials": 'TEXT',
        "TrialNotes": 'TEXT',
        "TrialProgress": 'TEXT',
        "Forms": 'TEXT',
        "SRRProfile": 'TEXT',
        "App": 'TEXT',
    });
    this.LastSync.setEntity(this._repo.LastSync);

    this._repo.Crop = persistence.define('Crop', {
        "CropId": 'INT',
        "Name": 'TEXT',
    });
    this.Crops.setEntity(this._repo.Crop);


    this._repo.Trait = persistence.define('Trait', {
        "TraitId": 'INT',
        "Name": 'TEXT',
    });
    this.Traits.setEntity(this._repo.Trait);

    this._repo.Site = persistence.define('Site', {
        "SiteId": 'INT',
        "Name": 'TEXT',
    });
    this.Sites.setEntity(this._repo.Site);

    this._repo.User = persistence.define('User', {
        "UserId": 'INT',
        "UserAlias": 'TEXT',
        "FirstName": 'TEXT',
        "LastName": 'TEXT',
        "UserTypeId": 'INT',
        "SiteLocation": 'TEXT',
        "OfficeNumber": 'TEXT',
    });
    this.Users.setEntity(this._repo.User);

    this._repo.Workflow = persistence.define('Workflow', {
        "WorkflowId": 'INT',
        "WorkflowName": 'TEXT',
        "WorkflowOrder": 'INT',
    });
    this.Workflows.setEntity(this._repo.Workflow);

    this._repo.Trial = persistence.define('Trial', {
        "TrialId": 'INT',
        "Name": 'TEXT',
        "CropName": 'TEXT',
        "TraitName": 'TEXT',
        "SiteName": 'TEXT',
        "IRPUserId": 'INT',
        "LeadSRRUserId": 'INT',
        "PrimarySRRUserId": 'INT',
        "TrialYear": 'INT',
        "FarmName": 'TEXT',
        "Address": 'TEXT',
        "City": 'TEXT',
        "County": 'TEXT',
        "State": 'TEXT',
        "Zip": 'TEXT',
        "ComplianceStatus": 'TEXT',
    });
    this.Trials.setEntity(this._repo.Trial, this._repo.Crop);

    this._repo.TrialProgress = persistence.define('TrialProgress', {
        "TrialId": 'INT',
        "WorkflowId": 'INT',
        "UserId": 'INT',
        "Answered": 'BOOL',
        "Locked": 'BOOL',
    });
    this.TrialProgress.setEntity(this._repo.TrialProgress);

    this._repo.Response = persistence.define('Response', {
        "TrialId": 'INT',
        "WorkflowId": 'INT',
        "QuestionId": 'INT',
        "ResponseValue": 'TEXT',
        "WaitingToSync": 'BOOL'
    });
    this.Responses.setEntity(this._repo.Response);

    this._repo.AttachmentTypes = persistence.define('AttachmentType', {
        "AttachmentTypeId": 'INT',
        "Name": 'TEXT',
    });
    this.AttachmentTypes.setEntity(this._repo.AttachmentTypes);

    this._repo.Attachments = persistence.define('Attachment', {
        "AttachmentId": 'TEXT',
        "TrialId": 'INT',
        "WorkflowId": 'INT',
        "Name": 'TEXT',
    });
    this.Attachments.setEntity(this._repo.Attachments);

    this._repo.TrialNotes = persistence.define('TrialNotes', {
        "TrialNoteId": 'TEXT',
        "TrialId": 'INT',
        "Content": 'TEXT',
    });
    this.TrialNotes.setEntity(this._repo.TrialNotes);

};

LocalStorage.getLogin = function () {

    var deferred = $.Deferred();
    var repo = this._repo;

    repo.Login.findBy("LoginId", 1, function (login) {
        deferred.resolveWith(this, [login]);
    });

    return deferred;
};

LocalStorage.setLogin = function (login) {

    var deferred = $.Deferred();

    persistence.add(login);
    persistence.flush(function () {
        deferred.resolveWith(this, [login]);
    });

    return deferred;
};

LocalStorage.createLogin = function () {

    var deferred = $.Deferred();
    var repo = this._repo;

    var login = new repo.Login({LoginId: 1});
    deferred.resolveWith(this, [login]);

    return deferred;
};

LocalStorage.removeLogin = function () {

    var deferred = $.Deferred();
    var repo = this._repo;

    //TODO: call persistenceJS

    return deferred;
};

LocalStorage.getStorageVersion = function () {

    var deferred = $.Deferred();

    var res1 = persistence.transaction(function (tx) {
        var res2 = tx.executeSql("select max(current_version) as version from schema_version", [], function (res) {
            var v = res[0].version;

            var storageVersion = 0;

            if (typeof v !== 'undefined' && v != null) {
                storageVersion = v;
            }

            deferred.resolveWith(this, [storageVersion]);

            log.debug('reading schema db version: ' + storageVersion);
            if (DisplayLogsAsAlerts) {
                alert('reading schema db version: ' + storageVersion);
            }

        });
    });

    return deferred.promise();

};

LocalStorage.getLastSync = function () {

    var deferred = $.Deferred();
    var repo = this._repo;

    repo.LastSync.findBy("LastSyncId", 1,
        function (lastSync) {
            deferred.resolveWith(this, [lastSync]);
        },
        function (err) {
            //debugger;
            if (typeof err !== 'undefined' && err != null) {
                //debugger;
            }
        });

    return deferred;
};

LocalStorage.setLastSync = function (lastSync) {

    var deferred = $.Deferred();

    persistence.add(lastSync);
    persistence.flush(function (a, b, c) {
        //debugger;
        deferred.resolveWith(this, [lastSync]);
    });

    return deferred;
};

LocalStorage.createLastSync = function () {

    var deferred = $.Deferred();
    var repo = this._repo;

    var lastSync = new repo.LastSync({LastSyncId: 1});
    deferred.resolveWith(this, [lastSync]);

    return deferred;
};

LocalStorage.removeLastSync = function () {

    var deferred = $.Deferred();
    var repo = this._repo;

    //TODO: call persistenceJS to remove

    return deferred;
};

LocalStorage.updateCache = function () {
    var deferred = $.Deferred();

    var cropsDeferred = $.Deferred();
    var traitsDeferred = $.Deferred();
    var usersDeferred = $.Deferred();
    var sitesDeferred = $.Deferred();
    var attachmentTypesDeferred = $.Deferred();

    this.Crops.entity.all().list(function (crops) {
        var i, len;
        for (i = 0, len = crops.length; i < len; i += 1) {
            CropCache[crops[i].CropId] = crops[i];
        }
        cropsDeferred.resolve();
    });

    this.Traits.entity.all().list(function (traits) {
        var i, len;
        for (i = 0, len = traits.length; i < len; i += 1) {
            TraitCache[traits[i].TraitId] = traits[i];
        }
        traitsDeferred.resolve();
    });

    this.Sites.entity.all().list(function (sites) {
        var i, len;
        for (i = 0, len = sites.length; i < len; i += 1) {
            SiteCache[sites[i].SiteId] = sites[i];
        }
        sitesDeferred.resolve();
    });

    this.Users.entity.all().list(function (users) {
        var i, len;
        for (i = 0, len = users.length; i < len; i += 1) {
            UserCache[users[i].UserId] = users[i];
        }
        usersDeferred.resolve();
    });

    this.AttachmentTypes.entity.all().list(function (attachmentTypes) {
        var i, len;
        for (i = 0, len = attachmentTypes.length; i < len; i += 1) {

            var name = attachmentTypes[i].Name.toUpperCase();
            AttachmentTypeCache[name] = attachmentTypes[i];

        }
        attachmentTypesDeferred.resolve();
    });


    $.when(cropsDeferred, traitsDeferred, sitesDeferred, usersDeferred, attachmentTypesDeferred).then(function () {
        deferred.resolve();
    });

    return deferred;
}

LocalStorage.saveSyncTrialArray = function (trials) {

    var deferred = $.Deferred();

    $.when(this.updateCache())
        .then(function () {

            if (VictoryApp.RunningInitialDownload) {
                return InitialDownload.saveTrials(trials);
            } else {
                return VictoryStorage.Trials.saveSyncArray(trials);
            }

        }).done(function (done, total) {
            //debugger;
            deferred.resolveWith(this, [done, total]);
        })
        .fail(function (done, total) {
            //debugger;
            deferred.rejectWith(this, [done, total]);
        })
        .progress(function (done, total) {
            //debugger;
            deferred.notifyWith(this, [done, total]);
        });

    return deferred.promise();

};

LocalStorage.saveAsyncFormDataArray = function (formDataArray) {

    var deferred = $.Deferred();

    var doneSum = 0;
    var totalSum = 0;

    var trialProgressDeferred = null;
    if (VictoryApp.RunningInitialDownload) {
        trialProgressDeferred = InitialDownload.saveTrialProgress(formDataArray);
    } else {
        trialProgressDeferred = VictoryStorage.TrialProgress.saveSyncFormArray(formDataArray);
    }

    $.when(trialProgressDeferred)
        .then(function (done, total) {
            doneSum += done;
            totalSum += total;
            if (VictoryApp.RunningInitialDownload) {
                return InitialDownload.saveResponses(formDataArray);
            } else {
                return VictoryStorage.Responses.saveSyncFormArray(formDataArray);
            }

        })
        .then(function (done, total) {
            doneSum += done;
            totalSum += total;
            if (VictoryApp.RunningInitialDownload) {
                return InitialDownload.saveAttachments(formDataArray);
            } else {
                return VictoryStorage.Attachments.saveSyncFormArray(formDataArray);
            }

        })
        .done(function (done, total) {
            //debugger;
            deferred.resolveWith(this, [doneSum + done, totalSum + total]);
        })
        .fail(function () {
            //debugger;
            deferred.rejectWith(this, [doneSum + done, totalSum + total]);
        })
        .progress(function (done, total) {
            //debugger;
            deferred.notifyWith(this, [doneSum + done, totalSum + total]);
        });

    return deferred.promise();
};

LocalStorage.saveFormData = function (trialId, workflowId, locked, responses) {

    var deferred = $.Deferred();

    $.when(VictoryStorage.Responses.saveSyncArray2(trialId, workflowId, responses))
        .then(function () {

            //debugger;
            var trialProgress = {
                TrialID: trialId,
                WorkflowID: workflowId,
                UserID: lastTrialObject.UserId,
                Locked: locked,
                Responses: responses,
            };

            return VictoryStorage.TrialProgress.saveSync(trialProgress);
        })
        .then(function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });


    return deferred.promise();
};

LocalStorage.getWaitingToSyncData = function () {

    var deferred = $.Deferred();

    var query = "select r.TrialId, r.WorkflowId, tp.Locked, r.QuestionId, r.ResponseValue from trialprogress tp inner join response r on tp.TrialId = r.TrialId and tp.WorkflowId = r.WorkflowId where r.WaitingToSync = 1 order by r.TrialId, r.WorkflowId, r.QuestionId";

    persistence.transaction(function (tx) {
        tx.executeSql(
            query,
            null,
            function (data) {

                var waitingToSyncData = [];
                var idx = 0;
                var break_loop = false;

                if (data.length > 0) {

                    do {
                        var trialprogress = {};
                        var trialId = data[idx].TrialId;
                        var workflowId = data[idx].WorkflowId;

                        trialprogress.TrialId = trialId;
                        trialprogress.WorkflowId = workflowId;
                        trialprogress.Locked = data[idx].Locked;
                        trialprogress.Responses = [];

                        do {

                            trialprogress.Responses.push({
                                'QuestionId': data[idx].QuestionId,
                                'ResponseValue': data[idx].ResponseValue,
                            });

                            idx++;

                            if (idx >= data.length) {
                                break_loop = true;
                            } else if (trialId !== data[idx].TrialId
                                || workflowId !== data[idx].WorkflowId) {
                                break_loop = true;
                            }

                        }
                        while (!break_loop);

                        waitingToSyncData.push(trialprogress);

                        if (idx >= data.length) {
                            break_loop = true;
                        } else {
                            break_loop = false;
                        }

                    }
                    while (!break_loop);
                }

                deferred.resolveWith(this, [waitingToSyncData])

            },
            function (tx, err) {
                deferred.rejectWith(this, [tx, err]);
            });
    });

    return deferred.promise();

};

LocalStorage.clear = function () {

    log.debug('executing clear function');

    var lastSyncDeferred = $.Deferred();
    var loginDeferred = $.Deferred();
    var workflowDeferred = $.Deferred();
    var sitesDeferred = $.Deferred();
    var cropsDeferred = $.Deferred();
    var traitsDeferred = $.Deferred();
    var usersDeferred = $.Deferred();
    var attachmentTypesDeferred = $.Deferred();
    var attachmentsDeferred = $.Deferred();
    var trialsDeferred = $.Deferred();
    var trialNotesDeferred = $.Deferred();
    var trialProgressDeferred = $.Deferred();
    var responsesDeferred = $.Deferred();

    persistence.transaction(function (tx) {

        tx.executeSql("DELETE FROM LastSync", [], function () {
            lastSyncDeferred.resolve();
        }, function () {
            lastSyncDeferred.reject();
        });

        tx.executeSql("DELETE FROM Login", [], function () {
            loginDeferred.resolve();
        }, function () {
            loginDeferred.reject();
        });

        tx.executeSql("DELETE FROM Workflow", [], function () {
            workflowDeferred.resolve();
        }, function () {
            workflowDeferred.reject();
        });

        tx.executeSql("DELETE FROM Crop", [], function () {
            cropsDeferred.resolve();
        }, function () {
            cropsDeferred.reject();
        });

        tx.executeSql("DELETE FROM Trait", [], function () {
            traitsDeferred.resolve();
        }, function () {
            traitsDeferred.reject();
        });

        tx.executeSql("DELETE FROM User", [], function () {
            usersDeferred.resolve();
        }, function () {
            usersDeferred.reject();
        });

        tx.executeSql("DELETE FROM Site", [], function () {
            sitesDeferred.resolve();
        }, function () {
            sitesDeferred.reject();
        });

        tx.executeSql("DELETE FROM Attachment", [], function () {
            attachmentsDeferred.resolve();
        }, function () {
            attachmentsDeferred.reject();
        });

        tx.executeSql("DELETE FROM AttachmentType", [], function () {
            attachmentTypesDeferred.resolve();
        }, function () {
            attachmentTypesDeferred.reject();
        });

        tx.executeSql("DELETE FROM Trial", [], function () {
            trialsDeferred.resolve();
        }, function () {
            trialsDeferred.reject();
        });

        tx.executeSql("DELETE FROM TrialNotes", [], function () {
            trialNotesDeferred.resolve();
        }, function () {
            trialNotesDeferred.reject();
        });

        tx.executeSql("DELETE FROM TrialProgress", [], function () {
            trialProgressDeferred.resolve();
        }, function () {
            trialProgressDeferred.reject();
        });

        tx.executeSql("DELETE FROM Response", [], function () {
            responsesDeferred.resolve();
        }, function () {
            responsesDeferred.reject();
        });

    });


    var clearDeferred = $.Deferred();

    $.when(
        lastSyncDeferred,
        loginDeferred,
        cropsDeferred,
        traitsDeferred,
        usersDeferred,
        sitesDeferred,
        workflowDeferred,
        attachmentTypesDeferred,
        attachmentsDeferred,
        trialsDeferred,
        trialNotesDeferred,
        trialProgressDeferred,
        responsesDeferred).then(
        function () {
            log.debug('Clear Victory Storage successfuly');
            clearDeferred.resolve();
        },
        function () {
            log.debug('Clear Victory Storage FAIL');
            clearDeferred.reject();
        });

    return clearDeferred.promise();

};