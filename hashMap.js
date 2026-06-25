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

		if (buckets[index].contains(key)) {
			buckets[index].edit(key, value);
		} else {
			buckets[index].prepend(key, value);
			size += 1;
		};
	};

	const get = (key) => {
		const index = hash(key);

		if (!buckets[index].contains(key)) return null;

		const listIndex = buckets[index].findIndex(key);

		const value = buckets[index].at(listIndex).value;

		return value;
	}

	const getSize = () => size;

	return { hash, set, buckets, get, getSize };
};

const test = hashMap();

test.set("Joshua", "1");
console.log(test.buckets[test.hash("Joshua")].displayHead());
test.set("Joshua", "5");
console.log(test.buckets[test.hash("Joshua")].displayHead());
test.set("Claire", "2");
console.log(test.buckets[test.hash("Claire")].displayHead());
console.log(test.getSize());
console.log(test.get("Joshua"));
console.log(test.get("Claire"));
console.log(test.get("Greg"));
