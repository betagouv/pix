import Ember from 'ember';

export default Ember.Mixin.create({
  _QROC_proposalsAsBlocks: Ember.computed('proposals', function () {

    const proposals = this.get('proposals');
    if (Ember.isEmpty(proposals)) {
      return [];
    }

    const parts = proposals.split(/\s*(\${)|}\s*/);
    let result = [];

    let lastIsOpening = false;
    for (const part of parts) {
      switch (part) {
        case '${':
          lastIsOpening = true;
          continue;
        case undefined:
          lastIsOpening = false;
          continue;
        case "":
          continue;
        default:
          if (lastIsOpening) {
            result.push({input: part});
          } else {
            result.push({text: part});
          }
          continue;
      }
    }

    return result;
  })
});
