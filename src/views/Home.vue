<template>
  <div class="home">
    <div class="title-wrapper">
      <h1 class="label-info-sub">Hello Web</h1>
      <div class="label-info-sub">Wazza! I am Miguel Ramos</div>
      <div class="label-info-sub">a full-stack web developer</div>

      <br />
      <div class="label-info-sub">
        I created MigsLab as my professional web app where I can post stuff about
        my career experience, freelance services that I can offer, tips and tricks in web
        development and other productivity tools and also my personal projects.
      </div>
    </div>
    <br />
    <br />
    <div class="align-right actions">
      <button class="button-secondary">see more</button>
      <button class="button-primary">contact now</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.actions button {
  font-size: 1.2rem;
  padding: 0.3em 0.5em;
  margin-top: 10px;
}

.title-wrapper {
  border-left: 4px solid #ffeadb;
  padding-left: 16px;
  padding-bottom: 6px;
}
</style>
