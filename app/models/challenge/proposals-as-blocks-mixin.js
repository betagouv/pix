import Ember from 'ember';

function parseInput(lastIsOpening, input) {
  let block = null;

  switch (input) {
    case '${':
      lastIsOpening = true;
      break;
    case undefined:
      lastIsOpening = false;
      break;
    case "":
      break;
    default:
      if (lastIsOpening) {
        block = { input: input };
      }
      else {
        block = { text: input };
      }
  }

  return { lastIsOpening, block };
}

export default Ember.Mixin.create({

  _proposalsAsBlocks: Ember.computed('proposals', function () {

    const proposals = this.get('proposals');
    if (Ember.isEmpty(proposals)) {
      return [];
    }

    const parts = proposals.split(/\s*(\${)|}\s*/);
    let result = [];

    for (const part of parts) {
      let { lastIsOpening, block } = parseInput((lastIsOpening || false), part);
      if (block) {
        result.push(block);
      }
    }

    return result;
  })
});
