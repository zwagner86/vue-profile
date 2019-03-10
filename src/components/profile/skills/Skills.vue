<template lang="pug">
    .Skills
        .Skills-inner
            .Skills-section
                .Skills-section-header WHO?
                .Skills-section-info
                    .Skills-section-description
                        span Hey, what&apos;s up? My full name is 
                        span.Skills-section-highlight Zachary 
                        span but you can call me 
                        span.Skills-section-highlight Zach
                        span . I am a 
                        span.Skills-section-highlight Software Engineer 
                        span with 
                        span.Skills-section-highlight full-stack experience
                        span , but a passion for working in the 
                        span.Skills-section-highlight front-end
                        span . For example, I made this page so I could play around with 
                        span.Skills-section-highlight Vue
                        span !
                .Skills-section-info
                    .Skills-section-description
                        | I also made versions of this page using React and ReasonML!  You can get to those using the menu.  They really aren&apos;t any different.  I just wanted to be able to compare the frameworks firsthand.
            .Skills-section
                .Skills-section-header WHAT?
                .Skills-section-info
                    .Skills-section-description {{whatSectionDescription}}
                    .Skills-languages
                        .Skills-languages-description Here are some languages I have experience with:
                        .Skills-languages-list
                            SkillTile(
                                v-for="language in languages"
                                :key="language.name"
                                :name="language.name"
                                :showStar="language.star"
                                :logo="getLogo(language.logoName)"
                            )
                    .Skills-frameworks
                        .Skills-frameworks-description And here are some frameworks, libraries, and tools I&apos;ve used:
                        .Skills-frameworks-list
                            SkillTile(
                                v-for="framework in frameworks"
                                :key="framework.name"
                                :name="framework.name"
                                :showStar="framework.star"
                                :logo="getLogo(framework.logoName)"
                            )
            .Skills-section
                .Skills-section-header WHERE?
                .Skills-section-info(
                    v-for="company in companies"
                )
                    div
                        a.Skills-section-employer-link(
                            :href="company.url"
                            target="_blank"
                            rel="noopener noreferrer"
                        ) {{company.name}}
                    div {{company.fromDate}} - {{company.toDate}}
                    div {{company.location}}
                    div {{company.title}}
</template>

<script>
import {
    frameworks,
    languages,
    logos,
    companies,
    whatSectionDescription
} from 'personal-site-data';
import SkillTile from './SkillTile';

export default {
    name: 'Skills',
    components: {
        SkillTile
    },
    data() {
        return {
            languages,
            frameworks,
            whatSectionDescription,
            logos,
            companies
        };
    },
    methods: {
        getLogo(logoName) {
            return logos[logoName];
        }
    }
};
</script>

<style scoped>
    .Skills {
        color: #46494C;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (min-width: 768px) {
        .Skills {
            width: 50%;
            height: auto;
            position: absolute !important;
            right: 0;
        }
    }

    .Skills-inner {
        padding: 30px 0;
    }

    .Skills-section {
        padding-bottom: 40px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .Skills-section-header {
        color: #2f855f;
        font-style: italic;
        font-weight: 600;
        font-size: 24px;
    }

    .Skills-section-info {
        padding-bottom: 15px;
    }

    .Skills-section-description {
        text-indent: 20px;
    }

    .Skills-section-highlight {
        color: #2f855f;
    }

    .Skills-section-employer-link {
        color: #2f855f;
    }

    .Skills-section-employer-link:hover,
    .Skills-section-employer-link:active,
    .Skills-section-employer-link:focus {
        color: #2b6049;
    }

    .Skills-languages,
    .Skills-frameworks {
        padding-top: 30px;
    }

    .Skills-languages-description,
    .Skills-frameworks-description {
        color: #2f855f;
        font-size: 18px;
        padding-bottom: 20px;
    }

    .Skills-languages-list,
    .Skills-frameworks-list {
        text-align: center;
    }
</style>
