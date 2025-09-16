function importAll(r) {
  let element = {};
  r.keys().forEach((item) => {
    element[item.replace("./", "")] = r(item);
  });
  return element;
}

export default importAll;
