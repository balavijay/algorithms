a1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
a2 = [5,6,4];

// a1 = [2,4,3];
// a2 = [5,6,4];

// a1 = [9];
// a2 = [9];


arrayToList(a2);

  function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
  }

  function arrayToList(arr) {

    let head = new ListNode(0);
    let node = head;

    for(let i=0; i<arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    
    return head.next;

}

var addTwoNumbers = function(l1, l2) {
    
    let head = new ListNode(0);
    let node = head;
    

    let value1;
    let value2;
    let carry = 0;
    
    while (l1 || l2 ) {

        value1 = l1 ? l1.val : 0;
        value2 = l2 ? l2.val : 0;
        
        sum = value1 + value2 + carry;
        carry = 0;

        if(sum > 9) {
            carry = parseInt(sum / 10);
            sum = parseInt(sum % 10);
        }

        node.next = new ListNode(sum);
        node = node.next;

        if(l1)
        l1 = l1.next;

        if(l2)
        l2 = l2.next;
    }

    if (carry)  {
        node.next = new ListNode(carry);
    }
    return head.next;
};

console.log(addTwoNumbers(arrayToList(a1), arrayToList(a2)));
    




    
    

    
