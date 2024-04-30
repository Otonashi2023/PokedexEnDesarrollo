<template>
    <div>
        <PokemonesList/>
        <PokemonNone/>
    </div>
</template>
<script>
//import PokemonesList from '@/components/PokemonesList.vue';
import PokemonNone from '@/components/PokemonNone.vue';
export default{
    name:'TablaPokemonView',
    components: {
    //PokemonesList,
    PokemonNone
    },
}
</script>
  