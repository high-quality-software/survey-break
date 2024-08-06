$(document).keypress(function (event) {

    var keycode = event.which;
    if (keycode == '13' && $.mobile.activePage.attr("id") == 'Login') {
        $('#SubmitLogin').click();
    }

});

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

function ChangeClasses(trialId) {
    var DATA = GetLocalStorageData("D01", trialId, "Trial_Id"); //Get  the Key 
    var BUTTONS_ARRAY = [".NavSiteSelec", ".NavLandContr", ".NavCompliExce", ".NavCompliMap", ".NavPrePlanting", ".NavPlanting", ".NavDicamApp", ".NavInSeas", ".NavBinInspec", ".NavHaverst", ".NavVolMoni"];
    var FORM_ARRAY = ["Site_Selection_Checklist", "Land_Contracts", "Compliance_Exceptions", "Compliance_Map", "PrePlanting", "Planting", "Dicamba_Spray_Tracking", "In_Season_Monitoring", "Bin_Inspections", "Harvest_and_Destruct", "Volunteer_Monitoring", "Last_Page"];

    RemoveClasses(".NavSiteSelec");
    $(".NavSiteSelec").addClass(GetColorNav(parseInt(DATA.Site_Selection_Checklist)) + "StartNav");

    if ((parseInt(DATA[FORM_ARRAY[0]]) + parseInt(DATA[FORM_ARRAY[1]]) + parseInt(DATA[FORM_ARRAY[2]]) + parseInt(DATA[FORM_ARRAY[3]])) === 16) {
        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(4) + "StopNav");
    } else if ((DATA[FORM_ARRAY[0]] + DATA[FORM_ARRAY[1]] + DATA[FORM_ARRAY[2]] + DATA[FORM_ARRAY[3]]).search("3") !== -1) {
        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(3) + "StopNav");
    } else if ((DATA[FORM_ARRAY[0]] + DATA[FORM_ARRAY[1]] + DATA[FORM_ARRAY[2]] + DATA[FORM_ARRAY[3]]).search("2") !== -1) {
        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(2) + "StopNav");
    } else if ((DATA[FORM_ARRAY[0]] + DATA[FORM_ARRAY[1]] + DATA[FORM_ARRAY[2]] + DATA[FORM_ARRAY[3]]).search("1") !== -1) {
        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(1) + "StopNav");
    } else {
        RemoveClasses(".NavStopPrePlant");
        $(".NavStopPrePlant").addClass(GetColorNav(0) + "StopNav");
    }

    if ((parseInt(DATA[FORM_ARRAY[4]]) + parseInt(DATA[FORM_ARRAY[5]])) === 8) {
        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(4) + "StopNav");
    } else if ((DATA[FORM_ARRAY[4]] + DATA[FORM_ARRAY[5]]).search("3") !== -1) {
        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(3) + "StopNav");
    } else if ((DATA[FORM_ARRAY[4]] + DATA[FORM_ARRAY[5]]).search("2") !== -1) {
        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(2) + "StopNav");
    } else if ((DATA[FORM_ARRAY[4]] + DATA[FORM_ARRAY[5]]).search("1") !== -1) {
        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(1) + "StopNav");
    } else {
        RemoveClasses(".NavStopPlant");
        $(".NavStopPlant").addClass(GetColorNav(0) + "StopNav");
    }

    if ((parseInt(DATA[FORM_ARRAY[6]]) + parseInt(DATA[FORM_ARRAY[7]]) + parseInt(DATA[FORM_ARRAY[8]]) + parseInt(DATA[FORM_ARRAY[9]])) === 16) {
        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(4) + "StopNav");
    } else if ((DATA[FORM_ARRAY[6]] + DATA[FORM_ARRAY[7]] + DATA[FORM_ARRAY[8]] + DATA[FORM_ARRAY[9]] + DATA[FORM_ARRAY[10]]).search("3") !== -1) {
        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(3) + "StopNav");
    } else if ((DATA[FORM_ARRAY[6]] + DATA[FORM_ARRAY[7]] + DATA[FORM_ARRAY[8]] + DATA[FORM_ARRAY[9]] + DATA[FORM_ARRAY[10]]).search("2") !== -1) {
        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(2) + "StopNav");
    } else if ((DATA[FORM_ARRAY[6]] + DATA[FORM_ARRAY[7]] + DATA[FORM_ARRAY[8]] + DATA[FORM_ARRAY[9]] + DATA[FORM_ARRAY[10]]).search("1") !== -1) {
        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(1) + "StopNav");
    } else {
        RemoveClasses(".NavStopHarvest");
        $(".NavStopHarvest").addClass(GetColorNav(0) + "StopNav");
    }

    for (var I = 1; I < BUTTONS_ARRAY.length; I++) {
        var NAV_BTN = BUTTONS_ARRAY[I];
        var NAV_FORM = FORM_ARRAY[I];
        RemoveClasses(NAV_BTN);
        $(NAV_BTN).addClass(GetColorNav(parseInt(DATA[NAV_FORM])) + "ProgressNav");
    }
}

function OpenLastPage(localTrialId, trialId) {
    var trial = localStorage.getItem(localTrialId);
    var data = JSON.parse(trial);
    var formName = data.Last_Page;
    OpenForm(formName, trialId);
}

function NavCheckInitialGroup(data)
{
    var goToPageCompliance = false;

    if (data.Site_Selection_Checklist != 4)
    {
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

function NavClick(formName, trialId) {

    //if second argument not passed, then use trialsId global variable
    trialId = trialId || trialsId;

    var data = GetLocalStorageData("D01", trialId, "Trial_Id"); //Get  the Key 
    var goToPageCompliance = false;

    //Initial Group
    if (formName == "Form_Site_Selection_Checklist") {
        OpenForm(formName, trialId);
    } else if (formName == "Form_Land_Contracts") {
        OpenForm(formName, trialId);
    } else if (formName == "Form_Compliance_Exceptions") {
        OpenForm(formName, trialId);
    } else if (formName == "Form_Compliance_Map") {
        OpenForm(formName, trialId);
    }
    //Planting Group
    else if (formName == "Form_PrePlanting") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4
            && data.Land_Contracts == 4
            && data.Compliance_Exceptions == 4
            && data.Compliance_Map == 4) {
            OpenForm(formName, trialId);
        } else {
            goToPageCompliance = NavCheckInitialGroup(data);
        }

    } else if (formName == "Form_Planting") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4
            && data.Land_Contracts == 4
            && data.Compliance_Exceptions == 4
            && data.Compliance_Map == 4) {
            OpenForm(formName, trialId);
        } else {
            goToPageCompliance = NavCheckInitialGroup(data);
        }

    } else if (formName == "Form_Dicamba_Spray_Tracking") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4
            && data.Land_Contracts == 4
            && data.Compliance_Exceptions == 4
            && data.Compliance_Map == 4) {
            OpenForm(formName, trialId);
        } else {
            goToPageCompliance = NavCheckInitialGroup(data);
        }
    }
    //Harvest Group
    else if (formName == "Form_In_Season_Monitoring") {
        //Trial Info
        if (data.PrePlanting == 4
            && data.Planting == 4
            && data.Dicamba_Spray_Tracking == 4) {
            OpenForm(formName, trialId);
        } else {
            goToPageCompliance = NavCheckPlantingGroup(data);
        }
    } else if (formName == "Form_Bin_Inspections") {
        //Trial Info
        if (data.PrePlanting == 4
            && data.Planting == 4
            && data.Dicamba_Spray_Tracking == 4) {
            OpenForm(formName, trialId);
        } else {
            goToPageCompliance = NavCheckPlantingGroup(data);
        }
    } else if (formName == "Form_Harvest_and_Destruct") {
        //Trial Info
        if (data.PrePlanting == 4
            && data.Planting == 4
            && data.Dicamba_Spray_Tracking == 4) {
            OpenForm(formName, trialId);
        } else {
            goToPageCompliance = NavCheckPlantingGroup(data);
        }
    } else if (formName == "Form_Volunteer_Monitoring") {
        //Trial Info
        if (data.In_Season_Monitoring == 4
            && data.Bin_Inspections == 4
            && data.Harvest_and_Destruct == 4) {
            OpenForm(formName, trialId);
        } else {
            goToPageCompliance = NavCheckHarvestGroup(data);
        }
    }

    if (goToPageCompliance) {
        $.mobile.navigate('#PageCompliance');
    }
}

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
    if (CheckNetworkStatus() != true) {
        $("#Compliance_Exceptions_Attachment").addClass("ui-state-disabled masterTooltip");
        $("#Compliance_Exceptions_Attachment").prop('title', 'Need to be on Monsanto Network in order to upload an image.');
        ActiveTooltip();
    }
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
    if (CheckNetworkStatus() != true) {
        $("#Compliance_Map_Attachment").addClass("ui-state-disabled masterTooltip");
        $("#Compliance_Map_Attachment").prop('title', 'Need to be on Monsanto Network in order to upload an image.');
        ActiveTooltip();
    }
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

    var datacount = localStorage.length;
    for (var i1 = 0; i1 < datacount; i1++) {
        if (localStorage.key(i1).substr(0, 3) == "C01") {
            var trial = localStorage.getItem(localStorage.key(i1)); //Get Data from Key 
            var data = JSON.parse(trial); //Parse the Data back into the object 

            $('#Next_Planted_Field').append('<option value=' + data.TrialID + '>' + data.TrialID + ' - ' + data.Name + '</option>');
        }
    }
    $('#Next_Planted_Field').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Next_Planted_Field")).change();
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

