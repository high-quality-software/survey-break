
/**
 * Created by hcasa on 10/25/2015.
 */


//Push form data to the API
function SendFormData(workflowId, toWhere, WhereinDashboard, statusId) {

    var deferred = $.Deferred();

    $.ajax({
        url: VictoryApp.APIUrl + toWhere,
        type: 'POST',
        dataType: 'json',
        data: CreateJSONtoSend(workflowId, statusId),
        contentType: "application/json",
    }).then(
        function (data) {
            if (data.Success) {
                deferred.resolveWith(this, [data]);
            } else {
                var msg = "Error in Sending Data for: " + WhereinDashboard + "= " + data.ErrorDescription + " [" + data.ExceptionMessage + "]";
                deferred.rejectWith(this, [msg]);
            }
        },
        function (error) {
            var msg = "Error making ajax request to" + VictoryApp.APIUrl + toWhere + JSON.stringify(error);
            deferred.rejectWith(this, [msg]);
        });

    return deferred.promise();
}

//Push Attachment to the API and then push form data to the API
function SendFormDataWithAttachments(workflowId, toWhere, WhereinDashboard, statusId) {

    var deferred = $.Deferred();

    var AttachString = '{"CurrentUserAlias": "' + localUserData.UserAlias + '","Data": {"AttachmentTypeID": '
        + lastAttachmentTypeObject.AttachmentTypeId + ',"Comment": "","ContentAsBase64": "' + BigPic + '","TrialID": '
        + lastTrialObject.TrialId + ',"WorkflowID": ' + workflowId + ',"Name": "' + filename + '"}}';

    $.ajax({
            url: VictoryApp.APIUrl + "attachment",
            type: 'POST',
            dataType: 'json',
            data: AttachString,
            contentType: "application/json",
        })
        .done(function (data) {
            if (data.Success) {
                GetAttachmentInfo(data.AttachmentID, workflowId, lastTrialObject.TrialId)
                    .then(function (attachmentInfo) {
                        return VictoryStorage.Attachments.saveSync(attachmentInfo);
                    })
                    .done(function () {
                        SendFormData(workflowId, toWhere, WhereinDashboard, statusId)
                            .done(function () {
                                deferred.resolve();
                            })
                            .fail(function () {
                                deferred.reject();
                            });
                    })
                    .fail(function () {
                        deferred.reject();
                    });
            } else {

                alertify.alert("Error in Sending Form with attachment for: " + WhereinDashboard + "= " + data.ErrorDescription + " [" + data.ExceptionMessage + "]");

                deferred.reject();

            }
        })
        .fail(function (x, y, z) {
            alertify.alert(x + '\n' + y + '\n' + z);
            deferred.reject();
        });

    return deferred.promise();

}

//Push Data to the API (POST)
function SendData(toWhere, WhereinDashboard, stringJSON) {

    var deferred = $.Deferred();

    $.ajax({
            url: VictoryApp.APIUrl + toWhere,
            type: 'POST',
            dataType: 'json',
            data: stringJSON,
            contentType: "application/json",
        })
        .done(function (data) {
            if (data.Success) {
                if (typeof data.Data !== 'undefined' && data.Data != null) {
                    deferred.notify();
                    deferred.resolveWith(this, [data.Data]);
                } else {
                    deferred.notify();
                    deferred.resolve();
                }
            } else {
                alertify.alert("Error in Sending Data for: " + WhereinDashboard + "= " + data.ErrorDescription + " [" + data.ExceptionMessage + "]");
                deferred.reject();
            }
        })
        .fail(function (x, y, z) {
            alertify.alert(x + '\n' + y + '\n' + z);
            deferred.reject();
        })
        .progress(function ()
        {
            deferred.notify();
        });


    return deferred.promise();

}

//Push Data to the API (PUT)
function ModifyData(toWhere, WhereinDashboard, stringJSON) {

    var deferred = $.Deferred();

    $.ajax({
            url: VictoryApp.APIUrl + toWhere,
            type: 'PUT',
            dataType: 'json',
            data: stringJSON,
            contentType: "application/json"
        })
        .done(function (data) {
            if (data.Success) {
                if (typeof data.Data !== 'undefined' && data.Data != null) {
                    deferred.resolveWith(this, [data.Data]);
                } else {
                    deferred.resolve();
                }
            } else {
                alertify.alert("Error in Sending Data for: " + WhereinDashboard + "= " + data.ErrorDescription + " [" + data.ExceptionMessage + "]");
                deferred.reject();
            }
        })
        .fail(function (x, y, z) {
            alertify.alert(x + '\n' + y + '\n' + z);
            deferred.reject();
        });

    return deferred.promise();

}

//Push Data to the API (DELETE)
function DeleteData(toWhere, WhereinDashboard, stringJSON) {

    var deferred = $.Deferred();

    $.ajax({
            url: VictoryApp.APIUrl + toWhere,
            type: 'DELETE',
            dataType: 'json',
            data: stringJSON,
            contentType: "application/json"
        })
        .done(function (data) {
            if (data.Success) {
                deferred.resolve();
            } else {
                alertify.alert("Error in Sending Data for: " + WhereinDashboard + "= " + data.ErrorDescription + " [" + data.ExceptionMessage + "]");
                deferred.reject();
            }
        })
        .fail(function (x, y, z) {
            alertify.alert(x + '\n' + y + '\n' + z);
            deferred.reject();
        });

    return deferred.promise();

}

//Push a DELETE operation to API for an attachment referenced by FileName, TrialID, and WorkflowID instead of AttachmentID
function DeleteAttachment(FileName, TrialID, WorkflowID) {

    var deferred = $.Deferred();

    var deleteAttachmentCommandAsJSON = JSON.stringify({
        "CurrentUserAlias": localUserData.UserId,
        "Data": {"TrialID": TrialID, "WorkflowID": WorkflowID, "Name": FileName}
    });

    CheckNetworkStatus()
        .done(function () {
            $.ajax({
                url: VictoryApp.APIUrl + "attachment/",
                type: 'DELETE',
                dataType: 'json',
                data: deleteAttachmentCommandAsJSON,
                contentType: "application/json",
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

