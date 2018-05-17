<template>
    <div class="home-container">
      <header-component></header-component>
      <div class="content-container" :class="{hidenav:isCollapse}">
        <menu-component></menu-component>
        <el-row class="el-content">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="content-right">
              <title-component></title-component>
              <div class="content-component">
                <router-view></router-view>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <footer-component></footer-component>
    </div>
</template>

<script>
    import headerComponent from './common/header.vue';
    import menuComponent from './common/menu.vue';
    import footerComponent from './common/footer.vue';
    import titleComponent from './common/title.vue'
    import { mapState } from 'vuex'
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Home Pages'
            }
        },
        components: {
          headerComponent,menuComponent,titleComponent,footerComponent
        },
        methods: {},
        computed: {
          ...mapState({
            isCollapse: state=>state.menu.isCollapse
          })
        },
        created() {

        }
    }
</script>

<style lang="scss">

</style>
