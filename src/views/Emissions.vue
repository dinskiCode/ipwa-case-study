<template>
  <div class="emissions-view p-3 rounded-lg bg-white">
    <DataTable
      :value="tableData"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="Zeige {first} bis {last} von insgesamt {totalRecords}"
      :globalFilter="filters.contains"
    >
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold"
            >Emissionsdaten nach Unternehmen und Land</span
          >
          <InputText
            v-model="filters.contains.value"
            placeholder="Tabelle durchsuchen"
            class="px-4 py-2 border border-slate-400"
          />
        </div>
      </template>
      <Column field="company_name" header="Unternehmen" sortable></Column>
      <Column field="country" header="Land" sortable></Column>
      <Column field="co2_emissions" header="CO2-Emissionen" sortable></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { DataTable, Column, InputText } from "primevue";
import Button from "primevue/button";
import api from "@/api";
import { onMounted, reactive, ref } from "vue";
import { FilterMatchMode } from "@primevue/core/api";

const filters = ref({
  contains: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const tableData = ref([]);

const state = reactive({
  loading: false,
});

onMounted(async () => {
  try {
    state.loading = true;
    const response = await api.getEmissionsData();
    if (response) {
      const emissionsData = await response.json();
      tableData.value = emissionsData.data;
    }
    state.loading = false;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style></style>
