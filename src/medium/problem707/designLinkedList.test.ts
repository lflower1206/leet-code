import { MyLinkedList } from './designLinkedList';

describe('707. Design Linked List', () => {
  let linkedList!: MyLinkedList;

  beforeEach(() => {
    linkedList = new MyLinkedList();
  });

  it('should be able to get node value null from empty linked list', () => {
    expect(linkedList.get(0)).toBe(-1);
  });

  it('should be able to add at head on empty Linked List', () => {
    const givenHeadValue = 2;
    linkedList.addAtHead(givenHeadValue);

    expect(linkedList.get(0)).toBe(givenHeadValue);
  });

  it('should be able to add at tail on empty Linked List', () => {
    const givenTailValue = 4;
    linkedList.addAtTail(givenTailValue);

    expect(linkedList.get(0)).toBe(givenTailValue);
  });

  it('should be able to get value from head and tail when there are only 2 nodes', () => {
    const givenHeadValue = 3;
    const givenTailValue = 5;
    linkedList.addAtHead(givenHeadValue);
    linkedList.addAtTail(givenTailValue);

    expect(linkedList.get(0)).toBe(givenHeadValue);
    expect(linkedList.get(1)).toBe(givenTailValue);
  });

  it('should be able to get value from head and tail when there are 3 nodes', () => {
    const givenHeadValue = 6;
    const givenMidValue = 7;
    const givenTailValue = 8;
    linkedList.addAtHead(givenHeadValue);
    linkedList.addAtTail(givenMidValue);
    linkedList.addAtTail(givenTailValue);

    expect(linkedList.get(0)).toBe(givenHeadValue);
    expect(linkedList.get(1)).toBe(givenMidValue);
    expect(linkedList.get(2)).toBe(givenTailValue);
  });

  it('should be able to add node by index which is at the head', () => {
    linkedList.addAtIndex(0, 2);
    linkedList.addAtIndex(0, 1);
    linkedList.addAtIndex(0, 0);

    expect(linkedList.get(0)).toBe(0);
    expect(linkedList.get(1)).toBe(1);
    expect(linkedList.get(2)).toBe(2);
  });

  it('should be able to add node by index which is at the end', () => {
    linkedList.addAtHead(7);
    linkedList.addAtHead(2);
    linkedList.addAtHead(1);
    linkedList.addAtIndex(3, 0);
    linkedList.deleteAtIndex(2);
    linkedList.addAtHead(6);
    linkedList.addAtTail(4);
    linkedList.get(4);

    expect(linkedList.get(4)).toBe(4);
  });

  it('should be able to delete node by index which is head', () => {
    linkedList.addAtIndex(0, 2);
    linkedList.addAtIndex(0, 1);
    linkedList.addAtIndex(0, 0);
    linkedList.deleteAtIndex(0);

    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
  });

  it('should be able to delete node by index which is at mid', () => {
    linkedList.addAtIndex(0, 3);
    linkedList.addAtIndex(1, 4);
    linkedList.addAtIndex(2, 5);
    linkedList.addAtIndex(3, 6);
    linkedList.deleteAtIndex(2);

    expect(linkedList.get(0)).toBe(3);
    expect(linkedList.get(1)).toBe(4);
    expect(linkedList.get(2)).toBe(6);
  });

  it('should get -1 if the node does not exist', () => {
    linkedList.addAtHead(4);

    expect(linkedList.get(1)).toBe(-1);

    linkedList.addAtHead(1);
    linkedList.addAtHead(5);
    linkedList.deleteAtIndex(3);
    linkedList.addAtHead(7);

    expect(linkedList.get(3)).toBe(4);
  });

  it('should get prev node correctly when deleting tail be able to delete more than 1 time', () => {
    linkedList.addAtHead(24);
    expect(linkedList.get(1)).toBe(-1);
    linkedList.addAtTail(18);
    linkedList.deleteAtIndex(1);
    expect(linkedList.get(1)).toBe(-1);
    linkedList.addAtTail(30);
    expect(linkedList.get(2)).toBe(-1);
    linkedList.deleteAtIndex(1);

    expect(linkedList.get(0)).toBe(24);
  });
});
