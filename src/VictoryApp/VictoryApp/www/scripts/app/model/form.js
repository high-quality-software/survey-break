
/**
 * Created by hcasa on 09/22/2015.
 */

var Form = Object.create({});

Form.isDataArrayCompleted = function (workflowId, dataArray) {

    var INCOMPLETE = 0;
    var Q_Array = Forms_Questions_Id[workflowId];
    for (var R1 = 0; R1 < Q_Array.length; R1++) {
        if (QUESTION_ARRAY[Q_Array[R1].toString()]["Req"] == "Y") {
            if (QUESTION_ARRAY[Q_Array[R1].toString()]["Dependent"].length != 0) {
                var dependent = QUESTION_ARRAY[Q_Array[R1].toString()]["Dependent"].split(',');
                var istrue = 0;
                for (var R2 = 0; R2 < dependent.length; R2++) {
                    var dependentVar = dependent[R2].split('|');
                    var multianswer = dependentVar[1].split(';');

                    for (var R3 = 0; R3 < multianswer.length; R3++) {
                        if (dataArray[QUESTION_ARRAY[dependentVar[0].toString()]["Name"]] == multianswer[R3]) {
                            istrue += 1;
                        }
                    }
                }
                if (istrue == dependent.length) {
                    if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Textbox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Datebox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'MultiCheck') {
                        if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "") {
                            INCOMPLETE += 1;
                        }
                    } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Dropdown' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Radiobox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Checkbox') {
                        if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "1015") {
                            INCOMPLETE += 1;
                        }
                    }
                }
            } else {
                if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Textbox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Datebox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'MultiCheck') {
                    if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "") {
                        INCOMPLETE += 1;
                    }
                } else if (QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Dropdown' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Radiobox' || QUESTION_ARRAY[Q_Array[R1].toString()]["Type"] === 'Checkbox') {
                    if (dataArray[QUESTION_ARRAY[Q_Array[R1].toString()]["Name"]] == "1015") {
                        INCOMPLETE += 1;
                    }
                }
            }
        }
    }

    if (workflowId == 12) {
        var materialStoredIn = dataArray[QUESTION_ARRAY[271]["Name"]];
        if (materialStoredIn == "1047" ||
            materialStoredIn == "1048") {
            if (dataArray[QUESTION_ARRAY[272]["Name"]] == "") {
                INCOMPLETE += 1;
            }

            if (dataArray[QUESTION_ARRAY[278]["Name"]] == 1015) {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[347]["Name"]] == 1015) {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[279]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[280]["Name"]] == "") {
                INCOMPLETE += 1;
            }

        }

        var equipmentCleanedOut = dataArray[QUESTION_ARRAY[273]["Name"]];
        if (equipmentCleanedOut == "1001") {
            if (dataArray[QUESTION_ARRAY[344]["Name"]] == 1015) {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[345]["Name"]] == 1015) {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[276]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[277]["Name"]] == "") {
                INCOMPLETE += 1;
            }
        }
        else if (equipmentCleanedOut == "1060") {
            if (dataArray[QUESTION_ARRAY[274]["Name"]] == 1015) {
                INCOMPLETE += 1;
            }
        }

    }
    else if (workflowId == 14) {

        var trialUseBin = dataArray[QUESTION_ARRAY[282]["Name"]];
        if (trialUseBin == 1001) {

            if (dataArray[QUESTION_ARRAY[171]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[172]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[283]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[284]["Name"]] == "1015") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[285]["Name"]] == "1015") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[286]["Name"]] == "1015") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[288]["Name"]] == "1015") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[188]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[313]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[314]["Name"]] == "") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[323]["Name"]] == "1015") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[324]["Name"]] == "1015") {
                INCOMPLETE += 1;
            }
            if (dataArray[QUESTION_ARRAY[325]["Name"]] == "1015") {
                INCOMPLETE += 1;
            }

            if (!IsDataArrayBinInspection2Empty(dataArray)) {
                if (dataArray[QUESTION_ARRAY[189]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[190]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[289]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[290]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[291]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[292]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[294]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[206]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[315]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[316]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[326]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[327]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[328]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
            }

            if (!IsDataArrayBinInspection3Empty(dataArray)) {
                if (dataArray[QUESTION_ARRAY[207]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[208]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[295]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[296]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[297]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[298]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[300]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[224]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[317]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[318]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[329]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[330]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[331]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
            }

            if (!IsDataArrayBinInspection4Empty(dataArray)) {
                if (dataArray[QUESTION_ARRAY[225]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[226]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[301]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[302]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[303]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[304]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[306]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[242]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[319]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[320]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[332]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[333]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[334]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
            }

            if (!IsDataArrayBinInspection5Empty(dataArray)) {
                if (dataArray[QUESTION_ARRAY[243]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[244]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[307]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[308]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[309]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[310]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[312]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[260]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[321]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[322]["Name"]] == "") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[335]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[336]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }
                if (dataArray[QUESTION_ARRAY[337]["Name"]] == "1015") {
                    INCOMPLETE += 1;
                }

            }
        }
    }

    if (INCOMPLETE == 0) {
        return true;
    } else {
        return false;
    }
}

Form.isCompleted = function (workflowId, responses) {

    var workflow = (workflowId < 10) ? '0' + workflowId : '' + workflowId;

    //transform responses array into question-answer array
    var dataArray = [], i, len;
    for (i = 0, len = responses.length; i < len; i += 1) {
        var r = responses[i];

        var question = QUESTION_ARRAY[r.QuestionID];
        if (typeof question !== 'undefined' && question != null){
            dataArray[question['Name']] = r.ResponseValue;
        } else {
            log.error('Unknown QuestionID: ' + r.QuestionID);
        }

    }

    var isCompleted = this.isDataArrayCompleted(workflow, dataArray);

    return isCompleted;

};

Form.getFormId = function(formCodeName){
    var i, len;
    for (i = 0, len = FormArrayName.length; i < len; i += 1) {
        var f = FormArrayName[i];

        if (f == formCodeName){
            break;
        }
    }

    return i;
}