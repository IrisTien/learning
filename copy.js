var a = {
  age: 23,
  name: 'Test Name',
  details: {
    nationality: 'China',
  }
};

var b = new Boolean(false);

function shallowCopy(obj) {
  const newObj = {};

  for (let item in obj) {
    console.log(item);
    if (obj.hasOwnProperty(item)) {
      newObj[item] = obj[item];
    }
  }
  return newObj;
}

shallowCopy(b);