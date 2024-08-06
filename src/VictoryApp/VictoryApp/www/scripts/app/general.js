/**
 * Created by hcasa on 10/25/2015.
 */


function Logoff() {

    $("#UserId").val('');
    $("#Password").val('');
    $("#TrialList").find("*").removeClass('RowClick');


    VictoryStorage.getWaitingToSyncData()
        .then(function (data) {

            if (data.length > 0) {

                //exists forms pending for synchronization
                alertify.alert("There are some forms that need to Sync before loging off");

            } else {

                //doesn't exists forms pending for synchronization
                VictoryStorage.Workflows.list()
                    .then(function (workflows) {

                        //TODO: ALL THIS VARIABLE HAVE TO BE KEEPT IN SYNC WITH login.LastTrialId
                        lastTrialId = 0;
                        lastTrialObject = null;

                        dvtitle.innerHTML = "";
                        dvcontainer.innerHTML = GetEmptyComplianceTable(workflows);
                        $('#CDashboardTrialNote').attr('onclick', '');
                    })
                    .then(function () {
                        return VictoryStorage.clear();
                    })
                    .then(
                        function (a, b, c) {
                            $.mobile.navigate('#Login');
                        },
                        function (a, b, c) {
                            alertify.alert("There was an error while cleanning up current user data");
                        });
            }
        });

}

//Scroll to Bottom
function ScrollBottom(parent, timed) {
    var main = $(parent);
    main.animate({scrollTop: main[0].scrollHeight}, timed);
}


//Set array of LocalStorage Data
function SetLocalStorageData(fortable, tableId, tablefieldId, dataJSON) {


}

//Set array of LocalStorage Data
function SetLocalStorageSingleData(fortable, tableId, tablefieldId, valueData, valueId) {

    var datacount = VictoryStorage.getLength();
    for (var i = 0; i < datacount; i++) {
        if (VictoryStorage.key(i).substr(0, VictoryStorage.key(i).lastIndexOf("_")) == fortable) {
            var key = VictoryStorage.key(i); //Get  the Key
            var trial = VictoryStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(trial); //Parse the Data back into the object
            if (data[tablefieldId] == tableId) { //If found is an update
                data[valueId] = valueData;
                VictoryStorage.setItem(key, JSON.stringify(data));
                return;
            }
        }
    }
}

//Get array of LocalStorage Data
function GetLocalStorageData(fromtable, tableId, tablefieldId, insensitive) {
    var datacount = VictoryStorage.getLength();
    for (var i = 0; i < datacount; i++) {
        if (VictoryStorage.key(i).substr(0, 3) == fromtable) {
            var key = VictoryStorage.key(i); //Get  the Key
            var trial = VictoryStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(trial); //Parse the Data back into the object
            if (!insensitive) {
                if (data[tablefieldId] == tableId) {
                    return data;
                }
            } else {
                if (data[tablefieldId].toUpperCase() == tableId.toUpperCase()) {
                    return data;
                }
            }
        }
    }
    return undefined;
}

//Get LocalStorage Key
function GetLocalStorageKey(fromtable, tableId, tablefieldId, insensitive) {
    var datacount = VictoryStorage.getLength();
    for (var i = 0; i < datacount; i++) {
        if (VictoryStorage.key(i).substr(0, 3) == fromtable) {
            var key = VictoryStorage.key(i); //Get  the Key
            var trial = VictoryStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(trial); //Parse the Data back into the object
            if (!insensitive) {
                if (data[tablefieldId] == tableId) {
                    return key;
                }
            } else {
                if (data[tablefieldId].toUpperCase() == tableId.toUpperCase()) {
                    return key;
                }
            }
        }
    }

}

//Get Max Number of LocalStorage Key
function GetMaxNum(fromtable) {
    var datacount = VictoryStorage.getLength();
    var tableNum = [];
    for (var i = 0; i < datacount; i++) {
        if (VictoryStorage.key(i).substr(0, 3) == fromtable) {
            var n = VictoryStorage.key(i).lastIndexOf("_");
            tableNum.push(VictoryStorage.key(i).substr(n + 1, 3));
        }
    }
    return Math.max.apply(Math, tableNum);
}

