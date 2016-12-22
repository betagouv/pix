import Ember from 'ember';
// import _ from 'pix-live/utils/lodash-custom';
import stringToArrayOfBoolean from 'pix-live/utils/string-to-array-of-boolean';

export default Ember.Mixin.create({

  /*
  * Convert "1,2,4" into [true, true, false, true]
  */
  _valueAsArrayOfBoolean: Ember.computed('value', function () {
    return stringToArrayOfBoolean(this.get('value'));
//     let result = [];

//     const currentValue = this.get('value');
// console.log('currentValue- - - - - - - - - - - - - - - - - - - - ', currentValue);

//     if (_.isString(currentValue) && currentValue.length > 0) {
//       const arrayValues = currentValue.split(',');
//       const rawValues = _.map(arrayValues, (rawValue) => rawValue - 1);
//       const maxValue = _.max(rawValues) + 1;

//       result = _.range(maxValue).map(() => false );

//       _.each(rawValues, (rawValue) => {
//         result[rawValue] = true;
//       });
//     }

//   console.log('_valueAsArrayOfBoolean- - - - - - - - - - - - - - - - - - - - ', result);
//     return result;
  })

});

