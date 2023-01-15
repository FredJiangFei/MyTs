export const callForIn = () => {
  const primes = {
    name: 'fred',
    age: 36,
  };

  for (let prime in primes) {
    console.log(prime);
  }
};

export const callForOf = () => {
  const primes = [
    {
      name: 'fred',
      age: 36,
    },
    {
      name: 'tony',
      age: 23,
    },
  ];

  for (let prime of primes) {
    console.log(prime);
  }
};
