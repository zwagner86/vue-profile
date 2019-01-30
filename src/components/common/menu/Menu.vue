<template lang="pug">
    div(:class="mainClassName")
        .Menu-toggle
            button.Menu-toggle-button(@click="onMenuToggleClick")
                font-awesome-icon.Menu-toggle-icon(:icon="iconName", size="3x")
        .Menu-links
            a.Menu-link(href="https://www.zacharywagner.net") Home
            a.Menu-link(href="https://www.zacharywagner.net/resume") Resume
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            isMenuOpen: false
        };
    },
    computed: {
        mainClassName() {
            return `Menu${this.isMenuOpen ? ' Menu-is-open' : ''}`;
        },
        iconName() {
            return (this.isMenuOpen) ? 'times' : 'bars';
        }
    },
    methods: {
        onMenuToggleClick() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};
</script>

<style scoped>
    .Menu {
        position: absolute;
        top: 0;
        left: 0;
        background: #ffffff;
        z-index: 600;
        width: 100vw;
        height: auto;
        transform: translate3d(-100vw, 0, 0);
        transition: transform 0.35s;
    }

    .Menu.Menu-is-open {
        transform: translate3d(0, 0, 0);
        box-shadow: 0 4px 8px 0 rgba(70,73,76, 0.6);
    }

    .Menu-toggle {
        position: absolute;
        top: 0;
        right: 0;
        width: 56px;
        height: 56px;
        transform: translateX(56px);
        transition: transform 0.2s;
    }

    .Menu-is-open .Menu-toggle {
        transform: translateX(0);
    }

    .Menu-toggle-button {
        cursor: pointer;
        background: transparent;
        border: none;
        width: 56px;
        height: 56px;
        padding: 0;
    }

    .Menu-toggle-button:active,
    .Menu-toggle-button:hover,
    .Menu-toggle-button:focus {
        outline: none;
    }

    .Menu-toggle-icon {
        color: #ffffff;
    }

    .Menu-is-open .Menu-toggle-icon {
        color: #2f855f;
    }

    .Menu-links {
        height: 100%;
        padding: 56px 0 24px;
    }

    .Menu-link {
        color: #2f855f;
        display: block;
        padding: 16px;
    }

    .Menu-link:active,
    .Menu-link:hover,
    .Menu-link:focus {
        color: #2b6049;
        background: #e4e4e4;
    }

    .Menu-link-active {
        font-weight: 600;
    }

    @media (min-width: 768px) {
        .Menu {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 600;
            width: 240px;
            height: 100%;
            transform: translate3d(-240px, 0, 0);
            transition: transform 0.35s;
        }

        .Menu.Menu-is-open {
            box-shadow: 4px 0 8px 0 rgba(70,73,76, 0.6);
        }
    }
</style>