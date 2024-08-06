
/**
 * Created by hcasa on 10/13/2015.
 */

function getFormNavigationHtml(trial) {

    var formNavigationHeader = "<div style=\"width: 100%; overflow-x: auto; overflow-y:hidden; height: 110px; \">" +
        "<div style=\"width: 2470px; padding: 20px\">";
    var formNavigationHtml = "";
    var formNavigationTail = "</div></div>";

    var i, len, status = [];
    for (i = 0, len = lastTrialObject.Progress.length; i < len; i += 1) {

        var progress = lastTrialObject.Progress[i];

        //fill status array with lock status only
        status[progress.WorkflowId] = progress.Locked;

        var formId = progress.WorkflowId;
        var formCodeName = FormArrayName[progress.WorkflowId];
        var formName = progress.WorkflowName;
        var trialId = trial.TrialId;
        var statusJSON = JSON.stringify(status);
        var onNavClickCall = "NavClick(" + formId + ", '" + formCodeName + "', " + trialId + ", '" + statusJSON + "');";


        if (progress.WorkflowId == 3) {
            formNavigationHtml += "<div class=\"BlackStartNav NavStart NavPaddingStartDoble NavSiteSelec\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 4) {
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavLandContr\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 5) {
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavCompliExce\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 6) {
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavCompliMap\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 18) {
            formNavigationHtml += "<div class=\"BlackStopNav NavStop NavStopPrePlant\"></div>";
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavPrePlanting\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 19) {
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavPlanting\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 10) {
            formNavigationHtml += "<div class=\"BlackStopNav NavStop NavStopPlant\"></div>";
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavDicamApp\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 11) {
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavInSeas\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 14) {
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressSingle NavBinInspec\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 12) {
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavHaverst\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        } else if (progress.WorkflowId == 16) {
            formNavigationHtml += "<div class=\"BlackStopNav NavStop NavStopHarvest\"></div>";
            formNavigationHtml += "<div class=\"BlackProgressNav NavProgress NavPaddingProgressDoble NavVolMoni\" onclick=\"" + onNavClickCall + "\">" + formName + "</div>";
        }
    }

    return formNavigationHeader + formNavigationHtml + formNavigationTail;

}
