var mergeTwoLists = function (list1, list2) {
	if (!list1) {
		return list2;
	}
	if (!list2) {
		return list1;
	}
	if (list1.next == null && list2.next == null) {
		if (list1.val <= list2.val) {
			list1.next = list2;
			return list1;
		} else {
			list2.next = list1;
			return list2;
		}
	} else {
		if (list1.next && list2.next) {
			t = mergeTwoLists(list1.next, list2.next);
			t = insertNode(list1, t);
			t = insertNode(list2, t);
		} else if (list1.next && !list2.next) {
			t = mergeTwoLists(list1.next, list2);
			t = insertNode(list1, t);
		} else if (!list1.next && list2.next) {
			t = mergeTwoLists(list1, list2.next);
			t = insertNode(list2, t);
		}
	}
	return t;
};

function insertNode(node, listHead) {
	let t = listHead,
		prev;
	while (t) {
		if (node.val > t.val) {
			prev = t;
			t = t.next;
		} else {
			if (t.val === listHead.val) {
				node.next = t;
				return node;
			} else {
				prev.next = node;
				node.next = t;
				return listHead;
			}
		}
	}
}

var reverseList = function (head) {
	if (!head) {
		return null;
	}
	
};

const reverseRec = (node, head) => {
	if (!head.next) {
		return head;
	} else {
		let temp = head;
		head = reverseList(head.next);
		temp.next = null;
		getListEnd(head).next = temp;
		return head;
	}
};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

// let list1 = new ListNode(5);
// let list2 = new ListNode(1, new ListNode(2, new ListNode(4)));

// let list1 = new ListNode(-9, new ListNode(3));
// let list2 = new ListNode(5, new ListNode(7));

// [1,2,3,4,5]
let list1 = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// let temp = mergeTwoLists(list1, list2);
let temp = reverseList(list1);

const convertToArray = temp => {
	let temp2 = [];
	while (temp) {
		temp2.push(temp.val);
		temp = temp.next;
	}
	return temp2;
};

let temp2 = convertToArray(temp1);

console.log(temp2);
