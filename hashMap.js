import { linkedList } from "./linked-list.js";

function hashMap() {
	const loadFactor = 0.75;
	let capacity = 16;
	let size = 0;
	let buckets = Array.from({ length: capacity }, () => linkedList());

	const hash = (key) => {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = ((primeNumber * hashCode) + key.charCodeAt(i)) % capacity;
		};

		return hashCode;
	};

	const set = (key, value) => {
		const index = hash(key);

		if (buckets[index].contains(key)) {
			buckets[index].edit(key, value);
		} else {
			buckets[index].prepend(key, value);
			size += 1;
		};
	};

	const get = (key) => {
		const index = hash(key);
		if (!has(key)) return null;
		const listIndex = buckets[index].findIndex(key);
		const value = buckets[index].at(listIndex).value;
		return value;
	};

	const has = (key) => {
		const index = hash(key);
		if (buckets[index].contains(key)) {
			return true;
		} else {
			return false;
		};
	};

	const clear = () => {
		for (let i = 0; i < buckets.length; i++) {
			const items = buckets[i];
			while (items.displayHead()) {
				items.pop();
				size--;
			};
		};
	};

	const length = () => size;

	return { hash, set, buckets, get, has, clear, length };
};

const test = hashMap();

test.set("Joshua", "1");
test.set("Claire", "2");
console.log(test.length());
test.clear();
console.log(test.get("Joshua"));
console.log(test.length());
