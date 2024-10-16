<template>
  <component :is="'button'" class="rounded px-4 py-2 font-bold" :class="buttonClasses" type="button" @click="click"
    :disabled="loading || disabled" :active="active ? true : null">
    <div class="flex flex-row items-center gap-2 justify-center" v-show="!loading">
      <slot></slot>
    </div>

    <span color="text-white" v-if="loading">
      <loading-indicator class="h-6 w-6"></loading-indicator>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import LoadingIndicator from './LoadingIndicator.vue';

// Props
const props = defineProps({
  type: {
    type: String,
    validator: (value) => ['primary', 'positive', 'negative', 'default'].includes(value),
    default: 'default',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: Array,
    default: () => [],
  },
  active: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
  },
  target: {
    type: String,
  },
});

const emit = defineEmits(['click']);

// Computed properties
const colors = computed(() => {
  switch (props.type) {
    case 'primary':
      return {
        disabled: 'bg-blue-500',
        base: 'bg-blue-800',
        hover: 'hover:bg-blue-700',
        active: 'bg-blue-900',
      };
    case 'positive':
      return {
        disabled: 'bg-green-500',
        base: 'bg-green-800',
        hover: 'hover:bg-green-700',
        active: 'bg-green-900',
      };
    case 'negative':
      return {
        disabled: 'bg-red-500',
        base: 'bg-red-800',
        hover: 'hover:bg-red-700',
        active: 'bg-red-900',
      };
    default:
      return {
        disabled: 'bg-gray-500',
        base: 'bg-gray-900',
        hover: 'hover:bg-gray-700',
        active: 'bg-gray-900',
      };
  }
});

const buttonClasses = computed(() => {
  let base = ['text-white', ...props.classes];

  if (props.loading || props.disabled) {
    base.push(colors.value.disabled);
    if (props.loading) {
      base.push('cursor-wait');
    }
    if (props.disabled) {
      base.push('cursor-default');
    }
  } else if (props.active) {
    base.push(colors.value.active);
    base.push('shadow-inner');
  } else {
    base.push(colors.value.base);
    base.push(colors.value.hover);
    base.push('transition-all hover:shadow-lg');
  }
  return base;
});

// Methods
const click = (e) => {
  if (props.href && props.target) {
    window.open(props.href, props.target);
  } else if (props.href) {
    window.location.href = props.href;
  } else {
    emit('click', e);
  }
};
</script>
