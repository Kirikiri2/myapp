<script setup lang="ts">
import StatsCard from './StatsCard.vue';


defineProps<{
    totalOrders: number
    avgOrderValue: number
    lifetimeValue: number
    topProducts: { name: string; quantity: number }[]
}>()
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <StatsCard label="Avg Order Value" :value="avgOrderValue.toFixed(2) + ' $'" />
        <StatsCard label="Total Orders" :value="totalOrders" />
        <StatsCard label="Lifetime Value" :value="lifetimeValue.toFixed(2) + ' $'" />
        <div class="bg-white p-4 rounded-xl shadow">
            <h3 class="text-sm text-gray-500 mb-2">Top Products</h3>

            <ul class="space-y-2">
                <li v-for="p in topProducts" :key="p.name" class="flex justify-between">
                    <span>{{ p.name }}</span>
                    <span class="font-medium">{{ p.quantity }}</span>
                </li>
            </ul>
        </div>

    </div>
</template>