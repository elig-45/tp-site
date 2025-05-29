// Fichier contenant le questionnaire
const questionnaire = [
  {
    qlabel: "Quelle est la date de naissance d'Eli Goldsztejn ?",
    qid: 1,
    reponses: [
      { rlabel: "10/05/2005", rid: 1 },
      { rlabel: "15/08/2004", rid: 2 },
      { rlabel: "20/07/2006", rid: 3 },
      { rlabel: "01/01/2005", rid: 4 }
    ]
  },
  {
    qlabel: "Dans quelle école Eli poursuit-il son Bachelor en CyberDéfense ?",
    qid: 2,
    reponses: [
      { rlabel: "EPITA", rid: 1 },
      { rlabel: "ENS", rid: 2 },
      { rlabel: "Polytechnique", rid: 3 },
      { rlabel: "HEC", rid: 4 }
    ]
  },
  {
    qlabel: "Quel est le niveau d'anglais d'Eli ?",
    qid: 3,
    reponses: [
      { rlabel: "Débutant", rid: 1 },
      { rlabel: "Intermédiaire", rid: 2 },
      { rlabel: "Avancé", rid: 3 },
      { rlabel: "Bilingue natif", rid: 4 }
    ]
  }
];

export default questionnaire;
