export default function Node(value, parent = null) {
  this.value = value;
  this.parent = parent;
  this.left = null;
  this.right = null;
}
