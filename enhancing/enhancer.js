module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1;
  }
  return item;
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else {
    item.durability -= 10;
  }
  if (item.enhancement > 16) {
    item.enhancement -= 1;
  }
  return item;
}

function repair(item) {
  const repairedItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return repairedItem;
}

function get(item) {
  return { ...item };
}
