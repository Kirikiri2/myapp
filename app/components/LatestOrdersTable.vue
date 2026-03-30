<script setup lang="ts">
defineProps<{
    orders: any[]
}>()
</script>

<template>
    <div class="mt-6">
        <h3 class="text-lg mb-2">Latest Orders</h3>

        <table class="w-full text-sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>#{{ order.id }}</td>
                    <td>{{ new Date(order.createdAt).toLocaleDateString() }}</td>
                    <td>{{ order.totalPrice }} $</td>
                    <td>{{ order.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>