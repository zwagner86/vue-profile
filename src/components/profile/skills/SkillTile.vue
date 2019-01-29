<template lang="pug">
    .SkillTile
        .SkillTile-label
            .SkillTile-text
                | {{ name }}
                font-awesome-icon.SkillTile-icon-star(
                    v-if="showStar"
                    icon="star"
                )
        .SkillTile-image-block
            .SkillTile-image-cell
                img.SkillTile-image(
                    :src="logo"
                    alt="name"
                )
</template>

<script>
export default {
    name: 'SkillTile',
    props: {
        name: String,
        showStar: Boolean,
        logo: String
    }
};
</script>

<style scoped>
    .SkillTile {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 20px;
    }

    .SkillTile-label {
        text-align: center;
        padding-bottom: 5px;
        display: table;
        width: 100px;
    }

    .SkillTile-text {
        display: table-cell;
        vertical-align: middle;
    }

    .SkillTile-image-block {
        height: 99px;
        width: 99px;
        display: table;
        text-align: center;
        border: 1px solid #46494C;
    }

    .SkillTile-image-cell {
        display: table-cell;
        vertical-align: middle;
        height: 99px;
        width: 99px;
    }

    .SkillTile-image {
        max-width: 99px;
        max-height: 99px;
        padding: 10px;
        vertical-align: middle;
    }

    .SkillTile-icon-star {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        padding-left: 3px;
        margin-top: -4px;
        color: #045e8e;
    }
</style>
