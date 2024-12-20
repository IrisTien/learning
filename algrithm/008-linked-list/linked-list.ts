class LinkNode {
  public val: number;
  public next: LinkNode|null = null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new LinkNode(1);

const node2 = new LinkNode(2);

node1.next = node2;

console.log(node1.val);
console.log(node1.next);
console.log(node2.val);