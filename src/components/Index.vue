<template>
  <div class="form-control">
    这是一个人信息页
  </div>
</template>

<script>
//import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'Index',
  components: {},
  data () {
    return {
      
    }
  },
  mouted(){
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.loading = true;
      this.$store.dispatch('GetUserInfo', this.loginForm).then(() => {
        this.loading = false
        this.$router.push({ path: '/' })
            // this.showDialog = true
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>


<style>
  .form-control input{
    width: 150px;
    height: 24px;
    line-height: 24px;
    box-sizing: border-box;
    padding: 5px 10px;
    margin-bottom: 5px;
  }

  .form-control button {
    padding: 5px 10px;
    background-color: #28A7E3;
    color: #000;
    margin: 0;
    border: none;
  }
</style>
