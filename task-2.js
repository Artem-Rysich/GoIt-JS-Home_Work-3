'use strict';
const countProps = obj => {
  console.log(`Количество свойств в объекте : ${Object.keys(obj).length}`);
};
countProps({});
countProps({ name: 'Mango', age: 2 });
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
countProps({
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500,
  bb: 2,
  cc: 'dsfsd',
  v: 2,
  b: true,
});
