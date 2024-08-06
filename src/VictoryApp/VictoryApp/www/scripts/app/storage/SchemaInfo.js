/**
 * Created by hcasa on 11/06/2015.
 */

var SchemaInfo = Object.create({});

SchemaInfo.tables = [];
SchemaInfo.columns = [];

SchemaInfo.load = function () {

    var deferred = $.Deferred();

    SchemaInfo.tables = [];

    $.when(SchemaInfo.loadTables()).then(function () {

        var saveArray = [], i, len;
        for (i = 0, len = SchemaInfo.tables.length; i < len; i += 1) {
            saveArray.push(SchemaInfo.loadColumns(SchemaInfo.tables[i]));
        }

        $.when.apply($, saveArray)
            .done(function () {
                //debugger;
                deferred.resolve();
            })
            .fail(function () {
                //debugger;
                deferred.reject();
            })
            .progress(function () {
                //debugger;
                deferred.notify();
            });

    });

    return deferred.promise();

}

SchemaInfo.loadTables = function () {

    var dfd = $.Deferred();

    var res1 = persistence.transaction(function (tx) {
        var res2 = tx.executeSql("SELECT name FROM sqlite_master where type like 'table'", [],
            function (res) {

                var i, len;
                for (i = 0, len = res.length; i < len; i += 1) {
                    var table = res[i];
                    if (table.name != 'schema_version'){
                        SchemaInfo.tables.push(table.name);
                    }
                }

                dfd.resolve();

            },
            function () {
                dfd.resolve();
            });
    });

    return dfd.promise();

};

SchemaInfo.loadColumns = function (tableName) {

    var dfd = $.Deferred();

    SchemaInfo.columns = [];

    var res1 = persistence.transaction(function (tx) {
        var res2 = tx.executeSql("select * from " + tableName + " limit 1", [],
            function (res) {
                if (typeof res !== 'undefined' && res != null) {
                    for (var propertyName in res[0]) {
                        if (propertyName != 'id') {
                            SchemaInfo.columns.push({table: tableName, column: propertyName});
                        }
                    }
                }
                dfd.resolve();
            },
            function () {
                dfd.resolve();
            });
    });

    return dfd.promise();
}

function ShowSchemaInfo() {

    $.when(SchemaInfo.load()).then(function () {

        var i, len;
        var output = '<table><thead><tr><th>Table Name</th><th>Column Name</th></tr></thead>';

        for (i = 0, len = SchemaInfo.columns.length; i < len; i += 1) {

            var info = SchemaInfo.columns[i];
            output += '<tr><td>' + info.table + '</td><td>' + info.column + '</td></tr>';
        }

        output += "</table>";

        $("#SchemaInfoContent").html(output);
        $("#SchemaInfo").popup();
        $("#SchemaInfo").popup('open');

    });


}