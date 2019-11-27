
//Class to hold store expenses
class Expense{
  Constructor(num, categ, date){
    this.amount = num;
    this.category = categ;
    this.expenseDate = date;
    this.nextExpense = null;
  }
}