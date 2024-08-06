
/**
 * Created by hcasa on 09/09/2015.
 */

//opens trial notes popup
function OpenPopup(trialId, popup) {

    VictoryStorage.TrialNotes.list({TrialId: trialId})
        .done(function (trialNotes) {

            var NoteTable = "";
            for (var i = 0; i < trialNotes.length; i++) {

                var data = trialNotes[i];
                var noteContent = data.Content.replace(/(?:\r\n|\r|\n)/g, '<br />');

                NoteTable += "<tr><td onclick=\"alertify.confirm('Are you sure you want to delete Note: <br/><br/><b>"
                    + noteContent + "</b>', function (e, str) { if (e) {NoteDelete('"
                    + data.TrialNoteId + "', '" + popup + "');}});\" style=\" color: red;font-weight: 900;font-size: larger;cursor: pointer; padding: 0 10px;\">X</td>" +
                    "<td style=\"cursor: pointer; \" onclick=\"GetNote(event,'" + data.TrialNoteId + "','"
                    + data.TrialId + "', '" + popup + "')\" class=\"ui-table-rows-odd nox\">" + noteContent + "</td></tr>";
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
        })
        .fail(function (x, y, z) {
            alertify.alert("There were problems reading trial notes: " + JSON.stringify(x));
        });
}

//obtains a note from localstorage
function GetNote(e, arrayval, trialID, popup) {

    ToggleClick(e, "#example2", 'RowClick', 'td, th', "child");

    VictoryStorage.TrialNotes.get(arrayval).done(function (trialNoteObject) {
        $('.NoteBox').val(trialNoteObject.Content);
        $('#AddEditNote').text("Modify");
        $('#AddEditNote').attr('onclick', 'NoteEvent( "' + trialID + '", "' + arrayval + '",$(".NoteBox").val(), "' + popup + '")');
    });


}

//save a note using web api
function NoteEvent(trialID, NoteID, noteContent, popup) {

    var trialNoteJSON;

    if ($('#AddEditNote').text() == "Modify") {

        trialNoteJSON = '{ "CurrentUserAlias": "' + localUserData.UserAlias
            + '","Data": { "TrialNoteID":  "' + NoteID + '" , "TrialID":  "' + trialID
            + '" , "Content":  "' + noteContent + '"  } }';

        ModifyData("trial/note", "Trial Note", trialNoteJSON)
            .done(function (trialNote) {
                VictoryStorage.TrialNotes.saveSync(trialNote)
                    .done(function () {
                        alertify.alert("You successfully modify this note <br/><br/><b>" + trialNote.Content + "</b>");
                        OpenPopup(trialID, popup);
                    });
            });

    } else if ($('#AddEditNote').text() == "Add") {

        trialNoteJSON = '{ "CurrentUserAlias": "' + localUserData.UserAlias
            + '","Data": { "TrialID":  "' + trialID + '" , "Content":  "' + noteContent + '"  } }';

        SendData("trial/note", "Trial Note", trialNoteJSON)
            .done(function (trialNote) {
                VictoryStorage.TrialNotes.saveSync(trialNote)
                    .done(function () {
                        alertify.alert("You successfully add this note <br/><br/><b>" + trialNote.Content + "</b>");
                        OpenPopup(trialID, popup);
                    });
            });
    }
}

//delete a note using web api
function NoteDelete(TrialNoteId, popup) {

    var trialNoteJSON = '{ "CurrentUserAlias": "' + localUserData.UserAlias + '", "TrialNoteID": "' + TrialNoteId + '" }';
    VictoryStorage.TrialNotes.get(TrialNoteId)
        .done(function (trialNote) {
            DeleteData("trial/note", "Trial Note", trialNoteJSON)
                .done(function () {
                    VictoryStorage.TrialNotes.delete(TrialNoteId)
                        .done(function () {
                            alertify.alert("You successfully delete this note <br/><br/><b>" + trialNote.Content + "</b>");
                            OpenPopup(trialNote.TrialId, popup);
                        });
                });
        });

}
