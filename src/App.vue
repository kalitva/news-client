<script setup>
import TopBar from '../src/components/TopBar.vue'
import CategoriesMenu from '../src/components/CategoriesMenu.vue'
import ExchangeRate from '../src/components/ExchangeRate.vue'
import SideBarFeed from '../src/components/SideBarFeed.vue'
import ScrollableColumn from '../src/components/ScrollableColumn.vue'
import ErrorAlert from '../src/components/ErrorAlert.vue'
import { ComponentId } from '../src/config/components'
</script>

<template>
  <top-bar />
  <div class="content">
    <error-alert />
    <categories-menu />
    <scrollable-column :watchScrollToBottom="true" :id="ComponentId.ARTICLE_LIST">
      <router-view />
    </scrollable-column>
    <scrollable-column :watchScrollToBottom="true" :id="ComponentId.SIDE_BAR_FEED">
      <exchange-rate />
      <side-bar-feed />
    </scrollable-column>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 0.5fr 3.3fr 1.5fr;
  max-width: 150rem;
  margin: 0 auto;
}
</style>
