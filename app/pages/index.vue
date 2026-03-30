<script setup lang="ts">
import LatestOrdersTable from '~/components/LatestOrdersTable.vue'
import SalesChart from '~/components/SalesChart.vue'
import StatsGrid from '~/components/StatsGrid.vue'

const data = await $fetch('/api/orders')
const orders = data.orders
const orderItems = data.orderItems
const products = data.products

const totalOrders = orders.length

const totalRevenue = orders.reduce((sum: number, order: any) => sum + order.totalPrice, 0)

const avgOrderValue = totalOrders ? totalRevenue / totalOrders : 0

const lifetimeValue = totalRevenue

const productMap: Record<string, number> = {}

orders.forEach((order: any) => {
    const items = orderItems.filter(
        (item: any) => item.orderId === order.id
    )

    items.forEach((item: any) => {
        const product = products.find(
            (p: any) => p.id === item.productId
        )

        if (!product) return

        const name = product.name

        productMap[name] = (productMap[name] || 0) + item.quantity
    })
})

const topProducts = Object.entries(productMap)
    .map(([name, quantity]) => ({
        name,
        quantity
    }))
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5)

const latestOrders = [...orders]
    .sort((a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5)
</script>

<template>
    <section class="container max-w-250 w-full ml-auto">

        <SalesChart />

        <StatsGrid :total-orders="totalOrders" :avg-order-value="avgOrderValue" :lifetime-value="lifetimeValue"
            :top-products="topProducts" />

        <LatestOrdersTable :orders="latestOrders" />

    </section>
</template>
