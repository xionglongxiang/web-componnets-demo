import { defineComponent, ref, openBlock, createElementBlock, Fragment, createElementVNode, createVNode, unref, withCtx, createTextVNode, defineCustomElement } from "vue";
import { ElInput, ElButton } from "element-plus";
var _style_0 = ":host{--color: #fbbf24;--bg-normal: #fAfAf9;--bg-active: #f5f5f4;--font-size: 24px}button{background-color:var(--bg-normal);border:none;border-radius:.5rem;color:var(--color);cursor:pointer;display:flex;font-size:var(--font-size);overflow:hidden;padding:.4em;transition:background-color .3s ease,color .3s cubic-bezier(.64,0,.78,0)}button:hover,button:focus{background-color:var(--bg-active);outline:none}.slide-enter-active,.slide-leave-active{transition:transform .3s ease-out}.slide-enter-from{transform:translateY(-150%)}.slide-enter-to,.slide-leave-from{transform:translateY(0)}.slide-leave-to{transform:translateY(150%)}\n";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("link", {
  rel: "stylesheet",
  href: "./index.css"
}, null, -1);
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _sfc_main = defineComponent({
  __name: "index.ce",
  setup(__props) {
    const isDark = ref(false);
    const print = () => {
      console.log("print");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => isDark.value = !isDark.value)
        }, [
          _hoisted_1,
          isDark.value ? (openBlock(), createElementBlock("span", _hoisted_2, "\u{1F319}")) : (openBlock(), createElementBlock("span", _hoisted_3, "\u{1F31E}"))
        ]),
        createVNode(unref(ElInput)),
        createVNode(unref(ElButton), {
          type: "primary",
          onClick: print
        }, {
          default: withCtx(() => [
            createTextVNode("\u4E3B\u8981\u6309\u94AE")
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
var VueDarkModeSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
const DarkModeSwitch = defineCustomElement(VueDarkModeSwitch);
function register(tagName = "dark-mode-switch") {
  customElements.define(tagName, DarkModeSwitch);
}
export { DarkModeSwitch, register };
