
/**
 * Created by hcasa on 10/07/2015.
 */

LocalStorage.TrialNotes = {

    entity: null,

    setEntity: function (entity) {
        this.entity = entity;
    },

    saveSync: function (trialNote) {

        var deferred = $.Deferred();

        var trialNoteEntity = this.entity;

        trialNoteEntity.findBy("TrialNoteId", trialNote.TrialNoteID, function (trialNoteObject) {

            if (trialNoteObject == null) {
                trialNoteObject = new trialNoteEntity();
                trialNoteObject.TrialNoteId = trialNote.TrialNoteID;
            }

            trialNoteObject.TrialId = trialNote.TrialID;
            trialNoteObject.Content = trialNote.Content;

            persistence.add(trialNoteObject);
            persistence.flush(function (tx, err) {
                if (typeof err !== 'undefined' && err != null) {
                    //debugger;
                    deferred.reject();
                }
                else {
                    deferred.notify();
                    deferred.resolve();
                }
            });
        });

        return deferred;

    },

    saveSyncArray: function (trialNotes) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = trialNotes.length; i < len; i += 1) {
            saveArray.push(this.saveSync(trialNotes[i]));
        }

        var done = 0;
        var total = len;

        $.when.apply($, saveArray)
            .progress(function () {
                done++;
                deferred.notifyWith(this, [done, total]);
            })
            .done(function () {
                //debugger;
                deferred.resolveWith(this, [done, total]);
            })
            .fail(function (err) {
                //debugger;
                deferred.rejectWith(this, [done, total, err]);
            });

        return deferred.promise();

    },

    list: function (filter) {

        var deferred = $.Deferred();

        var noFilterQuery = "select * from TrialNotes tn order by tn.Content";
        var filterByTrialId = "select * from TrialNotes tn where tn.TrialId = ? order by tn.Content";

        var query = noFilterQuery;
        var params = null;

        if (filter !== 'undefined' && filter != null) {
            if (filter.TrialId !== 'undefined' && filter.TrialId != null) {

                query = filterByTrialId;
                params = [filter.TrialId];
            }
        }

        persistence.transaction(function (tx) {

            tx.executeSql(
                query,
                params,
                function (data) {
                    deferred.resolveWith(this, [data]);
                },
                function (tx, err) {
                    deferred.rejectWith(this, [tx, err]);
                });

        });

        return deferred;

    },

    get: function (id) {

        var deferred = $.Deferred();

        this.entity.findBy("TrialNoteId", id, function (trialNote) {
            deferred.resolveWith(this, [trialNote]);
        });

        return deferred;

    },

    delete: function (trialNoteId) {

        var deferred = $.Deferred();

        this.entity
            .all().filter("TrialNoteId", "=", trialNoteId)
            .one(null, function (trialNote) {

                if (trialNote != null){
                    persistence.remove(trialNote);
                    persistence.flush(function (tx, err) {
                        if (typeof err !== 'undefined' && err != null) {
                            //debugger;
                            deferred.reject();
                        }
                        else {
                            deferred.resolve();
                        }
                    });
                } else {
                    deferred.reject();
                }

            });

        return deferred.promise();
    },

    save: function(trialNoteObject){

        var deferred = $.Deferred();

        persistence.add(trialNoteObject);
        persistence.flush(function (tx, err) {
            if (typeof err !== 'undefined' && err != null) {
                //debugger;
                deferred.reject();
            }
            else {
                deferred.resolve();
            }
        });

        return deferred.promise();
    },

};

