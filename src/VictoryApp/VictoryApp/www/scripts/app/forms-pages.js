/**
 * Created by hcasa on 09/29/2015.
 */

$(document).on("pagebeforechange", function (e, data) {

    if (typeof data.toPage == 'string') {
        if (VictoryApp.Status != null) {
            if (MustAppBeUpdated()) {
                data.toPage = "#Update";
            }
        }
    }
});


$(document).on("pageshow", "#Dashboard", function (e) {

    log.debug('event: ' + e.type + ', handled by: dashboard.js');
    if (DisplayLogsAsAlerts) {
        alert('event: ' + e.type + ', handled by: dashboard.js');
    }

    $("#TrialList").find("*").removeClass('ui-state-disabled');
    $('.ui-columns-search').parent().find('div').removeClass("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset").css({
        "box-shadow": "0 0 0 black"
    });
    $("#TrialList").find('.ui-columns-table').css({
        "height": ($('.innerDiv2').height() - 51) + "px", "overflow-y": "auto"
    });
    $("#TrialList").find(".ui-table-footer").css({
        'display': 'none'
    });

    $.mobile.loading('show');

    UpdateVictoryAppStatus()
        .then(function () {
            return VictoryStorage.getLastSync();
        }).then(function (lastSync) {

            var deferred = $.Deferred();

            if (VictoryApp.IsDesktop == true) {

                $(".Syncbtn").hide();
                deferred.resolve();

            } else if (lastSync.App == "2015-01-01T04:00:00.000Z") {

                //if we've found an inconsistent last sync date we assume a initial download issue happened
                $.when(VictoryStorage.clear()).then(function () {
                    deferred.reject();
                    $.mobile.navigate('#Login');
                });

            } else {

                var lastSyncDate = new Date(lastSync.App);
                var todayDate = new Date();
                var timeDiff = Math.abs(lastSyncDate.getTime() - todayDate.getTime());
                var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
                if (diffDays == 0) {
                    $(".Syncbtn").html("Last Sync: " + lastSyncDate.toDateString() + " " + lastSyncDate.toLocaleTimeString());
                } else {
                    $(".Syncbtn").html("Last Sync: " + lastSyncDate.toDateString() + " " + lastSyncDate.toLocaleTimeString() + " <span class=\"badge\">" + diffDays + " Days</span>");
                }


                deferred.resolve();

            }

            return deferred.promise();

        })
        .then(function () {
            if (VictoryApp.Status != null) {
                VictoryStorage.getStorageVersion().then(function (storageVersion) {
                    $("div.WebVersion").html('<span>' + 'ENV ' + VictoryApp.Environment + ' - '
                        + 'LDB v.' + storageVersion + ' - '
                        + 'APP v.' + VictoryApp.AppVersion + ' - '
                        + 'API v.' + VictoryApp.Status.APIVersion + ' - '
                        + 'DB v.' + VictoryApp.Status.DBReleaseName + '</span>');
                });
            } else {
                VictoryStorage.getStorageVersion().then(function (storageVersion) {
                    $("div.WebVersion").html('<span>'
                        + 'ENV ' + VictoryApp.Environment + ' - '
                        + 'LDB v.' + storageVersion + ' - '
                        + 'APP v.' + VictoryApp.AppVersion + ' / Database OFFLINE' + '</span>');
                });
            }
        })
        .then(function () {
            return VictoryStorage.getLogin();
        })
        .then(function (login) {

            if (typeof login !== 'undefined' && login != null) {
                var panel = '<div data-role="panel" id="pushPanel" data-display="overlay" data-position="right" data-theme="b">' +
                    '<div data-role="main">' +
                    '<h3 style="text-align: center;">' + login.Name + '</h3>' +
                    '<div data-role="collapsible" data-inset="false">' +
                    '<h4>Compliance Trials</h4>';
                panel += '</div>' +
                    '<div data-role="collapsible" data-inset="false" class="ui-disabled" style="opacity:.8;">' +
                    '<h4>QMS</h4>';
                panel += '</div>' +
                    '<div data-role="collapsible" data-inset="false">' +
                    '<h4>Admin</h4>' +
                    '<ul data-role="listview" class="ui-listview">' +
                    '<li><a href="javascript:void(0)" onclick="Logoff()"class="ui-btn ui-corner-all ui-shadow ui-btn-b" style="text-align: center;">Logoff</a></li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }

            if (typeof login !== 'undefined' && login != null) {
                if (login.SRREval && login.UserTypeID == 1) {
                    $.mobile.navigate('#SRR-Profile');
                }
                else {
                    lastTrialId = login.LastTrialId;
                    if (lastTrialId > 0) //what was last trial opened?
                    {
                        VictoryStorage.Trials.getWithTrialProgress(lastTrialId)
                            .then(function (trial) {
                                dvtitle.innerHTML = "Trial ID: " + trial.TrialId;
                                dvcontainer.innerHTML = GetComplianceTable(trial);
                                $('#CDashboardTrialNote').attr('onclick', 'OpenPopup(' + trial.TrialId + ', "popup_PageComplianceTrialNote");');

                            });
                    } else {
                        VictoryStorage.Workflows.list()
                            .then(function (workflows) {
                                dvtitle.innerHTML = "";
                                dvcontainer.innerHTML = GetEmptyComplianceTable(workflows);
                                $('#CDashboardTrialNote').attr('onclick', '');
                            });
                    }
                }
            }
            else {
                $.mobile.navigate('#Login');
            }
        })
        .then(function () { //finally list trials
            return VictoryStorage.Trials.list().then(function (data) {
                loadTrialList(data);
                //debugger;
            });
        })
        .then(function () {
            return LoadFilterTable();
        })
        .then(function () {
            TableResize()
            UpdateTrialList();
            UpdateDiv();
            $.mobile.loading('hide');

        });

});

$(document).on("pageshow", "#SRRProfile", function (e) {

    log.debug('event: ' + e.type + ', handled by: dashboard.js');
    if (DisplayLogsAsAlerts) {
        alert('event: ' + e.type + ', handled by: dashboard.js');
    }

    $.mobile.loading('show');
    $.when(VictoryStorage.Users.list())
        .then(function (users) {

            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u.UserTypeId == 1) {
                    $('#backup_SRR_Name').append($('<option/>', {
                        value: u.UserId,
                        text: u.FirstName + ' ' + u.LastName
                    }));
                }
            }

        })
        .then(function () {
            $.mobile.loading('hide');
        });

});

