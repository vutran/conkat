const merge = require('../');

describe('conkat', () => {
    describe('lists', () => {
        const a = { name: 'a' };
        const b = { name: 'b' };
        const c = { name: 'c' };

        const list1 = [a];
        const list2 = [b];
        const list3 = [c];

        const merged = merge(list1, list2, list3);

        it('should merge 3 lists', () => {
            expect(merged.length).toBe(3);
            expect(merged).toContain(a);
            expect(merged).toContain(b);
            expect(merged).toContain(c);
        });

        it('should have the same reference', () => {
            expect(merged[0]).toBe(a);
            expect(merged[1]).toBe(b);
            expect(merged[2]).toBe(c);
        });
    });

    describe('objects', () => {
        const object1 = { first_name: 'Vu' };
        const object2 = { last_name: 'Tran' };

        const merged = merge(object1, object2);

        it('should merge 2 objects', () => {
            expect(object1).not.toBe(object2);
            expect(merged).toMatchObject({
                first_name: 'Vu',
                last_name: 'Tran',
            });
        });
    });

    describe('maps', () => {
        const a = { name: 'a' };
        const b = { name: 'b' };

        const mapA = new Map();
        mapA.set('a', a);
        const mapB = new Map();
        mapB.set('b', b);

        const merged = merge(mapA, mapB);

        it('should merge 2 maps', () => {
            expect(merged.has('a')).toBeTruthy();
            expect(merged.has('b')).toBeTruthy();
            expect(merged.size).toBe(2);
        });

        it('should have the same reference', () => {
            expect(merged.get('a')).toBe(a);
            expect(merged.get('b')).toBe(b);
        });
    });

    describe('sets', () => {
        const a = { name: 'a' };
        const b = { name: 'b' };

        const setA = new Set();
        setA.add(a);
        const setB = new Set();
        setB.add(b);

        const merged = merge(setA, setB);

        it('should merge 2 sets', () => {
            expect(merged.has(a)).toBeTruthy();
            expect(merged.has(b)).toBeTruthy();
            expect(merged.size).toBe(2);
        });
    });
});
