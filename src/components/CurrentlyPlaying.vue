<template>
    <section class="playback">
        <section class="details">
            <h1>{{ playback.item.name }}</h1>
            <h2>{{ artists }}</h2>
        </section>

        <section class="skip">
            <font-awesome-icon icon="forward">t</font-awesome-icon>
        </section>
    </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faForward } from '@fortawesome/free-solid-svg-icons';

library.add(faForward);

export default {
    data() {
        return {
            playback: {
                item: {
                    name: 'Placeholder',
                    artists: [
                        {
                            name: 'John Doe'
                        }
                    ]
                }
            }
        };
    },

    components: {
        'font-awesome-icon': FontAwesomeIcon
    },

    computed: {
        artists() {
            const names = this.playback.item.artists.map(artist => artist.name);
            return names.join(', ');
        }
    },

    mounted() {
        this.$root.$data.socket.on('playback', e => {
            this.playback = e;
        });
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    section.playback {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 10%;
        width: 100vw;
        background-color: #1db954;
        box-sizing: border-box;
    }

    section.playback > section.details {
        float: left;

        position: absolute;
        top: 50%; left: 5%;
        transform: translateY(-50%);
    }

    section.playback > section.skip {
        float: right;
        
        position: absolute;
        top: 50%; right: 5%;
        transform: translateY(-50%);
    }

    section.playback > section.details > h1 {
        color: #FFF;
        text-align: left;
        font-size: 18pt;
    }

    section.playback > section.details > h2{
        color: #FFF;
        text-align: left;
        font-size: 12pt; 
    }

    section.playback > section.skip {
        color: #FFF;
        font-size: 16pt;
    }
</style>