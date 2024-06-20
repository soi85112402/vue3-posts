<template>
    <th scope="row">{{ id }}</th>
    <td>{{ title }}</td>
    <td>{{ content }}</td>
    <td>{{ createAt }}</td>
</template>

<script setup>
defineProps({
    id: {
        type: Number,
        requied: true,
    },
    title: {
        type: String,
        requied: true,
    },
    content: {
        type: String,
    },
    createAt: {
        type: [String, Date, Number],
    },
});
</script>

<style lang="scss" scoped></style>
