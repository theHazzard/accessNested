const {accessNested} = require('./dist/index');
const checker = accessNested({
  user: {
    personalData: {
      name: 'Enzo'
    },
    ownerOf: [{
      cat: 'Maiz'
    },{
      cat: 'Tita'
    }]
  }
});


console.log('user.personalData', checker('user', 'personalData'));
console.log('user.personalData.name', checker('user', 'personalData', 'name'));
console.log('user.personalData.title', checker('user', 'personalData', 'title'));
console.log('user.ownerOf.dog.name', checker('user', 'ownerOf', 'dog', 'name'));
console.log('user.ownerOf.first.cat', checker('user', 'ownerOf', 0, 'cat'));

function hasDog() {
  return !!checker('user', 'ownerOf', 'dog', 'name');
}

if (!hasDog()) {
  console.log('No tiene perro!');
}

checker('user', 'ownerOf').map((elem) => {
  const petcheck = accessNested(elem);
  console.log(petcheck('cat'));
})
