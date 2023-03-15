/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.resizable.js";var __meta__={id:"splitter",name:"Splitter",category:"web",description:"The Splitter widget provides an easy way to create a dynamic layout of resizable and collapsible panes.",depends:["resizable"]};!function(e,t){var i=window.kendo,n=i.ui,r=i.keys,a=e.extend,s=n.Widget,o=/^\d+(\.\d+)?px$/i,l=/^\d+(\.\d+)?%$/i,p=".kendoSplitter",d="expand",c="collapse",h="contentLoad",u="error",g="layoutChange",f="horizontal",v="vertical",m="click",k="pane",_="k-focus",b="k-pane",z=".k-pane";function y(e){return l.test(e)}function w(e){return o.test(e)||/^\d+$/.test(e)}function x(e){return!y(e)&&!w(e)}function P(e,t){var i=parseInt(e,10);return y(e)&&(i=Math.floor(i*t/100)),i}function C(e,t){return function(i,n){var r=this.element.find(i).data(k);if(1==arguments.length)return r[e];if(r[e]=n,t){var a=this.element.data("kendo"+this.options.name);a.resize(!0)}}}var S=s.extend({init:function(e,t){var n,a=this;s.fn.init.call(a,e,t),a.wrapper=a.element,a.options.orientation&&(n=a.options.orientation.toLowerCase()!=v),a.orientation=n?f:v,a._dimension=n?"width":"height",a._keys={decrease:n?r.LEFT:r.UP,increase:n?r.RIGHT:r.DOWN},a._resizeStep=10,a._marker=i.guid().substring(0,8),a._initPanes(),a.resizing=new E(a),a.element.triggerHandler("init"+p)},events:[d,c,h,u,"resize",g],_addOverlays:function(){this._panes().append("<div class='k-splitter-overlay k-overlay' />")},_removeOverlays:function(){this._panes().children(".k-splitter-overlay").remove()},_attachEvents:function(){var t=this,i=t.options.orientation;t.element.children(".k-splitbar-draggable-"+i).on("keydown"+p,t._keydown.bind(t)).on("mousedown"+p,(function(e){e.currentTarget.focus()})).on("focus"+p,(function(t){e(t.currentTarget).addClass(_)})).on("blur"+p,(function(i){e(i.currentTarget).removeClass(_),t.resizing&&t.resizing.end()})).on("mouseenter"+p,(function(){e(this).addClass("k-splitbar-"+t.orientation+"-hover")})).on("mouseleave"+p,(function(){e(this).removeClass("k-splitbar-"+t.orientation+"-hover")})).on("mousedown"+p,t._addOverlays.bind(t)).end().children(".k-splitbar").on("dblclick"+p,t._togglePane.bind(t)).children(".k-collapse-next, .k-collapse-prev").on(m+p,t._arrowClick(c)).end().children(".k-expand-next, .k-expand-prev").on(m+p,t._arrowClick(d)).end().end(),e(window).on("resize"+p+t._marker,t.resize.bind(t,!1)),e(document).on("mouseup"+p+t._marker,t._removeOverlays.bind(t))},_detachEvents:function(){var t=this;t.element.children(".k-splitbar-draggable-"+t.orientation).off(p).end().children(".k-splitbar").off("dblclick"+p).children(".k-collapse-next, .k-collapse-prev, .k-expand-next, .k-expand-prev").off(p),e(window).off(p+t._marker),e(document).off(p+t._marker)},options:{name:"Splitter",orientation:f,panes:[]},destroy:function(){s.fn.destroy.call(this),this._detachEvents(),this.resizing&&this.resizing.destroy(),i.destroy(this.element),this.wrapper=this.element=null},_keydown:function(t){var i,n=this,a=t.keyCode,s=n.resizing,o=e(t.currentTarget),l=n._keys,p=a===l.increase,h=a===l.decrease;p||h?(t.ctrlKey?(i=o[h?"next":"prev"](),s&&s.isResizing()&&s.end(),i[n._dimension]()?n._triggerAction(c,o[h?"prev":"next"]()):n._triggerAction(d,i)):s&&s.move((h?-1:1)*n._resizeStep,o),t.preventDefault()):a===r.HOME?(i=o.prev(),n.collapse(i),t.preventDefault()):a===r.END?(i=o.prev(),n.expand(i),t.preventDefault()):a===r.ENTER&&s&&(s.end(),t.preventDefault())},_initPanes:function(){var e=this.options.panes||[],t=this;this.element.addClass("k-widget").addClass("k-splitter").children().each((function(i,n){"script"!=n.nodeName.toLowerCase()&&t._initPane(n,e[i])})),this.resize()},_initPane:function(t,i){(t=e(t).attr("role","group").addClass(b)).data(k,i||{}).toggleClass("k-scrollable",!i||!1!==i.scrollable),this.ajaxRequest(t)},ajaxRequest:function(e,t,n){var r,a=this;r=(e=a.element.find(e)).data(k),(t=t||r.contentUrl)&&(e.append("<span class='k-icon k-i-loading k-pane-loading' />"),i.isLocalUrl(t)?jQuery.ajax({url:t,data:n||{},type:"GET",dataType:"html",success:function(t){a.angular("cleanup",(function(){return{elements:e.get()}})),e.html(t),a.angular("compile",(function(){return{elements:e.get()}})),a.trigger(h,{pane:e[0]})},error:function(t,i){a.trigger(u,{pane:e[0],status:i,xhr:t})}}):e.removeClass("k-scrollable").html("<iframe src='"+t+"' frameborder='0' class='k-content-frame'>This page requires frames in order to show content</iframe>"))},_triggerAction:function(e,t){var i=t.data(k),n=i.collapsed&&e==d||!i.collapsed&&e==c;i.collapsible&&n&&!this.trigger(e,{pane:t[0]})&&this[e](t[0])},_togglePane:function(t){var i,n=this,r=e(t.target);r.closest(".k-splitter")[0]==n.element[0]&&1===(i=r.children(".k-icon:not(.k-resize-handle)")).length&&(i.is(".k-collapse-prev")?n._triggerAction(c,r.prev()):i.is(".k-collapse-next")?n._triggerAction(c,r.next()):i.is(".k-expand-prev")?n._triggerAction(d,r.prev()):i.is(".k-expand-next")&&n._triggerAction(d,r.next()))},_arrowClick:function(t){var i=this;return function(n){var r,a=e(n.target);a.closest(".k-splitter")[0]==i.element[0]&&(r=a.is(".k-"+t+"-prev")?a.parent().prev():a.parent().next(),i._triggerAction(t,r))}},_updateSplitBar:function(e,t,n,r){var a=function(e,t){return t?"<div class='k-icon "+e+"'></div>":""},s=this.orientation,o=!1!==t.resizable&&!1!==n.resizable,l=t.collapsible,p=t.collapsed,d=n.collapsible,c=n.collapsed,h=r.attr("id");h||(h=i.guid(),r.attr("id",h)),e.addClass("k-splitbar k-splitbar-"+s).attr("role","separator").attr("aria-valuemin","0").attr("aria-valuemax","100").attr("aria-controls",h).removeClass("k-splitbar-"+s+"-hover").toggleClass("k-splitbar-draggable-"+s,o&&!p&&!c).toggleClass("k-splitbar-static-"+s,!o&&!l&&!d).html(a("k-collapse-prev k-i-arrow-60-up",l&&!p&&!c&&s==v)+a("k-collapse-prev k-i-arrow-60-left",l&&!p&&!c&&s==f)+a("k-expand-prev k-i-arrow-60-down",l&&p&&!c&&s==v)+a("k-expand-prev k-i-arrow-60-right",l&&p&&!c&&s==f)+a("k-resize-handle k-i-hbar",o&&s==v)+a("k-resize-handle k-i-vbar",o&&s==f)+a("k-collapse-next k-i-arrow-60-down",d&&!c&&!p&&s==v)+a("k-collapse-next k-i-arrow-60-right",d&&!c&&!p&&s==f)+a("k-expand-next k-i-arrow-60-up",d&&c&&!p&&s==v)+a("k-expand-next k-i-arrow-60-left",d&&c&&!p&&s==f)),t.labelId?e.attr("aria-labelledby",t.labelId):t.label&&e.attr("aria-label",t.label),s==f&&e.attr("aria-orientation",v),o||l||d||e.removeAttr("tabindex")},_updateSplitBars:function(){var t=this;this.element.children(".k-splitbar").each((function(){var i=e(this),n=i.prevAll(z).first(),r=n.data(k),a=i.nextAll(z).first().data(k);a&&t._updateSplitBar(i,r,a,n)}))},_removeSplitBars:function(){this.element.children(".k-splitbar").remove()},_panes:function(){return this.element?this.element.children(z):e()},_resetAriaValueNow:function(e,t){var i,n,r;for(i=0;i<e.length;i++)r=t[i]+t[i+1]||1,n=Math.round(t[i]/r*100),e[i].setAttribute("aria-valuenow",n)},_resize:function(){var t=this,n=t.element,r=n.children(z),a=t.orientation==f,s=n.children(".k-splitbar"),o=s.length,l=a?"width":"height",p=n[l](),d=[];t.wrapper.addClass("k-splitter-resizing"),0===o?(o=r.length-1,r.slice(0,o).after("<div tabindex='0' class='k-splitbar' data-marker='"+t._marker+"' />"),t._updateSplitBars(),s=n.children(".k-splitbar")):t._updateSplitBars(),s.each((function(){p-=this[a?"offsetWidth":"offsetHeight"]}));var c=0,h=e();r.css({position:"absolute",top:0})[l]((function(){var t,i=e(this),n=i.data(k)||{};if(i.removeClass("k-collapsed"),n.collapsed)t=n.collapsedSize?P(n.collapsedSize,p):0,i.css("overflow","hidden").addClass("k-collapsed");else{if(x(n.size))return h=h.add(this),void d.push(!1);t=P(n.size,p)}return c+=t,d.push(t),t})),p-=c;var u=h.length,v=Math.floor(p/u);h.slice(0,u-1).css(l,v).end().eq(u-1).css(l,p-(u-1)*v),d.forEach((function(e,t){!1===e&&(d[t]=v)})),t._resetAriaValueNow(s,d);var m=0,_=a?"height":"width",b=a?"left":"top",y=a?"offsetWidth":"offsetHeight";if(0===u){var w=r.filter((function(){return!(e(this).data(k)||{}).collapsed})).last();w[l](p+w[0][y])}n.children().css(_,n[_]()).each((function(e,t){"script"!=t.tagName.toLowerCase()&&(t.style[b]=Math.floor(m)+"px",m+=t[y])})),t._detachEvents(),t._attachEvents(),t.wrapper.removeClass("k-splitter-resizing"),i.resize(r),t.trigger(g)},toggle:function(e,i){var n,r=this;n=(e=r.element.find(e)).data(k),(i||n.collapsible)&&(1==arguments.length&&(i=n.collapsed!==t&&n.collapsed),n.collapsed=!i,n.collapsed?e.css("overflow","hidden"):e.css("overflow",""),r.resize(!0))},collapse:function(e){this.toggle(e,!1)},expand:function(e){this.toggle(e,!0)},_addPane:function(e,t,i){var n=this;return i.length&&(n.options.panes.splice(t,0,e),n._initPane(i,e),n._removeSplitBars(),n.resize(!0)),i},append:function(t){t=t||{};var i=this,n=e("<div />").appendTo(i.element);return i._addPane(t,i.options.panes.length,n)},insertBefore:function(t,i){i=e(i),t=t||{};var n=this.wrapper.children(".k-pane").index(i),r=e("<div />").insertBefore(e(i));return this._addPane(t,n,r)},insertAfter:function(t,i){i=e(i),t=t||{};var n=this.wrapper.children(".k-pane").index(i),r=e("<div />").insertAfter(e(i));return this._addPane(t,n+1,r)},remove:function(t){var n=this;return(t=n.wrapper.find(t)).length&&(i.destroy(t),t.each((function(t,i){n.options.panes.splice(n.wrapper.children(".k-pane").index(i),1),e(i).remove()})),n._removeSplitBars(),n.options.panes.length&&n.resize(!0)),n},size:C("size",!0),min:C("min"),max:C("max")});n.plugin(S);var A={sizingProperty:"height",sizingDomProperty:"offsetHeight",alternateSizingProperty:"width",positioningProperty:"top",mousePositioningProperty:"pageY"},T={sizingProperty:"width",sizingDomProperty:"offsetWidth",alternateSizingProperty:"height",positioningProperty:"left",mousePositioningProperty:"pageX"};function E(e){var t=this,n=e.orientation;t.owner=e,t._element=e.element,t.orientation=n,a(t,n===f?T:A),t._resizable=new i.ui.Resizable(e.element,{orientation:n,handle:".k-splitbar-draggable-"+n+"[data-marker="+e._marker+"]",hint:t._createHint.bind(t),start:t._start.bind(t),max:t._max.bind(t),min:t._min.bind(t),invalidClass:"k-restricted-size-"+n,resizeend:t._stop.bind(t)})}E.prototype={press:function(e){this._resizable.press(e)},move:function(e,t){this.pressed||(this.press(t),this.pressed=!0),this._resizable.target||this._resizable.press(t),this._resizable.move(e)},end:function(){this._resizable.end(),this.pressed=!1},destroy:function(){this._resizable.destroy(),this._resizable=this._element=this.owner=null},isResizing:function(){return this._resizable.resizing},_createHint:function(t){var i=this;return e("<div class='k-ghost-splitbar k-ghost-splitbar-"+i.orientation+"' />").css(i.alternateSizingProperty,t[i.alternateSizingProperty]())},_start:function(t){var i=this,n=e(t.currentTarget),r=n.prev(),a=n.next(),s=r.data(k),o=a.data(k),l=parseInt(r[0].style[i.positioningProperty],10),p=parseInt(a[0].style[i.positioningProperty],10)+a[0][i.sizingDomProperty]-n[0][i.sizingDomProperty],d=parseInt(i._element.css(i.sizingProperty),10),c=function(e){var t=parseInt(e,10);return(w(e)?t:d*t/100)||0},h=c(s.min),u=c(s.max)||p-l,g=c(o.min),f=c(o.max)||p-l;i.previousPane=r,i.nextPane=a,i._maxPosition=Math.min(p-g,l+u),i._minPosition=Math.max(l+h,p-f)},_max:function(){return this._maxPosition},_min:function(){return this._minPosition},_stop:function(t){var n=this,r=e(t.currentTarget),a=n.owner;if(a._panes().children(".k-splitter-overlay").remove(),t.keyCode!==i.keys.ESC){var s=t.position,o=r.prev(),l=r.next(),p=o.data(k),d=l.data(k),c=s-parseInt(o[0].style[n.positioningProperty],10),h=parseInt(l[0].style[n.positioningProperty],10)+l[0][n.sizingDomProperty]-s-r[0][n.sizingDomProperty],u=n._element.children(z).filter((function(){return x(e(this).data(k).size)})).length;(!x(p.size)||u>1)&&(x(p.size)&&u--,p.size=c+"px"),(!x(d.size)||u>1)&&(d.size=h+"px"),a.resize(!0)}return!1}}}(window.kendo.jQuery);
//# sourceMappingURL=kendo.splitter.js.map
