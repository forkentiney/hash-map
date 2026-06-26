const linkedList = () => {
	let head = null;
	let tail = null;
	let size = 0;
	
	const append = (key, value) => {
		const newNode = createNode(key, value);
		if (!head) {
			head = newNode; } else {
			let current = head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
			tail = newNode;
		}
		size++;
	};

	const prepend = (key, value) => {
		const newNode = createNode(key, value);
		if (!head) {
			head = newNode;
		} else {
			newNode.next = head;
			head = newNode;
		};
		size++;
	};
	
	const at = (index) => {
		if (index > size) return undefined;
		let current = head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		};
		if (current === null) return undefined;
		return current;
	};

	const pop = () => {
		const oldHead = head;
		head = head.next;
	};

	const contains = (key) => {
		let current = head;
		while (current && current.key !== key) {
			current = current.next;
		};
		if (current === null) {
			return false;
		} else {
			return true;
		};
	};

	const findIndex = (key) => {
		let current = head;
		let index = 0;
		while (current && current.key !== key) {
			current = current.next;
			index++;
		};
		if (current === null) {
			return -1;
		} else {
			return index;
		};
	};

	const edit = (key, newValue) => {
		const current = head;
		while (current && current.key !== key) {
			current = current.next;
		};
		current.value = newValue;
	};

	const toString = () => {
		let string = ``;
		let current = head;
		for (let i = 0; i < size; i++) {
			string += `( ${current.value} ) -> `;
			current = current.next;
		};
		string += `null`;
		return string;
	};

	const getKeys = () => {
		if (!head) return null;
		const array = [];
		let current = head;
		while (current) {
			array.push(current.key);
			current = current.next;
		};
		return array;
	};

	const getValues = () => {
		if (!head) return null;
		const array = [];
		let current = head;
		while (current) {
			array.push(current.value);
			current = current.next;
		};
		return array;
	};

	const displayHead = () => head;
	const displayTail = () => tail;
	const displaySize = () => size;

	return { append, prepend, displayHead, displayTail, at, pop, contains, findIndex, edit, toString, getKeys, getValues, displaySize };
};

const createNode = (key = null, value = null) => {
	return { key, value, next: null };
};

export { linkedList };
