
/**
 * Created by hcasa on 10/25/2015.
 */


function Submit_SRR_Profile() {

    var inputs = document.getElementsByClassName("form_SRR_Profile");

    if (inputs['SRR_Experience'].value == -1 ||
        inputs['Lead_Experience'].value == -1 ||
        inputs['SRR_Field_Responsible'].value == -1 ||
        inputs['SRR_Acres'].value == '' ||
        isNaN(parseInt($("#backup_SRR :radio:checked").val())) ||
        (parseInt($("#backup_SRR :radio:checked").val()) == 1 && inputs['backup_SRR_Name'].value == 0) ||
        inputs['Training_Year'].value == "" ||
        isNaN(parseInt($("#Complete_All_Mandatory :radio:checked").val())) ||
        (parseInt($("#Complete_All_Mandatory :radio:checked").val()) == 0 && inputs['Complete_All_MandatoryResponse'].value == '') ||
        isNaN(parseInt($("#Total_Number_of_Trial :radio:checked").val())) ||
        (parseInt($("#Total_Number_of_Trial :radio:checked").val()) == 0 && inputs['Total_Number_of_TrialResponse'].value == '') ||
        isNaN(parseInt($("#Confined_Field_Trails :radio:checked").val())) ||
        (parseInt($("#Confined_Field_Trails :radio:checked").val()) == 0 && inputs['Confined_Field_TrailsResponse'].value == '') ||
        isNaN(parseInt($("#Distance_of_Trial_Sites :radio:checked").val())) ||
        (parseInt($("#Distance_of_Trial_Sites :radio:checked").val()) == 0 && inputs['Distance_of_Trial_SitesResponse'].value == '') ||
        isNaN(parseInt($("#Experience_in_Running_Confined_Field :radio:checked").val())) ||
        (parseInt($("#Experience_in_Running_Confined_Field :radio:checked").val()) == 0 && inputs['Experience_in_Running_Confined_FieldResponse'].value == '') ||
        isNaN(parseInt($("#Notify_my_Direct_Supervisor :radio:checked").val())) ||
        (parseInt($("#Notify_my_Direct_Supervisor :radio:checked").val()) == 0 && inputs['Notify_my_Direct_SupervisorResponse'].value == '')) {
        alertify.alert('Please complete the entire form before submitting.');
    } else {

        var SRRData = {
            "CurrentUserAlias": localUserData.UserAlias,
            "Data": {
                "SRRUserID": localUserData.UserId,
                "SRRYearsExperience": inputs['SRR_Experience'].value,
                "SiteLeadSRRYearsOfExperience": inputs['Lead_Experience'].value,
                "NumFieldsReponsibleFor": inputs['SRR_Field_Responsible'].value,
                "NumAcresSRRManages": inputs['SRR_Acres'].value,
                "BackupSRRIdentified": parseInt($("#backup_SRR :radio:checked").val()),
                "BackupSRRUserID": inputs['backup_SRR_Name'].value,
                "BackupSRRInformed": ((typeof $("#backup_Informed :radio:checked").val() == 'undefined') ? 0 : parseInt($("#backup_Informed :radio:checked").val())),
                "LastTrainingYear": inputs['Training_Year'].value,
                "ComplianceQuestion1": parseInt($("#Complete_All_Mandatory :radio:checked").val()),
                "ComplianceQuestion2": parseInt($("#Total_Number_of_Trial :radio:checked").val()),
                "ComplianceQuestion3": parseInt($("#Confined_Field_Trails :radio:checked").val()),
                "ComplianceQuestion4": parseInt($("#Distance_of_Trial_Sites :radio:checked").val()),
                "ComplianceQuestion5": parseInt($("#Experience_in_Running_Confined_Field :radio:checked").val()),
                "ComplianceQuestion6": parseInt($("#Notify_my_Direct_Supervisor :radio:checked").val()),
                "ComplianceResponse1": inputs['Complete_All_MandatoryResponse'].value,
                "ComplianceResponse2": inputs['Total_Number_of_TrialResponse'].value,
                "ComplianceResponse3": inputs['Confined_Field_TrailsResponse'].value,
                "ComplianceResponse4": inputs['Distance_of_Trial_SitesResponse'].value,
                "ComplianceResponse5": inputs['Experience_in_Running_Confined_FieldResponse'].value,
                "ComplianceResponse6": inputs['Notify_my_Direct_SupervisorResponse'].value,
                "Flagged": 0
            }
        };

        $.when(SendData("form/srr/evaluation", 'SRR Profile', JSON.stringify(SRRData)))
            .then(function(){
                return VictoryStorage.getLogin();
            })
            .then(function(login){
                localUserData.SRRMustFillEvaluation = false;
                login.SRRMustFillEvaluation = false;
                return VictoryStorage.setLogin(login);
            })
            .then(function () {
                return VictoryStorage.getLastSync();
            })
            .then(function (lastsync) {
                lastSyncObject.SRRProfile = (new Date()).toJSON();
                return VictoryStorage.setLastSync(lastsync);
            })
            .then(function () {
                $.mobile.changePage('#Dashboard');
            });
    }
}

