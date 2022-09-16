import {describe, it, expect} from '@jest/globals'
import {binarySearch} from './binary-search.js'

describe('Binary search', () => {
    const items = [1, 2, 3, 4, 5];

    it('should return the correct index', () => {
        expect(binarySearch(items, 4)).toEqual(3)
    });

    it('should return the index -1', () => {
        expect(binarySearch(items, 6)).toEqual(-1)
    });
})