function IsBinInspection2Empty() {
    if (getAnswerLocal(189) == ""
        && getAnswerLocal(190) == ""
        && getAnswerLocal(205) == ""
        && getAnswerLocal(206) == ""
        && getAnswerLocal(289) == ""
        && getAnswerLocal(290) == 1015
        && getAnswerLocal(291) == 1015
        && getAnswerLocal(292) == 1015
        && getAnswerLocal(294) == 1015
        && getAnswerLocal(315) == ""
        && getAnswerLocal(316) == ""
        && getAnswerLocal(326) == 1015
        && getAnswerLocal(327) == 1015
        && getAnswerLocal(328) == 1015
        ) {
        return true;
    }
    else {
        return false;
    }

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

function IsBinInspection3Empty() {
    if (getAnswerLocal(207) == ""
        && getAnswerLocal(208) == ""
        && getAnswerLocal(223) == ""
        && getAnswerLocal(224) == ""
        && getAnswerLocal(295) == ""
        && getAnswerLocal(296) == 1015
        && getAnswerLocal(297) == 1015
        && getAnswerLocal(298) == 1015
        && getAnswerLocal(300) == 1015
        && getAnswerLocal(317) == ""
        && getAnswerLocal(318) == ""
        && getAnswerLocal(329) == 1015
        && getAnswerLocal(330) == 1015
        && getAnswerLocal(331) == 1015) {
        return true;
    }
    else {
        return false;
    }

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

function IsBinInspection4Empty() {
    if (getAnswerLocal(225) == ""
        && getAnswerLocal(226) == ""
        && getAnswerLocal(241) == ""
        && getAnswerLocal(242) == ""
        && getAnswerLocal(301) == ""
        && getAnswerLocal(302) == 1015
        && getAnswerLocal(303) == 1015
        && getAnswerLocal(304) == 1015
        && getAnswerLocal(306) == 1015
        && getAnswerLocal(319) == ""
        && getAnswerLocal(320) == ""
        && getAnswerLocal(332) == 1015
        && getAnswerLocal(333) == 1015
        && getAnswerLocal(334) == 1015) {
        return true;
    }
    else {
        return false;
    }
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

function IsBinInspection5Empty() {
    if (getAnswerLocal(243) == ""
        && getAnswerLocal(244) == ""
        && getAnswerLocal(259) == ""
        && getAnswerLocal(260) == ""
        && getAnswerLocal(307) == ""
        && getAnswerLocal(308) == 1015
        && getAnswerLocal(309) == 1015
        && getAnswerLocal(310) == 1015
        && getAnswerLocal(312) == 1015
        && getAnswerLocal(321) == ""
        && getAnswerLocal(322) == ""
        && getAnswerLocal(335) == 1015
        && getAnswerLocal(336) == 1015
        && getAnswerLocal(337) == 1015) {
        return true;
    }
    else {
        return false;
    }
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
});

function OpenForm(formName, trialId) {
    trialsId = trialId;
    ChangeClasses(trialId);

    $('.TrialCropHeader').text(GetLocalStorageSingleData("C03", GetLocalStorageSingleData("C01", trialsId, "TrialID", "CropID"), "CropID", "Name"));
    $('.TrialTraitHeader').text(GetLocalStorageSingleData("C04", GetLocalStorageSingleData("C01", trialsId, "TrialID", "TraitID"), "TraitID", "Name"));
    $('.TrialComplianceStatusHeader').text(GetLocalStorageSingleData("C01", trialsId, "TrialID", "ComplianceStatus"));
    $('.TrialIDHeader').text(trialsId);
    $('.TrialTrialNameHeader').text(GetLocalStorageSingleData("C01", trialsId, "TrialID", "Name"));
    $('.TrialFarmNameHeader').text(GetLocalStorageSingleData("C01", trialsId, "TrialID", "FarmName"));
    $('.TrialTrialCityHeader').text(GetLocalStorageSingleData("C01", trialsId, "TrialID", "City"));
    $('.TrialTrialStateHeader').text(GetLocalStorageSingleData("C01", trialsId, "TrialID", "State"));
    $('.TrialTrialCountryHeader').text(GetLocalStorageSingleData("C01", trialsId, "TrialID", "Country"));
    $('.TrialSRRNameHeader').text(GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "PrimarySRRUserID"), "UserID", "FirstName") + ' ' + GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "PrimarySRRUserID"), "UserID", "LastName"));
    $('.TrialSRRPhoneNumberHeader').text(GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "PrimarySRRUserID"), "UserID", "OfficeNumber"));
    $('.TrialSRRSiteLocationHeader').text(GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "PrimarySRRUserID"), "UserID", "SiteLocation"));
    $('.TrialIRPNameHeader').text(GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "IRPUserID"), "UserID", "FirstName") + ' ' + GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "IRPUserID"), "UserID", "LastName"));
    $('.TrialIRPPhoneNumberHeader').text(GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "IRPUserID"), "UserID", "OfficeNumber"));
    $('.TrialIRPSiteLocationHeader').text(GetLocalStorageSingleData("C02", GetLocalStorageSingleData("C01", trialsId, "TrialID", "IRPUserID"), "UserID", "SiteLocation"));

    $('.GPSPoint1').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_1_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_1_long"));
    $('.GPSPoint2').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_2_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_2_long"));
    $('.GPSPoint3').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_3_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_3_long"));
    $('.GPSPoint4').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_4_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_4_long"));
    $('.GPSPoint5').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_5_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_5_long"));
    $('.GPSPoint6').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_6_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_6_long"));
    $('.GPSPoint7').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_7_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_7_long"));
    $('.GPSPoint8').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_8_lat") + ' / ' + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_8_long"));

    $(':radio').prop('checked', false);
    $(':checkbox').prop('checked', false);
    $('select').val('0').change();
    $('input[type="text"]').val('');
    $('input[type="date"]').val('');
    var volKey;
    var verifyifnull;
    var VariableForm;

    if (formName == "Form_Site_Selection_Checklist") {
        //Site Selection Checklist
        workingForm = GetLocalStorageKey("F03", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F03", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Site_Selection_Checklist") === "4") ? true : false); //$('#Mitigation_Controls').val('');

        if (!(typeof verifyifnull === 'undefined' || verifyifnull === null)) {
            //Site Selection Checklist
            setAnswer(40);
            setAnswer(41);
            setAnswer(42);
            setAnswer(43);
            setAnswer(44);
            setAnswer(45);
            setAnswer(46);
            setAnswer(47);
        }
        $('#SSCTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_Site_Selection_ChecklistTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Land_Contracts") {
        //Land Contracts
        workingForm = GetLocalStorageKey("F04", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F04", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Land_Contracts") === "4") ? true : false); //$('#Mitigation_Controls').val('');

        if (!(typeof verifyifnull === 'undefined' || verifyifnull === null)) {
            //Land Contracts
            setAnswer(48);
            setAnswer(49);
        }
        $('#LandContractsTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_Land_ContractsTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Compliance_Exceptions") {
        //Compliance Exceptions
        workingForm = GetLocalStorageKey("F05", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F05", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Compliance_Exceptions") == 4) ? true : false); //$(':radio').prop('checked', false);
        BigPic = '';
        suffix = '';
        filename = "";
        size = 0;

        var sphb1 = $("#Date_of_ExceptionYeslbl");
        var sphb2 = $("#Date_of_ExceptionYes");
        var sphb3 = $("#Duration_of_ExceptionYeslbl");
        var sphb4 = $("#Duration_of_ExceptionYes");
        var sphb5 = $("#Trial_typeYeslbl");
        var sphb6 = $("#Trial_typeYes");
        var sphb7 = $("#Exception_DescriptionYeslbl");
        var sphb8 = $("#Exception_DescriptionYes");
        var sphb9 = $("#Compliance_Exceptions_AttachmentYeslbl");
        var sphb10 = $("#Compliance_Exceptions_AttachmentYes");
        var sphb11 = $("#Compliance_Attachmentslbl");
        var sphb12 = $("#Compliance_Attachments");

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Compliance Exceptions
            setAnswer(50);

            if (getAnswerLocal(50) == 1001) {

                setAnswer(51);
                setAnswer(52);
                setAnswer(53);
                setAnswer(54);

                sphb1.show();
                sphb2.show();
                sphb3.show();
                sphb4.show();
                sphb5.show();
                sphb6.show();
                sphb7.show();
                sphb8.show();
                sphb9.show();
                sphb10.show();

                if (getAnswerLocal(9905) == "") {
                    sphb9.show();
                    sphb10.show();
                    sphb11.hide();
                    sphb12.hide();
                } else {
                    sphb9.hide();
                    sphb10.hide();
                    sphb11.show();
                    sphb12.show();
                    $('#Compliance_Attachments_link').text(getAnswerLocal(9905));
                    $('#Compliance_Attachments_link').attr("onClick", "OpenAttachment('" + getAnswerLocal(8805) + "',popup_Compliance_Exceptions_Attachment);");
                    $('#Compliance_Attachments_link_Delete').attr("onClick", "alertify.confirm('Are you sure you want to delete the attachment?', function(e, str) {if (e) {DeleteAttachment('" + getAnswerLocal(9905) + "'," + trialsId + ",5,'F05_Form_Compliance_Exceptions' );var sphb1 = $('#Compliance_Exceptions_AttachmentYeslbl');var sphb2 = $('#Compliance_Exceptions_AttachmentYes');var sphb3 = $('#Compliance_Attachmentslbl');var sphb4 = $('#Compliance_Attachments');sphb1.show();sphb2.show();sphb3.hide();sphb4.hide();$('#Compliance_Attachments_link').text('');}});");
                }

            } else {
                sphb1.hide();
                sphb2.hide();
                sphb3.hide();
                sphb4.hide();
                sphb5.hide();
                sphb6.hide();
                sphb7.hide();
                sphb8.hide();
                sphb9.hide();
                sphb10.hide();
                sphb11.hide();
                sphb12.hide();
            }

        } else {

            sphb1.hide();
            sphb2.hide();
            sphb3.hide();
            sphb4.hide();
            sphb5.hide();
            sphb6.hide();
            sphb7.hide();
            sphb8.hide();
            sphb9.hide();
            sphb10.hide();
            sphb11.hide();
            sphb12.hide();

            $('#Trial_typeCheckboxa').prop('checked', false);
            $('#Trial_typeCheckboxb').prop('checked', false);
            $('#Trial_typeCheckboxc').prop('checked', false);
            $('#Trial_typeCheckboxd').prop('checked', false);

        }
        $('#ComplianceExceptionsTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_Compliance_ExceptionsTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Compliance_Map") {
        //Compliance Map
        workingForm = GetLocalStorageKey("F06", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F06", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Compliance_Map") == 4) ? true : false); //$(':radio').prop('checked', false);
        BigPic = '';
        suffix = '';
        filename = "";
        size = 0;
        $('#Compliance_Map_Attachment_link').text('');

        var sphb13 = $("#Compliance_Map_Attachmentlbl_Div");
        var sphb14 = $("#Compliance_Map_Attachment_Div");
        var sphb15 = $("#Compliance_Map_Attachment_linklbl_Div");
        var sphb16 = $("#Compliance_Map_Attachment_link_Div");
        sphb13.show();
        sphb14.show();
        sphb15.hide();
        sphb16.hide();
        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Compliance Map

            setAnswer(55);
            setAnswer(56);
            setAnswer(57);
            setAnswer(58);
            setAnswer(59);
            setAnswer(60);
            setAnswer(61);
            setAnswer(62);
            setAnswer(63);
            setAnswer(64);
            setAnswer(65);
            setAnswer(66);
            setAnswer(67);
            setAnswer(68);
            setAnswer(69);
            setAnswer(70);
            setAnswer(71);
            setAnswer(72);

            var sphb13 = $("#Compliance_Map_Attachmentlbl_Div");
            var sphb14 = $("#Compliance_Map_Attachment_Div");
            var sphb15 = $("#Compliance_Map_Attachment_linklbl_Div");
            var sphb16 = $("#Compliance_Map_Attachment_link_Div");

            if (getAnswerLocal(9906) == "") {
                sphb13.show();
                sphb14.show();
                sphb15.hide();
                sphb16.hide();
            } else {
                sphb13.hide();
                sphb14.hide();
                sphb15.show();
                sphb16.show();
                $('#Compliance_Map_Attachment_link').text(getAnswerLocal(9906));
                $('#Compliance_Map_Attachment_link').attr("onClick", "OpenAttachment('" + getAnswerLocal(8806) + "', popup_Compliance_Map_Attachment);");
                $('#Compliance_Map_Attachment_link_Delete').attr("onClick", "alertify.confirm('Are you sure you want to delete the attachment?', function(e, str) {if (e) {DeleteAttachment('" + getAnswerLocal(9906) + "'," + trialsId + ",6,'F06_Form_Compliance_Map' );var sphb1 = $('#Compliance_Map_Attachmentlbl_Div');var sphb2 = $('#Compliance_Map_Attachment_Div');var sphb3 = $('#Compliance_Map_Attachment_linklbl_Div');var sphb4 = $('#Compliance_Map_Attachment_link_Div');sphb1.show();sphb2.show();sphb3.hide();sphb4.hide();$('#Compliance_Map_Attachment_link').text('');}});");
            }
        }
        $('#ComplianceMapTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_Compliance_MapTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_PrePlanting") {
        //PrePlanting
        workingForm = GetLocalStorageKey("F18", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F18", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "PrePlanting") == 4) ? true : false); //$('#Mitigation_Controls').val('');

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Site Selection Checklist
            setAnswer(75);
            setAnswer(76);
            setAnswer(77);
            setAnswer(78);
        }
        $('#PrePlantTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_PrePlantingTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Planting") {
        //Planting
        workingForm = GetLocalStorageKey("F19", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F19", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Planting") == 4) ? true : false);
        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Site Selection Checklist

            setAnswer(79);
            setAnswer(80);
            setAnswer(81);
            setAnswer(82);
            setAnswer(83);

            var sphb1 = $("#Commercial_Soybeans_Planted_Yes");
            if (getAnswerLocal(83) == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            setAnswer(84);

            var sphb1 = $("#Type_of_Isolation_Natural");

            if (getAnswerLocal(84) == "1007") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            setAnswer(85);
            setAnswer(86);
            setAnswer(87);

            var sphb1 = $("#Seed_Tender_Used_Yes");

            if (getAnswerLocal(87) == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            setAnswer(88);

            var sphb1 = $("#Seed_Tender_Cleaned_Out_Yes");

            if (getAnswerLocal(88) == "1001") {
                sphb1.show();
            } else {
                if (getAnswerLocal(88) == 1009) {
                    seed_Tender_Cleaned_Out_Move_To = true;
                }
                sphb1.hide();
            }

            setAnswer(89);
            setAnswer(90);
            setAnswer(91);

            var sphb1 = $("#Planter_Cleaned_Out_Yes");

            if (getAnswerLocal(91) == "1001") {
                sphb1.show();
            } else {
                if (VariableForm == 1009) {
                    planter_Cleaned_Out_Move_To = true;
                }
                sphb1.hide();
            }

            setAnswer(92);
            setAnswer(93);
            setAnswer(94);

            var sphb1 = $("#Seed_Leftover_after_Planting_Yes");

            if (getAnswerLocal(94) == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            setAnswer(95);
            setAnswer(96);

            if (seed_Tender_Cleaned_Out_Move_To == true || planter_Cleaned_Out_Move_To == true) {
                $("#Next_Planted_Field_Row").show();
            }
        } else {
            $("#Commercial_Soybeans_Planted_Yes").hide();
            $("#Type_of_Isolation_Natural").hide();
            $("#Seed_Tender_Used_Yes").hide();
            $("#Seed_Tender_Cleaned_Out_Yes").hide();
            $("#Planter_Cleaned_Out_Yes").hide();
            $("#Seed_Leftover_after_Planting_Yes").hide();
            $("#Next_Planted_Field_Row").hide();
        }
        $('#PlantTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_PlantingTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Dicamba_Spray_Tracking") {
        //Dicamba Spray Tracking
        workingForm = GetLocalStorageKey("F10", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F10", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Dicamba_Spray_Tracking") === "4") ? true : false);

        if (!(typeof verifyifnull === 'undefined' || verifyifnull === null)) {
            //Dicamba Spray Tracking
            setAnswer(98);
            setAnswer(99);
            setAnswer(100);
            setAnswer(101);
            setAnswer(102);
            setAnswer(103);
            setAnswer(104);
            setAnswer(105);
            setAnswer(106);
            setAnswer(107);
            setAnswer(108);
            setAnswer(109);
            setAnswer(110);
            setAnswer(111);
            setAnswer(112);
            setAnswer(113);
            setAnswer(114);
            setAnswer(115);
            setAnswer(116);
            setAnswer(117);
            setAnswer(118);
            setAnswer(119);
            setAnswer(120);
            setAnswer(121);
            setAnswer(122);
            setAnswer(123);
            setAnswer(124);
            setAnswer(125);
            setAnswer(126);
            setAnswer(127);
            setAnswer(128);
            setAnswer(129);
            setAnswer(130);
            setAnswer(131);
            setAnswer(132);
            setAnswer(133);
            setAnswer(134);
            setAnswer(135);
            setAnswer(136);
            setAnswer(137);
            setAnswer(138);
            setAnswer(139);
            setAnswer(140);
            setAnswer(141);
            setAnswer(142);
            setAnswer(143);
            setAnswer(144);
            setAnswer(145);
            setAnswer(146);
            setAnswer(147);
            setAnswer(148);
            setAnswer(149);
            setAnswer(150);
            setAnswer(151);
            setAnswer(152);
            setAnswer(153);
            setAnswer(154);
            setAnswer(155);
            setAnswer(156);
            setAnswer(157);

            if (getAnswerLocal(98) === "1001") {
                $("." + getName(98) + "_Yes").show();
                if (getAnswerLocal(105) === "1001") {
                    $("#" + getName(106) + "_lbl_Yes").show();
                    $("#" + getName(106) + "_Yes").show();
                } else {
                    $("#" + getName(106) + "_lbl_Yes").hide();
                    $("#" + getName(106) + "_Yes").hide();
                }
                if (getAnswerLocal(106) === "1030") {
                    $("#" + getName(107) + "_lbl_Yes").show();
                    $("#" + getName(107) + "_Yes").show();
                } else {
                    $("#" + getName(107) + "_lbl_Yes").hide();
                    $("#" + getName(107) + "_Yes").hide();
                }
            } else {
                $("." + getName(98) + "_Yes").hide();
                $("#" + getName(106) + "_lbl_Yes").hide();
                $("#" + getName(106) + "_Yes").hide();
                $("#" + getName(107) + "_lbl_Yes").hide();
                $("#" + getName(107) + "_Yes").hide();
            }

            if (getAnswerLocal(128) === "1001") {
                $("." + getName(128) + "_Yes").show();
                if (getAnswerLocal(135) === "1001") {
                    $("#" + getName(136) + "_lbl_Yes").show();
                    $("#" + getName(136) + "_Yes").show();
                } else {
                    $("#" + getName(136) + "_lbl_Yes").hide();
                    $("#" + getName(136) + "_Yes").hide();
                }
                if (getAnswerLocal(136) === "1030") {
                    $("#" + getName(137) + "_lbl_Yes").show();
                    $("#" + getName(137) + "_Yes").show();
                } else {
                    $("#" + getName(137) + "_lbl_Yes").hide();
                    $("#" + getName(137) + "_Yes").hide();
                }
            } else {
                $("." + getName(128) + "_Yes").hide();
                $("#" + getName(136) + "_lbl_Yes").hide();
                $("#" + getName(136) + "_Yes").hide();
                $("#" + getName(137) + "_lbl_Yes").hide();
                $("#" + getName(137) + "_Yes").hide();
            }
        } else {
            $("." + getName(98) + "_Yes").hide();
            $("#" + getName(106) + "_lbl_Yes").hide();
            $("#" + getName(106) + "_Yes").hide();
            $("#" + getName(107) + "_lbl_Yes").hide();
            $("#" + getName(107) + "_Yes").hide();
            $("." + getName(128) + "_Yes").hide();
            $("#" + getName(136) + "_lbl_Yes").hide();
            $("#" + getName(136) + "_Yes").hide();
            $("#" + getName(137) + "_lbl_Yes").hide();
            $("#" + getName(137) + "_Yes").hide();
        }
        $("#" + formName + "_TrialID").text(trialId);
        $('#DSTTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_Dicamba_Spray_TrackingTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_In_Season_Monitoring") {
        //In Season Monitoring
        workingForm = GetLocalStorageKey("F11", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F11", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "In_Season_Monitoring") === "4") ? true : false);

        if (!(typeof verifyifnull === 'undefined' || verifyifnull === null)) {
            //Dicamba Spray Tracking
            setAnswer(158);
            setAnswer(159);
            setAnswer(160);
            setAnswer(161);
            setAnswer(162);
            setAnswer(163);
            setAnswer(164);
            setAnswer(165);
            setAnswer(166);
            setAnswer(167);
            setAnswer(168);
            setAnswer(169);
            setAnswer(170);

            if (getAnswerLocal(158) === "1001") {
                $("." + getName(158) + "Yes").show();
                if (getAnswerLocal(161) === "1001") {
                    $("." + getName(161) + "Yes").show();
                } else {
                    $("." + getName(161) + "Yes").hide();
                }
                if (getAnswerLocal(166) === "1001") {
                    $("." + getName(166) + "Yes").show();
                } else {
                    $("." + getName(166) + "Yes").hide();
                }
            } else {
                $("." + getName(158) + "Yes").hide();
                $("." + getName(161) + "Yes").hide();
                $("." + getName(166) + "Yes").hide();
            }
        } else {
            $("." + getName(158) + "Yes").hide();
            $("." + getName(161) + "Yes").hide();
            $("." + getName(166) + "Yes").hide();
        }

        $("#" + formName + "_TrialID").text(trialId);
        $('#In_SeasonTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_In_Season_MonitoringTrialNote");');
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Bin_Inspections") {
        //Bin Inspections
        binKey = GetLocalStorageKey("F14", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F14", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Bin_Inspections") == 4) ? true : false);

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Bin Inspections
            workingForm = binKey;

            setAnswer(282);
            if (getAnswerLocal(282) == 1001) {
                $("#Bin_Inspection").show();

                setAnswer(171);
                setAnswer(172);
                //setAnswer(173);
                //setAnswer(174);
                //setAnswer(175);
                //setAnswer(176);
                //setAnswer(177);
                //setAnswer(178);
                //setAnswer(179);
                //setAnswer(180);
                //setAnswer(181);
                //setAnswer(182);
                //setAnswer(183);
                //setAnswer(184);
                //setAnswer(185);
                //setAnswer(186);
                setAnswer(187);
                setAnswer(188);
                setAnswer(283);
                setAnswer(284);
                setAnswer(285);
                setAnswer(286);
                //setAnswer(287);
                setAnswer(288);
                setAnswer(313);
                setAnswer(314);
                setAnswer(323);
                setAnswer(324);
                setAnswer(325);

                if (IsBinInspection2Empty()) {
                    $("input[name=Add_Other_BinRadio][value=1002]").prop('checked', true);
                }
                else {
                    $("input[name=Add_Other_BinRadio][value=1001]").prop('checked', true);
                    $("#Bin_Inspection2").show();
                    setAnswer(189);
                    setAnswer(190);
                    //setAnswer(191);
                    //setAnswer(192);
                    //setAnswer(193);
                    //setAnswer(194);
                    //setAnswer(195);
                    //setAnswer(196);
                    //setAnswer(197);
                    //setAnswer(198);
                    //setAnswer(199);
                    //setAnswer(200);
                    //setAnswer(201);
                    //setAnswer(202);
                    //setAnswer(203);
                    //setAnswer(204);
                    setAnswer(205);
                    setAnswer(206);
                    setAnswer(289);
                    setAnswer(290);
                    setAnswer(291);
                    setAnswer(292);
                    //setAnswer(293);
                    setAnswer(294);
                    setAnswer(315);
                    setAnswer(316);
                    setAnswer(326);
                    setAnswer(327);
                    setAnswer(328);


                    if (IsBinInspection3Empty()) {
                        $("input[name=Add_Other_Bin2Radio][value=1002]").prop('checked', true);
                    }
                    else {
                        $("input[name=Add_Other_Bin2Radio][value=1001]").prop('checked', true);
                        $("#Bin_Inspection3").show();
                        setAnswer(207);
                        setAnswer(208);
                        //setAnswer(209);
                        //setAnswer(210);
                        //setAnswer(211);
                        //setAnswer(212);
                        //setAnswer(213);
                        //setAnswer(214);
                        //setAnswer(215);
                        //setAnswer(216);
                        //setAnswer(217);
                        //setAnswer(218);
                        //setAnswer(219);
                        //setAnswer(220);
                        //setAnswer(221);
                        //setAnswer(222);
                        setAnswer(223);
                        setAnswer(224);
                        setAnswer(295);
                        setAnswer(296);
                        setAnswer(297);
                        setAnswer(298);
                        //setAnswer(299);
                        setAnswer(300);
                        setAnswer(317);
                        setAnswer(318);
                        setAnswer(329);
                        setAnswer(330);
                        setAnswer(331);

                        if (IsBinInspection4Empty()) {
                            $("input[name=Add_Other_Bin3Radio][value=1002]").prop('checked', true);
                        }
                        else {
                            $("input[name=Add_Other_Bin3Radio][value=1001]").prop('checked', true);
                            $("#Bin_Inspection4").show();
                            setAnswer(225);
                            setAnswer(226);
                            //setAnswer(227);
                            //setAnswer(228);
                            //setAnswer(229);
                            //setAnswer(230);
                            //setAnswer(231);
                            //setAnswer(232);
                            //setAnswer(233);
                            //setAnswer(234);
                            //setAnswer(235);
                            //setAnswer(236);
                            //setAnswer(237);
                            //setAnswer(238);
                            //setAnswer(239);
                            //setAnswer(240);
                            setAnswer(241);
                            setAnswer(242);
                            setAnswer(301);
                            setAnswer(302);
                            setAnswer(303);
                            setAnswer(304);
                            //setAnswer(305);
                            setAnswer(306);
                            setAnswer(319);
                            setAnswer(320);
                            setAnswer(332);
                            setAnswer(333);
                            setAnswer(334);

                            if (IsBinInspection5Empty()) {
                                $("input[name=Add_Other_Bin4Radio][value=1002]").prop('checked', true);
                            }
                            else {
                                $("input[name=Add_Other_Bin4Radio][value=1001]").prop('checked', true);
                                $("#Bin_Inspection5").show();
                                setAnswer(243);
                                setAnswer(244);
                                //setAnswer(245);
                                //setAnswer(246);
                                //setAnswer(247);
                                //setAnswer(248);
                                //setAnswer(249);
                                //setAnswer(250);
                                //setAnswer(251);
                                //setAnswer(252);
                                //setAnswer(253);
                                //setAnswer(254);
                                //setAnswer(255);
                                //setAnswer(256);
                                //setAnswer(257);
                                //setAnswer(258);
                                setAnswer(259);
                                setAnswer(260);
                                setAnswer(307);
                                setAnswer(308);
                                setAnswer(309);
                                setAnswer(310);
                                //setAnswer(311);
                                setAnswer(312);
                                setAnswer(321);
                                setAnswer(322);
                                setAnswer(335);
                                setAnswer(336);
                                setAnswer(337);
                            }
                        }
                    }
                }
            }
        }
        $('#BinInspectionsTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_BinInspectionsTrialNote");');

        $.mobile.navigate("#" + formName);

    } else if (formName == "Form_Harvest_and_Destruct") {
        //Harvest and Destruct
        hdKey = GetLocalStorageKey("F12", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F12", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Harvest_and_Destruct") == 4) ? true : false);

        loadBinNumberAndLocationInto("#HarvestAndDestructContent #H_Bin_Number_and_Location");
        loadTrialItemsInto("#HarvestAndDestructContent #Next_Harvested_Field");

        //$("#HarvestAndDestructContent .CD_Prior_to_flowering_No").hide();
        $("#HarvestAndDestructContent .H_Material_Stored_In_a_Bin").hide();
        $("#HarvestAndDestructContent .ECO_in_NHF").hide();
        $("#HarvestAndDestructContent .ECO_Yes").hide();

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Harvest and Destruct
            workingForm = hdKey;

            //setAnswer(261);
            //if (getAnswerLocal(261) == LookUp.NO) {
            //    $(".CD_Prior_to_flowering_No").show();
            //}
            //else {
            //    $(".CD_Prior_to_flowering_No").hide();
            //}

            //setAnswer(262);
            //setAnswer(263);
            setAnswer(264);
            setAnswer(265);
            //setAnswer(266);
            setAnswer(267);
            //if (getAnswerLocal(267) == "1001") {
            //    $(".H_Portion_Not_Harvested_Yes").show();
            //} else {
            //    $(".H_Portion_Not_Harvested_Yes").hide();
            //}

            //setAnswer(268);
            setAnswer(269);
            setAnswer(270);
            setAnswer(271);
            if (getAnswerLocal(271) == "1047" ||
                getAnswerLocal(271) == "1048") {
                $("#HarvestAndDestructContent .H_Material_Stored_In_a_Bin").show();
            }
            else {
                $("#HarvestAndDestructContent .H_Material_Stored_In_a_Bin").hide();
            }

            setAnswer(272);

            //Equipment_Cleaned_Out
            setAnswer(273);
            if (getAnswerLocal(273) == LookUp.YES) {
                $("#HarvestAndDestructContent .ECO_in_NHF").hide();
                $("#HarvestAndDestructContent .ECO_Yes").show();

            } else if (getAnswerLocal(273) == LookUp.NO) {
                $("#HarvestAndDestructContent .ECO_in_NHF").hide();
                $("#HarvestAndDestructContent .ECO_Yes").hide();

            } else if (getAnswerLocal(273) == LookUp.MovedtoAnotherStewardedFieldofSameVariety) {

                $("#HarvestAndDestructContent .ECO_Yes").hide();
                $("#HarvestAndDestructContent .ECO_in_NHF").show();
            }

            setAnswer(274);
            //setAnswer(275);

            setAnswer(276);
            setAnswer(277);
            setAnswer(278);
            setAnswer(279);
            setAnswer(280);
            //setAnswer(281);

            //setAnswer(338);
            setAnswer(339);
            setAnswer(340);
            setAnswer(341);
            setAnswer(342);
            setAnswer(343);

            setAnswer(344);
            setAnswer(345);
            //setAnswer(346);
            setAnswer(347);
            setAnswer(348);

        }

        $('#HarvestAndDestructTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_Harvest_and_DestructTrialNote");');
        $.mobile.navigate("#" + formName);

    } else if (formName == "Form_Volunteer_Monitoring") {
        volKey = GetLocalStorageKey("F16", trialsId, "Trial_Id"); //Get  the Key
        verifyifnull = GetLocalStorageData("F16", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Volunteer_Monitoring") == 4) ? true : false);

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Volunteer Monitoring
            workingForm = volKey;
            //workingFormId = GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Id_Volunteer");

            setAnswer(73);
            setAnswer(74);

            var plantedCrop = getAnswerLocal(73);

            if (plantedCrop == "1018" || plantedCrop == "1019" || plantedCrop == "1020" || plantedCrop == "99999") {
                $("#VolForm").show();
            } else {
                $("#VolForm").hide();
            }

            setAnswer(1);
            setAnswer(2);
            setAnswer(3);
            if (getAnswerLocal(3) == "99999") {
                $("#Method_of_Burn_Down_TDRdiv").show();
                $("#Method_of_Burn_Down_TDR_Herbicidediv").show();
            }
            setAnswer(4);
            setAnswer(5);
            setAnswer(6);
            setAnswer(7);
            if ($("#Method_of_Preemergence_Herbicide option:selected").val() == "99999") {
                $("#Method_of_Preemergence_TDRdiv").show();
                $("#Method_of_Preemergence_TDR_Herbicidediv").show();
            }
            setAnswer(8);
            setAnswer(9);
            setAnswer(10);
            setAnswer(11);
            if ($("#Method_of_Postemergence_Herbicide option:selected").val() == "99999") {
                $("#Method_of_Postemergence_TDRdiv").show();
                $("#Method_of_Postemergence_TDR_Herbicidediv").show();
            }
            setAnswer(12);
            setAnswer(13);
            setAnswer(14);
            setAnswer(15);
            if (getAnswerLocal(15) == 1002) {
                $("#Volapppostemergence2Bigdiv").show();
            } else {
                $("#Volapppostemergence2Bigdiv").hide();
            }

            setAnswer(16);
            setAnswer(17);
            if (getAnswerLocal(17) == "99999") {
                $("#Method_of_Postemergence2_TDRdiv").show();
                $("#Method_of_Postemergence2_TDR_Herbicidediv").show();
            }

            setAnswer(18);
            setAnswer(19);
            setAnswer(20);
            setAnswer(21);

            if (getAnswerLocal(21) == 1014) {
                $('#Volapppostemergence3Bigdiv').show();
            }
            setAnswer(22);
            setAnswer(23);
            if (getAnswerLocal(23) == "99999") {
                $("#Method_of_Postemergence3_TDRdiv").show();
                $("#Method_of_Postemergence3_TDR_Herbicidediv").show();
            }

            setAnswer(24);
            setAnswer(25);
            setAnswer(26);
            setAnswer(27);

            if (getAnswerLocal(27) == 1014) {
                $('#Volapppostemergence4Bigdiv').show();
            }

            setAnswer(28);
            setAnswer(29);
            if (getAnswerLocal(29) == "99999") {
                $("#Method_of_Postemergence4_TDRdiv").show();
                $("#Method_of_Postemergence4_TDR_Herbicidediv").show();
            }

            setAnswer(30);
            setAnswer(31);
            setAnswer(32);
            setAnswer(33);

            if (getAnswerLocal(33) == 1014) {
                $('#Volapppostemergence5Bigdiv').show();
            }

            setAnswer(34);
            setAnswer(35);
            if (getAnswerLocal(35) == "99999") {
                $("#Method_of_Postemergence5_TDRdiv").show();
                $("#Method_of_Postemergence5_TDR_Herbicidediv").show();
            }

            setAnswer(36);
            setAnswer(37);
            setAnswer(38);
            setAnswer(39);

        }
        $('#VolTrialNotes').attr('onclick', 'OpenPopup(' + trialsId + ', "popup_Form_Volunteer_MonitoringTrialNote");');
        $.mobile.navigate("#" + formName);
    } else {
        $.mobile.navigate("PageCompliance");
    }
}


