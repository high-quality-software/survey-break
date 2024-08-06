
/**
 * Created by hcasa on 09/30/2015.
 */

var User = Object.create({});

User.getDisplayName = function(id){
    var u = UserCache[id];
    if (typeof u !== 'undefined' && u != null) {
        return u.FirstName + ' ' + u.LastName;
    }
}

User.getPhoneNumber = function(id){
    var u = UserCache[id];
    if (typeof u !== 'undefined' && u != null) {
        return u.OfficeNumber;
    }
}

User.getSiteLocation = function(id){
    var u = UserCache[id];
    if (typeof u !== 'undefined' && u != null) {
        return u.SiteLocation;
    }
}
