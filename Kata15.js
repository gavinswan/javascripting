const squareCode = function(message) {
  let sqrt = 0
  let newMessage = [];
  let final = [];
  newMessage = message.split(' ')
  newMessage = newMessage.join('')
  sqrt = Math.ceil(Math.sqrt(newMessage.length));{
   for (i = 0; i < newMessage.length; i += sqrt) {
     final.push(newMessage.slice(0, sqrt));
     console.log(final);


   }   
  }
}; 

console.log(squareCode("chill out"));
//console.log(squareCode("feed the dog"));
//console.log(squareCode("have a nice day"));
//console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));