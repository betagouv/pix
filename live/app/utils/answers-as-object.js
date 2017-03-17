/* global jsyaml */

export default function answersAsObject(answer) {
  let answersObject = {};
  if (answer != '#ABAND#') {
    answersObject = jsyaml.safeLoad(answer);
  }
  return answersObject;
}
