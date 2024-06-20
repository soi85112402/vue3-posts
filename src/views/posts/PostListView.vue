<template>
    <div>
        <h2>게시글 목록</h2>
        <hr class="my-4" />
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">제목</th>
                    <th scope="col">내용</th>
                    <th scope="col">글날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="post in posts"
                    :key="post.id"
                    @click="goPage(post.id)"
                >
                    <PostItem
                        :id="post.id"
                        :title="post.title"
                        :content="post.content"
                        :create-at="post.createAt"
                    ></PostItem>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const fetchPost = () => {
    posts.value = getPosts();
};
fetchPost();

const router = useRouter();

// http://localhost:5173/posts/3?searchText=hello#world
const goPage = id => {
    router.push({
        name: 'PostDetail',
        params: {
            id,
        },
        query: {
            searchText: 'hello',
        },
        hash: '#world',
    });
};
</script>

<style lang="scss" scoped></style>
