/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.dom.js";var __meta__={id:"rating",name:"Rating",category:"web",description:"The Rating component.",depends:["core"]};!function(e,t){var n=window.kendo,a=n.ui,i=".kendoRating",l=a.Widget,o=e.extend,s=n.keys,r=n.parseFloat,p="change",d="select",c="selected",u="hovered",m="disabled",v="readonly",h="aria-label",f="aria-labelledby",_="aria-valuenow",g="aria-disabled",b="aria-readonly",y="k-rating-precision-part",k="k-rating-precision-complement",w=.5,T="k-rating-item",x="k-focus",C="tabindex",R=".",I="min",M="max",E="single",S="continuous",F="item",P="half",V={item:"itemTemplate",hovered:"hoveredTemplate",selected:"selectedTemplate"},N={selected:"k-selected",hovered:"k-hover",hoveredPrecise:"k-hover-precise"},W="part-value",D="data-value",L="value",A="title",O={widget:"k-rating k-widget",container:"k-rating-container",item:"k-rating-item",icon:"k-icon k-i-star-outline",iconSelected:"k-icon k-i-star",label:"k-rating-label",disabled:"k-disabled",readonly:"k-state-readonly",active:"k-active",hidden:"k-hidden"},q=n.template('<span class="#:styles.widget#"></span>'),U=n.template('<span class="#:styles.container#"></span>'),j=n.template('<span class="#:styles.label#"></span>'),H=n.template("<span>#:value# / #:maxValue#</span>"),G=n.template('<span class="#:styles.item#" data-value="#:value#"></span>'),z=n.template('<span class="#:icon#"></span>'),B=l.extend({init:function(e,t){var a=this;l.fn.init.call(a,e,t),a.options=o({},a.options,t),a._element(),a._wrapper(),a._aria(),a._initSettings(),a._renderItems(),a._renderTooltip(),a._renderLabel(),a._selectInitial(),a._attachEvents(),n.notify(this)},events:[d,p],options:{name:"Rating",messages:{},min:1,max:5,selection:S,precision:F,tooltip:!0,label:!0,readonly:!1,enabled:!0,selectValueOnFocus:null,itemTemplate:null,selectedTemplate:null,hoveredTemplate:null},_element:function(){this.element.addClass(O.hidden)},_wrapper:function(){var t=this;t.wrapper=e(q({styles:O})),t.wrapper=t.element.wrap(t.wrapper).parent(),t.wrapper.addClass(t.element[0].className.replace(O.hidden,"")).append(e(U({styles:O}))),t.wrapper[0].style.cssText=t.element[0].style.cssText,t.container=t.wrapper.find(R+O.container)},_aria:function(){var t=this,a=t.wrapper,i=t.element,l=i.attr("id"),o=e('label[for="'+l+'"]'),s=i.attr(h),p=i.attr(f),d=r(t.element.attr(I))||t.options.min,c=r(t.element.attr(M))||t.options.max;if(t.wrapper.attr(C,0).attr("role","slider").attr("aria-valuemin",d).attr("aria-valuemax",c).attr(_,t.options.value||(d+c)/2),s)a.attr(h,s);else if(p)a.attr(f,p);else if(o.length){var u=o.attr("id");u||(u=(l||n.guid())+"_label",o.attr("id",u)),a.attr(f,u)}},_initSettings:function(){var e=this,t=e.options.precision!=F,n=e.options;n.value=r(n.value),null===n.value&&(n.value=r(e.element.val())),n.min=r(e.element.attr(I))||e.options.min,n.max=r(e.element.attr(M))||e.options.max,e._valueMin=t?e.options.min-w:e.options.min,n.enabled=n.enabled&&!e.element.attr(m),n.readonly=n.readonly||!!e.element.attr(v),e._setState()},_renderItems:function(){for(var t=this,a=t.container,i=t.options.min,l=t.options.max,o=t.options.itemTemplate?n.template(t.options.itemTemplate):z,s=i;s<=l;s+=1){var r=e(G({styles:O,value:s}));r.append(o({icon:O.icon,index:s})),a.append(r)}},_renderTooltip:function(){var t=this.container.find(R+T);if(!0===this.options.tooltip)for(var n=0;n<t.length;n+=1)e(t[n]).attr(A,e(t[n]).data(L));else t.removeAttr(A)},_renderLabel:function(){var a=this,i=a.wrapper.find(R+O.label),l=!0===a.options.label||a.options.label.template!==t,o=a.options.label&&a.options.label.template?n.template(a.options.label.template):H;if(!l||null===a.value())return i.remove(),void(a.label=null);i.length||(a.label=i=e(j({styles:O})),a.wrapper.append(i)),i.html(o({styles:O,value:a.value()%1==0?a.value():a._format(a.value()),maxValue:a.options.max}))},_selectInitial:function(){var e=this;isNaN(e.options.value)||e.value(e.options.value)},_attachEvents:function(){var e=this,t=e.options.precision==P;e.wrapper.on("focus.kendoRating",e._focus.bind(e)).on("blur.kendoRating",e._blur.bind(e)).on("keydown.kendoRating",e._keydown.bind(e)),e.container.on("click.kendoRating",R+T,e._click.bind(e)).on("mouseenter.kendoRating",R+T,e._mouseenter.bind(e)).on("mouseleave.kendoRating",R+T,e._mouseleave.bind(e)).on("mousedown.kendoRating",e._mousedown.bind(e)),t&&e.container.on("mousemove.kendoRating",R+T,e._mousemove.bind(e))},_focus:function(){var e,t,n,a=this,i=a.container,l=a.wrapper,o=a.container.find(".k-focus"),s=a.options.selectValueOnFocus,r=i.children().first();!a.options.enabled||a.options.readonly||a.preventFocus?a.options.readonly&&a.wrapper.addClass(x):(l.addClass(x),o.removeClass(x),null===a.value()&&null!==s&&a.value(s),e=i.find(R+N.selected).last(),t=i.find(R+N.hovered).last(),(n=(n=e.length?e:t).length?n:r).addClass(x))},_blur:function(){var e=this;e.preventFocus=!1,e.wrapper.removeClass(x),e.container.find(".k-focus").removeClass(x),e.element.trigger("blur")},_mousedown:function(){this.preventFocus=!0},_keydown:function(t){var a,i,l,o,r=this,p=r.container,d=r.parsedValue,c=r.options.precision!=F?w:1,u=p.find(R+T),m=p.find(".k-focus"),v=u.index(m),h=n.support.isRtl(r.wrapper),f=isNaN(d),_=t.keyCode;r.options.enabled&&!r.options.readonly&&(a=_===s.RIGHT&&h||_===s.LEFT&&!h,i=_===s.LEFT&&h||_===s.RIGHT&&!h,a||_===s.DOWN?(l=f?u.eq(0):e(u[v-1]),o=f?r._valueMin:d-c,r._select(l,o),t.preventDefault()):i||_===s.UP?(l=f?u.eq(0):e(u[v+1]),o=f?r._valueMin:d+c,r._select(l,o),t.preventDefault()):_===s.HOME?(l=u.eq(0),r._select(l,r._valueMin),t.preventDefault()):_===s.END&&(l=u.eq(u.length-1),r._select(l),t.preventDefault()))},_getTemplateType:function(e){return this.options[e]?n.template(this.options[e]):z},_renderTemplate:function(t,n){var a=this._getTemplateType(n),i=O.icon;n!=V.selected&&n!=V.hovered||(i=O.iconSelected);for(var l=0;l<t.length;l+=1)e(t[l]).html(a({icon:i,index:e(t[l]).index()}))},_updateItemTemplates:function(e,t){var n=this,a=E==n.options.selection,i=n.options.precision==P,l=n.container.find(R+N.selected),o=a?t:t.prevAll().addBack(),s=a?l:t.nextAll(),r=V[e],p=N[e];s.removeClass(p),o.addClass(p),n._renderTemplate(o,r),(!a||a&&e==c&&o.get(0)!=l.get(0))&&n._renderTemplate(s,V.item),i&&n._renderTemplate(t,V.item)},_change:function(e,t){var n=this,a=n.value();n.value(t),n.trigger(p,{target:e,oldValue:a,newValue:n.value()})},_click:function(t){var n=this,a=e(t.target).closest(R+T),i=a.attr(D);n.options.enabled&&!n.options.readonly&&(a.data(W)&&(i=a.data(W)),n._select(a,i))},_select:function(e,t){var n=this,a=isNaN(t)?e.attr(D):t;a==n.value()||a<n._valueMin||a>n.options.max||(n.trigger(d,{target:e}),n._change(e,a),n._focus())},_mouseenter:function(t){var n=this,a=e(t.target),i=a.closest(R+T);n.options.enabled&&!n.options.readonly&&(n.enableMove=!0,a.is(R+T)&&n._updateItemTemplates(u,i))},_mouseleave:function(t){var n,a,i=this,l=i.options.selection,o=i.options.precision==P,s=l==E,r=e(t.target).closest(R+T),p=i.container.find(R+T);i.enableMove=!1;var d=function(e){n=i.parsedValue%1!=0&&e.is(i.container.find("[data-value="+Math.ceil(i.parsedValue)+"]")),a=!e.hasClass(N.selected)&&!e.hasClass(N.hovered)||n?V.item:V.selected,i._renderTemplate(e,a),o&&n&&e.hasClass(N.selected)&&i._togglePrecisionElements(e,c)};if(p.removeClass(N.hovered),s)d(r);else for(var u=0;u<p.length;u+=1){d(e(p[u]))}},_mousemove:function(t){var n,a,i,l=this,o=e(t.target).closest(R+T);l.enableMove&&(o.length&&(n=t.clientX,a=o.offset().left,i=Math.abs(n-a),l._togglePrecisionElements(o,u),l._updatePrecisionElements(o,i)),t.preventDefault())},_togglePrecisionElements:function(t,n){var a,i,l=this,o=t.find(R+y),s=l._getTemplateType(V[n]);o.length?o.html(s({icon:O.iconSelected})):(a=l.parsedValue%1!=0,i=l._getItemWidth(t),(o=e("<span></span>").addClass(y)).append(s({icon:O.iconSelected})),o.width(a?i/2:i),t.append(o),t.append(e("<span></span>").css({width:i,height:i,display:"block"})),l._createUpdatePrecisionComplement(t,a))},_createUpdatePrecisionComplement:function(t,a){var i=t.find(R+k),l=t.children().first(),o=n.support.isRtl(this.wrapper),s=o?"right":"left";i.length||(i=l.wrap(e("<span></span>").addClass(k)).parent()),i.width(a?this._getItemWidth(t)/2:0),i.css(s,a||o?"50%":0)},_calculateItemWidthFromStyles:function(e){if(e)return r(e.find(".k-icon").css("font-size"))},_getItemWidth:function(e){if(e)return e.width()||this._calculateItemWidthFromStyles(e)||0},_updatePrecisionElements:function(e,t){var a=e.find(R+y),i=n.parseFloat(e.data(L)),l=n.support.isRtl(this.wrapper),o=e.width(),s=o/2,p=r(e.outerWidth()/2),d=l?t>p:t<p;e.length&&a.length&&(a.width(d?s:o),this.options.tooltip&&e.attr(A,d?this._format(i-w):i),e.data(W,d?i-w:i),this._createUpdatePrecisionComplement(e,d))},_updateElement:function(e){var t=this,n=null===e?"":e,a=r(t.element.attr(I))||t.options.min,i=r(t.element.attr(M))||t.options.max;t.element.val(t._format(n)),t.wrapper.attr(_,t._format(e)||(a+i)/2)},_updateItemsRendering:function(e){var t=this,n=t.options.precision==P,a=null===e?"item":c,i=null===e?t.container.find(R+N.selected).last():t.container.find(R+T+"[data-value='"+Math.ceil(e)+"']");null===e&&t.container.find(R+T).removeClass(N.selected),t._updateItemTemplates(a,i),n&&null!==e&&t._togglePrecisionElements(i,c),t._renderLabel()},_setState:function(){var e=this,t=e.element,n=e.wrapper,a=e.options.readonly,i=e.options.enabled;a&&i?(t.attr(v,v),n.attr(b,!0)):(t.prop(v,!1),n.removeAttr(b)),i?(t.prop(m,!1),n.removeAttr(g),n.attr(C,0)):(t.attr(m,m),n.attr(g,!0),n.removeAttr(C)),n.toggleClass(O.disabled,!i),n.toggleClass(O.readonly,a&&i)},_format:function(e){return n.toString(e,"n1",n.getCulture().name)},value:function(e){var t=this,n=t.options.precision==P;return null===e?(t._updateElement(e),void t._updateItemsRendering(e)):null===(e=r(e))?e=r(t.element.val()):(e=Math.max(t._valueMin,Math.min(e,t.options.max)),t.parsedValue=n?r(t._format(Math.ceil(2*e)/2)):Math.round(e),t._updateElement(e),void t._updateItemsRendering(e))},reset:function(){this.value(null)},enable:function(e){var t=this;void 0===e&&(e=!0),t.options.enabled=e,t.options.readonly=!1,t._setState()},readonly:function(e){var t=this;void 0===e&&(e=!0),t.options.readonly=e,t.options.enabled=!0,t._setState()},setOptions:function(n){var a=this;a.options=e.extend(a.options,n),n.enabled!==t&&a.enable(n.enabled),n.readonly!==t&&a.readonly(n.readonly),n.label!==t&&a._renderLabel(),n.tooltip!==t&&a._renderTooltip(),n.value!==t&&a.value(n.value),(n.min||n.max!==t||n.itemTemplate!==t||n.selectedTemplate!==t||n.hoveredTemplate!==t)&&(a.container.empty(),a._renderItems(),a._renderLabel(),a._renderTooltip(),a._selectInitial())},destroy:function(){var e=this;e.wrapper.off(i),e.container.off(i),l.fn.destroy.call(e)}});a.plugin(B)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.rating.js.map
