export function scoreForestShuffle({
	trees,
	animals,
	mushrooms
}: {
	trees: number;
	animals: number;
	mushrooms: number;
}) {
	return trees * 2 + animals * 3 + mushrooms * 1;
}

export function calculateTotalScore(scores: number[]): number {
	return scores.reduce((total, score) => total + score, 0);
}
