/**
 * Created by hcasa on 11/04/2015.
 */

persistence.defineMigration(4, {

    up: function () {

        this.addColumn('User', 'SiteLocation', 'TEXT');
        this.addColumn('User', 'OfficeNumber', 'TEXT');
        this.addColumn('Trial', 'ComplianceStatus', 'TEXT');
        this.addColumn('Trial', 'ComplianceStatus2', 'TEXT');
    },

    down: function () {

        this.removeColumn('User', 'SiteLocation');
        this.removeColumn('User', 'OfficeNumber');
        this.removeColumn('Trial', 'ComplianceStatus');
        this.removeColumn('Trial', 'ComplianceStatus2');
        this.removeColumn('Trial', 'ThisColumnWillBeRemovedToo');

    },

});

