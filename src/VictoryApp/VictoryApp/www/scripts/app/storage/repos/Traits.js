
/**
 * Created by hcasa on 09/17/2015.
 */

LocalStorage.Traits = {

    entity: null,

    setEntity: function (entity) {
        this.entity = entity;
    },

    saveSync: function (trait) {

        var deferred = $.Deferred();

        var traitEntity = this.entity;

        traitEntity.findBy("TraitId", trait.TraitID, function (traitObject) {

            if (traitObject == null)
            {
                traitObject = new traitEntity();
                traitObject.TraitId = trait.TraitID;
            }

            traitObject.Name = trait.Name;

            //TODO: remove trait cache allowing trait name into trial pull from API
            TraitCache[traitObject.TraitId] = traitObject;

            persistence.add(traitObject);
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

    saveSyncArray: function (traits) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = traits.length; i < len; i += 1) {
            saveArray.push(this.saveSync(traits[i]));
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

};
