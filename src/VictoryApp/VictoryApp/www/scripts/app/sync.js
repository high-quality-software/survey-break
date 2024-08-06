/**
 * Created by hcasa on 10/25/2015.
 */


$(document).on("pageshow", "#Sync", function (e) {

    log.debug('event: ' + e.type + ', handled by: sync.js');
    if (DisplayLogsAsAlerts) {
        alert('event: ' + e.type + ', handled by: sync.js');
    }


    if (LoaderIcon == null) {
        LoaderIcon = $("#topLoader").percentageLoader({
            width: 220,
            height: 220,
            controllable: true,
            progress: 0.0,
            onProgressUpdate: function (val) {
                LoaderIcon.setValue(Math.round(val * 100.0));
            }
        });
    }

    Steps = 0;
    LoaderIcon.setProgress(Steps / TotalSteps);
    LoaderIcon.setValue('Step ' + Steps + '/' + TotalSteps);
    $('#DownloadInfo').html("");

    VictoryStorage.getLastSync()
        .then(function (lastSync) {
            lastSyncObject = lastSync;
        })
        //uploading form data
        .then(function () {
            return UploadSync();
        })
        //downloading crops
        .then(function () {
            return downloadCrops();
        })
        //downloading traits
        .then(function () {
            return downloadTraits();
        })
        //downloading sites
        .then(function () {
            return downloadSites();
        })
        //downloading users
        .then(function () {
            return downloadUsers();
        })
        //downloading workflows
        .then(function () {
            return downloadWorkflows();
        })
        //downloading trials
        .then(function () {
            return downloadTrials();
        })
        //downloading trial notes
        .then(function () {
            return downloadTrialNotes();
        })
        //downloading attachment types
        .then(function () {
            return downloadAttachmentTypes();
        })
        //downloading form data
        .then(function () {

            //VERY VERY IMPORTANT: because formdata have the flag to evaluate WaintingToSync boolean on each Response.
            formdata = null;

            return downloadFormData();
        })
        //make persistent currently updated lastSyncObject
        .then(function () {
            $('#DownloadInfo').append('<br/> <br/> Updating LastSync... ');
            animateFunc();
            lastSyncObject.App = (new Date()).toJSON();
            return VictoryStorage.setLastSync(lastSyncObject);
        })
        .then(function () {

            var deferred = $.Deferred();

            setTimeout(
                function () {
                    deferred.resolve();
                },
                2000);

            return deferred.promise();

        })
        // navigate to next view
        .then(function (a, b, c) {

            if (VictoryApp.RunningInitialDownload) {
                VictoryApp.RunningInitialDownload = false;
            }

            if (localUserData.SRRMustFillEvaluation && localUserData.UserTypeId == 1) {
                $.mobile.navigate('#SRRProfile');
            } else {
                $.mobile.navigate('#Dashboard');
            }
        })
        .fail(function (err) {

            if (VictoryApp.RunningInitialDownload) {
                VictoryApp.RunningInitialDownload = false;
            }

            if (typeof err !== 'undefined' && err != null) {
                alertify.alert(JSON.stringify(err));
            } else {
                alertify.alert('Sync failure');
            }

        });


});

$(document).on("pagehide", "#Sync", function (e) {

    $('#DownloadInfo').html('');
    Steps = 0;
    LoaderIcon.setProgress(Steps / TotalSteps);
    LoaderIcon.setValue('Step ' + Steps);
});


function animateFunc() {
    $('#DownloadInfoDiv').scrollTop($('#DownloadInfoDiv')[0].scrollHeight);
    Steps += 1;
    LoaderIcon.setProgress(Steps / TotalSteps);
    LoaderIcon.setValue('Step ' + Steps + '/' + TotalSteps);
    $('#DownloadInfoDiv').scrollTop = $('#DownloadInfoDiv').scrollHeight;
}

function uploadFormData() {

}

function downloadCrops() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Crops... </span><div id='DownloadProgressCropCounter'></div></div>");

    animateFunc();
    var cropsUrl = VictoryApp.APIUrl + "crop" + "?lastSync=" + lastSyncObject.Crops;
    $.ajax({
        url: cropsUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (crops) {
        lastSyncObject.Crops = (new Date()).toJSON();

        if (VictoryApp.RunningInitialDownload) {
            return InitialDownload.saveCrops(crops);
        } else {
            return VictoryStorage.Crops.saveSyncArray(crops);
        }

    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressCropCounter').html(done + "/" + total);
        deferred.resolveWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressCropCounter').html("failed at: " + done + "/" + total);
        deferred.rejectWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressCropCounter').html(done + "/" + total);
    });

    return deferred.promise();
}