//$(document).on('change', '[type="radio"]', function () {
//    document.activeElement.blur();
//});
//$(document).bind("touchmove", function (e) {
//    e.preventDefault();
//});
//
//$('#window').on('touchmove', function (e) {
//    e.stopPropagation();
//});

$("#SRRProfile input[name='backup_SRRRadio']").change(function () {
    var volradval = this.value;
    var sphb1 = $("#backup_SRR_NameYeslbl");
    var sphb2 = $("#backup_SRR_NameYes");
    var sphb3 = $("#backup_InformedYeslbl");
    var sphb4 = $("#backup_InformedYes");
    if (volradval == "1") {

        sphb1.show();
        sphb2.show();
        sphb3.show();
        sphb4.show();
    } else {
        sphb1.hide();
        sphb2.hide();
        sphb3.hide();
        sphb4.hide();
    }
});

$("#SRRProfile input[name='Complete_All_MandatoryRadio']").change(function () {
    var volradval = this.value;
    var sphb1 = $("#Complete_All_MandatoryNo");
    var sphb2 = $("#Complete_All_MandatoryNolbl");
    if (volradval == "0") {

        sphb1.show();
        sphb2.show();
    } else {
        sphb1.hide();
        sphb2.hide();
        $("#Complete_All_MandatoryResponse").val('');
    }
});

$("#SRRProfile input[name='Total_Number_of_TrialRadio']").change(function () {
    var volradval = this.value;
    var sphb1 = $("#Total_Number_of_TrialNo");
    var sphb2 = $("#Total_Number_of_TrialNolbl");
    if (volradval == "0") {

        sphb1.show();
        sphb2.show();
    } else {
        sphb1.hide();
        sphb2.hide();
        $("#Total_Number_of_TrialResponse").val('');
    }
});


$("#SRRProfile input[name='Confined_Field_TrailsRadio']").change(function () {
    var volradval = this.value;
    var sphb1 = $("#Confined_Field_TrailsNo");
    var sphb2 = $("#Confined_Field_TrailsNolbl");
    if (volradval == "0") {

        sphb1.show();
        sphb2.show();
    } else {
        sphb1.hide();
        sphb2.hide();
        $("#Confined_Field_TrailsResponse").val('');
    }
});

$("#SRRProfile input[name='Distance_of_Trial_SitesRadio']").change(function () {
    var volradval = this.value;
    var sphb1 = $("#Distance_of_Trial_SitesNo");
    var sphb2 = $("#Distance_of_Trial_SitesNolbl");
    if (volradval == "0") {

        sphb1.show();
        sphb2.show();
    } else {
        sphb1.hide();
        sphb2.hide();
        $("#Distance_of_Trial_SitesResponse").val('');
    }
});

$("#SRRProfile input[name='Experience_in_Running_Confined_FieldRadio']").change(function () {
    var volradval = this.value;
    var sphb1 = $("#Experience_in_Running_Confined_FieldNo");
    var sphb2 = $("#Experience_in_Running_Confined_FieldNolbl");
    if (volradval == "0") {

        sphb1.show();
        sphb2.show();
    } else {
        sphb1.hide();
        sphb2.hide();
        $("#Experience_in_Running_Confined_FieldResponse").val('');
    }
});

$("#SRRProfile input[name='Notify_my_Direct_SupervisorRadio']").change(function () {
    var volradval = this.value;
    var sphb1 = $("#Notify_my_Direct_SupervisorNo");
    var sphb2 = $("#Notify_my_Direct_SupervisorNolbl");
    if (volradval == "0") {

        sphb1.show();
        sphb2.show();
    } else {
        sphb1.hide();
        sphb2.hide();
        $("#Notify_my_Direct_SupervisorResponse").val('');
    }
});
