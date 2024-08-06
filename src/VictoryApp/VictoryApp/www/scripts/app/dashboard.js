/**
 * Created by hcasa on 10/25/2015.
 */


function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function RemoveClasses(fromClass) {
    $(fromClass).removeClass("GreenStartNav");
    $(fromClass).removeClass("GreenProgressNav");
    $(fromClass).removeClass("GreenStopNav");
    $(fromClass).removeClass("BlackStartNav");
    $(fromClass).removeClass("BlackProgressNav");
    $(fromClass).removeClass("BlackStopNav");
    $(fromClass).removeClass("YellowStartNav");
    $(fromClass).removeClass("YellowProgressNav");
    $(fromClass).removeClass("YellowStopNav");
    $(fromClass).removeClass("RedStartNav");
    $(fromClass).removeClass("RedProgressNav");
    $(fromClass).removeClass("RedStopNav");
    $(fromClass).removeClass("BlueStartNav");
    $(fromClass).removeClass("BlueProgressNav");
    $(fromClass).removeClass("BlueStopNav");
}

function ChangeClasses(trial) {

    //var DATA = GetLocalStorageData("D01", trialId, "Trial_Id"); //Get  the Key
    var BUTTONS_ARRAY = [".NavSiteSelec", ".NavLandContr", ".NavCompliExce", ".NavCompliMap", ".NavPrePlanting", ".NavPlanting", ".NavDicamApp", ".NavInSeas", ".NavBinInspec", ".NavHaverst", ".NavVolMoni"];
    var FORM_ARRAY = ["Site_Selection_Checklist", "Land_Contracts", "Compliance_Exceptions", "Compliance_Map", "PrePlanting", "Planting", "Dicamba_Spray_Tracking", "In_Season_Monitoring", "Bin_Inspections", "Harvest_and_Destruct", "Volunteer_Monitoring", "Last_Page"];

    //PrePlant
    if (trial.Status[FORM_ARRAY[0]] == 4
        && trial.Status[FORM_ARRAY[1]] == 4
        && trial.Status[FORM_ARRAY[2]] == 4
        && trial.Status[FORM_ARRAY[3]] == 4) {

        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(4) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[0]] == 3
        || trial.Status[FORM_ARRAY[1]] == 3
        || trial.Status[FORM_ARRAY[2]] == 3
        || trial.Status[FORM_ARRAY[3]] == 3) {

        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(3) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[0]] == 2
        || trial.Status[FORM_ARRAY[1]] == 2
        || trial.Status[FORM_ARRAY[2]] == 2
        || trial.Status[FORM_ARRAY[3]] == 2) {

        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(2) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[0]] == 1
        || trial.Status[FORM_ARRAY[1]] == 1
        || trial.Status[FORM_ARRAY[2]] == 1
        || trial.Status[FORM_ARRAY[3]] == 1) {

        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(1) + "StopNav");
    } else {
        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(0) + "StopNav");
    }


    //Plant
    if (trial.Status[FORM_ARRAY[4]] == 4
        && trial.Status[FORM_ARRAY[5]] == 4) {

        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(4) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[4]] == 3
        || trial.Status[FORM_ARRAY[5]] == 3) {

        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(3) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[4]] == 2
        || trial.Status[FORM_ARRAY[5]] == 2) {

        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(2) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[4]] == 1
        || trial.Status[FORM_ARRAY[5]] == 1) {

        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(1) + "StopNav");

    } else {
        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(0) + "StopNav");
    }


    //Harvest
    if (trial.Status[FORM_ARRAY[6]] == 4
        && trial.Status[FORM_ARRAY[7]] == 4
        && trial.Status[FORM_ARRAY[8]] == 4
        && trial.Status[FORM_ARRAY[9]] == 4) {

        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(4) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[6]] == 3
        || trial.Status[FORM_ARRAY[7]] == 3
        || trial.Status[FORM_ARRAY[8]] == 3
        || trial.Status[FORM_ARRAY[9]] == 3) {

        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(3) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[6]] == 2
        || trial.Status[FORM_ARRAY[7]] == 2
        || trial.Status[FORM_ARRAY[8]] == 2
        || trial.Status[FORM_ARRAY[9]] == 2) {

        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(2) + "StopNav");

    } else if (trial.Status[FORM_ARRAY[6]] == 1
        || trial.Status[FORM_ARRAY[7]] == 1
        || trial.Status[FORM_ARRAY[8]] == 1
        || trial.Status[FORM_ARRAY[9]] == 1) {

        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(1) + "StopNav");

    } else {
        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(0) + "StopNav");
    }

    //make first navigation icon an starting icon
    RemoveClasses(".NavSiteSelec");
    $(".NavSiteSelec").addClass(GetColorNav(parseInt(trial.Status['Site_Selection_Checklist'])) + "StartNav");

    for (var I = 1; I < BUTTONS_ARRAY.length; I++) {
        var NAV_BTN = BUTTONS_ARRAY[I];
        var NAV_FORM = FORM_ARRAY[I];
        RemoveClasses(NAV_BTN);
        $(NAV_BTN).addClass(GetColorNav(parseInt(trial.Status[NAV_FORM])) + "ProgressNav");
    }


}

