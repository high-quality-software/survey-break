/**
 * Created by hcasa on 11/09/2015.
 */

var AppVersion = Object.create({});

AppVersion.major = 0;

AppVersion.minor = 0;

AppVersion.build = 0;

AppVersion.isGreatOrEquals = function (currentVersion) {

    if (this.major >= currentVersion.major
        && this.minor >= currentVersion.minor
        && this.build >= currentVersion.build) {
        return true;
    } else {
        return false;
    }
};

AppVersion.isLessOrEquals = function (currentVersion) {
    if (this.major <= currentVersion.major
        && this.minor <= currentVersion.minor
        && this.build <= currentVersion.build) {
        return true;
    } else {
        return false;
    }
};

AppVersion.createFromString = function (version) {

    var appVersion = Object.create(AppVersion);

    var v = version.split('.');
    if (v.length == 3) {
        appVersion.major = parseInt(v[0]);
        appVersion.minor = parseInt(v[1]);
        appVersion.build = parseInt(v[2]);
    }

    return appVersion;

};
