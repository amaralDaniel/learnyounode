function sum_numbers(numbers){
  var output=0;
  for(var i=2; i< numbers.length; i++){
    output+=Number(numbers[i]);
  }
  return output;
}


var numbers = process.argv;

console.log(sum_numbers(numbers));
