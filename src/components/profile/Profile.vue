<template lang="pug">
    .Profile
        ProfileInfo
        Skills
</template>

<script>
import ProfileInfo from './profile-info/ProfileInfo';
import Skills from './skills/Skills';

export default {
    name: 'Profile',
    components: {
        ProfileInfo,
        Skills
    }
};
</script>

<style scoped>
    .Profile {
        position: relative;
        z-index: 500;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }
</style>
