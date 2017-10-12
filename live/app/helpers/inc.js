import Helper from '@ember/component/helper';

export function inc(params) {
  return params[0] + 1;
}

export default Helper.helper(inc);
