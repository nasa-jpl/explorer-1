if (!global.ActiveXObject && "ActiveXObject" in global) {
  const root = document.getElementsByTagName("html")[0];
  root.classList.add("ie11");
}
