let a = 2;
let b = 3;

function doMath(a, b, c){
    var d = a+b
    return d*c
}
var result
for (let c=0; c<a+b; c++){
    result = doMath(a, b, c)
    console.log("Hello from the loop! Result: " + result);
}

