interface Users {
    id:number,
    name: string,
    email:string,
    role:string
}
interface Categories {
    id:number,
    name:string,
    parentId:null
}
interface Products {
    id:number,
    name:string,
    price:number,
    stock:number,
    categoryId: number
}
interface Customers {
    id:number,
    name:string,
    email:string
}
export interface Orders {
    id:number,
    customerId:number,
    totalPrice:number,
    status:string,
    payment:string,
    createdAt:string
}
interface OrderItems {
    id:number,
    orderId:number,
    productId:number,
    quantity:number,
    price:number
}
interface Shipments {
    id:number,
    orderId:number,
    status:string,
    tracking:string
}