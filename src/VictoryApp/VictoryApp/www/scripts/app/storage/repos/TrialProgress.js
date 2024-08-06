
/**
 * Created by hcasa on 09/18/2015.
 */

LocalStorage.TrialProgress = {
    entity: null,

    setEntity: function (trialProgressEntity) {
        this.entity = trialProgressEntity;
    },

    //updateSync: function (trialProgress) {
    //
    //    var deferred = $.Deferred();
    //
    //    var trialProgressEntity = this.entity;
    //
    //    var query = trialProgressEntity.all()
    //        .filter("TrialId", '=', trialProgress.TrialID)
    //        .filter("WorkflowId", '=', trialProgress.WorkflowID);
    //
    //    query.one(function (trialProgressObject) {
    //        if (trialProgressObject == null) {
    //            deferred.reject(this, ['trialprogress should exists']);
    //        }
    //
    //        trialProgressObject.Answered = trialProgress.Answered;
    //        trialProgressObject.Locked = trialProgress.Locked;
    //
    //        persistence.add(trialProgressObject);
    //        persistence.flush(function (tx, err) {
    //            if (typeof err !== 'undefined' && err != null) {
    //                //debugger;
    //                deferred.reject();
    //            }
    //            else {
    //                deferred.resolve();
    //            }
    //        });
    //    })
    //
    //    return deferred;
    //
    //},

    saveSync: function (trialProgress) {

        var deferred = $.Deferred();

        var trialProgressEntity = this.entity;

        var query = trialProgressEntity.all()
            .filter("TrialId", '=', trialProgress.TrialID)
            .filter("WorkflowId", '=', trialProgress.WorkflowID);

        query.one(function (trialProgressObject) {
            if (trialProgressObject == null) {
                trialProgressObject = new trialProgressEntity();
                trialProgressObject.TrialId = trialProgress.TrialID;
                trialProgressObject.WorkflowId = trialProgress.WorkflowID;
            }

            trialProgressObject.UserId = trialProgress.UserID;
            trialProgressObject.Answered = Form.isCompleted(trialProgress.WorkflowID, trialProgress.Responses);
            trialProgressObject.Locked = trialProgress.Locked;

            persistence.add(trialProgressObject);
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
        })

        return deferred.promise();

    },

    saveSyncFormArray: function (trialProgressArray) {

        var deferred = $.Deferred();

        var saveArray = [], i, len;
        for (i = 0, len = trialProgressArray.length; i < len; i += 1) {
            saveArray.push(this.saveSync(trialProgressArray[i]));
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

    getComplianceStatus: function () {

        //This is a very important sql query. That is a key point of the application and foundation for advanced filter
        var qry = "select w.WorkflowId, w.WorkflowName, w.WorkflowOrder, f.InBlank, f.InProgress, f.PendingForApproval, f.PendingForLock, f.Completed, f.Total from ( " +
            "select WorkflowId_3 as WorkflowId, sum(InBlank_3) as InBlank, sum(InProgress_3) as InProgress, " +
            "sum(PendingForApproval_3) as PendingForApproval, sum(PendingForLock_3) as PendingForLock, sum(Completed_3) as Completed, " +
            "sum(InBlank_3 + InProgress_3 + Completed_3 + PendingForApproval_3 + PendingForLock_3) as Total " +
            "from ( select TrialId_1 as TrialId_3, WorkflowId_1 as WorkflowId_3, " +
            "case when Locked_2 is null then 1 else 0 end as InBlank_3, " +
            "case when Answered_2 = 0 and Locked_2 = 0 then 1 else 0 end as InProgress_3, " +
            "0 as PendingForApproval_3, " +
            "case when Answered_2 = 1 and Locked_2 = 0 then 1 else 0 end as PendingForLock_3, " +
            "case when Locked_2 = 1 then 1 else 0 end as Completed_3 " +
            "from ( select TrialId_1, WorkflowId_1, TrialId_2, WorkflowId_2, Answered_2, Locked_2 " +
            "from (select t.TrialId as TrialId_1, w.WorkflowId as WorkflowId_1 from trial t, workflow w) as tw2 " +
            "left outer join (select tp.TrialId as TrialId_2, tp.WorkflowId as WorkflowId_2, tp.Answered as Answered_2, " +
            "tp.Locked as Locked_2 from trialprogress tp) as tp2 " +
            "on tw2.TrialId_1 = tp2.TrialId_2 and tw2.WorkflowId_1 = tp2.WorkflowId_2)) group by WorkflowId_3 ) as f " +
            "inner join workflow as w on f.WorkflowId = w.WorkflowId order by w.WorkflowOrder asc";


        var deferred = $.Deferred();

        persistence.transaction(function (tx) {
            tx.executeSql(
                qry,
                null,
                function (data) {
                    var filterData = [];
                    //debugger;
                    var i, len;
                    for (i = 0, len = data.length; i < len; i += 1) {

                        var d = data.shift();

                        filterData.push({
                            WorkflowId: d.WorkflowId,
                            WorkflowName: d.WorkflowName,
                            WorkflowOrder: d.WorkflowOrder,
                            InBlank: d.InBlank,
                            InProgress: d.InProgress,
                            PendingForApproval: d.PendingForApproval,
                            PendingForLock: d.PendingForLock,
                            Completed: d.Completed,
                        });
                    }
                    ;

                    deferred.resolveWith(this, [filterData])

                },
                function (tx, err) {
                    deferred.rejectWith(this, [tx, err]);
                });
        });

        return deferred.promise();

    },

};
