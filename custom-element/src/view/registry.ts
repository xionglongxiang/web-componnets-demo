import { defineCustomElement } from "vue";
import VueCustomPlugin from "./index.vue";
import { eventCenter } from "./eventCenter";
export const CustomPlugin = defineCustomElement(VueCustomPlugin);

class MyPlugin extends CustomPlugin {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    console.log("connectedCallback");
  }
}

let registryEventCenter = () => {
  let win: any = window;
  if (!win?.Plugins) {
    win.Plugins = {
      CustomPlugin: {
        eventCenter,
      },
    };
  } else if (win?.Plugins) {
    win.Plugins = {
      ...win.Plugins,
      CustomPlugin: {
        eventCenter,
      },
    };
  }
};


export function registry(tagName = "custom-plugin") {
  customElements.define(tagName, MyPlugin);
  registryEventCenter();
}

