<template lang="pug">
    .ProfileInfo
        .ProfileInfo-inner
            .ProfileInfo-inner-cell
                .ProfileInfo-pic-container
                    img.ProfileInfo-pic-img(
                        :src="profilePic"
                        alt="Zachary Wagner Profile"
                    )
                h1 Hey, I&apos;m Zach,
                h4.ProfileInfo-h4 a Front End Engineer
                h4.ProfileInfo-h4 working in Chicago
                h4.ProfileInfo-h4 for SpotHero
                .ProfileInfo-social-icons
                    a.ProfileInfo-social-link.ProfileInfo-linkedin-link(
                        href="https://www.linkedin.com/in/zacharywagner"
                        target="_blank"
                        rel="noopener noreferrer"
                    )
                        font-awesome-icon.ProfileInfo-social-icon(
                            :icon="['fab', 'linkedin']"
                            size="2x"
                            fixed-width=true
                        )
                    a.ProfileInfo-social-link.ProfileInfo-github-link(
                        href="https://github.com/zwagner86"
                        target="_blank"
                        rel="noopener noreferrer"
                    )
                        font-awesome-icon.ProfileInfo-social-icon(
                            :icon="['fab', 'github']"
                            size="2x"
                            fixed-width=true
                        )
                .ProfileInfo-resume-link
                    a.ProfileInfo-resume-btn(
                        href="https://www.zacharywagner.net/resume"
                    ) View Resume
</template>

<script>
import profilePic from './assets/prof-pic.png';

export default {
    name: 'ProfileInfo',
    data() {
        return {
            profilePic
        };
    },
};
</script>

<style scoped>
    .ProfileInfo {
        width: 100%;
        background-color: #2f855f;
        color: #ffffff;
        padding-left: 15px;
        padding-right: 15px;
    }

    .ProfileInfo-inner {
        padding: 30px 0;
        text-align: center;
        display: table;
        width: 100%;
        height: 100%;
    }

    .ProfileInfo-inner-cell {
        display: table-cell;
        vertical-align: middle;
    }

    .ProfileInfo-pic-container {
        padding-bottom: 25px;
    }

    .ProfileInfo-pic-img {
        width: 200px;
        height: 200px;
        background-color: #ffffff;
        border: 5px solid #ffffff;
        border-radius: 50%;
    }

    .ProfileInfo-h4 {
        margin: 0;
    }

    .ProfileInfo-social-icons {
        display: inline-block;
        padding-top: 15px;
    }

    .ProfileInfo-social-icon {
        margin: 10px 5px;
        color: #ffffff;
    }

    .ProfileInfo-social-link:hover > .ProfileInfo-social-icon,
    .ProfileInfo-social-link:focus > .ProfileInfo-social-icon {
        color: #e4e4e4;
    }

    .ProfileInfo-linkedin-link > .ProfileInfo-social-icon {
        margin-left: 0;
    }

    .ProfileInfo-github-link > .ProfileInfo-social-icon {
        margin-right: 0;
    }

    .ProfileInfo-resume-link {
        display: block;
        padding-top: 15px;
    }

    .ProfileInfo-resume-btn {
        display: inline-block;
        width: 175px;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.3;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        background-color: #ffffff;
        border-color: #2f855f;
        border-radius: 16px;
        color: #2f855f;
    }

    .ProfileInfo-resume-btn:hover,
    .ProfileInfo-resume-btn:focus {
        background-color: #e4e4e4;
    }

    @media (min-width: 768px) {
        .ProfileInfo {
            width: 50%;
            position: fixed !important;
            height: 100%;
            left: 0;
            overflow: hidden;
        }
    }

</style>
