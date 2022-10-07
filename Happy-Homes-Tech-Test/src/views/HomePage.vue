<script>
import CardBasic from '@/components/CardBasic.vue';
import { mapActions } from 'vuex'
export default {
    components: { CardBasic },
   data(){
    return {
       
    }
   },
   methods:{
    ...mapActions(['fetchProduct'])
   },
   created(){
    this.fetchProduct()
   }

}
</script>

<template>
    <div>
        <h1 class="mb-10">Product Cards</h1>
        <v-row>
    <CardBasic v-for="(el, index) in $store.state.test" :key="index" :product="el" />
        </v-row>
    </div>
</template>