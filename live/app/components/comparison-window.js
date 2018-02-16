import { equal } from '@ember/object/computed';
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { on } from '@ember/object/evented';
import { computed } from '@ember/object';
import $ from 'jquery';
import resultIconUrl from 'pix-live/utils/result-icon-url';
import { EKMixin, keyUp } from 'ember-keyboard';
import FocusableComponent from 'ember-component-focus/mixins/focusable-component';

const contentReference = {
  ok: {
    status: 'ok',
    title: 'Vous avez la bonne réponse !',
    tooltip: 'Réponse correcte'
  },

  ko: {
    status: 'ko',
    title: 'Vous n\'avez pas la bonne réponse',
    tooltip: 'Réponse incorrecte'
  },

  aband: {
    status: 'aband',
    title: 'Vous n\'avez pas donné de réponse',
    tooltip: 'Sans réponse'
  },

  partially: {
    status: 'partially',
    title: 'Vous avez donné une réponse partielle',
    tooltip: 'Réponse partielle'
  },

  timedout: {
    status: 'timedout',
    title: 'Vous avez dépassé le temps imparti',
    tooltip: 'Temps dépassé'
  },

  default: {
    status: 'default',
    title: '',
    tooltip: 'Correction automatique en cours de développement ;)'
  }
};

