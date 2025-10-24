<script lang="ts" setup>
import { ref, toRaw, watch } from 'vue'
import { useData, useRoute } from 'vitepress' // Correct import from VitePress
import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'

const { theme } = useData()
const route = useRoute() // Use VitePress's useRoute

// Create a reactive property for filtered navigation items
const filterdNav = ref([])

// Function to filter navigation items
const filterNavItems = () => {
  if (theme && theme.value && theme.value.nav) {
    const navItems = toRaw(theme.value.nav)
    const path = route.path // Use reactive route path

    filterdNav.value = navItems.filter((element) => {
      return (
        !element.activeMatch ||
        (element.activeMatch === '/hr/functional/' && path === '/') ||
        path.includes(element.activeMatch)
      )
    })
  }
}

// Initial filtering
filterNavItems()

// Watch for route changes and re-filter navigation items

// Function to update the version display
const updateVersionDisplay = () => {
  const versionMatch = route.path.match(/\/(functional|technical)\/(v\d+\.\d+)/);
  const version = versionMatch ? versionMatch[2] : null;

  if (version) {
    const versionElement = document.querySelector('nav [id=activeVersion]');
    if (versionElement) {
      versionElement.innerHTML = version;
    }
  }
};

// Watch for route changes and update navigation and version display
watch(
  () => route.path,
  () => {
    filterNavItems();
    updateVersionDisplay();
  }
);

</script>

<template>
  <nav
    v-if="filterdNav.length"
    aria-labelledby="main-nav-aria-label"
    class="VPNavBarMenu"
  >
    <span id="main-nav-aria-label" class="visually-hidden">
      Main Navigation
    </span>
    <template v-for="item in filterdNav" :key="JSON.stringify(item)">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <component
        v-else-if="'component' in item"
        :is="item.component"
        v-bind="item.props"
      />
      <VPNavBarMenuGroup v-else :item="item" />
    </template>
  </nav>
</template>

<style scoped>
.VPNavBarMenu {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarMenu {
    display: flex;
  }
}
</style>
