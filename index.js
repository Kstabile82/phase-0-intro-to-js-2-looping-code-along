// Code your solutions in this file
function writeCards (names) {
    let returnArr = []; 
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`; 
        returnArr.push(message); 
    }
    console.log(returnArr); 
    debugger;
}
writeCards([ 'Lisa', 'Kaitlin', 'Jan' ]); 

  function countDown (num) {
    while (num >= 0) {
        console.log(num); 
        debugger;
        num--; 
    }
}
countDown(10); 

