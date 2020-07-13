let output = [];
let count = 1;

function hitCheck () {

    for (let count = 1; count < 101; count++) {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("hitCheck");
    }else if (count % 3 === 0) {
        output.push("Hit");
    }else if (count % 5 === 0) {
        output.push("Check");
    }else {
        output.push(count);
    }

}

console.log(output);
}