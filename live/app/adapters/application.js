import DS from 'ember-data'
import ENV from 'pix-live/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'; 

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {

  namespace: 'api',
  host: ENV.APP.API_HOST
  authorizer: 'authorizer:custom'
});
