export default function useLocalStorage(theme) {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", theme);
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", theme);
  }
}
