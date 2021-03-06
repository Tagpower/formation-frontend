const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const service = require('./service');

var menu = function() {

    rl.question("\n\n*** Application Conférence ***\n"
              + "1) Liste de tous les présentateurs\n"
              + "2) Top présentateurs\n"
              + "3) Liste des sessions\n"
              + "4) Détails d'une session\n",
            function(answer) {

                switch(answer.trim()) {
                    case "1":
                        service.listerTousLesPresentateurs().forEach(function(prez) {
                            console.log(prez.firstname + ' ' + prez.lastname);
                        });
                        break;
                    case "2":
                        service.listerTopPresentateurs().forEach(function(prez) {
                            console.log(prez.firstname + ' ' + prez.lastname);
                        });
                        break;
                    case "3":
                        service.listerToutesLesSessions().forEach(function(session) {
                            console.log(session.title);
                        });
                        break;
                    case "4":
                        rl.question("Entrez l'identifiant de la session voulue : ", function(id) {
                            var session = service.trouverUneSession(id.trim()) ;
                            //console.log(session);
                            if (!session) {
                                console.log(session.desc + "\nPrésentateur(s) : " + session.speakers);
                            } else {
                                console.log("Il n'y a pas de session avec l'identifiant " + id);
                            }
                            menu();
                        });
                        break;
                    default:
                        console.log("Choix incorrect");
                }

                menu();

            } );  

}

menu();