function NavCheckInitialGroup(data) {
    var goToPageCompliance = false;

    if (data.Site_Selection_Checklist != 4) {
        alertify.alert("Please finish Site Selection Checklist form before moving forward.  Thanks.");
        goToPageCompliance = true;
    }
    else if (data.Land_Contracts != 4) {
        alertify.alert("Please finish Land Contracts form before moving forward.  Thanks.");
        goToPageCompliance = true;
    }
    else if (data.Compliance_Exceptions != 4) {
        alertify.alert("Please finish Compliance Exceptions form before moving forward.  Thanks.");
        goToPageCompliance = true;
    }
    else if (data.Compliance_Map != 4) {
        alertify.alert("Please finish Compliance Map form before moving forward.  Thanks.");
        goToPageCompliance = true;
    }
    else {
        alertify.alert("Please finish initial forms before moving forward.  Thanks.");
        goToPageCompliance = true;
    }

    return goToPageCompliance;
}

function NavCheckPlantingGroup(data) {
    var goToPageCompliance = false;

    if (data.PrePlanting != 4) {
        alertify.alert("Please finish Pre-Planting form before moving forward.  Thanks.");
        goToPageCompliance = true;
    } else if (data.Planting != 4) {
        alertify.alert("Please finish Planting form before moving forward.  Thanks.");
        goToPageCompliance = true;
    } else if (data.Dicamba_Spray_Tracking != 4) {
        alertify.alert("Please finish Dicamba Spray Tracking form before moving forward.  Thanks.");
        goToPageCompliance = true;
    } else {
        alertify.alert("Please finish Planting info before moving forward.  Thanks.");
        goToPageCompliance = true;
    }

    return goToPageCompliance;
}

function NavCheckHarvestGroup(data) {
    var goToPageCompliance = false;

    if (data.In_Season_Monitoring != 4) {
        alertify.alert("Please finish In-Season Monitoring form before moving forward.  Thanks.");
        goToPageCompliance = true;
    } else if (data.Bin_Inspections != 4) {
        alertify.alert("Please finish Bin Inspections form before moving forward.  Thanks.");
        goToPageCompliance = true;
    } else if (data.Harvest_and_Destruct != 4) {
        alertify.alert("Please finish Harvest and Destruct form before moving forward.  Thanks.");
        goToPageCompliance = true;
    } else {
        alertify.alert("Please finish Harvest info before moving forward.  Thanks.");
        goToPageCompliance = true;
    }

    return goToPageCompliance;
}

