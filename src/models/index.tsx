export interface Line {
	id: string;
	name: string;
	description: string;
	concept: string;
}

export interface Product {
	id: string;
	lineId: string;
	name: string;
	variant: string;
	keyIngredients: string[];
	description: string;
}