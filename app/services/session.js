import Ember from 'ember';

export default Ember.Service.extend({
  firstname: "",
  lastname: "",
  email: "",
  isIdentified: false,

  init() {
    this._super(...arguments);
    let session = localStorage.getItem('pix-app.session');
    if (!Ember.isEmpty(session)) {
      const session = JSON.parse(session);
      this.set('firstname', session.firstname);
      this.set('lastname', session.lastname);
      this.set('email', session.email);
      this.set('isIdentified', true);
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
