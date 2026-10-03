export const createElement = (tag, className, text, attributes = {}) => {
  const element = document.createElement(tag);
  element.className = className;

  if (text) element.textContent = text;

  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }

  return element;
};