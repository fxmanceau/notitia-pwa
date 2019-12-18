<template>
    <nav class="nav-bar-container">
        <div class="nav-bar-list">
            <router-link :to="`/${lang}/alert`" class="nav-bar-item">
                <img
                    class="item-image"
                    :src="`/img/navbar/pin${route == 'alert' ? '-active' : ''}.svg`"
                    alt="Ma commune"
                />
                <span class="item-title">Ma commune</span>
            </router-link>
            <router-link :to="`/${lang}/danger`" class="nav-bar-item">
                <img
                    class="item-image"
                    :src="`/img/navbar/home${route == 'danger' ? '-active' : ''}.svg`"
                    alt="Informations"
                />
                <span class="item-title">Informations</span>
            </router-link>
            <router-link :to="`/${lang}/dashboard`" class="nav-bar-item">
                <img
                    class="item-image"
                    :src="`/img/navbar/alert${route == 'dashboard' ? '-active' : ''}.svg`"
                    alt="Urgence"
                />
                <span class="item-title">Urgence</span>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['route', 'lang'],
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
