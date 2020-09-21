<template>
   <div class="topnav" id="header" ref="header">
      <a href="javascript:void(0);" @click="goTo('/')">
         <fa-icon icon="flask" />&nbsp;&nbsp;MigsLab ~
      </a>
      <a href="javascript:void(0);" @click="goTo('/home')">home</a>
      <a href="javascript:void(0);" @click="goTo('/about')">about</a>
      <a href="javascript:void(0);" @click="goTo('/services')">services</a>
      <a href="javascript:void(0);" @click="goTo('/postboard')">postboard</a>
      <a href="javascript:void(0);" class="icon" @click="toggleMenu">
         <fa-icon icon="bars" />
      </a>
   </div>
</template>

<script>
export default {
   name: "Header",

   data() {
      return {
         isHidden: false,
      };
   },
   methods: {
      toggleMenu() {
         var topnav = this.$refs.header;
         if (
            topnav.classList.contains("topnav") &&
            !topnav.classList.contains("responsive")
         ) {
            topnav.classList.value = ["topnav responsive"];
         } else {
            topnav.classList.value = ["topnav"];
         }
      },
      goTo(routePath) {
         this.$router.push({ path: routePath });
      },
   },
};
</script>

<style scoped>
.icon-wrapper {
   float: left;
}
.menu-wrapper {
   float: right;
}

.topnav {
   overflow: hidden;
   background-color: #333;
}

.topnav a {
   float: left;
   display: block;
   color: #f2f2f2;
   text-align: center;
   padding: 14px 16px;
   text-decoration: none;
   font-size: 15px;
   letter-spacing: 1px;
   font-weight: 300;
}

.topnav a:hover {
   background-color: #ddd;
   color: black;
}

.topnav a.active {
   background-color: #ffdfd4;
   color: #ddd;
}

.topnav .icon {
   display: none;
}

@media screen and (max-width: 600px) {
   .topnav a:not(:first-child) {
      display: none;
   }
   .topnav a.icon {
      float: right;
      display: block;
   }
}

@media screen and (max-width: 600px) {
   .topnav.responsive {
      position: relative;
   }
   .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
   }
   .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
   }
}
</style>