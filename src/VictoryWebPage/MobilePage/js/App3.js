var datat = JSON.parse(localStorage.getItem("Login"));
var adminonly = 0;
var lockedForm;
if (typeof datat != 'undefined' && datat != null) {
    adminonly = datat.Access;
}

var BigPic = '';
var suffix = '';
var filename = "";
var size = 0;

var heights = Math.max(0, document.documentElement.clientHeight - 54).toString() + "px";
var internalheights = Math.max(0, document.documentElement.clientHeight - 54 - 133).toString() + "px";
var trialsId = 0;
var workingForm = "";
var workingFormId = 0;

var seed_Tender_Cleaned_Out_Move_To = false;
var planter_Cleaned_Out_Move_To = false;


//        $(document).ready(function () {
//            alertify.alert("fired");
//        });

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
    var BUTTONS_ARRAY = [".NavSiteSelec", ".NavLandContr", ".NavCompliExce", ".NavCompliMap", ".NavPrePlanting", ".NavPlanting", ".NavDicamApp", ".NavInSeas", ".NavHaverst", ".NavBinInspec", ".NavVolMoni"];
    var FORM_ARRAY = ["Site_Selection_Checklist", "Land_Contracts", "Compliance_Exceptions", "Compliance_Map", "PrePlanting", "Planting", "Dicamba_Spray_Tracking", "In_Season_Monitoring", "Harvest_and_Destruct", "Bin_Inspections", "Volunteer_Monitoring", "Last_Page"];

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

