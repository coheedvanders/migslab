<template>
   <div>
      <h2 class="align-center label-info">Freelance Services</h2>
      <br />
      <br />
      <div class="row">
         <div class="col-sm-3 col-lg-3 align-center">
            <div class="icon-wrapper">
               <fa-icon class="icon" icon="pen-nib"></fa-icon>
            </div>
            <div class="title">consulting</div>
         </div>
         <div class="col-sm-3 col-lg-3 align-center">
            <div class="icon-wrapper">
               <fa-icon class="icon" icon="globe-asia"></fa-icon>
            </div>
            <div class="title">web app development</div>
         </div>
         <div class="col-sm-3 col-lg-3 align-center">
            <div class="icon-wrapper">
               <fa-icon class="icon" icon="globe"></fa-icon>
            </div>
            <div class="title">website development</div>
         </div>
         <div class="col-sm-3 col-lg-3 align-center">
            <div class="icon-wrapper">
               <fa-icon class="icon" icon="file-signature" style="margin-left:10px;"></fa-icon>
            </div>
            <div class="title">project management</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Services",
};
</script>

<style scoped>
.icon-wrapper {
   width: 5rem;
   height: 5rem;
   border: 1px solid #ffeadb;
   border-radius: 50%;
   margin: 0;
   display: inline-block;
}

.icon-wrapper .icon {
   font-size: 2.5rem;
   margin-top: 1.3rem;
   color: #ffeadb;
}

.title {
   color: white;
   font-size: 1rem;
   font-weight: 400;
}
</style>