$(document).on("pageshow", "#Form_Planting", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".Plant_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".Plant_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".Plant_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".Plant_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }
    $("#Physical_Markers input[type='radio']").checkboxradio("refresh");
    $("#Commercial_Soybeans_Planted input[type='radio']").checkboxradio("refresh");
    $("#Type_of_Isolation input[type='radio']").checkboxradio("refresh");
    $("#SRR_or_Delegate_Present input[type='radio']").checkboxradio("refresh");
    $("#Seed_Tender_Used input[type='radio']").checkboxradio("refresh");
    $("#Seed_Tender_Cleaned_Out input[type='radio']").checkboxradio("refresh");
    $("#Planter_Cleaned_Out input[type='radio']").checkboxradio("refresh");
    $("#Seed_Leftover_after_Planting input[type='radio']").checkboxradio("refresh");
    $("#Disposition_of_Leftover input[type='radio']").checkboxradio("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".Plant").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".Plant").removeClass("ui-state-disabled");
    }

});

$(document).on("pageshow", "#Form_Site_Selection_Checklist", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".SSC_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".SSC_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".SSC_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".SSC_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }
    $("#Located_Flood_Plain input[type='radio']").checkboxradio("refresh");
    $("#Trial_Site_Sloped_Surface input[type='radio']").checkboxradio("refresh");
    $("#Washout_5_Years input[type='radio']").checkboxradio("refresh");
    $("#Site_Located_Area input[type='radio']").checkboxradio("refresh");
    $("#Drains_Site_Alleyway input[type='radio']").checkboxradio("refresh");
    $("#Outlet_Drain_Area input[type='radio']").checkboxradio("refresh");
    $("#Drip_Tube_Tape_Monitoring input[type='radio']").checkboxradio("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".SSC").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".SSC").removeClass("ui-state-disabled");
    }
});

