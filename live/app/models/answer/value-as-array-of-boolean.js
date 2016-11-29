import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  
  _valueAsArrayOfBoolean: Ember.computed('value', function () {
    let result = [];
    
    let arrayValues = this.get('value').split(',');
    let rawValues = _.map(arrayValues, (rawValue, index) => { return rawValue - 1; });
    let maxValue = _.max(rawValues);
    
    result = _.range(rawValues).map(() => { return false; });

    _.each(rawValues, (rawValue, index) => {
      result[rawValue] = true;
    });

    return result;
  })

});

