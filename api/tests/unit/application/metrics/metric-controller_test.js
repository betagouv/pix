const { describe, it, expect, sinon } = require('../../../test-helper');

const metricController = require('../../../../lib/application/metrics/metric-controller');

describe.only('Unit | Controller | metricController', () => {

  describe('#get', () => {
    it('should return default prometheus metrics', () => {
      // given
      let result = null;
      let replyStub = (text) => { result = text; return { code(){}, type(){} } }

      // when
      metricController.get(null, replyStub);

      // then
      expect(result).to.contains('process_cpu_seconds_total')
    });

    it('should return metric api_request_total', () => {
      // given
      let result = null;
      let replyStub = (text) => { result = text; return { code(){}, type(){} } }

      // when
      metricController.get(null, replyStub);

      // then
      expect(result).to.contains('api_request_total')
    });

    it('should return metric api_request_success', () => {
      // given
      let result = null;
      let replyStub = (text) => { result = text; return { code(){}, type(){} } }

      // when
      metricController.get(null, replyStub);

      // then
      expect(result).to.contains('api_request_success')
    });
  });
});
