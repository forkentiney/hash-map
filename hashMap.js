function hashMap() {
	const loadFactor = 0.75;
	const capacity = 16;

	const hash = (key) => {
		let hashCode = 0;

		const primeNumber = 5;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
		};

		return hashCode;
	};

	return { hash, };
};

const test = hashMap();

console.log(test.hash("Joshua"));
console.log(test.hash("Claire"));