$(document).on("pageshow", "#Form_Land_Contracts", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".LandContracts_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".LandContracts_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".LandContracts_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".LandContracts_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }

    $("#Contract_Signed input[type='radio']").checkboxradio("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".LandContracts").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".LandContracts").removeClass("ui-state-disabled");
    }
});

$(document).on("pageshow", "#Form_Compliance_Exceptions", function () {


    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".ComplianceExceptions_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".ComplianceExceptions_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".ComplianceExceptions_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".ComplianceExceptions_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }

    $("#Compliance_Exceptions_Needed input[type='radio']").checkboxradio("refresh");
    $("#Trial_type input[type='checkbox']").checkboxradio("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".ComplianceExceptions").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
        $("#Compliance_Attachments_link_Delete").addClass("ui-state-disabled");
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".ComplianceExceptions").removeClass("ui-state-disabled");
    }

    CheckNetworkStatus()
        .fail(function () {
            $("#Compliance_Exceptions_Attachment").addClass("ui-state-disabled masterTooltip");
            $("#Compliance_Exceptions_Attachment").prop('title', 'Need to be on Monsanto Network in order to upload an image.');
            ActiveTooltip();
        });

});

$(document).on("pageshow", "#Form_Compliance_Map", function () {

    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".ComplianceMap_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".ComplianceMap_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".ComplianceMap_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".ComplianceMap_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }

    $("#Certification_Agreement input[type='radio']").checkboxradio("refresh");
    $("#ComplianceMapContent #Isolation_Method").selectmenu("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $("select").closest("div").addClass("ui-state-disabled");
        $(".ComplianceMap").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
        $("#Compliance_Map_Attachment_link_Delete").addClass("ui-state-disabled");
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".ComplianceMap").removeClass("ui-state-disabled");
    }
    CheckNetworkStatus()
        .fail(function () {
            $("#Compliance_Exceptions_Attachment").addClass("ui-state-disabled masterTooltip");
            $("#Compliance_Exceptions_Attachment").prop('title', 'Need to be on Monsanto Network in order to upload an image.');
            ActiveTooltip();
        });
});

$(document).on("pageshow", "#Form_PrePlanting", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".PrePlant_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".PrePlant_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".PrePlant_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".PrePlant_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }
    $("#Previous_Trained_and_Recorded input[type='radio']").checkboxradio("refresh");
    $("#Contained_of_Material input[type='radio']").checkboxradio("refresh");
    $("#Received_Good_Condition input[type='radio']").checkboxradio("refresh");
    $("#Received_Seed_Labeled input[type='radio']").checkboxradio("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".PrePlant").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".PrePlant").removeClass("ui-state-disabled");
    }
});

$(document).on("pageshow", "#Form_Dicamba_Spray_Tracking", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".DST_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".DST_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".DST_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".DST_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }
    $("#Field_Sprayed_M1691_Burndown input[type='radio']").checkboxradio("refresh");
    $("#BD_SRR_Present input[type='radio']").checkboxradio("refresh");
    $("#BD_Applicator_Trained input[type='radio']").checkboxradio("refresh");
    $("#BD_Applicator_Possession_M1691_Label input[type='radio']").checkboxradio("refresh");
    $("#BD_Adjacent_Non_RR2X input[type='radio']").checkboxradio("refresh");
    $("#BD_Growth_Stage_Non_RR2X_Soybean input[type='radio']").checkboxradio("refresh");
    $("#BD_Mon_10_Used input[type='radio']").checkboxradio("refresh");
    $("#BD_Nozzle_Type input[type='radio']").checkboxradio("refresh");
    $("#BD_Hooded input[type='radio']").checkboxradio("refresh");
    $("#BD_Equipment_Triple_Rinsed input[type='radio']").checkboxradio("refresh");
    $("#Field_Sprayed_M1691_In_Season input[type='radio']").checkboxradio("refresh");
    $("#IS_SRR_Present input[type='radio']").checkboxradio("refresh");
    $("#IS_Applicator_Trained input[type='radio']").checkboxradio("refresh");
    $("#IS_Applicator_Possession_M1691_Label input[type='radio']").checkboxradio("refresh");
    $("#IS_Adjacent_Non_RR2X input[type='radio']").checkboxradio("refresh");
    $("#IS_Growth_Stage_Non_RR2X_Soybean input[type='radio']").checkboxradio("refresh");
    $("#IS_Mon_10_Used input[type='radio']").checkboxradio("refresh");
    $("#IS_Nozzle_Type input[type='radio']").checkboxradio("refresh");
    $("#IS_Hooded input[type='radio']").checkboxradio("refresh");
    $("#IS_Equipment_Triple_Rinsed input[type='radio']").checkboxradio("refresh");
    $("#DSTContent #BD_Crop_Stage").selectmenu("refresh");
    $("#DSTContent #BD_Drift_Reduction").selectmenu("refresh");
    $("#DSTContent #IS_Crop_Stage").selectmenu("refresh");
    $("#DSTContent #IS_Drift_Reduction").selectmenu("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".DST").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".DST").removeClass("ui-state-disabled");
    }
});

