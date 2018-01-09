export default function createNode(type, attributes, text) {
  const elem = document.createElement(type);

  if (attributes && typeof attributes === 'object') {
    Object.keys(attributes).forEach(key => {
      elem.setAttribute(key, attributes[key]);
    });
  }

  if (text && typeof text === 'string') {
    elem.appendChild(document.createTextNode(text));
  }

  return elem;
}
