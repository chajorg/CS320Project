
//Linked list to hold expenses
class LinkedList{

  constructor(){
    this.root = null;
  }


  //Function to add new expenses to the list
  addToList(Expense){

    if(root == null){
      root = Expense;
    }


    else{
      let temp = root;

      while(temp.nextExpense != null){
        temp = temp.next;
      }
      temp.next = Expense;
    }

  }
}
