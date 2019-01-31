function isObject(variable) {
  return typeCheck(variable, 'object');
}

function isArray(variable) {
  return typeCheck(variable, 'array');
}

function typeCheck(variable, type) {
  const regx = /\[\w+? (\w+)]/;
  const description = Object.prototype.toString.call(variable);
  const [, varType] = description.match(regx);

  return varType.toLowerCase() === type.toLowerCase();
}

export default function (container) {
  if (!isArray(container) && !isObject(container)) {
    throw Error('Must be called only on a object or array');
  }
  return function(...steps) {
    let value;
    try {
      value = steps.reduce((dataStructure, step) => {
        if (dataStructure[step] === undefined) {
          throw new Error('cannot traverse anymore');
        }
        return dataStructure[step];
      }, container);
    } catch (err) {
      value = undefined;
    }
    return value;
  };
}
