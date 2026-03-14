export function getText(selector) {
  const el = document.querySelector(selector);
  return el ? el.innerText.trim() : null;
}
