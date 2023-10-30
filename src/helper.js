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