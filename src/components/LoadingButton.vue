<template>
    <a v-if="loading" href="#" class="disabled">
        <font-awesome-icon icon="cog" spin />
    </a>
    <a v-else class="enabled-btn" href="#" @click.prevent="click(params)">
        <slot />
    </a>
</template>

<script>
export default {
  name: 'LoadingButton',
  props: {
    click: Function,
    loading: Boolean,
    params: String
  },
}
</script>