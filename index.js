// Code your solutions in this file


const messages = [];

function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
   messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
   debugger;

  }
        return messages;
}
// writeCards(["Charlie", "Samip", "Ali"], "birthday");

// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"));
 function countDown(){


let countdown = 10;
while (countdown >= 0) {
  console.log(countdown--);
}
}

