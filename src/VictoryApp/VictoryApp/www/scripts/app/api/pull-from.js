
/**
 * Created by hcasa on 10/06/2015.
 */


//Get Network Status
function CheckNetworkStatus() {

    if (VictoryApp.Networking == 'ON') {
        return $.ajax({
            url: VictoryApp.APIUrl + 'health/ping',
            type: 'GET',
            dataType: 'json'
        });
    } else {
        return $.ajax({
            url: VictoryApp.APIUrl + 'health/ping/fail',
            type: 'GET',
            dataType: 'json'
        });
    }

}

//Get API health status
function GetAPIHealthStatus(){

    if (VictoryApp.Networking == 'ON') {
        return $.ajax({
            url: VictoryApp.APIUrl + 'health/status',
            type: 'GET',
            dataType: 'json'
        });
    } else {
        return $.ajax({
            url: VictoryApp.APIUrl + 'health/status/fail',
            type: 'GET',
            dataType: 'json'
        });
    }

}

//Get an attachment and their content by their attachment id (also named filedId)
function GetAttachment(fileId) {

    var deferred = $.Deferred();

    CheckNetworkStatus()
        .done(function () {
            $.ajax({
                url: VictoryApp.APIUrl + "attachment/" + fileId,
                type: 'GET',
                dataType: 'json',
            }).done(function (data) {
                deferred.resolveWith(this, [data]);
            }).fail(function (x, y, z) {
                alertify.alert("There were problems with the attachment.");
                deferred.rejectWith(this, [x, y, z]);
            });
        })
        .fail(function (x, y, z) {
            deferred.rejectWith(this, [x, y, z]);
        });

    return deferred.promise();

}

//Get an attachment info (don't including attachment content)
function GetAttachmentInfo(attachmentId, workflowId, trialId) {

    var deferred = $.Deferred();

    CheckNetworkStatus()
        .done(function () {
            $.ajax({
                url: VictoryApp.APIUrl + "attachment/?trialID=" + trialId + "&workflowID=" + workflowId,
                type: 'GET',
                dataType: 'json',
            }).done(function (attachments) {
                for (var i = 0; i < attachments.length; i++) {
                    var a = attachments[i];
                    if (a.AttachmentID == attachmentId) {
                        deferred.resolveWith(this, [a]);
                    }
                }
                deferred.resolve();
            }).fail(function (x, y, z) {
                alertify.alert("There were problems with the attachment.");
                deferred.rejectWith(this, [x, y, z]);
            });
        })
        .fail(function (x, y, z) {
            deferred.rejectWith(this, [x, y, z]);
        });

    return deferred.promise();

}

