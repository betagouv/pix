
const OK = 'ok';
const KO = 'ko';
const SKIPPED = '#ABAND#';
const TIMEDOUT = 'timedout';
const PARTIALLY = 'partially';
const UNIMPLEMENTED = 'unimplemented';

class AnswerStatus {
  constructor(status) {
    Object.assign(this, { status });
  }

  isFailed() { return this.status !== OK; }

  isOK() { return this.status === OK; }
  isKO() { return this.status === KO; }
  isSKIPPED() { return this.status === SKIPPED; }
  isTIMEDOUT() { return this.status === TIMEDOUT; }
  isPARTIALLY() { return this.status === PARTIALLY; }
  isUNIMPLEMENTED() { return this.status === UNIMPLEMENTED; }

  static get OK()             { return new AnswerStatus(OK); }
  static get KO()             { return new AnswerStatus(KO); }
  static get SKIPPED()        { return new AnswerStatus(SKIPPED); }
  static get TIMEDOUT()       { return new AnswerStatus(TIMEDOUT); }
  static get PARTIALLY()      { return new AnswerStatus(PARTIALLY); }
  static get UNIMPLEMENTED()  { return new AnswerStatus(UNIMPLEMENTED); }

  static isFailed(otherResult) { return AnswerStatus.from(otherResult).isFailed(); }

  static isOK(otherResult)      { return AnswerStatus.from(otherResult).isOK(); }
  static isKO(otherResult)      { return AnswerStatus.from(otherResult).isKO(); }
  static isSKIPPED(otherResult) { return AnswerStatus.from(otherResult).isSKIPPED(); }
  static isTIMEDOUT()           { return AnswerStatus.from(TIMEDOUT); }
  static isPARTIALLY()          { return AnswerStatus.from(PARTIALLY); }
  static isUNIMPLEMENTED()      { return AnswerStatus.from(UNIMPLEMENTED); }

  static from(other) {
    if (other instanceof AnswerStatus) {
      return other;
    } else {
      return new AnswerStatus(other);
    }
  }
}

module.exports = AnswerStatus;
