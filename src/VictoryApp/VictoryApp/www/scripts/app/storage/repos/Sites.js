
/**
 * Created by hcasa on 09/17/2015.
 */

LocalStorage.Sites = {

    entity: null,

    setEntity: function (entity) {
        this.entity = entity;
    },

    saveSync: function (site) {

        var deferred = $.Deferred();

        var siteEntity = this.entity;

        siteEntity.findBy("SiteId", site.SiteID, function (siteObject) {

            if (siteObject == null)
            {
                siteObject = new siteEntity();
                siteObject.SiteId = site.SiteID;
            }

            siteObject.Name = site.Name;

            //TODO: remove site cache allowing site name into trial pull from API
            SiteCache[siteObject.SiteId] = siteObject;

            persistence.add(siteObject);
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

    saveSyncArray: function (sites) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = sites.length; i < len; i += 1) {
            saveArray.push(this.saveSync(sites[i]));
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
