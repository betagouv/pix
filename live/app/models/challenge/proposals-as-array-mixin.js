import Ember from 'ember';
import _ from 'pix-live/utils/lodash-custom';

function calculate(proposals) {
  return _.chain(proposals)
            .thru((e) => '\n' + e)
            .split(/\n\s*-\s*/)
            .removeFirstElement()
            .value();
}

export default Ember.Mixin.create({
  _proposalsAsArray: Ember.computed('proposals', function () {

    const proposals = this.get('proposals');
    return _.cond([
      [() => _(proposals).isNotString(), _.stubArray ],
      [() => _(proposals).isEmpty(),  _.stubArray ],
      [_.ok,                          () => calculate(proposals)  ]
    ])();

  })
});


