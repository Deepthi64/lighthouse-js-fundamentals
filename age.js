function ageCalculator(name,yearOfBirth,currentYear) {
  const data1 = ['miranda', 1980 , 2023]
  const data2 = ['ferdnand ', 1960 , 2012]
  const age = currentYear - yearOfBirth;
  let ageCalculator = [ name , age ,currentYear]
  
  const ageCalculator1 = [data1[0],data1[1],data1[2]]
  const ageCalculator2 = [data2[0],data2[1],data2[2]]
  const message = '$name is $age years old';
  return ageCalculator;
}
console.log(ageCalculator1);
console.log(ageCalculator2);