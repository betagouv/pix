// QCM challenge with all field filled

function getTimer() {

  const mirageTestingState = JSON.parse(localStorage.getItem('mirageTestingState'));
  // console.log('mirageTestingState- - - - - - - - - - - - - - - - - - - - ', mirageTestingState);
  return mirageTestingState && mirageTestingState.stubTimer ? mirageTestingState.stubTimer : 2;
  // return window.mirageTestingState && window.mirageTestingState.stubTimer ? window.mirageTestingState.stubTimer : 2;
  // if (mirageTestingState) {
  //   return mirageTestingState.stubTimer;
  // }
  // return 2;
}

export default {
  recalculate: function() {
    this.data.attributes.timer = getTimer();
  },
  data: {
    type: 'challenges',
    id: 'ref_qcm_challenge_id',
    attributes: {
      type: 'QCM',
      timer: getTimer(),
      instruction: 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir [plusieurs](http://link.plusieurs.url)',
      attachments: ['http://example_of_url'],
      'illustration-url': 'http://fakeimg.pl/350x200/?text=PictureOfQCM',
      proposals: '- possibilite 1, et/ou' +
              '\n - possibilite 2, et/ou' +
              '\n - possibilite 3, et/ou' +
              '\n - possibilite 4'
    }
  }
};
