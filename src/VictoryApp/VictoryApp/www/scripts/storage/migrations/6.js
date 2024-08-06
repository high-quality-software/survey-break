/**
 * Created by hcasa on 11/11/2015.
 */

persistence.defineMigration(6, {

    up: function () {

        this.removeColumn('Trial', 'ThisColumnWillBeRemovedToo');
        this.dropTable('ThisTableWillBeRemoved');

        this.executeSql("UPDATE Trial SET ComplianceStatus = ComplianceStatus2");
        this.removeColumn('Trial', 'ComplianceStatus2');
        this.addColumn('Trial', 'FarmName', 'TEXT');

        this.createTable('AttachmentType', function (t) {
            t.integer('AttachmentTypeId');
            t.text('Name');
        });
        this.addIndex('AttachmentType', 'AttachmentTypeId', true);

    },

    down: function () {



    },

});

