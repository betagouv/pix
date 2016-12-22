import _ from 'pix-live/utils/lodash-custom';

export default function stringToArrayOfBoolean (csvString) {
  _.chain(csvString) // in the worst case : ',4, 2 , 2,1,  ,'
   .checkPoint((e) => _.isString(e) ? e : '') // check if string
   .split(',') // now ['', '4', ' 2 ', ' 2', '1', '  ', '']
   .map(_.trim) // now ['', '4', '2', '2', '1', '', '']
   .filter(_.isTruthy) // now ['4', '2', '2', '1']
   .checkPoint((e) => _.every(e, _.isNormalPositiveInteger) ? e : []) // check if > 0
   .map(_.parseInt) // now [4, 2, 2, 1]
   .sortBy((e) => e) // now [1, 2, 2, 4]
   .uniqBy((e) => e) // now [1, 2, 4]
   .map((e) => e - 1) // now [0, 1, 3]
   .thru(function (e) {
     const suiteOfInteger = _.times(_.max(e) + 1, Number); // simply create [0,1,2,3]
     return _.map(suiteOfInteger, (o, i) => _(e).includes(i));
   })
   .value();
}
