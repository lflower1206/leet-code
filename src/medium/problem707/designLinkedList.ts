type NodeType = MyNode | null;

class MyNode {
  private readonly _value: number;
  private _next: NodeType;

  constructor(value: number) {
    this._value = value;
  }

  public get value(): number {
    return this._value;
  }

  public get next(): NodeType {
    return this._next;
  }

  public set next(next: NodeType) {
    this._next = next;
  }
}

export class MyLinkedList {
  private head: NodeType;
  private size = 0;

  public addAtHead(value: number): void {
    this.addAtIndex(0, value);
  }

  public addAtTail(value: number) {
    this.addAtIndex(this.size, value);
  }

  public addAtIndex(index: number, value: number): void {
    if (index > this.size) {
      return;
    }

    const newNode = new MyNode(value);

    if (this.size === 0) {
      this.head = newNode;
      this.size = 1;
      return;
    }

    if (index === 0) {
      // add head
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const prevNode = this.getNodeByIndex(index - 1);
      if (prevNode.next) {
        newNode.next = prevNode.next;
      }
      prevNode.next = newNode;
    }

    this.size += 1;
  }

  public deleteAtIndex(index: number): void {
    if (index > this.size - 1) {
      return;
    }

    if (this.size === 1) {
      this.head = null;
      this.size = 0;
      return;
    }

    if (index === 0) {
      // delete head
      const currentHead = this.head;
      this.head = this.head.next;
      currentHead.next = null;
    } else {
      const prevNode = this.getNodeByIndex(index - 1);
      prevNode.next = prevNode.next ? prevNode.next.next : null;
    }

    this.size -= 1;
  }

  public get(index: number): number {
    const targetNode = this.getNodeByIndex(index);

    return targetNode ? targetNode.value : -1;
  }

  private getNodeByIndex(index: number): NodeType {
    if (index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null && currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
