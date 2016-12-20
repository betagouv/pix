import _ from 'lodash/lodash';

_.mixin({
  isAmongst: function(element, collection) {
    return _.includes(collection, element);
  }
});

export default _;
