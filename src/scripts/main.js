const $ = require('jquery');
const Person = require('./modules/objects.js');

class Adult extends Person {
    payTaxes(){
      console.log(this.name + " has paid taxes.");
    }
}

var rose = new Adult("Rose Lin", "White");
rose.greet();
rose.payTaxes();
