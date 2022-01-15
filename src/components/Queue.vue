<template>
    <section class="queue">
        <section class="header" v-on:click="toSearch">
            <font-awesome-icon icon="angle-down"></font-awesome-icon>
        </section>
        <section class="tracks">
            <section class="track" v-for="track in tracks" :key="track.name">
                <h1>{{ track.name }}</h1>
                <h2>{{ track.artists }}</h2>
            </section>
        </section>
    </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon
    },
    data() {
        return {
            tracks: []
        };
    },

    mounted() {
        fetch('http://localhost:3000/queue/', {
            method: 'GET'
        }).then(res => {
            res.json().then(data => {
                this.tracks = data;
            });
        });

        this.$root.$data.socket.on('del_queue', () => {
            this.tracks.splice(0, 1);
        });
    },

    methods: {
        toSearch() {
            return this.$router.push({ name: 'search' });
        }
    }
}
</script>

<style scoped>
    section.queue {
        height: 100vh;
        width: 100vw;

        position: absolute;
        top: 0; left: 0;

        background: #1ed760;
    }

    section.queue > section.header {
        color: #FFF;
        font-size: 36pt;
        text-align: right;
        padding: 20px 20px;
    }

    section.queue > section.header > font-awesome-icon {
        float: right;
    }

    h1, h2 {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 16pt;
    }

    h2 {
        font-size: 12pt;
    }

    section.queue > section.tracks > section.track {
        text-align: left;
        padding: 20px;

        color: #FFF;
        border-bottom: 1px solid #1db954;
    }

    section.queue > section.tracks > section.track:last-child {
        border-bottom: none;
    }

</style>