//Add leading zeros
function LeadZero(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

//Get Max Id from LocalStorage Value
function GetMaxID(fromtable, tablefield) {
    var datacount = VictoryStorage.getLength();
    var tableNum = [];
    for (var i = 0; i < datacount; i++) {
        if (VictoryStorage.key(i).substr(0, 3) == fromtable) {
            var key = VictoryStorage.key(i); //Get  the Key
            var trial = VictoryStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(trial); //Parse the Data back into the object
            tableNum.push(data[tablefield]);
        }
    }
    return Math.max.apply(Math, tableNum);
}

//Get Single Value from LocalStorage Data Array
function GetLocalStorageSingleData(fromtable, tableId, tablefieldId, returnfieldId, insensitive) {
    var datacount = VictoryStorage.getLength();
    for (var i = 0; i < datacount; i++) {
        if (VictoryStorage.key(i).substr(0, 3) == fromtable) {
            var key = VictoryStorage.key(i); //Get  the Key
            var trial = VictoryStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(trial); //Parse the Data back into the object
            if (!insensitive) {
                if (data[tablefieldId] == tableId) {
                    return data[returnfieldId];
                }
            } else {
                if (!data[tablefieldId]) {
                    if (data[tablefieldId] == tableId) {
                        return data[returnfieldId];
                    }
                } else {
                    if (data[tablefieldId].toUpperCase() == tableId.toUpperCase()) {
                        return data[returnfieldId];
                    }
                }
            }
        }
    }
    return undefined;
}

//Return Color Code
function GetColorNav(colorId) {
    if (colorId == 4) {
        return "Green";
    } else if (colorId == 3) {
        return "Blue";
    } else if (colorId == 2) {
        return "Red";
    } else if (colorId == 1) {
        return "Yellow";
    } else {
        return "Black";
    }
}

//Access Level
function AccessLevel(access) {
    if (access == 0) {
        $('.SRR').hide();
        $('.Admin').hide();
    } else if (access == 1 || access == 2 || access == 3) {
        $('.SRR').show();
        $('.Admin').hide();
    } else if (access == 4) {
        $('.SRR').show();
        $('.Admin').show();
    }
}

//File Selection
function FileSelection(event) {

    var x = document.getElementById(event.currentTarget.id);
    var input = event.target;

    lastAttachmentTypeObject = null;

    if (x.files.length == 0) {
    } else {
        for (var i = 0; i < x.files.length; i++) {
            var file = x.files[i];
            if ('name' in file) {
                filename = (file.name).substring(0, (file.name).lastIndexOf('.'));
                var extension = (file.name).substring((file.name).lastIndexOf('.') + 1);
                lastAttachmentTypeObject = AttachmentType.getByName(extension);
            }
            if ('size' in file) {
                size = Math.round(((file.size / 1000000) + 0.00001) * 100) / 100;
            }
        }
    }

    if (typeof lastAttachmentTypeObject === 'undefined' || lastAttachmentTypeObject == null) {
        alertify.alert("Please select a valid file type");
        x.value = "";
    } else if (size >= 4) {
        alertify.alert("Please select a file lower than 4 Mb");
        x.value = "";
    } else {

        //filling suffix variable
        suffix = lastAttachmentTypeObject.Name.toUpperCase();

        var reader = new FileReader();

        reader.onload = function (readerEvt) {
            var binaryString = readerEvt.target.result;
            BigPic = btoa(binaryString);

        };

        reader.readAsBinaryString(input.files[0]);
    }
}

//Get Decimal Places
function decimalPlaces(num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(
        0,
        // Number of digits right of decimal point.
        (match[1] ? match[1].length : 0)
            // Adjust for scientific notation.
        - (match[2] ? +match[2] : 0));
}

//Create tooltips
function ActiveTooltip() {
    // Tooltip only Text
    $('.masterTooltip').hover(function () {
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function () {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function (e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
            .css({top: mousey, left: mousex});
    });
}

//Remove extra decimal places
function RemoveExtraDecimalPlaces(from, size) {
    if (decimalPlaces($(from).val()) >= size) {
        $(from).val($(from).val().substring(0, $(from).val().length - 1));
    }
}

//Open Attachments
function OpenAttachment(FileID, Popup) {

    $.mobile.loading('show');

    GetAttachment(FileID)
        .done(function (data) {

            VictoryStorage.AttachmentTypes.get(data.AttachmentTypeID).done(function (attachmentTypeObject) {

                var dataType = "";
                if (data.AttachmentTypeID == 2) {
                    dataType = 'data:application/pdf;base64,';
                } else {
                    dataType = 'data:image/' + attachmentTypeObject.Name + ';base64,';
                }

                $(Popup).find('.attachDiv').html('<img id="attachImg" src="' + dataType + data.ContentAsBase64 + '" alt="Attachment"/>');

                var pzVars = {imageOptions: {scaleMode: 'full'}};
                $("#attachImg").pinchzoomer(pzVars);

                $.mobile.loading('hide');

                $(Popup).popup("open");

            });

        })
        .fail(function () {
            alertify.alert('You need to be connected to the Monsanto Network in order to download the file');
            $.mobile.loading('hide');
        });

}

//Delete Attachments
function RemoveAttachment(FileName, TrialID, WorkflowID) {

    var deferred = $.Deferred();

    DeleteAttachment(FileName, TrialID, WorkflowID)
        .done(function (data) {
            if (data.Success) {
                VictoryStorage.Attachments.delete(FileName, TrialID, WorkflowID)
                    .done(function () {
                        deferred.resolve(this, [data]);
                    })
                    .fail(function () {
                        deferred.reject();
                    });

            } else {
                alertify.alert("Error deleting attachment= " + data.ErrorDescription + " [" + data.ExceptionMessage + "]");
                deferred.reject();
            }
        })
        .fail(function () {
            alertify.alert('You need to be connected to the Monsanto Network in order to download the file');
            deferred.reject();
        });

    return deferred.promise();
}

function RemoveComplianceMapAttachment(FileName, TrialID, WorkflowID) {

    RemoveAttachment(FileName, TrialID, WorkflowID).done(function () {
        var sphb1 = $('#Compliance_Map_Attachmentlbl_Div');
        var sphb2 = $('#Compliance_Map_Attachment_Div');
        var sphb3 = $('#Compliance_Map_Attachment_linklbl_Div');
        var sphb4 = $('#Compliance_Map_Attachment_link_Div');
        sphb1.show();
        sphb2.show();
        sphb3.hide();
        sphb4.hide();
        $('#Compliance_Map_Attachment_link').text('');
    });

}

function RemoveComplianceAttachment(FileName, TrialID, WorkflowID) {

    RemoveAttachment(FileName, TrialID, WorkflowID).done(function () {
        var sphb1 = $('#Compliance_Exceptions_AttachmentYeslbl');
        var sphb2 = $('#Compliance_Exceptions_AttachmentYes');
        var sphb3 = $('#Compliance_Attachmentslbl');
        var sphb4 = $('#Compliance_Attachments');
        sphb1.show();
        sphb2.show();
        sphb3.hide();
        sphb4.hide();
        $('#Compliance_Attachments_link').text('');
    });

}


//Numbers Only
//TODO: move out from document ready event
$(document).ready(function () {
    $('.NumberOnly').keypress(function (key) {
        if (key.charCode >= 48 && key.charCode <= 57) {
            return true;
        } else if (key.charCode == 45) {
            if ($(this).val().indexOf('-') == -1 && $(this).val().length == 0) {
                return true;
            }
        } else if (key.charCode == 46) {
            if ($(this).val().indexOf('.') == -1) {
                return true;
            }
        } else {
            return false;
        }
        return false;
    });

    $('.WholeNumberOnly').keypress(function (key) {
        if (key.charCode >= 48 && key.charCode <= 57) {
            return true;
        }
        else {
            return false;
        }
    });

});


//Get Answer from the forms
function getAnswerApp(questionId) {
    if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Textbox' || QUESTION_ARRAY[questionId.toString()]["Type"] === 'Datebox') {
        if ($("#" + QUESTION_ARRAY[questionId.toString()]["Name"]).val() == null) {
            return "";
        } else {
            return $("#" + QUESTION_ARRAY[questionId.toString()]["Name"]).val().toString();
        }
    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'MultiCheck') {

        //MultiCheck uses class selectors instead of id selectors
        var questionName = QUESTION_ARRAY[questionId.toString()]["Name"];
        if ($("." + questionName + "Checkbox:checked").map(function () {
                return this.value;
            }).get().join(",") == "") {
            return "";
        } else {
            return $("." + questionName + "Checkbox:checked").map(function () {
                return this.value;
            }).get().join(",");
        }
    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Dropdown') {
        if ($("#" + QUESTION_ARRAY[questionId.toString()]["Name"]).val() == null) {
            return "1015";
        } else {
            return $("#" + QUESTION_ARRAY[questionId.toString()]["Name"]).val().toString();
        }
    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Radiobox') {
        return ((typeof $("#" + QUESTION_ARRAY[questionId.toString()]["Name"] + " :radio:checked").val() === 'undefined') ? "1015" : $("#" + QUESTION_ARRAY[questionId.toString()]["Name"] + " :radio:checked").val().toString());
    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Checkbox') {
        return $("#" + QUESTION_ARRAY[questionId.toString()]["Name"]).prop("checked").toString();
    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Filebox') {
        return filename;
    }
    return "";
}

function getQuestion(questionId) {

    return QUESTION_ARRAY[questionId.toString()]["Question_Txt"];

}

function getName(questionId) {

    return QUESTION_ARRAY[questionId.toString()]["Name"];

}

function getResponseValue(trial, formId, questionId) {

    if (questionId > 9900) {
        for (var i = 0; i < trial.Attachments.length; i++) {
            var a = trial.Attachments[i];
            if (a.WorkflowId == formId) {
                return a.Name;
            }
        }
    } else if (questionId > 8800) {
        for (var i = 0; i < trial.Attachments.length; i++) {
            var a = trial.Attachments[i];
            if (a.WorkflowId == formId) {
                return a.AttachmentId;
            }
        }
    } else {
        for (var i = 0; i < trial.Responses.length; i++) {
            var r = trial.Responses[i];
            if (r.WorkflowId == formId && r.QuestionId == questionId) {
                return r.ResponseValue;
            }
        }
    }
}

//Set Answer
function setAnswer(questionId, formId, trial) {
    if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Textbox') {

        var workflowID = QUESTION_ARRAY[questionId.toString()]["WorkflowID"];
        var questionName = QUESTION_ARRAY[questionId.toString()]["Name"];
        $("#" + questionName).val(getResponseValue(trial, formId, questionId));

    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'MultiCheck') {

        var workflowID = QUESTION_ARRAY[questionId.toString()]["WorkflowID"];
        var questionName = QUESTION_ARRAY[questionId.toString()]["Name"];
        var data = getResponseValue(trial, formId, questionId);

        if (typeof data != "undefined") {
            var a = data.split(',');
            if (typeof a != "undefined") {
                for (var i = 0; i < a.length; i++) {
                    $("." + QUESTION_ARRAY[questionId.toString()]["Name"] + "Checkbox").each(function (index) {
                        if (this.value == a[i]) {
                            $('#' + this.id).prop('checked', true);
                        }
                    });
                }
            }
        }

    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Dropdown') {

        //var workflowID = QUESTION_ARRAY[questionId.toString()]["WorkflowID"];
        //var questionName = QUESTION_ARRAY[questionId.toString()]["Name"];
        var value = getResponseValue(trial, formId, questionId);
        var control = "#" + QUESTION_ARRAY[questionId.toString()]["Name"];
        $(control).val(value);

    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Datebox') {

        $("#" + QUESTION_ARRAY[questionId.toString()]["Name"]).val(getResponseValue(trial, formId, questionId));

    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Radiobox') {

        var workflowID = QUESTION_ARRAY[questionId.toString()]["WorkflowID"];
        var questionName = QUESTION_ARRAY[questionId.toString()]["Name"];
        var responseValue = getResponseValue(trial, formId, questionId);
        if (typeof responseValue != "undefined") {
            $("input[name=" + questionName + "Radio][value=" + responseValue + "]").prop('checked', true);
        }

    } else if (QUESTION_ARRAY[questionId.toString()]["Type"] === 'Checkbox') {

        if (getResponseValue(trial, formId, questionId) != "1015") {
            $("#" + QUESTION_ARRAY[questionId.toString()]["Name"]).prop('checked', true);
        }

    }
}

//Saving to localStorage
function SaveToLocal(workflowId, formCodeName, landingform, locked) {

    var trialId = lastTrialObject.TrialId;
    $.when(VictoryStorage.saveFormData(trialId, workflowId, locked, responses))
        .then(function () {
            alertify.alert('Record Saved.', function () {
                if (landingform != "" && locked == 1) {

                    VictoryStorage.Trials.getWithTrialProgress(trialId)
                        .then(function (trial) {
                            lastTrialObject = trial;
                        })
                        .then(function () {
                            var i, len, status = [];
                            for (i = 0, len = lastTrialObject.Progress.length; i < len; i += 1) {

                                var progress = lastTrialObject.Progress[i];

                                //fill status array with lock status only
                                status[progress.WorkflowId] = progress.Locked;
                            }

                            NavClick(Form.getFormId(formCodeName), formCodeName, trialId, JSON.stringify(status));
                        });

                } else {
                    $.mobile.changePage('#Dashboard');
                }
            });
        });

}

//Set form data
function SetFormData(workflowID) {
    var Q_Array = Forms_Questions_Id[workflowID];
    for (var R = 0; R < Q_Array.length; R++) {
        formdata[getName(Q_Array[R])] = getAnswerApp(Q_Array[R]);
    }
}

//Set form data
function SetResponses(workflowID) {
    var Q_Array = Forms_Questions_Id[workflowID];
    for (var R = 0; R < Q_Array.length; R++) {
        responses.push({
            "QuestionID": Q_Array[R],
            "ResponseValue": getAnswerApp(Q_Array[R])
        });
    }
}

//Check for data Array Completion
//function IsDataArrayCompleted(workflowId, dataArray) {
//
//    var INCOMPLETE = 0;
//    var Q_Array = Forms_Questions_Id[workflowId];
//    for (var R1 = 0; R1 < Q_Array.length; R1++) {
//        if (QUESTION_ARRAY[Q_Array[R1].toString()]["Req"] == "Y") {
//            if (QUESTION_ARRAY[Q_Array[R1].toString()]["Dependent"].length != 0) {
//                var dependent = QUESTION_ARRAY[Q_Array[R1].toString()]["Dependent"].split(',');
//                var istrue = 0;
//                for (var R2 = 0; R2 < dependent.length; R2++) {
//                    var dependentVar = dependent[R2].split('|');
//                    var multianswer = dependentVar[1].split(';');
//
//                    for (var R3 = 0; R3 < multianswer.length; R3++) {
//                        if (dataArray[QUESTION_ARRAY[dependentVar[0].toString()]["Name"]] == multianswer[R3]) {
//                            istrue += 1;
//                        }
//                    }
//                }
//                if (istrue == dependent.length) {
//                    if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Textbox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Datebox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'MultiCheck') {
//                        if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "") {
//                            INCOMPLETE += 1;
//                        }
//                    } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Dropdown' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Radiobox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Checkbox') {
//                        if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "1015") {
//                            INCOMPLETE += 1;
//                        }
//                    }
//                }
//            } else {
//                if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Textbox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Datebox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'MultiCheck') {
//                    if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "") {
//                        INCOMPLETE += 1;
//                    }
//                } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Dropdown' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Radiobox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Checkbox') {
//                    if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "1015") {
//                        INCOMPLETE += 1;
//                    }
//                }
//            }
//        }
//    }
//
//    if (workflowId == 12) {
//        var materialStoredIn = dataArray[QUESTION_ARRAY[271]["Name"]];
//        if (materialStoredIn == "1047" ||
//            materialStoredIn == "1048") {
//            if (dataArray[QUESTION_ARRAY[272]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//
//            if (dataArray[QUESTION_ARRAY[278]["Name"]] == 1015) {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[347]["Name"]] == 1015) {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[279]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[280]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//
//        }
//
//        var equipmentCleanedOut = dataArray[QUESTION_ARRAY[273]["Name"]];
//        if (equipmentCleanedOut == "1001") {
//            if (dataArray[QUESTION_ARRAY[344]["Name"]] == 1015) {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[345]["Name"]] == 1015) {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[276]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[277]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//        }
//        else if (equipmentCleanedOut == "1060") {
//            if (dataArray[QUESTION_ARRAY[274]["Name"]] == 1015) {
//                INCOMPLETE += 1;
//            }
//        }
//
//    }
//    else if (workflowId == 14) {
//
//        var trialUseBin = dataArray[QUESTION_ARRAY[282]["Name"]];
//        if (trialUseBin == 1001) {
//
//            if (dataArray[QUESTION_ARRAY[171]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[172]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[283]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[284]["Name"]] == "1015") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[285]["Name"]] == "1015") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[286]["Name"]] == "1015") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[288]["Name"]] == "1015") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[188]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[313]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[314]["Name"]] == "") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[323]["Name"]] == "1015") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[324]["Name"]] == "1015") {
//                INCOMPLETE += 1;
//            }
//            if (dataArray[QUESTION_ARRAY[325]["Name"]] == "1015") {
//                INCOMPLETE += 1;
//            }
//
//            if (!IsDataArrayBinInspection2Empty(dataArray)) {
//                if (dataArray[QUESTION_ARRAY[189]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[190]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[289]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[290]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[291]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[292]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[294]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[206]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[315]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[316]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[326]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[327]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[328]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//            }
//
//            if (!IsDataArrayBinInspection3Empty(dataArray)) {
//                if (dataArray[QUESTION_ARRAY[207]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[208]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[295]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[296]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[297]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[298]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[300]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[224]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[317]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[318]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[329]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[330]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[331]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//            }
//
//            if (!IsDataArrayBinInspection4Empty(dataArray)) {
//                if (dataArray[QUESTION_ARRAY[225]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[226]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[301]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[302]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[303]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[304]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[306]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[242]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[319]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[320]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[332]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[333]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[334]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//            }
//
//            if (!IsDataArrayBinInspection5Empty(dataArray)) {
//                if (dataArray[QUESTION_ARRAY[243]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[244]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[307]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[308]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[309]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[310]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[312]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[260]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[321]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[322]["Name"]] == "") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[335]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[336]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//                if (dataArray[QUESTION_ARRAY[337]["Name"]] == "1015") {
//                    INCOMPLETE += 1;
//                }
//
//            }
//        }
//    }
//
//    if (INCOMPLETE == 0) {
//        return true;
//    } else {
//        return false;
//    }
//
//}

//Check forms for incomplete state
function CheckIncomplete(workflowID, locked) {
    var Q_Array = Forms_Questions_Id[workflowID];
    for (var R1 = 0; R1 < Q_Array.length; R1++) {
        if (QUESTION_ARRAY[Q_Array[R1].toString()]["Req"] == "Y") {
            if (QUESTION_ARRAY[Q_Array[R1].toString()]["Dependent"].length != 0) {
                var dependent = QUESTION_ARRAY[Q_Array[R1].toString()]["Dependent"].split(',');
                var istrue = 0;
                for (var R2 = 0; R2 < dependent.length; R2++) {
                    var dependentVar = dependent[R2].split('|');
                    var multianswer = dependentVar[1].split(';');

                    for (var R3 = 0; R3 < multianswer.length; R3++) {
                        if (getAnswerApp(dependentVar[0]) == multianswer[R3]) {
                            istrue += 1;
                            break;
                        }
                    }
                }
                if (istrue == dependent.length) {
                    if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Textbox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Datebox') {
                        if (getAnswerApp(Q_Array[R1]) == "") {
                            incomplete += 1;
                            missing += "<br/>*" + getQuestion(Q_Array[R1]) + ",";
                        }
                    } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'MultiCheck') {
                        if ($("input[name=" + QUESTION_ARRAY[Q_Array[R1].toString()]["Name"] + "Checkbox]:checked").map(function () {
                                return this.value;
                            }).get().join(",") == "") {
                            incomplete += 1;
                            missing += "<br/>*" + getQuestion(Q_Array[R1]) + ",";
                        }
                    } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Dropdown' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Radiobox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Checkbox') {
                        if (getAnswerApp(Q_Array[R1]) == "1015") {
                            incomplete += 1;
                            missing += "<br/>*" + getQuestion(Q_Array[R1]) + ",";
                        }
                    }
                }
            } else {
                if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Textbox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Datebox') {
                    if (getAnswerApp(Q_Array[R1]) == "") {
                        incomplete += 1;
                        missing += "<br/>*" + getQuestion(Q_Array[R1]) + ",";
                    }
                } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'MultiCheck') {
                    if ($("input[name=" + QUESTION_ARRAY[Q_Array[R1].toString()]["Name"] + "Checkbox]:checked").map(function () {
                            return this.value;
                        }).get().join(",") == "") {
                        incomplete += 1;
                        missing += "<br/>*" + getQuestion(Q_Array[R1]) + ",";
                    }
                } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Dropdown' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Radiobox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Checkbox') {
                    if (getAnswerApp(Q_Array[R1]) == "1015") {
                        incomplete += 1;
                        missing += "<br/>*" + getQuestion(Q_Array[R1]) + ",";
                    }
                }
            }
        }
    }


    if (workflowID == 12) {
        //Harvest_and_Destruct: check completed (see too status icon logic)

        var materialStoredIn = getAnswerApp(271);
        if (materialStoredIn == "1047" ||
            materialStoredIn == "1048") {
            if (getAnswerApp(272) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(272) + ",";
            }

            if (getAnswerApp(278) == 1015) {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(278) + ",";
            }
            if (getAnswerApp(347) == 1015) {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(347) + ",";
            }
            if (getAnswerApp(279) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(279) + ",";
            }
            if (getAnswerApp(280) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(280) + ",";
            }

        }

        var equipmentCleanedOut = getAnswerApp(273);
        if (equipmentCleanedOut == "1001") {
            if (getAnswerApp(344) == 1015) {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(344) + ",";
            }
            if (getAnswerApp(345) == 1015) {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(345) + ",";
            }
            if (getAnswerApp(276) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(276) + ",";
            }
            if (getAnswerApp(277) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(277) + ",";
            }
        }
        else if (equipmentCleanedOut == "1060") {
            if (getAnswerApp(274) == 1015) {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(274) + ",";
            }
        }

    }
    else if (workflowID == 14) {

        //Automatic above code doesn't checks for bin inspections #2,3,4,5 whetever they exists
        //so check by code it's needed.

        var trialUseBin = getAnswerApp(282);
        if (trialUseBin == 1001) {

            if (getAnswerApp(171) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(171) + ",";
            }
            if (getAnswerApp(172) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(172) + ",";
            }

            if (getAnswerApp(283) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(283) + ",";
            }
            if (getAnswerApp(284) == "1015") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(284) + ",";
            }
            if (getAnswerApp(285) == "1015") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(285) + ",";
            }
            if (getAnswerApp(286) == "1015") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(286) + ",";
            }
            //if (getAnswerApp(287) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(287) + ","; }
            if (getAnswerApp(288) == "1015") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(288) + ",";
            }

            //if (getAnswerApp(173) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(173) + ","; }
            //if (getAnswerApp(174) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(174) + ","; }
            //if (getAnswerApp(175) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(175) + ","; }
            //if (getAnswerApp(176) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(176) + ","; }
            //if (getAnswerApp(177) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(177) + ","; }
            //if (getAnswerApp(178) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(178) + ","; }
            //if (getAnswerApp(179) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(179) + ","; }
            //if (getAnswerApp(180) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(180) + ","; }
            //if (getAnswerApp(181) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(181) + ","; }
            //if (getAnswerApp(182) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(182) + ","; }
            //if (getAnswerApp(183) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(183) + ","; }
            //if (getAnswerApp(184) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(184) + ","; }
            //if (getAnswerApp(185) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(185) + ","; }
            //if (getAnswerApp(186) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(186) + ","; }
            //if (getAnswerApp(187) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(187) + ","; }
            if (getAnswerApp(188) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(188) + ",";
            }

            if (getAnswerApp(313) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(313) + ",";
            }
            if (getAnswerApp(314) == "") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(314) + ",";
            }

            if (getAnswerApp(323) == "1015") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(323) + ",";
            }
            if (getAnswerApp(324) == "1015") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(324) + ",";
            }
            if (getAnswerApp(325) == "1015") {
                incomplete += 1;
                missing += "<br/>*" + getQuestion(325) + ",";
            }


            if (IsBinInspection2Incomplete()) {
                if (getAnswerApp(189) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(189) + ",";
                }
                if (getAnswerApp(190) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(190) + ",";
                }

                if (getAnswerApp(289) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(289) + ",";
                }
                if (getAnswerApp(290) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(290) + ",";
                }
                if (getAnswerApp(291) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(291) + ",";
                }
                if (getAnswerApp(292) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(292) + ",";
                }
                //if (getAnswerApp(293) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(293) + ","; }
                if (getAnswerApp(294) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(294) + ",";
                }

                //if (getAnswerApp(191) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(191) + ","; }
                //if (getAnswerApp(192) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(192) + ","; }
                //if (getAnswerApp(193) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(193) + ","; }
                //if (getAnswerApp(194) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(194) + ","; }
                //if (getAnswerApp(195) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(195) + ","; }
                //if (getAnswerApp(196) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(196) + ","; }
                //if (getAnswerApp(197) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(197) + ","; }
                //if (getAnswerApp(198) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(198) + ","; }
                //if (getAnswerApp(199) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(199) + ","; }
                //if (getAnswerApp(200) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(200) + ","; }
                //if (getAnswerApp(201) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(201) + ","; }
                //if (getAnswerApp(202) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(202) + ","; }
                //if (getAnswerApp(203) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(203) + ","; }
                //if (getAnswerApp(204) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(204) + ","; }
                //if (getAnswerApp(205) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(205) + ","; }
                if (getAnswerApp(206) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(206) + ",";
                }

                if (getAnswerApp(315) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(315) + ",";
                }
                if (getAnswerApp(316) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(316) + ",";
                }

                if (getAnswerApp(326) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(326) + ",";
                }
                if (getAnswerApp(327) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(327) + ",";
                }
                if (getAnswerApp(328) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(328) + ",";
                }

            }

            if (IsBinInspection3Incomplete()) {
                if (getAnswerApp(207) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(207) + ",";
                }
                if (getAnswerApp(208) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(208) + ",";
                }

                if (getAnswerApp(295) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(295) + ",";
                }
                if (getAnswerApp(296) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(296) + ",";
                }
                if (getAnswerApp(297) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(297) + ",";
                }
                if (getAnswerApp(298) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(298) + ",";
                }
                //if (getAnswerApp(299) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(299) + ","; }
                if (getAnswerApp(300) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(300) + ",";
                }

                //if (getAnswerApp(209) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(209) + ","; }
                //if (getAnswerApp(210) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(210) + ","; }
                //if (getAnswerApp(211) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(211) + ","; }
                //if (getAnswerApp(212) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(212) + ","; }
                //if (getAnswerApp(213) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(213) + ","; }
                //if (getAnswerApp(214) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(214) + ","; }
                //if (getAnswerApp(215) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(215) + ","; }
                //if (getAnswerApp(216) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(216) + ","; }
                //if (getAnswerApp(217) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(217) + ","; }
                //if (getAnswerApp(218) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(218) + ","; }
                //if (getAnswerApp(219) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(219) + ","; }
                //if (getAnswerApp(220) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(220) + ","; }
                //if (getAnswerApp(221) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(221) + ","; }
                //if (getAnswerApp(222) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(222) + ","; }
                //if (getAnswerApp(223) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(223) + ","; }
                if (getAnswerApp(224) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(224) + ",";
                }

                if (getAnswerApp(317) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(317) + ",";
                }
                if (getAnswerApp(318) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(318) + ",";
                }

                if (getAnswerApp(329) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(329) + ",";
                }
                if (getAnswerApp(330) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(330) + ",";
                }
                if (getAnswerApp(331) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(331) + ",";
                }

            }

            if (IsBinInspection4Incomplete()) {
                if (getAnswerApp(225) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(225) + ",";
                }
                if (getAnswerApp(226) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(226) + ",";
                }

                if (getAnswerApp(301) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(301) + ",";
                }
                if (getAnswerApp(302) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(302) + ",";
                }
                if (getAnswerApp(303) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(303) + ",";
                }
                if (getAnswerApp(304) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(304) + ",";
                }
                //if (getAnswerApp(305) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(305) + ","; }
                if (getAnswerApp(306) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(306) + ",";
                }

                //if (getAnswerApp(227) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(227) + ","; }
                //if (getAnswerApp(228) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(228) + ","; }
                //if (getAnswerApp(229) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(229) + ","; }
                //if (getAnswerApp(230) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(230) + ","; }
                //if (getAnswerApp(231) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(231) + ","; }
                //if (getAnswerApp(232) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(232) + ","; }
                //if (getAnswerApp(233) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(233) + ","; }
                //if (getAnswerApp(234) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(234) + ","; }
                //if (getAnswerApp(235) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(235) + ","; }
                //if (getAnswerApp(236) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(236) + ","; }
                //if (getAnswerApp(237) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(237) + ","; }
                //if (getAnswerApp(238) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(238) + ","; }
                //if (getAnswerApp(239) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(239) + ","; }
                //if (getAnswerApp(240) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(240) + ","; }
                //if (getAnswerApp(241) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(241) + ","; }
                if (getAnswerApp(242) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(242) + ",";
                }

                if (getAnswerApp(319) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(319) + ",";
                }
                if (getAnswerApp(320) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(320) + ",";
                }

                if (getAnswerApp(332) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(332) + ",";
                }
                if (getAnswerApp(333) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(333) + ",";
                }
                if (getAnswerApp(334) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(334) + ",";
                }

            }

            if (IsBinInspection5Incomplete()) {
                if (getAnswerApp(243) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(243) + ",";
                }
                if (getAnswerApp(244) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(244) + ",";
                }

                if (getAnswerApp(307) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(307) + ",";
                }
                if (getAnswerApp(308) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(308) + ",";
                }
                if (getAnswerApp(309) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(309) + ",";
                }
                if (getAnswerApp(310) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(310) + ",";
                }
                //if (getAnswerApp(311) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(311) + ","; }
                if (getAnswerApp(312) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(312) + ",";
                }

                //if (getAnswerApp(245) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(245) + ","; }
                //if (getAnswerApp(246) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(246) + ","; }
                //if (getAnswerApp(247) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(247) + ","; }
                //if (getAnswerApp(248) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(248) + ","; }
                //if (getAnswerApp(249) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(249) + ","; }
                //if (getAnswerApp(250) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(250) + ","; }
                //if (getAnswerApp(251) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(251) + ","; }
                //if (getAnswerApp(252) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(252) + ","; }
                //if (getAnswerApp(253) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(253) + ","; }
                //if (getAnswerApp(254) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(254) + ","; }
                //if (getAnswerApp(255) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(255) + ","; }
                //if (getAnswerApp(256) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(256) + ","; }
                //if (getAnswerApp(257) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(257) + ","; }
                //if (getAnswerApp(258) == "1015") { incomplete += 1; missing += "<br/>*" + getQuestion(258) + ","; }
                //if (getAnswerApp(259) == "") { incomplete += 1; missing += "<br/>*" + getQuestion(259) + ","; }
                if (getAnswerApp(260) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(260) + ",";
                }

                if (getAnswerApp(321) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(321) + ",";
                }
                if (getAnswerApp(322) == "") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(322) + ",";
                }

                if (getAnswerApp(335) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(335) + ",";
                }
                if (getAnswerApp(336) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(336) + ",";
                }
                if (getAnswerApp(337) == "1015") {
                    incomplete += 1;
                    missing += "<br/>*" + getQuestion(337) + ",";
                }

            }
        }
    }


    //reduce missing fields alert
    missing = missing.substring(0, missing.length - 1);

    var regcount = new RegExp('<br/>', 'g');
    var count = (missing.match(regcount) || []).length;
    if (count > 7) {
        missing = missing.substr(0, getPosition(missing, "<br/>", 7));
        missing += "<br/>More...";
    }

    //Set incomplete status id
    if (incomplete >= 1) {
        formdashboard = 1;
    } else {
        formdashboard = 3;
    }

    if (formdashboard != 3 && locked == 1) {
        alertify.alert("Please complete these questions: <br/>" + missing + " <br/><br/>before trying to Lock it.  Thanks");
    } else {

        if (formdashboard == 3 && locked == 1) {
            formdashboard = 4;
        }

        SendForm(workflowID, "form", formdashboard, locked);
    }
}

