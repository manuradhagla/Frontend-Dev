class LRUCache {
    constructor(capacity = 3) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) return null;
        const value = this.map.get(key);

        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.map.has(key)) this.map.delete(key);
        else if (this.map.size >= this.capacity) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        this.map.set(key, value);
    }
}

const cache = new LRUCache(2);
cache.put('a', 1);
cache.put('b', 2);
console.log('a8_q5 - get a:', cache.get('a'));
cache.put('c', 3);
console.log('a8_q5 - get b (should be null):', cache.get('b'));
console.log('a8_q5 - get c:', cache.get('c'));