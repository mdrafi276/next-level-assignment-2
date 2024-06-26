export type ProductVariant = {
    type: string;
    value: string;
};

export type Inventory = {
    quantity: number;
    inStock: boolean;
};

export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: ProductVariant[];
    inventory: Inventory;
};

export const iPhone13: TProduct = {
    name: "iPhone 13",
    description: "A sleek and powerful smartphone with cutting-edge features.",
    price: 999,
    category: "Electronics",
    tags: ["smartphone", "Apple", "iOS"],
    variants: [
        {
            type: "Color",
            value: "Midnight Blue"
        },
        {
            type: "Storage Capacity",
            value: "256GB"
        }
    ],
    inventory: {
        quantity: 50,
        inStock: true
    }
};
