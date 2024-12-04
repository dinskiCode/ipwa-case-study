<template>
  <div class="start-view">
    <ul>
      <li
        v-for="[key, value] of Object.entries(imprint)"
        class="text-slate-700"
      >
        <span class="key font-medium">{{ key }}</span
        >: <span>{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const imprint = {
  "Company Name": "Greenfighters e.V.",
  "Represented by": "John Doe",
  Address: "Musterstr. 11",
  "Postal Code, City": "90402 Nürnberg",
  Phone: "9011-1234567891",
  Email: "info@greenfighters.com",
  "VAT ID": "DE123456789",
};
</script>

<style></style>
