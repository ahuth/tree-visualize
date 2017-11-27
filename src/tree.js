export default function Tree(value, parent = null, left = null, right = null) {
  this.value = value;
  this.parent = parent;
  this.left = left;
  this.right = right;
}

Tree.prototype.insert = function (value) {
  if (this.value === value) {
    return this;
  }

  let left, right;

  if (value < this.value) {
    left = this.left ? this.left.insert(value) : new Tree(value, this);
    right = this.right;
  } else {
    left = this.left;
    right = this.right ? this.right.insert(value): new Tree(value, this);
  }

  return new Tree(this.value, this.parent, left, right);
};

Tree.prototype.find = function (value) {
  if (this.value === value) {
    return this;
  }

  if (value < this.value) {
    return this.left ? this.left.find(value) : null;
  }

  return this.right ? this.right.find(value) : null;
}

Tree.prototype[Symbol.iterator] = function* () {
  if (this.left) {
    yield* this.left[Symbol.iterator]();
  }
  yield this;
  if (this.right) {
    yield* this.right[Symbol.iterator]();
  }
};
