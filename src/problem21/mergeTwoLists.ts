interface IListNode {
  val: number | null;
  next: IListNode | null;
}

const mergeTwoLists = (l1: IListNode | null, l2: IListNode | null): IListNode => {
  let node1: IListNode | null = l1;
  let node2: IListNode | null = l2;
  const root: IListNode = {
    next: null,
    val: null,
  };
  let tempResult = root;

  if (node1 === null && !node2 === null) {
    return null;
  }

  if (!node1 || !node2) {
    return node1 || node2;
  }

  while (node1 && node2) {
    if (node1.val <= node2.val) {
      tempResult.next = node1;
      node1 = node1.next;
    } else {
      tempResult.next = node2;
      node2 = node2.next;
    }
    tempResult = tempResult.next;
  }

  tempResult.next = node1 || node2;

  return root.next;
};

export { IListNode, mergeTwoLists };
