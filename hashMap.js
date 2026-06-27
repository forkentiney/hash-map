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

		if ((size / capacity) > loadFactor) {
			resize();
		};
	};

	const resize = () => {
		const oldMap = entries();
		capacity = capacity * 2;
		buckets = Array.from({ length: capacity }, () => linkedList());

		oldMap.forEach((entry) => {
			set(entry[0], entry[1]);
		});
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

	const keys = () => {
		const array = [];
		buckets.forEach((bucket) => {
			if (bucket.getKeys()) {
				let linkedList = bucket.getKeys();
				linkedList.forEach((node) => {
					array.push(node);
				});
			};
		});
		return array;
	};

	const values = () => {
		const array = [];
		buckets.forEach((bucket) => {
			if (bucket.getValues()) {
				let linkedList = bucket.getValues();
				linkedList.forEach((node) => {
					array.push(node);
				});
			};
		});
		return array;
	};

	const entries = () => {
		const key = keys();
		const value = values();
		const entries = [];

		for (let i = 0; i < key.length; i++) {
			const array = [];
			array.push(key[i]);
			array.push(value[i]);
			entries.push(array);
		};

		return entries;
	};

	const length = () => size;

	return { hash, set, buckets, get, has, clear, keys, values, entries, resize, length };
};

const test = hashMap();

test.set("Joshua", "1");
test.set("Claire", "2");
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.resize();
console.log(test.entries());