var data = JSON.parse(localStorage.getItem("Login"));
if (data != undefined && data != null) {
    var panel = '<div data-role="panel" id="pushPanel" data-display="overlay" data-position="right" data-theme="b">' +
        '<div data-role="main">' +
        '<h3 style="text-align: center;">' + data.Name + '</h3>' +
        '<div data-role="collapsible" data-inset="false">' +
        '<h4>Compliance Trials</h4>';

    var complianceTable = localStorage.getItem('D01_Trial_001');
    panel += '<ul data-role="listview">';

    if (typeof complianceTable != 'undefined' && complianceTable != null) {
        var firstTrial = JSON.parse(localStorage.getItem('D01_Trial_001'));
        var render = ComplianceTableBase;
        var datacount = localStorage.length;
        if (firstTrial.Trial_Name != "") {
            for (var i = 0; i < datacount; i++) {
                if (localStorage.key(i).substr(0, 1) == "D") {

                    var key = localStorage.key(i); //Get  the Key 
                    var trial = localStorage.getItem(key); //Get Data from Key 
                    var data = JSON.parse(trial); //Parse the Data back into the object 
                    panel += "<li><a href=\"javascript:OpenForm('" + data.Last_Page + "',\'" + data.Trial_Id + "\');\">" + data.Trial_Name + "</a></li>";
                }
            }
        }
        panel += '</ul>';
    }
    panel += '</div>' +
        '<div data-role="collapsible" data-inset="false" class="ui-disabled" style="opacity:.8;">' +
        '<h4>QMS</h4>';
    panel += '</div>' +
        '<div data-role="collapsible" data-inset="false">' +
        '<h4>Admin</h4>' +
        '<ul data-role="listview" class="ui-listview">' +
        '<li><a href="javascript:void(0)" onclick="clearstorage()"class="ui-btn ui-corner-all ui-shadow ui-btn-b" style="text-align: center;">Clear LocalStorage</a></li>' +
        '<li><a href="javascript:void(0)" onclick="Logoff()"class="ui-btn ui-corner-all ui-shadow ui-btn-b" style="text-align: center;">Logoff</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>';
}
var formNavigation = "<div style=\"width: 100%; overflow-x: auto; overflow-y:hidden; height: 110px; \">" +
    "<div style=\"width: 2470px; padding: 20px\">" +
    "<div class=\"BlackStartNav NavStart NavPaddingStartDoble NavSiteSelec\" onclick=\"NavClick('Form_Site_Selection_Checklist')\">Site Selection Checklist</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavLandContr\" onclick=\"NavClick('Form_Land_Contracts')\">Land Contracts</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavCompliExce\" onclick=\"NavClick('Form_Compliance_Exceptions')\">Compliance Exceptions</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavCompliMap\" onclick=\"NavClick('Form_Compliance_Map')\">Compliance Map</div>" +
    "<div class=\"BlackStopNav NavStop NavStopPrePlant\"></div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavPrePlanting\" onclick=\"NavClick('Form_PrePlanting')\">Pre Planting</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavPlanting\" onclick=\"NavClick('Form_Planting')\">Planting</div>" +
    "<div class=\"BlackStopNav NavStop NavStopPlant\"></div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavDicamApp\" onclick=\"NavClick('Form_Dicamba_Spray_Tracking')\">Dicamba Spray Tracking</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavInSeas\" onclick=\"NavClick('Form_In_Season_Monitoring')\">In-Season Monitoring</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavBinInspec\" onclick=\"NavClick('Form_Bin_Inspections')\">Bin Inspections</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavHaverst\" onclick=\"NavClick('Form_Harvest_and_Destruct')\">Harvest and Destruct</div>" +
    "<div class=\"BlackStopNav NavStop NavStopHarvest\"></div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavVolMoni\" onclick=\"NavClick('Form_Volunteer_Monitoring')\">Volunteer Monitoring</div>" +
    "</div></div>";

