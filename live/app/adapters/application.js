import DS from 'ember-data'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'; 
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {

  namespace: 'api',
  host: EmberENV.pixApiHost,
  authorizer: 'authorizer:custom'
});
