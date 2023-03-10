const messages = [];
const newArray = [];

function writeCards(messages,event) {
  for (let i = 0; i < messages.length; i++) {

    newArray[i] = `Thank you, ${messages[i]}, for the wonderful ${event} gift!`;
  
  };

  return newArray;
};

writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(num) {
  let counter = num;
  while (counter >= 0) {
    console.log(counter--);
  }
  };
  countDown(3);