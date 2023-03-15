/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";!function(){window.kendo.util=window.kendo.util||{},window.kendo.util.ripple=window.kendo.util.ripple||{};var e=function(e,t,n){var i=function(){n(),e.removeEventListener(t,i,!1)},o=function(){return e.addEventListener(t,i,!1)};return o(),{remove:o}},t=function(t,o){return function(r){var s,a=r.target,c=a.document||a.ownerDocument;if((s=o.container?o.container(a):function(e,t){if(e.closest)return e.closest(t);for(var n=Element.prototype.matches?function(e,t){return e.matches(t)}:function(e,t){return e.msMatchesSelector(t)},i=e;i;){if(n(i,t))return i;i=i.parentElement}}(a,t))&&!(/focus/i.test(r.type)&&s.classList.contains("k-ripple-target")))if(a.classList.contains("k-checkbox")||a.classList.contains("k-radio"))r.target.classList.remove("k-ripple-focus"),"animationend"!==r.type&&r.target.classList.add("k-ripple-focus");else{s.classList.add("k-ripple-target");var l=function(e){var t=e.createElement("div");t.className="k-ripple";var n=e.createElement("div");return n.className="k-ripple-blob",t.appendChild(n),[t,n]}(c),u=l[0],p=l[1],d={animated:!1,released:!1,blob:p,container:s,ripple:u},f={focusin:"focusout",keydown:"keyup",mousedown:"mouseup",pointerdown:"pointerup",touchdown:"touchup",animationstart:"animationend"}[r.type];e(r.currentTarget,f,(function(){return i(d)})),s.appendChild(u),window.getComputedStyle(u).getPropertyValue("opacity");var m=s.getBoundingClientRect(),v=0,h=0;/mouse|pointer|touch/.test(r.type)?(v=r.clientX-m.left,h=r.clientY-m.top):(v=m.width/2,h=m.height/2);var k=v-(v<m.width/2?m.width:0),w=h-(h<m.height/2?m.height:0),g=2*Math.sqrt(k*k+w*w);if(p.style.width=p.style.height=g+"px",p.offsetWidth<0)throw new Error("Inconceivable!");p.style.cssText="\n        width: "+g+"px;\n        height: "+g+"px;\n        transform: translate(-50%, -50%) scale(1);\n        left: "+v+"px;\n        top: "+h+"px;\n    ",setTimeout((function(){return n(d)}),500)}}},n=function(e){e.animated=!0,o(e)},i=function(e){e.released=!0,o(e)},o=function(t){if(t.released&&t.animated){var n=t.blob,i=t.ripple,o=t.container;o&&e(o,"blur",(function(){return o.classList.remove("k-ripple-target")})),n&&(e(n,"transitionend",(function(){i&&i.parentNode&&i.parentNode.removeChild(i)})),n.style.transition="opacity 200ms linear",n.style.opacity="0")}};kendo.deepExtend(kendo.util.ripple,{register:function(e,n){var i,o=(i=n.map((function(n){var i={events:["mousedown","touchdown"],global:!1},o=n.selector,r=n.options,s=void 0===r?i:r,a=t(o,s),c=s.events||i.events,l=s.global?document.body:e;return c.forEach((function(e){return l.addEventListener(e,a,!1)})),{events:c,options:s,activator:a}})),[].concat.apply([],i));return function(){if(e){o.forEach((function(t){var n=t.events,i=t.options,o=t.activator,r=i.global?document.body:e;n.forEach((function(e){return r.removeEventListener(e,o,!1)}))})),e=null}}}})}();var __meta__={id:"ripplecontainer",name:"RippleContainer",category:"web",depends:["core"]};!function(e,t){var n=window.kendo,i=n.ui,o=i.Widget,r=e.extend,s=n.util.ripple,a=o.extend({init:function(e,t){var n=this;o.fn.init.call(n,e),e=n.wrapper=n.element,n.options=r({},n.options,t),n.registerListeners()},options:{name:"RippleContainer",elements:[{selector:".k-button:not(li)"},{selector:".k-list > .k-item",options:{global:!0}},{selector:".k-checkbox-label, .k-radio-label"},{selector:".k-checkbox, .k-radio",options:{events:["focusin"],container:function(e){if(/\b(k-checkbox|k-radio)\b/.test(e.className))return e.nextElementSibling}}}]},removeListeners:function(){},registerListeners:function(){var e=this,t=e.element[0],n=e.options.elements;e.removeListeners();var i=s.register(t,n);e.removeListeners=i},destroy:function(){o.fn.destroy.call(this),this.removeListeners()}});i.plugin(a)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.ripple.js.map
