'use strict';
const findBestEmployee = employees => {
  let max = 0;
  let name;
  const keys = Object.keys(employees);
  for (const key of keys) {
    if (max < employees[key]) {
      max = employees[key];
      name = key;
    }
  }
  return name;
};
console.log(
  `Самый продуктивный сотрудник : ${findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })}`,
);
console.log(
  `Самый продуктивный сотрудник : ${findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })}`,
);
console.log(
  `Самый продуктивный сотрудник : ${findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })}`,
);
