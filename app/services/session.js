import Ember from 'ember';

export default Ember.Service.extend({
  firstname: "",
  lastname: "",
  email: "",
  isIdentified: false,

  init() {
    this._super(...arguments);
    let session = localStorage.getItem('pix-live.session');
    if (!Ember.isEmpty(session)) {
      try {
        session = JSON.parse(session);
        this.setProperties({
          firstname: session.firstname,
          lastname: session.lastname,
          email: session.email,
          isIdentified: true
        });
      } catch(e) {
        Ember.Logger.warn('bad session. Continuing with an empty session');
      }
    }
  },

  save() {
    const session = {
      firstname: this.get('firstname'),
      lastname: this.get('lastname'),
      email: this.get('email')
    };

    localStorage.setItem('pix-live.session', JSON.stringify(session));
  }
});
