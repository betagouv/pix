/* global jsyaml */

export default function answersAsObject(answer, inputKeys) {
  if (answer === '#ABAND#') {
    return inputKeys.reduce((answersObject, key) => answersAsObject[key] = '', {});
  }
  return jsyaml.safeLoad(answer);
}
