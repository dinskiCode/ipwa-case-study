<template>
  <footer class="footer p-5">
    <div class="grid grid-cols-8">
      <div class="copyright col-span-8 sm:col-span-3 mb-5 sm:mb-0">
        <div class="flex justify-center sm:justify-start items-center">
          <img
            src="@/assets/logos/greenfighters-no-text.png"
            class="mr-2"
            alt=""
            srcset=""
          />
          &copy; 2024 Greenfighters
        </div>
      </div>
      <div class="sm:col-span-1 col-span-2">
        <router-link to="/legal/imprint">Imprint</router-link>
      </div>
      <div class="sm:col-span-1 col-span-2">
        <router-link to="/legal/privacy-policy">Privacy Policy</router-link>
      </div>
      <div class="sm:col-span-1 col-span-2">
        <router-link to="/legal/disclaimer">Disclaimer</router-link>
      </div>
      <div class="sm:col-span-1 col-span-2">
        <router-link to="/legal/terms-of-use">Terms of Use</router-link>
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

img {
  width: 35px;
  height: auto;
}
</style>
