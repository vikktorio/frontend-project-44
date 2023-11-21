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

export const randomNumber = () => {
    return getRandomInt(0, 100);
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
        default:
            result = '';
    }
    return result;
};

export const nod = (n, m) => {
    let result;
    if (m > 0) { 
        const k = n%m;
        result = nod(m, k); 
        } 
        else { 
        result = Math.abs(n);  
        }
    return result;
};
