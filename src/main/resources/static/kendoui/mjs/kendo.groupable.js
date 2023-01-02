/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.draganddrop.js";var __meta__={id:"groupable",name:"Groupable",category:"framework",depends:["core","draganddrop"],advanced:!0};!function(t,e){var r=window.kendo,a=r.ui.Widget,n=r._outerWidth,i=r.attr,o=t.extend,d=t.each,s=!1,l="asc",g="group-sort",c=".kendoGroupable",u=r.template('<div class="k-group-indicator" data-#=data.ns#field="${data.field}" ${data.id ? ("data-" + data.ns + "id="+data.id) : ""} data-#=data.ns#title="${data.title || ""}" data-#=data.ns#dir="${data.dir || "asc"}"><a role="button" title="(sorted ${(data.dir || "asc") == "asc" ? "ascending": "descending"})" href="\\#" class="k-link"><span class="k-icon k-i-sort-${(data.dir || "asc") == "asc" ? "asc-sm" : "desc-sm"}" title="(sorted ${(data.dir || "asc") == "asc" ? "ascending": "descending"})"></span>${data.title ? data.title: data.field}</a><a href="\\#" role="button" data-role="button" aria-label="Remove grouping by ${data.title || data.field} field" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button"><span class="k-button-icon k-icon k-i-close"></span></a></div>',{useWithBlock:!1}),p=function(e){var a=e.attr(r.attr("title"));return a&&(a=r.htmlEncode(a)),t('<div class="k-group-clue k-drag-clue" />').html(a||e.attr(r.attr("field"))).prepend('<span class="k-icon k-drag-status k-i-cancel"></span>')},f=t('<div class="k-grouping-dropclue"/>'),h=a.extend({init:function(e,d){var u,h,m=this,v=r.guid(),b=m._intializePositions.bind(m),k=m._dropCuePositions=[];a.fn.init.call(m,e,d),s=r.support.isRtl(e),h=s?"right":"left",m.draggable=u=m.options.draggable||new r.ui.Draggable(m.element,{filter:m.options.draggableElements,hint:p,group:v}),m.groupContainer=t(m.options.groupContainer,m.element).kendoDropTarget({group:u.options.group,dragenter:function(t){m._canDrag(t.draggable.currentTarget)&&(t.draggable.hint.find(".k-drag-status").removeClass("k-i-cancel").addClass("k-i-plus"),f.css(h,0).appendTo(m.groupContainer))},dragleave:function(t){t.draggable.hint.find(".k-drag-status").removeClass("k-i-plus").addClass("k-i-cancel"),f.remove()},drop:function(e){var a,n=e.draggable.currentTarget,i=n.attr(r.attr("field")),d=n.attr(r.attr("title")),l=n.attr("id"),c=m.indicator(i),u=m._dropCuePositions,p=u[u.length-1],h=o({},m.options.sort,n.data(g)),v=h.dir;(n.hasClass("k-group-indicator")||m._canDrag(n))&&(p?(a=m._dropCuePosition(r.getOffset(f).left+parseInt(p.element.css("marginLeft"),10)*(s?-1:1)+parseInt(p.element.css("marginRight"),10)))&&m._canDrop(t(c),a.element,a.left)&&(a.before?a.element.before(c||m.buildIndicator(i,d,v,l)):a.element.after(c||m.buildIndicator(i,d,v,l)),m._setIndicatorSortOptions(i,h),m._change()):(m.groupContainer.empty(),m.groupContainer.append(m.buildIndicator(i,d,v,l)),m._setIndicatorSortOptions(i,h),m._change()))}}).kendoDraggable({filter:"div.k-group-indicator",hint:p,group:u.options.group,dragcancel:m._dragCancel.bind(m),dragstart:function(t){var e=t.currentTarget,r=parseInt(e.css("marginLeft"),10),a=e.position(),i=s?a.left-r:a.left+n(e);b(),f.css("left",i).appendTo(m.groupContainer),this.hint.find(".k-drag-status").removeClass("k-i-cancel").addClass("k-i-plus")},dragend:function(){m._dragEnd(this)},drag:m._drag.bind(m)}).on("click"+c,".k-button",(function(e){e.preventDefault(),m._removeIndicator(t(this).parent())})).on("click"+c,".k-link",(function(e){var r=t(this).parent(),a=r.attr(i("dir"))===l?"desc":l;r.attr(i("dir"),a),m._change(),e.preventDefault()})),u.bind(["dragend","dragcancel","dragstart","drag"],{dragend:function(){m._dragEnd(this)},dragcancel:m._dragCancel.bind(m),dragstart:function(t){var e,r;m.options.allowDrag||m._canDrag(t.currentTarget)?(b(),k.length&&(e=k[k.length-1].element,r=parseInt(e.css("marginRight"),10),e.position().left,n(e))):t.preventDefault()},drag:m._drag.bind(m)}),m.dataSource=m.options.dataSource,m.dataSource&&m._refreshHandler?m.dataSource.unbind("change",m._refreshHandler):m._refreshHandler=m.refresh.bind(m),m.dataSource&&(m.dataSource.bind("change",m._refreshHandler),m.refresh())},refresh:function(){var e,r=this,a=r.dataSource.group()||[],n=i("field"),s=i("title");r.groupContainer&&(r.groupContainer.empty(),d(a,(function(a,i){var d=i.field,l=i.dir,g=r.element.find(r.options.filter).filter((function(){return t(this).attr(n)===d}));e=r.buildIndicator(d,g.attr(s),l,g.attr("id")),r.groupContainer.append(e),r._setIndicatorSortOptions(d,o({},r.options.sort,{dir:l,compare:i.compare}))}))),r._invalidateGroupContainer()},destroy:function(){var t=this;a.fn.destroy.call(t),t.groupContainer.off(c),t.groupContainer.data("kendoDropTarget")&&t.groupContainer.data("kendoDropTarget").destroy(),t.groupContainer.data("kendoDraggable")&&t.groupContainer.data("kendoDraggable").destroy(),t.options.draggable||t.draggable.destroy(),t.dataSource&&t._refreshHandler&&(t.dataSource.unbind("change",t._refreshHandler),t._refreshHandler=null),t.groupContainer=t.element=t.draggable=null},events:["change","removeGroup"],options:{name:"Groupable",filter:"th",draggableElements:"th",messages:{empty:"Drag a column header and drop it here to group by that column"},sort:{dir:l,compare:null}},indicator:function(e){var a=t(".k-group-indicator",this.groupContainer);return t.grep(a,(function(a){return t(a).attr(r.attr("field"))===e}))[0]},buildIndicator:function(t,e,a,n){return u({ns:r.ns,field:t.replace(/"/g,"'"),title:e,id:n,dir:a||(this.options.sort||{}).dir||l})},_setIndicatorSortOptions:function(e,r){t(this.indicator(e)).data(g,r)},aggregates:function(){var e,a,n;return this.element.find(this.options.filter).map((function(){var i=t(this),o=i.attr(r.attr("aggregates")),d=i.attr(r.attr("field"));if(o&&""!==o)for(e=o.split(","),o=[],a=0,n=e.length;a<n;a++)o.push({field:d,aggregate:e[a]});return o})).toArray()},descriptors:function(){var e,a=this,n=t(".k-group-indicator",a.groupContainer),i=a.aggregates();return t.map(n,(function(n){n=t(n),e=n.attr(r.attr("field"));var o=a.options.sort||{},d=n.data(g)||{};return{field:e,dir:n.attr(r.attr("dir")),aggregates:i||[],colID:n.attr(r.attr("id")),compare:d.compare||o.compare}}))},_removeIndicator:function(t){var e=this;e.trigger("removeGroup",{field:t.attr(r.attr("field")),colID:t.attr(r.attr("id"))}),t.off(),t.removeData(),t.remove(),e._invalidateGroupContainer(),e._change()},_change:function(){var t=this;if(t.dataSource){var e=t.descriptors();if(t.trigger("change",{groups:e}))return void t.refresh();t.dataSource.group(e)}},_dropCuePosition:function(e){var r=this._dropCuePositions;if(f.is(":visible")&&0!==r.length){e=Math.ceil(e);var a=r[r.length-1],i=a.left,o=a.right,d=parseInt(a.element.css("marginLeft"),10),l=parseInt(a.element.css("marginRight"),10);return e>=o&&!s||e<i&&s?e={left:a.element.position().left+(s?-d:n(a.element)+l),element:a.element,before:!1}:(e=t.grep(r,(function(t){return t.left<=e&&e<=t.right||s&&e>t.right}))[0])&&(e={left:s?e.element.position().left+n(e.element)+l:e.element.position().left-d,element:e.element,before:!0}),e}},_drag:function(t){var e=this._dropCuePosition(t.x.location);e&&f.css({left:e.left,right:"auto"})},_canDrag:function(t){var e=t.attr(r.attr("field"));return"false"!=t.attr(r.attr("groupable"))&&e&&(t.hasClass("k-group-indicator")||!this.indicator(e))},_canDrop:function(t,e,r){var a=t.next();return t[0]!==e[0]&&(!a[0]||e[0]!==a[0]||!s&&r>a.position().left||s&&r<a.position().left)},_dragEnd:function(e){var a=this,n=e.currentTarget.attr(r.attr("field")),i=a.indicator(n);e!==a.options.draggable&&!e.dropped&&i&&a._removeIndicator(t(i)),a._dragCancel()},_dragCancel:function(){f.remove(),this._dropCuePositions=[]},_intializePositions:function(){var e,a=t(".k-group-indicator",this.groupContainer);this._dropCuePositions=t.map(a,(function(a){return a=t(a),e=r.getOffset(a).left,{left:parseInt(e,10),right:parseInt(e+n(a),10),element:a}}))},_invalidateGroupContainer:function(){var t=this.groupContainer;t&&t.is(":empty")&&t.html(this.options.messages.empty)}});r.ui.plugin(h)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.groupable.js.map
