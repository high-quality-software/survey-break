/**
 * Created by hcasa on 10/25/2015.
 */


//allow inheritance
if (!Object.create) {
    Object.create = function (proto) {
        function F() {
        };
        F.prototype = proto;
        return new F;
    }
}

//this file include all global variables used into victory ui app

var VictoryStorage;
var VictoryApp = {
    'AppVersion': '0.0.0',
    'APIUrl': '',
    'Environment': 'DEV',
    'Networking': 'ON',
    'IsOnLine': false,
    'IsDesktop': false,
    'RunningUnderApacheCordova': false,
    'RunningInitialDownload': false,
    'Status': null,
    'AdvancedFilter': null,
};

var CropCache = [];
var TraitCache = [];
var SiteCache = [];
var UserCache = [];
var AttachmentTypeCache = [];
var lastSyncObject = null;
var lastTrialObject = null;
var lastAttachmentTypeObject = null;

var lastTrialId = 0;

var adminonly = 0;
var lockedForm;
var localUserData;

var BigPic = '';
var suffix = '';
var filename = "";
var size = 0;

var heights = Math.max(0, document.documentElement.clientHeight - 54).toString() + "px";
var internalheights = Math.max(0, document.documentElement.clientHeight - 54 - 133).toString() + "px";
var workingForm = "";

var formdata = [];
var responses = [];

// bootstrapping variables
var deviceReadyDeferred = null;
var jqmReadyDeferred = null;
var apiReadyDeferred = null;

//systemwide constant values stored into LookupMaster database table.
var LookUp = {
    YES: "1001",
    NO: "1002",
    MovedtoAnotherStewardedField: "1009",
    MovedtoAnotherStewardedFieldofSameVariety: "1060"
};

var seed_Tender_Cleaned_Out_Move_To = false;
var planter_Cleaned_Out_Move_To = false;

//begin sync variables
var LoaderIcon = null;
var FinishDownload = 0;
var QtyCat = 0;
var QtyProcess = 0;
var FormArray = ["", "F01_Form_Trial_Info", "F02_Form_SRR_Evaluation", "F03_Form_Site_Selection_Checklist", "F04_Form_Land_Contracts", "F05_Form_Compliance_Exceptions", "F06_Form_Compliance_Map", "F07_Form_Trial_Risk_Evaluation", "F08_Form_CQA", "F09_Form_Cleanouts", "F10_Form_Dicamba_Spray_Tracking", "F11_Form_In_Season_Monitoring", "F12_Form_Harvest_and_Destruct", "F13_Form_Drip_Tape_Verification", "F14_Form_Bin_Inspections", "F15_Form_Post_Harvest_SRR_Evaluation", "F16_Form_Volunteer_Monitoring", "F17_Form_Replant", "F18_Form_PrePlanting", "F19_Form_Planting", "F20_Form_Material_Movement"];
var Steps = 0;
var TotalSteps = 11;
//end sync variables


var FormArrayName = ["", "Trial_Info", "SRR_Evaluation", "Site_Selection_Checklist", "Land_Contracts", "Compliance_Exceptions", "Compliance_Map", "Trial_Risk_Evaluation", "CQA", "Cleanouts", "Dicamba_Spray_Tracking", "In_Season_Monitoring", "Harvest_and_Destruct", "Drip_Tape_Verification", "Bin_Inspections", "Post_Harvest_SRR_Evaluation", "Volunteer_Monitoring", "Replant", "PrePlanting", "Planting", "Material_Movement"];

var LandingForm = [
    //0 ->
    "",
    //1 ->
    "",
    //2 ->
    "",
    //3 ->
    "Form_Land_Contracts",
    //4 ->
    "Form_Compliance_Exceptions",
    //5 ->
    "Form_Compliance_Map",
    //6 ->
    "Form_PrePlanting",
    //7 ->
    "",
    //8 ->
    "",
    //9 ->
    "",
    //10 ->
    "Form_In_Season_Monitoring",
    //11 ->
    "Form_Bin_Inspections",
    //12 ->
    "Form_Volunteer_Monitoring",
    //13 ->
    "",
    //14 ->
    "Form_Harvest_and_Destruct",
    //15 ->
    "",
    //16 ->
    "",
    //17 ->
    "",
    //18 ->
    "Form_Planting",
    //19 ->
    "Form_Dicamba_Spray_Tracking",
    //20 ->
    ""];

var lastAttachmentID = '';

var MainTable = [];
var FilterCountBlank = [];
var FilterCountInProgress = [];
var FilterCountApproval = [];
var FilterCountLock = [];
var FilterCountCompleted = [];

