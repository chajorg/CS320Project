/* eslint-env mocha, chai */
/*  global totalExpense, chai */

describe('Test For Performance', function () {
  describe('Total Expense', function () {
    it('Creating, adding and totaling 200 expenses', function () {
      this.timeout(10);
      this.slow(0);
      let ll = new LinkedList();
      for(let i = 0; i < 200; i++){
        ll.addToList(new Expense(100,"Msc"));
      }
      chai.expect(totalExpense(ll)).to.deep.equal(20000);
    });
  });
});
