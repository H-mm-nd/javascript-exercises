const fibonacci = function(number) {
    let member = parseInt(number);
    if (member === 0) {return(0)}
    if (member < 0) {return('OOPS')}
    let a = 0;
    let b = 1;
    for (let i = 1; i < member; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return(b);
};

//function fibonacci (number){
//   let member = parseInt(number);
//    if (member === 0) {return(0)}
//    if (member < 0) {return('OOPS')}
//    let a = 0;
//    let b = 1;
//    for (let i = 1; i < member; i++) {
//        const temp = b;
//        b = a + b;
//        a = temp;
//        console.log(b);
//    }
//   return(b);
//}
// Do not edit below this line
module.exports = fibonacci;