var counter = true;
$(document).one('pagebeforecreate', function () {
    $(".Forms").append(formNavigation);
});

$(document).on("pageshow", function (e, data) {
    TableResize();
    var tallest = 0;
});


function UpdateDiv() {
    var heights = Math.max(0, document.documentElement.clientHeight - 54).toString() + "px";
    var heights1 = (Math.max(0, document.documentElement.clientHeight / 2) + 27 - 125).toString() + "px";
    var heights2 = (Math.max(0, document.documentElement.clientHeight / 2) + 27 - 105 - 91).toString() + "px";
    var heights3 = Math.max(0, document.documentElement.clientHeight + 54 - 105 - 91).toString() + "px";
    var heights4 = (Math.max(0, document.documentElement.clientHeight / 2) + 27 - 125 - 55).toString() + "px";
    var internalheights = Math.max(0, document.documentElement.clientHeight - 54 - 133).toString() + "px";

    $(".ui-content").css("height", heights);
    $(".Forms_Data").css("height", internalheights);
    var width1 = Math.max(0, document.documentElement.clientWidth - 450).toString() + "px";
    var width2 = Math.max(0, document.documentElement.clientWidth - 365).toString() + "px";
    //alertify.alert(heights);
    $('#BigTable').css("height", heights3);
    $('.innerDiv').css("height", heights1);
    $('.innerDiv2').css("width", width1);
    $('.innerDiv3').css("width", width2);
    $('.title').css("width", width1);
    $('.dataTables_wrapper').css("height", heights2);
    $('.scrollTbody').css("height", heights4);
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

//create compliance forms view status row
function GetTable(key) {
    var trial = localStorage.getItem(key); //Get Data from Key 
    var data = JSON.parse(trial); //Parse the Data back into the object 
    var render = "<tr class=\"check\" style=\"border-radius: 6px; -moz-border-radius: 6px; border: #666362 solid\">";
    //Form_Site_Selection_Checklist
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"NavClick('Form_Site_Selection_Checklist', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Site_Selection_Checklist == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Site_Selection_Checklist == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Site_Selection_Checklist == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Site_Selection_Checklist == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_Land_Contracts
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"NavClick('Form_Land_Contracts', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Land_Contracts == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Land_Contracts == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Land_Contracts == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Land_Contracts == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_Compliance_Exceptions
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"NavClick('Form_Compliance_Exceptions', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Compliance_Exceptions == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Compliance_Exceptions == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Compliance_Exceptions == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Compliance_Exceptions == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_Compliance_Map
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"NavClick('Form_Compliance_Map', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Compliance_Map == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Compliance_Map == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Compliance_Map == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Compliance_Map == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_PrePlanting
    render += "<td colspan=\"2\" class=\"check\" "
        + "onclick=\"NavClick('Form_PrePlanting', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.PrePlanting == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.PrePlanting == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.PrePlanting == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.PrePlanting == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_Planting
    render += "<td colspan=\"2\" class=\"check\" "
        + "onclick=\"NavClick('Form_Planting', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Planting == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Planting == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Planting == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Planting == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_Dicamba_Spray_Tracking
    render += "<td colspan=\"2\" class=\"check\" "
        + "onclick=\"NavClick('Form_Dicamba_Spray_Tracking', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Dicamba_Spray_Tracking == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Dicamba_Spray_Tracking == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Dicamba_Spray_Tracking == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Dicamba_Spray_Tracking == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_In_Season_Monitoring
    render += "<td colspan=\"2\" class=\"check\" "
        + "onclick=\"NavClick('Form_In_Season_Monitoring', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.In_Season_Monitoring == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.In_Season_Monitoring == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.In_Season_Monitoring == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.In_Season_Monitoring == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_Bin_Inspections
    render += "<td colspan=\"2\" class=\"check\" "
        + "onclick=\"NavClick('Form_Bin_Inspections', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Bin_Inspections == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Bin_Inspections == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Bin_Inspections == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Bin_Inspections == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";


    //Form_Harvest_and_Destruct
    render += "<td colspan=\"2\" class=\"check\" "
        + "onclick=\"NavClick('Form_Harvest_and_Destruct', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Harvest_and_Destruct == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Harvest_and_Destruct == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Harvest_and_Destruct == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Harvest_and_Destruct == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    //Form_Volunteer_Monitoring
    render += "<td colspan=\"2\" class=\"check\" "
        + "onclick=\"NavClick('Form_Volunteer_Monitoring', \'" + data.Trial_Id + "\');\"" + ">"
        + ((data.Volunteer_Monitoring == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />"
        : ((data.Volunteer_Monitoring == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />"
        : ((data.Volunteer_Monitoring == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />"
        : ((data.Volunteer_Monitoring == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";

    render += "</tr>";
    return render;
}

function ToggleClick(e, TableIdentifier, Class, ToTarget, Target) {
    $(TableIdentifier).find("*").removeClass(Class);

    if (Target == "self") {
        $(e.currentTarget).addClass(Class);
    } else {
        $(e.currentTarget).children(ToTarget).addClass(Class);
    }
}

function GetForms(e, arrayval) {
    ToggleClick(e, "#example1", 'RowClick', 'td, th', "child");

    var LogUser = JSON.parse(localStorage.getItem("Login"));
    var LastTrialID = JSON.parse(localStorage.getItem(arrayval));
    LogUser.LastTrial = arrayval;
    localStorage.setItem("Login", JSON.stringify(LogUser));
    dvcontainer.innerHTML = '<p style="background-color: #B3B3B3;font-size: medium; color: black; text-shadow: 0 0;margin-top: 0;">Trial ID: ' + LastTrialID.Trial_Id + '</p>' + ComplianceTableBase + GetTable(arrayval) + ComplianceEndTableBase + '</table>';
    $('#CDashboardTrialNote').attr('onclick', 'OpenPopup(' + LastTrialID.Trial_Id + ', "popup_PageComplianceTrialNote");');
}

//opens trial notes popup
function OpenPopup(trialId, popup) {
    var datacount = localStorage.length;
    var NoteTable = "";
    for (var i = 0; i < datacount; i++) {
        if (localStorage.key(i).substr(0, 3) == "C08") {
            var key = localStorage.key(i); //Get  the Key 
            var trial = localStorage.getItem(key); //Get Data from Key 
            var data = JSON.parse(trial); //Parse the Data back into the object 
            if (data.TrialID == trialId) {

                var noteContent = data.Content.replace(/(?:\r\n|\r|\n)/g, '<br />');

                NoteTable += "<tr><td onclick=\"alertify.confirm('Are you sure you want to delete Note: <br/><br/><b>"
                    + noteContent + "</b>', function (e, str) { if (e) {NoteDelete('"
                    + data.TrialNoteID + "', '" + popup + "');}});\" style=\" color: red;font-weight: 900;font-size: larger;cursor: pointer; padding: 0 10px;\">X</td>" +
                    "<td style=\"cursor: pointer; \" onclick=\"GetNote(event,'" + data.TrialNoteID + "','"
                    + data.TrialID + "', '" + popup + "')\" class=\"ui-table-rows-odd nox\">" + noteContent + "</td></tr>";
            }
        }
    }
    $("#" + popup).html("<div onclick=\"$('#" + popup + "').popup('close'); $('#" + popup + "').html('');\" style=\"background-color: black;height: 1000px;width: 10000px;position: fixed;left: 0;top: 0;opacity: 0.6;filter: alpha(opacity=60);z-index: -1;\">" +
        "</div><div style=\"width: 600px; height: 488px;background-color: white;\"><div onclick=\"$('#" + popup + "').popup('close'); $('#" + popup + "').html('');\" style=\"color: red;font-weight: 900;font-size: larger;right: 5px;position: absolute; cursor: pointer;\">X</div>" +
        "<div id=\"" + popup + "_Data\"></div></div>");

    var NoteTableStart = "<table class=\"scroll\"> <thead><tr><th style=\"" +
        "background-image: -webkit-linear-gradient(top, #dbdbdb 10%, #b8b8b8 100%);background-image: linear-gradient(to bottom, #dbdbdb 10%, #b8b8b8 100%);" +
        "filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#DBDBDB', endColorstr='#B8B8B8',GradientType=0 );color: #333;font-size: 18px;" +
        "font-weight: bold;text-align: left;\">Note</th></tr></thead><tbody>";
    var NoteTableFinish = "</tbody></table>";

    $("#" + popup + "_Data").html("<div style=\"text-align: center;color: black;font-size: larger;\">Trial: " + trialId + "</div>" +
        "<div style=\"padding: 0 17px 0 10px;height: 217px;\"><p style=\"color: black\">Notes:</p><textarea  maxlength=\"1000\" class=\"NoteBox\" style=\"width:100%; height:100px; resize: none;\"></textarea>" +
        "<div style=\"float: left;\"><button class=\"ui-btn ui-btn-b ui-shadow ui-btn-inline ui-corner-all\" onclick=\" $('#AddEditNote').text('Add'); $('.NoteBox').val(''); $('#example2').find('*').removeClass('RowClick');\"  >Clear</button></div><div style=\"float: right;\"><button class=\"ui-btn ui-btn-b ui-shadow ui-btn-inline ui-corner-all\" style=\"margin-right: 0;\" id=\"AddEditNote\" onclick=\"NoteEvent('" + trialId + "', '', $('.NoteBox').val(),'" + popup + "')\">Add</button></div></div>" +
    "<div id=\"example2\"></div>");
    $('#example2').html(NoteTableStart + NoteTable + NoteTableFinish);

    $('#example2').find('table').removeClass();
    $('#example2').find('table').addClass('scroll');

    $('#' + popup).popup('open');
}

//obtains a note from localstorage
function GetNote(e, arrayval, trialID, popup) {

    ToggleClick(e, "#example2", 'RowClick', 'td, th', "child");

    $('.NoteBox').val(GetLocalStorageSingleData("C08", arrayval, "TrialNoteID", "Content"));
    $('#AddEditNote').text("Modify");
    $('#AddEditNote').attr('onclick', 'NoteEvent( "' + trialID + '", "' + arrayval + '",$(".NoteBox").val(), "' + popup + '")');
}

//save a note using web api
function NoteEvent(trialID, NoteID, noteContent, popup) {
    var trialnoteJSON;
    if ($('#AddEditNote').text() == "Modify") {

        trialnoteJSON = '{ "CurrentUserAlias": "' + datat.UserId + '","Data": { "TrialNoteID":  "' + NoteID + '" , "TrialID":  "' + trialID + '" , "Content":  "' + noteContent + '"  } }';
        var dataJson = ModifyData("trial/note", "Trial Note", trialnoteJSON);

        if (dataJson != false) {
            var itemData = JSON.stringify(dataJson)
            var modifiedKey = GetLocalStorageKey("C08", NoteID, "TrialNoteID");

            localStorage.setItem(modifiedKey, itemData);

            noteContent = noteContent.replace(/(?:\r\n|\r|\n)/g, '<br />');
            alertify.alert("You successfully modify this note <br/><br/><b>" + noteContent + "</b>");

            OpenPopup(trialID, popup);
        }
    } else if ($('#AddEditNote').text() == "Add") {

        trialnoteJSON = '{ "CurrentUserAlias": "' + datat.UserId + '","Data": { "TrialID":  "' + trialID + '" , "Content":  "' + noteContent + '"  } }';
        var dataJson = SendData("trial/note", "Trial Note", trialnoteJSON);

        if (dataJson != false) {
            var itemData = JSON.stringify(dataJson)

            localStorage.setItem("C08_Trial_Note_" + LeadZero(GetMaxNum("C08") + 1, 3), itemData);

            noteContent = noteContent.replace(/(?:\r\n|\r|\n)/g, '<br />');
            alertify.alert("You successfully add this note <br/><br/><b>" + noteContent + "</b>");

            OpenPopup(trialID, popup);
        }
    }
}

//delete a note using web api
function NoteDelete(NoteId, popup) {
    var trialnoteJSON = '{ "CurrentUserAlias": "' + datat.UserId + '", "TrialNoteID": "' + NoteId + '" }';

    if (DeleteData("trial/note", "Trial Note", trialnoteJSON)) {
        var DeletedKey = GetLocalStorageKey("C08", NoteId, "TrialNoteID");
        var DeletedItem = localStorage.getItem(DeletedKey);
        var DeletedNote = JSON.parse(DeletedItem);

        localStorage.removeItem(DeletedKey);

        var noteContent = DeletedNote.Content.replace(/(?:\r\n|\r|\n)/g, '<br />');
        alertify.alert("You successfully delete this note <br/><br/><b>" + noteContent + "</b>");

        OpenPopup(DeletedNote.TrialID, popup);
    }
}

function loaddata() {
    var complianceTable = localStorage.getItem('D01_Trial_001');
    if (typeof complianceTable == 'undefined' || complianceTable == null) {
        createBlankLocalStorage();
    }

    var firstTrial = JSON.parse(localStorage.getItem('D01_Trial_001'));
    var datacount = localStorage.length;

    if (firstTrial.Trial_Name != "") {
        for (var i = 0; i < datacount; i++) {
            if (localStorage.key(i).substr(0, 1) == "D") {

                var key = localStorage.key(i); //Get  the Key 
                var trial = localStorage.getItem(key); //Get Data from Key 
                var data = JSON.parse(trial); //Parse the Data back into the object 

                var valueToPush = {};
                valueToPush["ID"] = key;
                valueToPush["Trial Id"] = data.Trial_Id_Name;
                valueToPush["Trial Name"] = data.Trial_Name;
                valueToPush["Trial Farm"] = data.Trial_Farm;
                valueToPush["Crop"] = data.Crop;
                valueToPush["Site"] = data.Site_Name;
                valueToPush["Trait"] = data.Trait;
                valueToPush["Year"] = data.Trial_Year.toString();
                if (adminonly == 4) {
                    valueToPush["Primary SRR"] = data.Primary_SRR;
                }
                MainTable.push(valueToPush);
            }
        }

    } else {
        FilterData = FilterTableBase;
        MainTable.push(ComplianceTableRowBaseSmall);
    }

    LoadFilterTable();
}

function LoadFilterTable() {

    FilterCountBlank = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountInProgress = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountApproval = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountLock = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountCompleted = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };

    var firstTrial = JSON.parse(localStorage.getItem('D01_Trial_001'));
    var datacount = localStorage.length;

    if (firstTrial != null) {
        for (var i = 0; i < datacount; i++) {
            if (localStorage.key(i).substr(0, 1) == "D") {

                var key = localStorage.key(i); //Get  the Key 
                var trial = localStorage.getItem(key); //Get Data from Key 
                var data = JSON.parse(trial); //Parse the Data back into the object 

                for (var keys in data) {
                    if (keys != "Trial_Id" && keys != "Trial_Id_Name" && keys != "Trial_Name" && keys != "Trial_Farm" && keys != "Trait_ID" && keys != "Site_ID" && keys != "TrialYear" && keys != "Last_Page")
                        if (data[keys] == 0) {
                            FilterCountBlank[keys] += 1;
                        } else if (data[keys] == 1) {
                            FilterCountInProgress[keys] += 1;
                        } else if (data[keys] == 2) {
                            FilterCountApproval[keys] += 1;
                        } else if (data[keys] == 3) {
                            FilterCountLock[keys] += 1;
                        } else if (data[keys] == 4) {
                            FilterCountCompleted[keys] += 1;
                        }
                }
            }
        }

        for (var Count0 in FilterCountBlank) {
            if (FilterCountBlank[Count0] == 0)
                FilterCountBlank[Count0] = "";
        }
        for (var Count1 in FilterCountInProgress) {
            if (FilterCountInProgress[Count1] == 0)
                FilterCountInProgress[Count1] = "";
        }
        for (var Count2 in FilterCountApproval) {
            if (FilterCountApproval[Count2] == 0)
                FilterCountApproval[Count2] = "";
        }
        for (var Count3 in FilterCountLock) {
            if (FilterCountLock[Count3] == 0)
                FilterCountLock[Count3] = "";
        }
        for (var Count4 in FilterCountCompleted) {
            if (FilterCountCompleted[Count4] == 0)
                FilterCountCompleted[Count4] = "";
        }

        FilterTableBase = "<tbody class=\"scrollTbody\">" +
            "<tr><td>Site Selection Checklist</td><td onclick=\"FilterTrialTable(event,'0','Site_Selection_Checklist')\">" + FilterCountBlank.Site_Selection_Checklist + "</td><td onclick=\"FilterTrialTable(event,'1','Site_Selection_Checklist')\">" + FilterCountInProgress.Site_Selection_Checklist + "</td><td onclick=\"FilterTrialTable(event,'2','Site_Selection_Checklist')\">" + FilterCountApproval.Site_Selection_Checklist + "</td><td onclick=\"FilterTrialTable(event,'3','Site_Selection_Checklist')\">" + FilterCountLock.Site_Selection_Checklist + "</td><td onclick=\"FilterTrialTable(event,'4','Site_Selection_Checklist')\">" + FilterCountCompleted.Site_Selection_Checklist + "</td></tr>" +
            "<tr><td>Land Contracts</td><td onclick=\"FilterTrialTable(event,'0','Land_Contracts')\">" + FilterCountBlank.Land_Contracts + "</td><td onclick=\"FilterTrialTable(event,'1','Land_Contracts')\">" + FilterCountInProgress.Land_Contracts + "</td><td onclick=\"FilterTrialTable(event,'2','Land_Contracts')\">" + FilterCountApproval.Land_Contracts + "</td><td onclick=\"FilterTrialTable(event,'3','Land_Contracts')\">" + FilterCountLock.Land_Contracts + "</td><td onclick=\"FilterTrialTable(event,'4','Land_Contracts')\">" + FilterCountCompleted.Land_Contracts + "</td></tr>" +
            "<tr><td>Compliance Exceptions</td><td onclick=\"FilterTrialTable(event,'0','Compliance_Exceptions')\">" + FilterCountBlank.Compliance_Exceptions + "</td><td onclick=\"FilterTrialTable(event,'1','Compliance_Exceptions')\">" + FilterCountInProgress.Compliance_Exceptions + "</td><td onclick=\"FilterTrialTable(event,'2','Compliance_Exceptions')\">" + FilterCountApproval.Compliance_Exceptions + "</td><td onclick=\"FilterTrialTable(event,'3','Compliance_Exceptions')\">" + FilterCountLock.Compliance_Exceptions + "</td><td onclick=\"FilterTrialTable(event,'4','Compliance_Exceptions')\">" + FilterCountCompleted.Compliance_Exceptions + "</td></tr>" +
            "<tr><td>Compliance Map</td><td onclick=\"FilterTrialTable(event,'0','Compliance_Map')\">" + FilterCountBlank.Compliance_Map + "</td><td onclick=\"FilterTrialTable(event,'1','Compliance_Map')\">" + FilterCountInProgress.Compliance_Map + "</td><td onclick=\"FilterTrialTable(event,'2','Compliance_Map')\">" + FilterCountApproval.Compliance_Map + "</td><td onclick=\"FilterTrialTable(event,'3','Compliance_Map')\">" + FilterCountLock.Compliance_Map + "</td><td onclick=\"FilterTrialTable(event,'4','Compliance_Map')\">" + FilterCountCompleted.Compliance_Map + "</td></tr>" +
            "<tr><td>Pre Planting</td><td onclick=\"FilterTrialTable(event,'0','PrePlanting')\">" + FilterCountBlank.PrePlanting + "</td><td onclick=\"FilterTrialTable(event,'1','PrePlanting')\">" + FilterCountInProgress.PrePlanting + "</td><td onclick=\"FilterTrialTable(event,'2','PrePlanting')\">" + FilterCountApproval.PrePlanting + "</td><td onclick=\"FilterTrialTable(event,'3','PrePlanting')\">" + FilterCountLock.PrePlanting + "</td><td onclick=\"FilterTrialTable(event,'4','PrePlanting')\">" + FilterCountCompleted.PrePlanting + "</td></tr>" +
            "<tr><td>Planting</td><td onclick=\"FilterTrialTable(event,'0','Planting')\">" + FilterCountBlank.Planting + "</td><td onclick=\"FilterTrialTable(event,'1','Planting')\">" + FilterCountInProgress.Planting + "</td><td onclick=\"FilterTrialTable(event,'2','Planting')\">" + FilterCountApproval.Planting + "</td><td onclick=\"FilterTrialTable(event,'3','Planting')\">" + FilterCountLock.Planting + "</td><td onclick=\"FilterTrialTable(event,'4','Planting')\">" + FilterCountCompleted.Planting + "</td></tr>" +
            "<tr><td>Dicamba Spray Tracking</td><td onclick=\"FilterTrialTable(event,'0','Dicamba_Spray_Tracking')\">" + FilterCountBlank.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'1','Dicamba_Spray_Tracking')\">" + FilterCountInProgress.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'2','Dicamba_Spray_Tracking')\">" + FilterCountApproval.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'3','Dicamba_Spray_Tracking')\">" + FilterCountLock.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'4','Dicamba_Spray_Tracking')\">" + FilterCountCompleted.Dicamba_Spray_Tracking + "</td></tr>" +
            "<tr><td>In-Season Monitoring</td><td onclick=\"FilterTrialTable(event,'0','In_Season_Monitoring')\">" + FilterCountBlank.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'1','In_Season_Monitoring')\">" + FilterCountInProgress.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'2','In_Season_Monitoring')\">" + FilterCountApproval.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'3','In_Season_Monitoring')\">" + FilterCountLock.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'4','In_Season_Monitoring')\">" + FilterCountCompleted.In_Season_Monitoring + "</td></tr>" +
            "<tr><td>Bin Inspections</td><td onclick=\"FilterTrialTable(event,'0','Bin_Inspections')\">" + FilterCountBlank.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'1','Bin_Inspections')\">" + FilterCountInProgress.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'2','Bin_Inspections')\">" + FilterCountApproval.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'3','Bin_Inspections')\">" + FilterCountLock.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'4','Bin_Inspections')\">" + FilterCountCompleted.Bin_Inspections + "</td></tr>" +
            "<tr><td>Harvest and Destruct</td><td onclick=\"FilterTrialTable(event,'0','Harvest_and_Destruct')\">" + FilterCountBlank.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'1','Harvest_and_Destruct')\">" + FilterCountInProgress.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'2','Harvest_and_Destruct')\">" + FilterCountApproval.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'3','Harvest_and_Destruct')\">" + FilterCountLock.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'4','Harvest_and_Destruct')\">" + FilterCountCompleted.Harvest_and_Destruct + "</td></tr>" +
            "<tr><td>Volunteer Monitoring</td><td onclick=\"FilterTrialTable(event,'0','Volunteer_Monitoring')\">" + FilterCountBlank.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'1','Volunteer_Monitoring')\">" + FilterCountInProgress.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'2','Volunteer_Monitoring')\">" + FilterCountApproval.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'3','Volunteer_Monitoring')\">" + FilterCountLock.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'4','Volunteer_Monitoring')\">" + FilterCountCompleted.Volunteer_Monitoring + "</td></tr>";

    }

    FilterTable.innerHTML = FilterTableHeader + FilterTableBase + '</table>';

}