function IsBinInspection2Incomplete() {
    var val = $("#Add_Other_Bin :radio:checked").val();
    if (val != LookUp.YES) return false;

    if (getAnswerApp(189) == ""
        || getAnswerApp(190) == ""
            //|| getAnswerApp(205) == ""
        || getAnswerApp(206) == ""
        || getAnswerApp(289) == ""
        || getAnswerApp(290) == 1015
        || getAnswerApp(291) == 1015
        || getAnswerApp(292) == 1015
        || getAnswerApp(294) == 1015
        || getAnswerApp(315) == ""
        || getAnswerApp(316) == ""
        || getAnswerApp(326) == 1015
        || getAnswerApp(327) == 1015
        || getAnswerApp(328) == 1015
    ) {
        return true;
    }
    else {
        return false;
    }
}

function IsBinInspection3Incomplete() {

    var val = $("#Add_Other_Bin2 :radio:checked").val();
    if (val != LookUp.YES) return false;

    if (getAnswerApp(207) == ""
        || getAnswerApp(208) == ""
            //|| getAnswerApp(223) == ""
        || getAnswerApp(224) == ""
        || getAnswerApp(295) == ""
        || getAnswerApp(296) == 1015
        || getAnswerApp(297) == 1015
        || getAnswerApp(298) == 1015
        || getAnswerApp(300) == 1015
        || getAnswerApp(317) == ""
        || getAnswerApp(318) == ""
        || getAnswerApp(329) == 1015
        || getAnswerApp(330) == 1015
        || getAnswerApp(331) == 1015) {
        return true;
    }
    else {
        return false;
    }
}

