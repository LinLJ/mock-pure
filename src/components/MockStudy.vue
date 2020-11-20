<template>
    <div>
        <button v-on:click=clickButton()>click me</button>
        <p>{{token}}</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {postMapping} from '../axiosConfig/api'
export default Vue.extend({
    data(){
        return{
            msg:true,
            token:''
        }
    },
    methods: {
        clickButton(){
            postMapping('api/admin').then((response) => {
                this.msg = response.data.msg
                this.token = response.data.token
            })
        }
    },
    
})
</script>