<template>
  <div id="main">
    <div class="row mx-auto">
      <div class="col-md-2 px-0">
        <div class="sidebar">
            <p>Home</p>s
        </div>
        
      </div>
      <div class="col-md-10">
        <div class="main">
          <div class="row">
            <div class="col-md-9">
              <div class="left">
               
                <p>hycgb</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainVue",
};
</script>

<style>
#main{
    margin-top: 55px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  float: left;
  height: 100%;
  width: 100%;
  /* background: black; */
}
.sidebar a {
  float: left;
}
.main {
  height: 500px;
  width: 100%;
  /* background: aqua; */
}
.left {
  height: 100%;
  width: 100%;
  /* background: red; */
  /* border: 1px solid black; */
}
.right {
  height: 500px;
  width: 100%;
  /* background: blue; */
  /* border: 1px solid black; */
}
</style>
