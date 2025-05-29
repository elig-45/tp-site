// Fichier contenant le questionnaire
const questionnaire = [
    {
        qlabel: "Quelle est la date de naissance d'Eli Goldsztejn ?",
        qid: 1,
        reponses: [
            { rlabel: "10/05/2005", rid: 1, correct: true },
            { rlabel: "15/08/2004", rid: 2, correct: false },
            { rlabel: "20/07/2006", rid: 3, correct: false },
            { rlabel: "01/01/2005", rid: 4, correct: false }
        ]
    },
    {
        qlabel: "Dans quelle école Eli poursuit-il son Bachelor en CyberDéfense ?",
        qid: 2,
        reponses: [
            { rlabel: "EPITA", rid: 1, correct: true },
            { rlabel: "ENS", rid: 2, correct: false },
            { rlabel: "Polytechnique", rid: 3, correct: false },
            { rlabel: "HEC", rid: 4, correct: false }
        ]
    },
    {
        qlabel: "Quel est le niveau d'anglais d'Eli ?",
        qid: 3,
        reponses: [
            { rlabel: "Débutant", rid: 1, correct: false },
            { rlabel: "Intermédiaire", rid: 2, correct: false },
            { rlabel: "Avancé", rid: 3, correct: false },
            { rlabel: "Bilingue natif", rid: 4, correct: true }
        ]
    }
];

export default questionnaire;
