class ListNode {
  public val: number;
  public next: ListNode = null;

  constructor(val: number = null) {
    this.val = val;
  }
}

const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  let node1 = l1;
  let node2 = l2;
  let carry = 0;
  const result = new ListNode();
  let tail = result;

  while (node1 || node2 || carry) {
    const v1 = node1 ? node1.val : 0;
    const v2 = node2 ? node2.val : 0;
    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    tail.next = new ListNode(sum % 10);
    tail = tail.next;
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }

  return result.next;
};

export { ListNode, addTwoNumbers };