$(document).on("pageshow", "#Form_In_Season_Monitoring", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".In_Season_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".In_Season_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".In_Season_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".In_Season_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }

    $("#Ft_Isolation_Planting input[type='radio']").checkboxradio("refresh");
    $("#PP_Isolation_Area_Inspected input[type='radio']").checkboxradio("refresh");
    $("#PP_Compatible_Plants_Found input[type='radio']").checkboxradio("refresh");
    $("#PP_Compatible_Plants_Destroyed input[type='radio']").checkboxradio("refresh");
    $("#PH_Isolation_Area_Inspected input[type='radio']").checkboxradio("refresh");
    $("#PH_Compatible_Plants_Found input[type='radio']").checkboxradio("refresh");
    $("#PH_Compatible_Plants_Destroyed input[type='radio']").checkboxradio("refresh");
    $("#SRR_Confirmation input[type='radio']").checkboxradio("refresh");
    $("#Cover_Crops_Destroyed input[type='radio']").checkboxradio("refresh");

    $("#In_SeasonContent #PP_Compatible_Plants_Destruction_Method").selectmenu("refresh");
    $("#In_SeasonContent #PH_Compatible_Plants_Destruction_Method").selectmenu("refresh");


    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".In_Season").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".In_Season").removeClass("ui-state-disabled");
    }
});

