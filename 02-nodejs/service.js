var devfest = require("./data/devfest-2015");

function listerTousLesPresentateurs() {
    return devfest.speakers;
}

function listerToutesLesSessions() {
    return devfest.sessions;
}

function trouverUneSession(idSession) {
    var index = devfest.sessions.findIndex(s => s.id == idSession);
    return devfest.sessions[index];
}

function listerTopPresentateurs() {
    return devfest.speakers.filter(sp => sp.topspeaker == true);
}

exports.listerTousLesPresentateurs = listerTousLesPresentateurs;
exports.listerToutesLesSessions = listerToutesLesSessions;
exports.trouverUneSession = trouverUneSession;
exports.listerTopPresentateurs = listerTopPresentateurs;