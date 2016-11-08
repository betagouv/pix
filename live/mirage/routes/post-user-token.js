import Mirage from 'ember-cli-mirage';

function hasInvalidEmail(params) {
  return params && params.auth && params.auth.email  && params.auth.email.indexOf('invalid') > -1;
}

export default function (schema, request) {

 var params = JSON.parse(request.requestBody);

  if (hasInvalidEmail(params)) {
    return new Mirage.Response(422, {some: 'header'}, {data: ['l\'email n\'est pas valide']});
  } else {
    return new Mirage.Response(200);
  }

}