$(document).on("pageshow", "#Form_Bin_Inspections", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".Bin_Inspections_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".Bin_Inspections_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".Bin_Inspections_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".Bin_Inspections_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }

    $("#Trial_Use_Bin_Storage input[type='radio']").checkboxradio("refresh");

    $("#Bin_Appropriate_Size input[type='radio']").checkboxradio("refresh");
    $("#Bin_Clean_And_Good input[type='radio']").checkboxradio("refresh");
    $("#Bin_Secureable input[type='radio']").checkboxradio("refresh");
    $("#Bin_Signage_Appropriated input[type='radio']").checkboxradio("refresh");
    //$("#False_Floor input[type='radio']").checkboxradio("refresh");
    //$("#Access_by_Semi input[type='radio']").checkboxradio("refresh");
    //$("#Electricity_Near_Bin input[type='radio']").checkboxradio("refresh");
    //$("#Door_on_Top input[type='radio']").checkboxradio("refresh");
    //$("#Aeration_System input[type='radio']").checkboxradio("refresh");
    //$("#Walls_Clean input[type='radio']").checkboxradio("refresh");
    //$("#Floor_Clean input[type='radio']").checkboxradio("refresh");
    //$("#Bin_Approved input[type='radio']").checkboxradio("refresh");
    $("#Bin_Same_Trait input[type='radio']").checkboxradio("refresh");
    $("#Bin_Independent input[type='radio']").checkboxradio("refresh");
    $("#Bin_Load_System_Not_Used_For_Commodities input[type='radio']").checkboxradio("refresh");
    $("#Add_Other_Bin input[type='radio']").checkboxradio("refresh");

    $("#Bin_Appropriate_Size2 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Clean_And_Good2 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Secureable2 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Signage_Appropriated2 input[type='radio']").checkboxradio("refresh");
    //$("#False_Floor2 input[type='radio']").checkboxradio("refresh");
    //$("#Access_by_Semi2 input[type='radio']").checkboxradio("refresh");
    //$("#Electricity_Near_Bin2 input[type='radio']").checkboxradio("refresh");
    //$("#Door_on_Top2 input[type='radio']").checkboxradio("refresh");
    //$("#Aeration_System2 input[type='radio']").checkboxradio("refresh");
    //$("#Walls_Clean2 input[type='radio']").checkboxradio("refresh");
    //$("#Floor_Clean2 input[type='radio']").checkboxradio("refresh");
    //$("#Bin_Approved2 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Same_Trait2 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Independent2 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Load_System_Not_Used_For_Commodities2 input[type='radio']").checkboxradio("refresh");
    $("#Add_Other_Bin2 input[type='radio']").checkboxradio("refresh");

    $("#Bin_Appropriate_Size3 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Clean_And_Good3 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Secureable3 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Signage_Appropriated3 input[type='radio']").checkboxradio("refresh");
    //$("#False_Floor3 input[type='radio']").checkboxradio("refresh");
    //$("#Access_by_Semi3 input[type='radio']").checkboxradio("refresh");
    //$("#Electricity_Near_Bin3 input[type='radio']").checkboxradio("refresh");
    //$("#Door_on_Top3 input[type='radio']").checkboxradio("refresh");
    //$("#Aeration_System3 input[type='radio']").checkboxradio("refresh");
    //$("#Walls_Clean3 input[type='radio']").checkboxradio("refresh");
    //$("#Floor_Clean3 input[type='radio']").checkboxradio("refresh");
    //$("#Bin_Approved3 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Same_Trait3 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Independent3 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Load_System_Not_Used_For_Commodities3 input[type='radio']").checkboxradio("refresh");
    $("#Add_Other_Bin3 input[type='radio']").checkboxradio("refresh");

    $("#Bin_Appropriate_Size4 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Clean_And_Good4 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Secureable4 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Signage_Appropriated4 input[type='radio']").checkboxradio("refresh");
    //$("#False_Floor4 input[type='radio']").checkboxradio("refresh");
    //$("#Access_by_Semi4 input[type='radio']").checkboxradio("refresh");
    //$("#Electricity_Near_Bin4 input[type='radio']").checkboxradio("refresh");
    //$("#Door_on_Top4 input[type='radio']").checkboxradio("refresh");
    //$("#Aeration_System4 input[type='radio']").checkboxradio("refresh");
    //$("#Walls_Clean4 input[type='radio']").checkboxradio("refresh");
    //$("#Floor_Clean4 input[type='radio']").checkboxradio("refresh");
    //$("#Bin_Approved4 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Same_Trait4 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Independent4 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Load_System_Not_Used_For_Commodities4 input[type='radio']").checkboxradio("refresh");
    $("#Add_Other_Bin4 input[type='radio']").checkboxradio("refresh");

    $("#Bin_Appropriate_Size5 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Clean_And_Good5 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Secureable5 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Signage_Appropriated5 input[type='radio']").checkboxradio("refresh");
    //$("#False_Floor5 input[type='radio']").checkboxradio("refresh");
    //$("#Access_by_Semi5 input[type='radio']").checkboxradio("refresh");
    //$("#Electricity_Near_Bin5 input[type='radio']").checkboxradio("refresh");
    //$("#Door_on_Top5 input[type='radio']").checkboxradio("refresh");
    //$("#Aeration_System5 input[type='radio']").checkboxradio("refresh");
    //$("#Walls_Clean5 input[type='radio']").checkboxradio("refresh");
    //$("#Floor_Clean5 input[type='radio']").checkboxradio("refresh");
    //$("#Bin_Approved5 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Same_Trait5 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Independent5 input[type='radio']").checkboxradio("refresh");
    $("#Bin_Load_System_Not_Used_For_Commodities5 input[type='radio']").checkboxradio("refresh");


    //$("#BinInspectionsContent #Bin_Statement_Storage").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Statement_Storage2").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Statement_Storage3").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Statement_Storage4").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Statement_Storage5").selectmenu("refresh");

    //$("#BinInspectionsContent #Bin_Type_of_Storage").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Type_of_Storage2").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Type_of_Storage3").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Type_of_Storage4").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Type_of_Storage5").selectmenu("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".Bin_Inspections").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".Bin_Inspections").removeClass("ui-state-disabled");
    }

    $("#Bin_Number").focus();

});