export default Component.extend(EKMixin, FocusableComponent, {

  modal: service('current-routed-modal'),

  classNames: [ 'comparison-window' ],

  answer: null,
  challenge: null,
  solution: null,
  index: null,

  focusNode: '.routable-modal--close-button',

  isAssessmentChallengeTypeQroc: equal('challenge.type', 'QROC'),
  isAssessmentChallengeTypeQcm: equal('challenge.type', 'QCM'),
  isAssessmentChallengeTypeQcu: equal('challenge.type', 'QCU'),
  isAssessmentChallengeTypeQrocm: equal('challenge.type', 'QROCM'),
  isAssessmentChallengeTypeQrocmInd: equal('challenge.type', 'QROCM-ind'),
  isAssessmentChallengeTypeQrocmDep: equal('challenge.type', 'QROCM-dep'),

  activateKeyboard: on('init', function() {
    this.set('keyboardActivated', true);
  }),

  closeOnEsc: on(keyUp('Escape'), function() {
    this.get('modal').close();
  }),

  didInsertElement() {
    this._super(...arguments);
    this.focus();
  },

  didDestroyElement() {
    $('#open-comparison_' + this.get('index')).focus();
  },

  resultItem: computed('answer.result', function() {
    let resultItem = contentReference['default'];
    const answerStatus = this.get('answer.result');

    if (answerStatus && (answerStatus in contentReference)) {
      resultItem = contentReference[answerStatus];
    }
    return resultItem;
  }),

  resultItemIcon: computed('resultItem', function() {
    return resultIconUrl(this.get('resultItem.status'));
  }),

  helpData: {
    '@calcul2': {
      clue:'Une fois que vous avez repéré le nom « Laure » dans le tableau, regardez la lettre de sa colonne et le numéro de sa ligne…',
      tutorials:[
        {
          title:'Références de cellules',link:'https://support.office.com/fr-fr/article/Comprendre-et-utiliser-les-r%C3%A9f%C3%A9rences-de-cellule-ecb125bb-c0cb-48c1-b30f-cdb3aec052b1',type:'Références de cellules',duration:'1 mn',from:'support Microsoft'
        }],
      more:[
        { title:'Casenpoche tableur en ligne',link:'http://casenpoche.sesamath.net/',type:'outil',duration:'0 mn',from:'mathenpoche' }, { title:'Faire un calcul simple sur openoffice Tableur (part2)',link:'https://www.youtube.com/watch?v=7y8UNIyr78Y',type:'video',duration:'3 mn',from:'chaine : djformations' }, { title:'Découverte du tableur openoffice Calc',link:'https://jemeformeaunumerique.fr/2010/04/21/decouvrir-le-tableur-dopenoffice/',type:'page',duration:'4 mn',from:'jemeformeaunumérique' }]
    },
    '@graphique2':{
      clue:'La hauteur de chaque barre permet de lire le score de la personne, sur l’axe vertical à gauche. Il faut trouver quel graphique affiche les mêmes scores que dans le tableau.',
      more:[ { title:'Cours Excel : insertion de graphiques',link:'https://www.excel-pratique.com/fr/cours/excel_insertion_graphiques.php',type:'page',duration:'6 mn',from:'excel-pratique' }, { title:'Sélectionner les données pour un graphique',link:'https://support.office.com/fr-fr/article/S%C3%A9lectionner-des-donn%C3%A9es-pour-un-graphique-5fca57b7-8c52-4e09-979a-631085113862',type:'page',duration:'3 mn',from:'support office' }]
    },
    '@calcul3':{
      clue:'Inutile de sortir une calculatrice :-) On peut utiliser une formule avec la fonction SOMME. ',
      tutorials:[{ title:'Découverte du tableur openoffice Calc',link:'https://jemeformeaunumerique.fr/2010/04/21/decouvrir-le-tableur-dopenoffice/',type:'Découverte du tableur openoffice Calc',duration:'4 mn',from:'jemeformeaunumérique' }]
    },
    '@extraire3':{
      clue:'Avez-vous cliqué sur les petits triangles à côté des titres des colonnes du tableau ? C’est là qu’on peut choisir de n’afficher que les lignes qui nous intéressent.'
    },
    '@form_intero3':{
      clue:'-',
      tutorials:[{ title:'Qu\'est ce qu\'un tableur ? ',link:'http://www.courstechinfo.be/Excel/Tableur.html',type:'Qu\'est ce qu\'un tableur ? ',duration:'1 mn',from:'courstechinfo' }]
    },
    '@tri4':{
      clue:'On peut faire un tri sur n\'importe quelle colonne du tableau. Savoir choisir sur quelle colonne le faire est important.',
      tutorials:[{ title:'Trier et filtrer des donnée sExcel',link:'http://www.linternaute.com/hightech/guide-high-tech/1412955-excel-trier-et-filtrer-ses-donnees/',type:'Trier et filtrer des données Excel',duration:'2 mn',from:'linternaute' }, { title:'Trier et fltrer : les bases des feuilles de calcul',link:'https://ecoledesdonnees.org/handbook/cours/trier-et-filtrer/',type:'page',duration:'6 mn',from:'ecoledesdonnees' }],
      more:[{ title:'Trier des infos - Filtres (Excel)',link:'https://www.youtube.com/watch?v=uLG_6vq2CN0&index=9&list=PLXvDAEJkEN9TTc1IAEIuyxQoE7OY4wqs7',type:'video',duration:'3 mn',from:'chaine : Les Tutos de Claire' }]
    },
    '@calcul4':{
      clue:'Une formule avec les chiffres n’est pas acceptée, car il faut préférer une formule avec les références des cellules.',
      tutorials:[{ title:'Faire un calcul simple sur openoffice Tableur (part2)',link:'https://www.youtube.com/watch?v=7y8UNIyr78Y',type:'Faire un calcul simple sur openoffice Tableur (part2)',duration:'3 mn',from:'chaine : djformations' }, { title:'Les opérateurs de calculs',link:'http://www.mdf-xlpages.com/modules/publisher/item.php?itemid=169',type:'page',duration:'3 mn',from:'mdf-xlpages' }, { title:'Formules',link:'http://www.courstechinfo.be/Excel/Formules.html',type:'page',duration:'1 mn',from:'??' }],
      more:[ { title:'Comment utiliser un tableur, en 5 minutes. Pour débutant. Collège',link:'https://www.youtube.com/watch?v=Sip8z24vUZU',type:'video',duration:'5 mn',from:'chaine : Ikariam Tutoriel QuentinBB' }, { title:'Dans un tableur quelles sont les références de cellules syntaxiquement valide ?',link:'https://www.c2i-revision.fr/complement.php?id_con=448',type:'page',duration:'1 mn',from:'c2i-revision' }]
    },
    '@form_intero4':{
      clue:'Il faut choisir un fichier qui comporte un tableau pour faire des calculs automatiques. Un fichier que l’on peut ouvrir avec un tableur.',
      tutorials:[{ title:'Les extensions de fichiers informatiques',link:'http://www.ateliere2m.org/wp-content/uploads/sites/19/2016/07/extensions-de-fichiers.pdf',type:'Les extensions de fichiers informatiques',duration:'5 mn',from:'médiatèque de Roanne' }],
      more:[ { title:'Les formats de fichiers bureautiques',link:'https://documentation.unistra.fr/DUN/IPM/Formats/co/texteOuvrir.html',type:'page',duration:'1 mn',from:'Univ Strasbourg' }]
    },
    '@recopie4':{
      clue:'Après la recopie, les références de cellules dans la formule se sont adaptées. Il est utile de comprendre comment ça marche, pour être capable de prévoir ce que donnera une recopie.',
      tutorials:[{ title:'Comment copier des formules dans Excel',link:'https://fr.wikihow.com/copier-des-formules-dans-Excel',type:'Comment copier des formules dans Excel',duration:'12 mn',from:'wikihow' }, { title:'03-Comprendre la recopie de formule',link:'https://www.youtube.com/watch?v=hlN1Xrg5OR4',type:'video',duration:'3 mn',from:'Sophie Formation' }],
      more:[ { title:'Références',link:'http://www.courstechinfo.be/Excel/References.html',type:'page',duration:'1 mn',from:'courstechinfo' }]
    },
    '@calcul5':{
      clue:'Faites vous bien la différence entre « A1:A3 » et « A1;A3 » ?', tutorials:[{ title:'Dans un tableur quelles sont les références de cellules syntaxiquement valide ?',link:'https://www.c2i-revision.fr/complement.php?id_con=448',type:'Dans un tableur quelles sont les références de cellules syntaxiquement valide ?',duration:'1 mn',from:'c2i-revision' }],
      more:[ { title:'Utiliser les formule Excel - Somme, soustraction, multiplication, division et moyenne',link:'https://www.youtube.com/watch?v=OvLI0T7mXUs',type:'video',duration:'14 mn',from:'chaine : Lydia Provin' }, { title:'Bien débuter avec "classeur"',link:'http://vviale.developpez.com/tutoriels/openoffice-libreoffice/tableur/#LIV-C',type:'page',duration:'20 mn',from:'Vincent viale' }, { title:'50 fonctions Excel à connaitre absolument',link:'https://www.blogdumoderateur.com/fonctions-excel/',type:'page',duration:'4 mn',from:'blogdumoderateur' }]
    },
    '@form_nb5':{
      clue:'Piège ! Dans le tableau, les moyennes affichées sont en fait arrondies. Comment faire afficher les valeurs exactes ? ',
      tutorials:[{ title:'Formatage des nombres décimaux',link:'https://help.libreoffice.org/Calc/Formatting_Numbers_With_Decimals/fr',type:'Formatage des nombres décimaux',duration:'0 mn',from:'help.libreoffice' }],
      more:[ { title:'Les formats numériques (Excel)',link:'https://www.youtube.com/watch?v=uX9-yanhh6Y',type:'video',duration:'3 mn',from:'chaine : Les Tutos de Claire' }, { title:'Format des nombres dans Excel',link:'https://www.youtube.com/watch?v=_5wcVjYZyw0',type:'video',duration:'6 mn',from:'excel-exercice' }, { title:'Gérer le format de cellule sous excel',link:'https://www.youtube.com/watch?v=HUUCY_oZYrU',type:'video',duration:'13 mn',from:'chaine : jp baillaud' }]
    },
    '@recopie5':{
      clue:'On a utilisé une référence de cellule absolue, notée avec des dollars ($). Pourquoi ?',
      tutorials:[{ title:'Références',link:'http://www.courstechinfo.be/Excel/References.html',type:'Références',duration:'1 mn',from:'courstechinfo' }],
      more:[ { title:'Référence mixte',link:'https://www.excel-exercice.com/reference-mixte/',type:'video',duration:'10 mn',from:'excel-exercice' }, { title:'Tuto # 10 - Utilisation du symbole $',link:'https://www.youtube.com/watch?v=QOqNrm_SIOc',type:'video',duration:'3 mn',from:'chaine : Les Tutos de Claire' }]
    },
    '@remplir6':{
      clue:'Les résultats à ajouter sont sur une autre feuille. Il faut regarder sur les onglets en bas et choisir la bonne feuille.', tutorials:[{ title:'Manipuler les lignes',link:' les colonnes et les celluls dans Excel',type:'Manipuler les lignes',duration:'7 mn',from:'chaine : jp baillaud' }]
    }
  },

  help: computed('challenge', function() {
    const data = this.get('helpData');
    const skills = this.get('challenge.skills');
    let id = false;
    if (skills && skills.length>0 && skills[0].name) {
      id = skills[0].name;
    }
    const hasContents = id?(data[id]?true:false):false;
    const clue = hasContents?data[id].clue:null;
    const tutorials = hasContents?(data[id].tutorials?data[id].tutorials:null):null;
    const more = hasContents?(data[id].more?data[id].more:null):null;
    return {
      contents: hasContents,
      clue: clue,
      tutorials: tutorials,
      more: more
    };
  })
});
