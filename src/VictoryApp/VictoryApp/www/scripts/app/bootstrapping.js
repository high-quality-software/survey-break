/**
 * Created by hcasa on 11/03/2015.
 */

$(document).ready(function () {
    log.debug('executing document ready');
    if (DisplayLogsAsAlerts) {
        alert('executing document ready');
    }

    // are we running in native app or in a browser?
    VictoryApp.RunningUnderApacheCordova = false;

    log.debug('document URL: ', JSON.stringify(document.URL));
    if (DisplayLogsAsAlerts) {
        alert('document URL: ' + JSON.stringify(document.URL));
    }

    if (document.URL.indexOf("http://") === -1
        && document.URL.indexOf("https://") === -1) {
        VictoryApp.RunningUnderApacheCordova = true;
    }

    deviceReadyDeferred = jQuery.Deferred();
    jqmReadyDeferred = jQuery.Deferred();
    //apiReadyDeferred = jQuery.Deferred();

    debugger;
    if (VictoryApp.RunningUnderApacheCordova) {
        VictoryStorage = Object.create(RelationalSqliteStorage);
        document.addEventListener("deviceready", onDeviceReady.bind(this), false);
    } else if (VictoryApp.IsDesktop) {
        VictoryStorage = Object.create(OnlineAPIStorage);
        onDeviceReady();
    } else {
        //VictoryStorage = Object.create(MemoryLocalStorage);
        VictoryStorage = Object.create(AsyncLocalStorage);
        onDeviceReady();
    }

    $.when(deviceReadyDeferred)
        .then(function () {
            log.debug('executing when device ready was resolved');
            if (DisplayLogsAsAlerts) {
                alert('executing when device ready was resolved');
            }
        })
        .then(function () {
            return SetupAPI();
        })
        .then(function () {
            log.debug('executing when api ready was resolved');
            if (DisplayLogsAsAlerts) {
                alert('executing when api ready was resolved');
            }
        })
        .then(function () {

            log.debug('updateing victory app status');
            if (DisplayLogsAsAlerts) {
                alert('updateing victory app status');
            }

            return UpdateVictoryAppStatus();

        })
        .then(function () {

                log.debug('getting previous login information');
                if (DisplayLogsAsAlerts) {
                    alert('getting previous login information');
                }

                return VictoryStorage.getLogin();
            }
        )
        .then(function (login) {

            if ($.mobile) {

                log.debug('jqm ready resolved');
                if (DisplayLogsAsAlerts) {
                    alert('jqm ready resolved');
                }

                jqmReadyDeferred.resolve();

            } else {
                $(document).on("mobileinit", function () {

                    jqmReadyDeferred.resolve();

                    log.debug('jqm ready resolved on mobile init callback');
                    if (DisplayLogsAsAlerts) {
                        alert('jqm ready resolved on mobile init callback');
                    }
                });
            }

            $.when(jqmReadyDeferred).then(function () {

                log.debug('executing when jqm ready was resolved');
                if (DisplayLogsAsAlerts) {
                    alert('executing when jqm ready was resolved');
                }

                if (!MustAppBeUpdated()) {
                    if (typeof login !== 'undefined' && login != null) {
                        localUserData = login;
                        if (typeof login != 'undefined' && login != null) {
                            //debugger;
                            adminonly = login.UserTypeId;
                        }
                        $.mobile.navigate('#Dashboard');
                    } else {
                        $.mobile.navigate('#Login');
                    }
                } else {
                    $.mobile.navigate('#Update');
                }

            });
        });

});

function SetupAPI() {

    var apiReadyDeferred = jQuery.Deferred();

    if (VictoryApp.RunningUnderApacheCordova) {

        /*Environment.current(function(env){

            log.debug('api ready resolved on Environment plugin callback');
            if (DisplayLogsAsAlerts) {
                alert('api ready resolved on Environment plugin callback');
            }

            if (env == 'dev') {
                VictoryApp.APIUrl = 'http://w3d.victory.monsanto.com/victoryAPI/API/';
            }
            else if (env == 'test') {
                VictoryApp.APIUrl = 'http://w3t.victory.monsanto.com/victoryAPI/API/';
            }
            else if (env == 'prod') {
                VictoryApp.APIUrl = 'http://w3.victory.monsanto.com/victoryAPI/API/';
            }
            else {

                VictoryApp.APIUrl = '';

                log.debug('Environment plugin callback argument env got: ' + env);
                if (DisplayLogsAsAlerts) {
                    alert('Environment plugin callback argument env got: ' + env);
                }

            }

            if (VictoryApp.APIUrl == ''){
                apiReadyDeferred.reject();
            } else {
                apiReadyDeferred.resolve();
            }

        });*/

        VictoryApp.APIUrl = 'http://w3t.victory.monsanto.com/victoryAPI/API/';
        VictoryApp.Environment = "TEST";
        apiReadyDeferred.resolve();


    } else {
        //web browser running
        if (document.domain == 'localhost') {
            VictoryApp.APIUrl = 'http://localhost:51594/API/';
            VictoryApp.Environment = "LOCALDEV";
        }
        else if (document.domain.substr(0, 3) == "w3d") {
            VictoryApp.APIUrl = 'http://w3d.victory.monsanto.com/victoryAPI/API/';
            VictoryApp.Environment = "DEV";
        }
        else if (document.domain.substr(0, 3) == "w3t") {
            VictoryApp.APIUrl = 'http://w3t.victory.monsanto.com/victoryAPI/API/';
            VictoryApp.Environment = "TEST";
        }
        else if (document.domain.substr(0, 3) == "w3.") {
            VictoryApp.APIUrl = 'http://w3.victory.monsanto.com/victoryAPI/API/';
            VictoryApp.Environment = "PROD";
        }
        else {
            VictoryApp.APIUrl = 'http://w3t.victory.monsanto.com/victoryAPI/API/';
            VictoryApp.Environment = "TEST";
        }

        log.debug('api ready resolved on web browser');
        if (DisplayLogsAsAlerts) {
            alert('api ready resolved on web browser');
        }

        apiReadyDeferred.resolve();

    }

    return apiReadyDeferred.promise();

}

function onDeviceReady() {
    log.debug('executing boostrap device ready');
    if (DisplayLogsAsAlerts) {
        alert('executing device ready');
    }

    // Handle the Cordova pause and resume events
    document.addEventListener('pause', onPause.bind(this), false);
    document.addEventListener('resume', onResume.bind(this), false);

    if (window.cordova) {
        if (window.cordova.logger) {
            window.cordova.logger.__onDeviceReady();
        }
    }

    VictoryStorage.conf();
    persistence.debug = false;

    VictoryStorage.schemaUpdate()
        .then(function () {
            log.debug('schema update success');
            if (DisplayLogsAsAlerts) {
                alert('schema update success');
            }
        })
        .then(function () {
            VictoryStorage.init();
        })
        .then(function () {
            log.debug('storage initialization success');
            if (DisplayLogsAsAlerts) {
                alert('storage initialization success');
            }
            return VictoryStorage.updateCache();
        })
        .then(
            function () {
                //debugger;

                log.debug('device ready resolved');
                if (DisplayLogsAsAlerts) {
                    alert('device ready resolved');
                }

                deviceReadyDeferred.resolve();

            },
            function () {

                //debugger;
                log.debug('device ready rejected');
                if (DisplayLogsAsAlerts) {
                    alert('device ready rejected');
                }

                deviceReadyDeferred.reject();

            });

};

function onPause() {
    // TODO: This application has been suspended. Save application state here.
};

function onResume() {
    // TODO: This application has been reactivated. Restore application state here.
};