$(document).on("pageshow", "#Form_Harvest_and_Destruct", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".Harvest_and_Destruct_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".Harvest_and_Destruct_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".Harvest_and_Destruct_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".Harvest_and_Destruct_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }

    //$("#HarvestAndDestructContent #CD_Prior_to_flowering input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #PH_Trained_Prior_to_Harvest input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #H_Harvest_Visited input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #H_Delay_Harvesting input[type='radio']").checkboxradio("refresh");
    //$("#HarvestAndDestructContent #H_Grower_Has_Plan_to_Empty_Equipment input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #H_Portion_Not_Harvested input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #H_Material_Properly_Contained input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #H_Material_Storage_Properly_Labeled input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #H_Material_Storage_Properly_Secured input[type='radio']").checkboxradio("refresh");

    $("#HarvestAndDestructContent #Equipment_Cleaned_Out input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #GBL_Equipment_Clean_Out input[type='radio']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #GBL_ECO_Disposed_Per_Approved_Method input[type='radio']").checkboxradio("refresh");

    //$("#HarvestAndDestructContent #harvested_Materials_Disposition input[type='checkbox']").checkboxradio("refresh");

    $("#HarvestAndDestructContent #CD_Method").selectmenu("refresh");
    $("#HarvestAndDestructContent #H_Material_Stored_In").selectmenu("refresh");
    //$("#HarvestAndDestructContent #H_Bin_Number_and_Location").selectmenu("refresh");
    $("#HarvestAndDestructContent #H_Bin_Number_and_Location input[type='checkbox']").checkboxradio("refresh");
    $("#HarvestAndDestructContent #Next_Harvested_Field").selectmenu("refresh");

    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $(".Harvest_and_Destruct").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".Harvest_and_Destruct").removeClass("ui-state-disabled");
    }

    //$("#CD_Prior_to_floweringRadio").focus();

});

$(document).on("pageshow", "#Form_Volunteer_Monitoring", function () {
    AccessLevel(adminonly);
    if (adminonly == 0) {
        $(".Vol_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-a");
        $(".Vol_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-b");
    } else if (adminonly == 1 || adminonly == 2 || adminonly == 3) {
        $(".Vol_Save_btn").removeClass("ui-grid-c").addClass("ui-grid-b");
        $(".Vol_Cancel_btn").removeClass("ui-block-d").addClass("ui-block-c");
    }
    if (adminonly != 1) {
        $('#App_Effective2Radioblbl').addClass('ui-last-child');
        $('#App_Effective3Radioblbl').addClass('ui-last-child');
        $('#App_Effective4Radioblbl').addClass('ui-last-child');
        $('#App_Effective5Radioblbl').addClass('ui-last-child');
    }

    $("#App_Effective input[type='radio']").checkboxradio("refresh");
    $("#App_Effective2 input[type='radio']").checkboxradio("refresh");
    $("#App_Effective3 input[type='radio']").checkboxradio("refresh");
    $("#App_Effective4 input[type='radio']").checkboxradio("refresh");
    $("#App_Effective5 input[type='radio']").checkboxradio("refresh");

    $("#App_Effective_Approved2").checkboxradio("refresh");
    $("#App_Effective_Approved3").checkboxradio("refresh");
    $("#App_Effective_Approved4").checkboxradio("refresh");
    $("#App_Effective_Approved5").checkboxradio("refresh");


    if (lockedForm) {
        $("input").closest("div").addClass("ui-state-disabled");
        $("select").closest("div").addClass("ui-state-disabled");
        $(".Vol").addClass("ui-state-disabled");
        $(".Trial_Info_btn").removeClass('ui-state-disabled').children().removeClass('ui-state-disabled');
    } else {
        $(".ui-state-disabled").removeClass('ui-state-disabled');
        $(".Vol").removeClass("ui-state-disabled");
        if ($('#Method_of_Burn_Down').val() != "1012") {
            $('#VolAppHerbicide').addClass("ui-state-disabled");
        }
    }
    $("input[name=radio-choice-h-2][value=on]").prop('checked', true);
    $("#VolField_Mon input[type='radio']").checkboxradio("refresh");

    $("#VolContent #Planted_Crop").selectmenu("refresh");
    $("#VolContent #Method_of_Burn_Down").selectmenu("refresh");
    $("#VolContent #Method_of_Burn_Down_Herbicide").selectmenu("refresh");
    $("#VolContent #Method_of_Preemergence_Herbicide").selectmenu("refresh");
    $("#VolContent #Method_of_Postemergence_Herbicide").selectmenu("refresh");
    $("#VolContent #Method_of_Postemergence_Herbicide2").selectmenu("refresh");
    $("#VolContent #Method_of_Postemergence_Herbicide3").selectmenu("refresh");
    $("#VolContent #Method_of_Postemergence_Herbicide4").selectmenu("refresh");
    $("#VolContent #Method_of_Postemergence_Herbicide5").selectmenu("refresh");


});


