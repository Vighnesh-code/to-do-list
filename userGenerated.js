function handleChange(e) {
  // Bug: updating an input asynchronously
  setTimeout(() => {
    setFirstTime(e.target.value);
  }, 100);
}

function handleChange2(e) {
  // Bug: updating an input asynchronously
  setTimeout(() => {
    setFirstTime(e.target.value);
  }, 100);
}
