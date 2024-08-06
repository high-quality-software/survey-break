/**
 * Created by hcasa on 11/04/2015.
 */

persistence.defineMigration(2, {

    up: function () {

        this.createTable('Workflow', function (t) {
            t.integer('WorkflowId');
            t.text('WorkflowName');
            t.integer('WorkflowOrder');
        });


        this.createTable('Trial', function (t) {
            t.integer('TrialId');
            t.text('Name');
            t.text('CropName');
            t.text('TraitName');
            t.text('SiteName');

            t.integer('IRPUserId');
            t.integer('LeadSRRUserId');
            t.integer('PrimarySRRUserId');
            t.integer('TrialYear');

            t.text('Address');
            t.text('City');
            t.text('County');
            t.text('State');
            t.text('Zip');
        });

        this.createTable('TrialProgress', function (t) {
            t.integer('TrialId');
            t.integer('WorkflowId');
            t.integer('UserId');
            t.boolean('Answered');
            t.boolean('Locked');
        });

        this.createTable('Response', function (t) {
            t.integer('TrialId');
            t.integer('WorkflowId');
            t.integer('QuestionId');
            t.text('ResponseValue');
            t.boolean('WaitingToSync');
        });


        this.createTable('Attachment', function (t) {
            t.text('AttachmentId');
            t.integer('TrialId');
            t.integer('WorkflowId');
            t.text('Name');
        });

        this.createTable('TrialNotes', function (t) {
            t.text('TrialNoteId');
            t.integer('TrialId');
            t.text('Content');
        });

    },

    down: function () {

        this.dropTable('TrialNotes');
        this.dropTable('Attachment');
        this.dropTable('TrialProgress');
        this.dropTable('Trial');
        this.dropTable('Workflow');

    },

});

