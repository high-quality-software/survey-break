
var FinishDownload = 0;
var QtyCat = 0;
var QtyProcess = 0;
var data = JSON.parse(localStorage.getItem("LastSync"));
var FormArray = ["", "F01_Form_Trial_Info", "F02_Form_SRR_Evaluation", "F03_Form_Site_Selection_Checklist", "F04_Form_Land_Contracts", "F05_Form_Compliance_Exceptions", "F06_Form_Compliance_Map", "F07_Form_Trial_Risk_Evaluation", "F08_Form_CQA", "F09_Form_Cleanouts", "F10_Form_Dicamba_Spray_Tracking", "F11_Form_In_Season_Monitoring", "F12_Form_Harvest_and_Destruct", "F13_Form_Drip_Tape_Verification", "F14_Form_Bin_Inspections", "F15_Form_Post_Harvest_SRR_Evaluation", "F16_Form_Volunteer_Monitoring", "F17_Form_Replant", "F18_Form_PrePlanting", "F19_Form_Planting", "F20_Form_Material_Movement"];


var Steps = 0;
var TotalSteps = 20;

if (data === undefined || data === null) {
    var complianceTable = { "C01": "2015-01-01T04:00:00.000Z", "C02": "2015-01-01T04:00:00.000Z", "C03": "2015-01-01T04:00:00.000Z", "C04": "2015-01-01T04:00:00.000Z", "C05": "2015-01-01T04:00:00.000Z", "C06": "2015-01-01T04:00:00.000Z", "C07": "2015-01-01T04:00:00.000Z", "C08": "2015-01-01T04:00:00.000Z", "C09": "2015-01-01T04:00:00.000Z", "C10": "2015-01-01T04:00:00.000Z", "Forms": "2015-01-01T04:00:00.000Z", "App": "2015-01-01T04:00:00.000Z" };
    localStorage.setItem('LastSync', JSON.stringify(complianceTable));
}

function animateFunc() {
    Steps += 1;
    $topLoader.setProgress(Steps / TotalSteps);
    $topLoader.setValue('Steps' + Steps);
    $('#DownloadInfoDiv').scrollTop = $('#DownloadInfoDiv').scrollHeight;
}

//$(document).on("pageshow", "#SyncPage", function () {

//    //alertify.alert("Username or password is incorrect. Please try again.");

//    DownloadInitialData();

//    $.mobile.navigate("#PageHome");



//});

//$(document).on("pageshow", "#SyncPage", function(e) {
function StartSync() {

    if (CheckNetworkStatus() == true) {
        //alertify.alert('test3');

        $.mobile.navigate('#SyncPage');
        $('#DownloadInfo').html('<h2>Downloading initial Data...</h2>');
        $("#backscreen").removeClass("modalBack").addClass("modalBack2");
        //alertify.alert('test4');
        DownloadInitialData();
        //$.mobile.navigate("#PageHome");
    } else {
        alertify.alert('You need to be connected to the Monsanto Network in order to Sync.');
    }
    //return false;
}

//    return true;
//});

function DownloadInitialData() {
    var localUserData = JSON.parse(localStorage.getItem("Login"));
    //$.mobile.navigate('#SyncPage');
    if (FinishDownload == 0) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Uploading Sync Data...');
        animateFunc();
        UploadSync();
    } else if (FinishDownload == 1) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error uploading the data.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Upload Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' forms uploaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 2) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Crop Catalog...');
        animateFunc();
        CatalogSync("crop", "C03", "C03_Catalog_Crops", "CropID", "");
    } else if (FinishDownload == 3) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Crop Catalog.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Crops downloaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 4) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Trait Catalog...');
        animateFunc();
        CatalogSync("trial/trait", "C04", "C04_Trait", "TraitID", "");
    } else if (FinishDownload == 5) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Trait Catalog.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Traits downloaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 6) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Personnel Catalog...');
        animateFunc();
        CatalogSync("user", "C02", "C02_Personnel", "UserID", "");
    } else if (FinishDownload == 7) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Personnel Catalog.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Personnel downloaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 8) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Site Catalog...');
        animateFunc();
        CatalogSync("trial/site", "C06", "C06_Site", "SiteID", "");
    } else if (FinishDownload == 9) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Site Catalog.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Sites downloaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 10) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Attachment Type Catalog...');
        animateFunc();
        CatalogSync("attachment/type", "C07", "C07_Attachment_Type", "AttachmentTypeID", "");
    } else if (FinishDownload == 11) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Attachment Type Catalog.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Attachment type downloaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 12) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Trial Catalog...');
        animateFunc();
        CatalogSync("trial", "C01", "C01_Catalog_Trial", "TrialID", "&userAlias=" + localUserData.UserId);
    } else if (FinishDownload == 13) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Trial Catalog.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Trials downloaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 14) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Creating Dashboard...');
        animateFunc();
        DashboardCreation("trial", "C01", "C01_Catalog_Trial", "TrialID", "&userAlias=" + localUserData.UserId);
    } else if (FinishDownload == 15) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error creating the Dashboard.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Dashboard Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Trials created.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 16) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Forms Data...');
        animateFunc();
        FormSync(localUserData.UserId);
    } else if (FinishDownload == 17) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Forms Tables.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Form Data downloaded.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
    } else if (FinishDownload == 18) {
        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Adding Forms Data to Dashboard...');
        animateFunc();
        SetFormsInDashboard();
    } else if (FinishDownload == 19) {
        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error adding the form to the Dashboard.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Adding Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Form Data added.'));
        QtyProcess = 0;
        animateFunc();
        FinishDownload += 1;
        DownloadInitialData();
        //    } else if (FinishDownload == 20) {
        //        $('#DownloadInfo').html($('#DownloadInfo').html() + '<br/> Downloading Attachemnt Names...');
        //        animateFunc();
        //        AttachmentNameDownload();
        //    } else if (FinishDownload == 21) {
        //        (QtyCat == 99999 ? $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> There where some error downloading the Attachemnt Names.') : $('#DownloadInfo').html($('#DownloadInfo').html() + '<br /> Download Completed.  ' + QtyProcess + ' out of ' + QtyCat + ' Attachemnt names downloaded.'));
        //        QtyProcess = 0;
        //        animateFunc();
        //        FinishDownload += 1;
        //        DownloadInitialData();
    } else {
        FinishDownload = 0;
        animateFunc();
        var LastSyncLocal = JSON.parse(localStorage.getItem("LastSync"));
        var todateJSON = (new Date()).toJSON();
        LastSyncLocal.App = todateJSON;
        localStorage.setItem('LastSync', JSON.stringify(LastSyncLocal));

        //        if (SRRMustFillEvaluationForm && GetLocalStorageSingleData("C02", localUserData.UserId, "UserAlias", "UserTypeID", true) == 1) {
        //            $.mobile.navigate("#SRR_Profile");
        //            $(".modalDialog").removeClass("modalDialog").addClass("modalDialog2");
        //            $("#backscreen").removeClass("modalBack").addClass("modalBack2"); 
        //            //alertify.alert('you must fill');
        ////            window.location.reload();
        ////            TableResize();
        //        } else {

        //            $.mobile.navigate("#PageHome");
        window.location.reload();
        TableResize();
        //        }

    }
}

