/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.draganddrop.js";var __meta__={id:"slider",name:"Slider",category:"web",description:"The Slider widget provides a rich input for selecting values or ranges of values.",depends:["draganddrop"]};!function(e,t){var n=window.kendo,i=n.ui.Widget,a=n.ui.Draggable,o=n._outerWidth,r=n._outerHeight,l=e.extend,s=n.format,d=n.parseFloat,u=Array.isArray,c=Math,p=n.support,f=p.pointers,v=p.msPointers,_="change",m="slide",h=".slider",g="touchstart"+h+" mousedown"+h,k=f?"pointerdown"+h:v?"MSPointerDown"+h:g,w="touchend"+h+" mouseup"+h,S=f?"pointerup":v?"MSPointerUp"+h:w,b="moveSelection",x="keydown"+h,D="click"+h,H="mouseover"+h,T="focus"+h,y="blur"+h,E=".k-draghandle",I=".k-slider-track",z=".k-tick",A="k-disabled",C="disabled",R="tabindex",F=n.getTouches,V="aria-valuetext",q="aria-valuenow",M=i.extend({init:function(e,t){var a=this;if(i.fn.init.call(a,e,t),t=a.options,a._isHorizontal="horizontal"==t.orientation,a._isRtl=a._isHorizontal&&n.support.isRtl(e),a._position=a._isHorizontal?"left":"bottom",a._sizeFn=a._isHorizontal?"width":"height",a._outerSize=a._isHorizontal?o:r,t.tooltip.format=t.tooltip.enabled&&t.tooltip.format||"{0}",t.smallStep<=0)throw new Error("Kendo UI Slider smallStep must be a positive number.");a._createHtml(),a._trackDiv=a.wrapper.find(I),a._maxSelection=a._trackDiv[a._sizeFn](),a._sliderItemsInit(),a._reset(),a._tabindex(a.wrapper.find(E)),a[t.enabled?"enable":"disable"]();var l=n.support.isRtl(a.wrapper)?-1:1;a._keyMap={37:N(-1*l*t.smallStep),40:N(-t.smallStep),39:N(1*l*t.smallStep),38:N(+t.smallStep),35:O(t.max),36:O(t.min),33:N(+t.largeStep),34:N(-t.largeStep)},a._ariaLabel(a.wrapper.find(E)),n.notify(a)},events:[_,m],options:{enabled:!0,min:0,max:10,smallStep:1,largeStep:5,orientation:"horizontal",tickPlacement:"both",tooltip:{enabled:!0,format:"{0}"}},_distance:function(){return B(this.options.max-this.options.min)},_resize:function(){this.wrapper.find(".k-slider-items").remove(),this._maxSelection=this._trackDiv[this._sizeFn](),this._sliderItemsInit(),this._refresh(),this.options.enabled&&this.enable(!0)},_sliderItemsInit:function(){var t=this,n=t.options,i=(t._maxSelection-2)/((n.max-n.min)/n.smallStep),a=t._calculateItemsWidth(c.floor(j(t._distance())/j(n.smallStep)));"none"!=n.tickPlacement&&i>=2&&(e(this.element).parent().find(".k-slider-items").remove(),t._trackDiv.before(function(e,t){var n,i="<ul class='k-reset k-slider-items' role='presentation'>",a=c.floor(B(t/e.smallStep))+1;for(n=0;n<a;n++)i+="<li class='k-tick'></li>";return i+="</ul>"}(n,t._distance())),t._setItemsTitle()),t._calculateSteps(a),"none"!=n.tickPlacement&&i>=2&&n.largeStep>=n.smallStep&&(t._setItemsLargeTick(),t.wrapper.find(z).first().addClass("k-first"),t.wrapper.find(z).last().addClass("k-last"))},getSize:function(){return n.dimensions(this.wrapper)},_setItemsTitle:function(){for(var t=this.options,n=this.wrapper.find(z),i=t.min,a=n.length,o=0;o<=a;o+=1)e(n[o]).attr("title",s(t.tooltip.format,B(i))),i+=t.smallStep},_setItemsLargeTick:function(){var t,n=this,i=n.options,a=n.wrapper.find(z),o=0;if(j(i.largeStep)%j(i.smallStep)==0||n._distance()/i.largeStep>=3)for(n._isHorizontal||n._isRtl||(a=e.makeArray(a).reverse()),o=0;o<a.length;o++){t=e(a[o]);var r=B(j(n._values[o]-this.options.min));r%j(i.smallStep)==0&&r%j(i.largeStep)==0&&(t.addClass("k-tick-large").html("<span class='k-label'>"+t.attr("title")+"</span>"),0!==o&&o!==a.length-1&&t.css("line-height",t[n._sizeFn]()+"px"))}},_calculateItemsWidth:function(e){var t,n,i,a=this,o=a.options,r=parseFloat(a._trackDiv.css(a._sizeFn))+1,l=a._distance(),s=j(l)/j(o.smallStep),d=r/j(l);for(s-e>0&&(r-=j(l)%j(o.smallStep)*d),t=r/e,n=[],i=0;i<e-1;i++)n[i]=t;return n[e-1]=n[e]=t/2,a._roundWidths(n)},_roundWidths:function(e){var t,n=0,i=e.length;for(t=0;t<i;t++)n+=e[t]-c.floor(e[t]),e[t]=c.floor(e[t]);return n=c.round(n),this._addAdditionalSize(n,e)},_addAdditionalSize:function(e,t){if(0===e)return t;var n,i=parseFloat(t.length-1)/parseFloat(1==e?e:e-1);for(n=0;n<e;n++)t[parseInt(c.round(i*n),10)]+=1;return t},_calculateSteps:function(e){var t,n=this,i=n.options,a=i.min,o=0,r=n._distance(),l=c.ceil(j(r)/j(i.smallStep)),s=1;if(l+=j(r)/j(i.smallStep)%1==0?1:0,e.splice(0,0,2*e[l-2]),e.splice(l-1,1,2*e.pop()),n._pixelSteps=[o],n._values=[a],0!==l){for(;s<l;)o+=(e[s-1]+e[s])/2,n._pixelSteps[s]=o,a+=i.smallStep,n._values[s]=B(a),s++;t=j(r)%j(i.smallStep)==0?l-1:l,n._pixelSteps[t]=n._maxSelection,n._values[t]=i.max,n._isRtl&&(n._pixelSteps.reverse(),n._values.reverse())}},_getValueFromPosition:function(e,t){var n,i=this,a=i.options,o=c.max(a.smallStep*(i._maxSelection/i._distance()),0),r=0,l=o/2;if(i._isHorizontal?(r=e-t.startPoint,i._isRtl&&(r=i._maxSelection-r)):r=t.startPoint-e,i._maxSelection-(parseInt(i._maxSelection%o,10)-3)/2<r)return a.max;for(n=0;n<i._pixelSteps.length;n++)if(c.abs(i._pixelSteps[n]-r)-1<=l)return B(i._values[n])},_getFormattedValue:function(e,t){var i,a,o,r="",l=this.options.tooltip;return u(e)?(a=e[0],o=e[1]):t&&t.type&&(a=t.selectionStart,o=t.selectionEnd),t&&(i=t.tooltipTemplate),!i&&l.template&&(i=n.template(l.template)),u(e)||t&&t.type?r=i?i({selectionStart:a,selectionEnd:o}):(a=s(l.format,a))+" - "+(o=s(l.format,o)):(t&&(t.val=e),r=i?i({value:e}):s(l.format,e)),r},_getDraggableArea:function(){var e=this,t=n.getOffset(e._trackDiv);return{startPoint:e._isHorizontal?t.left:t.top+e._maxSelection,endPoint:e._isHorizontal?t.left+e._maxSelection:t.top}},_createHtml:function(){var e=this,n=e.element,i=e.options,a=n.find("input");2==a.length?(a.eq(0).prop("value",W(i.selectionStart)),a.eq(1).prop("value",W(i.selectionEnd))):n.prop("value",W(i.value)),e.wrapper=n.wrap(function(e,t,n){var i=n?" k-slider-horizontal":" k-slider-vertical",a=e.style?e.style:t.attr("style"),o=t.attr("class")?" "+t.attr("class"):"",r="";"bottomRight"==e.tickPlacement?r=" k-slider-bottomright":"topLeft"==e.tickPlacement&&(r=" k-slider-topleft");return"<div class='k-widget k-slider"+i+o+"'"+(a=a?" style='"+a+"'":"")+"><div class='k-slider-track-wrap"+r+"'></div></div>"}(i,n,e._isHorizontal)).hide().parents(".k-slider"),i.showButtons&&e.wrapper.find(".k-slider-track-wrap").after(P(i,"increase",e._isHorizontal,e._isRtl)).before(P(i,"decrease",e._isHorizontal,e._isRtl)),n.before(function(e,n,i){var a,o,r,l=n.is("input")?1:2,s=2==l?e.leftDragHandleTitle:e.dragHandleTitle,d=e.value,u=e.selectionStart,c=e.selectionEnd;1===l?null!==(a=n.val())&&a!==t&&"null"!==a&&(null!==d&&d!==t||(d=a)):(o=n.find("input").eq(0).val(),r=n.find("input").eq(1).val(),null!==o&&o!==t&&"null"!==o&&(null!==u&&u!==t||(u=o)),null!==r&&r!==t&&"null"!==r&&(null!==c&&c!==t||(c=r)));return"<div class='k-slider-track'><div class='k-slider-selection'>\x3c!-- --\x3e</div><span tabindex='0' class='k-draghandle' title='"+s+"' role='slider' "+(!1===i?"aria-orientation='vertical' ":"")+"aria-valuemin='"+e.min+"' aria-valuemax='"+e.max+"' aria-valuenow='"+(l>1?u||e.min:d||e.min)+"'></span>"+(l>1?"<span tabindex='0' class='k-draghandle' title='"+e.rightDragHandleTitle+"'role='slider' "+(!1===i?"aria-orientation='vertical' ":"")+"aria-valuemin='"+e.min+"' aria-valuemax='"+e.max+"' aria-valuenow='"+(c||e.max)+"'></span>":"")+"</div>"}(i,n,e._isHorizontal))},_focus:function(t){var n=this,i=t.target,a=n.value(),o=n._drag;o||(i==n.wrapper.find(E).eq(0)[0]?(o=n._firstHandleDrag,n._activeHandle=0):(o=n._lastHandleDrag,n._activeHandle=1),a=a[n._activeHandle]),e(i).addClass("k-focus k-selected"),o&&(n._activeHandleDrag=o,o.selectionStart=n.options.selectionStart,o.selectionEnd=n.options.selectionEnd,o._updateTooltip(a))},_focusWithMouse:function(t){t=e(t);var n=this,i=t.is(E)?t.index():0;window.setTimeout((function(){n.wrapper.find(E)[2==i?1:0].focus()}),1),n._setTooltipTimeout()},_blur:function(t){var n=this,i=n._activeHandleDrag;e(t.target).removeClass("k-focus k-selected"),i&&(i._removeTooltip(),delete n._activeHandleDrag,delete n._activeHandle)},_setTooltipTimeout:function(){var e=this;e._tooltipTimeout=window.setTimeout((function(){var t=e._drag||e._activeHandleDrag;t&&t._removeTooltip()}),300)},_clearTooltipTimeout:function(){window.clearTimeout(this._tooltipTimeout);var e=this._drag||this._activeHandleDrag;e&&e.tooltipDiv&&e.tooltipDiv.stop(!0,!1).css("opacity",1)},_reset:function(){var t=this,n=t.element,i=n.attr("form"),a=i?e("#"+i):n.closest("form");a[0]&&(t._form=a.on("reset",t._formResetHandler.bind(t)))},min:function(e){if(!e)return this.options.min;this.setOptions({min:e})},max:function(e){if(!e)return this.options.max;this.setOptions({max:e})},setOptions:function(e){i.fn.setOptions.call(this,e),this._sliderItemsInit(),this._refresh()},destroy:function(){this._form&&this._form.off("reset",this._formResetHandler),i.fn.destroy.call(this)}});function P(e,t,n){var i="";return i=n?"increase"===t?"k-i-arrow-e":"k-i-arrow-w":"increase"==t?"k-i-arrow-n":"k-i-arrow-s","<a role='button' class='k-button k-button-md k-rounded-full k-button-solid k-button-solid-base k-icon-button k-button-"+t+"' title='"+e[t+"ButtonTitle"]+"' aria-label='"+e[t+"ButtonTitle"]+"'><span class='k-button-icon k-icon "+i+"'></span></a>"}function N(e){return function(t){return t+e}}function O(e){return function(){return e}}function W(e){return(e+"").replace(".",n.cultures.current.numberFormat["."])}function B(e){var t,n;return t=function(e){var t=e.toString(),n=0;return(t=t.split("."))[1]&&(n=t[1].length),n>10?10:n}(e=parseFloat(e,10)),n=c.pow(10,t||0),c.round(e*n)/n}function L(e,n){var i=d(e.getAttribute(n));return null===i&&(i=t),i}function Z(e){return void 0!==e}function j(e){return 1e4*e}var U=M.extend({init:function(n,i){var a,o=this;n.type="text",i=l({},{value:L(n,"value"),min:L(n,"min"),max:L(n,"max"),smallStep:L(n,"step")},i),n=e(n),i&&i.enabled===t&&(i.enabled=!n.is("[disabled]")),M.fn.init.call(o,n,i),Z((i=o.options).value)&&null!==i.value||(i.value=i.min,n.prop("value",W(i.min))),i.value=c.max(c.min(i.value,i.max),i.min),a=o.wrapper.find(E),o._selection=new U.Selection(a,o,i),o._drag=new U.Drag(a,"",o,i),o._refreshAriaAttr(i.value)},options:{name:"Slider",showButtons:!0,increaseButtonTitle:"Increase",decreaseButtonTitle:"Decrease",dragHandleTitle:"drag",tooltip:{format:"{0:#,#.##}"},value:null},enable:function(t){var i,a,o=this,r=o.options;if(o.disable(),!1!==t){if(o.wrapper.removeClass(A),o.wrapper.find("input").prop(C,!1),i=function(t){var n=F(t)[0];if(n){var i=o._isHorizontal?n.location.pageX:n.location.pageY,a=o._getDraggableArea(),r=e(t.target);r.hasClass("k-draghandle")?r.addClass("k-focus k-selected"):(o._update(o._getValueFromPosition(i,a)),o._focusWithMouse(t.target),o._drag.dragstart(t),t.preventDefault())}},o.wrapper.find(".k-tick, .k-slider-track").on(k,i).end().on(k,(function(){e(document.documentElement).one("selectstart",n.preventDefault)})).on(S,(function(){o._drag._end()})),o.wrapper.find(E).attr(R,0).on(w,(function(){o._setTooltipTimeout()})).on(D,(function(e){o._focusWithMouse(e.target),e.preventDefault()})).on(T,o._focus.bind(o)).on(y,o._blur.bind(o)),a=function(e){var t=o._nextValueByIndex(o._valueIndex+1*e);o._setValueInRange(t),o._drag._updateTooltip(t)},r.showButtons){var l=function(e,t){this._clearTooltipTimeout(),(1===e.which||p.touch&&0===e.which)&&(a(t),this.timeout=setTimeout(function(){this.timer=setInterval((function(){a(t)}),60)}.bind(this),200))}.bind(o);o.wrapper.find(".k-button").on(w,function(e){this._clearTimer(),o._focusWithMouse(e.target)}.bind(o)).on(H,(function(t){e(t.currentTarget).addClass("k-hover")})).on("mouseout"+h,function(t){e(t.currentTarget).removeClass("k-hover"),this._clearTimer()}.bind(o)).on(g,(function(t){var n=e(t.target).closest(".k-button").is(".k-button-increase")?1:-1;l(t,n)})).on("click",n.preventDefault)}o.wrapper.find(E).off(x,!1).on(x,this._keydown.bind(o)),r.enabled=!0}},disable:function(){var t=this;t.wrapper.addClass(A),e(t.element).prop(C,C),t.wrapper.find(".k-button").off(g).on(g,(function(t){t.preventDefault(),e(this).addClass("k-active")})).off(w).on(w,(function(t){t.preventDefault(),e(this).removeClass("k-active")})).off("mouseleave"+h).on("mouseleave"+h,n.preventDefault).off(H).on(H,n.preventDefault),t.wrapper.find(".k-tick, .k-slider-track").off(k).off(S),t.wrapper.find(E).attr(R,-1).off(w).off(x).off(D).off(T).off(y),t.options.enabled=!1},_update:function(e){var t=this,n=t.value()!=e;t.value(e),n&&t.trigger(_,{value:t.options.value})},value:function(e){var t=this,n=t.options;if(e=B(e),isNaN(e))return n.value;e>=n.min&&e<=n.max&&n.value!=e&&(t.element.prop("value",W(e)),n.value=e,t._refreshAriaAttr(e),t._refresh())},_refresh:function(){this.trigger(b,{value:this.options.value})},_refreshAriaAttr:function(e){var t,n=this._drag;t=n&&n._tooltipDiv?n._tooltipDiv.text():this._getFormattedValue(e,null),this.wrapper.find(E).attr(q,e).attr(V,t)},_clearTimer:function(){clearTimeout(this.timeout),clearInterval(this.timer)},_keydown:function(e){var t=this;e.keyCode in t._keyMap&&(t._clearTooltipTimeout(),t._setValueInRange(t._keyMap[e.keyCode](t.options.value)),t._drag._updateTooltip(t.value()),e.preventDefault())},_setValueInRange:function(e){var t=this,n=t.options;e=B(e),isNaN(e)?t._update(n.min):(e=c.max(c.min(e,n.max),n.min),t._update(e))},_nextValueByIndex:function(e){var t=this._values.length;return this._isRtl&&(e=t-1-e),this._values[c.max(0,c.min(e,t-1))]},_formResetHandler:function(){var e=this,t=e.options.min;setTimeout((function(){var n=e.element[0].value;e.value(""===n||isNaN(n)?t:n)}))},destroy:function(){var e=this;M.fn.destroy.call(e),e.wrapper.off(h).find(".k-button").off(h).end().find(E).off(h).end().find(".k-tick, .k-slider-track").off(h).end(),e._drag.draggable.destroy(),e._drag._removeTooltip(!0)}});U.Selection=function(e,t,n){function i(i){var a=i-n.min,o=t._valueIndex=c.ceil(B(a/n.smallStep)),r=parseInt(t._pixelSteps[o],10),l=t._trackDiv.find(".k-slider-selection"),s=t._isRtl?2:0;l[t._sizeFn](t._isRtl?t._maxSelection-r:r),e.css(t._position,r-s)}i(n.value),t.bind([m,b],(function(e){i(parseFloat(e.value,10))})),t.bind(_,(function(e){i(parseFloat(e.sender.value(),10))}))},U.Drag=function(e,t,n,i){var o=this;o.owner=n,o.options=i,o.element=e,o.type=t,o.draggable=new a(e,{distance:0,dragstart:o._dragstart.bind(o),drag:o.drag.bind(o),dragend:o.dragend.bind(o),dragcancel:o.dragcancel.bind(o)}),e.click(!1),e.on("dragstart",(function(e){e.preventDefault()}))},U.Drag.prototype={dragstart:function(e){this.owner._activeDragHandle=this,this.draggable.userEvents.cancel(),this._dragstart(e),this.dragend()},_dragstart:function(t){var n=this,i=n.owner,a=n.options;a.enabled?(this.owner._activeDragHandle=this,i.element.off(H),i.wrapper.find(".k-focus").removeClass("k-focus k-selected"),n.element.addClass("k-focus k-selected"),e(document.documentElement).css("cursor","pointer"),n.draggableArea=i._getDraggableArea(),n.step=c.max(a.smallStep*(i._maxSelection/i._distance()),0),n.type?(n.selectionStart=a.selectionStart,n.selectionEnd=a.selectionEnd,i._setZIndex(n.type)):n.oldVal=n.val=a.value,n._removeTooltip(!0),n._createTooltip()):t.preventDefault()},_createTooltip:function(){var t,i=this,a=i.owner,o=i.options.tooltip,r="",l=e(window);o.enabled&&(o.template&&(i.tooltipTemplate=n.template(o.template)),e(".k-slider-tooltip").remove(),i.tooltipDiv=e("<div class='k-tooltip k-slider-tooltip'>\x3c!-- --\x3e</div>").appendTo(document.body),r=a._getFormattedValue(i.val||a.value(),i),i.type||(t="k-callout-"+(a._isHorizontal?"s":"e"),i.tooltipInnerDiv="<div class='k-callout "+t+"'>\x3c!-- --\x3e</div>",r+=i.tooltipInnerDiv),i.tooltipDiv.html(r),i._scrollOffset={top:l.scrollTop(),left:n.scrollLeft(l)},i.moveTooltip())},drag:function(e){var t,n=this,i=n.owner,a=e.x.location,o=e.y.location,r=n.draggableArea.startPoint,l=n.draggableArea.endPoint;e.preventDefault(),i._isHorizontal?i._isRtl?n.val=n.constrainValue(a,r,l,a<l):n.val=n.constrainValue(a,r,l,a>=l):n.val=n.constrainValue(o,l,r,o<=l),n.oldVal!=n.val&&(n.oldVal=n.val,n.type?("firstHandle"==n.type?n.val<n.selectionEnd?n.selectionStart=n.val:n.selectionStart=n.selectionEnd=n.val:n.val>n.selectionStart?n.selectionEnd=n.val:n.selectionStart=n.selectionEnd=n.val,t={values:[n.selectionStart,n.selectionEnd],value:[n.selectionStart,n.selectionEnd]}):t={value:n.val},i.trigger(m,t)),n._updateTooltip(n.val)},_updateTooltip:function(e){var t=this,n="";t.options.tooltip.enabled&&(t.tooltipDiv||t._createTooltip(),n=t.owner._getFormattedValue(B(e),t),t.type||(n+=t.tooltipInnerDiv),t.tooltipDiv.html(n),t.moveTooltip())},dragcancel:function(){return this.owner._refresh(),e(document.documentElement).css("cursor",""),this._end()},dragend:function(){var t=this,n=t.owner;return e(document.documentElement).css("cursor",""),t.type?n._update(t.selectionStart,t.selectionEnd):(n._update(t.val),t.draggable.userEvents._disposeAll()),t.draggable.userEvents.cancel(),t._end()},_end:function(){var e=this.owner;return e._focusWithMouse(this.element),e.element.on(H),!1},_removeTooltip:function(t){var n=this,i=n.owner;n.tooltipDiv&&i.options.tooltip.enabled&&i.options.enabled&&(t?(n.tooltipDiv.remove(),n.tooltipDiv=null):n.tooltipDiv.fadeOut("slow",(function(){e(this).remove(),n.tooltipDiv=null})))},moveTooltip:function(){var t,i,a,l,s=this,d=s.owner,u=0,c=0,p=s.element,f=n.getOffset(p),v=e(window),_=s.tooltipDiv.find(".k-callout"),m=o(s.tooltipDiv),h=r(s.tooltipDiv);s.type?(t=d.wrapper.find(E),f=n.getOffset(t.eq(0)),i=n.getOffset(t.eq(1)),d._isHorizontal?(u=i.top,c=f.left+(i.left-f.left)/2):(u=f.top+(i.top-f.top)/2,c=i.left),l=o(t.eq(0))+16):(u=f.top,c=f.left,l=o(p)+16),d._isHorizontal?(c-=parseInt((m-d._outerSize(p))/2,10),u-=h+8+(_.length?_.height():0)):(u-=parseInt((h-d._outerSize(p))/2,10),c-=m+8+(_.length?_.width():0)),d._isHorizontal?(u+=a=s._flip(u,h,l,r(v)+s._scrollOffset.top),c+=s._fit(c,m,o(v)+s._scrollOffset.left)):(a=s._flip(c,m,l,o(v)+s._scrollOffset.left),u+=s._fit(u,h,r(v)+s._scrollOffset.top),c+=a),a>0&&_&&(_.removeClass(),_.addClass("k-callout k-callout-"+(d._isHorizontal?"n":"w"))),s.tooltipDiv.css({top:u,left:c})},_fit:function(e,t,n){var i=0;return e+t>n&&(i=n-(e+t)),e<0&&(i=-e),i},_flip:function(e,t,n,i){var a=0;return e+t>i&&(a+=-(n+t)),e+a<0&&(a+=n+t),a},constrainValue:function(e,t,n,i){var a=this;return t<e&&e<n?a.owner._getValueFromPosition(e,a.draggableArea):i?a.options.max:a.options.min}},n.ui.plugin(U);var X=M.extend({init:function(n,i){var a=this,o=e(n).find("input"),r=o.eq(0)[0],s=o.eq(1)[0];r.type="text",s.type="text",i&&i.showButtons&&(window.console&&window.console.warn("showbuttons option is not supported for the range slider, ignoring"),i.showButtons=!1),(i=l({},{selectionStart:L(r,"value"),min:L(r,"min"),max:L(r,"max"),smallStep:L(r,"step")},{selectionEnd:L(s,"value"),min:L(s,"min"),max:L(s,"max"),smallStep:L(s,"step")},i))&&i.enabled===t&&(i.enabled=!o.is("[disabled]")),M.fn.init.call(a,n,i),Z((i=a.options).selectionStart)&&null!==i.selectionStart||(i.selectionStart=i.min,o.eq(0).prop("value",W(i.min))),Z(i.selectionEnd)&&null!==i.selectionEnd||(i.selectionEnd=i.max,o.eq(1).prop("value",W(i.max)));var d=a.wrapper.find(E);this._selection=new X.Selection(d,a,i),a._firstHandleDrag=new U.Drag(d.eq(0),"firstHandle",a,i),a._lastHandleDrag=new U.Drag(d.eq(1),"lastHandle",a,i),a._refreshAriaAttr(i.selectionStart,i.selectionEnd)},options:{name:"RangeSlider",leftDragHandleTitle:"drag",rightDragHandleTitle:"drag",tooltip:{format:"{0:#,#.##}"},selectionStart:null,selectionEnd:null},enable:function(t){var i,a=this,o=a.options;a.disable(),!1!==t&&(a.wrapper.removeClass(A),a.wrapper.find("input").prop(C,!1),i=function(t){var n=F(t)[0];if(n){var i,r,l,s=a._isHorizontal?n.location.pageX:n.location.pageY,d=a._getDraggableArea(),u=a._getValueFromPosition(s,d),c=e(t.target);if(c.hasClass("k-draghandle"))return a.wrapper.find(".k-focus").removeClass("k-focus k-selected"),void c.addClass("k-focus k-selected");u<o.selectionStart?(i=u,r=o.selectionEnd,l=a._firstHandleDrag):u>a.selectionEnd?(i=o.selectionStart,r=u,l=a._lastHandleDrag):u-o.selectionStart<=o.selectionEnd-u?(i=u,r=o.selectionEnd,l=a._firstHandleDrag):(i=o.selectionStart,r=u,l=a._lastHandleDrag),l.dragstart(t),a._setValueInRange(i,r),a._focusWithMouse(l.element)}},a.wrapper.find(".k-tick, .k-slider-track").on(k,i).end().on(k,(function(){e(document.documentElement).one("selectstart",n.preventDefault)})).on(S,(function(){a._activeDragHandle&&a._activeDragHandle._end()})),a.wrapper.find(E).attr(R,0).on(w,(function(){a._setTooltipTimeout()})).on(D,(function(e){a._focusWithMouse(e.target),e.preventDefault()})).on(T,a._focus.bind(a)).on(y,a._blur.bind(a)),a.wrapper.find(E).off(x,n.preventDefault).eq(0).on(x,function(e){this._keydown(e,"firstHandle")}.bind(a)).end().eq(1).on(x,function(e){this._keydown(e,"lastHandle")}.bind(a)),a.options.enabled=!0)},disable:function(){var e=this;e.wrapper.addClass(A),e.wrapper.find("input").prop(C,C),e.wrapper.find(".k-tick, .k-slider-track").off(k).off(S),e.wrapper.find(E).attr(R,-1).off(w).off(x).off(D).off(T).off(y),e.options.enabled=!1},_keydown:function(e,t){var n,i,a,o=this,r=o.options.selectionStart,l=o.options.selectionEnd;e.keyCode in o._keyMap&&(o._clearTooltipTimeout(),"firstHandle"==t?(a=o._activeHandleDrag=o._firstHandleDrag,(r=o._keyMap[e.keyCode](r))>l&&(l=r)):(a=o._activeHandleDrag=o._lastHandleDrag,r>(l=o._keyMap[e.keyCode](l))&&(r=l)),o._setValueInRange(B(r),B(l)),n=Math.max(r,o.options.selectionStart),i=Math.min(l,o.options.selectionEnd),a.selectionEnd=Math.max(i,o.options.selectionStart),a.selectionStart=Math.min(n,o.options.selectionEnd),a._updateTooltip(o.value()[o._activeHandle]),e.preventDefault())},_update:function(e,t){var n=this,i=n.value(),a=i[0]!=e||i[1]!=t;n.value([e,t]),a&&n.trigger(_,{values:[e,t],value:[e,t]})},value:function(e){return e&&e.length?this._value(e[0],e[1]):this._value()},_value:function(e,t){var n=this,i=n.options,a=i.selectionStart,o=i.selectionEnd;if(isNaN(e)&&isNaN(t))return[a,o];e=B(e),t=B(t),e>=i.min&&e<=i.max&&t>=i.min&&t<=i.max&&e<=t&&(a==e&&o==t||(n.element.find("input").eq(0).prop("value",W(e)).end().eq(1).prop("value",W(t)),i.selectionStart=e,i.selectionEnd=t,n._refresh(),n._refreshAriaAttr(e,t)))},values:function(e,t){return u(e)?this._value(e[0],e[1]):this._value(e,t)},_refresh:function(){var e=this,t=e.options;e.trigger(b,{values:[t.selectionStart,t.selectionEnd],value:[t.selectionStart,t.selectionEnd]}),t.selectionStart==t.max&&t.selectionEnd==t.max&&e._setZIndex("firstHandle")},_refreshAriaAttr:function(e,t){var n,i=this,a=i.wrapper.find(E),o=i._activeHandleDrag;n=i._getFormattedValue([e,t],o),a.eq(0).attr(q,e),a.eq(1).attr(q,t),a.attr(V,n)},_setValueInRange:function(e,t){var n=this.options;e=c.max(c.min(e,n.max),n.min),t=c.max(c.min(t,n.max),n.min),e==n.max&&t==n.max&&this._setZIndex("firstHandle"),this._update(c.min(e,t),c.max(e,t))},_setZIndex:function(t){this.wrapper.find(E).each((function(n){e(this).css("z-index","firstHandle"==t?1-n:n)}))},_formResetHandler:function(){var e=this,t=e.options;setTimeout((function(){var n=e.element.find("input"),i=n[0].value,a=n[1].value;e.values(""===i||isNaN(i)?t.min:i,""===a||isNaN(a)?t.max:a)}))},destroy:function(){var e=this;M.fn.destroy.call(e),e.wrapper.off(h).find(".k-tick, .k-slider-track").off(h).end().find(E).off(h),e._firstHandleDrag.draggable.destroy(),e._lastHandleDrag.draggable.destroy()}});X.Selection=function(e,t,n){function i(i){var a=(i=i||[])[0]-n.min,o=i[1]-n.min,r=c.ceil(B(a/n.smallStep)),l=c.ceil(B(o/n.smallStep)),s=t._pixelSteps[r],d=t._pixelSteps[l],u=t._isRtl?2:0;e.eq(0).css(t._position,s-u).end().eq(1).css(t._position,d-u),function(e,n){var i,a,o=t._trackDiv.find(".k-slider-selection");i=c.abs(e-n),o[t._sizeFn](i),t._isRtl?(a=c.max(e,n),o.css("right",t._maxSelection-a-1)):(a=c.min(e,n),o.css(t._position,a-1))}(s,d)}i(t.value()),t.bind([_,m,b],(function(e){i(e.values)}))},n.ui.plugin(X)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.slider.js.map
