/* eslint-env mocha, chai */
/*  global maxPrimeSum, chai */

describe('Test For Performance', function () {
  describe('maxPrimeSum', function () {
    it('maxPrimeSum(10000) should take less than 20ms', function () {
      this.timeout(20);
      this.slow(0);
      chai.expect(maxPrimeSum(10000)).to.deep.equal([9521, 65]);
    });
    it('maxPrimeSum(100000) should take less than 200ms', function () {
      this.timeout(200);
      this.slow(0);
      chai.expect(maxPrimeSum(100000)).to.deep.equal([92951, 183]);
    });
  });
});