function NavClick(formId, formCodeName, trialId, statusInJson) {

    var data = [];
    var status = JSON.parse(statusInJson);
    for (var i = 0; status.length > i; i++) {
        data[FormArrayName[i]] = status[i] ? 4 : 0;
    }

    //debugger;

    var goToPageCompliance = false;

    //Initial Group
    if (formCodeName == "Site_Selection_Checklist") {
        OpenForm(formId, formCodeName, trialId);
    } else if (formCodeName == "Land_Contracts") {
        OpenForm(formId, formCodeName, trialId);
    } else if (formCodeName == "Compliance_Exceptions") {
        OpenForm(formId, formCodeName, trialId);
    } else if (formCodeName == "Compliance_Map") {
        OpenForm(formId, formCodeName, trialId);
    }
    //Planting Group
    else if (formCodeName == "PrePlanting") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4
            && data.Land_Contracts == 4
            && data.Compliance_Exceptions == 4
            && data.Compliance_Map == 4) {
            OpenForm(formId, formCodeName, trialId);
        } else {
            goToPageCompliance = NavCheckInitialGroup(data);
        }

    } else if (formCodeName == "Planting") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4
            && data.Land_Contracts == 4
            && data.Compliance_Exceptions == 4
            && data.Compliance_Map == 4) {
            OpenForm(formId, formCodeName, trialId);
        } else {
            goToPageCompliance = NavCheckInitialGroup(data);
        }

    } else if (formCodeName == "Dicamba_Spray_Tracking") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4
            && data.Land_Contracts == 4
            && data.Compliance_Exceptions == 4
            && data.Compliance_Map == 4) {
            OpenForm(formId, formCodeName, trialId);
        } else {
            goToPageCompliance = NavCheckInitialGroup(data);
        }
    }
    //Harvest Group
    else if (formCodeName == "In_Season_Monitoring") {
        //Trial Info
        if (data.PrePlanting == 4
            && data.Planting == 4
            && data.Dicamba_Spray_Tracking == 4) {
            OpenForm(formId, formCodeName, trialId);
        } else {
            goToPageCompliance = NavCheckPlantingGroup(data);
        }
    } else if (formCodeName == "Bin_Inspections") {
        //Trial Info
        if (data.PrePlanting == 4
            && data.Planting == 4
            && data.Dicamba_Spray_Tracking == 4) {
            OpenForm(formId, formCodeName, trialId);
        } else {
            goToPageCompliance = NavCheckPlantingGroup(data);
        }
    } else if (formCodeName == "Harvest_and_Destruct") {
        //Trial Info
        if (data.PrePlanting == 4
            && data.Planting == 4
            && data.Dicamba_Spray_Tracking == 4) {
            OpenForm(formId, formCodeName, trialId);
        } else {
            goToPageCompliance = NavCheckPlantingGroup(data);
        }
    } else if (formCodeName == "Volunteer_Monitoring") {
        //Trial Info
        if (data.In_Season_Monitoring == 4
            && data.Bin_Inspections == 4
            && data.Harvest_and_Destruct == 4) {
            OpenForm(formId, formCodeName, trialId);
        } else {
            goToPageCompliance = NavCheckHarvestGroup(data);
        }
    }

    if (goToPageCompliance) {
        $.mobile.navigate('#Dashboard');
    }
}

$(document).on("pageshow", function (e, data) {
    TableResize();
    UpdateTitle();
});

function UpdateTitle() {
    $('.ui-header').each(function (index, value) {

        var marginLeft = value.children[0].offsetWidth;
        var marginRight = value.children[2].offsetWidth;

        $(value).find('.ui-title').css('margin-left', marginLeft);
        $(value).find('.ui-title').css('margin-right', marginRight);

    });
}


