
/**
 * Created by hcasa on 10/05/2015.
 */

LocalStorage.AttachmentTypes = {
    entity: null,
    setEntity: function (entity) {
        this.entity = entity;
    },

    get: function (id) {
        var deferred = $.Deferred();

        this.entity.findBy("AttachmentTypeId", id, function (attachmentType) {
            deferred.resolveWith(this, [attachmentType]);
        });

        return deferred;
    },

    saveSync: function (attachmentType) {

        var deferred = $.Deferred();

        var attachmentTypeEntity = this.entity;

        attachmentTypeEntity.findBy("AttachmentTypeId", attachmentType.AttachmentTypeID, function (attachmentTypeObject) {

            if (attachmentTypeObject == null)
            {
                attachmentTypeObject = new attachmentTypeEntity();
                attachmentTypeObject.AttachmentTypeId = attachmentType.AttachmentTypeID;
            }

            attachmentTypeObject.Name = attachmentType.Name;

            //adding to cache.
            var name = attachmentTypeObject.Name.toUpperCase();
            AttachmentTypeCache[name] = attachmentTypeObject;

            persistence.add(attachmentTypeObject);
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

    saveSyncArray: function (attachmentTypes) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = attachmentTypes.length; i < len; i += 1) {
            saveArray.push(this.saveSync(attachmentTypes[i]));
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


