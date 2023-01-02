/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.popup.js";var __meta__={id:"button.menu",name:"ButtonMenu",category:"web",description:"The popup Menu list part of the SplitButton and the DropDownButton",depends:["core","popup"]};!function(e,t){var n=window.kendo,i=n.ui.Widget,s=".kendoButtonMenu",l=n.ui,o=n.keys,a=e.extend,r=".",u="id",d="next",p="k-disabled",c="aria-disabled",m="tabindex",f="click",g="menuClick",k="menuOpen",h="menuClose",_="keydown",b="focus",v="k-menu-popup",y="k-group k-menu-group k-reset",C="k-item k-menu-item",B="k-menu-item",w="k-link k-menu-link",x={text:null,icon:null,url:null,attributes:null,enabled:!0,hidden:!1,id:null,imageUrl:null,spriteCssClass:null},E='#if(imageUrl){#<img alt="icon" class="'+"k-image"+'" src="#:imageUrl#" />#}#',H='#if(spriteCssClass){#<span class="'+"k-sprite"+' #:spriteCssClass#"></span>#}#',P='#if(icon){#<span class="'+"k-icon"+' k-i-#:icon#"></span>#}#',D='#if(text){#<span class="'+"k-menu-link-text"+'">#:text#</span>#}#',T='<span class="'+w+'">'+E+H+P+D+"</span>",I='<a href="#:url#" class="'+w+'">'+E+H+P+D+"</a>";function M(t,n){var i=n===d?e.fn.next:e.fn.prev,s=n===d?e.fn.first:e.fn.last,l=i.call(t),o=":kendoFocusable";return l.length||(l=s.call(t.parent().find(r+B))),l.is(o)||!l.length?l:l.find(o).length?s.call(l.find(o)):M(l,n)}var O=i.extend({init:function(e,t){var n=this;i.fn.init.call(n,e,t),n.mainButton=t.mainButton,n._clickHandlers={},n._renderList(),n._initPopup(),n._attachEvents(),n._applyCssClasses(n.list)},options:{name:"ButtonMenu",element:null,items:[],size:"medium"},events:[g,k,h],_renderList:function(){var t=this,i=t.options.items,s=t.element.addClass(v),l=t.mainButton.attr(u)||n.guid(),o=e('<ul role="menu"></ul>').addClass(y);t.list=o.appendTo(s),t.list.attr(u,l+"_buttonmenu"),i.forEach(t._renderListItem.bind(t))},_renderListItem:function(t){var i,s,l=this;i=(t=a({},x,t,{enabled:t.enable&&t.enabled})).id||n.guid(),s=e('<li id="'+i+'" role="menuitem" class="'+C+'">'+l._renderItemButton(t)+"</li>"),t.click&&(l._clickHandlers[i]=t.click),t.attributes&&s.attr(t.attributes),t.data&&n.isFunction(t.data)&&s.data(t.data(t)),l.list.append(s),l.enable(t.enabled,s),l._hide(t.hidden,s)},_renderItemButton:function(e){var t=this.options;return t.itemTemplate?n.template(t.itemTemplate)(e):e.url?n.template(I)(e):n.template(T)(e)},_initPopup:function(){var e=this,t=e.options;e._popup=new l.Popup(e.element,a({},t.popup,{anchor:e.mainButton,isRtl:e._isRtl,toggleTarget:t.toggleTarget,copyAnchorStyles:!1,animation:t.animation,open:e._popupOpenHandler.bind(e),close:e._popupCloseHandler.bind(e),activate:e._popupExpandHandler.bind(e)}))},_popupOpenHandler:function(e){this.trigger(k)?e.preventDefault():this.list.find(r+B).attr(m,0)},_popupCloseHandler:function(e){this.trigger(h)&&e.preventDefault(),this.list.find(r+B).attr(m,-1)},_popupExpandHandler:function(){this.list.find(":kendoFocusable").first().trigger(b)},adjustPopupWidth:function(e){this.element.addClass("k-split-wrapper"),this.element.css({"min-width":e})},_attachEvents:function(){var e=this;e.list.on(f+s,r+B,e._click.bind(e)).on(_+s,r+B,e.listItemKeydown.bind(e)),e.mainButton.on(_+s,e._keydown.bind(e))},_keydown:function(t){if(!e(t.target).is(".k-disabled")&&!e(t.target).parents(".k-disabled").length)return t.altKey&&t.keyCode===o.DOWN?(this._popup.open(),void t.preventDefault()):void 0},listItemKeydown:function(t){var n=this,i=e(t.target);t.preventDefault(),t.keyCode===o.ESC||t.keyCode===o.TAB||t.altKey&&t.keyCode===o.UP?(n._popup.close(),n.mainButton.trigger(b)):t.keyCode===o.DOWN?M(i,d).trigger(b):t.keyCode===o.UP?M(i,"prev").trigger(b):i.is(".k-disabled")||t.keyCode!==o.SPACEBAR&&t.keyCode!==o.ENTER?t.keyCode===o.HOME?n.list.find(":kendoFocusable").filter(r+B).first().trigger(b):t.keyCode===o.END&&n.list.find(":kendoFocusable").filter(r+B).last().trigger(b):i.trigger(f)},_click:function(t){var n=this,i=e(t.target).closest(r+B),s=i.attr(u);n._clickHandlers[s]&&n._clickHandlers[s](t),n.trigger(g,{id:s,target:i,type:"menu-click",originalEvent:t})},toggle:function(){this._popup.toggle()},enable:function(e,t){(t=t&&t.length?this.list.find(t):this.items()).toggleClass(p,!e),e?t.removeAttr(c):t.attr(c,!e)},_hide:function(e,t){(t=t&&t.length?this.list.find(t):this.items()).toggleClass("k-hidden",e)},hide:function(e){this._hide(!0,e)},show:function(e){this._hide(!1,e)},close:function(){this._popup.close()},items:function(){return this.list.children(r+B)},destroyPopup:function(){var e=this;e._popup&&(e._popup.destroy(),e._popup=null,e.list.off(s),e.list.remove(),e.list=null)},destroy:function(){var e=this;delete e._clickHandlers,e.destroyPopup(),e.mainButton.off(s),i.fn.destroy.call(e)}});n.cssProperties.registerPrefix("ButtonMenu","k-menu-group-"),l.plugin(O)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.button.menu.js.map