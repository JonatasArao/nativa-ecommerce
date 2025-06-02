import productList from '@static/json/productList.json';
import lineList from '@static/json/lineList.json';
import { Line, Product, ProductRaw } from "@models";
import { normalizeString } from "@utils";

export class LineService {
  static getAll() : Line[] {
    return lineList;
  }

  static getById(id : string) : Line | undefined {
    return (lineList as Line[]).find(l => l.id === id);;
  }
}

export class ProductService {
  private static lineMap = new Map(LineService.getAll().map(line => [line.id, line]));

  private static hydrateProduct(productRaw: ProductRaw): Product | null {
    const line = this.lineMap.get(productRaw.lineId);
    if (!line) {
      console.warn(`[ProductService] The line with ID ${productRaw.lineId} was not found for the product “${productRaw.name}".`);
      return null;
    }
    return { ...productRaw, line };
  }

  static getAll() : Product[] {
    return (productList as ProductRaw[])
      .map(p => this.hydrateProduct(p))
      .filter((p): p is Product => p !== null);
  }

  static getByLine(lineId : string) : Product[] {
    const line = this.lineMap.get(lineId);
    if (!line) {
      throw new Error(`[ProductService] The line with ID ${lineId} was not found.`);
    }

    return (productList as ProductRaw[])
      .filter(p => p.lineId === lineId)
      .map(product => ({
        ...product,
        line
      }));
  }

  static getById(id : string) : Product | undefined {
    const productRaw = (productList as ProductRaw[]).find(p => p.id === id);
    if (!productRaw) {
      return undefined;
    }
    const product = this.hydrateProduct(productRaw);
    return product ?? undefined;
  }

  static searchQuery(query : string) : Product[] {
    const normalizedQuery = normalizeString(query);
    const matchingLineIds = new Set<string>(
      LineService.getAll()
      .filter(line => {
        const searchableLineText = [
          line.name,
          line.concept,
          line.description
        ].join(' ');
        console.log(searchableLineText);
        return normalizeString(searchableLineText).includes(normalizedQuery);
      })
      .map(line => line.id)
    );
    const filteredRawProducts = (productList as ProductRaw[])
      .filter(product => {
        if (matchingLineIds.has(product.lineId)) {
            return true;
        }
        const searchableProductText = [
            product.name,
            product.variant,
            product.description
        ].join(' ');
        console.log(searchableProductText);
        return normalizeString(searchableProductText).includes(normalizedQuery);
    });
    return filteredRawProducts
        .map(product => this.hydrateProduct(product))
        .filter((p): p is Product => p !== null);
  }
}