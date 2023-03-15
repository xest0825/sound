/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.popup.js";import"./kendo.textbox.js";var __meta__={id:"dialog",name:"Dialog",category:"web",description:"The dialog widget is a modal popup that brings information to the user.",depends:["core","popup","textbox"]};!function(t,e){var i,n=window.kendo,o=n.ui.Widget,r=n.ui.Popup.TabKeyTrap,a=n.template,s=n.keys,l=n.isFunction,c=n.htmlEncode,d="kendoWindow",p=".k-window",u=".k-dialog-close",h=".k-window-content",f="k-scroll",m="k-dialog-titleless",v=".k-dialog-title",_=".k-dialog-titlebar",g=".k-dialog-buttongroup",k=".k-button",w=":visible",b="zIndex",y="body",x="initOpen",C="touchstart",O="touchmove",T="open",S="close",H="show",A="hide",F={small:"k-window-sm",medium:"k-window-md",large:"k-window-lg"},I="hidden",D="overflow",E="original-overflow-rule",R="tap-y",z={okText:"OK",cancel:"Cancel",promptInput:"Input"},W=Math.ceil,j=":not(link,meta,script,style)";function $(t){return void 0!==t}function M(t,e,i){return Math.max(Math.min(parseInt(t,10),i===1/0?i:parseInt(i,10)),parseInt(e,10))}function N(t){return t.keyCode==s.ENTER||t.keyCode==s.SPACEBAR}var B=o.extend({init:function(t,e){var i=this;o.fn.init.call(i,t,e),i._init(i.element,i.options),n.notify(i)},_init:function(n,o){var a,s=this;s._centerCallback=s._center.bind(s),s.appendTo=t(y),$(o.visible)&&null!==o.visible||(o.visible=n.is(w)),s.wrapperTemplate===e&&(s.wrapperTemplate=i.wrapper),s._createDialog(),a=s.wrapper=n.closest(".k-dialog"),o._defaultFocus===e&&(s._defaultFocus=n[0]),s._tabindex(n),s._dimensions(),this._tabKeyTrap=new r(a),s.options.visible?s._triggerOpen():s.wrapper.hide()},setOptions:function(i){var r=this,a=r.options.size;if(i=t.extend(r.options,i),o.fn.setOptions.call(r,i),i.title!==e&&r.title(i.title),i.content&&(n.destroy(r.element.children()),r.element.html(i.content)),i.actions&&(r.wrapper.children(g).remove(),r._createActionbar(r.wrapper)),r.wrapper.show(),r._closable(r.wrapper),r.wrapper.removeClass(F[a]),r._dimensions(),i.visible?r._triggerOpen():r.wrapper.hide(),void 0!==i.modal){var s=!1!==r.options.visible;r._enableDocumentScrolling(),r._overlay(i.modal&&s)}},_dimensions:function(){for(var t=this.wrapper,e=this.options,i=e.width,n=e.height,o=e.size,r=["minWidth","minHeight","maxWidth","maxHeight"],a=0;a<r.length;a++){var s=e[r[a]];s&&s!=1/0&&t.css(r[a],s)}this._setElementMaxHeight(),i&&(i.toString().indexOf("%")>0?t.width(i):t.outerWidth(M(i,e.minWidth,e.maxWidth))),n&&(n.toString().indexOf("%")>0?t.height(n):t.outerHeight(M(n,e.minHeight,e.maxHeight)),this._setElementHeight()),o&&F[o]&&t.addClass(F[o])},_setElementMaxHeight:function(){var t,e=this,i=e.element,n=e.options.maxHeight;n!=1/0&&(t=parseFloat(n,10)-e._uiHeight())>0&&i.css({maxHeight:W(t)+"px"})},_setElementHeight:function(){var t=this,e=t.element,i=t.wrapper.outerHeight(!0),n=parseFloat(i,10)-t._uiHeight();n<0&&(n=0),e.css({height:W(n)+"px"}),this._applyScrollClassName(e)},_applyScrollClassName:function(t){t.get(0).scrollHeight>t.outerHeight()?t.addClass(f):t.removeClass(f)},_uiHeight:function(){var t=this.wrapper,e=t.children(g),i=e[0]&&e[0].offsetHeight||0,n=t.children(_);return i+(n[0]&&n[0].offsetHeight||0)},_overlay:function(e){var n=this.appendTo.children(".k-overlay"),o=this.wrapper;return n.length||(n=t(i.overlay)),n.insertBefore(o[0]).toggle(e).css(b,parseInt(o.css(b),10)-1),e?this._waiAriaOverlay():this._removeWaiAriaOverlay(),this.options.modal.preventScroll&&this._stopDocumentScrolling(),n},_waiAriaOverlay:function(){var e=this.wrapper;this._overlayedNodes=e.prevAll(j).add(e.nextAll(j)).each((function(){var e=t(this);e.data("ariaHidden",e.attr("aria-hidden")),e.attr("aria-hidden","true")}))},_removeWaiAriaOverlay:function(){return this._overlayedNodes&&this._overlayedNodes.each((function(){var e=t(this),i=e.data("ariaHidden");i?e.attr("aria-hidden",i):e.removeAttr("aria-hidden")}))},_closeClick:function(t){t.preventDefault(),this.close(!1)},_closeKeyHandler:function(t){(N(t)||t.keyCode==s.ESC)&&this.close(!1)},_keydown:function(t){var e=this,i=e.options;t.keyCode==s.ESC&&!e._closing&&i.closable&&e.close(!1)},_createDialog:function(){var e=this,o=e.element,r=e.options,a=n.support.isRtl(o),s=t(i.titlebar(r)),l=(o.id||n.guid())+"_title",c=t(e.wrapperTemplate(r));c.toggleClass("k-rtl",a),o.addClass("k-window-content k-dialog-content"),e.appendTo.append(c),!1!==r.title?(c.append(s),s.attr("id",l),c.attr("aria-labelledby",l)):c.addClass(m),e._closable(c),c.append(o),r.content&&(n.destroy(o.children()),o.html(r.content)),r.actions.length&&e._createActionbar(c)},_closable:function(t){var e=this,n=e.options,o=t.children(_).find(".k-window-actions");(o.length?o.find(".k-dialog-close"):t.find(".k-dialog-close")).remove(),!1!==n.closable&&(!1!==n.title&&o.length?o.append(i.close(n)):t.prepend(i.close(n)),t.autoApplyNS(d),e.element.autoApplyNS(d),t.find(u).on("click",e._closeClick.bind(e)).on("keydown",e._closeKeyHandler.bind(e)),e.element.on("keydown",e._keydown.bind(e)))},_createActionbar:function(e){var n="stretched"===this.options.buttonLayout?"stretch":"end",o=t(i.actionbar({buttonLayout:n}));this._addButtons(o),e.append(o)},_addButtons:function(e){for(var n,o,r=this,a=r._actionClick.bind(r),s=r._actionKeyHandler.bind(r),l=r.options.actions,c=l.length,p=0;p<c;p++)n=l[p],o=r._mergeTextWithOptions(n),t(i.action(n)).autoApplyNS(d).html(o).appendTo(e).addClass(n.cssClass).data("action",n.action).on("click",a).on("keydown",s)},_mergeTextWithOptions:function(t){var e=t.text;return e?a(e)(this.options):""},_tabindex:function(t){var e=this.wrapper,i=e.find(u),n=e.find(g+" "+k);o.fn._tabindex.call(this,t);var r=t.attr("tabindex");i.attr("tabIndex",r),n.attr("tabIndex",r)},_actionClick:function(t){this.wrapper.is(w)&&this._runActionBtn(t.currentTarget)},_actionKeyHandler:function(t){N(t)?(t.preventDefault(),this._runActionBtn(t.currentTarget)):t.keyCode==s.ESC&&this.close(!1)},_runActionBtn:function(e){var i=this;if(!i._closing){var n=t(e).data("action");l(n)&&!1===n({sender:i})||i.close(!1)}},_triggerOpen:function(){var t=this,e=t.options,i=t.wrapper;t.toFront(),t._triggerInitOpen(),t.trigger(T),e.modal&&(t._overlay(i.is(w)).css({opacity:.5}),t._focusDialog())},open:function(){var t,e,i=this,o=i.wrapper,r=this._animationOptions(T),a=i.options;if(this._triggerInitOpen(),!i.trigger(T)){if(i._closing&&o.kendoStop(!0,!0),i._closing=!1,i.toFront(),a.visible=!0,a.modal){if(e=!!i._modals().length,(t=i._overlay(e)).kendoStop(!0,!0),r.duration&&n.effects.Fade&&!e){var s=n.fx(t).fadeIn();s.duration(r.duration||0),s.endValue(.5),s.play()}else t.css("opacity",.5);t.show()}o.show().kendoStop().kendoAnimate({effects:r.effects,duration:r.duration,complete:i._openAnimationEnd.bind(i)}),o.show()}return i},_animationOptions:function(t){var e=this.options.animation;return e&&e[t]||{open:{effects:{}},close:{hide:!0,effects:{}}}[t]},_openAnimationEnd:function(){this.options.modal&&this._focusDialog(),this.trigger(H)},_triggerInitOpen:function(){$(this._initOpenTriggered)||(this._initOpenTriggered=!0,this.trigger(x))},toFront:function(){var e=this,i=e.wrapper,n=+i.css(b),o=n;return e.center(),t(p).each((function(e,i){var o=t(i).css(b);isNaN(o)||(n=Math.max(+o,n))})),(!i[0].style.zIndex||o<n)&&i.css(b,n+2),e.element.find("> .k-overlay").remove(),i=null,e},close:function(t){return arguments.length||(t=!0),this._close(t),this._stopCenterOnResize(),this},_close:function(t){var e=this,i=e.wrapper,n=e.options,o=this._animationOptions("open"),r=this._animationOptions("close");if(i.is(w)&&!e.trigger(S,{userTriggered:!t})){if(e._closing)return;e._closing=!0,n.visible=!1,this._removeOverlay(),i.kendoStop().kendoAnimate({effects:r.effects||o.effects,reverse:!0===r.reverse,duration:r.duration,complete:this._closeAnimationEnd.bind(this)})}return e},center:function(){this._center(),this._centerOnResize()},_center:function(){var e=this.wrapper,i=t(window),n=0+Math.max(0,(i.width()-e.width())/2),o=0+Math.max(0,(i.height()-e.height()-parseInt(e.css("paddingTop"),10))/2);return e.css({left:n,top:o}),this},_centerOnResize:function(){this._trackResize||(n.onResize(this._centerCallback),this._trackResize=!0)},_stopCenterOnResize:function(){n.unbindResize(this._centerCallback),this._trackResize=!1},_removeOverlay:function(){var t=this._modals(),e=this.options;e.modal&&!t.length?(this._overlay(!1).remove(),e.modal.preventScroll&&this._enableDocumentScrolling()):t.length&&(this._object(t.last())._overlay(!0),e.modal.preventScroll&&this._stopDocumentScrolling())},_stopDocumentScrolling:function(){var e=this,i=t("body");e._storeOverflowRule(i),i.css(D,I);var o=t("html"),r=o[0];e._storeOverflowRule(o),o.css(D,I),n.support.mobileOS.ios&&(r.addEventListener(C,e._touchStart,{passive:!1}),r.addEventListener(O,e._touchMove,{passive:!1}))},_touchStart:function(e){t(this).data(R,e.changedTouches[0].pageY)},_touchMove:function(e){var i=e.target,n=t(e.target),o=e.changedTouches[0].pageY-t(this).data(R)>0,r=n.is(h)&&o&&0===n.scrollTop()||!o&&n.scrollTop()===i.scrollHeight-i.clientHeight;n.is(h)&&!r||e.preventDefault()},_enableDocumentScrolling:function(){var e=this,i=t(document.body),o=t("html"),r=o[0];e._restoreOverflowRule(i),e._restoreOverflowRule(o),n.support.mobileOS.ios&&(o.removeData(R),r.removeEventListener(C,e._touchStart,{passive:!1}),r.removeEventListener(O,e._touchMove,{passive:!1}))},_storeOverflowRule:function(t){if(!this._isOverflowStored(t)){var e=t.get(0).style.overflow;"string"==typeof e&&t.data(E,e)}},_isOverflowStored:function(t){return"string"==typeof t.data(E)},_restoreOverflowRule:function(t){var i=t.data(E);null!==i&&i!==e?(t.css(D,i),t.removeData(E)):t.css(D,"")},_closeAnimationEnd:function(){var t=this,e=t._previousFocus;if(t._closing=!1,t.wrapper.hide().css("opacity",""),t.trigger(A),t.options.modal){var i=t._object(t._modals().last());i?i.toFront():e&&(t._previousFocus=null,setTimeout((function(){e.focus()})))}},_modals:function(){var e=this,i=t(p).filter((function(){var i=e._object(t(this));return i&&i.options&&i.options.modal&&i.options.visible&&i.options.appendTo===e.options.appendTo&&!i.containment&&t(i.element).is(w)})).sort((function(e,i){return+t(e).css("zIndex")-+t(i).css("zIndex")}));return e=null,i},_object:function(t){var i=t.children(h),o=n.widgetInstance(i);return o||e},destroy:function(){var e=this;e._destroy(),o.fn.destroy.call(e),n.destroy(e.wrapper),e.wrapper.remove(),e.wrapper=e.element=t()},_destroy:function(){var t=this,e="."+d;t.wrapper.off(e),t.element.off(e),t.wrapper.find(u+","+g+" > "+k).off(e),t._stopCenterOnResize()},title:function(e){var n=this,o=n.wrapper,r=n.options,a=o.children(_),s=a.children(v),l=c(e);return arguments.length?(!1===e?(a.remove(),o.addClass(m)):(a.length||(s=(a=t(i.titlebar(r)).prependTo(o)).children(v),o.removeClass(m)),s.html(l)),n.options.title=l,n):s.html()},content:function(t,e){var i=this,o=i.wrapper.children(h);return $(t)?(this.angular("cleanup",(function(){return{elements:o.children()}})),n.destroy(o.children()),o.html(t),this.angular("compile",(function(){for(var t=[],i=o.length;--i>=0;)t.push({dataItem:e});return{elements:o.children(),data:t}})),i.options.content=t,i):o.html()},_focusDialog:function(){var t=this._object(this._modals().first());this._previousFocus=t&&t._previousFocus?t._previousFocus:document.activeElement,this._defaultFocus&&this._focus(this._defaultFocus),this._tabKeyTrap.trap()},_focus:function(t){t&&t.focus()},events:[x,T,S,H,A],options:{title:"",buttonLayout:"stretched",actions:[],modal:!0,size:"auto",width:null,height:null,minWidth:0,minHeight:0,maxWidth:1/0,maxHeight:1/0,content:null,visible:null,appendTo:y,closable:!0}}),K=B.extend({options:{name:"Dialog",messages:{close:"Close"}}});n.ui.plugin(K);var L=B.extend({_init:function(t,e){var n=this;n.wrapperTemplate=i.alertWrapper,e._defaultFocus=null,n._ensureContentId(t),B.fn._init.call(n,t,e),n.bind(A,n.destroy.bind(n)),n._ariaDescribedBy(),n._initFocus()},_ensureContentId:function(e){var i=t(e);i.attr("id")||i.attr("id",n.guid()+"_k-popup")},_ariaDescribedBy:function(){this.wrapper.attr("aria-describedby",this.element.attr("id"))},_initFocus:function(){var t=this.options;this._defaultFocus=this._chooseEntryFocus(),this._defaultFocus&&t.visible&&t.modal&&this._focusDialog()},_chooseEntryFocus:function(){return this.wrapper.find(g+" > "+k)[0]},options:{title:window.location.host,closable:!1,messages:z}}),P=L.extend({_init:function(t,e){L.fn._init.call(this,t,e),this.wrapper.addClass("k-alert")},options:{name:"Alert",modal:!0,actions:[{text:()=>`${c(z.okText)}`}]}});n.ui.plugin(P);var Y=L.extend({_init:function(e,i){var n=this;L.fn._init.call(n,e,i),n.wrapper.addClass("k-confirm"),n.result=t.Deferred()},options:{name:"Confirm",modal:!0,actions:[{text:({messages:t})=>`${c(t.okText)}`,primary:!0,action:function(t){t.sender.result.resolve()}},{text:({messages:t})=>`${c(t.cancel)}`,action:function(t){t.sender.result.reject()}}]}});n.ui.plugin(Y);var Q=L.extend({_init:function(e,i){var n=this;L.fn._init.call(n,e,i),n.wrapper.addClass("k-prompt"),n._createPrompt(),n.result=t.Deferred()},_createPrompt:function(){var e=this.options.value,o=t(i.promptInputContainer(this.options)).insertAfter(this.element);this.input=new n.ui.TextBox(o.find("input")),e&&this.input.value(e),this._defaultFocus=this._chooseEntryFocus(),this._focusDialog()},_chooseEntryFocus:function(){return this.wrapper.find(".k-input-inner")[0]},options:{name:"Prompt",modal:!0,value:"",actions:[{text:({messages:t})=>`${c(t.okText)}`,primary:!0,action:function(t){var e=t.sender,i=e.input.value();e.result.resolve(i)}},{text:({messages:t})=>`${c(t.cancel)}`,action:function(t){var e=t.sender.input.value();t.sender.result.reject(e)}}]}});n.ui.plugin(Q);i={wrapper:a((()=>"<div class='k-widget k-window k-dialog' role='dialog'></div>")),action:a((t=>`<button type='button' class='k-button k-button-md k-rounded-md k-button-solid ${t.primary?"k-button-solid-primary":"k-button-solid-base"}'></button>`)),titlebar:a((({title:t})=>`<div class='k-window-titlebar k-dialog-titlebar k-hstack'><span class='k-window-title k-dialog-title'>${c(t)}</span><div class='k-window-actions k-dialog-actions k-hstack'></div></div>`)),close:a((({messages:t})=>`<a role='button' href='#' class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-window-action k-dialog-action k-dialog-close' title='${c(t.close)}' aria-label='${c(t.close)}' tabindex='-1'><span class='k-button-icon k-icon k-i-close'></span></a>`)),actionbar:a((({buttonLayout:t})=>`<div class='k-dialog-buttongroup k-actions k-hstack k-justify-content-${c(t)}'></div>`)),overlay:"<div class='k-overlay'></div>",alertWrapper:a((()=>"<div class='k-widget k-window k-dialog' role='alertdialog'></div>")),alert:"<div></div>",confirm:"<div></div>",prompt:"<div></div>",promptInputContainer:a((({messages:t})=>`<div class='k-prompt-container'><input type='text' title='${c(t.promptInput)}' aria-label='${c(t.promptInput)}' /></div>`))},n.alert=function(e){return t(i.alert).kendoAlert({content:e}).data("kendoAlert").open()},n.confirm=function(e){return t(i.confirm).kendoConfirm({content:e}).data("kendoConfirm").open().result},n.prompt=function(e,n){return t(i.prompt).kendoPrompt({content:e,value:n}).data("kendoPrompt").open().result}}(window.kendo.jQuery);
//# sourceMappingURL=kendo.dialog.js.map
