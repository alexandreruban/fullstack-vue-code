<template>
  <div id="login" class="box has-text-centered">
    <h2 class="title">Fullstack Clothing</h2>
    <button
      @click="login"
      class="button is-primary"
      :class="{ 'is-loading': loading }" >
      Login
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginBox",
  methods: {
    login() {
      this.$store.dispatch("login").then(() => {
        this.$router.push("/products");
      })
    }
  },
  computed: {
    ...mapGetters(["loading"])
  }
}
</script>

<style scoped>
.box {
  padding: 30px;
}
</style>
