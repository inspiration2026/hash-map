export class HashMap {
    constructor (loadFactor, capacity) {
        this.loadFactor = loadFactor || 0.75;
        this.capacity = capacity || 16;
        this.entries = 0;

        this.buckets = [];
        this.createBuckets(this.capacity);
        
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        const bucket = this.buckets[this.hash(key)]; 
        for (let i = 0; i < bucket.length; i++) {
            const entity = bucket[i];

            if (entity[0] === key) {
                entity[1] = value;
                return;
            };
        };
        bucket.push ([key, value]);      
        this.entries++;
        if (this.entries > (this.capacity*this.loadFactor)) {
            this.capacity *= 2;
            this.#resize();
        }

    }

    #resize() {
        const tempArray = this.#collectAllEntries();

        this.buckets =  [];
        this.createBuckets(this.capacity);
        this.entries = 0;

        tempArray.forEach( (entity) => {
            this.set(entity[0], entity[1]);
        })

    }

    createBuckets (capacity) {
        for (let i = 0; i < capacity; i++) {
        this.buckets.push([]);
        }
    }

    get(key) {
        const bucket = this.buckets[this.hash(key)]; 
        for (let i = 0; i < bucket.length; i++) {
            const entity = bucket[i];
            if (entity[0] === key) {
                return entity[1];
            }
        }
        return null;
    }

    has(key) {
        const bucket = this.buckets[this.hash(key)]; 
        for (let i = 0; i < bucket.length; i++) {
            const entity = bucket[i];
            if (entity[0] === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        const bucket = this.buckets[this.hash(key)]; 
        for (let i = 0; i < bucket.length; i++) {
            const entity = bucket[i];
            if (entity[0] === key) {
                bucket.splice (i,1);
                this.entries--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.entries;
    }

    clear() {
        this.entries = 0;
        this.buckets = [];
        this.createBuckets(this.capacity);
    }

    #collectAllEntries () {
        const allEntries = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i].length !== 0) {
                const bucket = this.buckets[i];
                for (let j = 0; j < bucket.length; j++) {
                    allEntries.push (bucket[j]);
                };
            }
        }
        return allEntries;
    }

    keys() {
        const allEntries = this.#collectAllEntries();
        return allEntries.map ((entry) => entry[0]);
    }

    values() {
        const allEntries = this.#collectAllEntries();
        return allEntries.map ((entry) => entry[1]);
    }

    entries() {
        const allEntries = this.#collectAllEntries();
        return allEntries;
    }


}   