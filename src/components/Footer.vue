<template>
  <footer class="footer">
    <div class="grid grid-cols-8">
      <div class="copyright col-span-8 sm:col-span-3 mb-5 sm:mb-0">
        <div class="flex justify-center sm:justify-start items-center">
          <img
            src="@/assets/logos/greenfighters-white.svg"
            class="mr-2"
            alt=""
            srcset=""
          />
          &copy; 2024 Greenfighters e.V.
        </div>
      </div>
      <div class="sm:col-span-1 col-span-2 flex items-center">
        <router-link to="/legal/imprint" class="hover:underline"
          >Imprint</router-link
        >
      </div>
      <div class="sm:col-span-1 col-span-2 flex items-center">
        <router-link to="/legal/privacy-policy" class="hover:underline"
          >Privacy Policy</router-link
        >
      </div>
      <div class="sm:col-span-1 col-span-2 flex items-center">
        <router-link to="/legal/disclaimer" class="hover:underline"
          >Disclaimer</router-link
        >
      </div>
      <div class="sm:col-span-1 col-span-2 flex items-center">
        <router-link to="/legal/terms-of-use" class="hover:underline"
          >Terms of Use</router-link
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--p-slate-900);
  color: var(--p-slate-200);
  text-align: center;
  flex-shrink: 0;
  width: 100%;
}

.router-link-active {
  text-decoration: underline;
}

img {
  width: 65px;
  height: auto;
}
</style>
