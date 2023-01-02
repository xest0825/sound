/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.popup.js";var __meta__={id:"notification",name:"Notification",category:"web",description:"The Notification widget displays user alerts.",depends:["core","popup"],features:[{id:"notification-fx",name:"Animation",description:"Support for animation",depends:["fx"]}]};!function(t,i){var e=window.kendo,o=e.ui.Widget,n=t.extend,a=window.setTimeout,s="click",p="show",d="hide",c=".k-notification-wrap .k-i-close",l="k-hiding",r="info",u="top",f="left",h="right",g=".kendoNotification",m='<div class="k-notification-wrap"><span class="k-icon k-i-#:typeIcon#" title="#:typeIcon#"></span><div class="k-notification-content">#=content#</div><span aria-hidden="true" class="#: closeButton ? "" : "k-hidden"# k-icon k-i-close" title="Hide"></span></div>',_=m.replace("#=content#","#:content#"),k=o.extend({init:function(i,n){var a=this;o.fn.init.call(a,i,n),(n=a.options).appendTo&&t(n.appendTo).is(i)||a.element.hide(),a._compileTemplates(n.templates),a._guid="_"+e.guid(),a._isRtl=e.support.isRtl(i),a._compileStacking(n.stacking,n.position.top,n.position.left),e.notify(a)},events:[p,d],options:{name:"Notification",position:{pinned:!0,top:null,left:null,bottom:20,right:20},stacking:"default",hideOnClick:!0,button:!1,allowHideAfter:0,autoHideAfter:5e3,appendTo:null,width:null,height:null,templates:[],title:null,animation:{open:{effects:"fade:in",duration:300},close:{effects:"fade:out",duration:600,hide:!0}}},_compileTemplates:function(i){var o=this,n=e.template;o._compiled={},t.each(i,(function(i,e){o._compiled[e.type]=n(e.template||t("#"+e.templateId).html())})),o._defaultCompiled=n(m),o._safeCompiled=n(_)},_getCompiled:function(t,i){var e=i?this._safeCompiled:this._defaultCompiled;return t&&this._compiled[t]||e},_compileStacking:function(t,i,e){var o,n,a=this,s={paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},p=null!==e?f:h;switch(t){case"down":o="bottom "+p,n="top "+p,delete s.paddingBottom;break;case h:o="top right",n="top left",delete s.paddingRight;break;case f:o="top left",n="top right",delete s.paddingLeft;break;case"up":o="top "+p,n="bottom "+p,delete s.paddingTop;break;default:null!==i?(o="bottom "+p,n="top "+p,delete s.paddingBottom):(o="top "+p,n="bottom "+p,delete s.paddingTop)}a._popupOrigin=o,a._popupPosition=n,a._popupPaddings=s},_attachPopupEvents:function(t,i){var e,o=this,n=t.allowHideAfter,p=!isNaN(n)&&n>0;function d(t){t.on(s+g,(function(){o._hidePopup(i)}))}t.hideOnClick?i.bind("activate",(function(){p?a((function(){d(i.element)}),n):d(i.element)})):t.button&&(e=i.element.find(c),p?a((function(){d(e)}),n):d(e))},_showPopup:function(i,o){var s,p,d=this,l=o.autoHideAfter,r=o.position.left,u=o.position.top;p=t("."+d._guid+":not(."+"k-hiding)").last(),s=new e.ui.Popup(i,{anchor:p[0]?p:document.body,origin:d._popupOrigin,position:d._popupPosition,animation:o.animation,copyAnchorStyles:!1,modal:!0,collision:"",isRtl:d._isRtl,close:function(){d._triggerHide(this.element)},deactivate:function(t){t.sender.element.off(g),t.sender.element.find(c).off(g),t.sender.destroy()}}),d._attachPopupEvents(o,s),i.removeClass("k-group k-reset"),p[0]?s.open():(null===r&&(r=t(window).width()-i.outerWidth()-o.position.right),null===u&&(u=t(window).height()-i.outerHeight()-o.position.bottom),s.open(r,u)),s.wrapper.addClass(d._guid).css(n({margin:0,zIndex:10050},d._popupPaddings)),o.position.pinned?(s.wrapper.css("position","fixed"),p[0]&&d._togglePin(s.wrapper,!0)):p[0]||d._togglePin(s.wrapper,!1),l>0&&a((function(){d._hidePopup(s)}),l)},_hidePopup:function(t){t.wrapper.addClass(l),t.close()},_togglePin:function(i,e){var o=t(window),n=e?-1:1;i.css({top:parseInt(i.css(u),10)+n*o.scrollTop(),left:parseInt(i.css(f),10)+n*o.scrollLeft()})},_attachStaticEvents:function(t,i){var e=this,o=t.allowHideAfter,n=!isNaN(o)&&o>0;function p(t){t.on(s+g,e._hideStatic.bind(e,i))}t.hideOnClick?n?a((function(){p(i)}),o):p(i):t.button&&(n?a((function(){p(i.find(c))}),o):p(i.find(c)))},_showStatic:function(i,o){var n=this,s=o.autoHideAfter,p=o.animation,d="up"==o.stacking||o.stacking==f?"prependTo":"appendTo";n._hideTimeouts||(n._hideTimeouts=[]),i.removeClass("k-popup").addClass(n._guid)[d](o.appendTo).hide().kendoAnimate(p.open||!1),n.getNotifications().each((function(i,p){n._attachStaticEvents(o,t(p)),s>0&&!t(p).attr(e.attr("has-hidetimeout"))&&(t(p).attr(e.attr("has-hidetimeout"),!0),n._hideTimeouts.push(a((function(){n._hideStatic(t(p))}),s)))}))},_hideStatic:function(t){t.kendoAnimate(n(this.options.animation.close||!1,{complete:function(){t.off(g).find(c).off(g),t.remove()}})),this._triggerHide(t)},_triggerHide:function(t){this.trigger(d,{element:t}),this.angular("cleanup",(function(){return{elements:t}}))},show:function(o,a,s){var d,c,l=this,u=l.options,f=t('<div role="alert" aria-live="polite" class="k-widget k-popup k-notification"></div>'),h=e.guid();return a||(a=r),f.attr("aria-label",a),null!==o&&o!==i&&""!==o&&(e.isFunction(o)&&(o=o()),c={typeIcon:a,content:"",closeButton:u.button},d=t.isPlainObject(o)?n(c,o):n(c,{content:o}),f.addClass("k-notification-"+a).toggleClass("k-notification-button",u.button).toggleClass("k-notification-closable",u.button).attr({"data-role":"alert",title:u.title}).css({width:u.width,height:u.height}).append(l._getCompiled(a,s)(d)),f.find(".k-notification-content").attr("id",h),f.attr("aria-describedby",h),l.angular("compile",(function(){return{elements:f,data:[{dataItem:d}]}})),t(u.appendTo)[0]?l._showStatic(f,u):l._showPopup(f,u),l.trigger(p,{element:f})),l},showText:function(t,i){this.show(t,i,!0)},info:function(t){return this.show(t,r)},success:function(t){return this.show(t,"success")},warning:function(t){return this.show(t,"warning")},error:function(t){return this.show(t,"error")},hide:function(){var i=this,e=i.getNotifications();return i.options.appendTo?(i._hideTimeouts&&i._hideTimeouts.forEach(clearTimeout),i._hideTimeouts=[],e.each((function(e,o){i._hideStatic(t(o))}))):e.each((function(e,o){var n=t(o).data("kendoPopup");n&&i._hidePopup(n)})),i},getNotifications:function(){var i=t("."+this._guid+":not(."+"k-hiding)");return this.options.appendTo?i:i.children(".k-notification")},setOptions:function(t){var e,n=this;o.fn.setOptions.call(n,t),e=n.options,t.templates!==i&&n._compileTemplates(e.templates),t.stacking===i&&t.position===i||n._compileStacking(e.stacking,e.position.top,e.position.left)},destroy:function(){o.fn.destroy.call(this),this.getNotifications().off(g).find(c).off(g)}});e.ui.plugin(k)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.notification.js.map