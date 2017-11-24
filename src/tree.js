export default function Tree(value, parent = null) {
  this.value = value;
  this.parent = parent;
  this.left = null;
  this.right = null;
}

Tree.prototype.insert = function (value) {
  if (this.value === value) {
    return this;
  }
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value);
    }
    this.left = new Tree(value, this);
    return this.left;
  }
  if (this.right) {
    return this.right.insert(value);
  }
  this.right = new Tree(value, this);
  return this.right;
};

Tree.prototype[Symbol.iterator] = function* () {
  if (this.left) {
    yield* this.left[Symbol.iterator]();
  }
  yield this;
  if (this.right) {
    yield* this.right[Symbol.iterator]();
  }
};
