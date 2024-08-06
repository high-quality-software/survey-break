
/**
 * Created by hcasa on 09/28/2015.
 */

function IsBinInspection2Empty(trial, formId) {
    if (getResponseValue(trial, formId, 189) == ""
        && getResponseValue(trial, formId, 190) == ""
        && getResponseValue(trial, formId, 205) == ""
        && getResponseValue(trial, formId, 206) == ""
        && getResponseValue(trial, formId, 289) == ""
        && getResponseValue(trial, formId, 290) == 1015
        && getResponseValue(trial, formId, 291) == 1015
        && getResponseValue(trial, formId, 292) == 1015
        && getResponseValue(trial, formId, 294) == 1015
        && getResponseValue(trial, formId, 315) == ""
        && getResponseValue(trial, formId, 316) == ""
        && getResponseValue(trial, formId, 326) == 1015
        && getResponseValue(trial, formId, 327) == 1015
        && getResponseValue(trial, formId, 328) == 1015
    ) {
        return true;
    }
    else {
        return false;
    }

}

function IsBinInspection3Empty(trial, formId) {
    if (getResponseValue(trial, formId, 207) == ""
        && getResponseValue(trial, formId, 208) == ""
        && getResponseValue(trial, formId, 223) == ""
        && getResponseValue(trial, formId, 224) == ""
        && getResponseValue(trial, formId, 295) == ""
        && getResponseValue(trial, formId, 296) == 1015
        && getResponseValue(trial, formId, 297) == 1015
        && getResponseValue(trial, formId, 298) == 1015
        && getResponseValue(trial, formId, 300) == 1015
        && getResponseValue(trial, formId, 317) == ""
        && getResponseValue(trial, formId, 318) == ""
        && getResponseValue(trial, formId, 329) == 1015
        && getResponseValue(trial, formId, 330) == 1015
        && getResponseValue(trial, formId, 331) == 1015) {
        return true;
    }
    else {
        return false;
    }

}

function IsBinInspection4Empty(trial, formId) {
    if (getResponseValue(trial, formId, 225) == ""
        && getResponseValue(trial, formId, 226) == ""
        && getResponseValue(trial, formId, 241) == ""
        && getResponseValue(trial, formId, 242) == ""
        && getResponseValue(trial, formId, 301) == ""
        && getResponseValue(trial, formId, 302) == 1015
        && getResponseValue(trial, formId, 303) == 1015
        && getResponseValue(trial, formId, 304) == 1015
        && getResponseValue(trial, formId, 306) == 1015
        && getResponseValue(trial, formId, 319) == ""
        && getResponseValue(trial, formId, 320) == ""
        && getResponseValue(trial, formId, 332) == 1015
        && getResponseValue(trial, formId, 333) == 1015
        && getResponseValue(trial, formId, 334) == 1015) {
        return true;
    }
    else {
        return false;
    }
}

function IsBinInspection5Empty(trial, formId) {
    if (getResponseValue(trial, formId, 243) == ""
        && getResponseValue(trial, formId, 244) == ""
        && getResponseValue(trial, formId, 259) == ""
        && getResponseValue(trial, formId, 260) == ""
        && getResponseValue(trial, formId, 307) == ""
        && getResponseValue(trial, formId, 308) == 1015
        && getResponseValue(trial, formId, 309) == 1015
        && getResponseValue(trial, formId, 310) == 1015
        && getResponseValue(trial, formId, 312) == 1015
        && getResponseValue(trial, formId, 321) == ""
        && getResponseValue(trial, formId, 322) == ""
        && getResponseValue(trial, formId, 335) == 1015
        && getResponseValue(trial, formId, 336) == 1015
        && getResponseValue(trial, formId, 337) == 1015) {
        return true;
    }
    else {
        return false;
    }
}

function fillFormHeader(trial) {
    //debugger;
    $('.TrialCropHeader').text(trial.CropName);
    $('.TrialTraitHeader').text(trial.TraitName);
    $('.TrialComplianceStatusHeader').text(trial.ComplianceStatus);
    $('.TrialIDHeader').text(trial.TrialId);
    $('.TrialTrialNameHeader').text(trial.Name);
    $('.TrialFarmNameHeader').text(trial.FarmName);
    $('.TrialTrialCityHeader').text(trial.City);
    $('.TrialTrialStateHeader').text(trial.State);
    $('.TrialTrialCountryHeader').text(trial.County);

    //debugger;
    $('.TrialSRRNameHeader').text(User.getDisplayName(trial.PrimarySRRUserId));
    $('.TrialSRRPhoneNumberHeader').text(User.getPhoneNumber(trial.PrimarySRRUserId));
    $('.TrialSRRSiteLocationHeader').text(User.getSiteLocation(trial.PrimarySRRUserId));

    $('.TrialIRPNameHeader').text(User.getDisplayName(trial.IRPUserId));
    $('.TrialIRPPhoneNumberHeader').text(User.getPhoneNumber(trial.IRPUserId));
    $('.TrialIRPSiteLocationHeader').text(User.getSiteLocation(trial.IRPUserId));

    $(':radio').prop('checked', false);
    $(':checkbox').prop('checked', false);
    $('select').val('0').change();
    $('input[type="text"]').val('');
    $('input[type="date"]').val('');
}

