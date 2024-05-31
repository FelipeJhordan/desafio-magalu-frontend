export type GetUsersOrdersResponseType = { 
    user_id: number;
    name: string;
    orders: OrderType[];
}

export type OrderType =  {
    order_id: number;
    total?: number;
    date: Date;
    products: ProductType[];
}


export type ProductType = {
    product_id: number;
    value: number;
}