// Створити конструктор, для роботи з числом користувача "n" (за замовчуванням 6):

// метод визначення суми натуральних чисел “5” (1+2+3+4+5); // 15
// метод визначення факторіалу з “n” 4!=1×2×3×4=24 - факторіал числа 4 
// метод зведення числа “n” у ступінь “m” (2^2 = 2*2, 2^3 = 2*2*2, 2^4 = 2*2*2*2)
// пошук "n" числа Фібоначчі * (0, 1, 1, 2, 3, 5, 8, 13, 21, 34) // 8

// Умови
// Число "n" більше або дорівнює нулю
// Якщо користувач вводить менше нуля, віддавати ‘Error!’ на всіх методах
// Число вводить користувач (за замовчуванням 6)
// Усі методи (крім ступеня) можна викликати з будь-яким числом "n". Але за умовчанням, те, що вводив користувач при ініціалізації


function NumberOperations(n = 6) {
    if (n < 0) {
        console.error('Error!');
        return;
    }

    this.n = n;
    this.sumOfNaturalNumbers = function() {
        let result = 0;
        for (let i = 1; i <= this.n; i++) {  // відлік натуральних чисел з 1 //
            result += i;
        }
        return result;
    };
    this.factorial = function() {
        if (this.n === 0) return 1; // факторіал 0 дорівнює 1 //
        let result = 1;
        for (let i = 1; i <= this.n; i++) {
            result *= i;
        }
        return result;
    };
    this.power = function(m) {
        let result = 1;
        for (let i = 1; i <= m; i++) {  // i <= m - множення на вказане число //
            result *= this.n;
        }
        return result;
    };
    this.fibonacci = function() {
        if (this.n === 0) return 0;
        if (this.n === 1) return 1;
        let a = 0,
            b = 1;
        for (let i = 2; i <= this.n; i++) {
            let temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    };
}

const numbObj = new NumberOperations(6);
console.log('sum => ', numbObj.sumOfNaturalNumbers());
console.log('factorial => ', numbObj.factorial());
console.log('power => ', numbObj.power(2));
console.log('fibonacci => ', numbObj.fibonacci());