function fillFormNavigation(trial){
    $(".FormsNavigation").html(getFormNavigationHtml(trial));
    ChangeClasses(trial);
}
function fillSiteSelectionChecklistForm(formId, trial) {
    if (trial != null) {
        //Site Selection Checklist
        setAnswer(40, formId, trial);
        setAnswer(41, formId, trial);
        setAnswer(42, formId, trial);
        setAnswer(43, formId, trial);
        setAnswer(44, formId, trial);
        setAnswer(45, formId, trial);
        setAnswer(46, formId, trial);
        setAnswer(47, formId, trial);
    }
}

function fillLandContractsForm(formId, trial) {
    if (trial != null) {
        //Land Contracts
        setAnswer(48, formId, trial);
        setAnswer(49, formId, trial);
    }
}

function fillPrePlantingForm(formId, trial) {
    if (trial != null) {
        setAnswer(75, formId, trial);
        setAnswer(76, formId, trial);
        setAnswer(77, formId, trial);
        setAnswer(78, formId, trial);
    }
}

function fillHarvestAndDestruct(formId, trial) {
    if (trial != null) {

        setAnswer(264, formId, trial);
        setAnswer(265, formId, trial);
        setAnswer(267, formId, trial);
        setAnswer(269, formId, trial);
        setAnswer(270, formId, trial);
        setAnswer(271, formId, trial);
        if (getResponseValue(trial, formId, 271) == "1047" ||
            getResponseValue(trial, formId, 271) == "1048") {
            $("#HarvestAndDestructContent .H_Material_Stored_In_a_Bin").show();
        }
        else {
            $("#HarvestAndDestructContent .H_Material_Stored_In_a_Bin").hide();
        }

        setAnswer(272, formId, trial);

        //Equipment_Cleaned_Out
        setAnswer(273, formId, trial);
        if (getResponseValue(trial, formId, 273) == LookUp.YES) {
            $("#HarvestAndDestructContent .ECO_in_NHF").hide();
            $("#HarvestAndDestructContent .ECO_Yes").show();

        } else if (getResponseValue(trial, formId, 273) == LookUp.NO) {
            $("#HarvestAndDestructContent .ECO_in_NHF").hide();
            $("#HarvestAndDestructContent .ECO_Yes").hide();

        } else if (getResponseValue(trial, formId, 273) == LookUp.MovedtoAnotherStewardedFieldofSameVariety) {

            $("#HarvestAndDestructContent .ECO_Yes").hide();
            $("#HarvestAndDestructContent .ECO_in_NHF").show();
        }

        setAnswer(274, formId, trial);
        setAnswer(276, formId, trial);
        setAnswer(277, formId, trial);
        setAnswer(278, formId, trial);
        setAnswer(279, formId, trial);
        setAnswer(280, formId, trial);
        setAnswer(339, formId, trial);
        setAnswer(340, formId, trial);
        setAnswer(341, formId, trial);
        setAnswer(342, formId, trial);
        setAnswer(343, formId, trial);
        setAnswer(344, formId, trial);
        setAnswer(345, formId, trial);
        setAnswer(347, formId, trial);
        setAnswer(348, formId, trial);

    }
}