function IsBinInspection4Incomplete() {

    var val = $("#Add_Other_Bin3 :radio:checked").val();
    if (val != LookUp.YES) return false;

    if (getAnswerApp(225) == ""
        || getAnswerApp(226) == ""
            //|| getAnswerApp(241) == ""
        || getAnswerApp(242) == ""
        || getAnswerApp(301) == ""
        || getAnswerApp(302) == 1015
        || getAnswerApp(303) == 1015
        || getAnswerApp(304) == 1015
        || getAnswerApp(306) == 1015
        || getAnswerApp(319) == ""
        || getAnswerApp(320) == ""
        || getAnswerApp(332) == 1015
        || getAnswerApp(333) == 1015
        || getAnswerApp(334) == 1015) {
        return true;
    }
    else {
        return false;
    }
}

function IsBinInspection5Incomplete() {

    var val = $("#Add_Other_Bin4 :radio:checked").val();
    if (val != LookUp.YES) return false;

    if (getAnswerApp(243) == ""
        || getAnswerApp(244) == ""
            //|| getAnswerApp(259) == ""
        || getAnswerApp(260) == ""
        || getAnswerApp(307) == ""
        || getAnswerApp(308) == 1015
        || getAnswerApp(309) == 1015
        || getAnswerApp(310) == 1015
        || getAnswerApp(312) == 1015
        || getAnswerApp(321) == ""
        || getAnswerApp(322) == ""
        || getAnswerApp(335) == 1015
        || getAnswerApp(336) == 1015
        || getAnswerApp(337) == 1015) {
        return true;
    }
    else {
        return false;
    }
}

