/**
 * Created by hcasa on 11/04/2015.
 */

persistence.defineMigration(5, {

    up: function () {

        this.addColumn('Trial', 'ThisColumnWillBeRemovedToo', 'TEXT');

        this.createTable('ThisTableWillBeRemoved', function (t) {
            t.text('ThisColumnWillBeRemoved');
        });

        this.executeSql('INSERT INTO ThisTableWillBeRemoved(ThisColumnWillBeRemoved) values ("ThisColumnWillBeRemoved")');

        this.executeSql("UPDATE Trial SET ComplianceStatus2 = ComplianceStatus");
        this.executeSql("UPDATE Trial SET ComplianceStatus = ComplianceStatus || ' - ' || CropName || ' - ' || TraitName");

    },

    down: function () {

        this.dropTable('ThisTableWillBeRemoved');

    },

});

