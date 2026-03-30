import db from '../data/db.json'

export default defineEventHandler(() => {
  return {
    orders: db.orders,
    orderItems: db.orderItems,
    products:db.products
  }
})