function createBlankLocalStorage() {
    //var complianceTable = { "Trial_Id": 0, "Trial_Name": "", "Crop": "", "Site_Selection_Checklist": "", "Land_Contracts": "", "Compliance_Exceptions": "", "Compliance_Map": "", "PrePlanting": "", "Planting": "", "Material_Movement": "", "Dicamba_Spray_Tracking": "", "In_Season_Monitoring": "", "Harvest_and_Destruct": "", "Bin_Inspections": "", "Volunteer_Monitoring": "", "Last_Page": "" };
    //localStorage.setItem('D01_Trial_001', JSON.stringify(complianceTable));

    var complianceTable = { "Id_Compliance_Status": 1, "Compliance_Status": "Stewarded" };
    localStorage.setItem('C05_Compliance_Status_1', JSON.stringify(complianceTable));
    var complianceTable = { "Id_Compliance_Status": 2, "Compliance_Status": "Regulated" };
    localStorage.setItem('C05_Compliance_Status_2', JSON.stringify(complianceTable));
}

function CatalogSync(APIName, catalog, fullCatalogName, tableID, extraParm) {

    var data = JSON.parse(localStorage.getItem("LastSync"));

    var CatUrl = APIUrl + APIName + "?lastSync=" + data[catalog] + extraParm;
    $.ajax({
        url: CatUrl,
        type: 'GET',
        dataType: 'json',
        success: function (datas) {
            QtyCat = datas.length;
            for (var i = 0; i < datas.length; i++) {
                QtyProcess += 1;
                SetLocalStorageData(fullCatalogName, datas[i][tableID], tableID, datas[i]);
            }
            var todate = (new Date()).toJSON();
            data[catalog] = todate;
            localStorage.setItem('LastSync', JSON.stringify(data));
            //            if (datas.length == 0) {
            //                alertify.alert('There is no new data to download in the ' + APIName + ' catalog.');
            //            } else {
            //                if (data.length > 1) {
            //                    alertify.alert(datas.length + ' records were successfully downloaded from the catalog ' + APIName + '!');
            //                } else {
            //                    alertify.alert(datas.length + ' record was successfully downloaded from the catalog ' + APIName + '!');
            //                }
            //            }

            FinishDownload += 1;
            DownloadInitialData();
        },
        error: function (a, b, c) {
            QtyCat = 99999;
            FinishDownload += 1;
            DownloadInitialData();
        }
    });
}