//Create SendAPI JSON String
function CreateJSONtoSend(workflowId, statusId) {

    var questionsJSON = '';
    var Q_Array = Forms_Questions_Id[workflowId];
    var dataArray = [];
    for (var R = 0; R < Q_Array.length; R++) {
        if (Q_Array[R] < 8800) {
            questionsJSON += '{"QuestionID": ' + Q_Array[R] + ',"ResponseValue": "' + getAnswerApp(Q_Array[R]) + '"},';
            dataArray[QUESTION_ARRAY[Q_Array[R].toString()]["Name"]] = getAnswerApp(Q_Array[R]);
        }
    }

    if (questionsJSON.length > 0) {
        questionsJSON = questionsJSON.substring(0, questionsJSON.length - 1);
    }

    debugger;

    var JSONString = '{"TrialID": ' + lastTrialId + ',"WorkflowID": ' + workflowId
        + ', "UserID": ' + localUserData.UserId
        + ', "CurrentUserAlias": "' + localUserData.UserAlias + '"'
        + ', "Locked": ' + (statusId == 4 ? "true" : "false")
        + ', "Answered": ' + Form.isDataArrayCompleted(workflowId, dataArray)
        + ', "Responses": [' + questionsJSON + ']}';

    return JSONString;
}

function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
}


