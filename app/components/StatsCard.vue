<script setup lang="ts">
defineProps<{
    label: string
    value: string | number
}>()
</script>

<template>
    <div class="card">
        <p>{{ label }}</p>
        <h3>{{ value }}</h3>
    </div>
</template>