function UploadSync() {
    var LogUser = JSON.parse(localStorage.getItem("Login"));
    QtyCat = 0;
    QtyProcess = 0;
    var datacount = localStorage.length;

    for (var i2 = 0; i2 < datacount; i2++) {
        if (localStorage.key(i2).substr(0, 1) == "F") {
            var trial1 = localStorage.getItem(localStorage.key(i2)); //Get Data from Key 
            var data1 = JSON.parse(trial1); //Parse the Data back into the object 
            if (data1.Sync == 1) {
                QtyCat += 1;
            }
        }
    }

    for (var i1 = 0; i1 < datacount; i1++) {
        if (localStorage.key(i1).substr(0, 1) == "F") {
            var trial = localStorage.getItem(localStorage.key(i1)); //Get Data from Key 
            var data = JSON.parse(trial); //Parse the Data back into the object 
            var n = localStorage.key(i1).lastIndexOf("_");
            if (data.Sync == 1) {
                if (localStorage.key(i1).substr(0, n) == FormArray[3]) {
                    var json = '{"TrialID": ' + data.Trial_Id + ',"WorkflowID": 3, "UserID": ' + GetLocalStorageSingleData("C02", LogUser.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + LogUser.UserId + '","Locked": ' + data.Locked + ',"Responses": [' +
                        '{"QuestionID": 40,"ResponseValue": ' + data.Located_Flood_Plain + '},' +
                        '{"QuestionID": 41,"ResponseValue": ' + data.Trial_Site_Sloped_Surface + '},' +
                        '{"QuestionID": 42,"ResponseValue": ' + data.Washout_5_Years + '},' +
                        '{"QuestionID": 43,"ResponseValue": ' + data.Site_Located_Area + '},' +
                        '{"QuestionID": 44,"ResponseValue": ' + data.Drains_Site_Alleyway + '},' +
                        '{"QuestionID": 45,"ResponseValue": ' + data.Outlet_Drain_Area + '},' +
                        '{"QuestionID": 46,"ResponseValue": ' + data.Drip_Tube_Tape_Monitoring + '},' +
                        '{"QuestionID": 47,"ResponseValue": "' + data.Mitigation_Controls + '"}]}';

                    if (SendData("form", "Site_Selection_Checklist", json)) {
                        QtyProcess += 1;
                    }

                } else if (localStorage.key(i1).substr(0, n) == FormArray[4]) {
                    if (SendData("form", "Land_Contracts",
                        '{"TrialID": ' + data.Trial_Id + ',"WorkflowID": 4, "UserID": ' + GetLocalStorageSingleData("C02", LogUser.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + LogUser.UserId + '","Locked": ' + data.Locked + ',"Responses": [' +
                        '{"QuestionID": 48,"ResponseValue": ' + data.Contract_Signed + '},' +
                        '{"QuestionID": 49,"ResponseValue": "' + data.Date_of_Contract + '"}]}')) { QtyProcess += 1; }
                } else if (localStorage.key(i1).substr(0, n) == FormArray[5]) {
                    if (SendData("form", "Compliance_Exceptions",
                        '{"TrialID": ' + data.Trial_Id + ',"WorkflowID": 5, "UserID": ' + GetLocalStorageSingleData("C02", LogUser.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + LogUser.UserId + '","Locked": ' + data.Locked + ',"Responses": [' +
                        '{"QuestionID": 50,"ResponseValue": ' + data.Compliance_Exceptions_Needed + '},' +
                        '{"QuestionID": 51,"ResponseValue": "' + data.Date_of_Exception + '"},' +
                        '{"QuestionID": 52,"ResponseValue": "' + data.Duration_of_Exception + '"},' +
                        '{"QuestionID": 53,"ResponseValue": "' + data.Trial_type + '"},' +
                        '{"QuestionID": 54,"ResponseValue": "' + data.Exception_Description + '"}]}')) { QtyProcess += 1; }
                } else if (localStorage.key(i1).substr(0, n) == FormArray[6]) {
                    if (SendData("form", "Compliance_Map",
                        '{"TrialID": ' + data.Trial_Id + ',"WorkflowID": 6, "UserID": ' + GetLocalStorageSingleData("C02", LogUser.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + LogUser.UserId + '","Locked": ' + data.Locked + ',"Responses": [' +
                        '{"QuestionID": 55,"ResponseValue": ' + data.Isolation_Method + '},' +
                        '{"QuestionID": 56,"ResponseValue": "' + data.GPS_1_lat + '"},' +
                        '{"QuestionID": 57,"ResponseValue": "' + data.GPS_1_long + '"},' +
                        '{"QuestionID": 58,"ResponseValue": "' + data.GPS_2_lat + '"},' +
                        '{"QuestionID": 59,"ResponseValue": "' + data.GPS_2_long + '"},' +
                        '{"QuestionID": 60,"ResponseValue": "' + data.GPS_3_lat + '"},' +
                        '{"QuestionID": 61,"ResponseValue": "' + data.GPS_3_long + '"},' +
                        '{"QuestionID": 62,"ResponseValue": "' + data.GPS_4_lat + '"},' +
                        '{"QuestionID": 63,"ResponseValue": "' + data.GPS_4_long + '"},' +
                        '{"QuestionID": 64,"ResponseValue": "' + data.GPS_5_lat + '"},' +
                        '{"QuestionID": 65,"ResponseValue": "' + data.GPS_5_long + '"},' +
                        '{"QuestionID": 66,"ResponseValue": "' + data.GPS_6_lat + '"},' +
                        '{"QuestionID": 67,"ResponseValue": "' + data.GPS_6_long + '"},' +
                        '{"QuestionID": 68,"ResponseValue": "' + data.GPS_7_lat + '"},' +
                        '{"QuestionID": 69,"ResponseValue": "' + data.GPS_7_long + '"},' +
                        '{"QuestionID": 70,"ResponseValue": "' + data.GPS_8_lat + '"},' +
                        '{"QuestionID": 71,"ResponseValue": "' + data.GPS_8_long + '"},' +
                        '{"QuestionID": 72,"ResponseValue": ' + data.Certification_Agreement + '}]}')) { QtyProcess += 1; }
                } else if (localStorage.key(i1).substr(0, n) == FormArray[18]) {
                    if (SendData("form", "Pre_Planting",
                        '{"TrialID": ' + data.Trial_Id + ',"WorkflowID": 18, "UserID": ' + GetLocalStorageSingleData("C02", LogUser.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + LogUser.UserId + '","Locked": ' + data.Locked + ',"Responses": [' +
                        '{"QuestionID": 75,"ResponseValue": ' + data.Previous_Trained_and_Recorded + '},' +
                        '{"QuestionID": 76,"ResponseValue": ' + data.Contained_of_Material + '},' +
                        '{"QuestionID": 77,"ResponseValue": ' + data.Received_Good_Condition + '},' +
                        '{"QuestionID": 78,"ResponseValue": ' + data.Received_Seed_Labeled + '}]}')) { QtyProcess += 1; }
                } else if (localStorage.key(i1).substr(0, n) == FormArray[19]) {
                    if (SendData("form", "Planting",
                        '{"TrialID": ' + data.Trial_Id + ',"WorkflowID": 19, "UserID": ' + GetLocalStorageSingleData("C02", LogUser.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + LogUser.UserId + '","Locked": ' + data.Locked + ',"Responses": [' +
                        '{"QuestionID": 79,"ResponseValue": ' + data.Physical_Markers + '},' +
                        '{"QuestionID": 80,"ResponseValue": "' + data.Planting_Start_Date + '"},' +
                        '{"QuestionID": 81,"ResponseValue": "' + data.Planting_End_Date + '"},' +
                        '{"QuestionID": 82,"ResponseValue": ' + data.Actual_Planted_Acres + '},' +
                        '{"QuestionID": 83,"ResponseValue": ' + data.Commercial_Soybeans_Planted + '},' +
                        '{"QuestionID": 84,"ResponseValue": ' + data.Type_of_Isolation + '},' +
                        '{"QuestionID": 85,"ResponseValue": "' + data.Natural_Barrier + '"},' +
                        '{"QuestionID": 86,"ResponseValue": ' + data.SRR_or_Delegate_Present + '},' +
                        '{"QuestionID": 87,"ResponseValue": ' + data.Seed_Tender_Used + '},' +
                        '{"QuestionID": 88,"ResponseValue": ' + data.Seed_Tender_Cleaned_Out + '},' +
                        '{"QuestionID": 89,"ResponseValue": "' + data.Date_of_Verbal_or_Visual_Confirm_1 + '"},' +
                        '{"QuestionID": 90,"ResponseValue": "' + data.Equip_Cleanout_Contact_Person_1 + '"},' +
                        '{"QuestionID": 91,"ResponseValue": ' + data.Planter_Cleaned_Out + '},' +
                        '{"QuestionID": 92,"ResponseValue": "' + data.Date_of_Verbal_or_Visual_Confirm_2 + '"},' +
                        '{"QuestionID": 93,"ResponseValue": "' + data.Equip_Cleanout_Contact_Person_2 + '"},' +
                        '{"QuestionID": 94,"ResponseValue": ' + data.Seed_Leftover_after_Planting + '},' +
                        '{"QuestionID": 95,"ResponseValue": ' + data.Amount_of_Material_Leftover + '},' +
                        '{"QuestionID": 96,"ResponseValue": ' + data.Disposition_of_Leftover + '},' +
                        '{"QuestionID": 97,"ResponseValue": ' + data.Next_Planted_Field + '}]}')) { QtyProcess += 1; }
                } else if (localStorage.key(i1).substr(0, n) == FormArray[16]) {
                    if (SendData("form", "Volunteer_Monitoring",
                        '{"TrialID": ' + data.Trial_Id + ',"WorkflowID": 16, "UserID": ' + GetLocalStorageSingleData("C02", LogUser.UserId, "UserAlias", "UserID", true) + ', "CurrentUserAlias": "' + LogUser.UserId + '","Locked": ' + data.Locked + ',"Responses": [' +
                        '{"QuestionID": 1,"ResponseValue": "' + data.Date_of_Burn_Down + '"},' +
                        '{"QuestionID": 2,"ResponseValue": ' + data.Method_of_Burn_Down + '},' +
                        '{"QuestionID": 3,"ResponseValue": ' + data.Method_of_Burn_Down_Herbicide + '},' +
                        '{"QuestionID": 4,"ResponseValue": "' + data.Method_of_Burn_Down_TDR + '"},' +
                        '{"QuestionID": 5,"ResponseValue": "' + data.Method_of_Burn_Down_TDR_Herbicide + '"},' +
                        '{"QuestionID": 6,"ResponseValue": "' + data.Date_of_Preemergence + '"},' +
                        '{"QuestionID": 7,"ResponseValue": ' + data.Method_of_Preemergence_Herbicide + '},' +
                        '{"QuestionID": 8,"ResponseValue": "' + data.Method_of_Preemergence_TDR + '"},' +
                        '{"QuestionID": 9,"ResponseValue": "' + data.Method_of_Preemergence_TDR_Herbicide + '"},' +
                        '{"QuestionID": 10,"ResponseValue": "' + data.Date_of_Postemergence + '"},' +
                        '{"QuestionID": 11,"ResponseValue": ' + data.Method_of_Postemergence_Herbicide + '},' +
                        '{"QuestionID": 12,"ResponseValue": "' + data.Method_of_Postemergence_TDR + '"},' +
                        '{"QuestionID": 13,"ResponseValue": "' + data.Method_of_Postemergence_TDR_Herbicide + '"},' +
                        '{"QuestionID": 14,"ResponseValue": "' + data.Date_of_Effectiveness + '"},' +
                        '{"QuestionID": 15,"ResponseValue": ' + data.App_Effective + '},' +
                        '{"QuestionID": 16,"ResponseValue": "' + data.Date_of_Postemergence2 + '"},' +
                        '{"QuestionID": 17,"ResponseValue": ' + data.Method_of_Postemergence2_Herbicide + '},' +
                        '{"QuestionID": 18,"ResponseValue": "' + data.Method_of_Postemergence2_TDR + '"},' +
                        '{"QuestionID": 19,"ResponseValue": "' + data.Method_of_Postemergence2_TDR_Herbicide + '"},' +
                        '{"QuestionID": 20,"ResponseValue": ' + data.App_Effective2 + '},' +
                        '{"QuestionID": 21,"ResponseValue": ' + data.App_Effective_Approved2 + '},' +
                        '{"QuestionID": 22,"ResponseValue": "' + data.Date_of_Postemergence3 + '"},' +
                        '{"QuestionID": 23,"ResponseValue": ' + data.Method_of_Postemergence3_Herbicide + '},' +
                        '{"QuestionID": 24,"ResponseValue": "' + data.Method_of_Postemergence3_TDR + '"},' +
                        '{"QuestionID": 25,"ResponseValue": "' + data.Method_of_Postemergence3_TDR_Herbicide + '"},' +
                        '{"QuestionID": 26,"ResponseValue": ' + data.App_Effective3 + '},' +
                        '{"QuestionID": 27,"ResponseValue": ' + data.App_Effective_Approved3 + '},' +
                        '{"QuestionID": 28,"ResponseValue": "' + data.Date_of_Postemergence4 + '"},' +
                        '{"QuestionID": 29,"ResponseValue": ' + data.Method_of_Postemergence4_Herbicide + '},' +
                        '{"QuestionID": 30,"ResponseValue": "' + data.Method_of_Postemergence4_TDR + '"},' +
                        '{"QuestionID": 31,"ResponseValue": "' + data.Method_of_Postemergence4_TDR_Herbicide + '"},' +
                        '{"QuestionID": 32,"ResponseValue": ' + data.App_Effective4 + '},' +
                        '{"QuestionID": 33,"ResponseValue": ' + data.App_Effective_Approved4 + '},' +
                        '{"QuestionID": 34,"ResponseValue": "' + data.Date_of_Postemergence5 + '"},' +
                        '{"QuestionID": 35,"ResponseValue": ' + data.Method_of_Postemergence5_Herbicide + '},' +
                        '{"QuestionID": 36,"ResponseValue": "' + data.Method_of_Postemergence5_TDR + '"},' +
                        '{"QuestionID": 37,"ResponseValue": "' + data.Method_of_Postemergence5_TDR_Herbicide + '"},' +
                        '{"QuestionID": 38,"ResponseValue": ' + data.App_Effective5 + '},' +
                        '{"QuestionID": 39,"ResponseValue": ' + data.App_Effective_Approved5 + '"},' +
                        '{"QuestionID": 73,"ResponseValue": ' + data.Planted_Crop + '},' +
                        '{"QuestionID": 74,"ResponseValue": "' + data.Planted_Crop_Date + '"}]}')) { QtyProcess += 1; }
                }
            }
        }
    }

    FinishDownload += 1;
    DownloadInitialData();
}

function DashboardCreation() {
    var datacount = localStorage.length;
    var TempArg = [];
    QtyCat = 0;
    var TempLoc = {};

    for (var i1 = 0; i1 < datacount; i1++) {
        if (localStorage.key(i1) != null && localStorage.key(i1).substr(0, 3) == "D01") {
            TempLoc = {};
            TempLoc.Key = localStorage.key(i1);
            TempArg.push(TempLoc);
        }
    }
    for (var i2 = 0; i2 < TempArg.length; i2++) {
        localStorage.removeItem(TempArg[i2].Key);
    }
    datacount = localStorage.length;
    TempArg = [];

    for (var i3 = 0; i3 < datacount; i3++) {
        if (localStorage.key(i3) != null && localStorage.key(i3).substr(0, 3) == "C01") {
            TempLoc = {};
            TempLoc.Key = localStorage.key(i3);
            TempLoc.Val = localStorage.getItem(localStorage.key(i3));
            TempArg.push(TempLoc);
            QtyCat += 1;
        }
    }

    var firstTrialCat = JSON.parse(localStorage.getItem('C01_Catalog_Trial_1'));
    if (typeof firstTrialCat != 'undefined' & firstTrialCat != null) {

        for (var i4 = 0; i4 < TempArg.length; i4++) {
            if (TempArg[i4].Key.substr(0, 3) == "C01") {
                QtyProcess += 1;

                var FormArrData = { "Trial_Id": 0, "Trial_Id_Name": "", "Trial_Name": "", "Trial_Farm": "", "Crop": "", "Trial_Year": "", "Site_Name": "", "Primary_SRR": "", "Trait": "", "Site_Selection_Checklist": "", "Land_Contracts": "", "Compliance_Exceptions": "", "Compliance_Map": "", "PrePlanting": "", "Planting": "", "Material_Movement": "", "Dicamba_Spray_Tracking": "", "In_Season_Monitoring": "", "Harvest_and_Destruct": "", "Bin_Inspections": "", "Volunteer_Monitoring": "", "Last_Page": "" };;
                var data = JSON.parse(TempArg[i4].Val); //Parse the Data back into the object 

                FormArrData.Trial_Id = data.TrialID;
                FormArrData.Trial_Id_Name = '"' + data.TrialID + '"';
                FormArrData.Trial_Name = data.Name;
                FormArrData.Trial_Farm = data.FarmName;
                FormArrData.Trial_Year = data.TrialYear;
                FormArrData.Trait = GetLocalStorageSingleData("C04", data.TraitID, "TraitID", "Name");
                FormArrData.Site_Name = GetLocalStorageSingleData("C06", data.SiteID, "SiteID", "Name");
                FormArrData.Primary_SRR = GetLocalStorageSingleData("C02", data.PrimarySRRUserID, "UserID", "FirstName") + ' ' + GetLocalStorageSingleData("C02", data.PrimarySRRUserID, "UserID", "LastName");
                FormArrData.Crop = GetLocalStorageSingleData("C03", data.CropID, "CropID", "Name");


                SetLocalStorageData("D01_Trial", data.TrialID, "Trial_Id", FormArrData);
            }
        }

        FinishDownload += 1;
        DownloadInitialData();
    } else {
        QtyCat = 99999;
        FinishDownload += 1;
        DownloadInitialData();
    }
}

function AttachmentNameDownload() {
    QtyCat = 0;
    QtyProcess = 0;
    var datacount = localStorage.length;
    for (var i1 = 0; i1 < datacount; i1++) {
        if (localStorage.key(i1).substr(0, 1) == "F") {
            var trial = localStorage.getItem(localStorage.key(i1)); //Get Data from Key 
            var data = JSON.parse(trial); //Parse the Data back into the object 

            $.ajax({
                url: APIUrl + 'attachment?trialID=' + data.Trial_Id + '&workflowID=' + localStorage.key(i1).substr(1, 2),
                type: 'GET',
                async: false,
                dataType: 'json',
                success: function (datas) {
                    QtyCat += 1;
                    QtyProcess += 1;
                    if (datas.length >= 1) {
                        data.File_Name = datas[0].Name;
                        data.File_ID = datas[0].AttachmentID;
                        SetLocalStorageData(localStorage.key(i1).substr(0, localStorage.key(i1).lastIndexOf("_")), data.Trial_Id, "Trial_Id", data);
                    }
                },
                error: function (a, b, c) {
                    //                    QtyCat = 99999;
                    //                    FinishDownload += 1;
                    //                    DownloadInitialData();
                }
            });
        }
    }
    FinishDownload += 1;
    DownloadInitialData();
}

function FormSync(userAlias) {

    QtyCat = 0;
    QtyProcess = 0;
    var data = JSON.parse(localStorage.getItem("LastSync"));
    //    var trialVolunteer = ["Blank", "", 0, 0, "", "", "", 0, "", "", "", 0, "", "", "", -1, "", 0, "", "", -1, 0, "", 0, "", "", -1, 0, "", 0, "", "", -1, 0, "", 0, "", "", -1, 0];
    //    var trialSSC = ["Blank", 0, 0, 0, 0, 0, 0, 0, ""];
    //    var trialLandContract = ["Blank", 0, ""];
    //    var trialComplianceExceptions = ["Blank", 0, "", "", "", ""];
    //    var trialComplianceMap = ["Blank", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //    var trialPrePlanting = ["Blank", 0, 0, 0, 0];
    //    var trialPlanting = ["Blank", -1, "", "", "", -1, -1, "", -1, -1, -1, "", "", -1, "", "", -1, "", -1, 0];
    var trialVolunteer = [];
    var trialSSC = [];
    var trialLandContract = [];
    var trialComplianceExceptions = [];
    var trialComplianceMap = [];
    var trialPrePlanting = [];
    var trialPlanting = [];

    var FormArrNames = ["", "", "", "Site_Selection_Checklist", "Land_Contracts", "Compliance_Exceptions", "Compliance_Map", "", "", "", "Dicamba_Spray_Tracking", "In_Season_Monitoring", "Harvest_and_Destruct", "", "Bin_Inspections", "", "Volunteer_Monitoring", "", "PrePlanting", "Planting", "Material_Movement"];
    var VolBlank = true;
    var SSCBlank = true;
    var LandContractBlank = true;
    var ComplianceExceptionsBlank = true;
    var ComplianceMapBlank = true;
    var PrePlantingBlank = true;
    var PlantingBlank = true;
    var FormUrl = APIUrl + "form?userAlias=" + userAlias + "&lastSync=" + data.Forms;
    var fullCatalogName;
    var complianceTable;
    $.ajax({
        url: FormUrl,
        type: 'GET',
        dataType: 'json',
        success: function (datas) {
            QtyCat = datas.length;
            for (var i = 0; i < datas.length; i++) {
                QtyProcess += 1;
                try {
                    //var FormArrData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                    //var NumDashboard = 0;
                    var DashName;
                    fullCatalogName = FormArray[(datas[i].WorkflowID)];
                    if (datas[i].WorkflowID == 16) {
                        DashName = "Volunteer_Monitoring";
                        for (var r = 0; r < datas[i].Responses.length; r++) {
                            VolBlank = false;
                            trialVolunteer[datas[i].Responses[r].QuestionID] = datas[i].Responses[r].ResponseValue;
                        }
                        if (VolBlank == false) {
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Date_of_Burn_Down": trialVolunteer[1], "Method_of_Burn_Down": trialVolunteer[2], "Method_of_Burn_Down_Herbicide": trialVolunteer[3], "Method_of_Burn_Down_TDR": trialVolunteer[4], "Method_of_Burn_Down_TDR_Herbicide": trialVolunteer[5], "Date_of_Preemergence": trialVolunteer[6], "Method_of_Preemergence_Herbicide": trialVolunteer[7], "Method_of_Preemergence_TDR": trialVolunteer[8], "Method_of_Preemergence_TDR_Herbicide": trialVolunteer[9], "Date_of_Postemergence": trialVolunteer[10], "Method_of_Postemergence_Herbicide": trialVolunteer[11], "Method_of_Postemergence_TDR": trialVolunteer[12], "Method_of_Postemergence_TDR_Herbicide": trialVolunteer[13], "Date_of_Effectiveness": trialVolunteer[14], "App_Effective": trialVolunteer[15], "Date_of_Postemergence2": trialVolunteer[16], "Method_of_Postemergence2_Herbicide": trialVolunteer[17], "Method_of_Postemergence2_TDR": trialVolunteer[18], "Method_of_Postemergence2_TDR_Herbicide": trialVolunteer[19], "App_Effective2": trialVolunteer[20], "App_Effective_Approved2": trialVolunteer[21], "Date_of_Postemergence3": trialVolunteer[22], "Method_of_Postemergence3_Herbicide": trialVolunteer[23], "Method_of_Postemergence3_TDR": trialVolunteer[24], "Method_of_Postemergence3_TDR_Herbicide": trialVolunteer[25], "App_Effective3": trialVolunteer[26], "App_Effective_Approved3": trialVolunteer[27], "Date_of_Postemergence4": trialVolunteer[28], "Method_of_Postemergence4_Herbicide": trialVolunteer[29], "Method_of_Postemergence4_TDR": trialVolunteer[30], "Method_of_Postemergence4_TDR_Herbicide": trialVolunteer[31], "App_Effective4": trialVolunteer[32], "App_Effective_Approved4": trialVolunteer[33], "Date_of_Postemergence5": trialVolunteer[34], "Method_of_Postemergence5_Herbicide": trialVolunteer[35], "Method_of_Postemergence5_TDR": trialVolunteer[36], "Method_of_Postemergence5_TDR_Herbicide": trialVolunteer[37], "App_Effective5": trialVolunteer[38], "App_Effective_Approved5": trialVolunteer[39], "Planted_Crop": trialVolunteer[73], "Planted_Crop_Date": trialVolunteer[74] };

                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        } else if (VolBlank != false && datas[i].Locked == 1) {
                            var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Date_of_Burn_Down": "", "Method_of_Burn_Down": 0, "Method_of_Burn_Down_Herbicide": 0, "Method_of_Burn_Down_TDR": "", "Method_of_Burn_Down_TDR_Herbicide": "", "Date_of_Preemergence": "", "Method_of_Preemergence_Herbicide": 0, "Method_of_Preemergence_TDR": "", "Method_of_Preemergence_TDR_Herbicide": "", "Date_of_Postemergence": "", "Method_of_Postemergence_Herbicide": 0, "Method_of_Postemergence_TDR": "", "Method_of_Postemergence_TDR_Herbicide": "", "Date_of_Effectiveness": "", "App_Effective": -1, "Date_of_Postemergence2": "", "Method_of_Postemergence2_Herbicide": 0, "Method_of_Postemergence2_TDR": "", "Method_of_Postemergence2_TDR_Herbicide": "", "App_Effective2": -1, "App_Effective_Approved2": 0, "Date_of_Postemergence3": "", "Method_of_Postemergence3_Herbicide": 0, "Method_of_Postemergence3_TDR": "", "Method_of_Postemergence3_TDR_Herbicide": "", "App_Effective3": -1, "App_Effective_Approved3": 0, "Date_of_Postemergence4": "", "Method_of_Postemergence4_Herbicide": 0, "Method_of_Postemergence4_TDR": "", "Method_of_Postemergence4_TDR_Herbicide": "", "App_Effective4": -1, "App_Effective_Approved4": 0, "Date_of_Postemergence5": "", "Method_of_Postemergence5_Herbicide": 0, "Method_of_Postemergence5_TDR": "", "Method_of_Postemergence5_TDR_Herbicide": "", "App_Effective5": -1, "App_Effective_Approved5": 0, "Planted_Crop": 0, "Planted_Crop_Date": "" };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }

                    } else if (datas[i].WorkflowID == 3) {
                        DashName = "Site_Selection_Checklist";
                        for (var r = 0; r < datas[i].Responses.length; r++) {
                            SSCBlank = false;
                            trialSSC[datas[i].Responses[r].QuestionID] = datas[i].Responses[r].ResponseValue;
                        }
                        if (SSCBlank == false) {

                            complianceTable = {
                                "Trial_Id": datas[i].TrialID,
                                "Locked": datas[i].Locked,
                                "Sync": 0,
                                "Located_Flood_Plain": trialSSC[40],
                                "Trial_Site_Sloped_Surface": trialSSC[41],
                                "Washout_5_Years": trialSSC[42],
                                "Site_Located_Area": trialSSC[43],
                                "Drains_Site_Alleyway": trialSSC[44],
                                "Outlet_Drain_Area": trialSSC[45],
                                "Drip_Tube_Tape_Monitoring": trialSSC[46],
                                "Mitigation_Controls": trialSSC[47],
                                "File_Name": "",
                                "File_ID": ""
                            };

                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        } else if (SSCBlank != false && datas[i].Locked == 1) {
                            var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Located_Flood_Plain": -1, "Trial_Site_Sloped_Surface": -1, "Washout_5_Years": -1, "Site_Located_Area": -1, "Drains_Site_Alleyway": -1, "Outlet_Drain_Area": -1, "Drip_Tube_Tape_Monitoring": -1, "Mitigation_Controls": "", "File_Name": "", "File_ID": "" };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }
                    } else if (datas[i].WorkflowID == 4) {
                        DashName = "Land_Contracts";
                        for (var r = 0; r < datas[i].Responses.length; r++) {
                            LandContractBlank = false;
                            trialLandContract[datas[i].Responses[r].QuestionID] = datas[i].Responses[r].ResponseValue;
                        }
                        if (LandContractBlank == false) {
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Contract_Signed": trialLandContract[48], "Date_of_Contract": trialLandContract[49] };

                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        } else if (LandContractBlank != false && datas[i].Locked == 1) {
                            var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Contract_Signed": -1, "Date_of_Contract": "" };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }
                    } else if (datas[i].WorkflowID == 5) {
                        DashName = "Compliance_Exceptions";
                        for (var r = 0; r < datas[i].Responses.length; r++) {
                            ComplianceExceptionsBlank = false;
                            trialComplianceExceptions[datas[i].Responses[r].QuestionID] = datas[i].Responses[r].ResponseValue;
                        }
                        if (ComplianceExceptionsBlank == false) {
                            complianceTable = {
                                "Trial_Id": datas[i].TrialID,
                                "Locked": datas[i].Locked,
                                "Sync": 0,
                                "Compliance_Exceptions_Needed": trialComplianceExceptions[50],
                                "Date_of_Exception": trialComplianceExceptions[51],
                                "Duration_of_Exception": trialComplianceExceptions[52],
                                "Trial_type": trialComplianceExceptions[53],
                                "Exception_Description": trialComplianceExceptions[54],
                                "File_Name": (datas[i].Attachments.length > 0 ? datas[i].Attachments[0].Name : ""),
                                "File_ID": (datas[i].Attachments.length > 0 ? datas[i].Attachments[0].AttachmentID : "")
                            };

                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        } else if (ComplianceExceptionsBlank != false && datas[i].Locked == 1) {
                            var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Compliance_Exceptions_Needed": -1, "Date_of_Exception": "", "Duration_of_Exception": "", "Trial_type": "", "Exception_Description": "", "File_Name": "", "File_ID": "" };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }
                    } else if (datas[i].WorkflowID == 6) {
                        DashName = "Compliance_Map";
                        for (var r = 0; r < datas[i].Responses.length; r++) {
                            ComplianceMapBlank = false;
                            trialComplianceMap[datas[i].Responses[r].QuestionID] = datas[i].Responses[r].ResponseValue;
                        }
                        if (ComplianceMapBlank == false) {
                            complianceTable = {
                                "Trial_Id": datas[i].TrialID,
                                "Locked": datas[i].Locked,
                                "Sync": 0,
                                "Isolation_Method": trialComplianceMap[55],
                                "GPS_1_lat": trialComplianceMap[56],
                                "GPS_1_long": trialComplianceMap[57],
                                "GPS_2_lat": trialComplianceMap[58],
                                "GPS_2_long": trialComplianceMap[59],
                                "GPS_3_lat": trialComplianceMap[60],
                                "GPS_3_long": trialComplianceMap[61],
                                "GPS_4_lat": trialComplianceMap[62],
                                "GPS_4_long": trialComplianceMap[63],
                                "GPS_5_lat": trialComplianceMap[64],
                                "GPS_5_long": trialComplianceMap[65],
                                "GPS_6_lat": trialComplianceMap[66],
                                "GPS_6_long": trialComplianceMap[67],
                                "GPS_7_lat": trialComplianceMap[68],
                                "GPS_7_long": trialComplianceMap[69],
                                "GPS_8_lat": trialComplianceMap[70],
                                "GPS_8_long": trialComplianceMap[71],
                                "Certification_Agreement": trialComplianceMap[72],
                                "File_Name": (datas[i].Attachments.length > 0 ? datas[i].Attachments[0].Name : ""),
                                "File_ID": (datas[i].Attachments.length > 0 ? datas[i].Attachments[0].AttachmentID : "")
                            };

                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        } else if (ComplianceMapBlank != false && datas[i].Locked == 1) {
                            var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Isolation_Method": 0, "GPS_1_lat": "", "GPS_1_long": "", "GPS_2_lat": "", "GPS_2_long": "", "GPS_3_lat": "", "GPS_3_long": "", "GPS_4_lat": "", "GPS_4_long": "", "GPS_5_lat": "", "GPS_5_long": "", "GPS_6_lat": "", "GPS_6_long": "", "GPS_7_lat": "", "GPS_7_long": "", "GPS_8_lat": "", "GPS_8_long": "", "Certification_Agreement": -1, "File_Name": "", "File_ID": "" };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }
                    } else if (datas[i].WorkflowID == 18) {
                        DashName = "PrePlanting";
                        for (var r = 0; r < datas[i].Responses.length; r++) {
                            PrePlantingBlank = false;
                            trialPrePlanting[datas[i].Responses[r].QuestionID] = datas[i].Responses[r].ResponseValue;
                        }
                        if (PrePlantingBlank == false) {

                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Previous_Trained_and_Recorded": trialPrePlanting[75], "Contained_of_Material": trialPrePlanting[76], "Received_Good_Condition": trialPrePlanting[77], "Received_Seed_Labeled": trialPrePlanting[78] };

                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        } else if (PrePlantingBlank != false && datas[i].Locked == 1) {
                            var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Previous_Trained_and_Recorded": -1, "Contained_of_Material": -1, "Received_Good_Condition": -1, "Received_Seed_Labeled": -1 };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }
                    } else if (datas[i].WorkflowID == 19) {
                        DashName = "Planting";
                        for (var r = 0; r < datas[i].Responses.length; r++) {
                            PlantingBlank = false;
                            trialPlanting[datas[i].Responses[r].QuestionID] = datas[i].Responses[r].ResponseValue;
                        }
                        if (PlantingBlank == false) {

                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Physical_Markers": trialPlanting[79], "Planting_Start_Date": trialPlanting[80], "Planting_End_Date": trialPlanting[81], "Actual_Planted_Acres": trialPlanting[82], "Commercial_Soybeans_Planted": trialPlanting[83], "Type_of_Isolation": trialPlanting[84], "Natural_Barrier": trialPlanting[85], "SRR_or_Delegate_Present": trialPlanting[86], "Seed_Tender_Used": trialPlanting[87], "Seed_Tender_Cleaned_Out": trialPlanting[88], "Date_of_Verbal_or_Visual_Confirm_1": trialPlanting[89], "Equip_Cleanout_Contact_Person_1": trialPlanting[90], "Planter_Cleaned_Out": trialPlanting[91], "Date_of_Verbal_or_Visual_Confirm_2": trialPlanting[92], "Equip_Cleanout_Contact_Person_2": trialPlanting[93], "Seed_Leftover_after_Planting": trialPlanting[94], "Amount_of_Material_Leftover": trialPlanting[95], "Disposition_of_Leftover": trialPlanting[96], "Next_Planted_Field": trialPlanting[97] };

                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        } else if (PlantingBlank != false && datas[i].Locked == 1) {
                            var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0, "Physical_Markers": -1, "Planting_Start_Date": "", "Planting_End_Date": "", "Actual_Planted_Acres": "", "Commercial_Soybeans_Planted": -1, "Type_of_Isolation": -1, "Natural_Barrier": "", "SRR_or_Delegate_Present": -1, "Seed_Tender_Used": -1, "Seed_Tender_Cleaned_Out": -1, "Date_of_Verbal_or_Visual_Confirm_1": "", "Equip_Cleanout_Contact_Person_1": "", "Planter_Cleaned_Out": -1, "Date_of_Verbal_or_Visual_Confirm_2": "", "Equip_Cleanout_Contact_Person_2": "", "Seed_Leftover_after_Planting": -1, "Amount_of_Material_Leftover": "", "Disposition_of_Leftover": -1, "Next_Planted_Field": 0 };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }
                    } else {
                        DashName = FormArrNames[(datas[i].WorkflowID)];
                        var dashData = GetLocalStorageData("D01", datas[i].TrialID, "Trial_Id");
                        if (datas[i].Locked == 1) {
                            dashData[DashName] = 4;
                            SetLocalStorageData("D01_Trial", datas[i].TrialID, "Trial_Id", dashData);
                            complianceTable = { "Trial_Id": datas[i].TrialID, "Locked": datas[i].Locked, "Sync": 0 };
                            SetLocalStorageData(fullCatalogName, datas[i].TrialID, "Trial_Id", complianceTable);
                        }
                    }

                    VolBlank = true;
                    SSCBlank = true;
                    LandContractBlank = true;
                    ComplianceExceptionsBlank = true;
                    ComplianceMapBlank = true;
                    PrePlantingBlank = true;
                    PlantingBlank = true;

                } catch (e) {
                    debugger;
                }
            }
            var todate = (new Date()).toJSON();
            data.Forms = todate;
            localStorage.setItem('LastSync', JSON.stringify(data));
            //            if (datas.length == 0) {
            //                alertify.alert('There is no new data to download for the forms.');
            //            } else {
            //                if (data.length > 1) {
            //                    alertify.alert(datas.length + ' records were successfully downloaded into the forms tables!');
            //                } else {
            //                    alertify.alert(datas.length + ' record was successfully downloaded  into the forms tables!');
            //                }
            //            }

            FinishDownload += 1;
            DownloadInitialData();

        },
        error: function (a, b, c) {
            QtyCat = 99999;
            FinishDownload += 1;
            DownloadInitialData();
        }
    });
}

function SetFormsInDashboard() {

    QtyCat = 0;
    QtyProcess = 0;
    var NumDashboard = 0;
    var datacount = localStorage.length;

    for (var i2 = 0; i2 < datacount; i2++) {
        if (localStorage.key(i2).substr(0, 1) == "F") {
            QtyCat += 1;
        }
    }

    for (var i1 = 0; i1 < datacount; i1++) {
        if (localStorage.key(i1).substr(0, 1) == "F") {
            QtyProcess += 1;
            var trial = localStorage.getItem(localStorage.key(i1)); //Get Data from Key 
            var data = JSON.parse(trial); //Parse the Data back into the object 
            var n = localStorage.key(i1).lastIndexOf("_");
            var DashName = localStorage.key(i1).substr(9, n - 9);

            if (DashName == "Volunteer_Monitoring") {
                if (data.Planted_Crop == 3 || data.Planted_Crop == 4 || data.Planted_Crop == 5 || data.Planted_Crop == 99999) {
                    if (
                    (data.App_Effective2 == 0 && data.App_Effective_Approved2 == 0) ||
                    (data.App_Effective3 == 0 && data.App_Effective_Approved3 == 0) ||
                    (data.App_Effective4 == 0 && data.App_Effective_Approved4 == 0) ||
                    (data.App_Effective5 == 0 && data.App_Effective_Approved5 == 0)) {
                        NumDashboard = 2;
                    } else if (
                    (data.App_Effective == 0 && data.Date_of_Postemergence2 == "") ||
                    (data.App_Effective == 1 && data.Date_of_Postemergence3 == "") ||
                    (data.App_Effective == 1 && data.Date_of_Postemergence4 == "") ||
                    (data.App_Effective == 1 && data.Date_of_Postemergence5 == "")) {
                        NumDashboard = 1;
                    } else {
                        NumDashboard = 1;
                    }
                } else {
                    if (data.Planted_Crop != 0 && data.Planted_Crop_Date != "") {
                        NumDashboard = 3;
                    } else {
                        NumDashboard = 1;
                    }
                }
            }

            if (DashName == "Site_Selection_Checklist") {
                NumDashboard = 1;
                if (
                data.Located_Flood_Plain != -1 &&
                data.Trial_Site_Sloped_Surface != -1 &&
                data.Washout_5_Years != -1 &&
                data.Site_Located_Area != -1 &&
                data.Drains_Site_Alleyway != -1 &&
                data.Outlet_Drain_Area != -1 &&
                data.Drip_Tube_Tape_Monitoring != -1
                ) {
                    NumDashboard = 3;
                }
            }

            if (DashName == "Land_Contracts") {
                NumDashboard = 1;
                if (
                data.Contract_Signed != -1 &&
                data.Date_of_Contract != ""
                ) {
                    NumDashboard = 3;
                }
            }

            if (DashName == "Compliance_Exceptions") {
                NumDashboard = 1;
                if (
                data.Compliance_Exceptions_Needed != -1 &&
                data.Date_of_Exception != "" &&
                data.Duration_of_Exception != "" &&
                data.Trial_type != "" &&
                data.Exception_Description != ""
                ) {
                    NumDashboard = 3;
                }
            }

            if (DashName == "Compliance_Map") {
                NumDashboard = 1;
                if (data.Isolation_Method != -1 &&
                data.GPS_1_lat != "" &&
                data.GPS_1_long != "" &&
                data.GPS_2_lat != "" &&
                data.GPS_2_long != "" &&
                data.GPS_3_lat != "" &&
                data.GPS_3_long != "" &&
                data.GPS_4_lat != "" &&
                data.GPS_4_long != "" &&
                data.Certification_Agreement != -1
                ) {
                    NumDashboard = 3;
                }

            }

            if (DashName == "PrePlanting") {
                NumDashboard = 1;
                if (
                data.Previous_Trained_and_Recorded != -1 &&
                data.Contained_of_Material != -1 &&
                data.Received_Good_Condition != -1 &&
                data.Received_Seed_Labeled != -1
                ) {
                    NumDashboard = 3;
                }

            }

            if (DashName == "Planting") {
                NumDashboard = 1;
                if (
                data.Physical_Markers != -1 &&
                Planting_Start_Date != "" &&
                Planting_End_Date != "" &&
                Actual_Planted_Acres != 0 &&
                Commercial_Soybeans_Planted != -1 &&
                (
                    (
                    Type_of_Isolation == 2 &&
                    Natural_Barrier != ""
                    ) ||
                Type_of_Isolation == 1
                ) &&
                SRR_or_Delegate_Present != -1 &&
                (
                    (
                    Seed_Tender_Used == 0
                    ) ||
                Seed_Tender_Used == 1 &&
                Seed_Tender_Cleaned_Out != -1 &&
                Date_of_Verbal_or_Visual_Confirm_1 != "" &&
                Equip_Cleanout_Contact_Person_1 != ""
                ) &&
                (
                    (
                    Planter_Cleaned_Out == 1 &&
                    Date_of_Verbal_or_Visual_Confirm_2 != "" &&
                    Equip_Cleanout_Contact_Person_2 != "" &&
                (
                    (
                    Seed_Leftover_after_Planting == 0
                    ) ||
                Seed_Leftover_after_Planting == 1 &&
                Amount_of_Material_Leftover != 0 &&
                Disposition_of_Leftover != -1
                )
                    ) ||
                    (
                    Planter_Cleaned_Out == 0 ||
                    Planter_Cleaned_Out == 2
                    )
                ) &&
                Next_Planted_Field != -1
                ) {
                    NumDashboard = 3;
                }

            }

            var dashData = GetLocalStorageData("D01", data.Trial_Id, "Trial_Id");
            NumDashboard = (data.Locked == true ? "4" : NumDashboard.toString());
            dashData[DashName] = NumDashboard;

            if (NumDashboard != 0) {
                SetLocalStorageData("D01_Trial", data.Trial_Id, "Trial_Id", dashData);
            }
        }
    }

    FinishDownload += 1;
    DownloadInitialData();
}