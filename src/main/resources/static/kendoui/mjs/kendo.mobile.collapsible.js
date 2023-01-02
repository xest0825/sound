/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";var __meta__={id:"mobile.collapsible",name:"Collapsible",category:"mobile",description:"The Kendo mobile Collapsible widget provides ability for creating collapsible blocks of content.",depends:["core","userevents"]};!function(e,t){var i=window.kendo,n=i.mobile.ui,s=n.Widget,o="km-collapsed",a="km-expanded",l="km-animated",d="expand",c="collapse",h=s.extend({init:function(t,n){var d=this,c=e(t);s.fn.init.call(d,c,n),c.addClass("km-collapsible"),d._buildHeader(),d.content=c.children().not(d.header).wrapAll("<div data-role='collapsible-content' class='km-collapsible-content'></div>").parent(),d._userEvents=new i.UserEvents(d.header,{fastTap:!0,tap:function(){d.toggle()}}),c.addClass(d.options.collapsed?o:a),d.options.inset&&c.addClass("km-collapsibleinset"),d.options.animation?(d.content.addClass(l),d.content.height(0),d.options.collapsed&&d.content.hide()):d.options.collapsed&&d.content.hide()},events:[d,c],options:{name:"Collapsible",collapsed:!0,collapseIcon:"arrow-n",expandIcon:"arrow-s",iconPosition:"left",animation:!0,inset:!1},destroy:function(){s.fn.destroy.call(this),this._userEvents.destroy()},expand:function(e){var t=this.options.collapseIcon,n=this.content,s=i.support.mobileOS.ios;this.trigger(d)||(t&&this.header.find(".km-icon").removeClass().addClass("km-icon km-"+t),this.element.removeClass(o).addClass(a),this.options.animation&&!e?(n.off("transitionend"),n.show(),s&&n.removeClass(l),n.height(this._getContentHeight()),s&&n.addClass(l),i.resize(n)):n.show())},collapse:function(e){var t=this.options.expandIcon,i=this.content;this.trigger(c)||(t&&this.header.find(".km-icon").removeClass().addClass("km-icon km-"+t),this.element.removeClass(a).addClass(o),this.options.animation&&!e?(i.one("transitionend",(function(){i.hide()})),i.height(0)):i.hide())},toggle:function(e){this.isCollapsed()?this.expand(e):this.collapse(e)},isCollapsed:function(){return this.element.hasClass(o)},resize:function(){!this.isCollapsed()&&this.options.animation&&this.content.height(this._getContentHeight())},_buildHeader:function(){var t=this.element.children(":header").wrapAll("<div data-role='collapsible-header' class='km-collapsible-header'></div>"),i=e('<span class="km-icon"/>'),n=this.options.collapsed?this.options.expandIcon:this.options.collapseIcon,s=this.options.iconPosition;n&&(t.prepend(i),i.addClass("km-"+n)),this.header=t.parent(),this.header.addClass("km-icon-"+s)},_getContentHeight:function(){var e,t=this.content.attr("style");return this.content.css({position:"absolute",visibility:"hidden",height:"auto"}),e=this.content.height(),this.content.attr("style",t||""),e}});n.plugin(h)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.mobile.collapsible.js.map
