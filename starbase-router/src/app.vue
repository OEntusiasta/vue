<template>
<div id="app">
    <h3>StarBase Router</h3>
    <h4>
    <router-link class="link" to="/data/people">Personagens</router-link> | 
    <router-link class="link"  to="/data/planets">Planetas</router-link> 
    </h4>
    <router-view></router-view>
</div>

</template>
