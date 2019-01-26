<template lang="pug">
    div.container
        h1 {{ message }}
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: 'Zachary Wagner - Parcel + Vue',
        };
    },
};
</script>

<style scoped>
    .container {
        width: 600px;
        margin: 50px auto;
        text-align: center;
    }
</style>
