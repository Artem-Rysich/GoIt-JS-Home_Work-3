'use strict';
let countTotalSalary = employees => {
  let keys = Object.keys(employees);
  let salaries = Object.values(employees);
  let total = 0;
  for (const key of keys) {
    console.log(key, ':', employees[key]);
  }
  for (let i = 0; i < salaries.length; i += 1) {
    total += salaries[i];
  }
  if (total === undefined) {
    total = 0;
  }
  console.log(`Сумма зарплат равна : ${total}`);
};
countTotalSalary({}); // 0
countTotalSalary({
  mango: 100,
  poly: 150,
  alfred: 80,
}); // 330
countTotalSalary({
  kiwi: 200,
  lux: 50,
  chelsy: 150,
}); // 400
