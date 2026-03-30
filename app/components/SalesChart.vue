<script setup lang="ts">
const data = await $fetch('/api/orders')
const orders = data.orders

const salesMap: Record<number, number> = {}

orders.forEach((order: any) => {
    const month = new Date(order.createdAt).getMonth()
    salesMap[month] = (salesMap[month] || 0) + order.totalPrice
})

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const chartData = Object.entries(salesMap)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([i, value]) => ({
        month: monthNames[Number(i)],
        value
    }))

const categories = {
    value: {
        name: 'Sales',
        color: '#3b82f6'
    }
}

const xFormatter = (tick: number) => chartData[tick]?.month ?? ''
</script>

<template>
    <section>
        <h2 class="text-xl mb-4">Sales Over Time</h2>

        <LineChart :data="chartData" index="month" :categories="categories" :x-formatter="xFormatter" />
    </section>
</template>