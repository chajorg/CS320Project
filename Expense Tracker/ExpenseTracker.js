//Linked list to hold expenses
class LinkedList{

  constructor(){
    this.root = null;
  }

  //Function to add new expenses to the list
  addToList(tempExpense){

    if(this.root == null){
      this.root = tempExpense;
    }

    else{
      let temp = this.root;

      while(temp.nextExpense != null){
        temp = temp.nextExpense;
      }
      temp.nextExpense = tempExpense;
    }
  }


  readFile(){
    const fs = require('fs');

    let data = fs.readFileSync('Storage');

    let dataArray = data.toString().split('\n');

    let i = 0;

    while(i < dataArray.length && dataArray[i] != ''){

      let tempAm = dataArray[i];
      let tempCateg = dataArray[++i];
      let tempDate = dataArray[++i];
      i++;

      let tempExpense = new Expense(tempAm,tempCateg,tempDate);

      this.addToList(tempExpense);
    }
  }

  writeToFile(){

    const fs = require('fs');
    let data = '';
    let temp  = this.root;

    fs.writeFile('Storage', data, (err) => {
      if (err) throw err;
    });

    while(temp != null){
      data = temp.amount.toString() + '\n' + temp.category.toString() + '\n' + temp.expenseDate.toString() + '\n';

      fs.appendFile('Storage', data, (err) => {
        if (err) throw err;
      });

      temp = temp.nextExpense;
    }
  }
}

//Class to hold store expenses
class Expense {
  constructor(num, categ, date) {
    this.amount = num;
    this.category = categ;
    this.expenseDate = date;
    this.nextExpense = null;
  }
}

//Calculation Area//
function totalExpense(ll) {
  let temp = ll.root;
  let sum = 0;

  while(temp != null){
    sum = sum + temp.amount;
    temp = temp.nextExpense;
  }

  return(sum);
}

let myList = new LinkedList();
myList.readFile();
myList.addToList(new Expense(12,'Food', '11/12/2019'));
myList.addToList(new Expense(13,'Food', '11/12/2019'));
myList.writeToFile(myList);
//console.log(myList);

//initialization


