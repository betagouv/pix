module.exports = {

  emailIsValid(email) {
    if (!email) {
      return false;
    }

    const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return pattern.test(email.trim());
  }
};
