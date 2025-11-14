<script lang="ts" setup>
import { ref, toRaw, watch, computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'

const { theme } = useData()
const route = useRoute()

// reactive filtered nav
const filterdNav = ref<any[]>([])

// Function to filter navigation items (same logic you had)
const filterNavItems = () => {
  if (theme && theme.value && theme.value.nav) {
    const navItems = toRaw(theme.value.nav) as any[]
    const path = route.path

    filterdNav.value = navItems.filter((element) => {
      return (
        !element.activeMatch ||
        (element.activeMatch === '/hr/functional/' && path === '/') ||
        path.includes(element.activeMatch)
      )
    })
  } else {
    filterdNav.value = []
  }
}

// initial
filterNavItems()

// update version display (your existing function)
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

// Re-filter and update on route change
watch(
  () => route.path,
  () => {
    filterNavItems();
    updateVersionDisplay();
  }
);

/**
 * getDisplayItem
 * - clones the nav item
 * - if it has items (dropdown), tries to find a child whose link matches the current route.path
 * - if found, sets the returned item's text to that child's text (dynamic label)
 * - preserves the original item when no match
 */
function getDisplayItem(item: any) {
  // shallow clone via structuredClone when available, fallback to JSON clone
  let clone: any
  try {
    // @ts-ignore - structuredClone available in some browsers
    clone = structuredClone ? structuredClone(item) : JSON.parse(JSON.stringify(item))
  } catch {
    clone = JSON.parse(JSON.stringify(item))
  }

  if (!clone || !Array.isArray(clone.items)) return clone

  const path = route.path

  // find first matching child by link or by prefix
  const match = clone.items.find((sub: any) => {
    if (!sub || !sub.link) return false
    // normalize: ensure both end with slash for prefix compare OR do exact startWith
    try {
      // prefer exact startsWith since VitePress paths typically prefix
      return path.startsWith(sub.link)
    } catch {
      return false
    }
  })

  if (match && match.text) {
    clone.text = match.text
  }

  return clone
}
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

    <template v-for="item in filterdNav" :key="(item.text || '') + (item.link || '')">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <component
        v-else-if="'component' in item"
        :is="item.component"
        v-bind="item.props"
      />
      <!-- Pass the possibly-modified clone to the group so its label updates -->
      <VPNavBarMenuGroup v-else :item="getDisplayItem(item)" />
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
