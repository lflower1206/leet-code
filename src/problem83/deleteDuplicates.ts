interface IListNode {
  val: number;
  next: IListNode | null;
}

const deleteDuplicates = (head: IListNode): IListNode => {
  if (!head) {
    return head;
  }

  const result = head;
  let tail = result;
  let node = head.next;

  while (node) {
    if (tail.val !== node.val) {
      tail.next = node;
      tail = tail.next;
    }

    node = node.next;
  }

  tail.next = null;

  return result;
};

export { deleteDuplicates, IListNode };