function FilterTrialTable(e, Type, Form) {
    ToggleClick(e, ".scrollTable", "RowClick", 'td', "self");
    var newData = [];
    for (var i = 0; i < datacount; i++) {
        if (localStorage.key(i).substr(0, 1) == "D") {

            var key = localStorage.key(i); //Get  the Key 
            var trial = localStorage.getItem(key); //Get Data from Key 
            var data = JSON.parse(trial); //Parse the Data back into the object 
            if (Type == '999' || Type == '888') {
                var valueToPush = {
                };
                valueToPush["ID"] = key;
                valueToPush["Trial Id"] = data.Trial_Id_Name;
                valueToPush["Trial Name"] = data.Trial_Name;
                valueToPush["Trial Farm"] = data.Trial_Farm;
                valueToPush["Crop"] = data.Crop;
                valueToPush["Site"] = data.Site_Name;
                valueToPush["Trait"] = data.Trait;
                valueToPush["Year"] = data.Trial_Year.toString();
                if (adminonly == 4) {
                    valueToPush["Primary SRR"] = data.Primary_SRR;
                }
                newData.push(valueToPush);
            } else {
                for (var keys in data) {

                    if (keys == Form && (data[keys] == "" ? "0" : data[keys]) == Type) {
                        var valueToPush = {
                        };
                        valueToPush["ID"] = key;
                        valueToPush["Trial Id"] = data.Trial_Id_Name;
                        valueToPush["Trial Name"] = data.Trial_Name;
                        valueToPush["Trial Farm"] = data.Trial_Farm;
                        valueToPush["Crop"] = data.Crop;
                        valueToPush["Site"] = data.Site_Name;
                        valueToPush["Trait"] = data.Trait;
                        valueToPush["Year"] = data.Trial_Year.toString();
                        if (adminonly == 4) {
                            valueToPush["Primary SRR"] = data.Primary_SRR;
                        }
                        newData.push(valueToPush);
                    }
                }
            }
        }
    }
    $('#example1').columns('destroy');

    if (newData.length == 0) {
        var valueToPush = {
        };
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
        newData.push(valueToPush);
    }

    $('#example1').columns({
        data: newData, query: '', paginating: false
    });

    $('#example1').columns('create');
    $("#example1").find(".ui-table-footer").css({
        'display': 'none'
    });
    $("#example1").find('.ui-columns-table').css({
        "height": ($('.innerDiv2').height() - 51) + "px", "overflow-y": "auto"
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

var ComplianceTableRowBaseSmall = { 'Emp. Number': '', 'First Name': '', 'Last Name': '' };

var FilterTableHeader = "<table class=\"scrollTable\"><thead class=\"scrollThead\"><tr><th><button onclick=\"FilterTrialTable(event,'999','')\">Clear Filters</button></th><th>Blank</th><th><img alt=\"B1\" src=\"images/Button4.png\" style=\"height: 30px;\"></th><th><img alt=\"B1\" src=\"images/Button3.png\" style=\"height: 30px;\"></th><th><img alt=\"B1\" src=\"images/Button2.png\" style=\"height: 30px;\"></th><th><img alt=\"B1\" src=\"images/Button1.png\" style=\"height: 30px;\"></th></tr></thead>";

var FilterTableBase = "<tbody class=\"scrollTbody\"><tr><td>Site Selection Checklist</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Land Contracts</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Compliance Exceptions</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Compliance Map</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Pre Planting</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Planting</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Dicamba Spray Tracking</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>In-Season Monitoring</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Bin Inspections</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Harvest and Destruct</td><td></td><td></td><td></td><td></td><td></td></tr></tr><tr><td>Volunteer Monitoring</td><td></td><td></td><td></td><td></td><td></td></tr></tbody>";

$(document).ready(function () {
    loaddata();
    UpdateDiv();

    $('#example1').columns({
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
        paginating: false
    });

    $("#example1").find(".ui-table-footer").css({
        'display': 'none'
    });

    $("#example1").find('.ui-columns-table').css({
        "height": ($('.innerDiv2').height() - 51) + "px", "overflow-y": "auto"
    });
});

window.onload = function () {
    setTimeout(function () {
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);

    TableResize();

    var ekJqm = {
    };

    ekJqm.utilities = {
        fixGrids: function (container) {
            $("[class^=ui-block-]").each(function () {
                $(this).removeAttr("style");
                $(">div", this).removeAttr("style");
            });
            var fixBlocks = function (blocks) {
                blocks = $(blocks);
                var heights = [];
                blocks.each(function () {
                    if ($.inArray($(this).height(), heights) == -1)
                        heights.push($(this).height());
                });
                if (heights.length == 1)
                    return;
                var maxHeight = 0;
                blocks.each(function () {
                    if ($(this).height() > maxHeight)
                        maxHeight = $(this).height();
                });
                blocks.each(function () {
                    $(this).height(maxHeight);
                    var adjust = $(">div", this).outerHeight() - $(">div", this).height();
                    $(">div", this).height(maxHeight - adjust);
                });
            };

            $("[class^=ui-grid-]", container).each(function () {
                var maxHeight = 0;
                var blocks = $(">[class^=ui-block-]", this);
                var set = [];
                var tempSet = [];
                blocks.each(function (index) {
                    var _class = $(this).attr("class");
                    if ($.inArray(_class, tempSet) >= 0) {
                        fixBlocks(set);
                        tempSet = [];
                        set = [];
                    }
                    set.push(this);
                    tempSet.push(_class);
                    if (index == blocks.length - 1)
                        fixBlocks(set);
                });
            });
        }
    };

    var LastSyn = JSON.parse(localStorage.getItem("LastSync"));
    var LastSyncDate = new Date(LastSyn.App);
    var TodayDate = new Date();
    var timeDiff = Math.abs(LastSyncDate.getTime() - TodayDate.getTime());
    var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    if (diffDays == 0) {
        $(".Syncbtn").append("Last Sync: " + LastSyncDate.toDateString() + " " + LastSyncDate.toLocaleTimeString());
    } else {
        $(".Syncbtn").append("Last Sync: " + LastSyncDate.toDateString() + " " + LastSyncDate.toLocaleTimeString() + " <span class=\"badge\">" + diffDays + " Days</span>");
    }
};

function Toggle(whatToggle) {
    $("#" + whatToggle).toggle(1000);
}

$(window).resize(function () {
    UpdateDiv();
    TableResize();
}).resize(); // Trigger resize handler

function TableResize() {
    var TableWidth = $(".scrollTable").width() - 210;
    $('.scrollTbody td:nth-child(2)').css('width', (TableWidth / 5) + "px");
    $('.scrollTbody td:nth-child(3)').css('width', (TableWidth / 5) + "px");
    $('.scrollTbody td:nth-child(4)').css('width', (TableWidth / 5) + "px");
    $('.scrollTbody td:nth-child(5)').css('width', (TableWidth / 5) + "px");
    $('.scrollTbody td:nth-child(6)').css('width', (TableWidth / 5) + "px");

    $('.scrollThead th:nth-child(2)').css('width', (TableWidth / 5) + "px");
    $('.scrollThead th:nth-child(3)').css('width', (TableWidth / 5) + "px");
    $('.scrollThead th:nth-child(4)').css('width', (TableWidth / 5) + "px");
    $('.scrollThead th:nth-child(5)').css('width', (TableWidth / 5) + "px");
    $('.scrollThead th:nth-child(6)').css('width', (TableWidth / 5) + "px");
}


function showModal() {
    //$(".modalBack").removeClass("modalBack").addClass("modalBack2");
}

function hideModal() {
    //$(".modalBack2").removeClass("modalBack2").addClass("modalBack");
}

$(document).on("pageshow", "#PageCompliance", function () {

    $("#example1").find("*").removeClass('ui-state-disabled');
    $('.ui-columns-search').parent().find('div').removeClass("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset").css({
        "box-shadow": "0 0 0 black"
    });
    $("#example1").find('.ui-columns-table').css({
        "height": ($('.innerDiv2').height() - 51) + "px", "overflow-y": "auto"
    });
    $("#example1").find(".ui-table-footer").css({
        'display': 'none'
    });
    $.ajax({
        url: HealthUrl,
        type: 'GET',
        dataType: 'json',

        success: function (datas) {
            var LSVersion = getLocalStorageVersion();
            $(".WebVersion").text('ENV ' + datas.Status.Environment + ' - '
                + LSVersion + ' - '
                + WebVersion + ' - '
                + 'API v.' + datas.Status.APIVersion + ' - '
                + 'DB v.' + datas.Status.DBReleaseName);
        },

        error: function (error) {
            var LSVersion = getLocalStorageVersion();
            $(".WebVersion").text(LSVersion + ' - ' + WebVersion + ' / Database OFFLINE');
        }
    });

    var LogUser = JSON.parse(localStorage.getItem("Login"));
    var lastTrial = LogUser.LastTrial;
    if (lastTrial != "") {
        var LastTrialID = JSON.parse(localStorage.getItem(lastTrial));
        dvcontainer.innerHTML = '<p style="background-color: #B3B3B3;font-size: medium; color: black; text-shadow: 0 0;margin-top: 0;">Trial ID: ' + LastTrialID.Trial_Id + '</p>' + ComplianceTableBase + GetTable(lastTrial) + ComplianceEndTableBase + '</table>';
        $('#CDashboardTrialNote').attr('onclick', 'OpenPopup(' + LastTrialID.Trial_Id + ', "popup_PageComplianceTrialNote");');
    }

    LoadFilterTable();
    UpdateDiv();

});


function loadBinNumberAndLocationInto(selector) {

    $(selector).empty();

    //load bin numbers and locations
    var options = getBinNumberAndLocationByTrialID(trialsId);
    var output = [];

    //notice I cached the `temp.length` value, the `for` loop will perform faster if this is done
    for (var i = 0, len = options.length; i < len; i++) {
        //instead of appending each `<option>` element, it is a better practice to either concoct a string of all the HTML or create an array that will later be turned into a string (here we are pushing new indexes onto an `output` array)

        //output.push("<div class='ui-checkbox'><label for='H_Bin_Number_and_LocationCheckbox" + i + "' class='ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-checkbox-on ui-first-child'>" + options[i].Bin_Number + ' - ' + options[i].Bin_Location + "</label><input type='checkbox' name='H_Bin_Number_and_LocationCheckbox' class='H_Bin_Number_and_LocationCheckbox' id='H_Bin_Number_and_LocationCheckbox" + i + "' value='" + options[i].Bin_Number + "' /></div>");

        output.push("<label for='H_Bin_Number_and_LocationCheckbox" + i + "' >" + options[i].Bin_Number + ' - ' + options[i].Bin_Location + "</label><input type='checkbox' name='H_Bin_Number_and_LocationCheckbox' class='H_Bin_Number_and_LocationCheckbox' id='H_Bin_Number_and_LocationCheckbox" + i + "' value='" + options[i].Bin_Number + "' /></div>");
    }

    //now make a single `.append()` call with all the HTML in one big string
    //and most importantly, call `.selectmenu("refresh")` after we update the HTML of the select menu so the jQuery Mobile framework will update the widget
    //$(selector).append("<div class='ui-controlgroup-controls'>" + output.join('') + "</div>");
    $(selector).append(output.join('')).trigger('create');

}

function loadTrialItemsInto(selector) {

    $(selector).empty();
    var options = getAllTrialItems();
    var output = [];

    //no selection item
    output.push('<option value="1015"></option>');

    //notice I cached the `temp.length` value, the `for` loop will perform faster if this is done
    for (var i = 0, len = options.length; i < len; i++) {
        //instead of appending each `<option>` element, it is a better practice to either concoct a string of all the HTML or create an array that will later be turned into a string (here we are pushing new indexes onto an `output` array)
        output.push('<option value="' + options[i].TrialID + '">' + options[i].TrialID + ' - ' + options[i].Name + '</option>');
    }

    //now make a single `.append()` call with all the HTML in one big string
    //and most importantly, call `.selectmenu("refresh")` after we update the HTML of the select menu so the jQuery Mobile framework will update the widget
    $(selector).append(output.join(''));

}

function SaveAndLockForm(workflowId, locked) {

    //saving and locking harvest and destruct form
    if (workflowId == 12) {
        var data = GetLocalStorageData("D01", trialsId, "Trial_Id"); //Get  the Key 
        if (data.Bin_Inspections != 4) {
            alertify.alert("Please lock Bin Inspections form before locking Harvest and Destruct form.");
            return;
        }
    }

    alertify.confirm(
        'Are you sure you want to save and lock?',
        function (e, str) {
            if (e) {
                SaveForm(workflowId, locked);
            }
        });

}