//Questions
var Forms_Questions_Id = {
    "01": [],
    "02": [],
    "03": [40, 41, 42, 43, 44, 45, 46, 47],
    "04": [48, 49],
    "05": [50, 51, 52, 53, 54, 8805, 9905],
    "06": [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 8806, 9906],
    "07": [],
    "08": [],
    "09": [],
    "10": [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157],
    "11": [158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170],
    "12": [/*261, 262, 263, */264, 265, /*266, */267, /*268, */269, 270, 271, 272, 273, 274, /*275, */276, 277, 278, 279, 280, /*281, 338, */339, 340, 341, 342, 343, 344, 345/*, 346*/, 347, 348],
    "13": [],
    "14": [171, 172, /*173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, */187, 188, 189, 190, /*191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, */205, 206, 207, 208, /*209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, */223, 224, 225, 226, /*227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, */241, 242, 243, 244, /*245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, */259, 260, 282, 283, 284, 285, 286, /*287, */288, 289, 290, 291, 292, /*293, */294, 295, 296, 297, 298, /*299, */300, 301, 302, 303, 304, /*305, */306, 307, 308, 309, 310, /*311, */312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337],
    "15": [],
    "16": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 73, 74],
    "17": [],
    "18": [75, 76, 77, 78],
    "19": [79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97],
    "20": []
};
var QUESTION_ARRAY = {
    1: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "Date_of_Burn_Down",
        "Question_Txt": "Date of Burn Down",
        "Type": "Datebox"
    },
    2: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "Method_of_Burn_Down",
        "Question_Txt": "Method of Burn Down",
        "Type": "Dropdown"
    },
    3: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,2|1012",
        "Name": "Method_of_Burn_Down_Herbicide",
        "Question_Txt": "",
        "Type": "Dropdown"
    },
    4: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,3|99999",
        "Name": "Method_of_Burn_Down_TDR",
        "Question_Txt": "Method of Burn Down Herbicide",
        "Type": "Textbox"
    },
    5: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,3|99999",
        "Name": "Method_of_Burn_Down_TDR_Herbicide",
        "Question_Txt": "Method of Burn Down TDR Herbicide",
        "Type": "Textbox"
    },
    6: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "Date_of_Preemergence",
        "Question_Txt": "Date of Preemergence",
        "Type": "Datebox"
    },
    7: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "Method_of_Preemergence_Herbicide",
        "Question_Txt": "Method of Preemergence Herbicide",
        "Type": "Dropdown"
    },
    8: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,7|99999",
        "Name": "Method_of_Preemergence_TDR",
        "Question_Txt": "Method of Preemergence TDR",
        "Type": "Textbox"
    },
    9: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,7|99999",
        "Name": "Method_of_Preemergence_TDR_Herbicide",
        "Question_Txt": "Method of Preemergence TDR Herbicide",
        "Type": "Textbox"
    },
    10: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "Date_of_Postemergence",
        "Question_Txt": "Date of Postemergence",
        "Type": "Datebox"
    },
    11: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "Method_of_Postemergence_Herbicide",
        "Question_Txt": "Method of Postemergence Herbicide",
        "Type": "Dropdown"
    },
    12: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,11|99999",
        "Name": "Method_of_Postemergence_TDR",
        "Question_Txt": "Method of Postemergence TDR",
        "Type": "Textbox"
    },
    13: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,11|99999",
        "Name": "Method_of_Postemergence_TDR_Herbicide",
        "Question_Txt": "Method of Postemergence TDR Herbicide",
        "Type": "Textbox"
    },
    14: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "Date_of_Effectiveness",
        "Question_Txt": "Date of Effectiveness",
        "Type": "Datebox"
    },
    15: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999",
        "Name": "App_Effective",
        "Question_Txt": "App Effective",
        "Type": "Radiobox"
    },
    16: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,15|1002",
        "Name": "Date_of_Postemergence2",
        "Question_Txt": "Date of Postemergence2",
        "Type": "Datebox"
    },
    17: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,15|1002",
        "Name": "Method_of_Postemergence2_Herbicide",
        "Question_Txt": "Method of Postemergence Herbicide",
        "Type": "Dropdown"
    },
    18: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,15|1002,17|99999",
        "Name": "Method_of_Postemergence2_TDR",
        "Question_Txt": "Method of Postemergence TDR",
        "Type": "Textbox"
    },
    19: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,15|1002,17|99999",
        "Name": "Method_of_Postemergence2_TDR_Herbicide",
        "Question_Txt": "Method of Postemergence TDR Herbicide",
        "Type": "Textbox"
    },
    20: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,15|1002",
        "Name": "App_Effective2",
        "Question_Txt": "App Effective 2",
        "Type": "Radiobox"
    },
    21: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,15|1002",
        "Name": "App_Effective_Approved2",
        "Question_Txt": "App Effective 2 Approved",
        "Type": "Checkbox"
    },
    22: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,20|1002,21|1014",
        "Name": "Date_of_Postemergence3",
        "Question_Txt": "Date of 3 Postemergence",
        "Type": "Datebox"
    },
    23: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,20|1002,21|1014",
        "Name": "Method_of_Postemergence3_Herbicide",
        "Question_Txt": "Method of 3 Postemergence Herbicide",
        "Type": "Dropdown"
    },
    24: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,20|1002,21|1014,23|99999",
        "Name": "Method_of_Postemergence3_TDR",
        "Question_Txt": "Method of 3 Postemergence TDR",
        "Type": "Textbox"
    },
    25: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,20|1002,21|1014,23|99999",
        "Name": "Method_of_Postemergence3_TDR_Herbicide",
        "Question_Txt": "Method of 3 Postemergence TDR Herbicide",
        "Type": "Textbox"
    },
    26: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,20|1002,21|1014",
        "Name": "App_Effective3",
        "Question_Txt": "App Effective 3",
        "Type": "Radiobox"
    },
    27: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,20|1002,21|1014",
        "Name": "App_Effective_Approved3",
        "Question_Txt": "App Effective 3 Approved",
        "Type": "Checkbox"
    },
    28: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,26|1002,27|1014",
        "Name": "Date_of_Postemergence4",
        "Question_Txt": "Date of 4 Postemergence",
        "Type": "Datebox"
    },
    29: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,26|1002,27|1014",
        "Name": "Method_of_Postemergence4_Herbicide",
        "Question_Txt": "Method of 4 Postemergence Herbicide",
        "Type": "Dropdown"
    },
    30: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,26|1002,27|1014,29|99999",
        "Name": "Method_of_Postemergence4_TDR",
        "Question_Txt": "Method of 4 Postemergence TDR",
        "Type": "Textbox"
    },
    31: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,26|1002,27|1014,29|99999",
        "Name": "Method_of_Postemergence4_TDR_Herbicide",
        "Question_Txt": "Method of 4 Postemergence TDR Herbicide",
        "Type": "Textbox"
    },
    32: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,26|1002,27|1014",
        "Name": "App_Effective4",
        "Question_Txt": "App Effective 4",
        "Type": "Radiobox"
    },
    33: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,26|1002,27|1014",
        "Name": "App_Effective_Approved4",
        "Question_Txt": "App Effective 4 Approved",
        "Type": "Checkbox"
    },
    34: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,32|1002,33|1014",
        "Name": "Date_of_Postemergence5",
        "Question_Txt": "Date of 5 Postemergence",
        "Type": "Datebox"
    },
    35: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,32|1002,33|1014",
        "Name": "Method_of_Postemergence5_Herbicide",
        "Question_Txt": "Method of 5 Postemergence Herbicide",
        "Type": "Dropdown"
    },
    36: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,32|1002,33|1014,35|99999",
        "Name": "Method_of_Postemergence5_TDR",
        "Question_Txt": "Method of 5 Postemergence TDR",
        "Type": "Textbox"
    },
    37: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,32|1002,33|1014,35|99999",
        "Name": "Method_of_Postemergence5_TDR_Herbicide",
        "Question_Txt": "Method of 5 Postemergence TDR Herbicide",
        "Type": "Textbox"
    },
    38: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,32|1002,33|1014",
        "Name": "App_Effective5",
        "Question_Txt": "App Effective 5",
        "Type": "Radiobox"
    },
    39: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "73|1018;1019;1020;99999,32|1002,33|1014",
        "Name": "App_Effective_Approved5",
        "Question_Txt": "App Effective 5 Approved",
        "Type": "Checkbox"
    },
    40: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Located_Flood_Plain",
        "Question_Txt": "Is the trial site located within a flood plain?",
        "Type": "Radiobox"
    },
    41: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Trial_Site_Sloped_Surface",
        "Question_Txt": "Is any portion of the trial site located on a sloped surface or at risk of run off during heavy rains?",
        "Type": "Radiobox"
    },
    42: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Washout_5_Years",
        "Question_Txt": "Has the trial site been associated with a flood or washout during the last five years?",
        "Type": "Radiobox"
    },
    43: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Site_Located_Area",
        "Question_Txt": "Is this site located in a no-till area?",
        "Type": "Radiobox"
    },
    44: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Drains_Site_Alleyway",
        "Question_Txt": "Are there open inlets for drains present within the trial site or alleyway?",
        "Type": "Radiobox"
    },
    45: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Outlet_Drain_Area",
        "Question_Txt": "If open drain inlet is present within the trial site, is the outlet of the drain in an area that is not SRR or Monsanto-controlled?",
        "Type": "Radiobox"
    },
    46: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Drip_Tube_Tape_Monitoring",
        "Question_Txt": "Is drip tube/tape used for irrigation that will be removed from the trial site during the trial or volunteer monitoring period?",
        "Type": "Radiobox"
    },
    47: {
        "WorkflowID": "F03",
        "Req": "Y",
        "Dependent": "",
        "Name": "Mitigation_Controls",
        "Question_Txt": "Mitigation Controls",
        "Type": "Textbox"
    },
    48: {
        "WorkflowID": "F04",
        "Req": "Y",
        "Dependent": "48|1001",
        "Name": "Contract_Signed",
        "Question_Txt": "Has a field contract been signed with this grower to secure land access thru 2016 growing season?",
        "Type": "Radiobox"
    },
    49: {
        "WorkflowID": "F04",
        "Req": "Y",
        "Dependent": "",
        "Name": "Date_of_Contract",
        "Question_Txt": "Date of contract signed.",
        "Type": "Datebox"
    },
    50: {
        "WorkflowID": "F05",
        "Req": "Y",
        "Dependent": "",
        "Name": "Compliance_Exceptions_Needed",
        "Question_Txt": "Are any compliance exceptions needed for this trial?",
        "Type": "Radiobox"
    },
    51: {
        "WorkflowID": "F05",
        "Req": "Y",
        "Dependent": "50|1001",
        "Name": "Date_of_Exception",
        "Question_Txt": "Exception needed by.",
        "Type": "Datebox"
    },
    52: {
        "WorkflowID": "F05",
        "Req": "Y",
        "Dependent": "50|1001",
        "Name": "Duration_of_Exception",
        "Question_Txt": "Duration of the exception: (specify if the exception should expire before the default of one year).",
        "Type": "Datebox"
    },
    53: {
        "WorkflowID": "F05",
        "Req": "Y",
        "Dependent": "50|1001",
        "Name": "Trial_type",
        "Question_Txt": "Trial Type.",
        "Type": "MultiCheck"
    },
    54: {
        "WorkflowID": "F05",
        "Req": "Y",
        "Dependent": "50|1001",
        "Name": "Exception_Description",
        "Question_Txt": "Describe exception needed (ie., no till, dicamba spray change)",
        "Type": "Textbox"
    },
    8805: {
        "WorkflowID": "F05",
        "Req": "N",
        "Dependent": "50|1001",
        "Name": "File_ID",
        "Question_Txt": "",
        "Type": "Filebox"
    },
    9905: {
        "WorkflowID": "F05",
        "Req": "N",
        "Dependent": "50|1001",
        "Name": "File_Name",
        "Question_Txt": "",
        "Type": "Filebox"
    },
    55: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "Isolation_Method",
        "Question_Txt": "Isolation Method.",
        "Type": "Dropdown"
    },
    56: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_1_lat",
        "Question_Txt": "GPS Point 1 Lat",
        "Type": "Textbox"
    },
    57: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_1_long",
        "Question_Txt": "GPS Point 1 Long",
        "Type": "Textbox"
    },
    58: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_2_lat",
        "Question_Txt": "GPS Point 2 Lat",
        "Type": "Textbox"
    },
    59: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_2_long",
        "Question_Txt": "GPS Point 2 Long",
        "Type": "Textbox"
    },
    60: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_3_lat",
        "Question_Txt": "GPS Point 3 Lat",
        "Type": "Textbox"
    },
    61: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_3_long",
        "Question_Txt": "GPS Point 3 Long",
        "Type": "Textbox"
    },
    62: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_4_lat",
        "Question_Txt": "GPS Point 4 Lat",
        "Type": "Textbox"
    },
    63: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "GPS_4_long",
        "Question_Txt": "GPS Point 4 Long",
        "Type": "Textbox"
    },
    64: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "GPS_5_lat",
        "Question_Txt": "GPS Point 5 Lat",
        "Type": "Textbox"
    },
    65: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "GPS_5_long",
        "Question_Txt": "GPS Point 5 Long",
        "Type": "Textbox"
    },
    66: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "GPS_6_lat",
        "Question_Txt": "GPS Point 6 Lat",
        "Type": "Textbox"
    },
    67: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "GPS_6_long",
        "Question_Txt": "GPS Point 6 Long",
        "Type": "Textbox"
    },
    68: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "GPS_7_lat",
        "Question_Txt": "GPS Point 7 Lat",
        "Type": "Textbox"
    },
    69: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "GPS_7_long",
        "Question_Txt": "GPS Point 7 Long",
        "Type": "Textbox"
    },
    70: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "GPS_8_lat",
        "Question_Txt": "GPS Point 8 Lat",
        "Type": "Textbox"
    },
    71: {
        "WorkflowID": "F06",
        "Req": "N ",
        "Dependent": "",
        "Name": "GPS_8_long",
        "Question_Txt": "GPS Point 8 Long",
        "Type": "Textbox"
    },
    72: {
        "WorkflowID": "F06",
        "Req": "Y",
        "Dependent": "",
        "Name": "Certification_Agreement",
        "Question_Txt": "I certify all the requirements have been met and attached/verified the completed plot map.",
        "Type": "Radiobox"
    },
    8806: {"WorkflowID": "F06", "Req": "N", "Dependent": "", "Name": "File_ID", "Question_Txt": "", "Type": "Filebox"},
    9906: {
        "WorkflowID": "F06",
        "Req": "N",
        "Dependent": "",
        "Name": "File_Name",
        "Question_Txt": "",
        "Type": "Filebox"
    },
    73: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "",
        "Name": "Planted_Crop",
        "Question_Txt": "What crop was planted in field trial area in crop year 2015?",
        "Type": "Textbox"
    },
    74: {
        "WorkflowID": "F16",
        "Req": "Y",
        "Dependent": "",
        "Name": "Planted_Crop_Date",
        "Question_Txt": "Planting date of 2015 crop?",
        "Type": "Datebox"
    },
    75: {
        "WorkflowID": "F18",
        "Req": "Y",
        "Dependent": "",
        "Name": "Previous_Trained_and_Recorded",
        "Question_Txt": "Were the SRR and appropriate personnel trained on the RR2Xtend/Vistive Gold Stewardship Requirements and is the training recorded in Training Tracker?",
        "Type": "Radiobox"
    },
    76: {
        "WorkflowID": "F18",
        "Req": "Y",
        "Dependent": "",
        "Name": "Contained_of_Material",
        "Question_Txt": "Was all material double contained (single contained if treated) during shipping?",
        "Type": "Radiobox"
    },
    77: {
        "WorkflowID": "F18",
        "Req": "Y",
        "Dependent": "",
        "Name": "Received_Good_Condition",
        "Question_Txt": "Was all materials received in good condition (i.e., intact, not leaking)?",
        "Type": "Radiobox"
    },
    78: {
        "WorkflowID": "F18",
        "Req": "Y",
        "Dependent": "",
        "Name": "Received_Seed_Labeled",
        "Question_Txt": "Received seed labeled as \"Product not approved for commerce\", and \"Roundup Ready 2 Xtend\" or \"Vistive Gold\"?",
        "Type": "Radiobox"
    },
    79: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "Physical_Markers",
        "Question_Txt": "Have physical markers been placed at the corners where GPS is captured?",
        "Type": "Radiobox"
    },
    80: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "Planting_Start_Date",
        "Question_Txt": "Planting Start date.",
        "Type": "Textbox"
    },
    81: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "Planting_End_Date",
        "Question_Txt": "Planting End date.",
        "Type": "Textbox"
    },
    82: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "Actual_Planted_Acres",
        "Question_Txt": "Actual planted acres.",
        "Type": "Textbox"
    },
    83: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "Commercial_Soybeans_Planted",
        "Question_Txt": "Are commercial soybeans planted immediately adjacent to this field?",
        "Type": "Radiobox"
    },
    84: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "83|1001",
        "Name": "Type_of_Isolation",
        "Question_Txt": "Is there at least 30ft. of isolation separating the Roundup Ready 2 Xtend/Vistive Gold trial from the commercial soybean field or is a natural barrier in place that separates the two soybean fields?",
        "Type": "Radiobox"
    },
    85: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "83|1001,84|1007",
        "Name": "Natural_Barrier",
        "Question_Txt": "Natural Barrier.",
        "Type": "Textbox"
    },
    86: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "SRR_or_Delegate_Present",
        "Question_Txt": "Is the SRR or delegate present at the planting of the Grower's initial field?",
        "Type": "Radiobox"
    },
    87: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "Seed_Tender_Used",
        "Question_Txt": "Was a seed tender used to load the planter?",
        "Type": "Radiobox"
    },
    88: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "87|1001",
        "Name": "Seed_Tender_Cleaned_Out",
        "Question_Txt": "Was the seed tender cleaned out in RR2 Xtend/Vistive Gold field or equipment/maintenance (grower building) area?",
        "Type": "Radiobox"
    },
    89: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "87|1001,88|1001",
        "Name": "Date_of_Verbal_or_Visual_Confirm_1",
        "Question_Txt": "Date of verbal or visual confirmation.",
        "Type": "Textbox"
    },
    90: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "87|1001,88|1001",
        "Name": "Equip_Cleanout_Contact_Person_1",
        "Question_Txt": "Name of Contact Person.",
        "Type": "Textbox"
    },
    91: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "",
        "Name": "Planter_Cleaned_Out",
        "Question_Txt": "Was the planter cleaned out in RR2 Xtend/Vistive Gold field or equipment/maintenance (grower building) area?",
        "Type": "Radiobox"
    },
    92: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "91|1001",
        "Name": "Date_of_Verbal_or_Visual_Confirm_2",
        "Question_Txt": "Date of verbal or visual confirmation.",
        "Type": "Textbox"
    },
    93: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "91|1001",
        "Name": "Equip_Cleanout_Contact_Person_2",
        "Question_Txt": "Name of Contact Person.",
        "Type": "Textbox"
    },
    94: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "91|1001",
        "Name": "Seed_Leftover_after_Planting",
        "Question_Txt": "Was there seed leftover after planting?",
        "Type": "Radiobox"
    },
    95: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "91|1001,94|1001",
        "Name": "Amount_of_Material_Leftover",
        "Question_Txt": "How much material was leftover? In lbs.",
        "Type": "Textbox"
    },
    96: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "91|1001,94|1001",
        "Name": "Disposition_of_Leftover",
        "Question_Txt": "Describe the disposition of any leftover material after planting. Must follow all state and local regulations for disposition of treated seed.",
        "Type": "Radiobox"
    },
    97: {
        "WorkflowID": "F19",
        "Req": "Y",
        "Dependent": "88|1009,91|1009",
        "Name": "Next_Planted_Field",
        "Question_Txt": "Next Planted Field.",
        "Type": "Textbox"
    },
    98: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "",
        "Name": "Field_Sprayed_M1691_Burndown",
        "Question_Txt": "Was field sprayed with M1691 for burndown?",
        "Type": "Radiobox"
    },
    99: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_SRR_Present",
        "Question_Txt": "Burndown: Is SRR present during the dicamba application?",
        "Type": "Radiobox"
    },
    100: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Applicator_FN",
        "Question_Txt": "Burndown: Applicator's First Name",
        "Type": "Textbox"
    },
    101: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Applicator_LN",
        "Question_Txt": "Burndown: Applicator's Last Name",
        "Type": "Textbox"
    },
    102: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Applicator_Trained",
        "Question_Txt": "Burndown: Was the applicator trained on the dicamba application requirements in 2015 and is this documented in Training Tracker?",
        "Type": "Radiobox"
    },
    103: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Applicator_Possession_M1691_Label",
        "Question_Txt": "Burndown: Applicator has possession of the M1691 supplemental label?",
        "Type": "Radiobox"
    },
    104: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Crop_Stage",
        "Question_Txt": "Burndown: Crop stage at time of dicamba application. If later than V6, contact FCL before application. ",
        "Type": "Dropdown"
    },
    105: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Adjacent_Non_RR2X",
        "Question_Txt": "Burndown: Are there any adjacent non-RR2X soybean fields?",
        "Type": "Radiobox"
    },
    106: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001,105|1001",
        "Name": "BD_Growth_Stage_Non_RR2X_Soybean",
        "Question_Txt": "Burndown: What is the growth stage of the adjacent non-RR2X soybean field at the time of dicamba application? Tank mix options are restricted if neighboring field is flowering. ",
        "Type": "Radiobox"
    },
    107: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001,106|1030",
        "Name": "BD_Growth_Stage_Flowering",
        "Question_Txt": "Burndown: Growth stage of adjacent flowering field at time of dicamba application",
        "Type": "Textbox"
    },
    108: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Herbicide",
        "Question_Txt": "Burndown: Herbicide product applied",
        "Type": "Textbox"
    },
    109: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Mon_10_Used",
        "Question_Txt": "Burndown: Was MON-10 used?",
        "Type": "Radiobox"
    },
    110: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Drift_Reduction",
        "Question_Txt": "Burndown: Drift Reduction Agent used",
        "Type": "Dropdown"
    },
    111: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_DateTime",
        "Question_Txt": "Burndown: Date of Application",
        "Type": "Textbox"
    },
    112: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Nozzle_Type",
        "Question_Txt": "Burndown: Nozzle Type",
        "Type": "Radiobox"
    },
    113: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Nozzle_Spacing",
        "Question_Txt": "Burndown: Nozzle Spacing (inches)",
        "Type": "Textbox"
    },
    114: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Boom_Length",
        "Question_Txt": "Burndown: Boom Length (ft)",
        "Type": "Textbox"
    },
    115: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Boom_Height",
        "Question_Txt": "Burndown: Boom Height ABOVE CANOPY (inches)",
        "Type": "Textbox"
    },
    116: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Hooded",
        "Question_Txt": "Burndown: Hooded or Shielded Boom Used?",
        "Type": "Radiobox"
    },
    117: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Operating_Pressure_PSI",
        "Question_Txt": "Burndown: Operating Pressure (psi) Range is 30-60 psi to maintain ultra coarse droplets. ",
        "Type": "Textbox"
    },
    118: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Ground_Speed_MPH",
        "Question_Txt": "Burndown: Ground speed during application (mph) Must be less than 15 mph",
        "Type": "Textbox"
    },
    119: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_GPA",
        "Question_Txt": "Burndown: GPA (gallons per acre) Minimum 10 gpa",
        "Type": "Textbox"
    },
    120: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Treated_Acreage",
        "Question_Txt": "Burndown: Treated Acreage",
        "Type": "Textbox"
    },
    121: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Equipment_Triple_Rinsed",
        "Question_Txt": "Burndown: Was equipment triple rinsed per the requirements?",
        "Type": "Radiobox"
    },
    122: {
        "WorkflowID": "F10",
        "Req": "N",
        "Dependent": "98|1001",
        "Name": "BD_Additional_App_Notes",
        "Question_Txt": "Burndown: Additional Application Notes",
        "Type": "Textbox"
    },
    123: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Wind_Speed",
        "Question_Txt": "Burndown: Wind Speed at Application (mph) Spray when wind speeds are 3-10 mph. ",
        "Type": "Textbox"
    },
    124: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Wind_Direction",
        "Question_Txt": "Burndown: Wind Direction at Application? Be sure to maintain a 250ft downwind buffer from sensitive species. ",
        "Type": "Textbox"
    },
    125: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Air_Temp",
        "Question_Txt": "Burndown: Air Temperature",
        "Type": "Textbox"
    },
    126: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "98|1001",
        "Name": "BD_Percent_Relative_Humidity",
        "Question_Txt": "Burndown: Percent (%) Relative Humidity",
        "Type": "Textbox"
    },
    127: {
        "WorkflowID": "F10",
        "Req": "N",
        "Dependent": "98|1001",
        "Name": "BD_Additional_Notes_Comments",
        "Question_Txt": "Burndown: Additional Notes/comments",
        "Type": "Textbox"
    },
    128: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "",
        "Name": "Field_Sprayed_M1691_In_Season",
        "Question_Txt": "Was field sprayed with M1691 in-season?",
        "Type": "Radiobox"
    },
    129: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_SRR_Present",
        "Question_Txt": "In_Season: Is SRR present during the dicamba application?",
        "Type": "Radiobox"
    },
    130: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Applicator_FN",
        "Question_Txt": "In_Season: Applicator's First Name",
        "Type": "Textbox"
    },
    131: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Applicator_LN",
        "Question_Txt": "In_Season: Applicator's Last Name",
        "Type": "Textbox"
    },
    132: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Applicator_Trained",
        "Question_Txt": "In_Season: Was the applicator trained on the dicamba application requirements in 2015 and is this documented in Training Tracker?",
        "Type": "Radiobox"
    },
    133: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Applicator_Possession_M1691_Label",
        "Question_Txt": "In_Season: Applicator has possession of the M1691 supplemental label?",
        "Type": "Radiobox"
    },
    134: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Crop_Stage",
        "Question_Txt": "In_Season: Crop stage at time of dicamba application. If later than V6, contact FCL before application. ",
        "Type": "Dropdown"
    },
    135: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Adjacent_Non_RR2X",
        "Question_Txt": "In_Season: Are there any adjacent non-RR2X soybean fields?",
        "Type": "Radiobox"
    },
    136: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001,135|1001",
        "Name": "IS_Growth_Stage_Non_RR2X_Soybean",
        "Question_Txt": "In_Season: What is the growth stage of the adjacent non-RR2X soybean field at the time of dicamba application? Tank mix options are restricted if neighboring field is flowering. ",
        "Type": "Radiobox"
    },
    137: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001,136|1030",
        "Name": "IS_Growth_Stage_Flowering",
        "Question_Txt": "In_Season: Growth stage of adjacent flowering field at time of dicamba application",
        "Type": "Textbox"
    },
    138: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Herbicide",
        "Question_Txt": "In_Season: Herbicide product applied",
        "Type": "Textbox"
    },
    139: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Mon_10_Used",
        "Question_Txt": "In_Season: Was MON-10 used?",
        "Type": "Radiobox"
    },
    140: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Drift_Reduction",
        "Question_Txt": "In_Season: Drift Reduction Agent used",
        "Type": "Dropdown"
    },
    141: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_DateTime",
        "Question_Txt": "In_Season: Date of Application",
        "Type": "Textbox"
    },
    142: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Nozzle_Type",
        "Question_Txt": "In_Season: Nozzle Type",
        "Type": "Radiobox"
    },
    143: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Nozzle_Spacing",
        "Question_Txt": "In_Season: Nozzle Spacing (inches)",
        "Type": "Textbox"
    },
    144: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Boom_Length",
        "Question_Txt": "In_Season: Boom Length (ft)",
        "Type": "Textbox"
    },
    145: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Boom_Height",
        "Question_Txt": "In_Season: Boom Height ABOVE CANOPY (inches)",
        "Type": "Textbox"
    },
    146: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Hooded",
        "Question_Txt": "In_Season: Hooded or Shielded Boom Used?",
        "Type": "Radiobox"
    },
    147: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Operating_Pressure_PSI",
        "Question_Txt": "In_Season: Operating Pressure (psi) Range is 30-60 psi to maintain ultra coarse droplets. ",
        "Type": "Textbox"
    },
    148: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Ground_Speed_MPH",
        "Question_Txt": "In_Season: Ground speed during application (mph) Must be less than 15 mph",
        "Type": "Textbox"
    },
    149: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_GPA",
        "Question_Txt": "In_Season: GPA (gallons per acre) Minimum 10 gpa",
        "Type": "Textbox"
    },
    150: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Treated_Acreage",
        "Question_Txt": "In_Season: Treated Acreage",
        "Type": "Textbox"
    },
    151: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Equipment_Triple_Rinsed",
        "Question_Txt": "In_Season: Was equipment triple rinsed per the requirements?",
        "Type": "Radiobox"
    },
    152: {
        "WorkflowID": "F10",
        "Req": "N",
        "Dependent": "128|1001",
        "Name": "IS_Additional_App_Notes",
        "Question_Txt": "In_Season: Additional Application Notes",
        "Type": "Textbox"
    },
    153: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Wind_Speed",
        "Question_Txt": "In_Season: Wind Speed at Application (mph) Spray when wind speeds are 3-10 mph. ",
        "Type": "Textbox"
    },
    154: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Wind_Direction",
        "Question_Txt": "In_Season: Wind Direction at Application? Be sure to maintain a 250ft downwind buffer from sensitive species. ",
        "Type": "Textbox"
    },
    155: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Air_Temp",
        "Question_Txt": "In_Season: Air Temperature",
        "Type": "Textbox"
    },
    156: {
        "WorkflowID": "F10",
        "Req": "Y",
        "Dependent": "128|1001",
        "Name": "IS_Percent_Relative_Humidity",
        "Question_Txt": "In_Season: Percent (%) Relative Humidity",
        "Type": "Textbox"
    },
    157: {
        "WorkflowID": "F10",
        "Req": "N",
        "Dependent": "128|1001",
        "Name": "IS_Additional_Notes_Comments",
        "Question_Txt": "In_Season: Additional Notes/comments",
        "Type": "Textbox"
    },
    158: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "",
        "Name": "Ft_Isolation_Planting",
        "Question_Txt": "Are you using 30ft of Isolation?",
        "Type": "Radiobox"
    },
    159: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "PP_Record_Isolation_Date",
        "Question_Txt": "Record isolation check date.",
        "Type": "Datebox"
    },
    160: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "PP_Isolation_Area_Inspected",
        "Question_Txt": "Was the entire isolation area (30 ft) visually inspected?",
        "Type": "Radiobox"
    },
    161: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "PP_Compatible_Plants_Found",
        "Question_Txt": "Were sexually compatible plant(s) found in the isolation area?",
        "Type": "Radiobox"
    },
    162: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001,161|1001",
        "Name": "PP_Compatible_Plants_Destroyed",
        "Question_Txt": "Was the sexually compatible plant(s) destroyed prior to flowering?",
        "Type": "Radiobox"
    },
    163: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001,161|1001",
        "Name": "PP_Compatible_Plants_Destruction_Method",
        "Question_Txt": "What was the destruction method of sexually compatible plants?",
        "Type": "Dropdown"
    },
    164: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "PH_Record_Isolation_Date",
        "Question_Txt": "Record isolation check date.",
        "Type": "Datebox"
    },
    165: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "PH_Isolation_Area_Inspected",
        "Question_Txt": "Was the entire isolation area visually inspected?",
        "Type": "Radiobox"
    },
    166: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "PH_Compatible_Plants_Found",
        "Question_Txt": "Were sexually compatible plant(s) found in the isolation area?",
        "Type": "Radiobox"
    },
    167: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001,166|1001",
        "Name": "PH_Compatible_Plants_Destroyed",
        "Question_Txt": "Was the sexually compatible plant(s) destroyed prior to harvest of adjacent soybean field?",
        "Type": "Radiobox"
    },
    168: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001,166|1001",
        "Name": "PH_Compatible_Plants_Destruction_Method",
        "Question_Txt": "What was the destruction method of sexually compatible plants?",
        "Type": "Dropdown"
    },
    169: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "SRR_Confirmation",
        "Question_Txt": "Has the SRR confirmed that Harvest Barriers are in place at least 30 days prior to harvest of adjacent commercial soybean field?",
        "Type": "Radiobox"
    },
    170: {
        "WorkflowID": "F11",
        "Req": "Y",
        "Dependent": "158|1001",
        "Name": "Cover_Crops_Destroyed",
        "Question_Txt": "Have all cover crops removed from the isolation area been used for forage, hay, or silage, and/or used for livestock feed in the U.S.?",
        "Type": "Radiobox"
    },

    //Bin Inspections 1
    171: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Number",
        "Question_Txt": "Bin number",
        "Type": "Textbox"
    },
    172: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Location",
        "Question_Txt": "Bin location",
        "Type": "Textbox"
    },
    //173: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Type_of_Storage", "Question_Txt": "Type of storage", "Type": "Dropdown" },
    //174: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Diameter", "Question_Txt": "Bin diameter", "Type": "Textbox" },
    //175: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Height", "Question_Txt": "Bin height", "Type": "Textbox" },
    //176: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Capacity", "Question_Txt": "Bin capacity", "Type": "Textbox" },
    //177: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "False_Floor", "Question_Txt": "Fase floor", "Type": "Radiobox" },
    //178: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Unloading_Tube_Clearance", "Question_Txt": "Unloading Tube Clearance (inches)", "Type": "Textbox" },
    //179: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Access_by_Semi", "Question_Txt": "Access by semi", "Type": "Radiobox" },
    //180: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Distance_to_Rock", "Question_Txt": "Distance to rock (ft)", "Type": "Textbox" },
    //181: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Electricity_Near_Bin", "Question_Txt": "Electricity near bin", "Type": "Radiobox" },
    //182: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Door_on_Top", "Question_Txt": "Door on Top", "Type": "Radiobox" },
    //183: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Aeration_System", "Question_Txt": "Aeration System", "Type": "Radiobox" },
    //184: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Walls_Clean", "Question_Txt": "Walls Clean", "Type": "Radiobox" },
    //185: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Floor_Clean", "Question_Txt": "Floor Clean", "Type": "Radiobox" },
    //186: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Approved", "Question_Txt": "Bin Approved", "Type": "Radiobox" },
    187: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Additional_Comments",
        "Question_Txt": "Additional Comments",
        "Type": "Textbox"
    },
    188: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspected_Date",
        "Question_Txt": "Bin inspected date",
        "Type": "Datebox"
    },

    //Bin Inspections 2
    189: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Number2",
        "Question_Txt": "Bin number",
        "Type": "Textbox"
    },
    190: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Location2",
        "Question_Txt": "Bin location",
        "Type": "Textbox"
    },
    //191: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Type_of_Storage2", "Question_Txt": "Type of storage", "Type": "Dropdown" },
    //192: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Diameter2", "Question_Txt": "Bin diameter", "Type": "Textbox" },
    //193: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Height2", "Question_Txt": "Bin height", "Type": "Textbox" },
    //194: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Capacity2", "Question_Txt": "Bin capacity", "Type": "Textbox" },
    //195: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "False_Floor2", "Question_Txt": "Fase floor", "Type": "Radiobox" },
    //196: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Unloading_Tube_Clearance2", "Question_Txt": "Unloading Tube Clearance (inches)", "Type": "Textbox" },
    //197: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Access_by_Semi2", "Question_Txt": "Access by semi", "Type": "Radiobox" },
    //198: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Distance_to_Rock2", "Question_Txt": "Distance to rock (ft)", "Type": "Textbox" },
    //199: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Electricity_Near_Bin2", "Question_Txt": "Electricity near bin", "Type": "Radiobox" },
    //200: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Door_on_Top2", "Question_Txt": "Door on Top", "Type": "Radiobox" },
    //201: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Aeration_System2", "Question_Txt": "Aeration System", "Type": "Radiobox" },
    //202: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Walls_Clean2", "Question_Txt": "Walls Clean", "Type": "Radiobox" },
    //203: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Floor_Clean2", "Question_Txt": "Floor Clean", "Type": "Radiobox" },
    //204: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Approved2", "Question_Txt": "Bin Approved", "Type": "Radiobox" },
    205: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Additional_Comments2",
        "Question_Txt": "Additional Comments",
        "Type": "Textbox"
    },
    206: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspected_Date2",
        "Question_Txt": "Bin inspected date",
        "Type": "Datebox"
    },

    //Bin Inspections 3
    207: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Number3",
        "Question_Txt": "Bin number",
        "Type": "Textbox"
    },
    208: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Location3",
        "Question_Txt": "Bin location",
        "Type": "Textbox"
    },
    //209: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Type_of_Storage3", "Question_Txt": "Type of storage", "Type": "Dropdown" },
    //210: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Diameter3", "Question_Txt": "Bin diameter", "Type": "Textbox" },
    //211: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Height3", "Question_Txt": "Bin height", "Type": "Textbox" },
    //212: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Capacity3", "Question_Txt": "Bin capacity", "Type": "Textbox" },
    //213: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "False_Floor3", "Question_Txt": "Fase floor", "Type": "Radiobox" },
    //214: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Unloading_Tube_Clearance3", "Question_Txt": "Unloading Tube Clearance (inches)", "Type": "Textbox" },
    //215: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Access_by_Semi3", "Question_Txt": "Access by semi", "Type": "Radiobox" },
    //216: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Distance_to_Rock3", "Question_Txt": "Distance to rock (ft)", "Type": "Textbox" },
    //217: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Electricity_Near_Bin3", "Question_Txt": "Electricity near bin", "Type": "Radiobox" },
    //218: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Door_on_Top3", "Question_Txt": "Door on Top", "Type": "Radiobox" },
    //219: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Aeration_System3", "Question_Txt": "Aeration System", "Type": "Radiobox" },
    //220: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Walls_Clean3", "Question_Txt": "Walls Clean", "Type": "Radiobox" },
    //221: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Floor_Clean3", "Question_Txt": "Floor Clean", "Type": "Radiobox" },
    //222: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Approved3", "Question_Txt": "Bin Approved", "Type": "Radiobox" },
    223: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Additional_Comments3",
        "Question_Txt": "Additional Comments",
        "Type": "Textbox"
    },
    224: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspected_Date3",
        "Question_Txt": "Bin inspected date",
        "Type": "Datebox"
    },

    //Bin Inspections 4
    225: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Number4",
        "Question_Txt": "Bin number",
        "Type": "Textbox"
    },
    226: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Location4",
        "Question_Txt": "Bin location",
        "Type": "Textbox"
    },
    //227: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Type_of_Storage4", "Question_Txt": "Type of storage", "Type": "Dropdown" },
    //228: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Diameter4", "Question_Txt": "Bin diameter", "Type": "Textbox" },
    //229: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Height4", "Question_Txt": "Bin height", "Type": "Textbox" },
    //230: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Capacity4", "Question_Txt": "Bin capacity", "Type": "Textbox" },
    //231: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "False_Floor4", "Question_Txt": "Fase floor", "Type": "Radiobox" },
    //232: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Unloading_Tube_Clearance4", "Question_Txt": "Unloading Tube Clearance (inches)", "Type": "Textbox" },
    //233: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Access_by_Semi4", "Question_Txt": "Access by semi", "Type": "Radiobox" },
    //234: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Distance_to_Rock4", "Question_Txt": "Distance to rock (ft)", "Type": "Textbox" },
    //235: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Electricity_Near_Bin4", "Question_Txt": "Electricity near bin", "Type": "Radiobox" },
    //236: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Door_on_Top4", "Question_Txt": "Door on Top", "Type": "Radiobox" },
    //237: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Aeration_System4", "Question_Txt": "Aeration System", "Type": "Radiobox" },
    //238: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Walls_Clean4", "Question_Txt": "Walls Clean", "Type": "Radiobox" },
    //239: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Floor_Clean4", "Question_Txt": "Floor Clean", "Type": "Radiobox" },
    //240: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Approved4", "Question_Txt": "Bin Approved", "Type": "Radiobox" },
    241: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Additional_Comments4",
        "Question_Txt": "Additional Comments",
        "Type": "Textbox"
    },
    242: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspected_Date4",
        "Question_Txt": "Bin inspected date",
        "Type": "Datebox"
    },

    //Bin Inspections 5
    243: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Number5",
        "Question_Txt": "Bin number",
        "Type": "Textbox"
    },
    244: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Location5",
        "Question_Txt": "Bin location",
        "Type": "Textbox"
    },
    //245: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Type_of_Storage5", "Question_Txt": "Type of storage", "Type": "Dropdown" },
    //246: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Diameter5", "Question_Txt": "Bin diameter", "Type": "Textbox" },
    //247: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Height5", "Question_Txt": "Bin height", "Type": "Textbox" },
    //248: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Capacity5", "Question_Txt": "Bin capacity", "Type": "Textbox" },
    //249: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "False_Floor5", "Question_Txt": "Fase floor", "Type": "Radiobox" },
    //250: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Unloading_Tube_Clearance5", "Question_Txt": "Unloading Tube Clearance (inches)", "Type": "Textbox" },
    //251: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Access_by_Semi5", "Question_Txt": "Access by semi", "Type": "Radiobox" },
    //252: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Distance_to_Rock5", "Question_Txt": "Distance to rock (ft)", "Type": "Textbox" },
    //253: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Electricity_Near_Bin5", "Question_Txt": "Electricity near bin", "Type": "Radiobox" },
    //254: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Door_on_Top5", "Question_Txt": "Door on Top", "Type": "Radiobox" },
    //255: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Aeration_System5", "Question_Txt": "Aeration System", "Type": "Radiobox" },
    //256: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Walls_Clean5", "Question_Txt": "Walls Clean", "Type": "Radiobox" },
    //257: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Floor_Clean5", "Question_Txt": "Floor Clean", "Type": "Radiobox" },
    //258: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Approved5", "Question_Txt": "Bin Approved", "Type": "Radiobox" },
    259: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Additional_Comments5",
        "Question_Txt": "Additional Comments",
        "Type": "Textbox"
    },
    260: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspected_Date5",
        "Question_Txt": "Bin inspected date",
        "Type": "Datebox"
    },

    //Harvest and Destruct
    //261: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "CD_Prior_to_flowering", "Question_Txt": "Was the entire trial destroyed prior to flowering?", "Type": "Radiobox" },
    //262: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "CD_Method", "Question_Txt": "What was the method of destruction?", "Type": "Dropdown" },
    //263: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "CD_Date", "Question_Txt": "Record the date of trial destruction", "Type": "Datebox" },
    264: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "PH_Trained_Prior_to_Harvest",
        "Question_Txt": "Were the SRR and all appropriate personnel trained prior to harvest on stewardship harvest procedures?",
        "Type": "Radiobox"
    },

    //338: { "WorkflowID": "F12", "Req": "Y", "Dependent": "", "Name": "PH_Adjencent_Fields_Completed_Harvest", "Question_Txt": "Have all immediately adjacent soybean fields completed harvest prior to this stewardship field harvest?", "Type": "Radiobox" },


    265: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Harvest_Visited",
        "Question_Txt": "Did the SRR or delegate visit the field at harvest?",
        "Type": "Radiobox"
    },

    //266: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "H_Grower_Has_Plan_to_Empty_Equipment", "Question_Txt": "Does the SRR or delegate confirmed the grower has a plan to empty equipment at the end of each day?", "Type": "Radiobox" },

    267: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Portion_Not_Harvested",
        "Question_Txt": "Was there any material left in the field that will not be harvested for seed production?",
        "Type": "Radiobox"
    },
    //268: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "H_Estimated_Acres", "Question_Txt": "Estimated acres", "Type": "Textbox" },
    269: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Start_Date",
        "Question_Txt": "Harvest start date",
        "Type": "Textbox"
    },
    270: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_End_Date",
        "Question_Txt": "Harvest end date",
        "Type": "Textbox"
    },


    339: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Acres_Harvested",
        "Question_Txt": "Acres Harvested",
        "Type": "Textbox"
    },
    340: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Estimated_Harvest_Volume",
        "Question_Txt": "Estimated Harvest Volume (bushels) from yield monitor",
        "Type": "Textbox"
    },


    271: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Material_Stored_In",
        "Question_Txt": "Where was harvested material stored?",
        "Type": "Dropdown"
    },
    272: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "H_Bin_Number_and_Location",
        "Question_Txt": "Bin number and location",
        "Type": "MultiCheck"
    },

    341: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Material_Properly_Contained",
        "Question_Txt": "Is the harvested material properly contained? Double containment required for untreated seed; exceptions for bulk storage - single containment- include pre-inspected bins, hard-side seed boxes",
        "Type": "Radiobox"
    },
    342: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Material_Storage_Properly_Labeled",
        "Question_Txt": "Is the harvested material storage properly labeled? Product Not Approved for Commerce, RR2Xtend Soybeans or Vistive Gold Soybeans",
        "Type": "Radiobox"
    },
    343: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Material_Storage_Properly_Secured",
        "Question_Txt": "Is the harvested material storage properly secured?",
        "Type": "Radiobox"
    },


    344: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "ECO_Checklist_Completed_Prior_To",
        "Question_Txt": "Has the SRR confirmed equipment cleanout checklist was completed for all field harvest equipment prior to use with non-stewarded material?",
        "Type": "Radiobox"
    },
    345: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "ECO_Disposed_Per_Approved_Method",
        "Question_Txt": "Was all material collected during field equipment cleanout disposed per an approved method?  Example methods include: leave in RR2X/VG stewarded field, discard sweepings and seed in trash/landfill, devitalize",
        "Type": "Radiobox"
    },
    //346: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "GBL_ECO_Checklist_Completed_Prior_To", "Question_Txt": "Is the harvested material storage properly secured?", "Type": "Radiobox" },
    347: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "GBL_ECO_Disposed_Per_Approved_Method",
        "Question_Txt": "Is the harvested material storage properly secured?",
        "Type": "Radiobox"
    },

    348: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "H_Delay_Harvesting",
        "Question_Txt": "Has there been a delay in harvesting this field? (weather, moisture etc)",
        "Type": "Radiobox"
    },


    273: {
        "WorkflowID": "F12",
        "Req": "Y",
        "Dependent": "",
        "Name": "Equipment_Cleaned_Out",
        "Question_Txt": "Was the field harvest equipment (truck, wagon, combine) cleaned out in RR2 Xtend/Vistive Gold field or equipment/maintenance (grower building) area?",
        "Type": "Radiobox"
    },
    274: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "Next_Harvested_Field",
        "Question_Txt": "Next Harvested Field",
        "Type": "Textbox"
    },
    //275: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "ECO_Forced_Air_Used", "Question_Txt": "Did SRR confirm forced air was used to clean combine?", "Type": "Radiobox" },
    276: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "ECO_Confirmation_Date",
        "Question_Txt": "Date of verbal or visual confirmation of cleaning of all field harvest equipment",
        "Type": "Datebox"
    },
    277: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "ECO_Contact_Person",
        "Question_Txt": "Name of Contact Person",
        "Type": "Textbox"
    },
    278: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "GBL_Equipment_Clean_Out",
        "Question_Txt": "Was the transport and harvest grain bin loading equipment (trucks, grain bin auger, auger system, etc.) cleaned prior to use with non-stewarded material?",
        "Type": "Radiobox"
    },
    279: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "GBL_ECO_Confirmation_Date",
        "Question_Txt": "Date of verbal or visual confirmation",
        "Type": "Datebox"
    },
    280: {
        "WorkflowID": "F12",
        "Req": "N",
        "Dependent": "",
        "Name": "GBL_ECO_Contact_Person",
        "Question_Txt": "Name of Contact Person",
        "Type": "Textbox"
    },
    //281: { "WorkflowID": "F12", "Req": "N", "Dependent": "", "Name": "harvested_Materials_Disposition", "Question_Txt": "Describe the disposition of harvested materials", "Type": "MultiCheck" },


    //Bin Inspections second group of questions.
    282: {
        "WorkflowID": "F14",
        "Req": "Y",
        "Dependent": "",
        "Name": "Trial_Use_Bin_Storage",
        "Question_Txt": "Will bin storage be used for this field trial?",
        "Type": "Radiobox"
    },

    283: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspector_Name",
        "Question_Txt": "Name of Inspector",
        "Type": "Textbox"
    },
    284: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Appropriate_Size",
        "Question_Txt": "Bin is of the appropriate size to store harvested material?",
        "Type": "Radiobox"
    },
    285: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Clean_And_Good",
        "Question_Txt": "Bin is clean and in good condition?",
        "Type": "Radiobox"
    },
    286: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Secureable",
        "Question_Txt": "Bin is able to be secured via lock or seal?",
        "Type": "Radiobox"
    },
    //287: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Statement_Storage", "Question_Txt": "Please select appropriate statement to ensure RR2X or VG Soybeans will be stored independently of commodity soybeans: ", "Type": "Dropdown" },
    288: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Signage_Appropriated",
        "Question_Txt": "Plan is in place to label the bin with appropriate stewardship signage when bin is loaded: Product Not Approved for Commerce and the Trait Name (RR2Xtend Soybeans, Vistive Gold) ",
        "Type": "Radiobox"
    },

    289: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspector_Name2",
        "Question_Txt": "Name of Inspector",
        "Type": "Textbox"
    },
    290: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Appropriate_Size2",
        "Question_Txt": "Bin is of the appropriate size to store harvested material?",
        "Type": "Radiobox"
    },
    291: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Clean_And_Good2",
        "Question_Txt": "Bin is clean and in good condition?",
        "Type": "Radiobox"
    },
    292: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Secureable2",
        "Question_Txt": "Bin is able to be secured via lock or seal?",
        "Type": "Radiobox"
    },
    //293: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Statement_Storage2", "Question_Txt": "Please select appropriate statement to ensure RR2X or VG Soybeans will be stored independently of commodity soybeans: ", "Type": "Dropdown" },
    294: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Signage_Appropriated2",
        "Question_Txt": "Plan is in place to label the bin with appropriate stewardship signage when bin is loaded: Product Not Approved for Commerce and the Trait Name (RR2Xtend Soybeans, Vistive Gold) ",
        "Type": "Radiobox"
    },

    295: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspector_Name3",
        "Question_Txt": "Name of Inspector",
        "Type": "Textbox"
    },
    296: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Appropriate_Size3",
        "Question_Txt": "Bin is of the appropriate size to store harvested material?",
        "Type": "Radiobox"
    },
    297: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Clean_And_Good3",
        "Question_Txt": "Bin is clean and in good condition?",
        "Type": "Radiobox"
    },
    298: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Secureable3",
        "Question_Txt": "Bin is able to be secured via lock or seal?",
        "Type": "Radiobox"
    },
    //299: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Statement_Storage3", "Question_Txt": "Please select appropriate statement to ensure RR2X or VG Soybeans will be stored independently of commodity soybeans: ", "Type": "Dropdown" },
    300: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Signage_Appropriated3",
        "Question_Txt": "Plan is in place to label the bin with appropriate stewardship signage when bin is loaded: Product Not Approved for Commerce and the Trait Name (RR2Xtend Soybeans, Vistive Gold) ",
        "Type": "Radiobox"
    },

    301: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspector_Name4",
        "Question_Txt": "Name of Inspector",
        "Type": "Textbox"
    },
    302: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Appropriate_Size4",
        "Question_Txt": "Bin is of the appropriate size to store harvested material?",
        "Type": "Radiobox"
    },
    303: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Clean_And_Good4",
        "Question_Txt": "Bin is clean and in good condition?",
        "Type": "Radiobox"
    },
    304: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Secureable4",
        "Question_Txt": "Bin is able to be secured via lock or seal?",
        "Type": "Radiobox"
    },
    //305: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Statement_Storage4", "Question_Txt": "Please select appropriate statement to ensure RR2X or VG Soybeans will be stored independently of commodity soybeans: ", "Type": "Dropdown" },
    306: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Signage_Appropriated4",
        "Question_Txt": "Plan is in place to label the bin with appropriate stewardship signage when bin is loaded: Product Not Approved for Commerce and the Trait Name (RR2Xtend Soybeans, Vistive Gold) ",
        "Type": "Radiobox"
    },

    307: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Inspector_Name5",
        "Question_Txt": "Name of Inspector",
        "Type": "Textbox"
    },
    308: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Appropriate_Size5",
        "Question_Txt": "Bin is of the appropriate size to store harvested material?",
        "Type": "Radiobox"
    },
    309: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Clean_And_Good5",
        "Question_Txt": "Bin is clean and in good condition?",
        "Type": "Radiobox"
    },
    310: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Secureable5",
        "Question_Txt": "Bin is able to be secured via lock or seal?",
        "Type": "Radiobox"
    },
    //311: { "WorkflowID": "F14", "Req": "N", "Dependent": "", "Name": "Bin_Statement_Storage5", "Question_Txt": "Please select appropriate statement to ensure RR2X or VG Soybeans will be stored independently of commodity soybeans: ", "Type": "Dropdown" },

    312: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Signage_Appropriated5",
        "Question_Txt": "Plan is in place to label the bin with appropriate stewardship signage when bin is loaded: Product Not Approved for Commerce and the Trait Name (RR2Xtend Soybeans, Vistive Gold) ",
        "Type": "Radiobox"
    },

    313: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Lat",
        "Question_Txt": "Bin Location GPS Latitude",
        "Type": "Textbox"
    },
    314: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Long",
        "Question_Txt": "Bin Location GPS Longitude",
        "Type": "Textbox"
    },
    315: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Lat2",
        "Question_Txt": "Bin Location 2 GPS Latitude",
        "Type": "Textbox"
    },
    316: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Long2",
        "Question_Txt": "Bin Location 2 GPS Longitude",
        "Type": "Textbox"
    },
    317: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Lat3",
        "Question_Txt": "Bin Location 3 GPS Latitude",
        "Type": "Textbox"
    },
    318: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Long3",
        "Question_Txt": "Bin Location 3 GPS Longitude",
        "Type": "Textbox"
    },
    319: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Lat4",
        "Question_Txt": "Bin Location 4 GPS Latitude",
        "Type": "Textbox"
    },
    320: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Long4",
        "Question_Txt": "Bin Location 4 GPS Longitude",
        "Type": "Textbox"
    },
    321: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Lat5",
        "Question_Txt": "Bin Location 5 GPS Latitude",
        "Type": "Textbox"
    },
    322: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Loc_GPS_Long5",
        "Question_Txt": "Bin Location 5 GPS Longitude",
        "Type": "Textbox"
    },

    323: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Same_Trait",
        "Question_Txt": "All soybeans stored at this bin site will be the same trait (RR2X or VG)?",
        "Type": "Radiobox"
    },
    324: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Independent",
        "Question_Txt": "Bin is independent, not connected to other bins via auger or leg systems?",
        "Type": "Radiobox"
    },
    325: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Load_System_Not_Used_For_Commodities",
        "Question_Txt": "will be loaded with an independent auger or leg system that will not be used for commodity soybeans?",
        "Type": "Radiobox"
    },

    326: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Same_Trait2",
        "Question_Txt": "All soybeans stored at this bin site will be the same trait (RR2X or VG)?",
        "Type": "Radiobox"
    },
    327: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Independent2",
        "Question_Txt": "Bin is independent, not connected to other bins via auger or leg systems?",
        "Type": "Radiobox"
    },
    328: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Load_System_Not_Used_For_Commodities2",
        "Question_Txt": "will be loaded with an independent auger or leg system that will not be used for commodity soybeans?",
        "Type": "Radiobox"
    },

    329: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Same_Trait3",
        "Question_Txt": "All soybeans stored at this bin site will be the same trait (RR2X or VG)?",
        "Type": "Radiobox"
    },
    330: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Independent3",
        "Question_Txt": "Bin is independent, not connected to other bins via auger or leg systems?",
        "Type": "Radiobox"
    },
    331: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Load_System_Not_Used_For_Commodities3",
        "Question_Txt": "will be loaded with an independent auger or leg system that will not be used for commodity soybeans?",
        "Type": "Radiobox"
    },

    332: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Same_Trait4",
        "Question_Txt": "All soybeans stored at this bin site will be the same trait (RR2X or VG)?",
        "Type": "Radiobox"
    },
    333: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Independent4",
        "Question_Txt": "Bin is independent, not connected to other bins via auger or leg systems?",
        "Type": "Radiobox"
    },
    334: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Load_System_Not_Used_For_Commodities4",
        "Question_Txt": "will be loaded with an independent auger or leg system that will not be used for commodity soybeans?",
        "Type": "Radiobox"
    },

    335: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Same_Trait5",
        "Question_Txt": "All soybeans stored at this bin site will be the same trait (RR2X or VG)?",
        "Type": "Radiobox"
    },
    336: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Independent5",
        "Question_Txt": "Bin is independent, not connected to other bins via auger or leg systems?",
        "Type": "Radiobox"
    },
    337: {
        "WorkflowID": "F14",
        "Req": "N",
        "Dependent": "",
        "Name": "Bin_Load_System_Not_Used_For_Commodities5",
        "Question_Txt": "will be loaded with an independent auger or leg system that will not be used for commodity soybeans?",
        "Type": "Radiobox"
    },

};

