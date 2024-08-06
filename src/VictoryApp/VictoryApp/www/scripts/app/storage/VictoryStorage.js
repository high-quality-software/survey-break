/**
 * Created by hcasa on 10/25/2015.
 */
//
//
//Repository.prototype = {
//
//    getLength: function () {
//
//        log.debug('executing getLength function');
//
//        var countDeferred = $.Deferred();
//
//        var res1 = this._db.transaction(function (tx) {
//            var sql = 'SELECT count(id) as cnt FROM key_value';
//            log.debug('executing select count statement: ' + sql);
//
//            var res2 = tx.executeSql(sql, [], function (tx, res) {
//                var length = res.rows.item(0).cnt;
//                deferred.resolveWith(this, [cnt]);
//                log.debug('reading select count result: ' + JSON.stringify(res));
//            });
//
//        });
//
//        //TODO:move to then() clause
//        //log.debug('returning getLength value:' + JSON.stringify(length));
//
//        return countDeferred.promise();
//
//    },
//
//    setItem: function (key, value) {
//        log.debug('executing setItem function');
//
//        var deferred = $.Deferred();
//
//        var res1 = this._db.transaction(function (tx) {
//            var sql = "INSERT OR REPLACE INTO key_value (id, data) VALUES(?, ?)";
//            log.debug('executing insert or replace statement: ' + sql + "; ['" + key + "', '" + value + "']");
//            var res2 = tx.executeSql(sql, [key, value], function (tx, res) {
//                var item = {id: key, data: value};
//                deferred.resolveWith(this, item);
//                log.debug('reading insert or replace result: ' + JSON.stringify(res));
//            });
//        });
//
//        return deferred.promise();
//    },
//
//    removeItem: function (key) {
//        log.debug('executing deleteItem function');
//
//        var deferred = $.Deferred();
//
//        var res1 = this._db.transaction(function (tx) {
//            var sql = 'DELETE FROM key_value WHERE id = ?';
//            log.debug('executing delete from where statement: ' + sql + "; ['" + key + "']");
//            var res2 = tx.executeSql(sql, [key], function (tx, res) {
//                deferred.resolveWith(this, [res]);
//                log.debug('reading delete from where result: ' + JSON.stringify(res));
//            });
//        });
//
//        return deferred.promise();
//    },
//
//    key: function (index) {
//        log.debug('executing key function');
//
//        var deferred = $.Deferred();
//
//        var res1 = this._db.transaction(function (tx) {
//            var sql = 'SELECT id FROM key_value LIMIT 1 OFFSET ?';
//            log.debug('executing select from limit offset statement: ' + sql + "; [" + index + "]");
//            var res2 = tx.executeSql(sql, [index], function (tx, res) {
//                log.debug('reading select from limit offset result: ' + JSON.stringify(res));
//            });
//
//        });
//
//        log.debug('returning key value:' + JSON.stringify(id));
//        return id;
//    },
//
//    getItem: function (key) {
//        log.debug('executing getItem function');
//
//        var deferred = $.Deferred();
//
//        var res1 = this._db.transaction(function (tx) {
//            var sql = 'SELECT data FROM key_value WHERE id = ?';
//            log.debug('executing select from where statement: ' + sql + "; ['" + key + "']");
//            var res2 = tx.executeSql(sql, [key],
//                function (tx, res) {
//                    log.debug('reading select from where result: ' + JSON.stringify(res));
//                    var value = res.rows.item(0).data;
//                    var item = {id: key, data: value};
//                    deferred.resolveWith(this, item);
//                }, function (error) {
//                    log.error('error reading select from where result: ' + JSON.stringify(error));
//                    deferred.rejectWith(this, item);
//                });
//        });
//
//        //TODO: move to then clause
//        //log.debug('returning getItem value:' + JSON.stringify(data));
//
//        return deferred.promise();
//    },
//
//
//}
