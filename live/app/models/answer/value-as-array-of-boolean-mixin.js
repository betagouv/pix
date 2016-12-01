import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  
  _valueAsArrayOfBoolean: Ember.computed('value', function () {
    let result = [];
    
    let arrayValues = this.get('value').split(',');
    let rawValues = _.map(arrayValues, (rawValue) => { return rawValue - 1; });
    let maxValue = _.max(rawValues) + 1;
    
    result = _.range(maxValue).map(() => { return false; });

    _.each(rawValues, (rawValue) => {
      result[rawValue] = true;
    });

    return result;
  })

});

