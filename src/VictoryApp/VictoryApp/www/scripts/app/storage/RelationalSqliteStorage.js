
/**
 * Created by hcasa on 10/25/2015.
 */


var RelationalSqliteStorage = Object.create(LocalStorage);

RelationalSqliteStorage.conf = function() {
    persistence.store.cordovasql.config(
            persistence,
            'victory_mobile.sqlite',
            '2.0.15',                    // DB version
            'victory mobile local database',  // DB display name
            0,                          // DB size (WebSQL fallback only)
            0,                          // SQLitePlugin Background processing disabled
            2                           // DB location (iOS only),
                                            // 0 (default): Documents,
                                            // 1: Library,
                                            // 2: Library/LocalDatabase
                                            // 0: iTunes + iCloud,
                                            // 1: NO iTunes + iCloud,
                                            // 2: NO iTunes + NO iCloud
        );
};
