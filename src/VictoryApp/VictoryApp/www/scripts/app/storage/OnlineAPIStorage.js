/**
 * Created by hcasa on 10/25/2015.
 */

var OnlineAPIStorage = Object.create(Storage);

OnlineAPIStorage._Login = null;
OnlineAPIStorage._LastSync = null;

OnlineAPIStorage.conf = function () {
    persistence.store.memory.config(
        persistence,
        'victory');
};

OnlineAPIStorage.init = function () {

};

OnlineAPIStorage.updateCache = function () {

    return $.Deferred().resolve().promise();

};

OnlineAPIStorage.createLogin = function () {

    var deferred = $.Deferred();

    var login = {
        "LoginId": 1,
        "UserId": 0,
        "UserAlias": '',
        "UserTypeId": 0,
        "FirstName": '',
        "LastName": '',
        "LastTrialId": 0,
    };

    deferred.resolveWith(this, [login]);

    return deferred;
};


OnlineAPIStorage.getLogin = function () {

    return $.Deferred().resolveWith(this, [OnlineAPIStorage._Login]).promise();
};

OnlineAPIStorage.setLogin = function (login) {

    var deferred = $.Deferred();

    OnlineAPIStorage._Login = login;

    deferred.resolveWith(this, [login]);

    return deferred;
};

OnlineAPIStorage.createLastSync = function () {

    var deferred = $.Deferred();

    var lastSync = {
        "LastSyncId": 1,
        "Crops": '',
        "Traits": '',
        "Workflows": '',
        "Sites": '',
        "Users": '',
        "AttachmentTypes": '',
        "Trials": '',
        "TrialNotes": '',
        "TrialProgress": '',
        "Forms": '',
        "SRRProfile": '',
        "App": '',
    };

    deferred.resolveWith(this, [lastSync]);

    return deferred;
};

OnlineAPIStorage.getLastSync = function () {

    var deferred = $.Deferred();

    OnlineAPIStorage.createLastSync().then(function (lastSyncEmpty) {
        lastSyncEmpty.App = "2015-01-01T04:00:00.000Z";
        deferred.resolveWith(this, [lastSyncEmpty /*OnlineAPIStorage._LastSync*/]);
    });

    return deferred.promise();
};

OnlineAPIStorage.setLastSync = function (lastSync) {

    var deferred = $.Deferred();

    OnlineAPIStorage._LastSync = lastSync;

    deferred.resolveWith(this, [lastSync]);

    return deferred;
};

OnlineAPIStorage.getStorageVersion = function () {

    var deferred = $.Deferred();

    deferred.resolveWith(this, [0]);

    return deferred.promise();

};

OnlineAPIStorage.getWaitingToSyncData = function (id) {
    return $.Deferred().resolveWith(this, [[]]).promise();
};

OnlineAPIStorage.Workflows = {};

