<template>
  <div class="main-layout">
    <div class="header">header</div>

    <div>
      <slot />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MainLayout",
};
</script>
