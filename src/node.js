export default function Node(value, parent = null) {
  this.value = value;
  this.parent = parent;
  this.left = null;
  this.right = null;
}

Node.prototype.insert = function (value) {
  if (this.value === value) {
    return this;
  }
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value);
    }
    this.left = new Node(value, this);
    return this.left;
  }
  if (this.right) {
    return this.right.insert(value);
  }
  this.right = new Node(value, this);
  return this.right;
};

Node.prototype[Symbol.iterator] = function* () {
  if (this.left) {
    yield* this.left[Symbol.iterator]();
  }
  yield this.value;
  if (this.right) {
    yield* this.right[Symbol.iterator]();
  }
};
