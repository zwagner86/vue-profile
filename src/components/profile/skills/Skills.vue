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
                        span . For example, I made my personal page so I could play around with 
                        span.Skills-section-highlight React
                        span !
            .Skills-section
                .Skills-section-header WHAT?
                .Skills-section-info(v-if="!isLoading && !hasErrored")
                    .Skills-section-description {{whatDescription}}
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
                .Skills-section-error(v-if="!isLoading && hasErrored")
                    font-awesome-icon.Skills-section-error-icon(
                        icon="exclamation-circle"
                        size="lg"
                    )
                    | Sorry! Something is wrong with my API!
                .Skills-loader-container(v-if="isLoading")
                    .Skills-loader
            .Skills-section
                .Skills-section-header WHERE?
                .Skills-section-info
                    div
                        a.Skills-section-employer-link(
                            href="https://www.spothero.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        ) SpotHero
                    div December 2016 - Present
                    div Chicago, IL
                    div Front End Engineer
                .Skills-section-info
                    .Skills-section-employer-link
                        a.Skills-section-employer-link(
                            href="https://www.slalom.com/locations/chicago"
                            target="_blank"
                            rel="noopener noreferrer"
                        ) Slalom Consulting
                    div December 2012 - December 2016
                    div Chicago, IL
                    div Senior Software Engineer
</template>

<script>
import axios from 'axios';
import SkillTile from './SkillTile';
import * as logos from "./assets/logos";

export default {
    name: 'Skills',
    components: {
        SkillTile
    },
    data() {
        return {
            languages: [],
            frameworks: [],
            whatDescription: null,
            isLoading: true,
            hasErrored: false
        };
    },
    created() {
        axios
            .get('https://www.zacharywagner.net/api/v1/skills')
            .then(response => {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }

                const {
                    whatDescription,
                    languages,
                    frameworks
                } = response.data;

                this.languages = languages;
                this.frameworks = frameworks;
                this.whatDescription = whatDescription;
            })
            .catch(error => {
                console.log(error);
                this.hasErrored = true;
            })
            .finally(() => this.isLoading = false)
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
        color: #045e8e;
        font-style: italic;
        font-weight: 600;
        font-size: 20px;
    }

    .Skills-section-info {
        padding-bottom: 15px;
    }

    .Skills-section-description {
        text-indent: 20px;
    }

    .Skills-section-highlight {
        color: #045e8e;
    }

    .Skills-section-employer-link {
        color: #045e8e;
    }

    .Skills-section-employer-link:hover,
    .Skills-section-employer-link:active,
    .Skills-section-employer-link:focus {
        color: #034162;
    }

    .Skills-languages,
    .Skills-frameworks {
        padding-top: 30px;
    }

    .Skills-languages-description,
    .Skills-frameworks-description {
        color: #045e8e;
        font-size: 16px;
        padding-bottom: 20px;
    }

    .Skills-languages-list,
    .Skills-frameworks-list {
        text-align: center;
    }

    .Skills-section-error {
        padding: 15px;
    }

    .Skills-section-error-icon {
        display: inline-block;
        margin-right: 6px;
        margin-top: -4px;
        color: red;
    }

    .Skills-loader-container {
        display: flex;
        justify-content: center;
        padding: 15px 0;
    }

    .Skills-loader {
        border: 4px solid #f3f3f3; /* Light grey */
        border-top: 4px solid #045e8e; /* Blue */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
