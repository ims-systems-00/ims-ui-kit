const handleGroupFocus = (e) => {
  e.target.parentElement.parentElement.children[1]?.focus();
  if (e.target.parentElement.parentElement.children[0]) {
    e.target.parentElement.parentElement.children[0]?.focus();
  }
  if (e.target.parentElement.parentElement.children[2]) {
    e.target.parentElement.parentElement.children[2]?.focus();
  }
};

export { handleGroupFocus };