OnlineAPIStorage.Workflows.list = function () {
    var deferred = $.Deferred();

    var workflowUrl = VictoryApp.APIUrl + "workflow" + "?lastSync=" + "2015-01-01T04:00:00.000Z";
    $.ajax({
        url: workflowUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (workflows) {

        var list = [];
        var i, len;

        for (i = 0, len = workflows.length; i < len; i += 1) {
            var workflow = workflows[i];

            var workflowId = workflow.WorkflowID;
            var workflowName = workflow.Name;
            var workflowOrder = workflow.Order;

            list.push({
                "WorkflowId": workflowId,
                "WorkflowName": workflowName,
                "WorkflowOrder": workflowOrder,
            });

        }

        deferred.resolveWith(this, [list]);

    })

    return deferred.promise();
};

OnlineAPIStorage.TrialProgress = {};

OnlineAPIStorage.TrialProgress.getComplianceStatus = function () {
    var deferred = $.Deferred();

    var trialUrl = VictoryApp.APIUrl + "trial/compliance/status" + "?userAlias=" + OnlineAPIStorage._Login.UserAlias;
    $.ajax({
        url: trialUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (status) {

        var list = [];
        var i, len;

        for (i = 0, len = status.length; i < len; i += 1) {
            var item = status[i];

            list.push({
                "WorkflowId": item.WorkflowID,
                "WorkflowName": item.WorkflowName,
                "WorkflowOrder": item.WorkflowOrder,
                "InBlank": item.InBlank,
                "InProgress": item.InProgress,
                "PendingForApproval": item.PendingForApproval,
                "PendingForLock": item.PendingForLock,
                "Completed": item.Completed,
                "Total": item.Total,
            });

        }

        deferred.resolveWith(this, [list]);

    });

    return deferred.promise();
};

OnlineAPIStorage.Trials = {};

OnlineAPIStorage.Trials.list = function (filter) {

    var deferred = $.Deferred();

    var trialUrl = VictoryApp.APIUrl + "trial/list" + "?userAlias=" + OnlineAPIStorage._Login.UserAlias;

    if (filter !== 'undefined' && filter != null) {
        if (filter.workflowId !== 'undefined' && filter.workflowId != null) {

            if (filter.workflowId != "") {
                trialUrl += "&workflowId=" + filter.workflowId;
            }


            if (filter.status !== 'undefined' && filter.status != null) {

                if (filter.status != 999) {
                    trialUrl += "&statusId=" + filter.status;
                }

            }
        }
    }

    $.ajax({
        url: trialUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (trials) {

        var list = [];
        var i, len;

        for (i = 0, len = trials.length; i < len; i += 1) {
            var trial = trials[i];

            var trialId = trial.TrialID;
            var name = trial.Name;
            var farmName = trial.FarmName;
            var trialYear = trial.TrialYear;
            var cropName = trial.CropName;
            var traitName = trial.TraitName;
            var siteName = trial.SiteName;

            list.push({
                "TrialId": trialId,
                "Name": name,
                "CropName": cropName,
                "TraitName": traitName,
                "SiteName": siteName,
                "TrialYear": trialYear,
                "FarmName": farmName,
            });

        }

        deferred.resolveWith(this, [list]);

    });

    return deferred.promise();
};

OnlineAPIStorage.Trials.getComplianceStatus = function (id) {

    var deferred = $.Deferred();

    var trialUrl = VictoryApp.APIUrl + "form/trial/compliance/status/" + id + "?userAlias=" + OnlineAPIStorage._Login.UserAlias;
    $.ajax({
        url: trialUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (status) {

        var list = [];
        var i, len;

        for (i = 0, len = status.length; i < len; i += 1) {
            var item = status[i];

            list.push({
                "WorkflowId": item.WorkflowID,
                "WorkflowName": item.WorkflowName,
                "WorkflowOrder": item.WorkflowOrder,
                "InBlank": item.InBlank,
                "InProgress": item.InProgress,
                "PendingForApproval": item.PendingForApproval,
                "PendingForLock": item.PendingForLock,
                "Completed": item.Completed,
                "Total": item.Total,
            });

        }

        deferred.resolveWith(this, [list]);

    });

    return deferred.promise();
};

OnlineAPIStorage.Trials.getWithTrialProgress = function (id) {

    var deferred = $.Deferred();

    var trialUrl = VictoryApp.APIUrl + "trial/get/" + id + "?userAlias=" + OnlineAPIStorage._Login.UserAlias;

    $.ajax({
        url: trialUrl,
        type: 'GET',
        dataType: 'json',
    }).then(
        function (res) {

            var trial = {TrialId: id, Progress: []};
            if (res.Success == true) {

                var i, len;

                for (i = 0, len = res.Data.length; i < len; i += 1) {
                    var p = res.Data[i];
                    trial.Progress.push({
                        WorkflowId: p.WorkflowID,
                        WorkflowName: p.WorkflowName,
                        Locked: (p.Locked == null) ? null : (p.Locked == false) ? 0 : 1,
                        Answered: (p.Answered == null) ? null : (p.Answered == false) ? 0 : 1
                    })
                }

                deferred.resolveWith(this, [trial]);
            } else {
                deferred.reject();
            }

        },
        function () {
            deferred.reject();
        });

    return deferred.promise();

};


OnlineAPIStorage.Trials.getWithResponses = function (id) {
    var deferred = $.Deferred();

    var trialUrl = VictoryApp.APIUrl + "form/trial/get/" + id + "?userAlias=" + OnlineAPIStorage._Login.UserAlias;
    $.when(OnlineAPIStorage.Trials.getWithTrialProgress(id))
        .then(function (trial) {
            return $.ajax({
                    url: trialUrl,
                    type: 'GET',
                    dataType: 'json',
                })
                .then(
                    function (res) {

                        //var trial = {TrialId: id, Responses: [], Attachments: []};
                        trial.Responses = [];
                        trial.Attachments = [];

                        var i, len;
                        for (i = 0, len = res.length; i < len; i += 1) {

                            var p = res[i];

                            var i2, len2;

                            for (i2 = 0, len2 = p.Responses.length; i2 < len2; i2 += 1) {
                                var r = p.Responses[i2];
                                trial.Responses.push({
                                    'WorkflowId': p.WorkflowID,
                                    'QuestionId': r.QuestionID,
                                    'ResponseValue': r.ResponseValue,
                                });
                            }

                            for (i2 = 0, len2 = p.Attachments.length; i2 < len2; i2 += 1) {
                                var a = p.Attachments[i2];
                                trial.Attachments.push({
                                    'WorkflowId': p.WorkflowID,
                                    'Name': a.Name,
                                });
                            }
                        }

                        deferred.resolveWith(this, [trial]);


                    });

        });


    return deferred.promise();
};

OnlineAPIStorage.TrialNotes = {};

OnlineAPIStorage.TrialNotes.list = function(filter){
    var deferred = $.Deferred();

    var trialNotesUrl = VictoryApp.APIUrl + "trial/note/" + filter.TrialId;

    $.ajax({
        url: trialNotesUrl,
        type: 'GET',
        dataType: 'json',
    }).then(
        function (data) {

            var list = [];

            var i, len;
            for (i = 0, len = data.length; i < len; i += 1) {
                var tn = data[i];
                list.push({
                    TrialId: tn.TrialID,
                    TrialNoteId: tn.TrialNoteID,
                    Content: tn.Content,
                })
            }

            deferred.resolveWith(this, [list]);

        },
        function () {
            deferred.reject();
        });

    return deferred.promise();
};

OnlineAPIStorage.TrialNotes.get = function(trialNoteID){
    var deferred = $.Deferred();

    var trialNoteDetailUrl = VictoryApp.APIUrl + "trial/note/detail/" + trialNoteID;

    $.ajax({
        url: trialNoteDetailUrl,
        type: 'GET',
        dataType: 'json',
    }).then(
        function (tn) {

            var note = {
                TrialId: tn.TrialID,
                TrialNoteId: tn.TrialNoteID,
                Content: tn.Content,
            };

            deferred.resolveWith(this, [note]);

        },
        function () {
            deferred.reject();
        });

    return deferred.promise();
};

OnlineAPIStorage.TrialNotes.saveSync = function(trialNote){

    return $.Deferred().resolve().promise();

};

OnlineAPIStorage.TrialNotes.delete = function(TrialNoteId){

    return $.Deferred().resolve().promise();

};


OnlineAPIStorage.saveFormData = function (trialId, workflowId, locked, responses) {

    return $.Deferred().resolve().promise();

};

OnlineAPIStorage.clear = function () {

    return $.Deferred().resolve().promise();

};