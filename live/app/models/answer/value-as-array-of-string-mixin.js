import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  
  _valueAsArrayOfString: Ember.computed('value', function () {
    let result = [];
    
    let arrayValues = this.get('value').split(',');

    _.each(arrayValues, (arrayValue) => {
      let keyVal = arrayValue.split(' = ');
      keyVal[1] = keyVal[1].slice(1, -1);
      result.push(keyVal);
    });

    return result;
  })

});

