import { defineCustomElement } from 'vue';

import VueDarkModeSwitch from './index.ce.vue';

// 使用 defineCustomElement 的回调来定义自定义元素
export const DarkModeSwitch = defineCustomElement(VueDarkModeSwitch);

// Register the custom element so that it can be used as <dark-mode-switch>.
export function register (tagName = 'dark-mode-switch') {
  customElements.define(tagName, DarkModeSwitch)
}
