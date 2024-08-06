/**
 * Created by hcasa on 11/04/2015.
 */

persistence.defineMigration(3, {

    up: function () {

        this.addIndex('Crop', 'CropId', true);
        this.addIndex('Trait', 'TraitId', true);
        this.addIndex('Site', 'SiteId', true);
        this.addIndex('User', 'UserId', true);
        this.addIndex('Workflow', 'WorkflowId', true);
        this.addIndex('Trial', 'TrialId', true);

        this.addIndex('TrialProgress', 'TrialId', false);
        this.addIndex('TrialProgress', 'WorkflowId', false);

        this.addIndex('Response', 'TrialId', false);
        this.addIndex('Response', 'WorkflowId', false);
        this.addIndex('Response', 'QuestionId', false);

        this.addIndex('Attachment', 'TrialId', false);
        this.addIndex('Attachment', 'WorkflowId', false);
        this.addIndex('Attachment', 'Name', false);

        this.addIndex('TrialNotes', 'TrialNoteId', true);

    },

    down: function () {

        this.removeIndex('Trait', 'TraitId', true);
        this.removeIndex('Crop', 'CropId', true);
        this.removeIndex('Site', 'SiteId', true);
        this.removeIndex('User', 'UserId', true);
        this.removeIndex('Workflow', 'WorkflowId', true);
        this.removeIndex('Trial', 'TrialId', true);

        this.removeIndex('TrialProgress', 'TrialId', false);
        this.removeIndex('TrialProgress', 'WorkflowId', false);

        this.removeIndex('Response', 'TrialId', false);
        this.removeIndex('Response', 'WorkflowId', false);
        this.removeIndex('Response', 'QuestionId', false);

        this.removeIndex('Attachments', 'TrialId', false);
        this.removeIndex('Attachments', 'WorkflowId', false);
        this.removeIndex('Attachments', 'Name', false);

        this.removeIndex('TrialNotes', 'TrialNoteId', true);

    },

});

