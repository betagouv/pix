const CertificationCourse =  require('../../domain/models/data/certification-course');

module.exports = {

  save(){
    const certificationCourse = new CertificationCourse();
    return certificationCourse.save()
      .then((savedCertificationCours) => {
        return savedCertificationCours.attributes;
      });
  }
}