function downloadTraits() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Traits... </span><div id='DownloadProgressTraitCounter'></div></div>");

    animateFunc();
    var traitsUrl = VictoryApp.APIUrl + "trial/trait" + "?lastSync=" + lastSyncObject.Traits;
    $.ajax({
        url: traitsUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (traits) {
        lastSyncObject.Traits = (new Date()).toJSON();

        if (VictoryApp.RunningInitialDownload) {
            return InitialDownload.saveTraits(traits);
        } else {
            return VictoryStorage.Traits.saveSyncArray(traits);
        }

    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressTraitCounter').html(done + "/" + total);
        deferred.resolveWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressTraitCounter').html("failed at: " + done + "/" + total);
        deferred.rejectWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressTraitCounter').html(done + "/" + total);
    });


    return deferred.promise();
}

function downloadSites() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Sites... </span><div id='DownloadProgressSiteCounter'></div></div>");

    animateFunc();
    var sitesUrl = VictoryApp.APIUrl + "trial/site" + "?lastSync=" + lastSyncObject.Sites;
    $.ajax({
        url: sitesUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (sites) {
        lastSyncObject.Sites = (new Date()).toJSON();
        if (VictoryApp.RunningInitialDownload) {
            return InitialDownload.saveSites(sites);
        } else {
            return VictoryStorage.Sites.saveSyncArray(sites);
        }
    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressSiteCounter').html(done + "/" + total);
        deferred.resolveWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressSiteCounter').html("failed at: " + done + "/" + total);
        deferred.rejectWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressSiteCounter').html(done + "/" + total);
    });


    return deferred.promise();

}

function downloadUsers() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Users... </span><div id='DownloadProgressUserCounter'></div></div>");

    animateFunc();
    var usersUrl = VictoryApp.APIUrl + "user" + "?lastSync=" + lastSyncObject.Users;
    $.ajax({
        url: usersUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (users) {
        lastSyncObject.Users = (new Date()).toJSON();
        if (VictoryApp.RunningInitialDownload) {
            return InitialDownload.saveUsers(users);
        } else {
            return VictoryStorage.Users.saveSyncArray(users);
        }
    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressUserCounter').html(done + "/" + total);
        deferred.resolveWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressUserCounter').html("failed at: " + done + "/" + total);
        deferred.rejectWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressUserCounter').html(done + "/" + total);
    });

    return deferred.promise();
}

function downloadWorkflows() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Workflows...  </span><div id='DownloadProgressWorkflowCounter'></div></div>");

    animateFunc();
    var workflowUrl = VictoryApp.APIUrl + "workflow" + "?lastSync=" + lastSyncObject.Workflows;
    $.ajax({
        url: workflowUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (workflows) {
        lastSyncObject.Workflows = (new Date()).toJSON();
        if (VictoryApp.RunningInitialDownload) {
            return InitialDownload.saveWorkflows(workflows);
        } else {
            return VictoryStorage.Workflows.saveSyncArray(workflows);
        }
    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressWorkflowCounter').html(done + "/" + total);
        deferred.resolve();
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressWorkflowCounter').html(done + "/" + total);
        deferred.reject();
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressWorkflowCounter').html(done + "/" + total);
    });


    return deferred.promise();

}

function downloadTrials() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Trials... </span><div id='DownloadProgressTrialCounter'></div></div>");

    animateFunc();
    var trialUrl = VictoryApp.APIUrl + "trial" + "?lastSync=" + lastSyncObject.Trials + "&userAlias=" + localUserData.UserAlias;
    $.ajax({
        url: trialUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (trials) {
        lastSyncObject.Trials = (new Date()).toJSON();
        return VictoryStorage.saveSyncTrialArray(trials);
    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressTrialCounter').html(done + "/" + total);
        deferred.resolve();
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressTrialCounter').html(done + "/" + total);
        deferred.reject();
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressTrialCounter').html(done + "/" + total);
    });


    return deferred.promise();
}

function downloadTrialNotes() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Trial Notes... </span><div id='DownloadProgressTrialNoteCounter'></div></div>");

    animateFunc();
    var trialNoteUrl = VictoryApp.APIUrl + "trial/note" + "?lastSync=" + lastSyncObject.TrialNotes + "&userAlias=" + localUserData.UserAlias;
    $.ajax({
        url: trialNoteUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (trialNotes) {
        lastSyncObject.TrialNotes = (new Date()).toJSON();
        if (VictoryApp.RunningInitialDownload) {
            return InitialDownload.saveTrialNotes(trialNotes);
        } else {
            return VictoryStorage.TrialNotes.saveSyncArray(trialNotes);
        }
    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressTrialNoteCounter').html(done + "/" + total);
        deferred.resolve();
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressTrialNoteCounter').html(done + "/" + total);
        deferred.reject();
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressTrialNoteCounter').html(done + "/" + total);
    });


    return deferred.promise();
}

function downloadAttachmentTypes() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Attachment Types... </span><div id='DownloadProgressAttachmentTypeCounter'></div></div>");

    animateFunc();
    var attachmentTypeUrl = VictoryApp.APIUrl + "attachment/type" + "?lastSync=" + lastSyncObject.AttachmentTypes;
    $.ajax({
        url: attachmentTypeUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (attachmentTypes) {
        lastSyncObject.AttachmentTypes = (new Date()).toJSON();
        if (VictoryApp.RunningInitialDownload) {
            return InitialDownload.saveAttachmentTypes(attachmentTypes);
        } else {
            return VictoryStorage.AttachmentTypes.saveSyncArray(attachmentTypes);
        }

    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressAttachmentTypeCounter').html(done + "/" + total);
        deferred.resolveWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressAttachmentTypeCounter').html("failed at: " + done + "/" + total);
        deferred.rejectWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressAttachmentTypeCounter').html(done + "/" + total);
    });


    return deferred.promise();
}

