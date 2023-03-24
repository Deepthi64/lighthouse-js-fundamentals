function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  const message = `${name} is ${age} years old`;
  const ageCalculator = [name, age, currentYear, message];
  return ageCalculator;
}

const data1 = ['miranda', 1980, 2023];
const data2 = ['ferdnand', 1960, 2012];

const ageCalculator1 = ageCalculator(data1[0], data1[1], data1[2]);
const ageCalculator2 = ageCalculator(data2[0], data2[1], data2[2]);

console.log(ageCalculator1); 
console.log(ageCalculator2);