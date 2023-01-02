/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.treeview.js";import"./kendo.popup.js";import"./kendo.binder.js";import"./kendo.html.chip.js";import"./kendo.html.chiplist.js";import"./kendo.html.button.js";import"./kendo.html.input.js";import"./kendo.label.js";!function(e,t){var i,s,a=window.kendo,n=a.ui,l=a.keys,r="k-disabled",o="select",h="checked",c="indeterminate",d=n.TreeView;s=".k-group",i=function(e){var t=e.children(".k-animation-container");return t.length||(t=e),t.children(s)};var u=d.extend({init:function(e,t,i){var s=this;s.dropdowntree=i,d.fn.init.call(s,e,t),s.dropdowntree._isMultipleSelection()&&s.wrapper.on("click.kendoTreeView",".k-in.k-selected",s._clickSelectedItem.bind(s))},_checkOnSelect:function(e){if(!e.isDefaultPrevented()){var t=this.dataItem(e.node);t.set("checked",!t.checked)}},_setCheckedValue:function(e,t){e.set(h,t)},_click:function(e){var t=this;t.dropdowntree._isMultipleSelection()&&t.one("select",t._checkOnSelect),d.fn._click.call(t,e)},_clickSelectedItem:function(t){var i=this,s=e(t.currentTarget);i.one("select",i._checkOnSelect),i._trigger(o,s)||i.dataItem(s).set("selected",!1)},defaultrefresh:function(e){var i,s=e.node,a=e.action,n=e.items,l=this.wrapper,r=this.options,o=r.loadOnDemand,h=r.checkboxes&&r.checkboxes.checkChildren;if(!this._skip){if(e.field){if(!n[0]||!n[0].level)return;return this._updateNodes(n,e.field)}if(s&&(l=this.findByUid(s.uid),this._progress(l,!1)),h&&"remove"!=a){var c=!1;for(i=0;i<n.length;i++)if("checked"in n[i]){c=!0;break}if(!c&&s&&s.checked)for(i=0;i<n.length;i++)n[i].checked=!0}if("add"==a?this._appendItems(e.index,n,l):"remove"==a?this._remove(this.findByUid(n[0].uid),!1):"itemchange"==a?this._updateNodes(n):"itemloaded"==a?this._refreshChildren(l,n,e.index):this._refreshRoot(n),"remove"!=a)for(i=0;i<n.length;i++)o&&!n[i].expanded||n[i].load();this.wrapper.attr("role","tree"),this.wrapper.find(">ul").attr("role","none"),this.trigger("dataBound",{node:s?l:t}),this.dropdowntree._treeViewDataBound({node:s?l:t,sender:this}),this.options.checkboxes.checkChildren&&this.updateIndeterminate()}},_previousVisible:function(e){var t,s,a=this;if(!e.length||e.prev().length)for(s=e.length?e.prev():a.root.children().last();a._expanded(s)&&(t=i(s).children().last()).length;)s=t;else(s=a.parent(e)||e).length||(a.dropdowntree.checkAll&&a.dropdowntree.checkAll.is(":visible")?a.dropdowntree.checkAll.find(".k-checkbox").trigger("focus"):a.dropdowntree.filterInput?a.dropdowntree.filterInput.trigger("focus"):a.dropdowntree.wrapper.trigger("focus"));return s},_keydown:function(i){var s,n=this,d=i.keyCode,u=n.current(),p=n._expanded(u),_=u.find(".k-checkbox-wrapper").first().find(":checkbox"),f=a.support.isRtl(n.element);i.target==i.currentTarget&&(!f&&d==l.RIGHT||f&&d==l.LEFT?p?s=n._nextVisible(u):u.find(".k-in").first().hasClass(r)||n.expand(u):!f&&d==l.LEFT||f&&d==l.RIGHT?p&&!u.find(".k-in").first().hasClass(r)?n.collapse(u):(s=n.parent(u),n._enabled(s)||(s=t)):d==l.DOWN?s=n._nextVisible(u):d!=l.UP||i.altKey?d==l.HOME?s=n._nextVisible(e()):d==l.END?s=n._previousVisible(e()):d!=l.ENTER||u.find(".k-in").first().hasClass(r)?d==l.SPACEBAR&&_.length&&!u.find(".k-in").first().hasClass(r)?(_.prop(h,!_.prop(h)).data(c,!1).prop(c,!1),n._checkboxChange({target:_}),s=u):i.altKey&&d===l.UP||d===l.ESC?n._closePopup():d===l.TAB&&(i.preventDefault(),n._closePopup()):u.find(".k-in").first().hasClass("k-selected")||n._trigger(o,u)||n.select(u):s=n._previousVisible(u),s&&(i.preventDefault(),u[0]!=s[0]&&(n._trigger("navigate",s),n.current(s))))},_closePopup:function(){this.dropdowntree.close(),this.dropdowntree.wrapper.trigger("focus")},refresh:function(e){this.defaultrefresh(e),this.dropdowntree.options.skipUpdateOnBind||("itemchange"===e.action?this.dropdowntree._isMultipleSelection()?"checked"===e.field&&this.dropdowntree._checkValue(e.items[0]):"checked"!==e.field&&"expanded"!==e.field&&e.items[0].selected&&this.dropdowntree._selectValue(e.items[0]):this.dropdowntree.refresh(e))}});a.ui._dropdowntree=u}(window.kendo.jQuery);var __meta__={id:"dropdowntree",name:"DropDownTree",category:"web",description:"The DropDownTree widget displays a hierarchy of items and allows the selection of single or multiple items.",depends:["treeview","popup","binder","html.chip","html.chiplist","html.button","html.input","label"]};!function(e,t){var i=window.kendo,s=i.ui,a=i.html,n=s.Widget,l=s._dropdowntree,r=i.data.ObservableArray,o=i.data.ObservableObject,h=e.extend,c=i._activeElement,d=".kendoDropDownTree",u=i.keys,p=i.support,_="k-hidden",f="width",g=p.browser,v=i._outerWidth,m=".",k="disabled",b="readonly",w="k-disabled",C="aria-disabled",T="k-focus",x="mouseenter"+d+" mouseleave"+d,I="tabindex",A="click",y="open",S="close",D="change",V=/"/g,L=".k-chip",F=i.ui.Widget.extend({init:function(t,s){this.ns=d,i.ui.Widget.fn.init.call(this,t,s),this._selection=this._getSelection(),this._focusInputHandler=this._focusInput.bind(this),this._initial=this.element.val(),this._values=[];var a=this.options.value;if(null!==a&&a.length||(this._noInitialValue=!0),this._isNullorUndefined(a)||(this._valueMethodCalled=!0,this._values=Array.isArray(a)?a.slice(0):[a]),this._inputTemplate(),this._accessors(),this._setTreeViewOptions(this.options),this._dataSource(),this._selection._initWrapper(),this._applyCssClasses(),this._placeholder(!0),this._tabindex(),this.wrapper.data(I,this.wrapper.attr(I)),this.tree=e("<div/>").attr({tabIndex:-1,"aria-hidden":!0}),this.list=e("<div class='k-list-container'/>").append(this.tree),this._header(),this._noData(),this._footer(),this._reset(),this._popup(),this.popup.one("open",this._popupOpen.bind(this)),this._clearButton(),this._filterHeader(),this._treeview(),this._renderFooter(),this._checkAll(),this._enable(),this._toggleCloseVisibility(),!this.options.autoBind){var n=s.text||"";this._isNullorUndefined(s.value)?n?this._textAccessor(n):s.placeholder&&this._placeholder(!0):this._preselect(s.value)}e(this.element).parents("fieldset").is(":disabled")&&this.enable(!1),this._valueMethodCalled=!1,this.options.label&&this._label(),this._aria(),i.notify(this)},_label:function(){var t=this,s=t.options,a=e.isPlainObject(s.label)?s.label:{content:s.label};t.label=new i.ui.Label(null,e.extend({},a,{widget:t,floatCheck:t._floatCheck.bind(t)})),t._inputLabel=t.label.element},_floatCheck:function(){return!(this.value()&&!this._isMultipleSelection()||this.value().length||this.text())&&!this.popup.visible()},_refreshFloatingLabel:function(){var e=this;e.label&&e.label.floatingLabel&&e.label.floatingLabel.refresh()},_preselect:function(e,t){this._selection._preselect(e,t)},_setTreeViewOptions:function(t){var i={autoBind:t.autoBind,checkboxes:t.checkboxes,dataImageUrlField:t.dataImageUrlField,dataSpriteCssClassField:t.dataSpriteCssClassField,dataTextField:t.dataTextField,dataUrlField:t.dataUrlField,loadOnDemand:t.loadOnDemand,size:t.size};this.options.treeview=e.extend({},i,this.options.treeview),t.template&&(this.options.treeview.template=t.template),t.size&&(this.options.treeview.size=t.size)},_dataSource:function(){var t=this.options.dataSource;this.dataSource=i.data.HierarchicalDataSource.create(t),t&&e.extend(this.options.treeview,{dataSource:this.dataSource})},_popupOpen:function(){var e=this.popup;e.wrapper=i.wrap(e.element)},_getSelection:function(){return this._isMultipleSelection()?(this.options._altname="MultiSelectDropDownTree",new s.DropDownTree.MultipleSelection(this)):new s.DropDownTree.SingleSelection(this)},setDataSource:function(e){this._isDataSourceSet=!0,this._tags&&(this._noInitialValue=!0,this.setValue([]),this._tags.empty(),this.span.show(),this._multipleTags.empty()),this.dataSource=e,this.treeview.setDataSource(e),this._isDataSourceSet=!1},_isMultipleSelection:function(){return this.options&&(this.options.treeview.checkboxes||this.options.checkboxes)},options:{name:"DropDownTree",animation:{},autoBind:!0,autoClose:!0,autoWidth:!1,clearButton:!0,dataTextField:"",dataValueField:"",dataImageUrlField:"",dataSpriteCssClassField:"",dataUrlField:"",delay:500,enabled:!0,enforceMinLength:!1,filter:"none",height:200,ignoreCase:!0,index:0,loadOnDemand:!1,messages:{singleTag:"item(s) selected",clear:"clear",deleteTag:"delete",noData:"No data found."},minLength:1,checkboxes:!1,noDataTemplate:!0,placeholder:"",checkAll:!1,checkAllTemplate:"Check all",tagMode:"multiple",template:null,text:null,treeview:{},valuePrimitive:!1,footerTemplate:"",headerTemplate:"",value:null,valueTemplate:null,popup:null,filterLabel:null,size:"medium",fillMode:"solid",rounded:"medium",label:null},events:["open","close","dataBound",D,"select","filtering"],focus:function(){this.wrapper.trigger("focus")},dataItem:function(e){return this.treeview.dataItem(e)},readonly:function(e){this._editable({readonly:e===t||e,disable:!1}),this._toggleCloseVisibility(),this.label&&this.label.floatingLabel&&this.label.floatingLabel.readonly(e===t||e)},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t||e)}),this._toggleCloseVisibility(),this.label&&this.label.floatingLabel&&this.label.floatingLabel.enable(e=e===t||e)},toggle:function(e){this._toggle(e)},open:function(){var e=this.popup;this.options.autoBind||this.dataSource.data().length||(this.treeview._progress(!0),this._isFilterEnabled()?this._search():this.dataSource.fetch()),!e.visible()&&this._allowOpening()&&(this._isMultipleSelection()&&e.element.addClass("k-multiple-selection"),e.element.addClass("k-popup-dropdowntree"),e.one("activate",this._focusInputHandler),e._hovered=!0,e.open())},close:function(){this.popup.close()},search:function(e){var t,i=this.options;if(clearTimeout(this._typingTimeout),!i.enforceMinLength&&!e.length||e.length>=i.minLength){if(t=this._getFilter(e),this.trigger("filtering",{filter:t})||Array.isArray(this.options.dataTextField))return;this._filtering=!0,this.treeview.dataSource.filter(t)}},_getFilter:function(e){return{field:this.options.dataTextField,operator:this.options.filter,value:e,ignoreCase:this.options.ignoreCase}},refresh:function(){var t=this.treeview.dataSource.flatView();this._renderFooter(),this._renderNoData(),this.filterInput&&this.checkAll&&this.checkAll.toggle(!this.filterInput.val().length),this.tree.toggle(!!t.length),e(this.noData).toggle(!t.length)},setOptions:function(e){this.options.checkboxes!=e.checkboxes&&(delete e.checkboxes,window.console.warn("setOptions method can not be used to set the checkboxes option in DropDownTree")),n.fn.setOptions.call(this,e),this._setTreeViewOptions(e),this._dataSource(),(this.options.treeview||e.size)&&this.treeview.setOptions(this.options.treeview),e.height&&this.tree&&this.tree.css("max-height",e.height),this._header(),this._noData(),this._footer(),this._renderFooter(),this._renderNoData(),this.span&&(this._isMultipleSelection()||this.span.hasClass("k-readonly"))&&this._placeholder(!0),this._inputTemplate(),this._accessors(),this._filterHeader(),this._checkAll(),this._enable(),e&&(e.enable||e.enabled)&&this.enable(!0),this._clearButton(),e!==t&&null!==e||(e={}),e.label&&this._inputLabel?this.label.setOptions(e.label):!1===e.label?(this.label._unwrapFloating(),this._inputLabel.remove(),delete this._inputLabel):e.label&&this._label()},destroy:function(){i.ui.Widget.fn.destroy.call(this),this.treeview&&this.treeview.destroy(),this.popup.destroy(),this.wrapper.off(d),this._clear.off(d),this.filterInput&&this.filterInput.off(d),this.tagList&&this.tagList.off(d),i.unbind(this.tagList),this.options.checkAll&&this.checkAll&&this.checkAll.off(d),this._form&&this._form.off("reset",this._resetHandler),this.label&&this.label.destroy()},setValue:function(e){e=Array.isArray(e)||e instanceof r?e.slice(0):[e],this._values=e},items:function(){return this.treeview.items()},value:function(e){var t=this;if(e)if(t.filterInput&&t.dataSource._filter)t._filtering=!0,t.dataSource.filter({});else if(!t.dataSource.data().length||!t.treeview.dataSource.data().length)return void(t.options.loadOnDemand?t.dataSource.fetch((function(){t._selection._setValue(e)})):(t.treeview.one("loadCompleted",(function(){t._selection._setValue(e)})),!t.options.autoBind&&t.options.valuePrimitive&&t.dataSource.fetch()));return t._selection._setValue(e)},text:function(e){var i,s=this.options.ignoreCase;if((e=null===e?"":e)===t||this._isMultipleSelection())return this._textAccessor();"string"==typeof e?(i=s?e:e.toLowerCase(),this._selectItemByText(i),this._textAccessor(i),this._refreshFloatingLabel()):this._textAccessor(e)},_aria:function(){var e=this.wrapper.find("span.k-input-inner");this.wrapper.attr({"aria-haspopup":"tree","aria-expanded":!1,"aria-controls":this.treeview.element.attr("id"),role:"listbox"}),this._activeId=i.guid(),this._ariaLabel(this.wrapper),this.filterInput&&this.options.filterLabel&&this.filterInput.attr("aria-label",this.options.filterLabel),!this.options.checkboxes&&e.text().length?(e.attr("role","option"),e.attr("aria-selected","true"),e.attr("id",this._activeId),this.wrapper.attr("aria-activedescendant",this._activeId)):this.options.checkboxes&&(this.wrapper.attr({"aria-multiselectable":!0,"aria-describedby":this.tagList[0].id}),this.tagList.attr("role","none"))},_header:function(){var t=this,s=e(t.header),a=t.options.headerTemplate;if(this._angularElement(s,"cleanup"),i.destroy(s),s.remove(),a){var n="function"!=typeof a?i.template(a):a;s=e(n({})),t.header=s[0]?s:null,t.list.prepend(s),this._angularElement(t.header,"compile")}else t.header=null},_noData:function(){var t=this,s=e(t.noData),a=!0===t.options.noDataTemplate?t.options.messages.noData:t.options.noDataTemplate;t.angular("cleanup",(function(){return{elements:s}})),i.destroy(s),s.remove(),a?(t.noData=e('<div class="k-no-data" style="display: none;"></div>').appendTo(t.list),t.noDataTemplate="function"!=typeof a?i.template(a):a):t.noData=null},_renderNoData:function(){var e=this,t=e.noData;t&&(this._angularElement(t,"cleanup"),t.html(e.noDataTemplate({instance:e})),this._angularElement(t,"compile"))},_footer:function(){var t=this,s=e(t.footer),a=t.options.footerTemplate;this._angularElement(s,"cleanup"),i.destroy(s),s.remove(),a?(t.footer=e('<div class="k-footer"></div>').appendTo(t.list),t.footerTemplate="function"!=typeof a?i.template(a):a):t.footer=null},_renderFooter:function(){var e=this,t=e.footer;t&&(this._angularElement(t,"cleanup"),t.html(e.footerTemplate({instance:e})),this._angularElement(t,"compile"))},_enable:function(){var e=this,i=e.options,s=e.element.is("[disabled]");i.enable!==t&&(i.enabled=i.enable),!i.enabled||s?e.enable(!1):e.readonly(e.element.is("[readonly]"))},_adjustListWidth:function(){var e,t,i=this,s=i.list,a=s[0].style.width,n=i.wrapper;if(s.data(f)||!a)return e=window.getComputedStyle?window.getComputedStyle(n[0],null):0,t=parseFloat(e&&e.width)||v(n),e&&g.msie&&(t+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth)),a="border-box"!==s.css("box-sizing")?t-(v(s)-s.width()):t,s.css({fontFamily:n.css("font-family"),width:i.options.autoWidth?"auto":a,minWidth:a,whiteSpace:i.options.autoWidth?"nowrap":"normal"}).data(f,a),!0},_reset:function(){var t=this,i=t.element,s=i.attr("form"),a=s?e("#"+s):i.closest("form");a[0]&&(t._resetHandler=function(){setTimeout((function(){t.value(t._initial)}))},t._form=a.on("reset",t._resetHandler))},_popup:function(){var e=this;e.options.checkboxes&&e.options.checkAll&&e.list.attr("role","application"),e.popup=new s.Popup(e.list,h({},e.options.popup,{anchor:e.wrapper,open:e._openHandler.bind(e),close:e._closeHandler.bind(e),animation:e.options.animation,isRtl:p.isRtl(e.wrapper),autosize:e.options.autoWidth,deactivate:()=>{this._refreshFloatingLabel()},activate:()=>{this._refreshFloatingLabel()}}))},_angularElement:function(e,t){e&&this.angular(t,(function(){return{elements:e}}))},_allowOpening:function(){return this.options.noDataTemplate||this.treeview.dataSource.flatView().length},_placeholder:function(e){this.span&&this.span.toggleClass("k-readonly",e).text(e?this.options.placeholder:""),this.span.text().trim().length>0?this.span.parent().attr({role:"option","aria-selected":!0}):(this.span.parent().removeAttr("role"),this.span.parent().removeAttr("aria-selected"))},_currentValue:function(e){var t=this._value(e);return t||0===t||(t=e),t},_checkValue:function(t){var i="",s=-1,a=this.value(),n="multiple"===this.options.tagMode;if((t||0===t)&&(t.level&&(t._level=t.level()),i=this._currentValue(t),s=a.indexOf(i)),t.checked){if(e.grep(this._tags,(function(e){return e.uid===t._tagUid})).length)return;var l=new o(t.toJSON());t._tagUid=l.uid,this._tags.push(l),1===this._tags.length&&(this.span.hide(),n||this._multipleTags.push(l)),-1===s&&(a.push(i),this.setValue(a))}else{var r=this._tags.find((function(e){return e.uid===t._tagUid})),h=this._tags.indexOf(r);if(-1===h)return void this._treeViewCheckAllCheck(t);this._tags.splice(h,1),0===this._tags.length&&(this.span.show(),n||this._multipleTags.splice(0,1)),-1!==s&&(a.splice(s,1),this.setValue(a))}this._treeViewCheckAllCheck(t),this._preventChangeTrigger||this._valueMethodCalled||this._noInitialValue||this.trigger(D),this.options.autoClose&&this.popup.visible()&&(this.close(),this.wrapper.trigger("focus")),this.popup.position(),this._toggleCloseVisibility(),this._updateSelectedOptions()},_updateSelectedOptions:function(){if("select"===this.element[0].tagName.toLowerCase()){var e=this._tags,t="",i=null,s=null;if(e.length)for(var a=0;a<e.length;a++)i=e[a],s=this._value(i),t+=this._option(s,this._text(i),!0);this.element.html(t)}},_option:function(e,s,a){var n="<option";return e!==t&&(-1!==(e+="").indexOf('"')&&(e=e.replace(V,"&quot;")),n+=' value="'+e+'"'),a&&(n+=" selected"),n+=">",s!==t&&(n+=i.htmlEncode(s)),n+"</option>"},_selectValue:function(e){var t="",i="";(e||0===e)&&(e.level&&(e._level=e.level()),i=this._text(e)||e,t=this._currentValue(e)),null===t&&(t=""),this.setValue(t),this._textAccessor(i,e),this._accessor(t),this._preventChangeTrigger||this._valueMethodCalled||this.trigger(D),this._valueMethodCalled=!1,this.options.autoClose&&this.popup.visible()&&(this.close(),this.wrapper.trigger("focus")),this.popup.position(),this._toggleCloseVisibility()},_clearClick:function(e){e.stopPropagation(),this.wrapper.trigger("focus"),this._clearTextAndValue()},_clearTextAndValue:function(){this._selection._clearValue(),this.setValue([]),this._clearInput(),this._clearText(),this.popup.position(),this._toggleCloseVisibility(),this._refreshFloatingLabel()},_clearText:function(){this.options.placeholder?this._placeholder(!0):this.span&&this.span.html("")},_inputTemplate:function(){var e=this.options.valueTemplate;e=e?i.template(e):i.template("#:this._text(data)#",{useWithBlock:!1}).bind(this),this.valueTemplate=e},_assignInstance:function(e,t){var i=this.options.dataTextField,s={};return i?(O(s,i.split(m),e),O(s,this.options.dataValueField.split(m),t),s=new o(s)):s=e,s},_textAccessor:function(i,s){var a=this.valueTemplate,n=this.span;if(i===t)return n.text();n.removeClass("k-readonly"),!s&&(e.isPlainObject(i)||i instanceof o)&&(s=i),s||(s=this._assignInstance(i,this._accessor()));var l=function(){return{elements:n.get(),data:[{dataItem:s}]}};this.angular("cleanup",l);try{n.html(a(s))}catch(e){n&&n.html("")}this.angular("compile",l)},_accessors:function(){var t=this.element,s=this.options,a=i.getter,n=t.attr(i.attr("text-field")),l=t.attr(i.attr("value-field")),r=function(t){if(Array.isArray(t)){var i=t.length,s=e.map(t,(function(e){return function(t){return t[e]}}));return function(e){var t=e._level;if(t||0===t)return s[Math.min(t,i-1)](e)}}return a(t)};!s.dataTextField&&n&&(s.dataTextField=n),!s.dataValueField&&l&&(s.dataValueField=l),s.dataTextField=s.dataTextField||"text",s.dataValueField=s.dataValueField||"value",this._text=r(s.dataTextField),this._value=r(s.dataValueField)},_accessor:function(e,t){return this._accessorInput(e,t)},_accessorInput:function(e){var i=this.element[0];if(e===t)return i.value;null===e&&(e=""),i.value=e},_clearInput:function(){this.element[0].value=""},_clearButton:function(){var t=this.options.messages.clear;this._clear||(this._clear=e('<span unselectable="on" class="k-clear-value" title="'+t+'"><span class="k-icon k-i-x"></span></span>').attr({role:"button",tabIndex:-1})),this.options.clearButton?(this._clear.insertAfter(this.tagList||this.span.parent()),this.wrapper.addClass("k-dropdowntree-clearable")):this.options.clearButton||this._clear.remove()},_toggleCloseVisibility:function(){var e=this.element.attr(b),t=this.value()&&!this._isMultipleSelection()||this.value().length,i=this.element.val()&&this.element.val()!==this.options.placeholder;e||!t&&!i?this._hideClear():this._showClear()},_showClear:function(){this._clear&&this._clear.removeClass(_)},_hideClear:function(){this._clear&&this._clear.addClass(_)},_openHandler:function(e){this._adjustListWidth(),this.trigger(y)?e.preventDefault():(this.wrapper.attr("aria-expanded",!0),this.tree.attr("aria-hidden",!1).attr("role","tree"))},_closeHandler:function(e){this.trigger(S)?e.preventDefault():(this.wrapper.attr("aria-expanded",!1),this.tree.attr("aria-hidden",!0))},_treeview:function(){var e=this;e.options.height&&e.tree.css("max-height",e.options.height),e.tree.attr("id",i.guid()),e.treeview=new l(e.tree,h({size:e.options.size},e.options.treeview),e),e.dataSource=e.treeview.dataSource,e.treeview.bind("select",(function(t){e.trigger("select",t)}))},_treeViewDataBound:function(e){if(e.node&&this._prev&&this._prev.length&&e.sender.expand(e.node),this._filtering)return e.node||(this._filtering=!1),void(this._isMultipleSelection()||this._deselectItem(e));if(this.treeview||(this.treeview=e.sender),e.node){var t=e.sender.dataItem(e.node);if(t){var i=t.children.data();this._checkLoadedItems(i)}}else{var s=e.sender.dataSource.data();this._checkLoadedItems(s),this._noInitialValue&&(this._noInitialValue=!1)}this.trigger("dataBound",e)},_deselectItem:function(e){var t=[];if(e.node){var i=e.sender.dataItem(e.node);i&&(t=i.children.data())}else t=e.sender.dataSource.data();for(var s=0;s<t.length;s++)t[s].selected&&!this._valueComparer(t[s],this.value())&&t[s].set("selected",!1)},_checkLoadedItems:function(e){var t=this.value();if(e)for(var i=0;i<e.length;i++)this._selection._checkLoadedItem(e[i],t)},_treeViewCheckAllCheck:function(e){this.options.checkAll&&this.checkAll&&(this._getAllChecked(),e.checked?this._checkCheckAll():this._uncheckCheckAll())},_checkCheckAll:function(){var e=this.checkAll.find(".k-checkbox");this._allItemsAreChecked?e.prop("checked",!0).prop("indeterminate",!1):e.prop("indeterminate",!0)},_uncheckCheckAll:function(){var e=this.checkAll.find(".k-checkbox");this._allItemsAreUnchecked?e.prop("checked",!1).prop("indeterminate",!1):e.prop("indeterminate",!0)},_filterHeader:function(){this.filterInput&&(this.filterInput.off(d).parent().remove(),this.filterInput=null),this._isFilterEnabled()&&(this._disableCheckChildren(),this.filterInput=e('<input class="k-input-inner" type="text" />').attr({placeholder:this.element.attr("placeholder"),title:this.element.attr("title"),role:"searchbox","aria-haspopup":"listbox","aria-autocomplete":"list"}),this.filterInput.on("input",this._filterChange.bind(this)),e('<div class="k-list-filter"><span class="k-searchbox k-input k-input-md k-rounded-md k-input-solid" type="text" autocomplete="off"><span class="k-input-icon k-icon k-i-search"></span></span></div>').insertBefore(this.tree).find(".k-searchbox").append(this.filterInput))},_filterChange:function(){this.filterInput&&this._search()},_disableCheckChildren:function(){this._isMultipleSelection()&&this.options.treeview.checkboxes&&this.options.treeview.checkboxes.checkChildren&&(this.options.treeview.checkboxes.checkChildren=!1)},_checkAll:function(){if(this.checkAll&&(this.checkAll.find(".k-checkbox-label, .k-checkbox").off(d),this.checkAll.remove(),this.checkAll=null),this._isMultipleSelection()&&this.options.checkAll){var t=a.renderCheckBox(h({},this.options,{label:"Check All",rounded:"medium"}));this.checkAll=e('<div class="k-check-all">'+t+"</div>").insertBefore(this.tree),this.checkAll.find(".k-checkbox-label").html(i.template(this.options.checkAllTemplate)({instance:this})),this.checkAll.find(".k-checkbox").on("change"+d,this._changeCheckAll.bind(this)).on("keydown"+d,this._keydownCheckAll.bind(this)),this._disabledCheckedItems=[],this._disabledUnCheckedItems=[],this._getAllChecked(),this._allItemsAreUnchecked||this._checkCheckAll()}},_changeCheckAll:function(){var e=this.checkAll.find(".k-checkbox").prop("checked");this._updateCheckAll(e)},_updateCheckAll:function(e){var t=this.checkAll.find(".k-checkbox");this._toggleCheckAllItems(e),t.prop("checked",e),this._disabledCheckedItems.length&&this._disabledUnCheckedItems.length?t.prop("indeterminate",!0):this._disabledCheckedItems.length?t.prop("indeterminate",!e):this._disabledUnCheckedItems.length?t.prop("indeterminate",e):t.prop("indeterminate",!1),this._disabledCheckedItems=[],this._disabledUnCheckedItems=[]},_keydownCheckAll:function(e){var t=e.keyCode;if(e.altKey&&t===u.UP||t===u.ESC||t===u.TAB)return this.close(),this.wrapper.trigger("focus"),void e.preventDefault();t===u.UP&&(this.filterInput?this.filterInput.trigger("focus"):this.wrapper.trigger("focus"),e.preventDefault()),t===u.DOWN&&(this.tree&&this.tree.is(":visible")&&this.tree.focus(),e.preventDefault()),t===u.SPACEBAR&&(g.msie||g.edge)&&(this._clickCheckAll(),e.preventDefault())},_clickCheckAll:function(){var e=this.checkAll.find(".k-checkbox"),t=e.prop("checked");this._updateCheckAll(!t),e.trigger("focus")},_dfs:function(e,t,i){for(var s=0;s<e.length&&this[t](e[s],i);s++)this._traverceChildren(e[s],t,i)},_uncheckItemByUid:function(e){this._dfs(this.dataSource.data(),"_uncheckItemEqualsUid",e)},_uncheckItemEqualsUid:function(e,t){return!1===e.enabled||e._tagUid!=t||(e.set("checked",!1),!1)},_selectItemByText:function(e){this._dfs(this.dataSource.data(),"_itemEqualsText",e)},_itemEqualsText:function(e,t){return!1===e.enabled||this._text(e)!==t||(this.treeview.select(this.treeview.findByUid(e.uid)),this._selectValue(e),!1)},_selectItemByValue:function(e){this._dfs(this.dataSource.data(),"_itemEqualsValue",e)},_itemEqualsValue:function(e,t){return!1===e.enabled||!this._valueComparer(e,t)||(this.treeview.select(this.treeview.findByUid(e.uid)),!1)},_checkItemByValue:function(e){for(var t=this.treeview.dataItems(),i=0;i<e.length;i++)this._dfs(t,"_checkItemEqualsValue",e[i])},_checkItemEqualsValue:function(e,t){return!1===e.enabled||!this._valueComparer(e,t)||(e.set("checked",!0),!1)},_valueComparer:function(e,t){var i,s=this._value(e);if(!this._isNullorUndefined(s)){if(this._isNullorUndefined(t))return!1;var a=this._value(t);return a?s==a:s==t}return!!(i=this._text(e))&&(this._text(t)?i==this._text(t):i==t)},_isNullorUndefined:function(e){return e===t||null===e},_getAllChecked:function(){return this._allCheckedItems=[],this._allItemsAreChecked=!0,this._allItemsAreUnchecked=!0,this._dfs(this.dataSource.data(),"_getAllCheckedItems"),this._allCheckedItems},_getAllCheckedItems:function(e){return this._allItemsAreChecked&&(this._allItemsAreChecked=e.checked),this._allItemsAreUnchecked&&(this._allItemsAreUnchecked=!e.checked),e.checked&&this._allCheckedItems.push(e),!0},_traverceChildren:function(e,t,i){var s=e[e._childrenOptions&&e._childrenOptions.schema?e._childrenOptions.schema.data:null]||e.items||e.children;s&&this._dfs(s,t,i)},_toggleCheckAllItems:function(e){this._dfs(this.dataSource.data(),"_checkAllCheckItem",e)},_checkAllCheckItem:function(e,t){return!1===e.enabled?e.checked?this._disabledCheckedItems.push(e):this._disabledUnCheckedItems.push(e):e.set("checked",t),!0},_isFilterEnabled:function(){var e=this.options.filter;return e&&"none"!==e},_editable:function(t){var i=this,s=i.element,a=t.disable,n=t.readonly,l=i.wrapper.add(i.filterInput).off(d),r=i.wrapper.off(x);i._isMultipleSelection()&&i.tagList.off(A+d),n||a?a?(l.removeAttr(I),r.addClass(w)):(l.attr(I,l.data(I)),r.removeClass(w),l.on("focusin"+d,i._focusinHandler.bind(i)).on("focusout"+d,i._focusoutHandler.bind(i))):(s.prop(k,!1).prop(b,!1),r.removeClass(w).on(x,i._toggleHover),i._clear.on("click"+d,i._clearClick.bind(i)),l.attr(I,l.data(I)).attr(C,!1).on("keydown"+d,i._keydown.bind(i)).on("focusin"+d,i._focusinHandler.bind(i)).on("focusout"+d,i._focusoutHandler.bind(i)),i.wrapper.on(A+d,i._wrapperClick.bind(i)),this._isMultipleSelection()&&(i.tagList.on(A+d,"span.k-chip",(function(t){e(t.currentTarget).addClass(T)})),i.tagList.on(A+d,".k-i-x-circle",(function(e){i._removeTagClick(e)})))),s.attr(k,a).attr(b,n),l.attr(C,a)},_focusinHandler:function(){this.wrapper.addClass(T),this._prevent=!1},_focusoutHandler:function(){var e=this;this._isMultipleSelection()&&this.tagList.find(".k-focus").removeClass(T),e._prevent||(this.wrapper.removeClass(T),e._prevent=!0,e.element.trigger("blur"))},_toggle:function(e){this[(e=e!==t?e:!this.popup.visible())?y:S]()},_wrapperClick:function(e){e.preventDefault(),this.popup.unbind("activate",this._focusInputHandler),this._focused=this.wrapper,this._prevent=!1,this._toggle()},_toggleHover:function(t){e(t.currentTarget).toggleClass("k-hover","mouseenter"===t.type)},_focusInput:function(){this.filterInput?this.filterInput.trigger("focus"):this.checkAll?this.checkAll.find(".k-checkbox").trigger("focus"):this.tree.is(":visible")&&(this.tree[0].focus({preventScroll:!0}),this._ie11PreventScrollOnFocus())},_ie11PreventScrollOnFocus:function(){if(g.msie&&11==g.version){var e=this.popup;e._toggleResize(!1),setTimeout((function(){e._toggleResize(!0)}),50)}},_keydown:function(e){var t,i,s,a,n=e.keyCode,l=e.altKey,r=this.popup.visible();if(this.filterInput&&(t=this.filterInput[0]===c()),this.wrapper&&(i=this.wrapper[0]===c()),i){if(n===u.ESC)return this._clearTextAndValue(),void e.preventDefault();if(this._isMultipleSelection()){if(n===u.LEFT)return this._focusPrevTag(),void e.preventDefault();if(n===u.RIGHT)return this._focusNextTag(),void e.preventDefault();if(n===u.HOME)return this._focusFirstTag(),void e.preventDefault();if(n===u.END)return this._focusLastTag(),void e.preventDefault();if(n===u.DELETE)return(s=this.tagList.find(".k-focus").first()).length&&(a=this._tags[s.index()],this._removeTag(a)),void e.preventDefault();if(n===u.BACKSPACE)return((s=this.tagList.find(".k-focus").first()).length||(s=this._focusLastTag()).length)&&(a=this._tags[s.index()],this._removeTag(a)),void e.preventDefault()}}return t&&(n===u.ESC&&this._clearFilter(),n!==u.UP||l||(this.wrapper.trigger("focus"),e.preventDefault()),g.msie&&g.version<10&&(n!==u.BACKSPACE&&n!==u.DELETE||this._search()),n===u.TAB)||l&&n===u.UP||n===u.ESC?(this.close(),this.wrapper.trigger("focus"),void e.preventDefault()):void(n===u.ENTER&&this._typingTimeout&&this.filterInput&&r?e.preventDefault():(n!==u.SPACEBAR||t||(this._toggle(!r),e.preventDefault()),l&&n===u.DOWN&&!r&&(this.open(),e.preventDefault()),n===u.DOWN&&r&&(this.filterInput&&!t?this.filterInput.trigger("focus"):this.checkAll&&this.checkAll.is(":visible")?this.checkAll.find("input").trigger("focus"):this.tree.is(":visible")&&(this.tree[0].focus({preventScroll:!0}),this._ie11PreventScrollOnFocus()),e.preventDefault()),n===u.TAB&&r&&(this.close(),this.wrapper.trigger("focus"),e.preventDefault())))},_focusPrevTag:function(){var e=this.tagList.find(".k-focus");if(e.length){var t=this._activeId;e.first().removeClass(T).removeAttr("id").prev(L).addClass(T).attr("id",t),this.wrapper.attr("aria-activedescendant",t)}else this._focusLastTag()},_focusNextTag:function(){var e=this.tagList.find(".k-focus");if(e.length){var t=this._activeId;e.first().removeClass(T).removeAttr("id").next(L).addClass(T).attr("id",t),this.wrapper.attr("aria-activedescendant",t)}else this._focusFirstTag()},_focusFirstTag:function(){var e=this._activeId;this._clearDisabledTag();var t=this.tagList.children(L).first().addClass(T).attr("id",e);return this.wrapper.attr("aria-activedescendant",e),t},_focusLastTag:function(){var e=this._activeId;this._clearDisabledTag();var t=this.tagList.children(L).last().addClass(T).attr("id",e);return this.wrapper.attr("aria-activedescendant",e),t},_clearDisabledTag:function(){this.tagList.find(".k-focus").removeClass(T).removeAttr("id")},_search:function(){var e=this;clearTimeout(e._typingTimeout),e._typingTimeout=setTimeout((function(){var t=e.filterInput.val();e._prev!==t&&(e._prev=t,e.search(t)),e._typingTimeout=null}),e.options.delay)},_clearFilter:function(){this.filterInput.val().length&&(this.filterInput.val(""),this._prev="",this._filtering=!0,this.treeview.dataSource.filter({}))},_removeTagClick:function(t){t.stopPropagation();var i=this._tags[e(t.currentTarget.closest(L)).index()];this._removeTag(i)},_removeTag:function(e){if(e){var t=e.uid;this._uncheckItemByUid(t)}}});function O(e,t,i){for(var s,a=0,n=t.length-1;a<n;++a)(s=t[a])in e||(e[s]={}),e=e[s];e[t[n]]=i}s.plugin(F),i.cssProperties.registerPrefix("DropDownTree","k-picker-"),i.cssProperties.registerValues("DropDownTree",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}]),i.cssProperties.registerPrefix("MultiSelectDropDownTree","k-input-"),i.cssProperties.registerValues("MultiSelectDropDownTree",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}]);var B=i.Class.extend({init:function(e){this._dropdowntree=e},_initWrapper:function(){this._wrapper(),this._span()},_preselect:function(e){this._dropdowntree._selectValue(e)},_wrapper:function(){var e,t=this._dropdowntree,i=t.element,s=i[0];(e=i.parent()).is("span.k-dropdowntree")||((e=i.wrap("<span />").parent())[0].style.cssText=s.style.cssText,e[0].title=s.title),t._focused=t.wrapper=e.addClass("k-dropdowntree k-picker").addClass(s.className).removeClass("input-validation-error").removeClass("k-invalid").css("display","").attr({accesskey:i.attr("accesskey"),unselectable:"on"}),i.hide().removeAttr("accesskey")},_span:function(){var e,t=this._dropdowntree,i=t.wrapper,s="span.k-input-value-text";(e=i.find(s))[0]||(i.append('<span unselectable="on" class="k-input-inner"><span class="k-input-value-text"></span></span>'+a.renderButton('<button unselectable="on" class="k-input-button" aria-label="select" tabindex="-1"></button>',h({},t.options,{icon:"arrow-s",shape:"none",rounded:"none"}))).append(t.element),e=i.find(s)),t.span=e,t._arrow=i.find(".k-input-button"),t._arrowIcon=t._arrow.find(".k-icon")},_setValue:function(e){var i,s=this._dropdowntree;return e===t||null===e?(e="object"==typeof(i=s._values.slice()[0])?i:s._accessor()||i)===t||null===e?"":e:(s._valueMethodCalled=!0,0===e.length?(s._clearTextAndValue(),void(s._valueMethodCalled=!1)):(s._selectItemByValue(e),s._toggleCloseVisibility(),void s._refreshFloatingLabel()))},_clearValue:function(){var e=this._dropdowntree,t=e.treeview.select(),i=e._values.length,s=!1;e.treeview.dataItem(t)?(e.treeview.dataItem(t).set("selected",!1),s=!0):i>0&&(s=!0),!e._valueMethodCalled&&s&&e.trigger(D)},_checkLoadedItem:function(e,t){var i=this._dropdowntree;i._isNullorUndefined(t)||""===t?!t&&e.selected&&i.treeview.select(i.treeview.findByUid(e.uid)):i._valueComparer(e,t)?(i._preventChangeTrigger=!0,e.set("selected",!0),i._preventChangeTrigger=!1):e.selected&&i.treeview.select(i.treeview.findByUid(e.uid))}}),E=i.Class.extend({init:function(e){this._dropdowntree=e},_initWrapper:function(){var t=this._dropdowntree;this._tagTemplate(),t.element.attr("multiple","multiple").hide(),this._wrapper(),t._tags=new r([]),t._multipleTags=new r([]),this._tagList(),t.span=e('<span unselectable="on" class="k-input-inner"><span class="k-input-value-text"></span></span>').appendTo(t.tagList).find(".k-input-value-text")},_preselect:function(t,s){var a=this._dropdowntree,n=s||a.options.value;Array.isArray(t)||t instanceof i.data.ObservableArray||(t=[t]),(e.isPlainObject(t[0])||t[0]instanceof i.data.ObservableObject||!a.options.dataValueField)&&(a.dataSource.data(t),a.value(n))},_tagTemplate:function(){var t=this._dropdowntree,s=t.options,n=s.valueTemplate,l="multiple"===s.tagMode,r=s.messages.singleTag;n=n?i.template(n):t.valueTemplate,t.valueTemplate=function(i){return a.renderChip('<span unselectable="on" role="option"class="'+(!1===i.enabled?"k-disabled":"")+'"'+(!1===i.enabled?'aria-disabled="true"':"")+"></span>",e.extend({},s,{fillMode:"solid",themeColor:"base",rounded:"medium",attr:{unselectable:"on"},text:l?n(i):'<span unselectable="on" data-bind="text: tags.length"></span><span unselectable="on">&nbsp;'+r+"</span>",removable:l,removeIcon:"x-circle",removableAttr:{unselectable:"on","aria-hidden":!0,"aria-label":t.options.messages.deleteTag,title:t.options.messages.deleteTag}}))}},_wrapper:function(){var e=this._dropdowntree,t=e.element,i=t.parent("span.k-dropdowntree");i[0]||((i=t.wrap('<span class="k-dropdowntree k-input" unselectable="on" />').parent())[0].style.cssText=t[0].style.cssText,i[0].title=t[0].title),e.wrapper=i.addClass(t[0].className).css("display","")},_tagList:function(){var t=this._dropdowntree,s=t.wrapper.children("div.k-input-values");if(!s[0]){var n="multiple"===t.options.tagMode?"tags":"multipleTag";s=e(a.renderChipList('<div unselectable="on" class="k-input-values" data-template="tagTemplate" data-bind="source: '+n+'" />',e.extend({},t.options))).appendTo(t.wrapper)}t.tagList=s,t.tagList.attr("id",i.guid()+"_tagList"),t.wrapper.attr("aria-controls",t.tagList.attr("id"));var l=i.observable({multipleTag:t._multipleTags,tags:t._tags,tagTemplate:t.valueTemplate});i.bind(t.tagList,l),t.tagList.attr("data-stop",!0)},_setValue:function(e){var i=this._dropdowntree,s=i._values;if(e===t||null===e)return i._values.slice();i.setValue(e),i._valueMethodCalled=!0,e.length?(this._removeValues(s,e),i._checkItemByValue(e)):i._clearTextAndValue(),i._valueMethodCalled=!1,i._toggleCloseVisibility(),i._refreshFloatingLabel()},_removeValues:function(e,t){for(var i=this._dropdowntree,s=this._getNewValues(e,t),a=0;a<s.length;a++)for(var n=0;n<i._tags.length;n++)i._valueComparer(i._tags[n],s[a])&&i._uncheckItemByUid(i._tags[n].uid)},_getNewValues:function(e,t){for(var i=[],s=0;s<e.length;s++)-1===t.indexOf(e[s])&&i.push(e[s]);return i},_clearValue:function(){for(var e=this._dropdowntree,t=e._tags.slice(),i=0;i<t.length;i++){var s=t[i].uid;e._preventChangeTrigger=!0,e._uncheckItemByUid(s)}t.length&&(e._preventChangeTrigger=!1,e._valueMethodCalled||e.trigger(D))},_checkLoadedItem:function(e,t){var i=this._dropdowntree;i._noInitialValue&&e.checked?i._checkValue(e):!t.length&&!this._isDataSourceSet||-1===(-1!==t.indexOf(i._currentValue(e))||t.indexOf(e))||this._findTag(i._currentValue(e))||(e.checked?i._checkValue(e):(i._preventChangeTrigger=!0,e.set("checked",!0),i._preventChangeTrigger=!1))},_findTag:function(e){var t=this._dropdowntree;return t._tags.find((function(i){return t._valueComparer(i,e)}))}});i.ui.DropDownTree.SingleSelection=B,i.ui.DropDownTree.MultipleSelection=E}(window.kendo.jQuery);
//# sourceMappingURL=kendo.dropdowntree.js.map
