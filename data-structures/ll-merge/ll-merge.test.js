const LinkedList = require('../linkedList/linked-list.js');

describe('Tests for the function mergeLists', ()=>{
 
  it('should return error when it is given two empty lists', ()=>{ 
    const list1 = new LinkedList.LinkedList();
    const list2 = new LinkedList.LinkedList();
    expect(LinkedList.mergeLists(list1, list2)).toBe('Error');
  });


  it('should be able to merge two lists of same lengths lengths', ()=>{
    const list1 = new LinkedList.LinkedList();
    const list2 = new LinkedList.LinkedList();
    list1.insert(1);
    list1.insert(2);
    list2.insert('a');
    list2.insert('b');
    const merged = LinkedList.mergeLists(list1, list2);
    
    expect(merged.head.value).toBe('a');
    expect(merged.head.next.value).toBe(1);
    expect(merged.head.next.next.value).toBe('b');
    expect(merged.head.next.next.next.value).toBe(2);
  });

  it('should be able to merge two lists of different lengths', ()=>{
    const list1 = new LinkedList.LinkedList();
    const list2 = new LinkedList.LinkedList();
    list1.insert('1');
    list1.insert('2');
    list2.insert('a');

    const merged = LinkedList.mergeLists(list1, list2);
    
    expect(merged.head.value).toBe('1');
    expect(merged.head.next.value).toBe('a');
    expect(merged.head.next.next.value).toBe('2');
  
  });
});