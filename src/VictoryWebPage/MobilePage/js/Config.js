var WebVersion = "APP v.1.5.5";
var APIUrl = "";

if (document.domain == 'localhost') {
    APIUrl = 'http://localhost:51594/API/';
}
else if (document.domain == 'pb4tvcz') {
    APIUrl = 'http://w3d.victory.monsanto.com/victoryAPI/API/';
}
else if (document.domain.substr(0, 3) == "w3d") {
    APIUrl = 'http://w3d.victory.monsanto.com/victoryAPI/API/';
}
else if (document.domain.substr(0, 3) == "w3t") {
    APIUrl = 'http://w3t.victory.monsanto.com/victoryAPI/API/';
}
else if (document.domain.substr(0, 3) == "w3.") {
    APIUrl = 'http://w3.victory.monsanto.com/victoryAPI/API/';
}

var LoginUrl = APIUrl + 'login/';
var HealthUrl = APIUrl + 'health/status';
var PingUrl = APIUrl + 'health/ping';

function getLocalStorageVersion()
{
    var LSVersion = "LS v.";
    var login = JSON.parse(localStorage.getItem("Login"));
    if (login != null) {
        LSVersion += login.LSVersion;
    }
    return LSVersion;
}
