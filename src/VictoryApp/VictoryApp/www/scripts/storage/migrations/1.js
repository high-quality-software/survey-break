/**
 * Created by hcasa on 11/03/2015.
 */

persistence.defineMigration(1, {

    up: function () {

        this.createTable('Crop', function (t) {
            t.integer('CropId');
            t.text('Name');
        });

        this.createTable('Trait', function (t) {
            t.integer('TraitId');
            t.text('Name');
        });

        this.createTable('Site', function (t) {
            t.integer('SiteId');
            t.text('Name');
        });

        this.createTable('User', function (t) {
            t.integer('UserId');
            t.text('UserAlias');
            t.text('FirstName');
            t.text('LastName');
            t.integer('UserTypeId');
        });

        this.createTable('Login', function (t) {
            t.integer('LoginId');
            t.integer('UserId');
            t.text('UserAlias');
            t.text('FirstName');
            t.text('LastName');
            t.integer('UserTypeId');
            t.integer('LastTrialId');
        });

        this.createTable('LastSync', function (t) {
            t.integer('LastSyncId');
            t.text('Crops');
            t.text('Traits');
            t.text('Workflows');
            t.text('Sites');
            t.text('Users');
            t.text('AttachmentTypes');
            t.text('Trials');
            t.text('TrialNotes');
            t.text('TrialProgress');
            t.text('Forms');
            t.text('SRRProfile');
            t.text('App');
        });
    },

    down: function () {
        this.dropTable('LastSync');
        this.dropTable('Login');
        this.dropTable('User');
        this.dropTable('Site');
        this.dropTable('Trait');
        this.dropTable('Crop');
    },

});

