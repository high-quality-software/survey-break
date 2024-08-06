
/**
 * Created by hcasa on 09/18/2015.
 */

LocalStorage.Workflows = {

    entity: null,

    setEntity: function (entity) {
        this.entity = entity;
    },

    saveSync: function (workflow) {

        var deferred = $.Deferred();

        var workflowEntity = this.entity;

        workflowEntity.findBy("WorkflowId", workflow.WorkflowID, function (workflowObject) {

            if (workflowObject == null) {
                workflowObject = new workflowEntity();
                workflowObject.WorkflowId = workflow.WorkflowID;
            }

            workflowObject.WorkflowName = workflow.Name;
            workflowObject.WorkflowOrder = workflow.Order;

            persistence.add(workflowObject);
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

    saveSyncArray: function (workflows) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = workflows.length; i < len; i += 1) {
            saveArray.push(this.saveSync(workflows[i]));
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

        this.entity.all().order("WorkflowOrder", true).list(function(workflows){
            deferred.resolveWith(this, [workflows]);
        });

        return deferred.promise();
    }

};
