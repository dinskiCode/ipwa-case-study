<template>
  <div class="emissions-view">
    <div class="dt-wrapper bg-white rounded-lg p-3">
      <DataTable
        :value="tableData"
        paginator
        :rows="10"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        v-model:filters="filters"
        :globalFilterFields="['company_name', 'country']"
      >
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xl font-bold"
              >Emission data by company and country</span
            >
            <InputText
              v-model="filters.global.value"
              placeholder="Search"
              class="px-4 py-2 border border-slate-400"
            />
          </div>
        </template>
        <Column field="company_name" header="Company" sortable />
        <Column field="country" header="Country" sortable>
          <template #body="{ data }">
            <span :class="`fi fi-${data.country_code.toLowerCase()}`"></span>
            <span class="mx-2">{{ data.country }}</span>
          </template>
        </Column>
        <Column field="co2_emissions" header="CO2-Emissions (in t)" sortable />
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import api from "@/api";
import LocalLinksMenu from "@/components/LocalLinksMenu.vue";

// primevue imports
import { DataTable, Column, InputText } from "primevue";
import { onMounted, reactive, ref } from "vue";
import { FilterMatchMode } from "@primevue/core/api";

const isLtr = document.documentElement.dir === "ltrr";

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
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
