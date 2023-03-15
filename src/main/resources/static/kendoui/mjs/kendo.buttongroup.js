/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.togglebutton.js";import"./kendo.button.js";var __meta__={id:"buttongroup",name:"ButtonGroup",category:"web",description:"The Kendo ButtonGroup widget is a linear set of grouped buttons.",depends:["core","togglebutton","button"]};!function(e,t){var n=window.kendo,o=n.ui,s=o.Widget,i=o.ToggleButton,d=o.Button,l=n.keys,r=".kendoButtonGroup",a="k-selected",u="k-disabled",c="select",g="aria-disabled",h=".",f="none",b="single",p="multiple",m="focus",_=s.extend({init:function(e,t){var n=this;s.fn.init.call(n,e,t),n.wrapper=n.element,n._buttons=n._renderItems(n.options.items),n.selectedIndices=[],n.element.addClass("k-widget k-button-group").attr("role","group"),n._enable=!0,n.options.enable&&n.options.enabled||(n._enable=!1,n.element.attr(g,!0).addClass(u),n._buttons.forEach((e=>{e.enable(!1)}))),n.options.selection!==f&&n.select(n.options.index),n._attachEvents()},events:[c],options:{name:"ButtonGroup",selection:b,index:-1,enable:!0,enabled:!0,preventKeyNav:!1},badge:function(e,t){var o,s,i=this.element,d=isNaN(e)?i.find(e).getKendoToggleButton()||i.find(e).getKendoButton():this._buttons[e],l=t||0===t;if(d){if(!(o=d.badge)&&l)return d._badge({text:n.htmlEncode(t)}),n.htmlEncode(t);if(l)o.text(n.htmlEncode(t));else if(!1===t)return d.badge=null,s=o.element,o.destroy(),void s.empty().remove();return o?o.text():null}},current:function(){return this.element.find(h+a)},destroy:function(){var t=this;t.element.off(r),t.element.find(".k-button").each((function(t,n){var o=e(n).getKendoToggleButton()||e(n).getKendoButton();o&&o.destroy()})),s.fn.destroy.call(t)},enable:function(e){void 0===e&&(e=!0),this.element.attr(g,!e).toggleClass(u,!e),this._buttons.forEach((t=>{var n=t.element.hasClass("k-focus")||t.element.is(":focus");t.enable(e),n&&t.element.removeAttr("disabled").addClass("k-focus").trigger("focus")})),this._enable=this.options.enable=e},select:function(t){var n=this,o=-1;this.options.selection!==f&&undefined!==t&&-1!==t&&(o="number"==typeof t?t:t.nodeType?(t=e(t)).index():t.index(),n._buttons[o]&&(n.options.selection===p?t.length>1?t.each(((t,o)=>{var s=e(o).index();n._buttons[s].toggle(),n._toggleIndex(s)})):(n._buttons[o].toggle(),n._toggleIndex(o)):n._resetIndexes(o)))},_addButton:function(e,t){if(this.options.selection===f)return delete t.selected,new d(e,t);var n=new i(e,t);return n.bind("toggle",this._select.bind(this,e)),n},_attachEvents:function(){this.options.preventKeyNav||this.element.on("keydown"+r,this._keyDown.bind(this))},_keyDown:function(t){var o=e(this.element),s=o.find(".k-button"),i=o.find(":focus"),d=s.index(i),r=n.support.isRtl(this.element);t.keyCode===l.LEFT&&!r||t.keyCode===l.RIGHT&&r?((0===d?s.eq(s.length-1):e(s[d-1])).trigger(m),t.preventDefault()):(t.keyCode===l.LEFT&&r||t.keyCode===l.RIGHT&&!r)&&((d+1===s.length?s.eq(0):e(s[d+1])).trigger(m),t.preventDefault())},_renderItems:function(t){var o=this,s=o.element.children(),i=[];return s.length>0&&s.each((function(){var t=e(this),s=t.find("img").addClass("k-image"),d=t.is("[disabled]")||t.hasClass(u),l={badge:n.attrValue(t,"badge"),icon:s[0]?null:n.attrValue(t,"icon"),disabled:d,selected:!d&&t.is(h+a)};i.push(o._addButton(t,l))})),t?(t.forEach((function(t){var s=t.text?!1===t.encoded?t.text:n.htmlEncode(t.text):"",d=t.url?e("<a href="+t.url+">"):e("<button>");d.text(s),t.attributes&&d.attr(t.attributes),d.appendTo(o.element),i.push(o._addButton(d,t))})),i):i},_resetIndexes:function(e){this.selectedIndices=[],this._buttons.forEach((e=>{e.toggle(!1)})),this._buttons[e].toggle(!0),this.selectedIndices.push(e)},_select:function(e){var t=this.options.selection,n=e.index();this._enable&&!e.is(h+u)&&(t===p?this._toggleIndex(n):t===b&&this._resetIndexes(n),this.trigger(c,{indices:this.selectedIndices,target:e}))},_toggleIndex:function(e){-1===this.selectedIndices.indexOf(e)?this.selectedIndices.push(e):this.selectedIndices.splice(this.selectedIndices.indexOf(e),1)}});o.plugin(_)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.buttongroup.js.map
