"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e=require("vue"),t=require("element-plus"),o=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o};const r=e.createElementVNode("link",{rel:"stylesheet",href:"./index.css"},null,-1),n={key:0},l={key:1};var a=o(e.defineComponent({__name:"index.ce",setup(o){const a=e.ref(!1),s=()=>{console.log("print")};return(o,c)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("button",{onClick:c[0]||(c[0]=e=>a.value=!a.value)},[r,a.value?(e.openBlock(),e.createElementBlock("span",n,"🌙")):(e.openBlock(),e.createElementBlock("span",l,"🌞"))]),e.createVNode(e.unref(t.ElInput)),e.createVNode(e.unref(t.ElButton),{type:"primary",onClick:s},{default:e.withCtx((()=>[e.createTextVNode("主要按钮")])),_:1})],64))}}),[["styles",[":host{--color: #fbbf24;--bg-normal: #fAfAf9;--bg-active: #f5f5f4;--font-size: 24px}button{background-color:var(--bg-normal);border:none;border-radius:.5rem;color:var(--color);cursor:pointer;display:flex;font-size:var(--font-size);overflow:hidden;padding:.4em;transition:background-color .3s ease,color .3s cubic-bezier(.64,0,.78,0)}button:hover,button:focus{background-color:var(--bg-active);outline:none}.slide-enter-active,.slide-leave-active{transition:transform .3s ease-out}.slide-enter-from{transform:translateY(-150%)}.slide-enter-to,.slide-leave-from{transform:translateY(0)}.slide-leave-to{transform:translateY(150%)}\n"]]]);const s=e.defineCustomElement(a);exports.DarkModeSwitch=s,exports.register=function(e="dark-mode-switch"){customElements.define(e,s)};