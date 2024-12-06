<template>
  <div class="start-view">
    <div class="grid grid-cols-4">
      <div class="hidden sm:flex sm:col-span-2 flex justify-center border-r-2">
        <img src="@/assets/logos/greenfighters.svg" alt="" />
      </div>
      <div class="col-span-4 sm:col-span-2 p-8 text-slate-700 flex flex-col">
        <div class="quote-container">
          <p class="italic quote md:text-lg lg:text-xl xl:text-2xl">
            "Our Environment is hurting and climate change can only be stopped
            if we fight it together! At Greenfighters e.V. it is our mission to
            inform you about the state of our beloved mother earth and to create
            a sense of urgency in everyone, so that YOU can't help but enlist
            yourself in the fight for a greener and better future. For yourself
            and our future generation."
          </p>
          <p class="text-slate-500 mt-1">John Doe - Founder</p>
        </div>
        <div class="flex sm:hidden">
          <img src="@/assets/logos/greenfighters.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  width: 100%;
  height: auto;
  max-width: 600px;
}
</style>