function IsDataArrayBinInspection2Empty(dataArray) {

    if (dataArray[QUESTION_ARRAY[189]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[190]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[289]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[290]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[291]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[292]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[294]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[206]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[315]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[316]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[326]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[327]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[328]["Name"]] == "1015") {
        return true;
    } else {
        return false;
    }
}


function IsDataArrayBinInspection3Empty(dataArray) {

    if (dataArray[QUESTION_ARRAY[207]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[208]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[295]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[296]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[297]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[298]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[300]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[224]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[317]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[318]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[329]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[330]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[331]["Name"]] == "1015") {
        return true;
    } else {
        return false;
    }
}


function IsDataArrayBinInspection4Empty(dataArray) {

    if (dataArray[QUESTION_ARRAY[225]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[226]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[301]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[302]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[303]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[304]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[306]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[242]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[319]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[320]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[332]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[333]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[334]["Name"]] == "1015") {
        return true;
    } else {
        return false;
    }
}

function IsDataArrayBinInspection5Empty(dataArray) {

    if (dataArray[QUESTION_ARRAY[243]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[244]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[307]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[308]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[309]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[310]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[312]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[260]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[321]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[322]["Name"]] == "" &&
        dataArray[QUESTION_ARRAY[335]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[336]["Name"]] == "1015" &&
        dataArray[QUESTION_ARRAY[337]["Name"]] == "1015") {
        return true;
    } else {
        return false;
    }
}

