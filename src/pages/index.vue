<template>
  <div class="el-col-24" ref="canvasWrap">
    <canvas id="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
  import { mapState } from "vuex"
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        components: {},
        methods: {},
        computed: {
          ...mapState({
            isCollapse: state=>state.menu.isCollapse
          })
        },
        mounted () {
          this.$nextTick(() => {
            let canvasWrapWidth = this.$refs.canvasWrap.offsetWidth;
            let self = this;
            window.addEventListener("resize",function(){
              canvasWrapWidth = self.$refs.canvasWrap.offsetWidth;
              self.$refs.canvas.style.width = canvasWrapWidth+"px";
            });
            self.$refs.canvas.style.width = canvasWrapWidth+"px";
            self.$refs.canvas.style.height = "700px";
          })
        },
        created() {

        }
    }
</script>

<style lang="scss">

</style>
