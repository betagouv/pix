import Ember from 'ember';
import _ from 'pix-live/utils/lodash-custom';

export default Ember.Mixin.create({

  /*
  * Convert "1,2,4" into [true, true, false, true]
  */
  _valueAsArrayOfBoolean: Ember.computed('value', function () {
    let result = [];

    const currentValue = this.get('value');
    // currentValue is "1,2,4"


    if (_.isNonEmptyString(currentValue)) {
      const arrayValues = currentValue.split(',');
      // arrayValues is [1,2,4]
      const maxValue = _.max(arrayValues) + 1;
      // maxValue is 4

      result = _.fill(Array(maxValue), false);
      // result is [false, false, false, false]


      _.each(arrayValues, (arrayValue) => {
        result[arrayValue - 1] = true;
      });
      // result is [true, true, false, true]
    }

    return result;
  })

});

