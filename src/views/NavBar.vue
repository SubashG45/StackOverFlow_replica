<template>
  <div class="bg-light" id="navbar">
    <div class="row mx-auto">
      <div class="col-md-3">
        <div class="d-flex text-center px-4">
          <div class="d-flex logo px-2 text-center pt-2">
            <img src="../img/logo.png" alt="Logo" style="height: 30px" />
            <p style="padding: 5px 0px 0px 5px">Stack</p>
            <span style="padding: 5px 5px 0px 0px"
              ><strong>OverFlow</strong></span
            >
          </div>
          <a href="" class="text-center">Product</a>
        </div>
      </div>
      <div class="col-md-6 py-2">
        <form class="header_search d-flex item-center">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search.." />
        </form>
      </div>
      <div class="col-md-3">
        <fa icon="user"  />
        <fa icon="inbox"  />
        <fa icon="trophy"  />
        <fa icon="circle-question"  />
        <fa :icon="['fab','stack-exchange']"  />
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#navbar {
  border-top: 3px solid #f59547;
  position: fixed;
  top:0;
  width: 100%;
}
a {
  text-decoration: none;
  color: #6f757b;
  padding-top: 15px;
  padding-left: 10px;
  font-size: 13px;
}
.logo {
  transition: 0.5s ease-out;
}
.logo:hover {
  background: lightgrey;
  transition: 0.5s ease-out;
}
.header_search {
  background: white;
  height: 100%;
  width: 100%;
  border: 0.5px solid #6f757b;
  border-radius: 3px;
}
.header_search:focus {
  border: 1px solid blue;
}
.header_search input {
  border: none;
  height: 100%;
  width: 100%;
}
.header_search input:focus {
  outline: none;
}
.header_search svg {
  padding-left: -10px;
}
img {
  height: 20px;
}
svg{
  justify-content: center;
  padding: 15px 20px;
}
</style>
