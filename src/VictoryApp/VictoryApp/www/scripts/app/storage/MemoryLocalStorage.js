
/**
 * Created by hcasa on 10/25/2015.
 */



var MemoryLocalStorage = Object.create(LocalStorage);

MemoryLocalStorage.conf = function() {
    persistence.store.memory.config(
    persistence,
    'victory');
};
