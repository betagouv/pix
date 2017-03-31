/* global jsyaml */

export default function resultDetailsAsObject(yamlResultDetails) {
  const resultDetailsAsObject = jsyaml.safeLoad(yamlResultDetails);
  return resultDetailsAsObject;
}
