/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.treelist.js";import"./kendo.treeview.draganddrop.js";var __meta__={id:"gantt.list",name:"Gantt List",category:"web",description:"The Gantt List",depends:["treelist","treeview.draganddrop"],hidden:!0};!function(e){var t=e.extend,n=e.map,o=kendo.isFunction,i=kendo.ui,r=i.TreeList,d=kendo._outerHeight,l=kendo._activeElement,a=kendo.keys,s=kendo.support.mobileOS,c=kendo.attr("type"),u=kendo.attr("bind"),h=kendo.attr("format"),m="string",f=".kendoGanttList",g="{0:"+kendo.getCulture().calendar.patterns.d+"}",p={title:"Title",start:"Start Time",end:"End Time",percentComplete:"% Done",parentId:"Predecessor ID",id:"ID",orderId:"Order ID"},_={gridHeader:"k-grid-header",gridContentWrap:"k-grid-content",editCell:"k-edit-cell",iconCollapse:"k-i-collapse",iconExpand:"k-i-expand"},b=i.GanttList=r.extend({init:function(e,t){0===this.options.columns.length&&this.options.columns.push("title"),r.fn.init.call(this,e,t),this._unbindDataSource(),this._setWidth()},options:{name:"GanttList",autoBind:!1,sortable:!0,selectable:!0,navigatable:!1,editable:{move:!0,mode:"incell"},resizable:!1,renderAllRows:!1},destroy:function(){r.fn.destroy.call(this),kendo.destroy(this.element)},closeCell:function(e){var t,n,o=this,r=(o.editor||{}).element;r&&r[0]&&o._isIncellEditable()&&(n=o.dataItem(r),o._cancelEditor(),r.removeClass(_.editCell),t=r.parent().removeClass(_.editRow),o.lockedContent&&o._relatedRow(t).removeClass(_.editRow),e&&o._render(),o.trigger("itemChange",{item:t,data:n,ns:i}),o.lockedContent&&o._adjustRowHeight(t.css("height","")[0],o._relatedRow(t).css("height","")[0]))},insertAfter:function(e,t){if(e&&t){var n=t.orderId,o={parentId:t.parentId};t.parentId===e.parentId&&t.orderId>e.orderId?o.orderId=n:o.orderId=n+1,this.trigger("reorder",{task:e,updateInfo:o})}},insertBefore:function(e,t){if(e&&t){var n=t.orderId,o={parentId:t.parentId};t.parentId===e.parentId&&t.orderId>e.orderId?o.orderId=n-1:o.orderId=n,this.trigger("reorder",{task:e,updateInfo:o})}},_adjustHeight:function(){var e,t=this.element,n=t.find("."+_.gridContentWrap),o=t.find("."+_.gridHeader),i=kendo.support.scrollbar();this._isHeightSet(t)&&(e=t.height()-d(o),n.height(e),this._hasLockedColumns&&(i=this.table[0].offsetWidth>this.table.parent()[0].clientWidth?i:0,this.lockedContent.height(e-i)))},_adjustRowHeight:function(e,t){var n,o=e.offsetHeight,i=t.offsetHeight;o>i?n=o+"px":o<i&&(n=i+"px"),n&&(e.style.height=t.style.height=n)},_isHeightSet:function(e){var t,n;return!!e[0].style.height||(t=e.height(),e.height("auto"),n=e.height(),e.height(""),t!=n)},_attachCellEditingEventHandlers:function(){var t=this,n=t.options.editable;t._isIncellEditable()&&!1!==n.update&&(t._startEditHandler=function(n){var o=n.currentTarget?e(n.currentTarget):n,i=t._columnFromElement(o);t.editable||i&&i.editable()&&t._editCell(o,i,t._modelFromElement(o))},t.content.on("focusin"+f,t._focusInEditableHandler.bind(t)).on("focusout"+f,t._focusoutCellHandler.bind(t)).on("keydown"+f,"tr:not(.k-grouping-row) > td",t._keydownHandler.bind(t)).on("keyup"+f,"tr:not(.k-grouping-row) > td",t._keyupHandler.bind(t)),s?t.touch=t.content.kendoTouch({filter:"td",touchstart:function(e){t._mouseDownHandler(e.touch)},doubletap:function(e){e.event.target.classList.contains("k-icon")||t._openEditorHandler(e.touch)}}).data("kendoTouch"):t.content.on("mousedown"+f,"tr:not(.k-grouping-row) > td",t._mouseDownHandler.bind(t)).on("dblclick"+f,"tr:not(.k-grouping-row) > td",t._openEditorHandler.bind(t)))},_blurActiveElement:function(){var t=kendo._activeElement();t&&"body"!==t.nodeName.toLowerCase()&&e(t).trigger("blur")},_closeCellTimeouted:function(){var t=l(),n=this.editor||{},o=n.element;o&&o[0]&&t&&!e.contains(o[0],t)&&o[0]!==t&&!e(t).closest(".k-animation-container").length&&n.end()&&this.closeCell()},_columns:function(){var e=this,t=this.options.columns;e._hasExpandable=!1,t.forEach((function(t){t.expandable&&(e._hasExpandable=!0)})),e.columns=e.options.columns=n(t,e._eachColumn.bind(e)),r.fn._columns.call(e)},_columnEditor:function(t){var n={name:t.field,required:!0};return n[u]="value:"+t.field,n[c]="date",n[h]=kendo._extractFormat(t.format),function(i,r){var d=r.model,l=(d.fields[t.field]||d[t.field]).validation;l&&l.dateCompare&&o(l.dateCompare)&&l.message&&(e("<span "+kendo.attr("for")+'="'+t.field+'" class="k-invalid-msg"/>').hide().appendTo(i),n[kendo.attr("dateCompare-msg")]=l.message),e('<input type="text"/>').attr(n).prependTo(i).kendoDateTimePicker({format:r.format})}},_columnFromElement:function(e){var t=e.closest("td"),n=t.parent().children().index(t);return this.columns[n]},_eachColumn:function(e){var o=this,i=o.options.resourcesField,r=this.options.sortable;return e.columns&&(o.hasNestedColumns=!0,e.columns=n(e.columns,this._eachColumn.bind(this))),typeof e===m&&(e={field:e,title:p[e]}),!0===e.editable?e.editable=function(){return!0}:e.editable=function(){return!1},"start"!==e.field&&"end"!==e.field||(e.format=kendo.getCulture().calendar.patterns[e.format]||e.format||g,e.editor||(e.format===g||e.format.toLowerCase().indexOf("h")>-1)&&(e.editor=o._columnEditor(e))),e.field===i&&(e.sortable=!1,e.template=e.template||function(e){for(var t=e.get(i)||[],n=[],o=0;o<t.length;o++)n.push(kendo.format("{0} [{1}]",t[o].get("name"),t[o].get("formatedValue")));return n.join(", ")}),o._hasExpandable||"title"!==e.field||(e.expandable=!0),r&&!e.sortable&&(e.sortable=!1),t(new function(){this.field="",this.title="",this.editable=function(){return!1},this.sortable=!1},e)},_editCell:function(e,t,n){var o,i=this,r=i.options.resourcesField,d=i.dataSource._createNewModel(n.toJSON());t.field!==r?i.trigger("beforeEdit",{model:n,container:e})?i.dataSource._restorePageSizeAfterAddChild():(i.closeCell(),n._edit=!0,i._cancelEditor(),i._render({editedColumn:t,editedColumnIndex:e.index()}),o=i.table.add(i.lockedTable).find("."+_.editCell).first(),i.editor=i._createIncellEditor(o,{columns:[t],model:n,change:function(t){i.trigger("save",{values:t.values,container:e,model:n})&&t.preventDefault()}}),i._current=o,i.trigger("edit",{container:e,model:n})):t.editor(e,d)},_focusInEditableHandler:function(t){var n=t.target;e.contains(n,l())||(clearTimeout(this._closeCellTimeout),this._closeCellTimeout=null)},_focusoutCellHandler:function(e){var t=this;t._closeCellTimeout=setTimeout((function(){t._closeCellTimeouted(e)}),1)},_keydownHandler:function(e){e.keyCode===a.ENTER&&e.preventDefault()},_keyupHandler:function(t){var n,o,i=this;switch(t.keyCode){case a.ENTER:i._blurActiveElement(),i._closeCellTimeouted(t);break;case a.ESC:i.editor&&(n=e(t.target),o=i._modelFromElement(n),i.trigger("cancel",{model:o,cell:n}))}},_modelFromElement:function(e){var t=e.closest("tr");return this.dataSource.getByUid(t.attr(kendo.attr("uid")))},_mouseDownHandler:function(t){e(t.currentTarget).hasClass(_.editCell)||this._blurActiveElement()},_openEditorHandler:function(t){var n=this,o=e(t.currentTarget),i=n.lockedTable&&o.closest("table")[0]===n.lockedTable[0],r=n.selectable&&n.selectable.options.multiple;o.hasClass(_.editCell)||o.has("a.k-grid-delete").length||o.has("button.k-grid-delete").length||o.closest("tbody")[0]!==n.tbody[0]&&!i||e(t.target).is(":input")||e(t.target).hasClass(_.iconExpand)||e(t.target).hasClass(_.iconCollapse)||(n.editor?n.editor.end()&&(r&&e(l()).trigger("blur"),n.closeCell(),n.editCell(o)):n.editCell(o))},_renderTree:function(e){r.fn._render.call(this),this.hasNestedColumns&&this.element.addClass("k-gantt-treelist-nested-columns"),e&&e.length&&!e.editedColumn&&(this.options.rowHeight&&this._rowHeight(e),this.trigger("render")),this._adjustHeight()},_rowHeight:function(t){var n,o=this.content,i=this.options,r=typeof i.rowHeight===m?i.rowHeight:i.rowHeight+"px",l=e(kendo.format("<table style='visibility: hidden;'><tbody><tr style='height:{0}'><td>&nbsp;</td></tr></tbody></table>",r));o.append(l),n=d(l.find("tr")),l.remove(),this.element.find('[role="treegrid"]').css("height",t.length*n+"px")},_setData:function(e){this.dataSource.data(e)},_setWidth:function(){this.element.find(".k-grid-header table").css("minWidth",this.options.listWidth),this.content.find("table").css("minWidth",this.options.listWidth)}});i.plugin(b)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.gantt.list.js.map
