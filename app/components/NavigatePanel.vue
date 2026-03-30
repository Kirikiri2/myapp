<template>
    <div class="flex flex-col gap-y-8 w-full max-w-75 mt-5 pl-7.5">
        <div class="flex items-center gap-x-3.5">
            <img src="/logo.png" alt="">
            <p class="title text-[40px]">Novanest</p>
        </div>
        <div class="flex flex-col gap-y-3">
            <nav-bar v-for="item in menu" :key="item.path">
                <NuxtLink :to="item.path" class="flex  items-center py-3 rounded-lg transition " :class="[
                    route.path === item.path ? 'bg-black text-white' : 'text-black']">
                    <nav class="flex justify-start gap-x-4 pl-4.5 mr-auto ">
                        <Icon :name="item.icon" />
                        <p>{{ item.name }}</p>
                    </nav>
                </NuxtLink>
            </nav-bar>
        </div>

    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const menu = [
    { name: 'Overview', icon: 'mdi:view-grid-outline', path: '/' },
    { name: 'Products', icon: 'mdi:box-variant-closed', path: '/products' },
    { name: 'Customer', icon: 'mdi:user-multiple-outline', path: '/' },
    { name: 'Orders', icon: 'mdi:briefcase-outline', path: '/' },
    { name: 'Shipment', icon: 'mdi:compass-outline', path: '/' },
    { name: 'Store Setting', icon: 'mdi:archive-outline', path: '/' },
    { name: 'Platform Partner', icon: 'mdi:share-variant-outline', path: '/' },
    { name: 'Feedback', icon: 'mdi:chat-bubble-outline', path: '/' },
    { name: 'Help & Support', icon: 'mdi:question-mark-circle-outline', path: '/' }
]
</script>