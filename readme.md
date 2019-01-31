Access nested elements of a complex object, or return undefined if cannot continue
no more
```javascript
  if (obj && obj.prop1 && ob.prop1.prop2 && obj.prop1.prop2.prop3 && obj.prop1.prop2.prop3[0]) {

  }
```

### USAGE
```javascript
  const {accessNested} = require('accessNested');

  const objectToTraverse = {
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
  };

  const checker = accessNested(objectToTraverse);

  console.log('user.personalData', checker('user', 'personalData'));
  // => { name: 'Enzo' }
  console.log('user.personalData.name', checker('user', 'personalData', 'name'));
  // => 'Enzo'
  console.log('user.personalData.title', checker('user', 'personalData', 'title'));
  // => undefined
  console.log('user.ownerOf.dog.name', checker('user', 'ownerOf', 'dog', 'name'));
  // => undefined
  console.log('user.ownerOf.first.cat', checker('user', 'ownerOf', 0, 'cat'));
  // => Maiz


  if (!checker('user', 'ownerOf', 'dog', 'name')) {
    console.log('He do not have a dog');
  }
  // => He do not have a dog


  checker('user', 'ownerOf').map((elem) => {
    const petcheck = accessNested(elem);
    console.log(petcheck('cat'));
  })

  // => Maiz
  // => Tita
```
