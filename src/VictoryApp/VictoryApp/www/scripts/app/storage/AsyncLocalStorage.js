
/**
 * Created by hcasa on 10/25/2015.
 */

var AsyncLocalStorage = Object.create(LocalStorage);

AsyncLocalStorage.conf = function() {
    persistence.store.websql.config(
        persistence,
        'victory_mobile.sqlite',
        'victory mobile local database',
        5 * 1024 * 1024);
};