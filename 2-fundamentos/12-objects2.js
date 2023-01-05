console.log(typeof Object);
console.log(typeof new Object());

const cliente = function() {};
console.log("usando typeof = " + typeof cliente);
console.log("usando new = " + typeof new cliente());

class produto {}
console.log("usando typeof = " + typeof produto);
console.log("usando new = " + typeof new produto());