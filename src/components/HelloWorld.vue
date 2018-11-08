<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      msg: "Loading patient number one :)"
    };
  },
  mounted: function() {
    var vm = this;
    var searchParam = {
      type: "Patient",
      query: {
        name: "des",
        _sort: "family"
      }
    };
    this.$es
      .smart()
      .api.search(searchParam)
      .then(bundle => {
        vm.msg = bundle.data.entry[0];
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
