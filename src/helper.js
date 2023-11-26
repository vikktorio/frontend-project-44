export const getRandomInt = (min, max) => {
    return Math.ceil(Math.random() * (max + min));
};

export const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

export const getGameRule = (game) => {
    let result;
    switch (game) {
        case 'brain-even':
            result = 'Answer "yes" if the number is even, otherwise answer "no".';
            break;
        case 'brain-calc':
            result = 'What is the result of the expression?';
            break;
        case 'brain-gcd':
            result = 'Find the greatest common divisor of given numbers.';
            break;
        case 'brain-progression':
            result = 'What number is missing in the progression?';
            break;
        case 'brain-prime':
            result = 'Answer "yes" if given number is prime. Otherwise answer "no".';
            break;
        default:
            result = '';
    }
    return result;
};

export const nod = (n, m) => {
    let result;
    if (m > 0) { 
        const k = n % m;
        result = nod(m, k); 
        } 
        else { 
        result = Math.abs(n);  
        }
    return result;
};

export const calculateSum = (coll) => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += coll[i];
    }
    return sum;
};

export const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};
