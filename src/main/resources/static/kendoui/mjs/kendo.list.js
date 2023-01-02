/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.popup.js";import"./kendo.label.js";var __meta__={id:"list",name:"List",category:"framework",depends:["data","popup","label"],hidden:!0};!function(e,t){var i=window.kendo,a=i.ui,s=i._outerHeight,n=/^\d+(\.\d+)?%$/i,l=a.Widget,r=i.keys,o=i.support,u=i.htmlEncode,c=i._activeElement,d=i._outerWidth,h=i.data.ObservableArray,p="id",f="change",_="k-focus",g="k-hover",m="k-selected",v="k-i-loading k-input-loading-icon",b="k-list-ul",x=".k-list-group-sticky-header",w=".k-list-item",S="open",I="close",y="cascade",k="select",F="click",C="mouseenter",T="activate",V="deactivate",D="dataBinding",L="dataBound",H="selectedItemChange",B="selected",E="requestStart",P="requestEnd",A="focus",O=e.extend,G=Array.isArray,W=o.browser,q="k-hidden",N="width",z="text",M=W.msie,R=/"/g,j={ComboBox:["DropDownList","MultiColumnComboBox"],DropDownList:["ComboBox","MultiColumnComboBox"],MultiColumnComboBox:["ComboBox","DropDownList"]},U="aria-labelledby",$="aria-label",Q="aria-activedescendant",Y="aria-expanded",K="aria-hidden",X="aria-busy",J="aria-selected",Z=".k-table-group-row",ee=i.ui.DataBoundWidget.extend({init:function(t,a){var s,n=this;l.fn.init.call(n,t,a),t=n.element,a=n.options,n._isSelect=t.is(k),n._isSelect&&n.element[0].length&&(a.dataSource||(a.dataTextField=a.dataTextField||z,a.dataValueField=a.dataValueField||"value")),n._listSize=i.cssProperties.getValidClass({widget:"List",propName:"size",value:a.size}),n.ul=e('<ul unselectable="on"/>').attr({tabIndex:-1,"aria-hidden":!0}),n.list=e("<div class='k-list'/>").addClass(n._listSize).append(n.ul),(s=t.attr(p))||(s=i.guid()),n.list.attr(p,s+"-list"),n.ul.attr(p,s+"_listbox"),a.columns&&a.columns.length&&(n.list.removeClass("k-list").addClass("k-data-table"),n.list.removeClass(n._listSize).addClass("k-table-md"),n.ul.removeClass(b).addClass("k-table"),n._columnsHeader()),n._header(),n._noData(),n._footer(),n._accessors(),n._initValue()},options:{valuePrimitive:!1,footerTemplate:"",headerTemplate:"",noDataTemplate:!0,size:"medium",messages:{noData:"No data found.",clear:"clear"}},setOptions:function(e){l.fn.setOptions.call(this,e),e&&e.enable!==t&&(e.enabled=e.enable),e.columns&&e.columns.length&&this._columnsHeader(),this._header(),this._noData(),this._footer(),this._renderFooter(),this._renderNoData(),e.label&&this._inputLabel?this.label.setOptions(e.label):!1===e.label?(this.label._unwrapFloating(),this._inputLabel.remove(),delete this._inputLabel):e.label&&this._label()},focus:function(){this._focused.trigger(A)},readonly:function(e){this._editable({readonly:e===t||e,disable:!1}),this.label&&this.label.floatingLabel&&this.label.floatingLabel.readonly(e===t||e)},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t||e)}),this.label&&this.label.floatingLabel&&this.label.floatingLabel.enable(e=e===t||e)},_label:function(){var t=this,a=t.options,s=e.isPlainObject(a.label)?a.label:{content:a.label};t.label=new i.ui.Label(null,e.extend({},s,{widget:t,floatCheck:t._floatCheck.bind(t)})),t._inputLabel=t.label.element},_floatCheck:function(){return!this.listView||!(this.value()||!!this.text&&this.text())&&!this.popup.visible()},_refreshFloatingLabel:function(){var e=this;e.label&&e.label.floatingLabel&&e.label.floatingLabel.refresh()},_header:function(){var t=this,a=e(t.header),s=t.options.headerTemplate;if(this._angularElement(a,"cleanup"),i.destroy(a),a.remove(),s){var n="function"!=typeof s?i.template(s):s;a=e(n({})),t.header=a[0]?a:null,t.list.parent.length>0&&t.list.before(a),this._angularElement(t.header,"compile")}else t.header=null},_columnsHeader:function(){var t=this,a=e(t.columnsHeader);this._angularElement(a,"cleanup"),i.destroy(a),a.remove();for(var s="<div class='k-table-header'><div class='k-table-header-wrap'><table class='k-table' role='presentation'>",l="<colgroup>",r="<tr class='k-table-row'>",o=0;o<this.options.columns.length;o++){var u=this.options.columns[o],c=u.title||u.field||"",d=u.headerTemplate||c,h="function"!=typeof d?i.template(d):d,p=u.width,f=parseInt(p,10),_="";p&&!isNaN(f)&&(_+="style='width:",_+=f,_+=n.test(p)?"%":"px",_+=";'"),l+="<col "+_+"/>",r+="<th class='k-table-th'>",r+=h(u),r+="</th>"}s+=l+="</colgroup>",s+="<thead class='k-table-thead'>",s+=r+="</tr>",s+="</thead></table></div></div>",t.columnsHeader=a=e(s),t.list.prepend(a),this._angularElement(t.columnsHeader,"compile")},_noData:function(){var t=this,a=e(t.noData),s=!0===t.options.noDataTemplate?t.options.messages.noData:t.options.noDataTemplate;t.angular("cleanup",(function(){return{elements:a}})),i.destroy(a),a.remove(),s?(t.noData=e('<div class="k-no-data" style="display: none;"></div>').appendTo(t.list),t.noDataTemplate="function"!=typeof s?i.template(s):s):t.noData=null},_footer:function(){var t=this,a=e(t.footer),s=t.options.footerTemplate,n=this.options.columns&&this.options.columns.length?'<div class="k-table-footer"><span class="k-table-td"></span></div>':'<div class="k-list-footer"></div>';this._angularElement(a,"cleanup"),i.destroy(a),a.remove(),s?(t.footer=e(n).appendTo(t.list),t.footerTemplate="function"!=typeof s?i.template(s):s):t.footer=null},_listOptions:function(t){var a=this,s=a.options,n=s.virtual,l={change:a._listChange.bind(a)},r=a._listBound.bind(a),o=a._focused,u=a.element.attr("id"),c=e('label[for="'+a.element.attr("id")+'"]'),d=o.attr(U);return!d&&c.length&&(d=c.attr("id")||a._generateLabelId(c,u||i.guid())),n="object"==typeof n?n:{},(t=e.extend({autoBind:!1,selectable:!0,dataSource:a.dataSource,click:a._click.bind(a),activate:a._activateItem.bind(a),columns:s.columns,deactivate:a._deactivateItem.bind(a),dataBinding:function(){a.trigger(D)},dataBound:r,height:s.height,dataValueField:s.dataValueField,dataTextField:s.dataTextField,groupTemplate:s.groupTemplate,fixedGroupTemplate:s.fixedGroupTemplate,template:s.template,ariaLabel:o.attr($),ariaLabelledBy:d,listSize:a._listSize},t,n,l)).template||(t.template="#:"+i.expr(t.dataTextField,"data")+"#"),s.$angular&&(t.$angular=s.$angular),t},_initList:function(){var e=this,t=e._listOptions({selectedItemChange:e._listChange.bind(e)});e.options.virtual?(e.listView=new i.ui.VirtualList(e.ul,t),e.list.addClass("k-virtual-list")):e.listView=new i.ui.StaticList(e.ul,t),e.listView.bind("listBound",e._listBound.bind(e)),e._setListValue()},_setListValue:function(e){(e=e||this.options.value)!==t&&this.listView.value(e).done(this._updateSelectionState.bind(this))},_updateSelectionState:e.noop,_listMousedown:function(e){this.filterInput&&this.filterInput[0]===e.target||e.preventDefault()},_isFilterEnabled:function(){var e=this.options.filter;return e&&"none"!==e},_hideClear:function(){this._clear&&this._clear.addClass(q)},_showClear:function(){this._clear&&this._clear.removeClass(q)},_clearValue:function(){this._clearText(),this._accessor(""),this.listView.value([]),this._isSelect&&(this._customOption=t),this._isFilterEnabled()&&!this.options.enforceMinLength&&(this._filter({word:"",open:!1}),this.options.highlightFirst&&this.listView.focus(0)),this._change()},_clearText:function(){this.text("")},_clearFilter:function(){this.options.virtual||this.listView.bound(!1),this._filterSource()},_filterSource:function(t,i){var a=this,s=a.options,n=s.filterFields&&t&&t.logic&&t.filters&&t.filters.length,l=a.dataSource,r=O({},l.filter()||{}),o=t||r.filters&&r.filters.length&&!t,u=re(r,s.dataTextField);if(this._clearFilterExpressions(r),(t||u)&&a.trigger("filtering",{filter:t}))return e.Deferred().reject().promise();var c={filters:[],logic:"and"};n?c.filters.push(t):this._pushFilterExpression(c,t),le(r)&&(c.logic===r.logic?c.filters=c.filters.concat(r.filters):c.filters.push(r)),a._cascading&&this.listView.setDSFilter(c);var d=O({},{page:o?1:l.page(),pageSize:o?l.options.pageSize:l.pageSize(),sort:l.sort(),filter:l.filter(),group:l.group(),aggregate:l.aggregate()},{filter:c});return l[i?"read":"query"](l._mergeState(d))},_pushFilterExpression:function(e,t){le(t)&&""!==t.value&&e.filters.push(t)},_clearFilterExpressions:function(e){if(e.filters){for(var t,i=0;i<e.filters.length;i++)"fromFilter"in e.filters[i]&&(t=i);isNaN(t)||e.filters.splice(t,1)}},_angularElement:function(e,t){e&&this.angular(t,(function(){return{elements:e}}))},_renderNoData:function(){var e=this,t=e.noData;t&&(this._angularElement(t,"cleanup"),t.html(e.noDataTemplate({instance:e})),this._angularElement(t,"compile"))},_toggleNoData:function(t){e(this.noData).toggle(t)},_toggleHeader:function(e){this.listView.content.prev(x).toggle(e)},_renderFooter:function(){var e=this,t=e.footer?this.options.columns&&this.options.columns.length?e.footer.children().first():e.footer:null;t&&(this._angularElement(t,"cleanup"),t.html(e.footerTemplate({instance:e})),this._angularElement(t,"compile"))},_allowOpening:function(){return this.options.noDataTemplate||this.dataSource.flatView().length},_initValue:function(){var e=this,t=e.options.value;null!==t?e.element.val(t):(t=e._accessor(),e.options.value=t),e._old=t},_ignoreCase:function(){var e,t=this,i=t.dataSource.reader.model;i&&i.fields&&(e=i.fields[t.options.dataTextField])&&e.type&&"string"!==e.type&&(t.options.ignoreCase=!1)},_focus:function(e){return this.listView.focus(e)},_filter:function(e){var t,i=this,a=i.options,s=e.word,n=a.filterFields,l=a.dataTextField;if(n&&n.length){t={logic:"or",filters:[],fromFilter:!0};for(var r=0;r<n.length;r++)this._pushFilterExpression(t,i._buildExpression(s,n[r]))}else t=i._buildExpression(s,l);i._open=e.open,i._filterSource(t)},_buildExpression:function(e,t){var i=this.options,a=i.ignoreCase,s=this.dataSource.options.accentFoldingFiltering;return{value:a?s?e.toLocaleLowerCase(s):e.toLowerCase():e,field:t,operator:i.filter,ignoreCase:a}},_clearButton:function(){var t=this,i=t.options.messages.clear;t._clear||(t._clear=e('<span unselectable="on" class="k-clear-value" title="'+i+'"><span class="k-icon k-i-x"></span></span>').attr({role:"button",tabIndex:-1})),t.options.clearButton||t._clear.remove(),this._hideClear()},search:function(e){var t=this.options;e="string"==typeof e?e:this._inputValue(),clearTimeout(this._typingTimeout),(!t.enforceMinLength&&!e.length||e.length>=t.minLength)&&(this._state="filter",this.listView&&(this.listView._emptySearch=!i.trim(e).length),this._isFilterEnabled()?this._filter({word:e,open:!0}):this._searchByWord(e))},current:function(e){return this._focus(e)},items:function(){return this.ul[0].children},destroy:function(){var e=this,t=e.ns;l.fn.destroy.call(e),e._unbindDataSource(),e.listView.destroy(),e.list.off(t),e.popup.destroy(),e._form&&e._form.off("reset",e._resetHandler),e.label&&e.label.destroy()},dataItem:function(i){var a=this;if(i===t)return a.listView.selectedDataItems()[0];if("number"!=typeof i){if(a.options.virtual)return a.dataSource.getByUid(e(i).data("uid"));i=e(a.items()).index(i)}return a.dataSource.flatView()[i]},_activateItem:function(){var e=this.listView.focus();e&&this.popup.visible()&&this._focused.add(this.filterInput).attr(Q,e.attr("id"))},_deactivateItem:function(){this._focused.add(this.filterInput).removeAttr(Q)},_accessors:function(){var e=this,t=e.element,a=e.options,s=i.getter,n=t.attr(i.attr("text-field")),l=t.attr(i.attr("value-field"));!a.dataTextField&&n&&(a.dataTextField=n),!a.dataValueField&&l&&(a.dataValueField=l),e._text=s(a.dataTextField),e._value=s(a.dataValueField)},_aria:function(e){var i,a=this,s=a.options,n=a._focused;s.suggest!==t&&(i="none"===s.filter?!0===s.suggest?"inline":"none":!0===s.suggest?"both":"list",n.attr("aria-autocomplete",i)),e=e?e+" "+a.ul[0].id:a.ul[0].id,n.attr({"aria-controls":e}),a.filterInput&&a.filterInput.length>0&&a.filterInput.attr("aria-controls",e),a.ul.attr("aria-live",a._isFilterEnabled()?"polite":"off"),a._ariaLabel(a._focused)},_blur:function(){var e=this;e._change(),e.close(),e._userTriggered=!1},_isValueChanged:function(e){return e!==te(this._old,typeof e)},_change:function(){var e,i=this,a=i.selectedIndex,s=i.options.value,n=i.value();i._isSelect&&!i.listView.bound()&&s&&(n=s),i._isValueChanged(n)||i._valueBeforeCascade!==t&&i._valueBeforeCascade!==te(i._old,typeof i._valueBeforeCascade)&&i._userTriggered?e=!0:a===t||a===i._oldIndex||i.listView.isFiltered()||(e=!0),e&&(null===i._old||""===i._old||""===n?i._valueBeforeCascade=i._old=n:i.dataItem()?i._valueBeforeCascade=i._old=i.options.dataValueField?i.dataItem()[i.options.dataValueField]:i.dataItem():i._valueBeforeCascade=i._old=null,i._oldIndex=a,i._typing||i.element.trigger(f),i.trigger(f)),i.typing=!1},_data:function(){return this.dataSource.view()},_enable:function(){var e=this,i=e.options,a=e.element.is("[disabled]");i.enable!==t&&(i.enabled=i.enable),!i.enabled||a?e.enable(!1):e.readonly(e.element.is("[readonly]"))},_dataValue:function(e){var i=this._value(e);return i===t&&(i=this._text(e)),i},_offsetHeight:function(){var t=0;return this.listView.content.parent().prevAll(":visible").each((function(){var i=e(this);t+=s(i,!0)})),t},_height:function(t){var i,a=this,n=a.list,l=a.options.height,r=a.popup.visible(),o=this.options.columns&&this.options.columns.length;if(t||a.options.noDataTemplate){if(i=n.parent().add(n.closest(".k-animation-container")).show(),!n.parent().is(":visible"))return void i.hide();l=a.listView.content[0].scrollHeight>l?l:"auto",i.height(l),"auto"!==l&&(l-=a._offsetHeight(),o&&(l=l-(s(e(a.footer))||0)-(s(e(a.columnsHeader))||0))),o?a.listView.content.outerHeight(l):a.listView.content.parent().outerHeight(l),r||n.parent().hide()}return l},_openHandler:function(e){var t;this._adjustListWidth(),this.trigger(S)?e.preventDefault():(this._focused.attr(Y,!0),this.ul.attr(K,!1),(t=this.listView.focus())&&this._focused.add(this.filterInput).attr(Q,t.attr("id")))},_adjustListWidth:function(){var e,t,i=this,a=i.list.parent(),s=a[0].style.width,n=i.wrapper;if(a.data(N)||!s)return e=window.getComputedStyle?window.getComputedStyle(n[0],null):0,t=parseFloat(e&&e.width)||d(n),e&&W.msie&&(t+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth)),s="border-box"!==a.css("box-sizing")?t-(d(a)-a.width()):t,a.css({fontFamily:n.css("font-family"),width:i.options.autoWidth?"auto":s,minWidth:s,whiteSpace:i.options.autoWidth?"nowrap":"normal"}).data(N,s),!0},_closeHandler:function(e){this.trigger(I)?e.preventDefault():(this._focused.attr(Y,!1),this.ul.attr(K,!0),this._focused.add(this.filterInput).removeAttr(Q))},_focusItem:function(){var e=this.listView,i=!e.focus(),a=se(e.select());a===t&&this.options.highlightFirst&&i&&(a=0),a!==t?e.focus(a):i&&e.scrollToIndex(0)},_calculateGroupPadding:function(e){var t=this.ul.children(".k-first").first(),a=this.listView.content.prev(x),s=0,n="right";a[0]&&"none"!==a[0].style.display&&("auto"!==e&&(s=i.support.scrollbar()),this.element.parents(".k-rtl").length&&(n="left"),s+=parseFloat(t.css("border-"+n+"-width"),10)+parseFloat(t.children(".k-list-item-group-label").css("padding-"+n),10),a.css("padding-"+n,s))},_calculatePopupHeight:function(e){var t=this._height(this.dataSource.flatView().length||e);this._calculateGroupPadding(t),this._calculateColumnsHeaderPadding(t)},_calculateColumnsHeaderPadding:function(e){if(this.options.columns&&this.options.columns.length){var t=o.isRtl(this.wrapper),a=i.support.scrollbar();this.columnsHeader.css(t?"padding-left":"padding-right","auto"!==e?a:0)}},_refreshScroll:function(){var e=this.listView,t=e.element.height()>e.content.height();this.options.autoWidth&&e.content.css({overflowX:"hidden",overflowY:t?"scroll":"auto"})},_resizePopup:function(e){this.options.virtual||(this.popup.element.is(":visible")?this._calculatePopupHeight(e):(this.popup.one("open",function(e){return function(){this._calculatePopupHeight(e)}.bind(this)}.call(this,e)),this.popup.one(T,this._refreshScroll.bind(this))))},_popup:function(){var e=this;e.list.wrap("<div>"),e.popup=new a.Popup(e.list.parent(),O({},e.options.popup,{anchor:e.wrapper,open:e._openHandler.bind(e),close:e._closeHandler.bind(e),animation:e.options.animation,isRtl:o.isRtl(e.wrapper),autosize:e.options.autoWidth,activate:()=>{this._refreshFloatingLabel()},deactivate:()=>{this._refreshFloatingLabel()}})),e.popup.element.prepend(e.header).on("mousedown"+this.ns,this._listMousedown.bind(this))},_toggleHover:function(t){e(t.currentTarget).toggleClass(g,t.type===C)},_toggle:function(e,i){var a=this,s=o.mobileOS&&(o.touch||o.MSPointers||o.pointers);e=e!==t?e:!a.popup.visible(),i||s||a._focused[0]===c()||(a._prevent=!0,a._focused.trigger(A),a._prevent=!1),a[e?S:I]()},_triggerCascade:function(){var e=this;e._cascadeTriggered&&e.value()===te(e._cascadedValue,typeof e.value())||(e._cascadedValue=e.value(),e._cascadeTriggered=!0,e.trigger(y,{userTriggered:e._userTriggered}))},_triggerChange:function(){this._valueBeforeCascade!==this.value()&&this.trigger(f)},_unbindDataSource:function(){var e=this;e.dataSource.unbind(E,e._requestStartHandler).unbind(P,e._requestEndHandler).unbind("error",e._errorHandler)},requireValueMapper:function(e,t){if(((e.value instanceof Array?e.value.length:e.value)||(t instanceof Array?t.length:t))&&e.virtual&&"function"!=typeof e.virtual.valueMapper)throw new Error("ValueMapper is not provided while the value is being set. See http://docs.telerik.com/kendo-ui/controls/editors/combobox/virtualization#the-valuemapper-function")}});function te(e,i){return e!==t&&""!==e&&null!==e&&("boolean"===i?("boolean"!=typeof e&&(e="true"===e.toString().toLowerCase()),e=Boolean(e)):"number"===i?e=Number(e):"string"===i&&(e=e.toString())),e}O(ee,{inArray:function(e,t){var i,a,s=t.children;if(!e||e.parentNode!==t)return-1;for(i=0,a=s.length;i<a;i++)if(e===s[i])return i;return-1},unifyType:te}),i.ui.List=ee,a.Select=ee.extend({init:function(e,t){ee.fn.init.call(this,e,t),this._initial=this.element.val()},setDataSource:function(e){var t,i=this;i.options.dataSource=e,i._dataSource(),i.listView.bound()&&(i._initialIndex=null,i.listView._current=null),i.listView.setDataSource(i.dataSource),i.options.autoBind&&i.dataSource.fetch(),(t=i._parentWidget())&&i._cascadeSelect(t)},close:function(){this.popup.close()},select:function(e){var i=this;return e===t?i.selectedIndex:i._select(e).done((function(){i._cascadeValue=i._old=i._accessor(),i._oldIndex=i.selectedIndex,i._refreshFloatingLabel()}))},_accessor:function(e,t){return this[this._isSelect?"_accessorSelect":"_accessorInput"](e,t)},_accessorInput:function(e){var i=this.element[0];if(e===t)return i.value;null===e&&(e=""),i.value=e},_accessorSelect:function(e,i){var a=this.element[0];if(e===t)return ne(a).value||"";ne(a).selected=!1,i===t&&(i=-1),null!==e&&""!==e&&-1==i?this._custom(e):e?a.value=e:a.selectedIndex=i},_syncValueAndText:function(){return!0},_custom:function(t){var i=this,a=i.element,s=i._customOption;s||(s=e("<option/>"),i._customOption=s,a.append(s)),s.text(t),s[0].selected=!0},_hideBusy:function(){var e=this;clearTimeout(e._busy),e._arrowIcon.removeClass(v),e._focused.attr(X,!1),e._busy=null,e._showClear()},_showBusy:function(e){var t=this;e.isDefaultPrevented()||(t._request=!0,t._busy||(t._busy=setTimeout((function(){t._arrowIcon&&(t._focused.attr(X,!0),t._arrowIcon.addClass(v),t._hideClear())}),100)))},_requestEnd:function(){this._request=!1,this._hideBusy()},_dataSource:function(){var e,t=this,a=t.element,s=t.options,n=s.dataSource||{};n=Array.isArray(n)?{data:n}:n,t._isSelect&&((e=a[0].selectedIndex)>-1&&(s.index=e),n.select=a,n.fields=[{field:s.dataTextField},{field:s.dataValueField}]),t.dataSource?t._unbindDataSource():(t._requestStartHandler=t._showBusy.bind(t),t._requestEndHandler=t._requestEnd.bind(t),t._errorHandler=t._hideBusy.bind(t)),t.dataSource=i.data.DataSource.create(n).bind(E,t._requestStartHandler).bind(P,t._requestEndHandler).bind("error",t._errorHandler)},_firstItem:function(){this.listView.focusFirst()},_lastItem:function(){this.listView.focusLast()},_nextItem:function(){return this.listView.focusNext()},_prevItem:function(){return this.listView.focusPrev()},_getNormalizedDataItem:function(e){var t,i=this,a=i.listView,s="number"==typeof e,n=i.optionLabel&&i.optionLabel.length;return t=s?n?--e:e:a.getElementIndex(e),a.dataItemByIndex(t)},_getNormalizedSelectCandidate:function(e){var t=e;return this.optionLabel&&this.optionLabel.length&&"number"==typeof e&&t++,t},_move:function(e){var t,i,a,s,n,l=this,o=l.listView,u=e.keyCode,d=u===r.DOWN,h=l.options.virtual;if(u===r.UP||d){if(e.altKey)l.toggle(d);else{if(!o.bound()&&!l.ul[0].firstChild)return l._fetch||(l.dataSource.one(f,(function(){l._fetch=!1,l._move(e)})),l._fetch=!0,l._filterSource()),e.preventDefault(),!0;a=l._focus(),l._fetch||a&&!a.hasClass(m)||(d?(s=l._nextItem(),(h&&s<=0||!l._focus()&&!s)&&l._lastItem()):(s=l._prevItem(),(h&&s>=o.dataSource.total()-1||!l._focus()&&!s)&&l._firstItem())),n=l._getNormalizedSelectCandidate(l._get(l._focus())||s||0),l._select(n,!0).done((function(){var e=function(){l.popup.visible()||l._blur(),null===l._cascadedValue?l._cascadedValue=l.value():l._cascadedValue=l.dataItem()?l.dataItem()[l.options.dataValueField]||l.dataItem():null};l.trigger(k,{dataItem:l._getNormalizedDataItem(n),item:l._focus()})?l._select(a).done(e):e()}))}e.preventDefault(),i=!0}else if(u===r.ENTER||u===r.TAB){l.popup.visible()&&e.preventDefault(),a=l._focus(),t=l.dataItem(),l.popup.visible()||t&&l.text()===l._text(t)||(a=null);var p,_=l.filterInput&&l.filterInput[0]===c();if(a){var g=!0;if((t=o.dataItemByIndex(o.getElementIndex(a)))&&(g=l._value(t)!==ee.unifyType(l.value(),typeof l._value(t))),g&&l.trigger(k,{dataItem:t,item:a}))return;p=l._select(a)}else l.input&&((l._syncValueAndText()||l._isSelect)&&l._accessor(l.input.val()),l.listView.value(l.input.val()));l._focusElement&&l._focusElement(l.wrapper),_&&u===r.TAB?l.wrapper.focusout():p&&"function"==typeof p.done?p.done((function(){l._blur()})):l._blur(),l.close(),i=!0}else if(u===r.ESC)l.popup.visible()&&e.preventDefault(),l.close(),i=!0;else if(l.popup.visible()&&(u===r.PAGEDOWN||u===r.PAGEUP)){e.preventDefault();var v=u===r.PAGEDOWN?1:-1;o.scrollWith(v*o.screenHeight()),i=!0}return i},_fetchData:function(){var e=this,t=!!e.dataSource.view().length;e._request||e.options.cascadeFrom||e.listView.bound()||e._fetch||t||(e._fetch=!0,e.dataSource.fetch().done((function(){e._fetch=!1})))},_options:function(e,i,a){var s,n,l,r,o=this,c=o.element,d=c[0],h=e.length,p="",f=0;for(i&&(p=i);f<h;f++)s="<option",n=e[f],l=o._text(n),(r=o._value(n))!==t&&(-1!==(r+="").indexOf('"')&&(r=r.replace(R,"&quot;")),s+=' value="'+r+'"'),s+=">",l!==t&&(s+=u(l)),p+=s+="</option>";c.html(p),a!==t&&(d.value=a,d.value&&!a&&(d.selectedIndex=-1)),-1!==d.selectedIndex&&(s=ne(d))&&s.setAttribute(B,B)},_reset:function(){var t=this,i=t.element,a=i.attr("form"),s=a?e("#"+a):i.closest("form");s[0]&&(t._resetHandler=function(){setTimeout((function(){t.value(t._initial)}))},t._form=s.on("reset",t._resetHandler))},_parentWidget:function(){var t=this.options.name;if(this.options.cascadeFrom){var i=e("#"+this.options.cascadeFrom),a=i.data("kendo"+t);if(!a)for(var s=0;s<j[t].length&&!(a=i.data("kendo"+j[t][s]));s+=1);return a}},_cascade:function(){var e,t=this,i=t.options;if(i.cascadeFrom){if(!(e=t._parentWidget()))return;t._cascadeHandlerProxy=t._cascadeHandler.bind(t),t._cascadeFilterRequests=[],i.autoBind=!1,e.bind("set",(function(){t.one("set",(function(e){t._selectedValue=e.value||t._accessor()}))})),e.first(y,t._cascadeHandlerProxy),e.listView.bound()?(t._toggleCascadeOnFocus(),t._cascadeSelect(e)):(e.one(L,(function(){t._toggleCascadeOnFocus(),e.popup.visible()&&e._focused.trigger(A)})),e.value()||t.enable(!1))}},_toggleCascadeOnFocus:function(){var e=this,t=e._parentWidget(),i=M&&t instanceof a.DropDownList?"blur":"focusout";t._focused.add(t.filterInput).on(A,(function(){t.unbind(y,e._cascadeHandlerProxy),t.unbind(f,e._cascadeHandlerProxy),t.first(f,e._cascadeHandlerProxy)})),t._focused.add(t.filterInput).on(i,(function(){t.unbind(f,e._cascadeHandlerProxy),t.unbind(y,e._cascadeHandlerProxy),t.first(y,e._cascadeHandlerProxy)}))},_cascadeHandler:function(e){var t=this._parentWidget(),i=this.value();this._userTriggered=e.userTriggered||t._userTriggered,this.listView.bound()&&this._clearSelection(t,!0),this._cascadeSelect(t,i)},_cascadeChange:function(e){var t=this,i=t._accessor()||t._selectedValue;t._cascadeFilterRequests.length||(t._selectedValue=null),t._userTriggered?t._clearSelection(e,!0):i?(i!==te(t.listView.value()[0],typeof i)&&t.value(i),t.dataSource.view()[0]&&-1!==t.selectedIndex||t._clearSelection(e,!0)):t.dataSource.flatView().length&&t.select(t.options.index),t.enable(),t._triggerCascade(),t._triggerChange(),t._userTriggered=!1},_cascadeSelect:function(e,i){var a=this,s=e.dataItem(),n=s?s[a.options.cascadeFromParentField]||e._value(s):null,l=a.options.cascadeFromField||e.options.dataValueField;if(a._valueBeforeCascade=i!==t?i:a.value(),n||0===n){re(a.dataSource.filter()||{},l);var r=function(){var t=a._cascadeFilterRequests.shift();t&&a.unbind("dataBound",t),(t=a._cascadeFilterRequests[0])&&a.first("dataBound",t),a._cascadeChange(e)};a._cascadeFilterRequests.push(r),1===a._cascadeFilterRequests.length&&a.first("dataBound",r),a._cascading=!0,a._filterSource({field:l,operator:"eq",value:n}),a._cascading=!1}else a.enable(!1),a._clearSelection(e),a._triggerCascade(),a._triggerChange(),a._userTriggered=!1;a._refreshFloatingLabel()}});var ie=".StaticList",ae=i.ui.DataBoundWidget.extend({init:function(t,a){if(l.fn.init.call(this,t,a),this.element.attr("role","listbox").on("click.StaticList","li",this._click.bind(this)).on("mouseenter.StaticList","li",(function(){e(this).addClass(g)})).on("mouseleave.StaticList","li",(function(){e(this).removeClass(g)})),a&&a.ariaLabel?this.element.attr($,a.ariaLabel):a&&a.ariaLabelledBy&&this.element.attr(U,a.ariaLabelledBy),o.touch&&this._touchHandlers(),"multiple"===this.options.selectable&&this.element.attr("aria-multiselectable",!0),this.options.columns&&this.options.columns.length){var s=this.element.parent().find(".k-table-thead"),n=e('<tr class="k-table-group-row"><th class="k-table-th" colspan="'+this.options.columns.length+'"></th></tr>');s.append(n),this.header=n.find(".k-table-th"),this.content=this.element.wrap("<div class='k-table-body k-table-scroller' unselectable='on'></div>").parent(),this.element.addClass("k-table-list")}else this.content=this.element.wrap("<div class='k-list-content k-list-scroller' unselectable='on'></div>").parent(),this.header=this.content.before('<div class="k-list-group-sticky-header" style="display:none"></div>').prev(),this.element.addClass(b);this.bound(!1),this._optionID=i.guid(),this._selectedIndices=[],this._view=[],this._dataItems=[],this._values=[];var r=this.options.value;r&&(this._values=Array.isArray(r)?r.slice(0):[r]),this._getter(),this._templates(),this.setDataSource(this.options.dataSource),this._createOnScrollProxy()},options:{name:"StaticList",dataValueField:null,valuePrimitive:!1,selectable:!0,template:null,groupTemplate:null,fixedGroupTemplate:null,ariaLabel:null,ariaLabelledBy:null},events:[F,f,T,V,D,L,H],setDataSource:function(e){var t,a=this,s=e||{};s=Array.isArray(s)?{data:s}:s,s=i.data.DataSource.create(s),a.dataSource?(a.dataSource.unbind(f,a._refreshHandler),t=a.value(),a.value([]),a.bound(!1),a.value(t)):a._refreshHandler=a.refresh.bind(a),a.setDSFilter(s.filter()),a.dataSource=s.bind(f,a._refreshHandler),a._fixedHeader()},_touchHandlers:function(){var t,i,a=this,s=this.options.columns&&this.options.columns.length?".k-table-row":w,n=function(e){return(e.originalEvent||e).changedTouches[0].pageY};a.element.on("touchstart.StaticList",(function(e){t=n(e)})),a.element.on("touchend.StaticList",(function(l){l.isDefaultPrevented()||(i=n(l),Math.abs(i-t)<10&&(a._touchTriggered=!0,a._triggerClick(e(l.target).closest(s).get(0))))}))},skip:function(){return this.dataSource.skip()},setOptions:function(e){l.fn.setOptions.call(this,e),this._getter(),this._templates(),this._render(),e.label?this.label.setOptions(e.label):!1===e.label&&(this.label._unwrapFloating(),this._inputLabel.remove(),delete this._inputLabel)},destroy:function(){this.element.off(ie),this._refreshHandler&&this.dataSource.unbind(f,this._refreshHandler),clearTimeout(this._scrollId),l.fn.destroy.call(this)},dataItemByIndex:function(e){return this.dataSource.flatView()[e]},screenHeight:function(){return this.content[0].clientHeight},scrollToIndex:function(e){var t=this.element[0].children[e];t&&this.scroll(t)},scrollWith:function(e){this.content.scrollTop(this.content.scrollTop()+e)},scroll:function(e){if(e){e[0]&&(e=e[0]);var t=this.content[0],i=e.offsetTop,a=e.offsetHeight,s=t.scrollTop,n=t.clientHeight,l=i+a;s>i?s=i:l>s+n&&(s=l-n),t.scrollTop=s}},selectedDataItems:function(e){if(e===t)return this._dataItems.slice();this._dataItems=e,this._values=this._getValues(e)},_getValues:function(t){var i=this._valueGetter;return e.map(t,(function(e){return i(e)}))},focusNext:function(){var e=this.focus();e=e?e.next():0,this.focus(e)},focusPrev:function(){var e=this.focus();e=e?e.prev():this.element[0].children.length-1,this.focus(e)},focusFirst:function(){this.focus(this.element[0].children[0])},focusLast:function(){this.focus(se(this.element[0].children))},focus:function(i){var a,s=this,n=s._optionID;if(i===t)return s._current;i=se(s._get(i)),i=e(this.element[0].children[i]),s._current&&(s._current.removeClass(_).removeAttr(p),s.trigger(V)),(a=!!i[0])&&(i.addClass(_),s.scroll(i),i.attr("id",n)),s._current=a?i:null,s.trigger(T)},focusIndex:function(){return this.focus()?this.focus().index():t},skipUpdate:function(e){this._skipUpdate=e},select:function(i){var a,s,n=this,l=n.options.selectable,r="multiple"!==l&&!1!==l,o=n._selectedIndices,u=[this.element.find(".k-selected").index()],c=[];if(i===t)return o.slice();1===(i=n._get(i)).length&&-1===i[0]&&(i=[]);var d=e.Deferred().resolve(),h=n.isFiltered();return h&&!r&&n._deselectFiltered(i)?d:r&&!h&&-1!==e.inArray(se(i),o)&&-1!==e.inArray(se(i),u)?(n._dataItems.length&&n._view.length&&(n._dataItems=[n._view[o[0]].item]),d):(a=(s=n._deselect(i)).removed,(i=s.indices).length&&(r&&(i=[se(i)]),c=n._select(i)),(c.length||a.length)&&(n._valueComparer=null,n.trigger(f,{added:c,removed:a})),d)},removeAt:function(e){return this._selectedIndices.splice(e,1),this._values.splice(e,1),this._valueComparer=null,{position:e,dataItem:this._dataItems.splice(e,1)[0]}},setValue:function(e){e=Array.isArray(e)||e instanceof h?e.slice(0):[e],this._values=e,this._valueComparer=null},value:function(i){var a,s=this,n=s._valueDeferred;return i===t?s._values.slice():(s.setValue(i),n&&"resolved"!==n.state()||(s._valueDeferred=n=e.Deferred()),s.bound()&&(a=s._valueIndices(s._values),"multiple"===s.options.selectable&&s.select(-1),s.select(a),n.resolve()),s._skipUpdate=!1,n)},items:function(){return this.element.children(w)},_click:function(e){this._touchTriggered?this._touchTriggered=!1:e.isDefaultPrevented()||this._triggerClick(e.currentTarget)},_createOnScrollProxy:function(){this._onScroll=function(){var e=this;clearTimeout(e._scrollId),e._scrollId=setTimeout((function(){e._renderHeader()}),50)}.bind(this)},_triggerClick:function(t){this.trigger(F,{item:e(t)})||this.select(t)},_valueExpr:function(e,t){var i,a,s=this,n=0,l=[];if(!s._valueComparer||s._valueType!==e){for(s._valueType=e;n<t.length;n++)l.push(te(t[n],e));i="for (var idx = 0; idx < "+l.length+"; idx++) { if (current === values[idx]) {   return idx; }} return -1;",a=new Function("current","values",i),s._valueComparer=function(e){return a(e,l)}}return s._valueComparer},_dataItemPosition:function(e,t){var i=this._valueGetter(e);return this._valueExpr(typeof i,t)(i)},_getter:function(){this._valueGetter=i.getter(this.options.dataValueField)},_deselect:function(t){var i,a,s,n=this,l=n.element[0].children,r=n.options.selectable,o=n._selectedIndices,u=n._dataItems,c=n._values,d=[],h=0;if(t=t.slice(),!0!==r&&t.length){if("multiple"===r)for(;h<t.length;h++)if(a=t[h],e(l[a]).hasClass(m))for(i=0;i<o.length;i++)if((s=o[i])===a){e(l[s]).removeClass(m).attr(J,!1);var p=this._view[a].item,f=this._dataItemPosition(p,this._values);d.push({position:f,dataItem:p}),u.splice(i,1),o.splice(i,1),t.splice(h,1),c.splice(i,1),1,h-=1,i-=1;break}}else{for(;h<o.length;h++)e(l[o[h]]).removeClass(m).attr(J,!1),d.push({position:h,dataItem:u[h]});n._values=[],n._dataItems=[],n._selectedIndices=[]}return{indices:t,removed:d}},_deselectFiltered:function(t){for(var i,a,s,n=this.element[0].children,l=[],r=0;r<t.length;r++)a=t[r],i=this._view[a].item,(s=this._dataItemPosition(i,this._values))>-1&&(l.push(this.removeAt(s)),e(n[a]).removeClass(m));return!!l.length&&(this.trigger(f,{added:[],removed:l}),!0)},_select:function(t){var i,a,s=this,n=s.element[0].children,l=s._view,r=[],o=0;for(-1!==se(t)&&s.focus(t);o<t.length;o++)i=l[a=t[o]],-1!==a&&i&&(i=i.item,s._selectedIndices.push(a),s._dataItems.push(i),s._values.push(s._valueGetter(i)),e(n[a]).addClass(m).attr(J,!0),r.push({dataItem:i}));return r},getElementIndex:function(t){return e(t).data("offset-index")},_get:function(e){return"number"==typeof e?e=[e]:G(e)||(e=[(e=this.getElementIndex(e))!==t?e:-1]),e},_template:function(){var e=this.options,t=e.template;return t?(t=i.template(t),t=function(e){return'<li tabindex="-1" role="option" unselectable="on" class="k-list-item">'+t(e)+"</li>"}):t=i.template('<li tabindex="-1" role="option" unselectable="on" class="k-list-item"><span class="k-list-item-text">${'+i.expr(e.dataTextField,"data")+"}</span></li>",{useWithBlock:!1}),t},_templates:function(){var e,t=this.options,a={template:t.template,groupTemplate:t.groupTemplate,fixedGroupTemplate:t.fixedGroupTemplate};if(t.columns)for(var s=0;s<t.columns.length;s++){var n=t.columns[s],l=n.field?n.field.toString():z;a["column"+s]=n.template||"#: "+l+"#"}for(var r in a)(e=a[r])&&"function"!=typeof e&&(a[r]=i.template(e));this.templates=a},_normalizeIndices:function(e){for(var i=[],a=0;a<e.length;a++)e[a]!==t&&i.push(e[a]);return i},_valueIndices:function(e,t){var i,a=this._view,s=0;if(t=t?t.slice():[],!e.length)return[];for(;s<a.length;s++)-1!==(i=this._dataItemPosition(a[s].item,e))&&(t[i]=s);return this._normalizeIndices(t)},_firstVisibleItem:function(){for(var t=this.element[0],i=this.content[0].scrollTop,a=e(t.children[0]).height(),s=Math.floor(i/a)||0,n=t.children[s]||t.lastChild,l=n.offsetTop<i;n;)if(l){if(n.offsetTop+a>i||!n.nextSibling)break;n=n.nextSibling}else{if(n.offsetTop<=i||!n.previousSibling)break;n=n.previousSibling}return this._view[e(n).data("offset-index")]},_fixedHeader:function(){this.isGrouped()&&this.templates.fixedGroupTemplate?(this.header.closest(Z).length?this.header.closest(Z).show():this.header.show(),this.content.scroll(this._onScroll)):(this.header.closest(Z).length?this.header.closest(Z).hide():this.header.hide(),this.content.off("scroll",this._onScroll))},_renderHeader:function(){var e=this.templates.fixedGroupTemplate;if(e){var t=this._firstVisibleItem();t&&t.group.toString().length&&this.header.html(e(t.group))}},_renderItem:function(e){var t='<li tabindex="-1" role="option" unselectable="on" ',i=e.item,a=0!==e.index,s=e.selected,n=this.isGrouped(),l=this.options.columns&&this.options.columns.length,r=e.index%2==1?" k-table-alt-row":"";return t+=l?'class="k-table-row'+r:'class="k-list-item',a&&e.newGroup&&(t+=" k-first"),e.isLastGroupedItem&&l&&(t+=" k-last"),s&&(t+=" k-selected"),t+='" aria-selected="'+(s?"true":"false")+'" data-offset-index="'+e.index+'">',l?t+=this._renderColumns(i):(t+='<span class="k-list-item-text">',t+=this.templates.template(i),t+="</span>"),a&&e.newGroup?t+=l?'<span class="k-table-td k-table-group-td"><span>'+this.templates.groupTemplate(e.group)+"</span></span>":'<div class="k-list-item-group-label">'+this.templates.groupTemplate(e.group)+"</div>":n&&l&&(t+='<span class="k-table-td k-table-spacer-td"></span>'),t+"</li>"},_renderColumns:function(e){for(var t="",i=0;i<this.options.columns.length;i++){var a=this.options.columns[i].width,s=parseInt(a,10),l="";a&&!isNaN(s)&&(l+="style='width:",l+=s,l+=n.test(a)?"%":"px",l+=";'"),t+="<span class='k-table-td' "+l+">",t+=this.templates["column"+i](e),t+="</span>"}return t},_render:function(){var e,t,i,a,s="",n=0,l=0,r=[],o=this.dataSource.view(),u=this.value(),c=this.isGrouped();if(c)for(n=0;n<o.length;n++)for(t=o[n],i=!0,a=0;a<t.items.length;a++)e={selected:this._selected(t.items[a],u),item:t.items[a],group:t.value,newGroup:i,isLastGroupedItem:a===t.items.length-1,index:l},r[l]=e,l+=1,s+=this._renderItem(e),i=!1;else for(n=0;n<o.length;n++)e={selected:this._selected(o[n],u),item:o[n],index:n},r[n]=e,s+=this._renderItem(e);this._view=r,this.element[0].innerHTML=s,c&&r.length&&this._renderHeader()},_selected:function(e,t){return(!this.isFiltered()||"multiple"===this.options.selectable)&&-1!==this._dataItemPosition(e,t)},setDSFilter:function(e){this._lastDSFilter=O({},e)},isFiltered:function(){return this._lastDSFilter||this.setDSFilter(this.dataSource.filter()),!i.data.Query.compareFilters(this.dataSource.filter(),this._lastDSFilter)},refresh:function(e){var t,i=this,a=e&&e.action,s=i.options.skipUpdateOnBind,n="itemchange"===a;i.trigger(D),i._angularItems("cleanup"),i._fixedHeader(),i._render(),i.bound(!0),n||"remove"===a?(t=function(e,t){var i,a,s,n,l=t.length,r=e.length,o=[],u=[];if(r)for(s=0;s<r;s++){for(i=e[s],a=!1,n=0;n<l;n++)if(i===t[n]){a=!0,o.push({index:s,item:i});break}a||u.push(i)}return{changed:o,unchanged:u}}(i._dataItems,e.items)).changed.length&&(n?i.trigger(H,{items:t.changed}):i.value(i._getValues(t.unchanged))):i.isFiltered()||i._skipUpdate||i._emptySearch?(i.focus(0),i._skipUpdate&&(i._skipUpdate=!1,i._selectedIndices=i._valueIndices(i._values,i._selectedIndices))):s||a&&"add"!==a||i.value(i._values),i._valueDeferred&&i._valueDeferred.resolve(),i._angularItems("compile"),i.trigger(L)},bound:function(e){if(e===t)return this._bound;this._bound=e},isGrouped:function(){return(this.dataSource.group()||[]).length}});function se(e){return e[e.length-1]}function ne(e){var t=e.selectedIndex;return t>-1?e.options[t]:{}}function le(t){return!(!t||e.isEmptyObject(t))&&!(t.filters&&!t.filters.length)}function re(t,i){var a,s=!1;return t.filters&&(a=e.grep(t.filters,(function(e){return s=re(e,i),e.filters?e.filters.length:e.field!=i})),s||t.filters.length===a.length||(s=!0),t.filters=a),s}a.plugin(ae),i.cssProperties.registerPrefix("List","k-list-")}(window.kendo.jQuery);
//# sourceMappingURL=kendo.list.js.map
