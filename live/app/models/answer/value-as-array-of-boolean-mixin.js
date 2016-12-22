import Ember from 'ember';
// import _ from 'pix-live/utils/lodash-custom';
import stringToArrayOfBoolean from 'pix-live/utils/string-to-array-of-boolean';

export default Ember.Mixin.create({

  /*
  * Convert "1,2,4" into [true, true, false, true]
  */
  _valueAsArrayOfBoolean: Ember.computed('value', function () {
    return stringToArrayOfBoolean(this.get('value'));
  })

});

