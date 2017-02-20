import Ember from 'ember';
const resultContent = {
  ok: {
    title: 'Réponse correcte',
    icon: '',
    color: '#30d5b0'
  },

  aband: {
    title: 'Réponse incorrecte',
    icon: '',
    color: '#ff4600'
  },

  partially: {
    title: 'Sans réponse',
    icon: '',
    color: '#3e4149'
  },

  ko: {
    title: 'Réponse partielle',
    icon: '',
    color: '#ffffff'
  },

  timedout: {
    title: 'Temps dépassé',
    icon: '',
    color: '#ff0000'
  },

  default: {
    title: 'Correction automatique en cours de développement ;)',
    icon: '',
    color: '#446eff'
  }

};

const resultList = Ember.Component.extend({
  resultContent: Ember.computed('answer', function () {
    resultContent[this.get('answer.resultStatus')];
  })
});


resultList.reopenClass({
  positionalParams: ['answer', 'index']
});

export default resultList;