function UpdateDiv() {

    var heights = Math.max(0, document.documentElement.clientHeight - 34).toString() + "px";
    var heights2 = (Math.max(0, document.documentElement.clientHeight / 2) + 27 - 105 - 91).toString() + "px";
    var internalheights = Math.max(0, document.documentElement.clientHeight - 55 - 100).toString() + "px";

    var windowHeight = $(window).height();
    var dashboardDetailedContentHeight = $("#Dashboard .DashboardDetailedContent").height();

    $(".ui-content").css("height", heights);
    $(".Forms_Data").css("height", internalheights);

    var dashboardMainContentHeight = windowHeight - dashboardDetailedContentHeight - 43;
    $("#Dashboard .DashboardMainContent").css("height", dashboardMainContentHeight);

    $("#Dashboard .TrialListContainer").css("height", dashboardMainContentHeight);
    $("#Dashboard .TrialListContainer .Box").css("height", dashboardMainContentHeight - 20);

    $("#Dashboard .FilterContainer").css("height", dashboardMainContentHeight);
    $("#Dashboard .FilterContainer .Box").css("height", dashboardMainContentHeight - 20);

    $("#Dashboard .FilterContainer .BoxContent").css("height", dashboardMainContentHeight - 50);
    $("#Dashboard .FilterContainer .BoxContent #FilterTable").css("height", dashboardMainContentHeight - 50);

    var scrollThead = $("#Dashboard .FilterContainer .BoxContent #FilterTable .scrollThead").height();
    $("#Dashboard .FilterContainer .BoxContent #FilterTable .scrollTbody").css("height", dashboardMainContentHeight - 50 - scrollThead);

    var trialTitleHeight = $("#Dashboard .TrialListContainer .BoxTitle").height();
    var trialSearchHeight = $("#Dashboard #TrialList .ui-columns-search").height();
    var trialListHeight = dashboardMainContentHeight - trialTitleHeight - trialSearchHeight - 50;

    $("#TrialList").find('.ui-columns-table').css({
        "height": trialListHeight + "px", "overflow-y": "auto"
    });

    $('.dataTables_wrapper').css("height", heights2);

    UpdateTitle();
}

function GetArray(arrayval) {
    if (arrayval == 1) {
        return ArrayVal1;
    } else if (arrayval == 2) {
        return ArrayVal2;
    } else if (arrayval == 3) {
        return ArrayVal3;
    } else {
        return ArrayVal4;
    }
}

