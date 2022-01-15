<template>
    <section class="track" v-on:click="queueTrack">
        <h1>{{ track.name }}</h1>
        <h2>{{ artists }}</h2>
    </section>
</template>

<script>
export default {
    props: ['track'],
    data() {
        return {
            
        }
    },

    methods: {
        queueTrack() {
            fetch(`http://localhost:3000/queue/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.track)
            }).then(() => {
                this.$emit('added');
            }).catch(() => {
                this.$emit('error', 'Erreur lors de l\'ajout dans la file');
            })
        }
    },

    computed: {
        artists() {
            const names = this.track.artists.map(artist => artist.name);
            return names.join(', ');
        }
    }
}
</script>

<style scoped>
    section.track {
        background: #FFF;
        border-radius: 10px;
        padding: 10px 0;
        margin: 10px 0;    
    }

    section.track > h1 {
        font-size: 18pt;
    }

    section.track > h2 {
        font-size: 12pt;
    }
</style>