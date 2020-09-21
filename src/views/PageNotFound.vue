<template>
  <div class="error-wrapper label-info-sub">
    <div>
      <fa-icon class="icon" icon="skull-crossbones" />
    </div>
    <div class="label">page not found</div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <span>are you lost?</span>
    <br />
    <br />
    <a class="button-primary" href="/home">warp back to home</a>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.error-wrapper {
  text-align: center;
  margin-top: 5rem;
}

.error-wrapper .icon {
  font-size: 5rem;
}
.error-wrapper .label {
  font-size: 2rem;
  letter-spacing: 8px;
  font-weight: 400;
}
a {
  padding: 0.4em 0.8em;
}
</style>