function UpdateVictoryAppStatus() {

    var deferred = $.Deferred();

    GetAPIHealthStatus()
        .then(
            function (health) {
                if (health.Success) {
                    VictoryApp.Status = health.Status;
                    VictoryApp.IsOnLine = true;
                } else {
                    VictoryApp.Status = null;
                    VictoryApp.IsOnLine = false;
                }

                deferred.resolve();

            }, function () {
                VictoryApp.Status = null;
                VictoryApp.IsOnLine = false;

                deferred.resolve();

            });

    return deferred.promise();
}

function MustAppBeUpdated() {

    if (VictoryApp.IsOnLine == false){
        //I cannot define if app must be updated
        return false;
    }

    if (VictoryApp.Status == null) {
        log.debug("Victory.Status shouldn't be null");
        if (DisplayLogsAsAlerts) {
            alert("Victory.Status shouldn't be null");
        }

        return true;
    }

    if (typeof VictoryApp.Status.AppMaxVersion === 'undefined' || VictoryApp.Status.AppMaxVersion == null) {
        log.debug("VictoryApp.Status.AppMaxVersion should be defined into database");
        if (DisplayLogsAsAlerts) {
            alert("VictoryApp.Status.AppMaxVersion should be defined into database");
        }

        return true;
    }

    if (typeof VictoryApp.Status.AppMinVersion === 'undefined' || VictoryApp.Status.AppMinVersion == null) {
        log.debug("VictoryApp.Status.AppMinVersion should be defined into database");
        if (DisplayLogsAsAlerts) {
            alert("VictoryApp.Status.AppMinVersion should be defined into database");
        }

        return true;
    }

    var currentAppVersion = AppVersion.createFromString(VictoryApp.AppVersion);
    var maxAppVersion = AppVersion.createFromString(VictoryApp.Status.AppMaxVersion);
    var minAppVersion = AppVersion.createFromString(VictoryApp.Status.AppMinVersion);

    if (maxAppVersion.isGreatOrEquals(currentAppVersion)
        && minAppVersion.isLessOrEquals(currentAppVersion)) {

        return false;

    } else {

        return true;

    }

}

//setting up log4javascript
var log = log4javascript.getLogger("VictoryApp");
var browserConsoleAppender = new log4javascript.BrowserConsoleAppender();
var timestampLayout = new log4javascript.PatternLayout("[%-5p] [%d{yyyy-MM-dd'T'HH:mm:ss.SSS}] %m");
browserConsoleAppender.setLayout(timestampLayout);
log.addAppender(browserConsoleAppender);