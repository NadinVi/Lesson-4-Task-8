// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). 
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.


a = parseInt(prompt(`Enter number a`).replaceAll("", " "));

while (isNaN(a)) {
    alert("Try again!");
    +prompt("Enter number a")
}
console.log(a)
b = parseInt(prompt(`Enter number b`).replaceAll("", " "));
while (a >= b || isNaN(b));
console.log(b)

h = parseInt(prompt(`Enter step h`).replaceAll("", " "));
while (h > b - a || isNaN(h));
console.log(h)

sumOfFactorials = 0;
for (sumOfFactorials = 0; a <= b; a += h) {
    factorial = 1;
    console.log(`Factorial number ${a}`);

    for (j = 1; j <= a; j++) {
        factorial *= j;
    }
    console.log(factorial);
    sumOfFactorials += factorial;
};
alert(`The sum of all factorials is ${sumOfFactorials}`)
