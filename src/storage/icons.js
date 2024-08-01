export function saveIcons(icons) {
  localStorage.setItem("icons", JSON.stringify(icons));
}

export function loadIcons() {
  return JSON.parse(localStorage.getItem("icons"));
}
