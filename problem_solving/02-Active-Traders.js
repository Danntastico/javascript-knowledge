function listElements(customers) {
  const list = [];
  for (let i = 0; i < customers.length; i++) {
    if (!list.includes(customers[i])) {
      list.push(customers[i]);
    }
  }
  return list;
}

function howManyTimes(element, arrayList) {
  let n = 0;
  for (let i = 0; i < arrayList.length; i++) {
    if (element === arrayList[i]) n += 1;
  }

  return (n * 100) / arrayList.length;
}

function mostActive(customers) {
  const quorum = listElements(customers);
  const memberData = [];
  quorum.forEach((member) => {
    const assistance = howManyTimes(member, customers);
    if (assistance >= 5) {
      memberData.push(member);
    }
  });

  return memberData.sort();
}

const arrCustomers = [
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Bigcorp',
  'Acme',
  'Acme',
  'Acme',
  'Acme',
  'Acme',
  'Zork',
  'Zork',
  'Zork',
  'Zork',
  'Zork',
  'LittleCorp',
  'Nadir',
  'Abc',
];

console.log(mostActive(arrCustomers));

//Need to accurate a better performance
