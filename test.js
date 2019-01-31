const {accessNested} = require('./dist/index');
const checker = accessNested({
  user: {
    personalData: {
      name: 'Enzo'
    },
    ownerOf: {
      cat: 'Maiz'
    }
  }
});


console.log('user.personalData', checker('user', 'personalData'));
console.log('user.personalData.name', checker('user', 'personalData', 'name'));
console.log('user.personalData.title', checker('user', 'personalData', 'title'));
console.log('user.ownerOf.dog.name', checker('user', 'ownerOf', 'dog', 'name'));

function hasDog() {
  return !!checker('user', 'ownerOf', 'dog', 'name');
}

if (!hasDog()) {
  console.log('No tiene perro!');
}
