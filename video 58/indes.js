// function nice (name){
//   console.log("Hey " + name +  "you are nice!");
//   console.log("Hey " + name +  "you are Good Boy");
//   console.log("Hey " + name +  "you Tshirt is nice");
//   console.log("Hey " + name +  "you are genius boy");

// }

// nice ("Mohit ")

// nice ("Nikhil ")
// nice ("Arya ")

function sum(a, b, c = 3) {
  //console.log(a+b);

  console.log(a, b, c);
  return a + b + c;
}

result = sum(3, 67);
result1 = sum(4, 8);
result2 = sum(1, 1, 1);

console.log("The sum of number:", result);
console.log("The sum of number:", result1);
console.log("The sum of number:", result2);

const func1 = (a) => {
  console.log(" I am an arrow function ", a);
};

func1(45);
func1(78-23);
func1(95);
func1(134);
