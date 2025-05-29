export interface Line {
	id: string;
	name: string;
	description: string;
	concept: string;
}

export interface ProductRaw {
	id: string;
	lineId: string;
	name: string;
	variant: string;
	keyIngredients: string[];
	description: string;
	altText: string;
	price: number;
	currency: string;
	onSale: boolean;
	promotionalPrice: number;
	isAvailable: boolean;
}

export interface Product {
	id: string;
	name: string;
	line: Line;
	variant: string;
	keyIngredients: string[];
	description: string;
	altText: string;
	price: number;
	currency: string;
	onSale: boolean;
	promotionalPrice: number;
	isAvailable: boolean;
}