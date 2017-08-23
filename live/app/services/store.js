import DS from 'ember-data';
import RSVP from 'rsvp';

export default DS.Store.extend({

  findRecordLazily(model, id) {

    return new RSVP.Promise(function(resolve) {
      const modelAlreadyInStore = this.peekRecord(model, id);

      if(modelAlreadyInStore) {
        return resolve(modelAlreadyInStore);
      }

      resolve(this.queryRecord(model, id));
    }.bind(this));
  }

});
