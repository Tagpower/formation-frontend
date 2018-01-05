var devfest = require("./data/devfest-2015");

function listerTousLesPresentateurs() {
    return devfest.speakers;
}

function listerToutesLesSessions() {
    return devfest.sessions;
}

function trouverUneSession(idSession) {
    return devfest.sessions.find(s => s.id == idSession);
}

function listerTopPresentateurs() {
    return devfest.speakers.filter(sp => sp.topspeaker == true);
}

exports.listerTousLesPresentateurs = listerTousLesPresentateurs;
exports.listerToutesLesSessions = listerToutesLesSessions;
exports.trouverUneSession = trouverUneSession;
exports.listerTopPresentateurs = listerTopPresentateurs;