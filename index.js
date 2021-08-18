
function writeCards(stringArr, event) {
    let returnArr = []; 
    for (let i = 0; i < stringArr.length; i++) {
        let result = `Thank you, ${stringArr[i]}, for the wonderful ${event} gift!`; 
        returnArr.push(result); 
    }
    return returnArr; 
}
function countDown(int) {
    while (int >= 0) {
        console.log(int); 
        int--; 
    }
}