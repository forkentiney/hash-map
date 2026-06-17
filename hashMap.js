import { linkedList } from "./linked-list.js";

function hashMap() {
	const loadFactor = 0.75;
	const capacity = 16;
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

		buckets[index].prepend(key, value);
		size += 1;
	};

	return { hash, set, buckets, };
};

const test = hashMap();
