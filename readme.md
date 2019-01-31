Access nested elements of a complex object, or return undefined if cannot continue


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
  console.log('user.personalData.name', checker('user', 'personalData', 'name'));
  console.log('user.personalData.title', checker('user', 'personalData', 'title'));
  console.log('user.ownerOf.dog.name', checker('user', 'ownerOf', 'dog', 'name'));
  console.log('user.ownerOf.first.cat', checker('user', 'ownerOf', 0, 'cat'));

```
