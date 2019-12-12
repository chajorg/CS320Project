/* eslint-env mocha, chai */
/*  global Expense, LinkedList, addToList, totalByCateg chai */

describe('Test For Correctness', function () {
  describe('Expense', function () {
    it('Amount', function () {
      chai.expect(new Expense(50,'Essentials').amount).to.deep.equal(50);
    });
  });
  describe('LinkedList', function () {
    it('Initialize Linked List', function () {
      chai.expect(new LinkedList().root).to.deep.equal(null);
    });
  });
  describe('Total Expense', function () {
    it('Total Expenses', function () {
      let ll = new LinkedList;
      ll.addToList(new Expense(15, "Essentials"));
      ll.addToList(new Expense(25, "Essentials"));
      ll.addToList(new Expense(25, "Essentials"));
      ll.addToList(new Expense(15, "Essentials"));
      ll.addToList(new Expense(15, "Luxury"));
      ll.addToList(new Expense(25, "Msc"));
      ll.addToList(new Expense(15, "Food"));
      chai.expect(totalExpense(ll)).to.deep.equal(135);
    });
  });
  describe('Total Expense by Category', function () {
    it('Total Expenses', function () {
      let ll = new LinkedList;
      ll.addToList(new Expense(15, "Essentials"));
      ll.addToList(new Expense(25, "Essentials"));
      ll.addToList(new Expense(25, "Essentials"));
      ll.addToList(new Expense(15, "Essentials"));
      ll.addToList(new Expense(15, "Luxury"));
      ll.addToList(new Expense(25, "Msc"));
      ll.addToList(new Expense(15, "Food"));
      chai.expect(totalByCateg(ll,"Essentials")).to.deep.equal(80);
    });
  });

});
