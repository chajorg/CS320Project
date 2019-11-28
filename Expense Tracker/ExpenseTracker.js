//Linked list to hold expenses
class LinkedList{

  constructor(){
    this.root = null;
  }

  //Function to add new expenses to the list
  addToList(Expense){

    if(this.root == null){
      this.root = Expense;
    }


    else{
      let temp = this.root;

      while(temp.nextExpense != null){
        temp = temp.next;
      }
      temp.next = Expense;
    }

  }
}

//Class to hold store expenses
class Expense{

  constructor(num, categ, date) {
    this.amount = num;
    this.category = categ;
    this.expenseDate = date;
    this.nextExpense = null;
  }
}

//Calculation Area//
function totalExpense(ll){
  let temp = ll.root;
  let sum = 0;

  while(temp != null){
    sum = sum + temp.amount;
    temp = temp.nextExpense;
  }

  return(sum);
}

