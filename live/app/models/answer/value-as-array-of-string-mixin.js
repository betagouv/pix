import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  
  _valuesAsMap: Ember.computed('value', function () {
    try {
      let result = {};
      
      let arrayValues = this.get('value').split(',');

      _.each(arrayValues, (arrayValue) => {
        let keyVal = arrayValue.split(' = ');
        result[keyVal[0].trim()] = keyVal[1].slice(1, -1);
      });

      return result;      
    } catch (e) {
      return undefined;
    }
  })

});

