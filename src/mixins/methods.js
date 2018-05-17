/**
 * Created by szatpig on 2018/1/16.
 */
export default {
  methods: {
    handleSocketMessage(data){
        this.$message({
          type: 'success',
          message: data
        });
    }
  }
}