$(document).on("pagehide", "#Form_Bin_Inspections", function () {

    $("#BinInspectionsContent #TrialUseBin input[type='radio']").each(function () {
        $(this).prop('checked', false);
        $(this).checkboxradio("refresh");
    });

    CleanBinInspection();
    CleanBinInspection2();
    CleanBinInspection3();
    CleanBinInspection4();
    CleanBinInspection5();
});

function CleanBinInspection() {
    $("#BinInspectionsContent #Bin_Inspection .ui-grid-a input").each(function () {
        $(this).val(this.defaultValue);
    });
    $("#BinInspectionsContent #Bin_Inspection .ui-grid-a input[type='radio']").each(function () {
        $(this).prop('checked', false);
        $(this).checkboxradio("refresh");
    });

    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Inspection #Bin_Type_of_Storage").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection #Bin_Type_of_Storage").selectmenu("refresh");

    $("#BinInspectionsContent #Bin_Inspection").hide();
}

function CleanBinInspection2() {
    $("#BinInspectionsContent #Bin_Inspection2 .ui-grid-a input").each(function () {
        $(this).val(this.defaultValue);
    });
    $("#BinInspectionsContent #Bin_Inspection2 .ui-grid-a input[type='radio']").each(function () {
        $(this).prop('checked', false);
        $(this).checkboxradio("refresh");
    });

    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage2").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage2").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Inspection2 #Bin_Type_of_Storage2").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection2 #Bin_Type_of_Storage2").selectmenu("refresh");

    $("#BinInspectionsContent #Bin_Inspection2").hide();
}

function CleanBinInspection3() {
    $("#BinInspectionsContent #Bin_Inspection3 .ui-grid-a input").each(function () {
        $(this).val(this.defaultValue);
    });
    $("#BinInspectionsContent #Bin_Inspection3 .ui-grid-a input[type='radio']").each(function () {
        $(this).prop('checked', false);
        $(this).checkboxradio("refresh");
    });

    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage3").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage3").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Inspection3 #Bin_Type_of_Storage3").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection3 #Bin_Type_of_Storage3").selectmenu("refresh");

    $("#BinInspectionsContent #Bin_Inspection3").hide();
}

function CleanBinInspection4() {
    $("#BinInspectionsContent #Bin_Inspection4 .ui-grid-a input").each(function () {
        $(this).val(this.defaultValue);
    });
    $("#BinInspectionsContent #Bin_Inspection4 .ui-grid-a input[type='radio']").each(function () {
        $(this).prop('checked', false);
        $(this).checkboxradio("refresh");
    });

    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage4").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage4").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Inspection4 #Bin_Type_of_Storage4").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection4 #Bin_Type_of_Storage4").selectmenu("refresh");

    $("#BinInspectionsContent #Bin_Inspection4").hide();
}

function CleanBinInspection5() {
    $("#BinInspectionsContent #Bin_Inspection5 .ui-grid-a input").each(function () {
        $(this).val(this.defaultValue);
    });
    $("#BinInspectionsContent #Bin_Inspection5 .ui-grid-a input[type='radio']").each(function () {
        $(this).prop('checked', false);
        $(this).checkboxradio("refresh");
    });

    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage5").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection #Bin_Statement_Storage5").selectmenu("refresh");
    //$("#BinInspectionsContent #Bin_Inspection5 #Bin_Type_of_Storage5").val(1015);
    //$("#BinInspectionsContent #Bin_Inspection5 #Bin_Type_of_Storage5").selectmenu("refresh");

    $("#BinInspectionsContent #Bin_Inspection5").hide();
}