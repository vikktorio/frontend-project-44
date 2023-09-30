import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const askNameAndGreet = () => {
  var nameOfUser  = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${nameOfUser}!`);
};

export default nameOfUser;



