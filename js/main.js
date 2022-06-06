let namber_one = parseInt(prompt("Enter the first range of numbers"));
console.log(`First namber of range => ${namber_one}`);
document.write(`The first namber of range => ${namber_one}<br>`);
let namber_two = parseInt(prompt("Enter the second range of nambers"));
console.log(`Second namber of range => ${namber_two}`);
document.write(`The first namber of range => ${namber_two}<br>`);

function task1(first, second) {
  document.write(`<br>Task - 1`);
  console.log("Task - 1");
  for (let i = second; i <= first; i++) {
    if (i % 2 == 0) {
      console.log("even number:", i);
      document.write("<br>even number:", i);
    }
  }
}
function task2(first, second) {
  document.write(`<br><br>Task - 2`);
  console.log("Task - 2");
  for (let i = second; i <= first; i++) {
    if (i % 2 == 0) {
    } else {
      console.log("odd number:", i);
      document.write("<br>odd number:", i);
    }
  }
}
function task3(first, second) {
  document.write(`<br><br>Task - 3`);
  console.log("Task - 3");
  for (let i = second; i <= first; i++) {
    if (i % 7 == 0) {
      console.log("Multiples of seven:", i);
      document.write("<br>Multiples of seven:", i);
    }
  }
}

if (namber_one == namber_two) {
  alert(`Numbers the same!!!\n${namber_one} == ${namber_two}`);
  console.warn(`Numbers the same!!!\n${namber_one} == ${namber_two}`);
} else if (namber_one > namber_two) {
  task1(namber_one, namber_two);
  task2(namber_one, namber_two);
  task3(namber_one, namber_two);
} else if (namber_one < namber_two) {
  task1(namber_two, namber_one);
  task2(namber_two, namber_one);
  task3(namber_two, namber_one);
} else {
  console.error("Error!!!");
}
