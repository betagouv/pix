const PROJECT_ROOT = '../../../..';
const TESTS_ROOT = `${PROJECT_ROOT}/tests`;

const { describe, it, expect } = require(`${TESTS_ROOT}/test-helper`);
const { EventEmitter } = require('events');
const Metrics = require(`${PROJECT_ROOT}/lib/infrastructure/plugins/metrics`);

describe('Unit | Plugins | Metrics', () => {

  beforeEach(() => {
    Metrics.reset();
  });

  it('should be exposed as a Hapi Plugin', () => {
    expect(Metrics.register.attributes).to.contains.all.keys({
      name: 'Metrics-plugin',
    });
  });

  it('should set the default labels to current instance', () => {
    expect(Metrics.metrics.metrics()).to.contains('instance=');
  });

  describe('#register', () => {
    it('should be a function', () => {
      expect(Metrics.register).to.be.an.instanceOf(Function);
    });
  });

  function extractNumericValueFromSingleMetric(metricName, allMetrics) {
    const metricLine = allMetrics
      .split('\n')
      .find((line) => line.startsWith(metricName));

    if (metricLine === undefined) {
      throw new Error(`Expected metric ${metricName} to be found in:\n${allMetrics}`);
    }

    const matches = /(\d+)\s*$/.exec(metricLine);

    if (matches === undefined) {
      throw new Error(`Expected to find numeric value in ${metricLine}`);
    }

    return matches[1];
  }

  function extractQuantileForMetric(metricName, quantile, path, allMetrics) {
    const metricLine = allMetrics
      .split('\n')
      .find((line) => line.match(new RegExp(`${metricName}.*quantile="${quantile}",path="${path}"`)));

    if (metricLine === undefined) {
      throw new Error(`Expected metric ${metricName} to be found in:\n${allMetrics}`);
    }

    const matches = /(\d+)\s*$/.exec(metricLine);

    if (matches === undefined) {
      throw new Error(`Expected to find numeric value in ${metricLine}`);
    }

    return matches[1];
  }

  class ResponseStub {
    constructor(response, info, route) {
      this.response = response;
      this.info = info;
      this.route = route;
    }
  }

  describe('the metric api_request_total', () => {

    it('should start at 0', () => {
      // given
      const prometheusMetrics = Metrics.metrics.metrics();

      // when
      const result = extractNumericValueFromSingleMetric('api_request_total', prometheusMetrics);

      // then
      expect(result).to.equals('0');
    });

    it('should increment on response event', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 200 }, { responded: 2, received: 1 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_total', prometheusMetrics);
      expect(result).to.equals('1');
    });
  });

  describe('the metric api_request_success', () => {

    it('should start at 0', () => {
      // given
      const prometheusMetrics = Metrics.metrics.metrics();

      // when
      const result = extractNumericValueFromSingleMetric('api_request_success', prometheusMetrics);

      // then
      expect(result).to.equals('0');
    });

    it('should increment on successful response event', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 200 }, { responded: 2, received: 1 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_success', prometheusMetrics);
      expect(result).to.equals('1');
    });

    it('should not increment on error response event', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 500 }, { responded: 2, received: 1 }, {}));
      serverStub.emit('response', new ResponseStub({ statusCode: 400 }, { responded: 2, received: 1 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_success', prometheusMetrics);
      expect(result).to.equals('0');
    });
  });

  describe('the metric api_request_server_error', () => {

    it('should start at 0', () => {
      // given
      const prometheusMetrics = Metrics.metrics.metrics();

      // when
      const result = extractNumericValueFromSingleMetric('api_request_server_error', prometheusMetrics);

      // then
      expect(result).to.equals('0');
    });

    it('should NOT increment on successful response event or 400s', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 200 }, { responded: 2, received: 1 }, {}));
      serverStub.emit('response', new ResponseStub({ statusCode: 400 }, { responded: 2, received: 1 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_server_error', prometheusMetrics);
      expect(result).to.equals('0');
    });

    it('should increment on error response event', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 500 }, { responded: 2, received: 1 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_server_error', prometheusMetrics);
      expect(result).to.equals('1');
    });
  });

  describe('the metric api_request_client_error', () => {

    it('should start at 0', () => {
      // given
      const prometheusMetrics = Metrics.metrics.metrics();

      // when
      const result = extractNumericValueFromSingleMetric('api_request_client_error', prometheusMetrics);

      // then
      expect(result).to.equals('0');
    });

    it('should increment on response with statusCode 400', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 400 }, { responded: 2, received: 1 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_client_error', prometheusMetrics);
      expect(result).to.equals('1');
    });

    it('should NOT increment on response event with statusCode 200 or 500', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 500 }, { responded: 2, received: 1 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_client_error', prometheusMetrics);
      expect(result).to.equals('0');
    });
  });

  describe('the metric api_request_duration', () => {

    it('should start at 0', () => {
      // given
      const prometheusMetrics = Metrics.metrics.metrics();

      // when
      const result = extractNumericValueFromSingleMetric('api_request_duration', prometheusMetrics);

      // then
      expect(result).to.equals('0');
    });

    it('should count request duration metrics', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({ statusCode: 400 }, { responded: 100, received: 50 }, {}));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();
      const result = extractNumericValueFromSingleMetric('api_request_duration_count', prometheusMetrics);
      expect(result).to.equals('1');
    });

    it('should register request duration per endpoint', () => {
      // given
      const serverStub = new EventEmitter();
      Metrics.register(serverStub, null, () => {});

      // when
      serverStub.emit('response', new ResponseStub({}, { received: 1, responded: 11 }, { path: '/api/other/{id}' }));
      serverStub.emit('response', new ResponseStub({}, { received: 1, responded: 2 }, { path: '/api/{id}' }));
      serverStub.emit('response', new ResponseStub({}, { received: 1, responded: 4 }, { path: '/api/{id}' }));

      // then
      const prometheusMetrics = Metrics.metrics.metrics();

      const routeAPIaverage50percent = extractQuantileForMetric('api_request_duration', '0.5', '/api/{id}', prometheusMetrics);
      expect(routeAPIaverage50percent).to.equal('2');

      const routeAPIaverage90percent = extractQuantileForMetric('api_request_duration', '0.9', '/api/{id}', prometheusMetrics);
      expect(routeAPIaverage90percent).to.equal('3');

      const otherRouteAverage50percent = extractQuantileForMetric('api_request_duration', '0.5', '/api/other/{id}', prometheusMetrics);
      expect(otherRouteAverage50percent).to.equal('10');
    });
  });
});
