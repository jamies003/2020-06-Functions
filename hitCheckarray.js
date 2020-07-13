function hitCheck () {

  while(count <= 100)

  if (count % 3 === 0 && count % 5 === 0) {
      output.push("hitCheck")
  }else if (count % 3 === 0) {
      output.push("Hit");
  }else if (count % 5 === 0) {
      output.push("Check");
  }else {
      output.push(count);
  }

      count++;
}

console.log(output);