function downloadFormData() {

    var deferred = $.Deferred();

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Downloading Form Data... </span><div id='DownloadProgressFormDataCounter'></div></div>");

    animateFunc();
    var formUrl = VictoryApp.APIUrl + "form/with-attachments" + "?lastSync=" + lastSyncObject.Forms + "&userAlias=" + localUserData.UserAlias;
    $.ajax({
        url: formUrl,
        type: 'GET',
        dataType: 'json',
    }).then(function (formDataArray) {
        lastSyncObject.Forms = (new Date()).toJSON();
        return VictoryStorage.saveAsyncFormDataArray(formDataArray);
    }).then(function (done, total) {
        $('#DownloadInfo #DownloadProgressFormDataCounter').html(done + "/" + total);
        deferred.resolveWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressFormDataCounter').html("failed at: " + done + "/" + total);
        deferred.rejectWith(this, [done, total]);
    }, function (done, total) {
        $('#DownloadInfo #DownloadProgressFormDataCounter').html(done + "/" + total);
    });

    return deferred.promise();
}

//Upload pending to sync forms (those forms saved when iPAD was offline)
function UploadSync() {

    $('#DownloadInfo').append("<div class='DownloadProgressCounter'><span> Uploading Form Data... </span><div id='UploadingProgressFormDataCounter'></div></div><br/> <br/>");
    animateFunc();

    var deferred = $.Deferred();

    //TODO: rewrite upload synchronization
    VictoryStorage.getWaitingToSyncData()
        .then(function (data) {
            return UploadSyncData(data);
        })
        .then(function (done, total) {
            $('#DownloadInfo #UploadingProgressFormDataCounter').html(done + "/" + total);
            deferred.resolveWith(this, [done, total]);
        }, function (done, total) {
            $('#DownloadInfo #UploadingProgressFormDataCounter').html("failed at: " + done + "/" + total);
            deferred.rejectWith(this, [done, total]);
        }, function (done, total) {
            $('#DownloadInfo #UploadingProgressFormDataCounter').html(done + "/" + total);
        });


    return deferred.promise();

}

function UploadSyncData(data) {

    log.debug("forms to upload: " + data.length);

    //store functions to be called sequencially
    var chain = [];

    //store parameters for functions to be called sequencially;
    var params = [];

    var deferred = $.Deferred();

    var done = 0;
    var total = data.length;

    for (var i = 0; i < data.length; i++) {
        var trialprogress = data[i];
        log.debug();

        var questionsJSON = '';
        for (var j = 0; j < trialprogress.Responses.length; j++) {
            var response = trialprogress.Responses[j];
            //don't send pseudo-question for attachments
            if (response.QuestionId < 8800) {
                questionsJSON += '{"QuestionID":' + response.QuestionId + ',"ResponseValue": "' + response.ResponseValue + '"},';
            }
        }

        if (questionsJSON.length > 0) {
            questionsJSON = questionsJSON.substring(0, questionsJSON.length - 1);
        }

        var json = '{"TrialID":' + trialprogress.TrialId + ','
            + '"WorkflowID":' + trialprogress.WorkflowId + ','
            + '"UserID":' + localUserData.UserId + ','
            + '"CurrentUserAlias":"' + localUserData.UserAlias + '",'
            + '"Locked": ' + trialprogress.Locked + ','
            + '"Answered": ' + trialprogress.Answered + ','
            + '"Responses": ['
            + questionsJSON
            + ']}'

        log.debug("-- uploading: " + json);
        params.push({WorkflowId: trialprogress.WorkflowId, Data: json});
    }

    var index = 0;
    for (var i = 0; i < params.length; i++) {
        chain.push(function () {
            var param = params[index];
            index++;

            var formCodeName = FormArrayName[param.WorkflowId];
            var json = param.Data;

            var dfd = $.Deferred();

            SendData("form", formCodeName, json)
                .then(
                    function () {
                        done++;

                        //notify progress to parent deferred
                        deferred.notifyWith(this, [done, total]);

                        dfd.resolveWith(this, [done, total]);
                    },
                    function () {
                        dfd.rejectWith(this, [done, total]);
                    },
                    function () {
                        dfd.notifyWith(this, [done, total]);
                    });

            return dfd.promise();
        });
    }


    jQuery.sequence(chain, false)
        .then(
            function () {
                deferred.notifyWith(this, [done, total]);
                deferred.resolveWith(this, [done, total]);
            },
            function () {
                deferred.rejectWith(this, [done, total]);
            },
            function () {
                deferred.notifyWith(this, [done, total]);
            });


    return deferred.promise();

}
