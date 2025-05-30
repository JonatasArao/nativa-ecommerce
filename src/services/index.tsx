import productList from '@static/json/productList.json';
import lineList from '@static/json/lineList.json';
import { Line, Product, ProductRaw } from "@models";

export class LineService {
	static getAll() : Line[] {
		return lineList;
	}

	static getById(id : string) : Line | undefined {
		return (lineList as Line[]).find(l => l.id === id);;
	}
}

export class ProductService {
	static getAll() : Product[] {
		return (productList as ProductRaw[]).map((product) => {
			const line = LineService.getById(product.lineId);
			if (!line) {
				throw new Error(`Line with id ${product.lineId} not found`);
			}
			return {
				...product,
				line
			};
		});
	}

	static getByLine(lineId : string) : Product[] {
		const products = (productList as ProductRaw[]).filter(p => p.lineId === lineId);
		const line = LineService.getById(lineId);
		if (!line) {
			throw new Error(`Line with id ${lineId} not found`);
		}
		return products.map(product => ({
			...product,
			line
		}));
	}

	static getById(id : string) : Product | undefined {
		const product = (productList as ProductRaw[]).find(p => p.id === id);
    	if (!product) return undefined;
		const line = LineService.getById(product.lineId);
		if (!line) {
			throw new Error(`Product with id ${id} has an invalid lineId: ${product.lineId}`);
		}
		return {
			...product,
			line
		}
	}

	static searchQuery(query : string) : Product[] {
		return (productList as ProductRaw[])
		.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))	
		.map((product) => {
			const line = LineService.getById(product.lineId);
			if (!line) {
				throw new Error(`Line with id ${product.lineId} not found`);
			}
			return {
				...product,
				line
			};
		});
	}
}