import type { SeedColumn } from "@/lib/board-seed";

export type CreateCategoryInput = {
	title: string;
	color: string;
};

function generateCategoryId() {
	return Date.now() + Math.floor(Math.random() * 1000);
}

export function createCategory(columns: SeedColumn[], input: CreateCategoryInput) {
	const nextColumn: SeedColumn = {
		id: generateCategoryId(),
		title: input.title.trim(),
		color: input.color,
		cards: [],
	};

	return [...columns, nextColumn];
}
