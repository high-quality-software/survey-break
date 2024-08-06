
/**
 * Created by hcasa on 09/17/2015.
 */

LocalStorage.Users = {

    entity: null,

    setEntity: function (entity) {
        this.entity = entity;
    },

    save: function (u) {
        var user = new this.entity();
        user.UserId = u.UserID;


        persistence.add(user);
        persistence.flush(function (tx, err) {
            if (typeof err !== 'undefined' && err != null) {
                //debugger;
            }
        });

    },

    saveSync: function (user) {

        var deferred = $.Deferred();

        var userEntity = this.entity;

        userEntity.findBy("UserId", user.UserID, function (userObject) {

            if (userObject == null) {
                userObject = new userEntity();
                userObject.UserId = user.UserID;
            }

            userObject.UserAlias = user.UserAlias;
            userObject.FirstName = user.FirstName;
            userObject.LastName = user.LastName;
            userObject.UserTypeId = user.UserTypeID;
            userObject.Email = user.Email;
            userObject.OfficeNumber = user.OfficeNumber;
            userObject.SiteLocation = user.SiteLocation;

            //TODO: remove user cache allowing primary srr name into trial pull from API
            UserCache[userObject.UserId] = userObject;

            persistence.add(userObject);

            persistence.flush(function (tx, err) {
                if (typeof err !== 'undefined' && err != null) {
                    //debugger;
                    deferred.reject();
                } else {
                    deferred.notify();
                    deferred.resolve();
                }
            });
        });

        return deferred;

    },

    saveSyncArray: function (users) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = users.length; i < len; i += 1) {
            saveArray.push(this.saveSync(users[i]));
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

    list: function(){
        var deferred = $.Deferred();

        this.entity.all().order("FirstName", true).order("LastName", true).list(function(users){
            deferred.resolveWith(this, [users]);
        });

        return deferred.promise();
    }
};