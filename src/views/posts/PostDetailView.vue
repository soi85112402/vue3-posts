<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <p class="text-muted">{{ createAt }}</p>
        <div class="row g-2">
            <div class="col-auto">
                <button class="btn btn-outline-dark">이전글</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-dark">다음글</button>
            </div>
            <div class="col-auto me-auto"></div>
            <div class="col-auto">
                <button class="btn btn-outline-dark" @click="goListpage">
                    목록
                </button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-dark" @click="goEditpage">
                    수정
                </button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-dark">삭제</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
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
const route = useRoute();
const router = useRouter();

const goListpage = () => {
    router.push({
        name: 'PostList',
    });
};
const goEditpage = id => {
    router.push({
        name: 'PostEdit',
        parmas: {
            id,
        },
    });
};
</script>

<style lang="scss" scoped></style>
