
/**
 * Created by hcasa on 10/06/2015.
 */

LocalStorage.Attachments = {

    entity: null,

    setEntity: function (entity) {
        this.entity = entity;
    },

    delete: function (fileName, trialId, workflowId) {

        var deferred = $.Deferred();

        var attachmentEntity = this.entity;

        attachmentEntity
            .all().filter("TrialId", "=", trialId)
            .and(new persistence.PropertyFilter("WorkflowId", "=", workflowId))
            .and(new persistence.PropertyFilter("Name", "=", fileName))
            .one(null, function (attachment) {

                if (attachment != null){
                    persistence.remove(attachment);
                    persistence.flush(function () {
                        deferred.resolve();
                    });
                } else {
                    deferred.reject();
                }

            });

        return deferred.promise();
    },

    saveSync: function (attachment) {

        var deferred = $.Deferred();

        var attachmentEntity = this.entity;

        attachmentEntity.findBy("AttachmentId", attachment.AttachmentID, function (attachmentObject) {

            if (attachmentObject == null) {
                attachmentObject = new attachmentEntity();
                attachmentObject.AttachmentId = attachment.AttachmentID;
            }

            attachmentObject.TrialId = attachment.TrialID;
            attachmentObject.WorkflowId = attachment.WorkflowID;
            attachmentObject.Name = attachment.Name;

            persistence.add(attachmentObject);
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

    saveSyncFormArray: function (trialProgressArray) {

        var deferred = $.Deferred();

        var done = 0;
        var total = 0;

        var saveArray = [], i, len;
        for (i = 0, len = trialProgressArray.length; i < len; i += 1) {
            var trialprogress = trialProgressArray[i];

            var i2, len2;
            for (i2 = 0, len2 = trialprogress.Attachments.length; i2 < len2; i2 += 1) {
                total++;
                saveArray.push(this.saveSync(trialprogress.Attachments[i2]));
            }
        }

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

    }
    ,

};
