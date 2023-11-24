export interface SimplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

export interface FullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
}

export interface FullbannerItem {
    _id: string;
    title: string;
    description: string;
    image: string;
    title_color: string;
    description_color: string;
    link: string
    is_visible?: boolean;
}