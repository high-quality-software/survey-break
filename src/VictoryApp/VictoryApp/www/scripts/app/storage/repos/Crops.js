/**
 * Created by hcasa on 09/17/2015.
 */

LocalStorage.Crops = {
    entity: null,
    setEntity: function (entity) {
        this.entity = entity;
    },

    save: function (c) {
        var crop = new this.entity();
        crop.CropId = c.CropID;
        crop.Name = c.Name;

        persistence.add(crop);
        persistence.flush(function (tx, err) {
            if (typeof err !== 'undefined' && err != null) {
                //debugger;
            }
        });

    },

    saveSync: function (crop) {

        var deferred = $.Deferred();

        var cropEntity = this.entity;

        cropEntity.findBy("CropId", crop.CropID, function (cropObject) {

            if (cropObject == null) {
                cropObject = new cropEntity();
                cropObject.CropId = crop.CropID;
            }

            cropObject.Name = crop.Name;

            //TODO: remove crop cache allowing crop name into trial pull from API
            CropCache[cropObject.CropId] = cropObject;

            persistence.add(cropObject);
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

        return deferred.promise();

    },

    saveSyncArray: function (crops) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = crops.length; i < len; i += 1) {
            saveArray.push(this.saveSync(crops[i]));
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