function GetComplianceTable(trial) {
    var beginTable = "<table id=\"FormTable\" style=\"width: 99%; border-collapse: collapse; margin-left: auto; margin-right: auto; table-layout: fixed; margin-top: 15px\">";
    var endTable = "</table>";

    var topRow = "<tr>";
    var topSeparator = "<tr>";
    var middleRow = "<tr class=\"check\" style=\"border-radius: 6px; -moz-border-radius: 6px; border: #666362 solid\">";
    var bottomSeparator = "<tr>";
    var bottomRow = "<tr>";

    var i, len, status = [];
    for (i = 0, len = trial.Progress.length; i < len; i += 1) {

        var progress = trial.Progress[i];
        var formId = progress.WorkflowId;
        var formCodeName = FormArrayName[formId];
        var formName = progress.WorkflowName;

        //fill status array with lock status only
        status[progress.WorkflowId] = progress.Locked;

        var span = 4;
        if (i == 0) {
            span = 2;
        } else if (i == (len - 1)) {
            span = 2;
        }

        if (i % 2) {

            if (i == (len - 1)) {
                bottomRow += "<th></th>";
                bottomSeparator += "<th></th>";
            }

            bottomRow += "<th colspan='" + span + "'>" + formName + "</th>";
            bottomSeparator += "<th colspan='" + span + "' class='TableHeader'></th>";

        } else {

            if (span == 2) {
                bottomRow += "<th></th>";
                bottomSeparator += "<th></th>";
            }

            if (i == (len - 1)) {
                topRow += "<th></th>";
                topSeparator += "<th></th>";
            }

            topRow += "<th colspan='" + span + "'>" + formName + "</th>";
            topSeparator += "<th colspan='" + span + "' class='TableHeader'></th>";

            if (i == 0) {
                topRow += "<th></th>";
                topSeparator += "<th></th>";
            }

        }

        middleRow += "<td colspan=\"2\" class=\"check\" "
            + "onclick=\"NavClick(" + formId + ", '" + formCodeName + "', " + trial.TrialId + ", '" + JSON.stringify(status) + "');\"" + ">"
            + ((progress.Locked == 1) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
                : ((progress.Locked == 0 && progress.Answered == 1) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
                : ((false) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
                : ((progress.Answered == 0) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
    }

    topRow += "</tr>";
    topSeparator += "</tr>";
    middleRow += "</tr>";
    bottomSeparator += "</tr>";
    bottomRow += "</tr>";


    return beginTable + topRow + topSeparator + middleRow + bottomSeparator + bottomRow + endTable;

}

function GetEmptyComplianceTable(workflows) {
    var beginTable = "<table id=\"FormTable\" style=\"width: 99%; border-collapse: collapse; margin-left: auto; margin-right: auto; table-layout: fixed; margin-top: 15px\">";
    var endTable = "</table>";

    var topRow = "<tr>";
    var topSeparator = "<tr>";
    var middleRow = "<tr class=\"check\" style=\"border-radius: 6px; -moz-border-radius: 6px; border: #666362 solid\">";
    var bottomSeparator = "<tr>";
    var bottomRow = "<tr>";

    var i, len, status = [];
    for (i = 0, len = workflows.length; i < len; i += 1) {

        var workflow = workflows[i];
        var formName = workflow.WorkflowName;

        var span = 4;
        if (i == 0) {
            span = 2;
        } else if (i == (len - 1)) {
            span = 2;
        }

        if (i % 2) {

            if (i == (len - 1)) {
                bottomRow += "<th></th>";
                bottomSeparator += "<th></th>";
            }

            bottomRow += "<th colspan='" + span + "'>" + formName + "</th>";
            bottomSeparator += "<th colspan='" + span + "' class='TableHeader'></th>";

        } else {

            if (span == 2) {
                bottomRow += "<th></th>";
                bottomSeparator += "<th></th>";
            }

            if (i == (len - 1)) {
                topRow += "<th></th>";
                topSeparator += "<th></th>";
            }

            topRow += "<th colspan='" + span + "'>" + formName + "</th>";
            topSeparator += "<th colspan='" + span + "' class='TableHeader'></th>";

            if (i == 0) {
                topRow += "<th></th>";
                topSeparator += "<th></th>";
            }

        }

        middleRow += "<td colspan=\"2\" class=\"check\" " + ">" + "</td>";

    }

    topRow += "</tr>";
    topSeparator += "</tr>";
    middleRow += "</tr>";
    bottomSeparator += "</tr>";
    bottomRow += "</tr>";


    return beginTable + topRow + topSeparator + middleRow + bottomSeparator + bottomRow + endTable;

}

function ToggleClick(e, TableIdentifier, Class, ToTarget, Target) {
    $(TableIdentifier).find("*").removeClass(Class);

    if (Target == "self") {
        $(e.currentTarget).addClass(Class);
    } else {
        $(e.currentTarget).children(ToTarget).addClass(Class);
    }
}

function GetForms(e, trialId) {

    //debugger;
    $.mobile.loading('show');

    ToggleClick(e, "#TrialList", 'RowClick', 'td, th', "child");

    VictoryStorage.getLogin().then(function (login) {
        //debugger;
        VictoryStorage.Trials.getWithTrialProgress(trialId)
            .then(function (trial) {
                lastTrialId = trial.TrialId;
                login.LastTrialId = trial.TrialId;
                return VictoryStorage.setLogin(login)
                    .then(function () {
                        dvtitle.innerHTML = "Trial ID: " + trial.TrialId;
                        dvcontainer.innerHTML = GetComplianceTable(trial);
                        $('#CDashboardTrialNote').attr('onclick', 'OpenPopup(' + trial.TrialId + ', "popup_PageComplianceTrialNote");');
                        $.mobile.loading('hide');
                    });
            });
    });

}

function loadTrialList(trials) {

    MainTable = [];

    for (var i = 0; i < trials.length; i++) {

        var valueToPush = {};

        var farmName = trials[i].FarmName;
        if (typeof trials[i].FarmName === 'undefined' || trials[i].FarmName == null) {
            farmName = "";
        }

        valueToPush["ID"] = trials[i].TrialId;
        valueToPush["Trial Id"] = "" + trials[i].TrialId + "";
        valueToPush["Trial Name"] = trials[i].Name;
        valueToPush["Trial Farm"] = farmName;
        valueToPush["Crop"] = trials[i].CropName;
        valueToPush["Trait"] = trials[i].TraitName;
        valueToPush["Site"] = trials[i].SiteName;
        valueToPush["Year"] = "" + trials[i].TrialYear + "";

        if (adminonly == 4) {
            valueToPush["Primary SRR"] = User.getDisplayName(trials[i].PrimarySRRUserId);
        }

        MainTable.push(valueToPush);

    }

    if (MainTable.length == 0) {

        var valueToPush = {};
        valueToPush["ID"] = "";
        valueToPush["Trial Id"] = "";
        valueToPush["Trial Name"] = "";
        valueToPush["Trial Farm"] = "";
        valueToPush["Crop"] = "";
        valueToPush["Site"] = "";
        valueToPush["Trait"] = "";
        valueToPush["Year"] = "";

        if (adminonly == 4) {
            valueToPush["Primary SRR"] = "";
        }

        MainTable.push(valueToPush);
    }

}

function LoadFilterTable() {

    var deferred = $.Deferred();

    VictoryStorage.TrialProgress
        .getComplianceStatus()
        //draw advanced filter table
        .then(function (filterData) {

            var filterTableHeader = "<table class=\"scrollTable\"><thead class=\"scrollThead\">" +
                "<tr><th><button onclick=\"FilterTrialTable(event,'999','')\">Clear Filters</button></th>" +
                "<th>Blank</th><th><img alt=\"B1\" src=\"images/Button4.png\" style=\"height: 30px;\"></th>" +
                "<th><img alt=\"B1\" src=\"images/Button3.png\" style=\"height: 30px;\"></th>" +
                "<th><img alt=\"B1\" src=\"images/Button2.png\" style=\"height: 30px;\"></th>" +
                "<th><img alt=\"B1\" src=\"images/Button1.png\" style=\"height: 30px;\"></th></tr></thead>";

            //debugger;

            var filterTableBase = "<tbody class=\"scrollTbody\">";
            var selectedCellCss = "";
            var i, len;
            for (i = 0, len = filterData.length; i < len; i += 1) {
                var d = filterData.shift();
                filterTableBase += "<tr><td>&nbsp;" + d.WorkflowName + "</td>";


                //status = 0
                if (VictoryApp.AdvancedFilter != null) {
                    if (d.WorkflowId == VictoryApp.AdvancedFilter.workflowId) {
                        if (VictoryApp.AdvancedFilter.status == 0) {
                            selectedCellCss = "RowClick";
                        } else {
                            selectedCellCss = "";
                        }
                    } else {
                        selectedCellCss = "";
                    }
                } else {
                    selectedCellCss = "";
                }
                filterTableBase += "<td class='" + selectedCellCss + "' onclick='FilterTrialTable(event, 0, " + d.WorkflowId + ")'>" + d.InBlank + "</td>";


                //status = 1
                if (VictoryApp.AdvancedFilter != null) {
                    if (d.WorkflowId == VictoryApp.AdvancedFilter.workflowId) {
                        if (VictoryApp.AdvancedFilter.status == 1) {
                            selectedCellCss = "RowClick";
                        } else {
                            selectedCellCss = "";
                        }
                    } else {
                        selectedCellCss = "";
                    }
                } else {
                    selectedCellCss = "";
                }
                filterTableBase += "<td class='" + selectedCellCss + "' onclick='FilterTrialTable(event, 1, " + d.WorkflowId + ")'>" + d.InProgress + "</td>";


                //status = 2
                if (VictoryApp.AdvancedFilter != null) {
                    if (d.WorkflowId == VictoryApp.AdvancedFilter.workflowId) {
                        if (VictoryApp.AdvancedFilter.status == 2) {
                            selectedCellCss = "RowClick";
                        } else {
                            selectedCellCss = "";
                        }
                    } else {
                        selectedCellCss = "";
                    }
                } else {
                    selectedCellCss = "";
                }
                filterTableBase += "<td class='" + selectedCellCss + "' onclick='FilterTrialTable(event, 2, " + d.WorkflowId + ")'>" + d.PendingForApproval + "</td>";


                //status = 3
                if (VictoryApp.AdvancedFilter != null) {
                    if (d.WorkflowId == VictoryApp.AdvancedFilter.workflowId) {
                        if (VictoryApp.AdvancedFilter.status == 3) {
                            selectedCellCss = "RowClick";
                        } else {
                            selectedCellCss = "";
                        }
                    } else {
                        selectedCellCss = "";
                    }
                } else {
                    selectedCellCss = "";
                }
                filterTableBase += "<td class='" + selectedCellCss + "' onclick='FilterTrialTable(event, 3, " + d.WorkflowId + ")'>" + d.PendingForLock + "</td>";


                //status = 4
                if (VictoryApp.AdvancedFilter != null) {
                    if (d.WorkflowId == VictoryApp.AdvancedFilter.workflowId) {
                        if (VictoryApp.AdvancedFilter.status == 4) {
                            selectedCellCss = "RowClick";
                        } else {
                            selectedCellCss = "";
                        }
                    } else {
                        selectedCellCss = "";
                    }
                } else {
                    selectedCellCss = "";
                }
                filterTableBase += "<td class='" + selectedCellCss + "' onclick='FilterTrialTable(event, 4, " + d.WorkflowId + ")'>" + d.Completed + "</td></tr>";

            }

            filterTableBase += "</tbody>";

            $('#FilterTable').html(filterTableHeader + filterTableBase + '</table>');

            deferred.resolve();

        });

    return deferred;

}


function FilterTrialTable(e, status, workflowId) {

    ToggleClick(e, ".scrollTable", "RowClick", 'td', "self");

    $.mobile.loading('show');

    if (status == 999 || workflowId == '') {
        VictoryApp.AdvancedFilter = null;
    } else {
        VictoryApp.AdvancedFilter = {'workflowId': workflowId, 'status': status};
    }

    VictoryStorage.Trials.list(VictoryApp.AdvancedFilter)
        .then(function (data) {

            var deferred = $.Deferred();

            //clear collection
            MainTable = [];

            //clear list;
            $('#TrialList').columns('destroy');

            //fill trial list
            loadTrialList(data);

            UpdateTrialList();

            if (data.length == 0) {
                VictoryStorage.Workflows.list()
                    .then(function (workflows) {
                        dvtitle.innerHTML = "";
                        dvcontainer.innerHTML = GetEmptyComplianceTable(workflows);
                        $('#CDashboardTrialNote').attr('onclick', '');
                        deferred.resolve();
                    });
            } else {
                deferred.resolve();
            }

            return deferred.promise();

        })
        .then(function () {
            UpdateDiv();
            $.mobile.loading('hide');
        });


}

var ComplianceTableBase = "<table id=\"FormTable\" style=\"width: 99%; border-collapse: collapse; margin-left: auto; margin-right: auto; table-layout: fixed; margin-top: 15px\">";

ComplianceTableBase += "<tr><th colspan=\"2\">Site Selection Checklist</th>" +
    "<th></th>" +
    "<th colspan=\"4\">Compliance Exceptions</th>" +
    "<th colspan=\"4\">Pre-Planting</th>" +
    "<th colspan=\"4\">Dicamba Spray Tracking</th>" +
    "<th colspan=\"4\">Bin Inspections</th>" +
    "<th></th>" +
    "<th colspan=\"2\">Volunteer Monitoring</th></tr>" +
    "<tr><th colspan=\"2\" class=\"TableHeader\"></th>" +
    "<th></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th></th>" +
    "<th colspan=\"2\" class=\"TableHeader\"></th></tr>";

var ComplianceEndTableBase = "<tr><th></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th></tr>" +
    "<tr><th></th>" +
    "<th colspan=\"4\">Land Contracts</th>" +
    "<th colspan=\"4\">Compliance Map</th>" +
    "<th colspan=\"4\">Planting</th>" +
    "<th colspan=\"4\">In-Season Monitoring</th>" +
    "<th colspan=\"4\">Harvest and Destruct</th></tr>";

var ComplianceTableRowBase = "<tr class=\"check\" style=\"border-radius: 6px; -moz-border-radius: 6px; border: #666362 solid\">" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "<td class=\"check\"></td>" +
    "</tr>";

var ComplianceTableRowBaseSmall = {'Emp. Number': '', 'First Name': '', 'Last Name': ''};

function Toggle(whatToggle) {
    $("#" + whatToggle).toggle(1000);
}

function ToggleGPSInfo() {
    VictoryStorage.Trials
        .getGPSInfo(lastTrialObject.TrialId)
        .then(function (gps) {
            $('.GPSPoint1').text(gps[56] + ' / ' + gps[57]);
            $('.GPSPoint2').text(gps[58] + ' / ' + gps[59]);
            $('.GPSPoint3').text(gps[60] + ' / ' + gps[61]);
            $('.GPSPoint4').text(gps[62] + ' / ' + gps[63]);
        })
        .then(function () {
            Toggle('PlantingGPSInfo');
        })
}

$(window).resize(function () {
    UpdateDiv();
    TableResize();
}).resize(); // Trigger resize handler

function TableResize() {

    var lineWidth = 1;
    var width1 = $('.scrollThead th:nth-child(1)').width() + lineWidth;
    $('.scrollTbody td:nth-child(1)').css('width', width1 + "px");

    var width2 = $('.scrollThead th:nth-child(2)').width() + lineWidth;
    $('.scrollTbody td:nth-child(2)').css('width', width2 + "px");

    var width3 = $('.scrollThead th:nth-child(3)').width() + lineWidth;
    $('.scrollTbody td:nth-child(3)').css('width', width3 + "px");

    var width4 = $('.scrollThead th:nth-child(4)').width() + lineWidth;
    $('.scrollTbody td:nth-child(4)').css('width', width4 + "px");

    var width5 = $('.scrollThead th:nth-child(5)').width() + lineWidth;
    $('.scrollTbody td:nth-child(5)').css('width', width5 + "px");

    var width6 = $('.scrollThead th:nth-child(6)').width() + lineWidth;
    $('.scrollTbody td:nth-child(6)').css('width', width6 + "px");


}


function showModal() {
    //$(".modalBack").removeClass("modalBack").addClass("modalBack2");
}

function hideModal() {
    //$(".modalBack2").removeClass("modalBack2").addClass("modalBack");
}

function UpdateTrialList() {

    if (MainTable.length == 0) {
        return;
    }

    //$('#TrialList').columns('destroy');

    $('#TrialList').columns({
        data: MainTable,
        template: '<!-- Search Box: Only rendered while search is true --> '
        + '{{#search}} <div class="ui-columns-search"> '
        + '<input class="ui-table-search" placeholder="Search" type="text" name="query" data-columns-search="true" value="{{query}}" /> </div> {{/search}} '
        + '<!-- Search Box: Only rendered while search is true --> '
        + '<!-- Columns Table: Only rendered while table is true --> '
        + '{{#table}} <div class="ui-columns-table" data-columns-table="true"> '
        + '<table class="ui-table"> <!-- Columns Table Head: Headers have 4 possible states (sortable, notSortable, sortedUp, sortedDown) --> <thead> {{#headers}} {{#sortable}} <th class="ui-table-sortable" data-columns-sortby="{{key}}">{{header}}</th> {{/sortable}} {{#notSortable}} <th class="">{{header}}</th> {{/notSortable}} {{#sortedUp}} <th class="ui-table-sort-up ui-table-sortable" data-columns-sortby="{{key}}">{{header}} <span class="ui-arrow">&#x25B2;</span></th> {{/sortedUp}} {{#sortedDown}} <th class="ui-table-sort-down ui-table-sortable" data-columns-sortby="{{key}}">{{header}} <span class="ui-arrow">&#x25BC;</span></th> {{/sortedDown}} {{/headers}} </thead> '
        + '<!-- Columns Table Head: Headers have 4 possible states (sortable, notSortable, sortedUp, sortedDown) --> '
        + '<!-- Columns Table Body: Table columns are rendered outside of this template  --> '
        + '<tbody> {{#rows}} {{{.}}} {{/rows}} </tbody> '
        + '<!-- Columns Table Body: Table columns are rendered outside of this template  --> </table> '
            //+ '<!-- Columns Controls  --> '
        + '</div> {{/table}} <!-- Columns Table: Only rendered while table is true -->',
        paginating: false,
        searchHandler: function (e) {
            $.mobile.loading('show');
            this.liveSearch ? this.create() : e.keyCode == "13" && this.create();
            UpdateDiv();
            $.mobile.loading('hide');
        },
    });

    $("#TrialList").find(".ui-table-footer").css({
        'display': 'none'
    });

    $("#TrialList").find('.ui-columns-table').css({
        "height": ($('.innerDiv2').height() - 51) + "px", "overflow-y": "auto"
    });
}
