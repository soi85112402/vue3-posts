<template>
    <div>
        <h2>게시글 등록</h2>
        <hr class="my-4" />
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">제목</label>
                <input
                    type="email"
                    class="form-control"
                    id="title"
                    placeholder="title"
                />
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">내용</label>
                <textarea
                    type="email"
                    class="form-control"
                    id="content"
                    placeholder="content"
                ></textarea>
            </div>
            <div class="pt-4">
                <button type="button" class="btn btn-outline-dark me-2">
                    목록
                </button>
                <button type="button" class="btn btn-primary">저장</button>
            </div>
        </form>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
