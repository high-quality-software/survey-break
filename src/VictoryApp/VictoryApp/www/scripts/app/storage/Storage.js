
/**
 * Created by hcasa on 11/24/2015.
 */

var Storage = Object.create({});

Storage._repo = {};

Storage.LastSync = {
    entity: null,
    setEntity: function (entity) {
        this.entity = entity;
    },
};

Storage.Login = {
    entity: null,
    setEntity: function (entity) {
        this.entity = entity;
    },
};

Storage.conf = function () {
    //debugger;
};

Storage.init = function () {
    //debugger;
};

Storage.schemaUpdate = function () {
    return $.Deferred().resolve().promise();
};