function NavClick(formName) {
    var data = GetLocalStorageData("D01", trialsId, "Trial_Id"); //Get  the Key 

    if (formName == "Form_Site_Selection_Checklist") {
        OpenForm(formName, trialsId);
    } else if (formName == "Form_Land_Contracts") {
        OpenForm(formName, trialsId);
    } else if (formName == "Form_Compliance_Exceptions") {
        OpenForm(formName, trialsId);
    } else if (formName == "Form_Compliance_Map") {
        OpenForm(formName, trialsId);
    } else if (formName == "Form_PrePlanting") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4 && data.Land_Contracts == 4 && data.Compliance_Exceptions == 4 && data.Compliance_Map == 4) {
            OpenForm(formName, trialsId);
        } else {
            alertify.alert("Please finish initial forms before moving forward.  Thanks.");
        }
    } else if (formName == "Form_Planting") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4 && data.Land_Contracts == 4 && data.Compliance_Exceptions == 4 && data.Compliance_Map == 4) {
            OpenForm(formName, trialsId);
        } else {
            alertify.alert("Please finish initial forms before moving forward.  Thanks.");
        }
    } else if (formName == "Form_Dicamba_Spray_Tracking") {
        //Trial Info
        if (data.Site_Selection_Checklist == 4 && data.Land_Contracts == 4 && data.Compliance_Exceptions == 4 && data.Compliance_Map == 4) {
            OpenForm(formName, trialsId);
        } else {
            alertify.alert("Please finish initial forms before moving forward.  Thanks.");
        }
    } else if (formName == "Form_In_Season_Monitoring") {
        //Trial Info
        if (data.PrePlanting == 4 && data.Planting == 4) {
            OpenForm(formName, trialsId);
        } else {
            alertify.alert("Please finish Planting Info before moving forward.  Thanks.");
        }
    } else if (formName == "Form_Harvest_and_Destruct") {
        //Trial Info
        if (data.PrePlanting == 4 && data.Planting == 4) {
            OpenForm(formName, trialsId);
        } else {
            alertify.alert("Please finish Planting Info before moving forward.  Thanks.");
        }
    } else if (formName == "Form_Bin_Inspections") {
        //Trial Info
        if (data.PrePlanting == 4 && data.Planting == 4) {
            OpenForm(formName, trialsId);
        } else {
            alertify.alert("Please finish Planting Info before moving forward.  Thanks.");
        }
    } else if (formName == "Form_Volunteer_Monitoring") {
        //Trial Info
        if (data.Dicamba_Spray_Tracking == 4 && data.In_Season_Monitoring == 4 && data.Harvest_and_Destruct == 4 && data.Bin_Inspections == 4) {
            OpenForm(formName, trialsId);
        } else {
            alertify.alert("Please finish Harvest Info before moving forward.  Thanks.");
        }
    } else {
        $.mobile.navigate("PageCompliance");
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
    $("#Previous_Trained_and_RecordedRadio input[type='radio']").checkboxradio("refresh");
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
    $("#Physical_MarkersRadio input[type='radio']").checkboxradio("refresh");
    $("#Commercial_Soybeans_PlantedRadio input[type='radio']").checkboxradio("refresh");
    $("#Type_of_IsolationRadio input[type='radio']").checkboxradio("refresh");
    $("#SRR_or_Delegate_PresentRadio input[type='radio']").checkboxradio("refresh");
    $("#Seed_Tender_UsedRadio input[type='radio']").checkboxradio("refresh");
    $("#Seed_Tender_Cleaned_OutRadio input[type='radio']").checkboxradio("refresh");
    $("#Planter_Cleaned_OutRadio input[type='radio']").checkboxradio("refresh");
    $("#Seed_Leftover_after_PlantingRadio input[type='radio']").checkboxradio("refresh");
    $("#Disposition_of_LeftoverRadio input[type='radio']").checkboxradio("refresh");

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
    $('select').val('0').change();
    $('input[type="text"]').val('');
    $('input[type="date"]').val('');

    if (formName == "Form_Site_Selection_Checklist") {
        //Site Selection Checklist
        var volKey = GetLocalStorageKey("F03", trialsId, "Trial_Id"); //Get  the Key
        var verifyifnull = GetLocalStorageData("F03", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Site_Selection_Checklist") == 4) ? true : false);
        var VariableForm;

        //$('#Mitigation_Controls').val('');

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Site Selection Checklist
            workingForm = volKey;
            VariableForm = GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Located_Flood_Plain");
            if (VariableForm != 1015) {
                $("input[name=Located_Flood_PlainRadio][value=" + VariableForm + "]").prop('checked', true);
                //$("input[name=Located_Flood_PlainRadio][value=" + VariableForm + "]").prop('checked', true).checkboxradio();
            }
            //$("#Located_Flood_Plain input[type='radio']").checkboxradio("refresh");

            VariableForm = GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Trial_Site_Sloped_Surface");
            if (VariableForm != 1015) {
                $("input[name=Trial_Site_Sloped_SurfaceRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Washout_5_Years");
            if (VariableForm != 1015) {
                $("input[name=Washout_5_YearsRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Site_Located_Area");
            if (VariableForm != 1015) {
                $("input[name=Site_Located_AreaRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Drains_Site_Alleyway");
            if (VariableForm != 1015) {
                $("input[name=Drains_Site_AlleywayRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Outlet_Drain_Area");
            if (VariableForm != 1015) {
                $("input[name=Outlet_Drain_AreaRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Drip_Tube_Tape_Monitoring");
            if (VariableForm != 1015) {
                $("input[name=Drip_Tube_Tape_MonitoringRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            $('#Mitigation_Controls').val(GetLocalStorageSingleData("F03", trialsId, "Trial_Id", "Mitigation_Controls"));
        }

        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Land_Contracts") {
        //Land Contracts
        var volKey = GetLocalStorageKey("F04", trialsId, "Trial_Id"); //Get  the Key
        var verifyifnull = GetLocalStorageData("F04", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Land_Contracts") == 4) ? true : false);
        var VariableForm;

        //$('#Date_of_Contract').val('');

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Land Contracts
            workingForm = volKey;
            VariableForm = GetLocalStorageSingleData("F04", trialsId, "Trial_Id", "Contract_Signed");
            if (VariableForm != 1015) {
                $("input[name=Contract_SignedRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            $('#Date_of_Contract').val(Datesformat(GetLocalStorageSingleData("F04", trialsId, "Trial_Id", "Date_of_Contract"), "-", "yes"));
        }

        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Compliance_Exceptions") {
        //Compliance Exceptions
        var volKey = GetLocalStorageKey("F05", trialsId, "Trial_Id"); //Get  the Key
        var verifyifnull = GetLocalStorageData("F05", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Compliance_Exceptions") == 4) ? true : false);
        var VariableForm;
        //$(':radio').prop('checked', false);
        //$('#Date_of_Exception').val('');
        //$('#Duration_of_Exception').val('');
        //$('#Exception_Description').val('');
        //$("#Compliance_Exceptions_Attachment").val("");
        BigPic = '';
        suffix = '';
        filename = "";
        size = 0;

        var sphb9 = $("#Compliance_Exceptions_AttachmentYeslbl");
        var sphb10 = $("#Compliance_Exceptions_AttachmentYes");
        var sphb11 = $("#Compliance_Attachmentslbl");
        var sphb12 = $("#Compliance_Attachments");
        sphb9.show();
        sphb10.show();
        sphb11.hide();
        sphb12.hide();
        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Compliance Exceptions
            workingForm = volKey;
            VariableForm = GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "Compliance_Exceptions_Needed");
            if (VariableForm != 1015) {
                $("input[name=Compliance_Exceptions_NeededRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            $('#Date_of_Exception').val(Datesformat(GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "Date_of_Exception"), "-", "yes"));
            $('#Duration_of_Exception').val(Datesformat(GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "Duration_of_Exception"), "-", "yes"));

            var a = GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "Trial_type").split(',');
            if (typeof a != "undefined") {
                for (var i = 0; i < a.length; i++) {
                    $(".Trial_typeCheckbox").each(function (index) {
                        if (this.value == a[i]) {
                            $('#' + this.id).prop('checked', true);
                        }
                    });
                }
            }

            $('#Exception_Description').val(GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "Exception_Description"));

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

            if (VariableForm == "1001") {
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

                if (GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "File_Name") == "") {
                    sphb9.show();
                    sphb10.show();
                    sphb11.hide();
                    sphb12.hide();
                } else {
                    sphb9.hide();
                    sphb10.hide();
                    sphb11.show();
                    sphb12.show();
                    $('#Compliance_Attachments_link').text(GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "File_Name"));
                    $('#Compliance_Attachments_link').attr("onClick", "OpenAttachment('" + GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "File_ID") + "', popup_Compliance_Exceptions_Attachment);");
                    $('#Compliance_Attachments_link_Delete').attr("onClick", "alertify.confirm('Are you sure you want to delete the attachment?', function(e, str) {if (e) {DeleteAttachment('" + GetLocalStorageSingleData("F05", trialsId, "Trial_Id", "File_Name") + "'," + trialsId + ",5,'F05_Form_Compliance_Exceptions' );var sphb1 = $('#Compliance_Exceptions_AttachmentYeslbl');var sphb2 = $('#Compliance_Exceptions_AttachmentYes');var sphb3 = $('#Compliance_Attachmentslbl');var sphb4 = $('#Compliance_Attachments');sphb1.show();sphb2.show();sphb3.hide();sphb4.hide();$('#Compliance_Attachments_link').text('');}});");
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

            $('#Compliance_Exceptions_NeededRadioa').prop('checked', false);
            $('#Compliance_Exceptions_NeededRadiob').prop('checked', false);
            $('#Date_of_Exception').val('');
            $('#Duration_of_Exception').val('');
            $('#Trial_typeCheckboxa').prop('checked', false);
            $('#Trial_typeCheckboxb').prop('checked', false);
            $('#Trial_typeCheckboxc').prop('checked', false);
            $('#Trial_typeCheckboxd').prop('checked', false);
            $('#Exception_Description').val('');
        }

        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Compliance_Map") {
        //Compliance Map
        var volKey = GetLocalStorageKey("F06", trialsId, "Trial_Id"); //Get  the Key
        var verifyifnull = GetLocalStorageData("F06", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Compliance_Map") == 4) ? true : false);
        var VariableForm;
        //$(':radio').prop('checked', false);
        //        $('#Isolation_Method').val(0).change();
        //        $('#GPS_1_lat').val('');
        //        $('#GPS_1_long').val('');
        //        $('#GPS_2_lat').val('');
        //        $('#GPS_2_long').val('');
        //        $('#GPS_3_lat').val('');
        //        $('#GPS_3_long').val('');
        //        $('#GPS_4_lat').val('');
        //        $('#GPS_4_long').val('');
        //        $('#GPS_5_lat').val('');
        //        $('#GPS_5_long').val('');
        //        $('#GPS_6_lat').val('');
        //        $('#GPS_6_long').val('');
        //        $('#GPS_7_lat').val('');
        //        $('#GPS_7_long').val('');
        //        $('#GPS_8_lat').val('');
        //        $('#GPS_8_long').val('');
        //        $("#Compliance_Map_Attachment").val("");
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
            workingForm = volKey;

            $('#Isolation_Method').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "Isolation_Method")).change();
            $('#GPS_1_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_1_lat"));
            $('#GPS_1_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_1_long"));
            $('#GPS_2_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_2_lat"));
            $('#GPS_2_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_2_long"));
            $('#GPS_3_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_3_lat"));
            $('#GPS_3_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_3_long"));
            $('#GPS_4_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_4_lat"));
            $('#GPS_4_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_4_long"));
            $('#GPS_5_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_5_lat"));
            $('#GPS_5_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_5_long"));
            $('#GPS_6_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_6_lat"));
            $('#GPS_6_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_6_long"));
            $('#GPS_7_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_7_lat"));
            $('#GPS_7_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_7_long"));
            $('#GPS_8_lat').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_8_lat"));
            $('#GPS_8_long').val(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "GPS_8_long"));

            VariableForm = GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "Certification_Agreement");
            if (VariableForm != 1015) {
                $("input[name=Certification_AgreementRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            var sphb13 = $("#Compliance_Map_Attachmentlbl_Div");
            var sphb14 = $("#Compliance_Map_Attachment_Div");
            var sphb15 = $("#Compliance_Map_Attachment_linklbl_Div");
            var sphb16 = $("#Compliance_Map_Attachment_link_Div");

            if (GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "File_Name") == "") {
                sphb13.show();
                sphb14.show();
                sphb15.hide();
                sphb16.hide();
            } else {
                sphb13.hide();
                sphb14.hide();
                sphb15.show();
                sphb16.show();
                $('#Compliance_Map_Attachment_link').text(GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "File_Name"));
                $('#Compliance_Map_Attachment_link').attr("onClick", "OpenAttachment('" + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "File_ID") + "', popup_Compliance_Map_Attachment);");
                $('#Compliance_Map_Attachment_link_Delete').attr("onClick", "alertify.confirm('Are you sure you want to delete the attachment?', function(e, str) {if (e) {DeleteAttachment('" + GetLocalStorageSingleData("F06", trialsId, "Trial_Id", "File_Name") + "'," + trialsId + ",6,'F06_Form_Compliance_Map' );var sphb1 = $('#Compliance_Map_Attachmentlbl_Div');var sphb2 = $('#Compliance_Map_Attachment_Div');var sphb3 = $('#Compliance_Map_Attachment_linklbl_Div');var sphb4 = $('#Compliance_Map_Attachment_link_Div');sphb1.show();sphb2.show();sphb3.hide();sphb4.hide();$('#Compliance_Map_Attachment_link').text('');}});");
            }
        }

        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_PrePlanting") {
        //PrePlanting
        var volKey = GetLocalStorageKey("F18", trialsId, "Trial_Id"); //Get  the Key
        var verifyifnull = GetLocalStorageData("F18", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "PrePlanting") == 4) ? true : false);
        var VariableForm;

        //$('#Mitigation_Controls').val('');

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Site Selection Checklist
            workingForm = volKey;
            VariableForm = GetLocalStorageSingleData("F18", trialsId, "Trial_Id", "Previous_Trained_and_Recorded");
            if (VariableForm != 1015) {
                $("input[name=Previous_Trained_and_RecordedRadio][value=" + VariableForm + "]").prop('checked', true);
                //$("input[name=Located_Flood_PlainRadio][value=" + VariableForm + "]").prop('checked', true).checkboxradio();
            }
            //$("#Located_Flood_Plain input[type='radio']").checkboxradio("refresh");

            VariableForm = GetLocalStorageSingleData("F18", trialsId, "Trial_Id", "Contained_of_Material");
            if (VariableForm != 1015) {
                $("input[name=Contained_of_MaterialRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F18", trialsId, "Trial_Id", "Received_Good_Condition");
            if (VariableForm != 1015) {
                $("input[name=Received_Good_ConditionRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F18", trialsId, "Trial_Id", "Received_Seed_Labeled");
            if (VariableForm != 1015) {
                $("input[name=Received_Seed_LabeledRadio][value=" + VariableForm + "]").prop('checked', true);
            }
        }
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Planting") {
        //Planting
        var volKey = GetLocalStorageKey("F19", trialsId, "Trial_Id"); //Get  the Key
        var verifyifnull = GetLocalStorageData("F19", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Planting") == 4) ? true : false);
        var VariableForm;

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Site Selection Checklist
            workingForm = volKey;

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Physical_Markers");
            if (VariableForm != 1015) {
                $("input[name=Physical_MarkersRadio][value=" + VariableForm + "]").prop('checked', true);
            }
            $('#Planting_Start_Date').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Planting_Start_Date"));
            $('#Planting_End_Date').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Planting_End_Date"));
            $('#Actual_Planted_Acres').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Actual_Planted_Acres"));

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Commercial_Soybeans_Planted");
            if (VariableForm != 1015) {
                $("input[name=Commercial_Soybeans_PlantedRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            var sphb1 = $("#Commercial_Soybeans_Planted_Yes");
            if (VariableForm == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Type_of_Isolation");
            if (VariableForm != 1015) {
                $("input[name=Type_of_IsolationRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            var sphb1 = $("#Type_of_Isolation_Natural");

            if (VariableForm == "1007") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            $('#Natural_Barrier').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Natural_Barrier"));

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "SRR_or_Delegate_Present");
            if (VariableForm != 1015) {
                $("input[name=SRR_or_Delegate_PresentRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Seed_Tender_Used");
            if (VariableForm != 1015) {
                $("input[name=Seed_Tender_UsedRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            var sphb1 = $("#Seed_Tender_Used_Yes");

            if (VariableForm == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Seed_Tender_Cleaned_Out");
            if (VariableForm != 1015) {
                $("input[name=Seed_Tender_Cleaned_OutRadio][value=" + VariableForm + "]").prop('checked', true);
                if (VariableForm == 1009) {
                    seed_Tender_Cleaned_Out_Move_To = true;
                }
            }

            var sphb1 = $("#Seed_Tender_Cleaned_Out_Yes");

            if (VariableForm == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            $('#Date_of_Verbal_or_Visual_Confirm_1').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Date_of_Verbal_or_Visual_Confirm_1"));

            $('#Equip_Cleanout_Contact_Person_1').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Equip_Cleanout_Contact_Person_1"));

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Planter_Cleaned_Out");
            if (VariableForm != 1015) {
                $("input[name=Planter_Cleaned_OutRadio][value=" + VariableForm + "]").prop('checked', true);
                if (VariableForm == 1009) {
                    planter_Cleaned_Out_Move_To = true;
                }
            }

            var sphb1 = $("#Planter_Cleaned_Out_Yes");

            if (VariableForm == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            $('#Date_of_Verbal_or_Visual_Confirm_2').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Date_of_Verbal_or_Visual_Confirm_2"));

            $('#Equip_Cleanout_Contact_Person_2').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Equip_Cleanout_Contact_Person_2"));

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Seed_Leftover_after_Planting");
            if (VariableForm != 1015) {
                $("input[name=Seed_Leftover_after_PlantingRadio][value=" + VariableForm + "]").prop('checked', true);
            }

            var sphb1 = $("#Seed_Leftover_after_Planting_Yes");

            if (VariableForm == "1001") {
                sphb1.show();
            } else {
                sphb1.hide();
            }

            $('#Amount_of_Material_Leftover').val(GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Amount_of_Material_Leftover"));

            VariableForm = GetLocalStorageSingleData("F19", trialsId, "Trial_Id", "Disposition_of_Leftover");
            if (VariableForm != 1015) {
                $("input[name=Disposition_of_LeftoverRadio][value=" + VariableForm + "]").prop('checked', true);
            }
            if (seed_Tender_Cleaned_Out_Move_To == true || planter_Cleaned_Out_Move_To == true) {
                $("#Next_Planted_Field_Row").show();
            }
        }
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Material_Movement") {
        //Material Movement
        $("#" + formName + "_TrialID").text(trialId);
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Dicamba_Spray_Tracking") {
        //Dicamba Spray Tracking
        $("#" + formName + "_TrialID").text(trialId);
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_In_Season_Monitoring") {
        //In Season Monitoring
        $("#" + formName + "_TrialID").text(trialId);
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Harvest_and_Destruct") {
        //Harvest and Destruct
        $("#" + formName + "_TrialID").text(trialId);
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Bin_Inspections") {
        //Bin Inspections
        $("#" + formName + "_TrialID").text(trialId);
        $.mobile.navigate("#" + formName);
    } else if (formName == "Form_Volunteer_Monitoring") {
        //var data = GetLocalStorageData("F01", trialsId, "Trial_Id"); //Get  the Key
        var volKey = GetLocalStorageKey("F16", trialsId, "Trial_Id"); //Get  the Key
        var verifyifnull = GetLocalStorageData("F16", trialsId, "Trial_Id");
        lockedForm = ((GetLocalStorageSingleData("D01", trialsId, "Trial_Id", "Volunteer_Monitoring") == 4) ? true : false);

        //        $(':radio').prop('checked', false);
        //        $('select').val('0').change();
        //        $('input').val('');

        if (!(typeof verifyifnull == 'undefined' || verifyifnull == null)) {
            //Volunteer Monitoring
            workingForm = volKey;
            //workingFormId = GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Id_Volunteer");

            $('#Planted_Crop').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Planted_Crop")).change();
            $('#Planted_Crop_Date').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Planted_Crop_Date"), "-", "yes"));

            var plantedCrop = $("#Planted_Crop option:selected").val();

            if (plantedCrop == "1018" || plantedCrop == "1019" || plantedCrop == "1020" || plantedCrop == "99999") {
                $("#VolForm").show();
            } else {
                $("#VolForm").hide();
            }

            $('#Date_of_Burn_Down').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Burn_Down"), "-", "yes"));
            $('#Method_of_Burn_Down').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Burn_Down")).change();

            $('#Method_of_Burn_Down_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Burn_Down_Herbicide")).change();
            if ($("#Method_of_Burn_Down_Herbicide option:selected").val() == "99999") {
                $("#Method_of_Burn_Down_TDRdiv").show();
                $("#Method_of_Burn_Down_TDR_Herbicidediv").show();
            }
            $('#Method_of_Burn_Down_TDR').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Burn_Down_TDR"));
            $('#Method_of_Burn_Down_TDR_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Burn_Down_TDR_Herbicide"));
            $('#Date_of_Preemergence').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Preemergence"), "-", "yes"));
            $('#Method_of_Preemergence_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Preemergence_Herbicide")).change();
            if ($("#Method_of_Preemergence_Herbicide option:selected").val() == "99999") {
                $("#Method_of_Preemergence_TDRdiv").show();
                $("#Method_of_Preemergence_TDR_Herbicidediv").show();
            }
            $('#Method_of_Preemergence_TDR').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Preemergence_TDR"));
            $('#Method_of_Preemergence_TDR_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Preemergence_TDR_Herbicide"));
            $('#Date_of_Postemergence').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Postemergence"), "-", "yes"));
            $('#Method_of_Postemergence_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence_Herbicide")).change();
            if ($("#Method_of_Postemergence_Herbicide option:selected").val() == "99999") {
                $("#Method_of_Postemergence_TDRdiv").show();
                $("#Method_of_Postemergence_TDR_Herbicidediv").show();
            }
            $('#Method_of_Postemergence_TDR').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence_TDR"));
            $('#Method_of_Postemergence_TDR_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence_TDR_Herbicide"));
            $('#Date_of_Effectiveness').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Effectiveness"), "-", "yes"));
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective") == 1001) {
                $("input[name=App_EffectiveRadio][value=" + GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective") + "]").prop('checked', true);
            } else if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective") == 1002) {
                $("input[name=App_EffectiveRadio][value=" + GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective") + "]").prop('checked', true);
                $("#Volapppostemergence2Bigdiv").show();
            }

            $('#Date_of_Postemergence2').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Postemergence2"), "-", "yes"));
            $('#Method_of_Postemergence2_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence2_Herbicide")).change();
            var planHeightVal = $("#Method_of_Postemergence2_Herbicide option:selected").val();
            var sphb1 = $("#Method_of_Postemergence2_TDRdiv");
            var sphb2 = $("#Method_of_Postemergence2_TDR_Herbicidediv");

            if (planHeightVal == "99999") {
                sphb1.show();
                sphb2.show();
            }

            $('#Method_of_Postemergence2_TDR').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence2_TDR"));
            $('#Method_of_Postemergence2_TDR_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence2_TDR_Herbicide"));
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective2") >= 1002) {
                $("input[name=App_Effective2Radio][value=" + GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective2") + "]").prop('checked', true);
            }
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective_Approved2") == 1001) {
                $('#App_Effective_Approved2').prop('checked', 1);
                $('#Volapppostemergence3Bigdiv').show();
            }
            $('#Date_of_Postemergence3').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Postemergence3"), "-", "yes"));
            $('#Method_of_Postemergence3_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence3_Herbicide")).change();
            var planHeightVal = $("#Method_of_Postemergence3_Herbicide option:selected").val();
            var sphb1 = $("#Method_of_Postemergence3_TDRdiv");
            var sphb2 = $("#Method_of_Postemergence3_TDR_Herbicidediv");

            if (planHeightVal == "99999") {
                sphb1.show();
                sphb2.show();
            }
            $('#Method_of_Postemergence3_TDR').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence3_TDR"));
            $('#Method_of_Postemergence3_TDR_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence3_TDR_Herbicide"));
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective3") >= 1002) {
                $("input[name=App_Effective3Radio][value=" + GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective3") + "]").prop('checked', true);
            }
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective_Approved3") == 1001) {
                $('#App_Effective_Approved3').prop('checked', 1);
                $('#Volapppostemergence4Bigdiv').show();
            }
            $('#Date_of_Postemergence4').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Postemergence4"), "-", "yes"));
            $('#Method_of_Postemergence4_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence4_Herbicide")).change();
            var planHeightVal = $("#Method_of_Postemergence4_Herbicide option:selected").val();
            var sphb1 = $("#Method_of_Postemergence4_TDRdiv");
            var sphb2 = $("#Method_of_Postemergence4_TDR_Herbicidediv");

            if (planHeightVal == "99999") {
                sphb1.show();
                sphb2.show();
            }
            $('#Method_of_Postemergence4_TDR').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence4_TDR"));
            $('#Method_of_Postemergence4_TDR_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence4_TDR_Herbicide"));
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective4") >= 1002) {
                $("input[name=App_Effective4Radio][value=" + GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective4") + "]").prop('checked', true);
            }
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective_Approved4") == 1001) {
                $('#App_Effective_Approved4').prop('checked', 1);
                $('#Volapppostemergence5Bigdiv').show();
            }
            $('#Date_of_Postemergence5').val(Datesformat(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Date_of_Postemergence5"), "-", "yes"));
            $('#Method_of_Postemergence5_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence5_Herbicide")).change();
            var planHeightVal = $("#Method_of_Postemergence5_Herbicide option:selected").val();
            var sphb1 = $("#Method_of_Postemergence5_TDRdiv");
            var sphb2 = $("#Method_of_Postemergence5_TDR_Herbicidediv");

            if (planHeightVal == "99999") {
                sphb1.show();
                sphb2.show();
            }
            $('#Method_of_Postemergence5_TDR').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence5_TDR"));
            $('#Method_of_Postemergence5_TDR_Herbicide').val(GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "Method_of_Postemergence5_TDR_Herbicide"));
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective5") >= 1002) {
                $("input[name=App_Effective5Radio][value=" + GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective5") + "]").prop('checked', true);
            }
            if (GetLocalStorageSingleData("F16", trialsId, "Trial_Id", "App_Effective_Approved5") == 1001) {
                $('#App_Effective_Approved5').prop('checked', 1);
            }

        }

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
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavMaterialMov\" onclick=\"NavClick('Form_Material_Movement')\">Material Movement</div>" +
    "<div class=\"BlackStopNav NavStop NavStopPlant\"></div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavDicamApp\" onclick=\"NavClick('Form_Dicamba_Spray_Tracking')\">Dicamba Spray Tracking</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavInSeas\" onclick=\"NavClick('Form_In_Season_Monitoring')\">In-Season Monitoring</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavHaverst\" onclick=\"NavClick('Form_Harvest_and_Destruct')\">Harvest and Destruct</div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavBinInspec\" onclick=\"NavClick('Form_Bin_Inspections')\">Bin Inspections</div>" +
    "<div class=\"BlackStopNav NavStop NavStopHarvest\"></div>" +
    "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavVolMoni\" onclick=\"NavClick('Form_Volunteer_Monitoring')\">Volunteer Monitoring</div>" +
    "</div></div>";

var counter = true;
$(document).one('pagebeforecreate', function () {
    //    $.mobile.pageContainer.prepend(panel);
    //    $("#pushPanel").panel().enhanceWithin();
    $(".Forms").append(formNavigation);
});

$(document).on("pageshow", function (e, data) {
    TableResize();
    var tallest = 0;
});

//Save Lock Status
function ToggleLock(formId, trialId, lockStatus) {
    trialsId = trialId;
    var FormArrNames = ["", "", "", "Site_Selection_Checklist", "Land_Contracts", "Compliance_Exceptions", "Compliance_Map", "", "", "", "Dicamba_Spray_Tracking", "In_Season_Monitoring", "Harvest_and_Destruct", "", "Bin_Inspections", "", "Volunteer_Monitoring", "", "PrePlanting", "Planting", "Material_Movement"];
    var STATUS = (lockStatus == "4" ? 0 : 1);

    if (SendData("form/status", "Form Lock Change", '{"TrialID": ' + trialId + ',"WorkflowID": ' + formId + ',"Locked": ' + STATUS + ',"CurrentUserAlias": "' + datat.UserId + '"}')) {
        var DATAT = GetLocalStorageData("D01", trialsId, "Trial_Id"); //Get  the Key
        DATAT[FormArrNames[formId]] = (STATUS == 1 ? "4" : "0");
        DATAT.Last_Page = "PageCompliance";
        localStorage.setItem(GetLocalStorageKey("D01", trialsId, "Trial_Id"), JSON.stringify(DATAT));
        location.reload();
        location.href = "ComplianceDashboard.html";
    }
}

//Method to Read Data from the local Storage 
function saveVolunteerMonitoring(locked) {
    var VolDashboard = 1;
    var Incomplete = 0;
    var trialVolunteer = {
        //"Id_Volunteer": 0,
        "Trial_Id": 0,
        "Locked": 0,
        "Sync": 0,
        "Date_of_Burn_Down": "",
        "Method_of_Burn_Down": 1015,
        "Method_of_Burn_Down_Herbicide": 1015,
        "Method_of_Burn_Down_TDR": "",
        "Method_of_Burn_Down_TDR_Herbicide": "",
        "Date_of_Preemergence": "",
        "Method_of_Preemergence_Herbicide": 1015,
        "Method_of_Preemergence_TDR": "",
        "Method_of_Preemergence_TDR_Herbicide": "",
        "Date_of_Postemergence": "",
        "Method_of_Postemergence_Herbicide": 1015,
        "Method_of_Postemergence_TDR": "",
        "Method_of_Postemergence_TDR_Herbicide": "",
        "Date_of_Effectiveness": "",
        "App_Effective": 1015,
        "Date_of_Postemergence2": "",
        "Method_of_Postemergence2_Herbicide": 1015,
        "Method_of_Postemergence2_TDR": "",
        "Method_of_Postemergence2_TDR_Herbicide": "",
        "App_Effective2": 1015,
        "App_Effective_Approved2": 1015,
        "Date_of_Postemergence3": "",
        "Method_of_Postemergence3_Herbicide": 1015,
        "Method_of_Postemergence3_TDR": "",
        "Method_of_Postemergence3_TDR_Herbicide": "",
        "App_Effective3": 1015,
        "App_Effective_Approved3": 1015,
        "Date_of_Postemergence4": "",
        "Method_of_Postemergence4_Herbicide": 1015,
        "Method_of_Postemergence4_TDR": "",
        "Method_of_Postemergence4_TDR_Herbicide": "",
        "App_Effective4": 1015,
        "App_Effective_Approved4": 1015,
        "Date_of_Postemergence5": "",
        "Method_of_Postemergence5_Herbicide": 1015,
        "Method_of_Postemergence5_TDR": "",
        "Method_of_Postemergence5_TDR_Herbicide": "",
        "App_Effective5": 1015,
        "App_Effective_Approved5": 1015,
        "Planted_Crop": 1015,
        "Planted_Crop_Date": ""
    };
    //    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //    //Read all elements on UI using class name 
    var inputs = document.getElementsByClassName("form_Volunteer");
    //{ "Id_Volunteer": 3, "Trial_Id": 3, "Locked": "yes", "Date_of_Burn_Down": "01/30/2015", "Method_of_Burn_Down": 1, "Method_of_Burn_Down_Herbicide": 3, "Method_of_Burn_Down_TDR": "John", "Method_of_Burn_Down_TDR_Herbicide": "Other Herbicide", "Date_of_Preemergence": "01/30/2015", "Method_of_Preemergence_Herbicide": 3, "Method_of_Preemergence_TDR": "John", "Method_of_Preemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Postemergence": "01/30/2015", "Method_of_Postemergence_Herbicide": 3, "Method_of_Postemergence_TDR": "John", "Method_of_Postemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Errectiveness": "1/30/2015", "App_Effective": 0, "Date_of_Postemergence2": "01/30/2015", "Method_of_Postemergence2_Herbicide": 3, "Method_of_Postemergence2_TDR": "John", "Method_of_Postemergence2_TDR_Herbicide": "Other Herbicide", "App_Effective2": 0, "App_Effective_Approved2": 1, "Date_of_Postemergence3": "01/30/2015", "Method_of_Postemergence3_Herbicide": 3, "Method_of_Postemergence3_TDR": "John", "Method_of_Postemergence3_TDR_Herbicide": "Other Herbicide", "App_Effective3": 0, "App_Effective_Approved3": 1, "Date_of_Postemergence4": "01/30/2015", "Method_of_Postemergence4_Herbicide": 3, "Method_of_Postemergence4_TDR": "John", "Method_of_Postemergence4_TDR_Herbicide": "Other Herbicide", "App_Effective4": 0, "App_Effective_Approved4": 1, "Date_of_Postemergence5": "01/30/2015", "Method_of_Postemergence5_Herbicide": 3, "Method_of_Postemergence5_TDR": "John", "Method_of_Postemergence5_TDR_Herbicide": "Other Herbicide", "App_Effective5": 0, "App_Effective_Approved5": 0 };
    //trialVolunteer.Id_Volunteer = workingFormId;
    trialVolunteer.Trial_Id = trialsId;
    trialVolunteer.Locked = locked;

    trialVolunteer.Planted_Crop_Date = Datesformat(inputs['Planted_Crop_Date'].value, "/", "no");
    if (trialVolunteer.Planted_Crop_Date == "") Incomplete += 1;
    trialVolunteer.Planted_Crop = parseInt(inputs['Planted_Crop'].value);
    if (trialVolunteer.Planted_Crop == 1015) Incomplete += 1;

    var plantedCrop = trialVolunteer.Planted_Crop.toString();
    if (plantedCrop == "1018" || plantedCrop == "1019" || plantedCrop == "1020" || plantedCrop == "99999") {

        trialVolunteer.Date_of_Burn_Down = Datesformat(inputs['Date_of_Burn_Down'].value, "/", "no");
        if (trialVolunteer.Date_of_Burn_Down == "") Incomplete += 1;
        trialVolunteer.Method_of_Burn_Down = parseInt(inputs['Method_of_Burn_Down'].value);
        if (trialVolunteer.Method_of_Burn_Down == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Burn_Down_Herbicide = parseInt(inputs['Method_of_Burn_Down_Herbicide'].value);
        if (trialVolunteer.Method_of_Burn_Down_Herbicide == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Burn_Down_TDR = inputs['Method_of_Burn_Down_TDR'].value;
        trialVolunteer.Method_of_Burn_Down_TDR_Herbicide = inputs['Method_of_Burn_Down_TDR_Herbicide'].value;
        if (trialVolunteer.Method_of_Burn_Down_Herbicide == 99999 && (trialVolunteer.Method_of_Burn_Down_TDR == "" || trialVolunteer.Method_of_Burn_Down_TDR_Herbicide == "")) Incomplete += 1;
        trialVolunteer.Date_of_Preemergence = Datesformat(inputs['Date_of_Preemergence'].value, "/", "no");
        if (trialVolunteer.Date_of_Preemergence == "") Incomplete += 1;
        trialVolunteer.Method_of_Preemergence_Herbicide = parseInt(inputs['Method_of_Preemergence_Herbicide'].value);
        if (trialVolunteer.Method_of_Preemergence_Herbicide == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Preemergence_TDR = inputs['Method_of_Preemergence_TDR'].value;
        trialVolunteer.Method_of_Preemergence_TDR_Herbicide = inputs['Method_of_Preemergence_TDR_Herbicide'].value;
        if (trialVolunteer.Method_of_Preemergence_Herbicide == 99999 && (trialVolunteer.Method_of_Preemergence_TDR == "" || trialVolunteer.Method_of_Preemergence_TDR_Herbicide == "")) Incomplete += 1;
        trialVolunteer.Date_of_Postemergence = Datesformat(inputs['Date_of_Postemergence'].value, "/", "no");
        if (trialVolunteer.Date_of_Preemergence == "") Incomplete += 1;
        trialVolunteer.Method_of_Postemergence_Herbicide = parseInt(inputs['Method_of_Postemergence_Herbicide'].value);
        if (trialVolunteer.Method_of_Postemergence_Herbicide == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Postemergence_TDR = inputs['Method_of_Postemergence_TDR'].value;
        trialVolunteer.Method_of_Postemergence_TDR_Herbicide = inputs['Method_of_Postemergence_TDR_Herbicide'].value;
        if (trialVolunteer.Method_of_Postemergence_Herbicide == 99999 && (trialVolunteer.Method_of_Postemergence_TDR == "" || trialVolunteer.Method_of_Postemergence_TDR_Herbicide == "")) Incomplete += 1;
        trialVolunteer.Date_of_Effectiveness = Datesformat(inputs['Date_of_Effectiveness'].value, "/", "no");
        if (trialVolunteer.Date_of_Effectiveness == "") Incomplete += 1;
        trialVolunteer.App_Effective = ((typeof $("#App_Effective :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#App_Effective :radio:checked").val()));
        trialVolunteer.Date_of_Postemergence2 = Datesformat(inputs['Date_of_Postemergence2'].value, "/", "no");
        if (trialVolunteer.App_Effective == 1015) Incomplete += 1;
        if (trialVolunteer.App_Effective == 1002 && trialVolunteer.Date_of_Postemergence2 == "") Incomplete += 1;
        trialVolunteer.Method_of_Postemergence2_Herbicide = parseInt(inputs['Method_of_Postemergence2_Herbicide'].value);
        if (trialVolunteer.App_Effective == 1002 && trialVolunteer.Method_of_Postemergence2_Herbicide == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Postemergence2_TDR = inputs['Method_of_Postemergence2_TDR'].value;
        trialVolunteer.Method_of_Postemergence2_TDR_Herbicide = inputs['Method_of_Postemergence2_TDR_Herbicide'].value;
        if (trialVolunteer.App_Effective == 1002 && trialVolunteer.Method_of_Postemergence2_Herbicide == 99999 && (trialVolunteer.Method_of_Postemergence2_TDR == "" || trialVolunteer.Method_of_Postemergence2_TDR_Herbicide == "")) Incomplete += 1;
        trialVolunteer.App_Effective2 = ((typeof $("#App_Effective2 :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#App_Effective2 :radio:checked").val()));
        trialVolunteer.App_Effective_Approved2 = (($("#App_Effective_Approved2").prop("checked")) ? 1014 : 1015);
        trialVolunteer.Date_of_Postemergence3 = Datesformat(inputs['Date_of_Postemergence3'].value, "/", "no");
        if (trialVolunteer.App_Effective2 == 1002 && trialVolunteer.Date_of_Postemergence3 == "") Incomplete += 1;
        trialVolunteer.Method_of_Postemergence3_Herbicide = parseInt(inputs['Method_of_Postemergence3_Herbicide'].value);
        if (trialVolunteer.App_Effective2 == 1002 && trialVolunteer.Method_of_Postemergence3_Herbicide == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Postemergence3_TDR = inputs['Method_of_Postemergence3_TDR'].value;
        trialVolunteer.Method_of_Postemergence3_TDR_Herbicide = inputs['Method_of_Postemergence3_TDR_Herbicide'].value;
        if (trialVolunteer.App_Effective2 == 1002 && trialVolunteer.Method_of_Postemergence3_Herbicide == 99999 && (trialVolunteer.Method_of_Postemergence3_TDR == "" || trialVolunteer.Method_of_Postemergence3_TDR_Herbicide == "")) Incomplete += 1;
        trialVolunteer.App_Effective3 = ((typeof $("#App_Effective3 :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#App_Effective3 :radio:checked").val()));
        trialVolunteer.App_Effective_Approved3 = (($("#App_Effective_Approved3").prop("checked")) ? 1014 : 1015);
        trialVolunteer.Date_of_Postemergence4 = Datesformat(inputs['Date_of_Postemergence4'].value, "/", "no");
        if (trialVolunteer.App_Effective3 == 1002 && trialVolunteer.Date_of_Postemergence4 == "") Incomplete += 1;
        trialVolunteer.Method_of_Postemergence4_Herbicide = parseInt(inputs['Method_of_Postemergence4_Herbicide'].value);
        if (trialVolunteer.App_Effective3 == 1002 && trialVolunteer.Method_of_Postemergence4_Herbicide == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Postemergence4_TDR = inputs['Method_of_Postemergence4_TDR'].value;
        trialVolunteer.Method_of_Postemergence4_TDR_Herbicide = inputs['Method_of_Postemergence4_TDR_Herbicide'].value;
        if (trialVolunteer.App_Effective3 == 1002 && trialVolunteer.Method_of_Postemergence4_Herbicide == 99999 && (trialVolunteer.Method_of_Postemergence4_TDR == "" || trialVolunteer.Method_of_Postemergence4_TDR_Herbicide == "")) Incomplete += 1;
        trialVolunteer.App_Effective4 = ((typeof $("#App_Effective4 :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#App_Effective4 :radio:checked").val()));
        trialVolunteer.App_Effective_Approved4 = (($("#App_Effective_Approved4").prop("checked")) ? 1014 : 1015);
        trialVolunteer.Date_of_Postemergence5 = Datesformat(inputs['Date_of_Postemergence5'].value, "/", "no");
        if (trialVolunteer.App_Effective4 == 1002 && trialVolunteer.Date_of_Postemergence5 == "") Incomplete += 1;
        trialVolunteer.Method_of_Postemergence5_Herbicide = parseInt(inputs['Method_of_Postemergence5_Herbicide'].value);
        if (trialVolunteer.App_Effective4 == 1002 && trialVolunteer.Method_of_Postemergence5_Herbicide == 1015) Incomplete += 1;
        trialVolunteer.Method_of_Postemergence5_TDR = inputs['Method_of_Postemergence5_TDR'].value;
        trialVolunteer.Method_of_Postemergence5_TDR_Herbicide = inputs['Method_of_Postemergence5_TDR_Herbicide'].value;
        if (trialVolunteer.App_Effective4 == 1002 && trialVolunteer.Method_of_Postemergence5_Herbicide == 99999 && (trialVolunteer.Method_of_Postemergence5_TDR == "" || trialVolunteer.Method_of_Postemergence5_TDR_Herbicide == "")) Incomplete += 1;
        trialVolunteer.App_Effective5 = ((typeof $("#App_Effective5 :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#App_Effective5 :radio:checked").val()));
        trialVolunteer.App_Effective_Approved5 = (($("#App_Effective_Approved5").prop("checked")) ? 1014 : 1015);

        if (
        (trialVolunteer.App_Effective2 == 1002 && trialVolunteer.App_Effective_Approved2 == 1015) ||
        (trialVolunteer.App_Effective3 == 1002 && trialVolunteer.App_Effective_Approved3 == 1015) ||
        (trialVolunteer.App_Effective4 == 1002 && trialVolunteer.App_Effective_Approved4 == 1015) ||
        (trialVolunteer.App_Effective5 == 1002 && trialVolunteer.App_Effective_Approved5 == 1015)) {
            VolDashboard = 2;
        } else if (
        (trialVolunteer.App_Effective == 1002 && trialVolunteer.Date_of_Postemergence2 == "") ||
        (trialVolunteer.App_Effective_Approved2 == 1014 && trialVolunteer.Date_of_Postemergence3 == "") ||
        (trialVolunteer.App_Effective_Approved3 == 1014 && trialVolunteer.Date_of_Postemergence4 == "") ||
        (trialVolunteer.App_Effective_Approved4 == 1014 && trialVolunteer.Date_of_Postemergence5 == "")) {
            VolDashboard = 1;
        } else if (Incomplete >= 1) {
            VolDashboard = 1;
        } else {
            VolDashboard = 3;
        }
    } else {
        if (Incomplete >= 1) {
            VolDashboard = 1;
        } else {
            VolDashboard = 3;
        }
    }
    if (VolDashboard != 3 && locked == 1) {
        alertify.alert("Please complete the form before trying to Lock it.  Thanks");
    } else {
        if (VolDashboard == 3 && locked == 1) {
            VolDashboard = 4;
        }

        if (CheckNetworkStatus()) {
            if (SendData("form", "Volunteer_Monitoring",
                '{"TrialID": ' + trialsId + ',"WorkflowID": 16, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (VolDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                '{"QuestionID": 1,"ResponseValue": "' + trialVolunteer.Date_of_Burn_Down + '"},' +
                '{"QuestionID": 2,"ResponseValue": ' + trialVolunteer.Method_of_Burn_Down + '},' +
                '{"QuestionID": 3,"ResponseValue": ' + trialVolunteer.Method_of_Burn_Down_Herbicide + '},' +
                '{"QuestionID": 4,"ResponseValue": "' + trialVolunteer.Method_of_Burn_Down_TDR + '"},' +
                '{"QuestionID": 5,"ResponseValue": "' + trialVolunteer.Method_of_Burn_Down_TDR_Herbicide + '"},' +
                '{"QuestionID": 6,"ResponseValue": "' + trialVolunteer.Date_of_Preemergence + '"},' +
                '{"QuestionID": 7,"ResponseValue": ' + trialVolunteer.Method_of_Preemergence_Herbicide + '},' +
                '{"QuestionID": 8,"ResponseValue": "' + trialVolunteer.Method_of_Preemergence_TDR + '"},' +
                '{"QuestionID": 9,"ResponseValue": "' + trialVolunteer.Method_of_Preemergence_TDR_Herbicide + '"},' +
                '{"QuestionID": 10,"ResponseValue": "' + trialVolunteer.Date_of_Postemergence + '"},' +
                '{"QuestionID": 11,"ResponseValue": ' + trialVolunteer.Method_of_Postemergence_Herbicide + '},' +
                '{"QuestionID": 12,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence_TDR + '"},' +
                '{"QuestionID": 13,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence_TDR_Herbicide + '"},' +
                '{"QuestionID": 14,"ResponseValue": "' + trialVolunteer.Date_of_Effectiveness + '"},' +
                '{"QuestionID": 15,"ResponseValue": ' + trialVolunteer.App_Effective + '},' +
                '{"QuestionID": 16,"ResponseValue": "' + trialVolunteer.Date_of_Postemergence2 + '"},' +
                '{"QuestionID": 17,"ResponseValue": ' + trialVolunteer.Method_of_Postemergence2_Herbicide + '},' +
                '{"QuestionID": 18,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence2_TDR + '"},' +
                '{"QuestionID": 19,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence2_TDR_Herbicide + '"},' +
                '{"QuestionID": 20,"ResponseValue": ' + trialVolunteer.App_Effective2 + '},' +
                '{"QuestionID": 21,"ResponseValue": ' + trialVolunteer.App_Effective_Approved2 + '},' +
                '{"QuestionID": 22,"ResponseValue": "' + trialVolunteer.Date_of_Postemergence3 + '"},' +
                '{"QuestionID": 23,"ResponseValue": ' + trialVolunteer.Method_of_Postemergence3_Herbicide + '},' +
                '{"QuestionID": 24,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence3_TDR + '"},' +
                '{"QuestionID": 25,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence3_TDR_Herbicide + '"},' +
                '{"QuestionID": 26,"ResponseValue": ' + trialVolunteer.App_Effective3 + '},' +
                '{"QuestionID": 27,"ResponseValue": ' + trialVolunteer.App_Effective_Approved3 + '},' +
                '{"QuestionID": 28,"ResponseValue": "' + trialVolunteer.Date_of_Postemergence4 + '"},' +
                '{"QuestionID": 29,"ResponseValue": ' + trialVolunteer.Method_of_Postemergence4_Herbicide + '},' +
                '{"QuestionID": 30,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence4_TDR + '"},' +
                '{"QuestionID": 31,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence4_TDR_Herbicide + '"},' +
                '{"QuestionID": 32,"ResponseValue": ' + trialVolunteer.App_Effective4 + '},' +
                '{"QuestionID": 33,"ResponseValue": ' + trialVolunteer.App_Effective_Approved4 + '},' +
                '{"QuestionID": 34,"ResponseValue": "' + trialVolunteer.Date_of_Postemergence5 + '"},' +
                '{"QuestionID": 35,"ResponseValue": ' + trialVolunteer.Method_of_Postemergence5_Herbicide + '},' +
                '{"QuestionID": 36,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence5_TDR + '"},' +
                '{"QuestionID": 37,"ResponseValue": "' + trialVolunteer.Method_of_Postemergence5_TDR_Herbicide + '"},' +
                '{"QuestionID": 38,"ResponseValue": ' + trialVolunteer.App_Effective5 + '},' +
                '{"QuestionID": 39,"ResponseValue": ' + trialVolunteer.App_Effective_Approved5 + '},' +
                '{"QuestionID": 73,"ResponseValue": ' + trialVolunteer.Planted_Crop + '},' +
                '{"QuestionID": 74,"ResponseValue": "' + trialVolunteer.Planted_Crop_Date + '"}]}')) {
                RecordSaved(VolDashboard, "Volunteer_Monitoring", "Form_Volunteer_Monitoring", 'ComplianceDashboard.html');
            }
        } else {
            trialVolunteer.Sync = 1;
        }
        var verifyifnull = GetLocalStorageData("F16", trialsId, "Trial_Id");
        if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
            localStorage.setItem("F16_Form_Volunteer_Monitoring_" + (parseInt(GetMaxNum("F16")) + 1), JSON.stringify(trialVolunteer));
        } else {
            //Convert the object into JSON and store it in LocalStorage 
            localStorage.setItem(workingForm, JSON.stringify(trialVolunteer));
        }
        RecordSaved(VolDashboard, "Volunteer_Monitoring", "Form_Volunteer_Monitoring", 'ComplianceDashboard.html');
    }
}

function saveSSC(locked) {
    var SSCDashboard = 1;
    var Incomplete = 0;
    var SSCMissing = "";
    var trialSSC = {
        //"Id_Volunteer": 0,
        "Trial_Id": 0,
        "Locked": 0,
        "Sync": 0,
        "Located_Flood_Plain": 1015,
        "Trial_Site_Sloped_Surface": 1015,
        "Washout_5_Years": 1015,
        "Site_Located_Area": 1015,
        "Drains_Site_Alleyway": 1015,
        "Outlet_Drain_Area": 1015,
        "Drip_Tube_Tape_Monitoring": 1015,
        "Mitigation_Controls": ""
    };
    //    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //    //Read all elements on UI using class name 
    var inputs = document.getElementsByClassName("form_SSC");
    //{ "Id_Volunteer": 3, "Trial_Id": 3, "Locked": "yes", "Date_of_Burn_Down": "01/30/2015", "Method_of_Burn_Down": 1, "Method_of_Burn_Down_Herbicide": 3, "Method_of_Burn_Down_TDR": "John", "Method_of_Burn_Down_TDR_Herbicide": "Other Herbicide", "Date_of_Preemergence": "01/30/2015", "Method_of_Preemergence_Herbicide": 3, "Method_of_Preemergence_TDR": "John", "Method_of_Preemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Postemergence": "01/30/2015", "Method_of_Postemergence_Herbicide": 3, "Method_of_Postemergence_TDR": "John", "Method_of_Postemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Errectiveness": "1/30/2015", "App_Effective": 0, "Date_of_Postemergence2": "01/30/2015", "Method_of_Postemergence2_Herbicide": 3, "Method_of_Postemergence2_TDR": "John", "Method_of_Postemergence2_TDR_Herbicide": "Other Herbicide", "App_Effective2": 0, "App_Effective_Approved2": 1, "Date_of_Postemergence3": "01/30/2015", "Method_of_Postemergence3_Herbicide": 3, "Method_of_Postemergence3_TDR": "John", "Method_of_Postemergence3_TDR_Herbicide": "Other Herbicide", "App_Effective3": 0, "App_Effective_Approved3": 1, "Date_of_Postemergence4": "01/30/2015", "Method_of_Postemergence4_Herbicide": 3, "Method_of_Postemergence4_TDR": "John", "Method_of_Postemergence4_TDR_Herbicide": "Other Herbicide", "App_Effective4": 0, "App_Effective_Approved4": 1, "Date_of_Postemergence5": "01/30/2015", "Method_of_Postemergence5_Herbicide": 3, "Method_of_Postemergence5_TDR": "John", "Method_of_Postemergence5_TDR_Herbicide": "Other Herbicide", "App_Effective5": 0, "App_Effective_Approved5": 0 };
    //trialVolunteer.Id_Volunteer = workingFormId;
    trialSSC.Trial_Id = trialsId;
    trialSSC.Locked = locked;
    trialSSC.Located_Flood_Plain = ((typeof $("#Located_Flood_Plain :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Located_Flood_Plain :radio:checked").val()));
    if (trialSSC.Located_Flood_Plain == 1015) {
        Incomplete += 1;
        SSCMissing += "<br/>*Is the trial site located within a flood plain?,";
    }
    trialSSC.Trial_Site_Sloped_Surface = ((typeof $("#Trial_Site_Sloped_Surface :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Trial_Site_Sloped_Surface :radio:checked").val()));
    if (trialSSC.Trial_Site_Sloped_Surface == 1015) {
        Incomplete += 1;
        SSCMissing += "<br/>*Is any portion of the trial site located on a sloped surface or at risk of run off during heavy rains?,";
    }
    trialSSC.Washout_5_Years = ((typeof $("#Washout_5_Years :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Washout_5_Years :radio:checked").val()));
    if (trialSSC.Washout_5_Years == 1015) {
        Incomplete += 1;
        SSCMissing += "<br/>*Has the trial site been associated with a flood or washout during the last five years?,";
    }
    trialSSC.Site_Located_Area = ((typeof $("#Site_Located_Area :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Site_Located_Area :radio:checked").val()));
    if (trialSSC.Site_Located_Area == 1015) {
        Incomplete += 1;
        SSCMissing += "<br/>*Is this site located in a no-till area?,";
    }
    trialSSC.Drains_Site_Alleyway = ((typeof $("#Drains_Site_Alleyway :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Drains_Site_Alleyway :radio:checked").val()));
    if (trialSSC.Drains_Site_Alleyway == 1015) {
        Incomplete += 1;
        SSCMissing += "<br/>*Are there open inlets for drains present within the trial site or alleyway?,";
    }
    trialSSC.Outlet_Drain_Area = ((typeof $("#Outlet_Drain_Area :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Outlet_Drain_Area :radio:checked").val()));
    if (trialSSC.Outlet_Drain_Area == 1015) {
        Incomplete += 1;
        SSCMissing += "<br/>*If open drain inlet is present within the trial site, is the outlet of the drain in an area that is not SRR or Monsanto-controlled?,";
    }
    trialSSC.Drip_Tube_Tape_Monitoring = ((typeof $("#Drip_Tube_Tape_Monitoring :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Drip_Tube_Tape_Monitoring :radio:checked").val()));
    if (trialSSC.Drip_Tube_Tape_Monitoring == 1015) {
        Incomplete += 1;
        SSCMissing += "<br/>*Is drip tube/tape used for irrigation that will be removed from the trial site during the trial or volunteer monitoring period?,";
    }
    trialSSC.Mitigation_Controls = inputs['Mitigation_Controls'].value;

    if (Incomplete >= 1) {
        SSCDashboard = 1;
    } else {
        SSCDashboard = 3;
    }
    if (SSCDashboard != 3 && locked == 1) {
        alertify.alert("Please complete these questions: <br/>" + SSCMissing.substring(0, SSCMissing.length - 1) + " <br/><br/>before trying to Lock it.  Thanks");
    } else {
        if (SSCDashboard == 3 && locked == 1) {
            SSCDashboard = 4;
        }

        if (CheckNetworkStatus()) {
            if (SendData("form", "Site_Selection_Checklist",
                '{"TrialID": ' + trialsId + ',"WorkflowID": 3, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (SSCDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                '{"QuestionID": 40,"ResponseValue": ' + trialSSC.Located_Flood_Plain + '},' +
                '{"QuestionID": 41,"ResponseValue": ' + trialSSC.Trial_Site_Sloped_Surface + '},' +
                '{"QuestionID": 42,"ResponseValue": ' + trialSSC.Washout_5_Years + '},' +
                '{"QuestionID": 43,"ResponseValue": ' + trialSSC.Site_Located_Area + '},' +
                '{"QuestionID": 44,"ResponseValue": ' + trialSSC.Drains_Site_Alleyway + '},' +
                '{"QuestionID": 45,"ResponseValue": ' + trialSSC.Outlet_Drain_Area + '},' +
                '{"QuestionID": 46,"ResponseValue": ' + trialSSC.Drip_Tube_Tape_Monitoring + '},' +
                '{"QuestionID": 47,"ResponseValue": "' + trialSSC.Mitigation_Controls + '"}]}')) {
                RecordSaved(SSCDashboard, "Site_Selection_Checklist", "Form_Site_Selection_Checklist", 'ComplianceDashboard.html');
            }

        } else {
            trialSSC.Sync = 1;
        }

        var verifyifnull = GetLocalStorageData("F03", trialsId, "Trial_Id");
        if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
            localStorage.setItem("F03_Form_Site_Selection_Checklist_" + (parseInt(GetMaxNum("F03")) + 1), JSON.stringify(trialSSC));
        } else {
            //Convert the object into JSON and store it in LocalStorage 
            localStorage.setItem(workingForm, JSON.stringify(trialSSC));
        }
        RecordSaved(SSCDashboard, "Site_Selection_Checklist", "Form_Site_Selection_Checklist", 'ComplianceDashboard.html');
    }

    //    //Reload the Page 
    //            location.reload(); 
}

function saveLandContracts(locked) {
    var LandContractsDashboard = 1;
    var Incomplete = 0;
    var trialLandContracts = {
        //"Id_Volunteer": 0,
        "Trial_Id": 0,
        "Locked": 0,
        "Sync": 0,
        "Contract_Signed": 1015,
        "Date_of_Contract": ""
    };
    //    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //    //Read all elements on UI using class name 
    var inputs = document.getElementsByClassName("form_LandContracts");
    //{ "Id_Volunteer": 3, "Trial_Id": 3, "Locked": "yes", "Date_of_Burn_Down": "01/30/2015", "Method_of_Burn_Down": 1, "Method_of_Burn_Down_Herbicide": 3, "Method_of_Burn_Down_TDR": "John", "Method_of_Burn_Down_TDR_Herbicide": "Other Herbicide", "Date_of_Preemergence": "01/30/2015", "Method_of_Preemergence_Herbicide": 3, "Method_of_Preemergence_TDR": "John", "Method_of_Preemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Postemergence": "01/30/2015", "Method_of_Postemergence_Herbicide": 3, "Method_of_Postemergence_TDR": "John", "Method_of_Postemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Errectiveness": "1/30/2015", "App_Effective": 0, "Date_of_Postemergence2": "01/30/2015", "Method_of_Postemergence2_Herbicide": 3, "Method_of_Postemergence2_TDR": "John", "Method_of_Postemergence2_TDR_Herbicide": "Other Herbicide", "App_Effective2": 0, "App_Effective_Approved2": 1, "Date_of_Postemergence3": "01/30/2015", "Method_of_Postemergence3_Herbicide": 3, "Method_of_Postemergence3_TDR": "John", "Method_of_Postemergence3_TDR_Herbicide": "Other Herbicide", "App_Effective3": 0, "App_Effective_Approved3": 1, "Date_of_Postemergence4": "01/30/2015", "Method_of_Postemergence4_Herbicide": 3, "Method_of_Postemergence4_TDR": "John", "Method_of_Postemergence4_TDR_Herbicide": "Other Herbicide", "App_Effective4": 0, "App_Effective_Approved4": 1, "Date_of_Postemergence5": "01/30/2015", "Method_of_Postemergence5_Herbicide": 3, "Method_of_Postemergence5_TDR": "John", "Method_of_Postemergence5_TDR_Herbicide": "Other Herbicide", "App_Effective5": 0, "App_Effective_Approved5": 0 };
    //trialVolunteer.Id_Volunteer = workingFormId;
    trialLandContracts.Trial_Id = trialsId;
    trialLandContracts.Locked = locked;
    trialLandContracts.Contract_Signed = ((typeof $("#Contract_Signed :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Contract_Signed :radio:checked").val()));
    if (trialLandContracts.Contract_Signed == 1015) Incomplete += 1;
    if (trialLandContracts.Contract_Signed == 1002) {
        var Block = true;
        Incomplete += 1;
    }
    trialLandContracts.Date_of_Contract = Datesformat(inputs['Date_of_Contract'].value, "/", "no");
    if (trialLandContracts.Date_of_Contract == "") Incomplete += 1;

    if (Incomplete >= 1) {
        LandContractsDashboard = 1;
    } else {
        LandContractsDashboard = 3;
    }
    if (LandContractsDashboard != 3 && locked == 1) {
        alertify.alert("Please complete the form before trying to Lock it.  Thanks");
    } else if (LandContractsDashboard == 3 && locked == 1 && Block == true) {
        alertify.alert("All requirements must be completed before locking form.");
    } else {
        if (LandContractsDashboard == 3 && locked == 1) {
            LandContractsDashboard = 4;
        }

        if (CheckNetworkStatus()) {

            if (SendData("form", "Land_Contracts",
                '{"TrialID": ' + trialsId + ',"WorkflowID": 4, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (LandContractsDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                '{"QuestionID": 48,"ResponseValue": ' + trialLandContracts.Contract_Signed + '},' +
                '{"QuestionID": 49,"ResponseValue": "' + trialLandContracts.Date_of_Contract + '"}]}')) {
                RecordSaved(LandContractsDashboard, "Land_Contracts", "Form_Land_Contracts", 'ComplianceDashboard.html');
            }
        } else {
            trialLandContracts.Sync = 1;
        }

        var verifyifnull = GetLocalStorageData("F04", trialsId, "Trial_Id");
        if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
            localStorage.setItem("F04_Form_Land_Contracts_" + (parseInt(GetMaxNum("F04")) + 1), JSON.stringify(trialLandContracts));
        } else {
            //Convert the object into JSON and store it in LocalStorage 
            localStorage.setItem(workingForm, JSON.stringify(trialLandContracts));
        }
        RecordSaved(LandContractsDashboard, "Land_Contracts", "Form_Land_Contracts", 'ComplianceDashboard.html');
    }
    //    //Reload the Page 
    //            location.reload(); 
}

function saveComplianceExceptions(locked) {
    var ComplianceExceptionsDashboard = 1;
    var Incomplete = 0;
    var trialComplianceExceptions = {
        //"Id_Volunteer": 0,
        "Trial_Id": 0,
        "Locked": 0,
        "Sync": 0,
        "Compliance_Exceptions_Needed": 1015,
        "Date_of_Exception": "",
        "Duration_of_Exception": "",
        "Trial_type": "",
        "Exception_Description": "",
        "File_Name": "",
        "File_ID": ""
    };
    //    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //    //Read all elements on UI using class name 
    var inputs = document.getElementsByClassName("form_ComplianceExceptions");
    //{ "Id_Volunteer": 3, "Trial_Id": 3, "Locked": "yes", "Date_of_Burn_Down": "01/30/2015", "Method_of_Burn_Down": 1, "Method_of_Burn_Down_Herbicide": 3, "Method_of_Burn_Down_TDR": "John", "Method_of_Burn_Down_TDR_Herbicide": "Other Herbicide", "Date_of_Preemergence": "01/30/2015", "Method_of_Preemergence_Herbicide": 3, "Method_of_Preemergence_TDR": "John", "Method_of_Preemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Postemergence": "01/30/2015", "Method_of_Postemergence_Herbicide": 3, "Method_of_Postemergence_TDR": "John", "Method_of_Postemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Errectiveness": "1/30/2015", "App_Effective": 0, "Date_of_Postemergence2": "01/30/2015", "Method_of_Postemergence2_Herbicide": 3, "Method_of_Postemergence2_TDR": "John", "Method_of_Postemergence2_TDR_Herbicide": "Other Herbicide", "App_Effective2": 0, "App_Effective_Approved2": 1, "Date_of_Postemergence3": "01/30/2015", "Method_of_Postemergence3_Herbicide": 3, "Method_of_Postemergence3_TDR": "John", "Method_of_Postemergence3_TDR_Herbicide": "Other Herbicide", "App_Effective3": 0, "App_Effective_Approved3": 1, "Date_of_Postemergence4": "01/30/2015", "Method_of_Postemergence4_Herbicide": 3, "Method_of_Postemergence4_TDR": "John", "Method_of_Postemergence4_TDR_Herbicide": "Other Herbicide", "App_Effective4": 0, "App_Effective_Approved4": 1, "Date_of_Postemergence5": "01/30/2015", "Method_of_Postemergence5_Herbicide": 3, "Method_of_Postemergence5_TDR": "John", "Method_of_Postemergence5_TDR_Herbicide": "Other Herbicide", "App_Effective5": 0, "App_Effective_Approved5": 0 };
    //trialVolunteer.Id_Volunteer = workingFormId;
    if (filename != "") {
        trialComplianceExceptions.File_Name = filename;
    } else if ($('#Compliance_Attachments_link').text() != "") {
        trialComplianceExceptions.File_Name = $('#Compliance_Attachments_link').text();
    }

    trialComplianceExceptions.Trial_Id = trialsId;
    trialComplianceExceptions.Locked = locked;
    trialComplianceExceptions.Compliance_Exceptions_Needed = ((typeof $("#Compliance_Exceptions_Needed :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Compliance_Exceptions_Needed :radio:checked").val()));
    trialComplianceExceptions.Date_of_Exception = Datesformat(inputs['Date_of_Exception'].value, "/", "no");
    trialComplianceExceptions.Duration_of_Exception = Datesformat(inputs['Duration_of_Exception'].value, "/", "no");
    trialComplianceExceptions.Trial_type = $("input[name=Trial_typeCheckbox]:checked").map(function () { return this.value; }).get().join(",");
    trialComplianceExceptions.Exception_Description = inputs['Exception_Description'].value;

    if (trialComplianceExceptions.Compliance_Exceptions_Needed == 1015) Incomplete += 1;
    if (trialComplianceExceptions.Compliance_Exceptions_Needed == 1001) {
        if (trialComplianceExceptions.Date_of_Exception == "") Incomplete += 1;
        if (trialComplianceExceptions.Duration_of_Exception == "") Incomplete += 1;
        if (trialComplianceExceptions.Trial_type == "") Incomplete += 1;
        if (trialComplianceExceptions.Exception_Description == "") Incomplete += 1;
    }
    if (Incomplete >= 1) {
        ComplianceExceptionsDashboard = 1;
    } else {
        ComplianceExceptionsDashboard = 3;
    }
    if (ComplianceExceptionsDashboard != 3 && locked == 1) {
        alertify.alert("Please complete the form before trying to Lock it.  Thanks");
    } else {
        if (ComplianceExceptionsDashboard == 3 && locked == 1) {
            ComplianceExceptionsDashboard = 4;
        }

        if (CheckNetworkStatus()) {

            if (filename != "") {
                if (SendDataWithAttachments('{"CurrentUserAlias": "' + datat.UserId + '","Data": {"AttachmentTypeID": ' + suffix + ',"Comment": "","ContentAsBase64": "' + BigPic + '","TrialID": ' + trialsId + ',"WorkflowID": 5,"Name": "' + filename + '"}}', "form", "Compliance_Exceptions",
                    '{"TrialID": ' + trialsId + ',"WorkflowID": 5, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (ComplianceExceptionsDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                    '{"QuestionID": 50,"ResponseValue": ' + trialComplianceExceptions.Compliance_Exceptions_Needed + '},' +
                    '{"QuestionID": 51,"ResponseValue": "' + trialComplianceExceptions.Date_of_Exception + '"},' +
                    '{"QuestionID": 52,"ResponseValue": "' + trialComplianceExceptions.Duration_of_Exception + '"},' +
                    '{"QuestionID": 53,"ResponseValue": "' + trialComplianceExceptions.Trial_type + '"},' +
                    '{"QuestionID": 54,"ResponseValue": "' + trialComplianceExceptions.Exception_Description + '"}]}')) {
                    RecordSaved(ComplianceExceptionsDashboard, "Compliance_Exceptions", "Form_Compliance_Exceptions", 'ComplianceDashboard.html');
                }
            } else {
                if (SendData("form", "Compliance_Exceptions",
                    '{"TrialID": ' + trialsId + ',"WorkflowID": 5, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (ComplianceExceptionsDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                    '{"QuestionID": 50,"ResponseValue": ' + trialComplianceExceptions.Compliance_Exceptions_Needed + '},' +
                    '{"QuestionID": 51,"ResponseValue": "' + trialComplianceExceptions.Date_of_Exception + '"},' +
                    '{"QuestionID": 52,"ResponseValue": "' + trialComplianceExceptions.Duration_of_Exception + '"},' +
                    '{"QuestionID": 53,"ResponseValue": "' + trialComplianceExceptions.Trial_type + '"},' +
                    '{"QuestionID": 54,"ResponseValue": "' + trialComplianceExceptions.Exception_Description + '"}]}')) {
                    RecordSaved(ComplianceExceptionsDashboard, "Compliance_Exceptions", "Form_Compliance_Exceptions", 'ComplianceDashboard.html');
                }
            }
        } else {
            trialComplianceExceptions.Sync = 1;
        }
        if (filename != "" && trialComplianceExceptions.Sync == 1) {
            alertify.confirm("The file Attachment will not be saved without connection to the Victory Network.  Do you wish to continue?", function (e) {
                if (e) {
                    var verifyifnull = GetLocalStorageData("F05", trialsId, "Trial_Id");
                    if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
                        localStorage.setItem("F05_Form_Compliance_Exceptions_" + (parseInt(GetMaxNum("F05")) + 1), JSON.stringify(trialComplianceExceptions));
                    } else {
                        //Convert the object into JSON and store it in LocalStorage 
                        localStorage.setItem(workingForm, JSON.stringify(trialComplianceExceptions));
                    }
                    RecordSaved(ComplianceExceptionsDashboard, "Compliance_Exceptions", "Form_Compliance_Exceptions", 'ComplianceDashboard.html');
                }
            });
        } else {
            var verifyifnull = GetLocalStorageData("F05", trialsId, "Trial_Id");
            if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
                localStorage.setItem("F05_Form_Compliance_Exceptions_" + (parseInt(GetMaxNum("F05")) + 1), JSON.stringify(trialComplianceExceptions));
            } else {
                //Convert the object into JSON and store it in LocalStorage 
                localStorage.setItem(workingForm, JSON.stringify(trialComplianceExceptions));
            }
            RecordSaved(ComplianceExceptionsDashboard, "Compliance_Exceptions", "Form_Compliance_Exceptions", 'ComplianceDashboard.html');
        }


    }
    //    //Reload the Page 
    //            location.reload(); 
}

function saveComplianceMap(locked) {
    var ComplianceMapDashboard = 1;
    var Incomplete = 0;
    var trialComplianceMap = {
        //"Id_Volunteer": 0,
        "Trial_Id": 0,
        "Locked": 0,
        "Sync": 0,
        "Isolation_Method": 1015,
        "GPS_1_lat": "",
        "GPS_1_long": "",
        "GPS_2_lat": "",
        "GPS_2_long": "",
        "GPS_3_lat": "",
        "GPS_3_long": "",
        "GPS_4_lat": "",
        "GPS_4_long": "",
        "GPS_5_lat": "",
        "GPS_5_long": "",
        "GPS_6_lat": "",
        "GPS_6_long": "",
        "GPS_7_lat": "",
        "GPS_7_long": "",
        "GPS_8_lat": "",
        "GPS_8_long": "",
        "Certification_Agreement": 1015,
        "File_Name": "",
        "File_ID": ""
    };
    //    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //    //Read all elements on UI using class name 
    var inputs = document.getElementsByClassName("form_ComplianceMap");
    //{ "Id_Volunteer": 3, "Trial_Id": 3, "Locked": "yes", "Date_of_Burn_Down": "01/30/2015", "Method_of_Burn_Down": 1, "Method_of_Burn_Down_Herbicide": 3, "Method_of_Burn_Down_TDR": "John", "Method_of_Burn_Down_TDR_Herbicide": "Other Herbicide", "Date_of_Preemergence": "01/30/2015", "Method_of_Preemergence_Herbicide": 3, "Method_of_Preemergence_TDR": "John", "Method_of_Preemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Postemergence": "01/30/2015", "Method_of_Postemergence_Herbicide": 3, "Method_of_Postemergence_TDR": "John", "Method_of_Postemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Errectiveness": "1/30/2015", "App_Effective": 0, "Date_of_Postemergence2": "01/30/2015", "Method_of_Postemergence2_Herbicide": 3, "Method_of_Postemergence2_TDR": "John", "Method_of_Postemergence2_TDR_Herbicide": "Other Herbicide", "App_Effective2": 0, "App_Effective_Approved2": 1, "Date_of_Postemergence3": "01/30/2015", "Method_of_Postemergence3_Herbicide": 3, "Method_of_Postemergence3_TDR": "John", "Method_of_Postemergence3_TDR_Herbicide": "Other Herbicide", "App_Effective3": 0, "App_Effective_Approved3": 1, "Date_of_Postemergence4": "01/30/2015", "Method_of_Postemergence4_Herbicide": 3, "Method_of_Postemergence4_TDR": "John", "Method_of_Postemergence4_TDR_Herbicide": "Other Herbicide", "App_Effective4": 0, "App_Effective_Approved4": 1, "Date_of_Postemergence5": "01/30/2015", "Method_of_Postemergence5_Herbicide": 3, "Method_of_Postemergence5_TDR": "John", "Method_of_Postemergence5_TDR_Herbicide": "Other Herbicide", "App_Effective5": 0, "App_Effective_Approved5": 0 };
    //trialVolunteer.Id_Volunteer = workingFormId;
    if (filename != "") {
        trialComplianceMap.File_Name = filename;
    } else if ($('#Compliance_Map_Attachment_link').text() != "") {
        trialComplianceMap.File_Name = $('#Compliance_Map_Attachment_link').text();
    }
    if (trialComplianceMap.File_Name == "") Incomplete += 1;

    trialComplianceMap.Trial_Id = trialsId;
    trialComplianceMap.Locked = locked;
    trialComplianceMap.Isolation_Method = parseInt(inputs['Isolation_Method'].value);
    if (trialComplianceMap.Isolation_Method == 1015) Incomplete += 1;
    trialComplianceMap.GPS_1_lat = (inputs['GPS_1_lat'].value);
    if (trialComplianceMap.GPS_1_lat == "" || trialComplianceMap.GPS_1_lat == "0") Incomplete += 1;
    trialComplianceMap.GPS_1_long = (inputs['GPS_1_long'].value);
    if (trialComplianceMap.GPS_1_long == "" || trialComplianceMap.GPS_1_long == "0") Incomplete += 1;
    trialComplianceMap.GPS_2_lat = (inputs['GPS_2_lat'].value);
    if (trialComplianceMap.GPS_2_lat == "" || trialComplianceMap.GPS_2_lat == "0") Incomplete += 1;
    trialComplianceMap.GPS_2_long = (inputs['GPS_2_long'].value);
    if (trialComplianceMap.GPS_2_long == "" || trialComplianceMap.GPS_2_long == "0") Incomplete += 1;
    trialComplianceMap.GPS_3_lat = (inputs['GPS_3_lat'].value);
    if (trialComplianceMap.GPS_3_lat == "" || trialComplianceMap.GPS_3_lat == "0") Incomplete += 1;
    trialComplianceMap.GPS_3_long = (inputs['GPS_3_long'].value);
    if (trialComplianceMap.GPS_3_long == "" || trialComplianceMap.GPS_3_long == "0") Incomplete += 1;
    trialComplianceMap.GPS_4_lat = (inputs['GPS_4_lat'].value);
    if (trialComplianceMap.GPS_4_lat == "" || trialComplianceMap.GPS_4_lat == "0") Incomplete += 1;
    trialComplianceMap.GPS_4_long = (inputs['GPS_4_long'].value);
    if (trialComplianceMap.GPS_4_long == "" || trialComplianceMap.GPS_4_long == "0") Incomplete += 1;
    trialComplianceMap.GPS_5_lat = (inputs['GPS_5_lat'].value);
    trialComplianceMap.GPS_5_long = (inputs['GPS_5_long'].value);
    trialComplianceMap.GPS_6_lat = (inputs['GPS_6_lat'].value);
    trialComplianceMap.GPS_6_long = (inputs['GPS_6_long'].value);
    trialComplianceMap.GPS_7_lat = (inputs['GPS_7_lat'].value);
    trialComplianceMap.GPS_7_long = (inputs['GPS_7_long'].value);
    trialComplianceMap.GPS_8_lat = (inputs['GPS_8_lat'].value);
    trialComplianceMap.GPS_8_long = (inputs['GPS_8_long'].value);
    trialComplianceMap.Certification_Agreement = ((typeof $("#Certification_Agreement :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Certification_Agreement :radio:checked").val()));
    if (trialComplianceMap.Certification_Agreement == 1015) Incomplete += 1;

    if (Incomplete >= 1) {
        ComplianceMapDashboard = 1;
    } else {
        ComplianceMapDashboard = 3;
    }
    if (ComplianceMapDashboard != 3 && locked == 1) {
        alertify.alert("Please complete the form before trying to Lock it.  Thanks");
    } else {
        if (ComplianceMapDashboard == 3 && locked == 1) {
            ComplianceMapDashboard = 4;
        }

        if (CheckNetworkStatus()) {
            if (filename != "") {
                if (SendDataWithAttachments('{"CurrentUserAlias": "' + datat.UserId + '","Data": {"AttachmentTypeID": ' + suffix + ',"Comment": "","ContentAsBase64": "' + BigPic + '","TrialID": ' + trialsId + ',"WorkflowID": 6,"Name": "' + filename + '"}}', "form", "Compliance_Map",
                    '{"TrialID": ' + trialsId + ',"WorkflowID": 6, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (ComplianceMapDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                    '{"QuestionID": 55,"ResponseValue": ' + trialComplianceMap.Isolation_Method + '},' +
                    '{"QuestionID": 56,"ResponseValue": "' + trialComplianceMap.GPS_1_lat + '"},' +
                    '{"QuestionID": 57,"ResponseValue": "' + trialComplianceMap.GPS_1_long + '"},' +
                    '{"QuestionID": 58,"ResponseValue": "' + trialComplianceMap.GPS_2_lat + '"},' +
                    '{"QuestionID": 59,"ResponseValue": "' + trialComplianceMap.GPS_2_long + '"},' +
                    '{"QuestionID": 60,"ResponseValue": "' + trialComplianceMap.GPS_3_lat + '"},' +
                    '{"QuestionID": 61,"ResponseValue": "' + trialComplianceMap.GPS_3_long + '"},' +
                    '{"QuestionID": 62,"ResponseValue": "' + trialComplianceMap.GPS_4_lat + '"},' +
                    '{"QuestionID": 63,"ResponseValue": "' + trialComplianceMap.GPS_4_long + '"},' +
                    '{"QuestionID": 64,"ResponseValue": "' + trialComplianceMap.GPS_5_lat + '"},' +
                    '{"QuestionID": 65,"ResponseValue": "' + trialComplianceMap.GPS_5_long + '"},' +
                    '{"QuestionID": 66,"ResponseValue": "' + trialComplianceMap.GPS_6_lat + '"},' +
                    '{"QuestionID": 67,"ResponseValue": "' + trialComplianceMap.GPS_6_long + '"},' +
                    '{"QuestionID": 68,"ResponseValue": "' + trialComplianceMap.GPS_7_lat + '"},' +
                    '{"QuestionID": 69,"ResponseValue": "' + trialComplianceMap.GPS_7_long + '"},' +
                    '{"QuestionID": 70,"ResponseValue": "' + trialComplianceMap.GPS_8_lat + '"},' +
                    '{"QuestionID": 71,"ResponseValue": "' + trialComplianceMap.GPS_8_long + '"},' +
                    '{"QuestionID": 72,"ResponseValue": ' + trialComplianceMap.Certification_Agreement + '}]}')) {
                    RecordSaved(ComplianceMapDashboard, "Compliance_Map", "Form_Compliance_Map", 'ComplianceDashboard.html');
                }
            } else {
                if (SendData("form", "Compliance_Map",
                    '{"TrialID": ' + trialsId + ',"WorkflowID": 6, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (ComplianceMapDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                    '{"QuestionID": 55,"ResponseValue": ' + trialComplianceMap.Isolation_Method + '},' +
                    '{"QuestionID": 56,"ResponseValue": "' + trialComplianceMap.GPS_1_lat + '"},' +
                    '{"QuestionID": 57,"ResponseValue": "' + trialComplianceMap.GPS_1_long + '"},' +
                    '{"QuestionID": 58,"ResponseValue": "' + trialComplianceMap.GPS_2_lat + '"},' +
                    '{"QuestionID": 59,"ResponseValue": "' + trialComplianceMap.GPS_2_long + '"},' +
                    '{"QuestionID": 60,"ResponseValue": "' + trialComplianceMap.GPS_3_lat + '"},' +
                    '{"QuestionID": 61,"ResponseValue": "' + trialComplianceMap.GPS_3_long + '"},' +
                    '{"QuestionID": 62,"ResponseValue": "' + trialComplianceMap.GPS_4_lat + '"},' +
                    '{"QuestionID": 63,"ResponseValue": "' + trialComplianceMap.GPS_4_long + '"},' +
                    '{"QuestionID": 64,"ResponseValue": "' + trialComplianceMap.GPS_5_lat + '"},' +
                    '{"QuestionID": 65,"ResponseValue": "' + trialComplianceMap.GPS_5_long + '"},' +
                    '{"QuestionID": 66,"ResponseValue": "' + trialComplianceMap.GPS_6_lat + '"},' +
                    '{"QuestionID": 67,"ResponseValue": "' + trialComplianceMap.GPS_6_long + '"},' +
                    '{"QuestionID": 68,"ResponseValue": "' + trialComplianceMap.GPS_7_lat + '"},' +
                    '{"QuestionID": 69,"ResponseValue": "' + trialComplianceMap.GPS_7_long + '"},' +
                    '{"QuestionID": 70,"ResponseValue": "' + trialComplianceMap.GPS_8_lat + '"},' +
                    '{"QuestionID": 71,"ResponseValue": "' + trialComplianceMap.GPS_8_long + '"},' +
                    '{"QuestionID": 72,"ResponseValue": ' + trialComplianceMap.Certification_Agreement + '}]}')) {
                    RecordSaved(ComplianceMapDashboard, "Compliance_Map", "Form_Compliance_Map", 'ComplianceDashboard.html');
                }
            }
        } else {
            trialComplianceMap.Sync = 1;
        }
        if (filename != "" && trialComplianceMap.Sync == 1) {
            alertify.confirm("The file Attachment will not be saved without connection to the Victory Network.  Do you wish to continue?", function (e) {
                if (e) {
                    var verifyifnull = GetLocalStorageData("F06", trialsId, "Trial_Id");
                    if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
                        localStorage.setItem("F06_Form_Compliance_Map_" + (parseInt(GetMaxNum("F06")) + 1), JSON.stringify(trialComplianceMap));
                    } else {
                        //Convert the object into JSON and store it in LocalStorage 
                        localStorage.setItem(workingForm, JSON.stringify(trialComplianceMap));
                    }
                    RecordSaved(ComplianceMapDashboard, "Compliance_Map", "Form_Compliance_Map", 'ComplianceDashboard.html');
                }
            });
        } else {
            var verifyifnull = GetLocalStorageData("F06", trialsId, "Trial_Id");
            if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
                localStorage.setItem("F06_Form_Compliance_Map_" + (parseInt(GetMaxNum("F06")) + 1), JSON.stringify(trialComplianceMap));
            } else {
                //Convert the object into JSON and store it in LocalStorage 
                localStorage.setItem(workingForm, JSON.stringify(trialComplianceMap));
            }
            RecordSaved(ComplianceMapDashboard, "Compliance_Map", "Form_Compliance_Map", 'ComplianceDashboard.html');
        }
    }


}


function savePrePlant(locked) {
    var PrePlantDashboard = 1;
    var Incomplete = 0;
    var PrePlantMissing = "";
    var trialPrePlant = {
        //"Id_Volunteer": 0,
        "Trial_Id": 0,
        "Locked": 0,
        "Sync": 0,
        "Previous_Trained_and_Recorded": 1015,
        "Contained_of_Material": 1015,
        "Received_Good_Condition": 1015,
        "Received_Seed_Labeled": 1015
    };
    //    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //    //Read all elements on UI using class name 
    var inputs = document.getElementsByClassName("form_PrePlant");
    //{ "Id_Volunteer": 3, "Trial_Id": 3, "Locked": "yes", "Date_of_Burn_Down": "01/30/2015", "Method_of_Burn_Down": 1, "Method_of_Burn_Down_Herbicide": 3, "Method_of_Burn_Down_TDR": "John", "Method_of_Burn_Down_TDR_Herbicide": "Other Herbicide", "Date_of_Preemergence": "01/30/2015", "Method_of_Preemergence_Herbicide": 3, "Method_of_Preemergence_TDR": "John", "Method_of_Preemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Postemergence": "01/30/2015", "Method_of_Postemergence_Herbicide": 3, "Method_of_Postemergence_TDR": "John", "Method_of_Postemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Errectiveness": "1/30/2015", "App_Effective": 0, "Date_of_Postemergence2": "01/30/2015", "Method_of_Postemergence2_Herbicide": 3, "Method_of_Postemergence2_TDR": "John", "Method_of_Postemergence2_TDR_Herbicide": "Other Herbicide", "App_Effective2": 0, "App_Effective_Approved2": 1, "Date_of_Postemergence3": "01/30/2015", "Method_of_Postemergence3_Herbicide": 3, "Method_of_Postemergence3_TDR": "John", "Method_of_Postemergence3_TDR_Herbicide": "Other Herbicide", "App_Effective3": 0, "App_Effective_Approved3": 1, "Date_of_Postemergence4": "01/30/2015", "Method_of_Postemergence4_Herbicide": 3, "Method_of_Postemergence4_TDR": "John", "Method_of_Postemergence4_TDR_Herbicide": "Other Herbicide", "App_Effective4": 0, "App_Effective_Approved4": 1, "Date_of_Postemergence5": "01/30/2015", "Method_of_Postemergence5_Herbicide": 3, "Method_of_Postemergence5_TDR": "John", "Method_of_Postemergence5_TDR_Herbicide": "Other Herbicide", "App_Effective5": 0, "App_Effective_Approved5": 0 };
    //trialVolunteer.Id_Volunteer = workingFormId;
    trialPrePlant.Trial_Id = trialsId;
    trialPrePlant.Locked = locked;
    trialPrePlant.Previous_Trained_and_Recorded = ((typeof $("#Previous_Trained_and_Recorded :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Previous_Trained_and_Recorded :radio:checked").val()));
    if (trialPrePlant.Previous_Trained_and_Recorded == 1015) {
        Incomplete += 1;
        PrePlantMissing += "<br/>*Were the SRR and appropriate personnel trained on the RR2Xtend/Vistive Gold Stewardship Requirements and is the training recorded in Training Tracker?,";
    }
    trialPrePlant.Contained_of_Material = ((typeof $("#Contained_of_Material :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Contained_of_Material :radio:checked").val()));
    if (trialPrePlant.Contained_of_Material == 1015) {
        Incomplete += 1;
        PrePlantMissing += "<br/>*Was all material double contained (single contained if treated) during shipping?,";
    }
    trialPrePlant.Received_Good_Condition = ((typeof $("#Received_Good_Condition :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Received_Good_Condition :radio:checked").val()));
    if (trialPrePlant.Received_Good_Condition == 1015) {
        Incomplete += 1;
        PrePlantMissing += "<br/>*Was all materials received in good condition (i.e., intact, not leaking)?,";
    }
    trialPrePlant.Received_Seed_Labeled = ((typeof $("#Received_Seed_Labeled :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Received_Seed_Labeled :radio:checked").val()));
    if (trialPrePlant.Received_Seed_Labeled == 1015) {
        Incomplete += 1;
        PrePlantMissing += '<br/>*Received seed labeled as "Product not approved for commerce", and "Roundup Ready 2 Xtend" or "Vistive Gold"?,';
    }

    if (Incomplete >= 1) {
        PrePlantDashboard = 1;
    } else {
        PrePlantDashboard = 3;
    }
    if (PrePlantDashboard != 3 && locked == 1) {
        alertify.alert("Please complete these questions: <br/>" + PrePlantMissing.substring(0, PrePlantMissing.length - 1) + " <br/><br/>before trying to Lock it.  Thanks");
    } else {
        if (PrePlantDashboard == 3 && locked == 1) {
            PrePlantDashboard = 4;
        }

        if (CheckNetworkStatus()) {
            if (SendData("form", "PrePlanting",
                '{"TrialID": ' + trialsId + ',"WorkflowID": 18, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (PrePlantDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                '{"QuestionID": 75,"ResponseValue": ' + trialPrePlant.Previous_Trained_and_Recorded + '},' +
                '{"QuestionID": 76,"ResponseValue": ' + trialPrePlant.Contained_of_Material + '},' +
                '{"QuestionID": 77,"ResponseValue": ' + trialPrePlant.Received_Good_Condition + '},' +
                '{"QuestionID": 78,"ResponseValue": ' + trialPrePlant.Received_Seed_Labeled + '}]}')) {
                RecordSaved(PrePlantDashboard, "PrePlanting", "Form_PrePlanting", 'ComplianceDashboard.html');
            }

        } else {
            trialPrePlant.Sync = 1;
        }

        var verifyifnull = GetLocalStorageData("F18", trialsId, "Trial_Id");
        if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
            localStorage.setItem("F18_Form_PrePlanting_" + (parseInt(GetMaxNum("F18")) + 1), JSON.stringify(trialPrePlant));
        } else {
            //Convert the object into JSON and store it in LocalStorage 
            localStorage.setItem(workingForm, JSON.stringify(trialPrePlant));
        }
        RecordSaved(PrePlantDashboard, "PrePlanting", "Form_PrePlanting", 'ComplianceDashboard.html');
    }

    //    //Reload the Page 
    //            location.reload(); 
}


function savePlanting(locked) {
    var PlantDashboard = 1;
    var Incomplete = 0;
    var PlantMissing = "";
    var trialPlant = {
        //"Id_Volunteer": 0,
        "Trial_Id": 0,
        "Locked": 0,
        "Sync": 0,
        "Physical_Markers": 1015,
        "Planting_Start_Date": "",
        "Planting_End_Date": "",
        "Actual_Planted_Acres": "",
        "Commercial_Soybeans_Planted": 1015,
        "Type_of_Isolation": 1015,
        "Natural_Barrier": "",
        "SRR_or_Delegate_Present": 1015,
        "Seed_Tender_Used": 1015,
        "Seed_Tender_Cleaned_Out": 1015,
        "Date_of_Verbal_or_Visual_Confirm_1": "",
        "Equip_Cleanout_Contact_Person_1": "",
        "Planter_Cleaned_Out": 1015,
        "Date_of_Verbal_or_Visual_Confirm_2": "",
        "Equip_Cleanout_Contact_Person_2": "",
        "Seed_Leftover_after_Planting": 1015,
        "Amount_of_Material_Leftover": "",
        "Disposition_of_Leftover": 1015,
        "Next_Planted_Field": 1015
    };
    //    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //    //Read all elements on UI using class name 
    var inputs = document.getElementsByClassName("Form_Planting");
    //{ "Id_Volunteer": 3, "Trial_Id": 3, "Locked": "yes", "Date_of_Burn_Down": "01/30/2015", "Method_of_Burn_Down": 1, "Method_of_Burn_Down_Herbicide": 3, "Method_of_Burn_Down_TDR": "John", "Method_of_Burn_Down_TDR_Herbicide": "Other Herbicide", "Date_of_Preemergence": "01/30/2015", "Method_of_Preemergence_Herbicide": 3, "Method_of_Preemergence_TDR": "John", "Method_of_Preemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Postemergence": "01/30/2015", "Method_of_Postemergence_Herbicide": 3, "Method_of_Postemergence_TDR": "John", "Method_of_Postemergence_TDR_Herbicide": "Other Herbicide", "Date_of_Errectiveness": "1/30/2015", "App_Effective": 0, "Date_of_Postemergence2": "01/30/2015", "Method_of_Postemergence2_Herbicide": 3, "Method_of_Postemergence2_TDR": "John", "Method_of_Postemergence2_TDR_Herbicide": "Other Herbicide", "App_Effective2": 0, "App_Effective_Approved2": 1, "Date_of_Postemergence3": "01/30/2015", "Method_of_Postemergence3_Herbicide": 3, "Method_of_Postemergence3_TDR": "John", "Method_of_Postemergence3_TDR_Herbicide": "Other Herbicide", "App_Effective3": 0, "App_Effective_Approved3": 1, "Date_of_Postemergence4": "01/30/2015", "Method_of_Postemergence4_Herbicide": 3, "Method_of_Postemergence4_TDR": "John", "Method_of_Postemergence4_TDR_Herbicide": "Other Herbicide", "App_Effective4": 0, "App_Effective_Approved4": 1, "Date_of_Postemergence5": "01/30/2015", "Method_of_Postemergence5_Herbicide": 3, "Method_of_Postemergence5_TDR": "John", "Method_of_Postemergence5_TDR_Herbicide": "Other Herbicide", "App_Effective5": 0, "App_Effective_Approved5": 0 };
    //trialVolunteer.Id_Volunteer = workingFormId;
    trialPlant.Trial_Id = trialsId;
    trialPlant.Locked = locked;
    trialPlant.Physical_Markers = ((typeof $("#Physical_Markers :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Physical_Markers :radio:checked").val()));
    if (trialPlant.Previous_Trained_and_Recorded == 1015) {
        Incomplete += 1;
        PlantMissing += "<br/>*Have physical markers been placed at the corners where GPS is captured?,";
    }
    trialPlant.Planting_Start_Date = (inputs['Planting_Start_Date'].value);
    if (trialPlant.Planting_Start_Date == "") {
        Incomplete += 1;
        PlantMissing += "<br/>*Planting Start date,";
    }
    trialPlant.Planting_End_Date = (inputs['Planting_End_Date'].value);
    if (trialPlant.Planting_End_Date == "") {
        Incomplete += 1;
        PlantMissing += "<br/>*Planting End date,";
    }
    trialPlant.Actual_Planted_Acres = (inputs['Actual_Planted_Acres'].value);
    if (trialPlant.Actual_Planted_Acres == "") {
        Incomplete += 1;
        PlantMissing += "<br/>*Actual planted acres,";
    }
    trialPlant.Commercial_Soybeans_Planted = ((typeof $("#Commercial_Soybeans_Planted :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Commercial_Soybeans_Planted :radio:checked").val()));
    if (trialPlant.Commercial_Soybeans_Planted == 1015) {
        Incomplete += 1;
        PlantMissing += "<br/>*Are commercial soybeans planted immediately adjacent to this field?,";
    }
    if (trialPlant.Commercial_Soybeans_Planted == 1001) {
        trialPlant.Type_of_Isolation = ((typeof $("#Type_of_Isolation :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Type_of_Isolation :radio:checked").val()));
        if (trialPlant.Type_of_Isolation == 1015) {
            Incomplete += 1;
            PlantMissing += "<br/>*Is there at least 30ft. of isolation separating the Roundup Ready 2 Xtend/Vistive Gold trial from the commercial soybean field or is a natural barrier in place that separates the two soybean fields,";
        }
        if (trialPlant.Type_of_Isolation == 1007) {
            trialPlant.Natural_Barrier = (inputs['Natural_Barrier'].value);
            if (trialPlant.Natural_Barrier == "") {
                Incomplete += 1;
                PlantMissing += "<br/>*Natural Barrier,";
            }
        }
    }
    trialPlant.SRR_or_Delegate_Present = ((typeof $("#SRR_or_Delegate_Present :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#SRR_or_Delegate_Present :radio:checked").val()));
    if (trialPlant.SRR_or_Delegate_Present == 1015) {
        Incomplete += 1;
        PlantMissing += '<br/>*Is the SRR or delegate present at the planting of the Grower\'s initial field?,';
    }
    trialPlant.Seed_Tender_Used = ((typeof $("#Seed_Tender_Used :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Seed_Tender_Used :radio:checked").val()));
    if (trialPlant.Seed_Tender_Used == 1015) {
        Incomplete += 1;
        PlantMissing += '<br/>*Was a seed tender used to load the planter?,';
    }
    if (trialPlant.Seed_Tender_Used == 1001) {
        trialPlant.Seed_Tender_Cleaned_Out = ((typeof $("#Seed_Tender_Cleaned_Out :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Seed_Tender_Cleaned_Out :radio:checked").val()));
        if (trialPlant.Seed_Tender_Cleaned_Out == 1015) {
            Incomplete += 1;
            PlantMissing += '<br/>*Was the seed tender cleaned out in RR2 Xtend/Vistive Gold field or equipment/maintenance (grower building) area?,';
        }
        if (trialPlant.Seed_Tender_Cleaned_Out == 1001) {
            trialPlant.Date_of_Verbal_or_Visual_Confirm_1 = (inputs['Date_of_Verbal_or_Visual_Confirm_1'].value);
            if (trialPlant.Date_of_Verbal_or_Visual_Confirm_1 == "") {
                Incomplete += 1;
                PlantMissing += "<br/>*Date of verbal or visual confirmation,";
            }
            trialPlant.Equip_Cleanout_Contact_Person_1 = (inputs['Equip_Cleanout_Contact_Person_1'].value);
            if (trialPlant.Equip_Cleanout_Contact_Person_1 == "") {
                Incomplete += 1;
                PlantMissing += "<br/>*Name of Contact Person,";
            }
        }
    }
    trialPlant.Planter_Cleaned_Out = ((typeof $("#Planter_Cleaned_Out :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Planter_Cleaned_Out :radio:checked").val()));
    if (trialPlant.Planter_Cleaned_Out == 1015) {
        Incomplete += 1;
        PlantMissing += '<br/>*Was the planter cleaned out in RR2 Xtend/Vistive Gold field or equipment/maintenance (grower building) area?,';
    }
    if (trialPlant.Planter_Cleaned_Out == 1001) {
        trialPlant.Date_of_Verbal_or_Visual_Confirm_2 = (inputs['Date_of_Verbal_or_Visual_Confirm_2'].value);
        if (trialPlant.Date_of_Verbal_or_Visual_Confirm_2 == "") {
            Incomplete += 1;
            PlantMissing += "<br/>*Date of verbal or visual confirmation,";
        }
        trialPlant.Equip_Cleanout_Contact_Person_2 = (inputs['Equip_Cleanout_Contact_Person_2'].value);
        if (trialPlant.Equip_Cleanout_Contact_Person_2 == "") {
            Incomplete += 1;
            PlantMissing += "<br/>*Name of Contact Person,";
        }
        trialPlant.Seed_Leftover_after_Planting = ((typeof $("#Seed_Leftover_after_Planting :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Seed_Leftover_after_Planting :radio:checked").val()));
        if (trialPlant.Seed_Leftover_after_Planting == 1015) {
            Incomplete += 1;
            PlantMissing += '<br/>*Was there seed leftover after planting?,';
        }
        if (trialPlant.Seed_Leftover_after_Planting == 1001) {
            trialPlant.Amount_of_Material_Leftover = (inputs['Amount_of_Material_Leftover'].value);
            if (trialPlant.Amount_of_Material_Leftover == "") {
                Incomplete += 1;
                PlantMissing += "<br/>*How much material was leftover? In lbs.,";
            }
            trialPlant.Disposition_of_Leftover = ((typeof $("#Disposition_of_Leftover :radio:checked").val() == 'undefined') ? 1015 : parseInt($("#Disposition_of_Leftover :radio:checked").val()));
            if (trialPlant.Disposition_of_Leftover == 1015) {
                Incomplete += 1;
                PlantMissing += "<br/>*Describe the disposition of any leftover material after planting.  Must follow all state and local regulations for disposition of treated seed,";
            }
        }
    }
    trialPlant.Next_Planted_Field = parseInt(inputs['Next_Planted_Field'].value);
    if (seed_Tender_Cleaned_Out_Move_To == true || planter_Cleaned_Out_Move_To == true) {
        if (trialPlant.Next_Planted_Field == 1015) {
            Incomplete += 1;
            PlantMissing += "<br/>*Next Planted Field,";
        }
    }

    if (Incomplete >= 1) {
        PlantDashboard = 1;
    } else {
        PlantDashboard = 3;
    }
    if (PlantDashboard != 3 && locked == 1) {
        alertify.alert("Please complete these questions: <br/>" + PlantMissing.substring(0, PlantMissing.length - 1) + " <br/><br/>before trying to Lock it.  Thanks");
    } else {
        if (PlantDashboard == 3 && locked == 1) {
            PlantDashboard = 4;
        }

        if (CheckNetworkStatus()) {
            if (SendData("form", "Planting",
                '{"TrialID": ' + trialsId + ',"WorkflowID": 19, "UserID": ' + GetLocalStorageSingleData("C02", datat.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + datat.UserId + '","Locked": ' + (PlantDashboard == 4 ? "true" : "false") + ',"Responses": [' +
                '{"QuestionID": 79,"ResponseValue": ' + trialPlant.Physical_Markers + '},' +
                '{"QuestionID": 80,"ResponseValue": "' + trialPlant.Planting_Start_Date + '"},' +
                '{"QuestionID": 81,"ResponseValue": "' + trialPlant.Planting_End_Date + '"},' +
                '{"QuestionID": 82,"ResponseValue": "' + trialPlant.Actual_Planted_Acres + '"},' +
                '{"QuestionID": 83,"ResponseValue": ' + trialPlant.Commercial_Soybeans_Planted + '},' +
                '{"QuestionID": 84,"ResponseValue": ' + trialPlant.Type_of_Isolation + '},' +
                '{"QuestionID": 85,"ResponseValue": "' + trialPlant.Natural_Barrier + '"},' +
                '{"QuestionID": 86,"ResponseValue": ' + trialPlant.SRR_or_Delegate_Present + '},' +
                '{"QuestionID": 87,"ResponseValue": ' + trialPlant.Seed_Tender_Used + '},' +
                '{"QuestionID": 88,"ResponseValue": ' + trialPlant.Seed_Tender_Cleaned_Out + '},' +
                '{"QuestionID": 89,"ResponseValue": "' + trialPlant.Date_of_Verbal_or_Visual_Confirm_1 + '"},' +
                '{"QuestionID": 90,"ResponseValue": "' + trialPlant.Equip_Cleanout_Contact_Person_1 + '"},' +
                '{"QuestionID": 91,"ResponseValue": ' + trialPlant.Planter_Cleaned_Out + '},' +
                '{"QuestionID": 92,"ResponseValue": "' + trialPlant.Date_of_Verbal_or_Visual_Confirm_2 + '"},' +
                '{"QuestionID": 93,"ResponseValue": "' + trialPlant.Equip_Cleanout_Contact_Person_2 + '"},' +
                '{"QuestionID": 94,"ResponseValue": ' + trialPlant.Seed_Leftover_after_Planting + '},' +
                '{"QuestionID": 95,"ResponseValue": "' + trialPlant.Amount_of_Material_Leftover + '"},' +
                '{"QuestionID": 96,"ResponseValue": ' + trialPlant.Disposition_of_Leftover + '},' +
                '{"QuestionID": 97,"ResponseValue": ' + trialPlant.Next_Planted_Field + '}]}')) {
                RecordSaved(PlantDashboard, "Planting", "Form_Planting", 'ComplianceDashboard.html');
            }

        } else {
            trialPlant.Sync = 1;
        }

        var verifyifnull = GetLocalStorageData("F19", trialsId, "Trial_Id");
        if (typeof verifyifnull == 'undefined' || verifyifnull == null) {
            localStorage.setItem("F19_Form_Planting_" + (parseInt(GetMaxNum("F19")) + 1), JSON.stringify(trialPlant));
        } else {
            //Convert the object into JSON and store it in LocalStorage 
            localStorage.setItem(workingForm, JSON.stringify(trialPlant));
        }
        RecordSaved(PlantDashboard, "Planting", "Form_Planting", 'ComplianceDashboard.html');
    }

    //    //Reload the Page 
    //            location.reload(); 
}

//    //Reload the Page 
//            location.reload(); 

//Method to Read Data from the local Storage 
//function loaddata2() {
//    var complianceTable = localStorage.getItem('D01_Trial_001');
//    if (typeof complianceTable == 'undefined' || complianceTable == null) {
//        createBlankLocalStorage();
//    }
//    var firstTrial = JSON.parse(localStorage.getItem('D01_Trial_001'));
//    var render = ComplianceTableBase;
//    var datacount = localStorage.length;

//    if (firstTrial.Trial_Name != "") {
//        for (var i = 0; i < datacount; i++) {
//            if (localStorage.key(i).substr(0, 1) == "D") {

//                var key = localStorage.key(i); //Get  the Key 
//                var trial = localStorage.getItem(key); //Get Data from Key 
//                var data = JSON.parse(trial); //Parse the Data back into the object 

//                render += "<tr class=\"check\" style=\"border-radius: 6px; -moz-border-radius: 6px; border: #FF6200 solid\">";
//                render += "<td class=\"check\" onclick=\"OpenLastPage('" + key + "', \'" + data.Trial_Id + "\');\">" + data.Trial_Id_Name + "</td>";
//                render += "<td class=\"check\" onclick=\"OpenLastPage('" + key + "', \'" + data.Trial_Id + "\');\">" + data.Trial_Name + "</td>";
//                render += "<td class=\"check\" onclick=\"OpenLastPage('" + key + "', \'" + data.Trial_Id + "\');\">" + data.Trial_Farm + "</td>";
//                render += "<td class=\"check\" onclick=\"OpenLastPage('" + key + "', \'" + data.Trial_Id + "\');\">" + data.Crop + "</td>";
//                render += "<td class=\"check\" onclick=\"OpenForm('Form_Trial_Info', \'" + data.Trial_Id + "\');\">" + ((data.Trial_Info == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Trial_Info == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Trial_Info == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Trial_Info == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Trial_Info == 4) ? "onclick=\"OpenForm('Form_SRR_Evaluation', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Trial Info before moving forward.  Thanks.');\"") + ">" + ((data.SRR_Evaluation == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.SRR_Evaluation == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.SRR_Evaluation == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.SRR_Evaluation == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Trial_Info == 4) ? "onclick=\"OpenForm('Form_Site_Selection_Checklist', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Trial Info before moving forward.  Thanks.');\"") + ">" + ((data.Site_Selection_Checklist == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Site_Selection_Checklist == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Site_Selection_Checklist == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Site_Selection_Checklist == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Trial_Info == 4) ? "onclick=\"OpenForm('Form_Land_Contracts', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Trial Info before moving forward.  Thanks.');\"") + ">" + ((data.Land_Contracts == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Land_Contracts == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Land_Contracts == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Land_Contracts == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Trial_Info == 4) ? "onclick=\"OpenForm('Form_Compliance_Exceptions', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Trial Info before moving forward.  Thanks.');\"") + ">" + ((data.Compliance_Exceptions == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Compliance_Exceptions == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Compliance_Exceptions == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Compliance_Exceptions == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Trial_Info == 4) ? "onclick=\"OpenForm('Form_Compliance_Map', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Trial Info before moving forward.  Thanks.');\"") + ">" + ((data.Compliance_Map == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Compliance_Map == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Compliance_Map == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Compliance_Map == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.SRR_Evaluation == 4 && data.Site_Selection_Checklist == 4 && data.Land_Contracts == 4 && data.Compliance_Exceptions == 4 && data.Compliance_Map == 4) ? "onclick=\"OpenForm('Form_Planting', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Pre-Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.Planting == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Planting == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Planting == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Planting == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Planting == 4) ? "onclick=\"OpenForm('Form_Cleanouts', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.Cleanouts == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Cleanouts == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Cleanouts == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Cleanouts == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Planting == 4) ? "onclick=\"OpenForm('Form_Dicamba_Spray_Tracking', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.Dicamba_Spray_Tracking == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Dicamba_Spray_Tracking == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Dicamba_Spray_Tracking == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Dicamba_Spray_Tracking == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Planting == 4) ? "onclick=\"OpenForm('Form_Spatial_Isolation', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.Spatial_Isolation == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Spatial_Isolation == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Spatial_Isolation == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Spatial_Isolation == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Planting == 4) ? "onclick=\"OpenForm('Form_In_Season_Monitoring', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.In_Season_Monitoring == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.In_Season_Monitoring == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.In_Season_Monitoring == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.In_Season_Monitoring == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Planting == 4) ? "onclick=\"OpenForm('Form_Harvest_and_Destruct', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.Harvest_and_Destruct == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Harvest_and_Destruct == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Harvest_and_Destruct == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Harvest_and_Destruct == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Planting == 4) ? "onclick=\"OpenForm('Form_Drip_Tape_Verification', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.Drip_Tape_Verification == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Drip_Tape_Verification == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Drip_Tape_Verification == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Drip_Tape_Verification == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Planting == 4) ? "onclick=\"OpenForm('Form_Post_Harvest_SRR_Evaluation', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Planting Info before moving forward.  Thanks.');\"") + ">" + ((data.Post_Harvest_SRR_Evaluation == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Post_Harvest_SRR_Evaluation == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Post_Harvest_SRR_Evaluation == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Post_Harvest_SRR_Evaluation == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Cleanouts == 4 && data.Dicamba_Spray_Tracking == 4 && data.Spatial_Isolation == 4 && data.In_Season_Monitoring == 4 && data.Harvest_and_Destruct == 4 && data.Drip_Tape_Verification == 4 && data.Post_Harvest_SRR_Evaluation == 4) ? "onclick=\"OpenForm('Form_Volunteer_Monitoring', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Harvest Info before moving forward.  Thanks.');\"") + ">" + ((data.Volunteer_Monitoring == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Volunteer_Monitoring == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Volunteer_Monitoring == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Volunteer_Monitoring == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "<td class=\"check\" " + ((data.Cleanouts == 4 && data.Dicamba_Spray_Tracking == 4 && data.Spatial_Isolation == 4 && data.In_Season_Monitoring == 4 && data.Harvest_and_Destruct == 4 && data.Drip_Tape_Verification == 4 && data.Post_Harvest_SRR_Evaluation == 4) ? "onclick=\"OpenForm('Form_Replant', \'" + data.Trial_Id + "\');\"" : "onclick=\"alertify.alert('Please finish Harvest Info before moving forward.  Thanks.');\"") + ">" + ((data.Replant == 4) ? "<img alt=\"check\" src=\"images/Button1.png\" />" : ((data.Replant == 3) ? "<img alt=\"check\" src=\"images/Button2.png\" />" : ((data.Replant == 2) ? "<img alt=\"check\" src=\"images/Button3.png\" />" : ((data.Replant == 1) ? "<img alt=\"check\" src=\"images/Button4.png\" />" : "")))) + "</td>";
//                render += "</tr>";
//            }
//        }
//        render += "</table>";
//        dvcontainer.innerHTML = render;

//    } else {
//        render += ComplianceTableRowBase;
//        dvcontainer.innerHTML = render;
//    }
//}

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
    var width2 = Math.max(0, document.documentElement.clientWidth - 61).toString() + "px";
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

function GetTable(key) {
    var trial = localStorage.getItem(key); //Get Data from Key 
    var data = JSON.parse(trial); //Parse the Data back into the object 
    var render = "<tr class=\"check\" style=\"border-radius: 6px; -moz-border-radius: 6px; border: #666362 solid\">";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('3', \'" + data.Trial_Id + "\', \'" + data.Site_Selection_Checklist + "\');\"" + ">" + ((data.Site_Selection_Checklist == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('4', \'" + data.Trial_Id + "\', \'" + data.Land_Contracts + "\');\"" + ">" + ((data.Land_Contracts == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('5', \'" + data.Trial_Id + "\', \'" + data.Compliance_Exceptions + "\');\"" + ">" + ((data.Compliance_Exceptions == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('6', \'" + data.Trial_Id + "\', \'" + data.Compliance_Map + "\');\"" + ">" + ((data.Compliance_Map == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('18', \'" + data.Trial_Id + "\', \'" + data.PrePlanting + "\');\"" + ">" + ((data.PrePlanting == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('19', \'" + data.Trial_Id + "\', \'" + data.Planting + "\');\"" + ">" + ((data.Planting == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('20', \'" + data.Trial_Id + "\', \'" + data.Material_Movement + "\');\"" + ">" + ((data.Material_Movement == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('10', \'" + data.Trial_Id + "\', \'" + data.Dicamba_Spray_Tracking + "\');\"" + ">" + ((data.Dicamba_Spray_Tracking == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('11', \'" + data.Trial_Id + "\', \'" + data.In_Season_Monitoring + "\');\"" + ">" + ((data.In_Season_Monitoring == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('12', \'" + data.Trial_Id + "\', \'" + data.Harvest_and_Destruct + "\');\"" + ">" + ((data.Harvest_and_Destruct == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('14', \'" + data.Trial_Id + "\', \'" + data.Bin_Inspections + "\');\"" + ">" + ((data.Bin_Inspections == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
    render += "<td colspan=\"2\" class=\"check\" " + "onclick=\"ToggleLock('16', \'" + data.Trial_Id + "\', \'" + data.Volunteer_Monitoring + "\');\"" + ">" + ((data.Volunteer_Monitoring == 4) ? "<img alt=\"check\" src=\"../images/switchon.png\" />" : "<img alt=\"check\" src=\"../images/switchoff.png\" />") + "</td>";
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
    ToggleClick(e, ".ui-table", 'RowClick', 'td, th', "child");

    var LogUser = JSON.parse(localStorage.getItem("Login"));
    var LastTrialID = JSON.parse(localStorage.getItem(arrayval));
    LogUser.LastTrial = arrayval;
    localStorage.setItem("Login", JSON.stringify(LogUser));
    dvcontainer.innerHTML = '<p style="background-color: #B3B3B3;font-size: medium; color: black; text-shadow: 0 0;margin-top: 0;">Trial ID: ' + LastTrialID.Trial_Id + '</p>' + ComplianceTableBase + GetTable(arrayval) + ComplianceEndTableBase + '</table>';
}

// { 'Emp. Number': 00001, 'First Name': 'John', 'Last Name': 'Smith' },

//var MainTabl = "<table data-role=\"table\" class=\"stripe hover ui-responsive ui-shadow\" id=\"myTable\">" +
//            " <thead> <tr style=\"background-color: #e9e9e9\"> <th>Trial ID</th><th>Trial Name</th><th>Farm</th><th>Crop</th> </tr> </thead>" +
//            " <tbody>";

var MainTabl = [];
var FilterCountBlank = [];
var FilterCountInProgress = [];
var FilterCountApproval = [];
var FilterCountLock = [];
var FilterCountCompleted = [];

function loaddata() {
    var complianceTable = localStorage.getItem('D01_Trial_001');
    if (typeof complianceTable == 'undefined' || complianceTable == null) {
        createBlankLocalStorage();
    }
    FilterCountBlank = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Material_Movement": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountInProgress = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Material_Movement": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountApproval = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Material_Movement": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountLock = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Material_Movement": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };
    FilterCountCompleted = { "Site_Selection_Checklist": 0, "Land_Contracts": 0, "Compliance_Exceptions": 0, "Compliance_Map": 0, "PrePlanting": 0, "Planting": 0, "Material_Movement": 0, "Dicamba_Spray_Tracking": 0, "In_Season_Monitoring": 0, "Harvest_and_Destruct": 0, "Bin_Inspections": 0, "Volunteer_Monitoring": 0 };

    var firstTrial = JSON.parse(localStorage.getItem('D01_Trial_001'));
    var datacount = localStorage.length;

    if (firstTrial.Trial_Name != "") {
        for (var i = 0; i < datacount; i++) {
            if (localStorage.key(i).substr(0, 1) == "D") {

                var key = localStorage.key(i); //Get  the Key 
                var trial = localStorage.getItem(key); //Get Data from Key 
                var data = JSON.parse(trial); //Parse the Data back into the object 

                for (var keys in data) {
                    if (keys != "Trial_Id" && keys != "Trial_Id_Name" && keys != "Trial_Name" && keys != "Trial_Farm" && keys != "Trait_ID" && keys != "Site_ID" && keys != "TrialYear" && keys != "Last_Page")
                        //SetFilterCounter(data[keys], FormStatus);
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
                MainTabl.push(valueToPush);
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
            "<tr><td>Material Movement</td><td onclick=\"FilterTrialTable(event,'0','Material_Movement')\">" + FilterCountBlank.Material_Movement + "</td><td onclick=\"FilterTrialTable(event,'1','Material_Movement')\">" + FilterCountInProgress.Material_Movement + "</td><td onclick=\"FilterTrialTable(event,'2','Material_Movement')\">" + FilterCountApproval.Material_Movement + "</td><td onclick=\"FilterTrialTable(event,'3','Material_Movement')\">" + FilterCountLock.Material_Movement + "</td><td onclick=\"FilterTrialTable(event,'4','Material_Movement')\">" + FilterCountCompleted.Material_Movement + "</td></tr>" +
            "<tr><td>Dicamba Spray Tracking</td><td onclick=\"FilterTrialTable(event,'0','Dicamba_Spray_Tracking')\">" + FilterCountBlank.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'1','Dicamba_Spray_Tracking')\">" + FilterCountInProgress.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'2','Dicamba_Spray_Tracking')\">" + FilterCountApproval.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'3','Dicamba_Spray_Tracking')\">" + FilterCountLock.Dicamba_Spray_Tracking + "</td><td onclick=\"FilterTrialTable(event,'4','Dicamba_Spray_Tracking')\">" + FilterCountCompleted.Dicamba_Spray_Tracking + "</td></tr>" +
            "<tr><td>In-Season Monitoring</td><td onclick=\"FilterTrialTable(event,'0','In_Season_Monitoring')\">" + FilterCountBlank.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'1','In_Season_Monitoring')\">" + FilterCountInProgress.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'2','In_Season_Monitoring')\">" + FilterCountApproval.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'3','In_Season_Monitoring')\">" + FilterCountLock.In_Season_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'4','In_Season_Monitoring')\">" + FilterCountCompleted.In_Season_Monitoring + "</td></tr>" +
            "<tr><td>Harvest and Destruct</td><td onclick=\"FilterTrialTable(event,'0','Harvest_and_Destruct')\">" + FilterCountBlank.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'1','Harvest_and_Destruct')\">" + FilterCountInProgress.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'2','Harvest_and_Destruct')\">" + FilterCountApproval.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'3','Harvest_and_Destruct')\">" + FilterCountLock.Harvest_and_Destruct + "</td><td onclick=\"FilterTrialTable(event,'4','Harvest_and_Destruct')\">" + FilterCountCompleted.Harvest_and_Destruct + "</td></tr>" +
            "<tr><td>Bin Inspections</td><td onclick=\"FilterTrialTable(event,'0','Bin_Inspections')\">" + FilterCountBlank.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'1','Bin_Inspections')\">" + FilterCountInProgress.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'2','Bin_Inspections')\">" + FilterCountApproval.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'3','Bin_Inspections')\">" + FilterCountLock.Bin_Inspections + "</td><td onclick=\"FilterTrialTable(event,'4','Bin_Inspections')\">" + FilterCountCompleted.Bin_Inspections + "</td></tr>" +
            "<tr><td>Volunteer Monitoring</td><td onclick=\"FilterTrialTable(event,'0','Volunteer_Monitoring')\">" + FilterCountBlank.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'1','Volunteer_Monitoring')\">" + FilterCountInProgress.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'2','Volunteer_Monitoring')\">" + FilterCountApproval.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'3','Volunteer_Monitoring')\">" + FilterCountLock.Volunteer_Monitoring + "</td><td onclick=\"FilterTrialTable(event,'4','Volunteer_Monitoring')\">" + FilterCountCompleted.Volunteer_Monitoring + "</td></tr>";
    } else {
        FilterData = FilterTableBase;
        MainTabl.push(ComplianceTableRowBaseSmall);
    }

    //FilterTable.innerHTML = FilterTableHeader + FilterTableBase + '</table>';
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
                newData.push(valueToPush);
            } else {
                for (var keys in data) {

                    if (keys == Form && (data[keys] == "" ? "0" : data[keys]) == Type) {
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
                        newData.push(valueToPush);
                    }
                }
            }
        }
    }
    $('#example1').columns('destroy');

    if (newData.length == 0) {
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
        newData.push(valueToPush);
    }

    $('#example1').columns({ data: newData, query: '', paginating: false });
    //$('#example1').columns('setMaster', newData);
    $('#example1').columns('create');
    $("#example1").find(".ui-table-footer").css({ 'display': 'none' });
    $("#example1").find('.ui-columns-table').css({ "height": ($('.innerDiv3').height() - 51) + "px", "overflow-y": "auto" });
}

//var ComplianceTableBase = "<table style=\"width: 98%; border-collapse: collapse; margin-left: auto; margin-right: auto; table-layout: fixed;\">" +
//            "<th class=\"rotate\"><div><span>Trial Info </span></div></th>" +
//            "<th class=\"rotate\"><div><span>SRR Workload Evaluation </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Site Selection Checklist </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Land Contracts </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Compliance Exceptions </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Compliance Map </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Planting </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Cleanouts </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Dicamba Spray Tracking </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Spatial Isolation </span></div></th>" +
//            "<th class=\"rotate\"><div><span>In-Season Monitoring </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Harvest and Destruct </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Drip Tape Verification </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Post Harvest SRR Evaluation </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Volunteer Monitoring </span></div></th>" +
//            "<th class=\"rotate\"><div><span>Replant </span></div></th>";

var ComplianceTableBase = "<table id=\"FormTable\" style=\"width: 99%; border-collapse: collapse; margin-left: auto; margin-right: auto; table-layout: fixed; margin-top: 15px\">";

ComplianceTableBase += "<tr><th colspan=\"2\">Site Selection Checklist</th>" +
    "<th></th>" +
    "<th colspan=\"4\">Compliance Exceptions</th>" +
    "<th colspan=\"4\">Pre-Planting</th>" +
    "<th colspan=\"4\">Material Movement</th>" +
    "<th colspan=\"4\">In-Season Monitoring</th>" +
    "<th colspan=\"4\">Bin Inspections</th></tr>" +
    "<tr><th colspan=\"2\" class=\"TableHeader\"></th>" +
    "<th></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th></tr>";

var ComplianceEndTableBase = "<tr><th></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th colspan=\"4\" class=\"TableHeader\"></th>" +
    "<th></th>" +
    "<th colspan=\"2\" class=\"TableHeader\"></th></tr>" +
    "<tr><th></th>" +
    "<th colspan=\"4\">Land Contracts</th>" +
    "<th colspan=\"4\">Compliance Map</th>" +
    "<th colspan=\"4\">Planting</th>" +
    "<th colspan=\"4\">Dicamba Spray Tracking</th>" +
    "<th colspan=\"4\">Harvest and Destruct</th>" +
    "<th></th>" +
    "<th colspan=\"2\">Volunteer Monitoring</th></tr>";

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

var FilterTableBase = "<tbody class=\"scrollTbody\"><tr><td>Site Selection Checklist</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Land Contracts</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Compliance Exceptions</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Compliance Map</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Pre Planting</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Planting</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Material Movement</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Dicamba Spray Tracking</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>In-Season Monitoring</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Harvest and Destruct</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Bin Inspections</td><td></td><td></td><td></td><td></td><td></td></tr></tr><tr><td>Volunteer Monitoring</td><td></td><td></td><td></td><td></td><td></td></tr></tbody>";

$(document).ready(function () {
    loaddata();
    UpdateDiv();
    //$('#myTable01').fixedHeaderTable({ footer: false, altClass: 'odd', height: '150px' });
    $('#example1').columns({
        data: MainTabl,
        paginating: false
    });

    $("#example1").find(".ui-table-footer").css({ 'display': 'none' });
    $("#example1").find('.ui-columns-table').css({ "height": ($('.innerDiv3').height() - 51) + "px", "overflow-y": "auto" });
}
);

window.onload = function () {
    setTimeout(function () {
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);
    //loaddata();
    //UpdateDiv();

    TableResize();

    var ekJqm = {};

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

//$(function() {
//    $("#Login_form").on('submit', function (e) {
//function Login(event) {
//    alertify.alert('test');
//    //event.preventDefault();
//    var User = { UserAlias: $("#UserId").val(), Password: $("#Password").val() };
//    $.ajax({
//        type: "POST",
//        data: JSON.stringify(User),
//        url: LoginUrl,
//        contentType: "application/json",
//        success: function(data) {
//            if (data.Success) {
//                //hideModal();
//                //$.mobile.navigate('#SyncPage');
//                var loginInfo = {
//                    "UserId": $("#UserId").val(),
//                    "Access": data.User.UserTypeID,
//                    "Name": data.User.FirstName + " " + data.User.LastName
//                }
//                localStorage.setItem("Login", JSON.stringify(loginInfo));
//                SRRMustFillEvaluationForm = data.User.SRRMustFillEvaluation;
//                StartSync();
//                //hideModal();
//                //$.mobile.navigate('#Form_Harvest_and_Destruct', { transition: "slide", info: "" });
//                //event.stopPropagation();
//                //$.mobile.navigate("#SyncPage");
//                //return false;
//                //DownloadInitialData(data.User.SRRMustFillEvaluation);
//                //                        $.mobile.navigate("#PageHome");
//                //                        window.location.reload();
//            } else {
//                //alertify.alert(data.ExceptionMessage);
//                alertify.alert("Username or password is incorrect.  Please try again.");
//                $("#UserId").focus();
//                //hideModal();
//            }
//        },
//        error: function() {
//            alertify.alert("Can't connect to the server.");
//            $("#UserId").focus();
//            //hideModal();
//        }
//    });
//    return false;
//}

////    });
////});

function Login(event) {
    //showModal();
    //event.preventDefault();
    var log = false;
    var User = { UserAlias: $("#UserId").val(), Password: $("#Password").val() };
    $.ajax({
        type: "POST",
        data: JSON.stringify(User),
        url: LoginUrl,
        async: false,
        contentType: "application/json",
        success: function (data) {
            if (data.Success) {
                //hideModal();
                //$.mobile.navigate('#SyncPage');
                var loginInfo = {
                    "UserId": $("#UserId").val(),
                    "Access": data.User.UserTypeID,
                    "Name": data.User.FirstName + " " + data.User.LastName,
                    "LastTrial": "",
                    "SRREval": data.User.SRRMustFillEvaluation
                }
                localStorage.setItem("Login", JSON.stringify(loginInfo));
                log = true;
                //hideModal();
                //$.mobile.navigate('#Form_Harvest_and_Destruct', { transition: "slide", info: "" });
                //event.stopPropagation();
                //$.mobile.navigate("#SyncPage");
                //return false;
                //DownloadInitialData(data.User.SRRMustFillEvaluation);
                //                        $.mobile.navigate("#PageHome");
                //                        window.location.reload();
            } else {
                //alertify.alert(data.ExceptionMessage);
                alertify.alert("Username or password is incorrect.  Please try again.");
                $("#UserId").focus();
                //hideModal();
            }
        },
        error: function () {
            alertify.alert("Can't connect to the server.");
            $("#UserId").focus();
            //hideModal();
        }
    });
    if (log) {
        $.mobile.navigate('#SyncPage');
        StartSync();
    }
    //return false;
}

function showModal() {
    //$(".modalBack").removeClass("modalBack").addClass("modalBack2");
}

function hideModal() {
    //$(".modalBack2").removeClass("modalBack2").addClass("modalBack");

}

$(document).on("pageshow", "#PageCompliance", function () {

    $("#example1").find("*").removeClass('ui-state-disabled');
    $('.ui-columns-search').parent().find('div').removeClass("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset").css({ "box-shadow": "0 0 0 black" });
    $("#example1").find('.ui-columns-table').css({ "height": ($('.innerDiv3').height() - 51) + "px", "overflow-y": "auto" });
    $("#example1").find(".ui-table-footer").css({ 'display': 'none' });
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

    var lastTrial = LogUser.LastTrial;
    if (lastTrial != "") {
        var LastTrialID = JSON.parse(localStorage.getItem(lastTrial));
        dvcontainer.innerHTML = '<p style="background-color: #B3B3B3;font-size: medium; color: black; text-shadow: 0 0;margin-top: 0;">Trial ID: ' + LastTrialID.Trial_Id + '</p>' + ComplianceTableBase + GetTable(lastTrial) + ComplianceEndTableBase + '</table>';
    }
});