function fillDicambaSprayTrackingForm(formId, trial) {

    if (trial != null) {

        setAnswer(98, formId, trial);
        setAnswer(99, formId, trial);
        setAnswer(100, formId, trial);
        setAnswer(101, formId, trial);
        setAnswer(102, formId, trial);
        setAnswer(103, formId, trial);
        setAnswer(104, formId, trial);
        setAnswer(105, formId, trial);
        setAnswer(106, formId, trial);
        setAnswer(107, formId, trial);
        setAnswer(108, formId, trial);
        setAnswer(109, formId, trial);
        setAnswer(110, formId, trial);
        setAnswer(111, formId, trial);
        setAnswer(112, formId, trial);
        setAnswer(113, formId, trial);
        setAnswer(114, formId, trial);
        setAnswer(115, formId, trial);
        setAnswer(116, formId, trial);
        setAnswer(117, formId, trial);
        setAnswer(118, formId, trial);
        setAnswer(119, formId, trial);
        setAnswer(120, formId, trial);
        setAnswer(121, formId, trial);
        setAnswer(122, formId, trial);
        setAnswer(123, formId, trial);
        setAnswer(124, formId, trial);
        setAnswer(125, formId, trial);
        setAnswer(126, formId, trial);
        setAnswer(127, formId, trial);
        setAnswer(128, formId, trial);
        setAnswer(129, formId, trial);
        setAnswer(130, formId, trial);
        setAnswer(131, formId, trial);
        setAnswer(132, formId, trial);
        setAnswer(133, formId, trial);
        setAnswer(134, formId, trial);
        setAnswer(135, formId, trial);
        setAnswer(136, formId, trial);
        setAnswer(137, formId, trial);
        setAnswer(138, formId, trial);
        setAnswer(139, formId, trial);
        setAnswer(140, formId, trial);
        setAnswer(141, formId, trial);
        setAnswer(142, formId, trial);
        setAnswer(143, formId, trial);
        setAnswer(144, formId, trial);
        setAnswer(145, formId, trial);
        setAnswer(146, formId, trial);
        setAnswer(147, formId, trial);
        setAnswer(148, formId, trial);
        setAnswer(149, formId, trial);
        setAnswer(150, formId, trial);
        setAnswer(151, formId, trial);
        setAnswer(152, formId, trial);
        setAnswer(153, formId, trial);
        setAnswer(154, formId, trial);
        setAnswer(155, formId, trial);
        setAnswer(156, formId, trial);
        setAnswer(157, formId, trial);

        if (getResponseValue(trial, formId, 98) === "1001") {
            $("." + getName(98) + "_Yes").show();
            if (getResponseValue(trial, formId, 105) === "1001") {
                $("#" + getName(106) + "_lbl_Yes").show();
                $("#" + getName(106) + "_Yes").show();
            } else {
                $("#" + getName(106) + "_lbl_Yes").hide();
                $("#" + getName(106) + "_Yes").hide();
            }
            if (getResponseValue(trial, formId, 106) === "1030") {
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

        if (getResponseValue(trial, formId, 128) === "1001") {
            $("." + getName(128) + "_Yes").show();
            if (getResponseValue(trial, formId, 135) === "1001") {
                $("#" + getName(136) + "_lbl_Yes").show();
                $("#" + getName(136) + "_Yes").show();
            } else {
                $("#" + getName(136) + "_lbl_Yes").hide();
                $("#" + getName(136) + "_Yes").hide();
            }
            if (getResponseValue(trial, formId, 136) === "1030") {
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
}

function fillVolunteerMonitoringForm(formId, trial) {
    if (trial != null) {

        setAnswer(73, formId, trial);
        setAnswer(74, formId, trial);

        var plantedCrop = getResponseValue(trial, formId, 73);

        if (plantedCrop == "1018" || plantedCrop == "1019" || plantedCrop == "1020" || plantedCrop == "99999") {
            $("#VolForm").show();
        } else {
            $("#VolForm").hide();
        }

        setAnswer(1, formId, trial);
        setAnswer(2, formId, trial);
        setAnswer(3, formId, trial);
        if (getResponseValue(trial, formId, 3) == "99999") {
            $("#Method_of_Burn_Down_TDRdiv").show();
            $("#Method_of_Burn_Down_TDR_Herbicidediv").show();
        }
        setAnswer(4, formId, trial);
        setAnswer(5, formId, trial);
        setAnswer(6, formId, trial);
        setAnswer(7, formId, trial);
        if ($("#Method_of_Preemergence_Herbicide option:selected").val() == "99999") {
            $("#Method_of_Preemergence_TDRdiv").show();
            $("#Method_of_Preemergence_TDR_Herbicidediv").show();
        }
        setAnswer(8, formId, trial);
        setAnswer(9, formId, trial);
        setAnswer(10, formId, trial);
        setAnswer(11, formId, trial);
        if ($("#Method_of_Postemergence_Herbicide option:selected").val() == "99999") {
            $("#Method_of_Postemergence_TDRdiv").show();
            $("#Method_of_Postemergence_TDR_Herbicidediv").show();
        }
        setAnswer(12, formId, trial);
        setAnswer(13, formId, trial);
        setAnswer(14, formId, trial);
        setAnswer(15, formId, trial);
        if (getResponseValue(trial, formId, 15) == 1002) {
            $("#Volapppostemergence2Bigdiv").show();
        } else {
            $("#Volapppostemergence2Bigdiv").hide();
        }

        setAnswer(16, formId, trial);
        setAnswer(17, formId, trial);
        if (getResponseValue(trial, formId, 17) == "99999") {
            $("#Method_of_Postemergence2_TDRdiv").show();
            $("#Method_of_Postemergence2_TDR_Herbicidediv").show();
        }

        setAnswer(18, formId, trial);
        setAnswer(19, formId, trial);
        setAnswer(20, formId, trial);
        setAnswer(21, formId, trial);

        if (getResponseValue(trial, formId, 21) == 1014) {
            $('#Volapppostemergence3Bigdiv').show();
        }
        setAnswer(22, formId, trial);
        setAnswer(23, formId, trial);
        if (getResponseValue(trial, formId, 23) == "99999") {
            $("#Method_of_Postemergence3_TDRdiv").show();
            $("#Method_of_Postemergence3_TDR_Herbicidediv").show();
        }

        setAnswer(24, formId, trial);
        setAnswer(25, formId, trial);
        setAnswer(26, formId, trial);
        setAnswer(27, formId, trial);

        if (getResponseValue(trial, formId, 27) == 1014) {
            $('#Volapppostemergence4Bigdiv').show();
        }

        setAnswer(28, formId, trial);
        setAnswer(29, formId, trial);
        if (getResponseValue(trial, formId, 29) == "99999") {
            $("#Method_of_Postemergence4_TDRdiv").show();
            $("#Method_of_Postemergence4_TDR_Herbicidediv").show();
        }

        setAnswer(30, formId, trial);
        setAnswer(31, formId, trial);
        setAnswer(32, formId, trial);
        setAnswer(33, formId, trial);

        if (getResponseValue(trial, formId, 33) == 1014) {
            $('#Volapppostemergence5Bigdiv').show();
        }

        setAnswer(34, formId, trial);
        setAnswer(35, formId, trial);
        if (getResponseValue(trial, formId, 35) == "99999") {
            $("#Method_of_Postemergence5_TDRdiv").show();
            $("#Method_of_Postemergence5_TDR_Herbicidediv").show();
        }

        setAnswer(36, formId, trial);
        setAnswer(37, formId, trial);
        setAnswer(38, formId, trial);
        setAnswer(39, formId, trial);

    }
}

function fillComplianceMap(formId, trial) {

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

    if (trial != null) {

        setAnswer(55, formId, trial);
        setAnswer(56, formId, trial);
        setAnswer(57, formId, trial);
        setAnswer(58, formId, trial);
        setAnswer(59, formId, trial);
        setAnswer(60, formId, trial);
        setAnswer(61, formId, trial);
        setAnswer(62, formId, trial);
        setAnswer(63, formId, trial);
        setAnswer(64, formId, trial);
        setAnswer(65, formId, trial);
        setAnswer(66, formId, trial);
        setAnswer(67, formId, trial);
        setAnswer(68, formId, trial);
        setAnswer(69, formId, trial);
        setAnswer(70, formId, trial);
        setAnswer(71, formId, trial);
        setAnswer(72, formId, trial);

        var sphb13 = $("#Compliance_Map_Attachmentlbl_Div");
        var sphb14 = $("#Compliance_Map_Attachment_Div");
        var sphb15 = $("#Compliance_Map_Attachment_linklbl_Div");
        var sphb16 = $("#Compliance_Map_Attachment_link_Div");

        var attachmentName = getResponseValue(trial, formId, 9906);
        if (typeof attachmentName === 'undefined' || attachmentName == null) {
            sphb13.show();
            sphb14.show();
            sphb15.hide();
            sphb16.hide();
        } else {
            sphb13.hide();
            sphb14.hide();
            sphb15.show();
            sphb16.show();
            $('#Compliance_Map_Attachment_link').text(getResponseValue(trial, formId, 9906));
            $('#Compliance_Map_Attachment_link').attr("onClick",
                "OpenAttachment('" + getResponseValue(trial, formId, 8806) + "', popup_Compliance_Map_Attachment);");
            $('#Compliance_Map_Attachment_link_Delete').attr("onClick",
                "alertify.confirm(" +
                "'Are you sure you want to delete the attachment?', " +
                "function(e, str) { if (e) { " +
                    "RemoveComplianceMapAttachment('" + getResponseValue(trial, formId, 9906) + "'," + trial.TrialId + ",6);" +
                "}});");
        }
    }

}

function fillComplianceExceptionsForm(formId, trial) {

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

    if (trial != null) {
        //Compliance Exceptions
        setAnswer(50, formId, trial);

        if (getResponseValue(trial, formId, 50) == 1001) {

            setAnswer(51, formId, trial);
            setAnswer(52, formId, trial);
            setAnswer(53, formId, trial);
            setAnswer(54, formId, trial);

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

            var attachmentName = getResponseValue(trial, formId, 9905);
            if (typeof attachmentName === 'undefined' || attachmentName == null) {
                sphb9.show();
                sphb10.show();
                sphb11.hide();
                sphb12.hide();
            } else {
                sphb9.hide();
                sphb10.hide();
                sphb11.show();
                sphb12.show();
                $('#Compliance_Attachments_link').text(getResponseValue(trial, formId, 9905));
                $('#Compliance_Attachments_link').attr("onClick", "OpenAttachment('" + getResponseValue(trial, formId, 8805) + "',popup_Compliance_Exceptions_Attachment);");
                $('#Compliance_Attachments_link_Delete').attr("onClick",
                    "alertify.confirm('Are you sure you want to delete the attachment?', function(e, str) {if (e) { " +
                    "RemoveComplianceAttachment('" + getResponseValue(trial, formId, 9905) + "'," + trial.TrialId + ",5); " +
                    "}});");
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
}

function fillBinInspections(formId, trial) {

    if (trial != null) {

        setAnswer(282, formId, trial);

        if (getResponseValue(trial, formId, 282) == 1001) {
            $("#Bin_Inspection").show();

            setAnswer(171, formId, trial);
            setAnswer(172, formId, trial);
            setAnswer(187, formId, trial);
            setAnswer(188, formId, trial);
            setAnswer(283, formId, trial);
            setAnswer(284, formId, trial);
            setAnswer(285, formId, trial);
            setAnswer(286, formId, trial);
            setAnswer(288, formId, trial);
            setAnswer(313, formId, trial);
            setAnswer(314, formId, trial);
            setAnswer(323, formId, trial);
            setAnswer(324, formId, trial);
            setAnswer(325, formId, trial);

            if (IsBinInspection2Empty(trial, formId)) {
                $("input[name=Add_Other_BinRadio][value=1002]").prop('checked', true);
            }
            else {
                $("input[name=Add_Other_BinRadio][value=1001]").prop('checked', true);
                $("#Bin_Inspection2").show();
                setAnswer(189, formId, trial);
                setAnswer(190, formId, trial);
                setAnswer(205, formId, trial);
                setAnswer(206, formId, trial);
                setAnswer(289, formId, trial);
                setAnswer(290, formId, trial);
                setAnswer(291, formId, trial);
                setAnswer(292, formId, trial);
                setAnswer(294, formId, trial);
                setAnswer(315, formId, trial);
                setAnswer(316, formId, trial);
                setAnswer(326, formId, trial);
                setAnswer(327, formId, trial);
                setAnswer(328, formId, trial);


                if (IsBinInspection3Empty(trial, formId)) {
                    $("input[name=Add_Other_Bin2Radio][value=1002]").prop('checked', true);
                }
                else {
                    $("input[name=Add_Other_Bin2Radio][value=1001]").prop('checked', true);
                    $("#Bin_Inspection3").show();
                    setAnswer(207, formId, trial);
                    setAnswer(208, formId, trial);
                    setAnswer(223, formId, trial);
                    setAnswer(224, formId, trial);
                    setAnswer(295, formId, trial);
                    setAnswer(296, formId, trial);
                    setAnswer(297, formId, trial);
                    setAnswer(298, formId, trial);
                    setAnswer(300, formId, trial);
                    setAnswer(317, formId, trial);
                    setAnswer(318, formId, trial);
                    setAnswer(329, formId, trial);
                    setAnswer(330, formId, trial);
                    setAnswer(331, formId, trial);

                    if (IsBinInspection4Empty(trial, formId)) {
                        $("input[name=Add_Other_Bin3Radio][value=1002]").prop('checked', true);
                    }
                    else {
                        $("input[name=Add_Other_Bin3Radio][value=1001]").prop('checked', true);
                        $("#Bin_Inspection4").show();
                        setAnswer(225, formId, trial);
                        setAnswer(226, formId, trial);
                        setAnswer(241, formId, trial);
                        setAnswer(242, formId, trial);
                        setAnswer(301, formId, trial);
                        setAnswer(302, formId, trial);
                        setAnswer(303, formId, trial);
                        setAnswer(304, formId, trial);
                        setAnswer(306, formId, trial);
                        setAnswer(319, formId, trial);
                        setAnswer(320, formId, trial);
                        setAnswer(332, formId, trial);
                        setAnswer(333, formId, trial);
                        setAnswer(334, formId, trial);

                        if (IsBinInspection5Empty(trial, formId)) {
                            $("input[name=Add_Other_Bin4Radio][value=1002]").prop('checked', true);
                        }
                        else {
                            $("input[name=Add_Other_Bin4Radio][value=1001]").prop('checked', true);
                            $("#Bin_Inspection5").show();
                            setAnswer(243, formId, trial);
                            setAnswer(244, formId, trial);
                            setAnswer(259, formId, trial);
                            setAnswer(260, formId, trial);
                            setAnswer(307, formId, trial);
                            setAnswer(308, formId, trial);
                            setAnswer(309, formId, trial);
                            setAnswer(310, formId, trial);
                            setAnswer(312, formId, trial);
                            setAnswer(321, formId, trial);
                            setAnswer(322, formId, trial);
                            setAnswer(335, formId, trial);
                            setAnswer(336, formId, trial);
                            setAnswer(337, formId, trial);
                        }
                    }
                }
            }
        }
    }
}

function fillInSeasonMonitoringForm(formId, trial) {

    if (trial != null) {

        setAnswer(158, formId, trial);
        setAnswer(159, formId, trial);
        setAnswer(160, formId, trial);
        setAnswer(161, formId, trial);
        setAnswer(162, formId, trial);
        setAnswer(163, formId, trial);
        setAnswer(164, formId, trial);
        setAnswer(165, formId, trial);
        setAnswer(166, formId, trial);
        setAnswer(167, formId, trial);
        setAnswer(168, formId, trial);
        setAnswer(169, formId, trial);
        setAnswer(170, formId, trial);

        if (getResponseValue(trial, formId, 158) === "1001") {
            $("." + getName(158) + "Yes").show();
            if (getResponseValue(trial, formId, 161) === "1001") {
                $("." + getName(161) + "Yes").show();
            } else {
                $("." + getName(161) + "Yes").hide();
            }
            if (getResponseValue(trial, formId, 166) === "1001") {
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

}

function fillPlantingForm(formId, trial) {

    //ever open form with GPS Info hidden
    $('#PlantingGPSInfo').hide();

    if (trial != null) {

        setAnswer(79, formId, trial);
        setAnswer(80, formId, trial);
        setAnswer(81, formId, trial);
        setAnswer(82, formId, trial);
        setAnswer(83, formId, trial);

        var sphb1 = $("#Commercial_Soybeans_Planted_Yes");
        if (getResponseValue(trial, formId, 83) == "1001") {
            sphb1.show();
        } else {
            sphb1.hide();
        }

        setAnswer(84, formId, trial);

        var sphb1 = $("#Type_of_Isolation_Natural");

        if (getResponseValue(trial, formId, 84) == "1007") {
            sphb1.show();
        } else {
            sphb1.hide();
        }

        setAnswer(85, formId, trial);
        setAnswer(86, formId, trial);
        setAnswer(87, formId, trial);

        var sphb1 = $("#Seed_Tender_Used_Yes");

        if (getResponseValue(trial, formId, 87) == "1001") {
            sphb1.show();
        } else {
            sphb1.hide();
        }

        setAnswer(88, formId, trial);

        var sphb1 = $("#Seed_Tender_Cleaned_Out_Yes");

        if (getResponseValue(trial, formId, 88) == "1001") {
            sphb1.show();
        } else {
            if (getResponseValue(trial, formId, 88) == 1009) {
                seed_Tender_Cleaned_Out_Move_To = true;
            }
            sphb1.hide();
        }

        setAnswer(89, formId, trial);
        setAnswer(90, formId, trial);
        setAnswer(91, formId, trial);

        var sphb1 = $("#Planter_Cleaned_Out_Yes");

        if (getResponseValue(trial, formId, 91) == "1001") {
            sphb1.show();
        } else {
            if (getResponseValue(trial, formId, 91) == 1009) {
                planter_Cleaned_Out_Move_To = true;
            }
            sphb1.hide();
        }

        setAnswer(92, formId, trial);
        setAnswer(93, formId, trial);
        setAnswer(94, formId, trial);

        var sphb1 = $("#Seed_Leftover_after_Planting_Yes");

        if (getResponseValue(trial, formId, 94) == "1001") {
            sphb1.show();
        } else {
            sphb1.hide();
        }

        setAnswer(95, formId, trial);
        setAnswer(96, formId, trial);

        if (seed_Tender_Cleaned_Out_Move_To == true || planter_Cleaned_Out_Move_To == true) {
            $("#Next_Planted_Field_Row").show();
            $("#PlantingContent #Next_Planted_Field").selectmenu("refresh");
            $("#PlantingContent #Next_Planted_Field").val(getResponseValue(trial, formId, 97)).change();
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
}

function OpenForm(formId, formCodeName, trialId) {

    var trialDeferred = $.Deferred();
    var trialStatusDeferred = $.Deferred();
    var trialListDeferred = $.Deferred();

    var trial, trialList;

    VictoryStorage.Trials.getWithResponses(trialId).then(function (trialObject) {
        trial = trialObject;
        trialDeferred.resolve();
    });

    $.when(trialDeferred).then(function () {

        VictoryStorage.Trials.getComplianceStatus(trialId).then(function (status) {

            trial.Status = status;
            lastTrialObject = trial;
            trialStatusDeferred.resolve();
        });
    });

    $.when(trialStatusDeferred).then(function () {
        if (formCodeName == "Harvest_and_Destruct" ||
            formCodeName == "Planting") {
            VictoryStorage.Trials.listAssignedToLeadSRR(trial.PrimarySRRUserId).then(function (trialListArray) {
                trialList = trialListArray;
                trialListDeferred.resolve();
            });
        } else {
            trialListDeferred.resolve();
        }
    });

    $.when(trialListDeferred).then(function () {

        fillFormHeader(trial);
        fillFormNavigation(trial);

        lockedForm = trial.Status[formCodeName] == 4;

        if (formCodeName == "Site_Selection_Checklist") {

            fillSiteSelectionChecklistForm(formId, trial);
            $('#SSCTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_Site_Selection_ChecklistTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "Land_Contracts") {

            fillLandContractsForm(formId, trial);
            $('#LandContractsTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_Land_ContractsTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "PrePlanting") {

            fillPrePlantingForm(formId, trial);
            $('#PrePlantTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_PrePlantingTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "Compliance_Exceptions") {

            fillComplianceExceptionsForm(formId, trial);
            $('#ComplianceExceptionsTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_Compliance_ExceptionsTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "Harvest_and_Destruct") {

            loadBinNumberAndLocationInto("#HarvestAndDestructContent #H_Bin_Number_and_Location", trial);
            loadTrialItemsInto("#HarvestAndDestructContent #Next_Harvested_Field", trialList);

            $("#HarvestAndDestructContent .H_Material_Stored_In_a_Bin").hide();
            $("#HarvestAndDestructContent .ECO_in_NHF").hide();
            $("#HarvestAndDestructContent .ECO_Yes").hide();

            fillHarvestAndDestruct(formId, trial);

            $('#HarvestAndDestructTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_Harvest_and_DestructTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "Planting") {

            loadTrialItemsInto("#Form_Planting #Next_Planted_Field", trialList);
            fillPlantingForm(formId, trial);

            $('#PlantTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_PlantingTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "Compliance_Map") {

            fillComplianceMap(formId, trial);

            $('#ComplianceMapTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_Compliance_MapTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "In_Season_Monitoring") {

            fillInSeasonMonitoringForm(formId, trial);

            $('#In_SeasonTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_In_Season_MonitoringTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "Bin_Inspections") {

            fillBinInspections(formId, trial);

            $('#BinInspectionsTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_BinInspectionsTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        }
        else if (formCodeName == "Volunteer_Monitoring") {

            fillVolunteerMonitoringForm(formId, trial);

            $('#VolTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_Volunteer_MonitoringTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else if (formCodeName == "Dicamba_Spray_Tracking") {

            fillDicambaSprayTrackingForm(formId, trial);

            $('#DSTTrialNotes').attr('onclick', 'OpenPopup(' + trialId + ', "popup_Form_Dicamba_Spray_TrackingTrialNote");');
            $.mobile.navigate("#Form_" + formCodeName);

        } else {

            $.mobile.navigate("#Dashboard");
        }

    });

}

function getBinInspectionByTrialID(trial) {

    var ret = [];

    for (var i = 0; i < trial.Responses.length; i++) {
        var r = trial.Responses[i];
        if (r.WorkflowId == 14)
            if (r.QuestionId == 171 || r.QuestionId == 172
                || r.QuestionId == 189 || r.QuestionId == 190
                || r.QuestionId == 207 || r.QuestionId == 208
                || r.QuestionId == 225 || r.QuestionId == 226
                || r.QuestionId == 243 || r.QuestionId == 244
            ) {
                ret[r.QuestionId] = r;
            }
    }

    return ret;
}

function getBinNumberAndLocationByTrialID(trial) {

    var ret = [];
    var responses = getBinInspectionByTrialID(trial);

    if (typeof responses[171] !== 'undefined' && responses[171] != null) {
        if (responses[171].ResponseValue != ""){
            ret.push({Bin_Number: responses[171].ResponseValue, Bin_Location: responses[172].ResponseValue});
        }
    }

    if (typeof responses[189] !== 'undefined' && responses[189] != null) {
        if (responses[189].ResponseValue != ""){
            ret.push({Bin_Number: responses[189].ResponseValue, Bin_Location: responses[190].ResponseValue});
        }
    }

    if (typeof responses[207] !== 'undefined' && responses[207] != null) {
        if (responses[207].ResponseValue != ""){
            ret.push({Bin_Number: responses[207].ResponseValue, Bin_Location: responses[208].ResponseValue});
        }
    }

    if (typeof responses[225] !== 'undefined' && responses[225] != null) {
        if (responses[225].ResponseValue != ""){
            ret.push({Bin_Number: responses[225].ResponseValue, Bin_Location: responses[226].ResponseValue});
        }
    }

    if (typeof responses[243] !== 'undefined' && responses[243] != null) {
        if (responses[243].ResponseValue != ""){
            ret.push({Bin_Number: responses[243].ResponseValue, Bin_Location: responses[244].ResponseValue});
        }
    }

    return ret;

}

function loadBinNumberAndLocationInto(selector, trial) {

    $(selector).empty();

    //load bin numbers and locations
    var options = getBinNumberAndLocationByTrialID(trial);
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

//return all trials with those properties needed to display in a selection widget
function getAllTrialItems(trialList) {

    var ret = [];

    for (var i = 0; i < trialList.length; i++) {
        var trial = trialList[i];
        ret.push({TrialId: trial.TrialId, Name: trial.Name});
    }

    return ret;
}

function loadTrialItemsInto(selector, trialList) {

    $(selector).empty();
    var options = getAllTrialItems(trialList);
    var output = [];

    //no selection item
    output.push('<option value="1015"></option>');

    //notice I cached the `temp.length` value, the `for` loop will perform faster if this is done
    for (var i = 0, len = options.length; i < len; i++) {
        //instead of appending each `<option>` element, it is a better practice to either concoct a string of all the HTML or create an array that will later be turned into a string (here we are pushing new indexes onto an `output` array)
        output.push('<option value="' + options[i].TrialId + '">' + options[i].TrialId + ' - ' + options[i].Name + '</option>');
    }

    //now make a single `.append()` call with all the HTML in one big string
    //and most importantly, call `.selectmenu("refresh")` after we update the HTML of the select menu so the jQuery Mobile framework will update the widget
    $(selector).append(output.join(''));
    $(selector).selectmenu();

}

function SaveAndLockForm(workflowId, locked) {

    //saving and locking harvest and destruct form
    if (workflowId == 12) {
        if (lastTrialObject.Status['Bin_Inspections'] != 4) {
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

//Save the form
function SaveForm(workflowId, locked) {

    //Clear global variable
    formdashboard = 1;
    incomplete = 0;
    missing = "";

    //create array to check responses
    formdata = [];
    formdata.Trial_Id = lastTrialId;
    formdata.Locked = locked;
    formdata.Sync = 0;

    //create array to save responses
    responses = [];

    //Set Form Data into formdata variable reading from html widgets.
    SetFormData(workflowId);

    //Set Responses into responses variable reading from html widgets.
    SetResponses(workflowId);

    //Land Contract Form Validation
    if (workflowId == "04") {
        if (formdata.Contract_Signed == "1002") {
            //if land contract was not signed SRR cannot move forward.
            alertify.alert("You cannot move forward before contract be signed.");
            return false;
        }
    }

    //Check for incomplete form and send the form
    CheckIncomplete(workflowId, locked);
}

//Check if form has attachment and send the data
function SendForm(workflowId, toWhere, statusId, locked) {

    var whereinDashboard = FormArrayName[parseInt(workflowId)];
    var landingForm = LandingForm[parseInt(workflowId)]
    var landingFormCodeName = landingForm.substring(5);

    CheckNetworkStatus().done(function () {
        if (filename != "") {
            SendFormDataWithAttachments(workflowId, toWhere, whereinDashboard, statusId)
                .done(function () {
                    SaveToLocal(parseInt(workflowId), landingFormCodeName, landingForm, locked);
                })
                .fail(function () {
                    formdata.Sync = 1;
                    SaveToLocal(parseInt(workflowId), landingFormCodeName, landingForm, locked);
                });
        } else {
            SendFormData(workflowId, toWhere, whereinDashboard, statusId)
                .done(function () {
                    SaveToLocal(parseInt(workflowId), landingFormCodeName, landingForm, locked);
                })
                .fail(function () {
                    formdata.Sync = 1;
                    SaveToLocal(parseInt(workflowId), landingFormCodeName, landingForm, locked);
                });
        }
    }).fail(function () {
        formdata.Sync = 1;
        SaveToLocal(parseInt(workflowId), landingFormCodeName, landingForm, locked);
    });

}