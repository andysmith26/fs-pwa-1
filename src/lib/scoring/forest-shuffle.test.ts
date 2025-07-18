import { describe, it, expect } from 'vitest';
import { scoreForestShuffle, calculateTotalScore } from './forest-shuffle';

describe('Forest Shuffle scoring', () => {
	it('should calculate Forest Shuffle score correctly', () => {
		expect(scoreForestShuffle({ trees: 3, animals: 2, mushrooms: 1 })).toBe(13); // 3*2 + 2*3 + 1*1 = 6 + 6 + 1 = 13
		expect(scoreForestShuffle({ trees: 0, animals: 5, mushrooms: 0 })).toBe(15); // 0*2 + 5*3 + 0*1 = 0 + 15 + 0 = 15
		expect(scoreForestShuffle({ trees: 4, animals: 0, mushrooms: 3 })).toBe(11); // 4*2 + 0*3 + 3*1 = 8 + 0 + 3 = 11
		expect(scoreForestShuffle({ trees: 1, animals: 1, mushrooms: 1 })).toBe(6); // 1*2 + 1*3 + 1*1 = 2 + 3 + 1 = 6
	});

	it('should calculate total score from array', () => {
		expect(calculateTotalScore([10, 20, 30])).toBe(60);
		expect(calculateTotalScore([5, 5, 5])).toBe(15);
		expect(calculateTotalScore([])).toBe(0);
		expect(calculateTotalScore([100])).toBe(100);
	});
});
