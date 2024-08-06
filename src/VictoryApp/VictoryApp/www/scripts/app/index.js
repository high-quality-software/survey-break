/**
 * Created by hcasa on 10/25/2015.
 */


function login() {
    var user = {UserAlias: $("#UserId").val(), Password: $("#Password").val()};
    $.ajax({
            type: "POST",
            data: JSON.stringify(user),
            url: VictoryApp.APIUrl + 'login/',
            dataType: 'json',
            contentType: "application/json",
        })
        .done(function (data, textStatus, jqXHR) {
            if (data.Success) {
                VictoryStorage.createLogin()
                    .then(function (login) {

                        login.UserId = data.User.UserID; //Victory User ID (or UserID)
                        login.UserAlias = data.User.UserAlias; //Monsanto User ID (or UserAlias)
                        login.UserTypeId = data.User.UserTypeID;
                        login.FirstName = data.User.FirstName;
                        login.LastName = data.User.LastName;
                        login.SRRMustFillEvaluation = data.User.SRRMustFillEvaluation;
                        login.LastTrialId = 0;

                        localUserData = login;
                        adminonly = data.User.UserTypeID;
                        VictoryApp.RunningInitialDownload = true;

                        return login;
                    })
                    .then(function (login) {
                        return VictoryStorage.setLogin(login);
                    })
                    .then(function () {
                        return VictoryStorage.createLastSync();
                    })
                    .then(function (lastSync) {
                        lastSync.Crops = "2015-01-01T04:00:00.000Z";
                        lastSync.Traits = "2015-01-01T04:00:00.000Z";
                        lastSync.Sites = "2015-01-01T04:00:00.000Z";
                        lastSync.Users = "2015-01-01T04:00:00.000Z";
                        lastSync.AttachmentTypes = "2015-01-01T04:00:00.000Z";
                        lastSync.Attachments = "2015-01-01T04:00:00.000Z";
                        lastSync.Trials = "2015-01-01T04:00:00.000Z";
                        lastSync.TrialNotes = "2015-01-01T04:00:00.000Z";
                        lastSync.Workflows = "2015-01-01T04:00:00.000Z";
                        lastSync.TrialProgress = "2015-01-01T04:00:00.000Z";
                        lastSync.Forms = "2015-01-01T04:00:00.000Z";
                        lastSync.SRRProfile = "2015-01-01T04:00:00.000Z";
                        lastSync.App = "2015-01-01T04:00:00.000Z";

                        return VictoryStorage.setLastSync(lastSync);

                    })
                    .then(function () {

                        //TODO: ALL THIS VARIABLE HAVE TO BE KEEPT IN SYNC WITH login.LastTrialId
                        lastTrialId = 0;
                        lastTrialObject = null;

                        if (VictoryApp.IsDesktop == false) {
                            $.mobile.navigate('#Sync');
                        } else {
                            //only admins can use desktop version
                            if (localUserData.UserTypeId == 4) {
                                $.mobile.navigate('#Dashboard');
                            } else {
                                alertify.alert("Only admin role is allowed to use Victory Desktop App");
                                $("#UserId").focus();
                            }
                        }

                    });
            } else {
                alertify.alert(data.ExceptionMessage);
                $("#UserId").focus();
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alertify.alert("Can't connect to the server.");
            $("#UserId").focus();
        });
}

$(document).on("pageshow", "#Login", function () {

    //enable all input controls
    $(".ui-state-disabled").removeClass('ui-state-disabled');

    UpdateVictoryAppStatus()
        .done(function () {

            VictoryStorage.getStorageVersion()
                .then(function (storageVersion) {
                    if (VictoryApp.IsOnLine) {

                        VictoryApp.Environment = VictoryApp.Status.Environment;

                        $("div.WebVersion").html('<span>' + 'ENV ' + VictoryApp.Environment + ' - '
                            + 'LDB v.' + storageVersion + ' - '
                            + 'APP v.' + VictoryApp.AppVersion + ' - '
                            + 'API v.' + VictoryApp.Status.APIVersion + ' - '
                            + 'DB v.' + VictoryApp.Status.DBReleaseName + '</span>');
                    } else {
                        $("div.WebVersion").html('<span>' + 'ENV ' + VictoryApp.Environment + ' - '
                            + 'LDB v.' + storageVersion + ' - '
                            + 'APP v.' + VictoryApp.AppVersion + ' / Database OFFLINE ' + '</span>');
                    }
                });
        });
});


$('#LoginForm').on('submit', function (e) {
    e.preventDefault();
    login();
});
