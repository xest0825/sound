/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.list.js";import"./kendo.mobile.scroller.js";import"./kendo.virtuallist.js";var __meta__={id:"autocomplete",name:"AutoComplete",category:"web",description:"The AutoComplete widget provides suggestions depending on the typed text.It also allows multiple value entries.",depends:["list"],features:[{id:"mobile-scroller",name:"Mobile scroller",description:"Support for kinetic scrolling in mobile device",depends:["mobile.scroller"]},{id:"virtualization",name:"VirtualList",description:"Support for virtualization",depends:["virtuallist"]}]};!function(e,t){var i=window.kendo,s=i.support,o=i.caret,a=i._activeElement,l=s.placeholder,r=i.ui,n=r.List,u=i.keys,c=i.data.DataSource,d="aria-disabled",p="aria-readonly",_="change",h="disabled",f="readonly",g="k-focus",m="k-hidden",v="k-disabled",y=".kendoAutoComplete";function C(e,t,i){return i?t.substring(0,e).split(i).length-1:0}var w=n.extend({init:function(t,s){var o,a=this;a.ns=y,s=Array.isArray(s)?{dataSource:s}:s,n.fn.init.call(a,t,s),t=a.element,(s=a.options).placeholder=s.placeholder||t.attr("placeholder"),l&&t.attr("placeholder",s.placeholder),a._wrapper(),a._loader(),a._clearButton(),a._dataSource(),a._ignoreCase(),t[0].type="text",o=a.wrapper,a._popup(),t.addClass("k-input-inner").on("keydown"+y,a._keydown.bind(a)).on("keypress"+y,a._keypress.bind(a)).on("input"+y,a._search.bind(a)).on("paste"+y,a._search.bind(a)).on("focus"+y,(function(){a._prev=a._accessor(),a._oldText=a._prev,a._placeholder(!1),o.addClass(g)})).on("focusout"+y,(function(){a._change(),a._placeholder(),a.close(),o.removeClass(g)})).attr({autocomplete:"off",role:"combobox","aria-expanded":!1}),a._clear.on("click"+y+" touchend"+y,a._clearValue.bind(a)),a._enable(),a._old=a._accessor(),a._placeholder(),a._initList(),e(a.element).parents("fieldset").is(":disabled")&&a.enable(!1),a.listView.bind("click",(function(e){e.preventDefault()})),a._resetFocusItemHandler=a._resetFocusItem.bind(a),i.notify(a),a._toggleCloseVisibility(),a._applyCssClasses(),s.label&&a._label(),a._aria()},options:{name:"AutoComplete",enabled:!0,suggest:!1,template:"",groupTemplate:"#:data#",fixedGroupTemplate:"#:data#",dataTextField:"",minLength:1,enforceMinLength:!1,delay:200,height:200,filter:"startswith",ignoreCase:!0,highlightFirst:!1,separator:null,placeholder:"",animation:{},virtual:!1,value:null,clearButton:!0,autoWidth:!1,popup:null,size:"medium",fillMode:"solid",rounded:"medium",label:null},_dataSource:function(){var e=this;e.dataSource&&e._refreshHandler?e._unbindDataSource():(e._progressHandler=e._showBusy.bind(e),e._errorHandler=e._hideBusy.bind(e)),e.dataSource=c.create(e.options.dataSource).bind("progress",e._progressHandler).bind("error",e._errorHandler)},setDataSource:function(e){this.options.dataSource=e,this._dataSource(),this.listView.setDataSource(this.dataSource)},events:["open","close",_,"select","filtering","dataBinding","dataBound"],setOptions:function(e){var t=this._listOptions(e);n.fn.setOptions.call(this,e),this.listView.setOptions(t),this._accessors(),this._aria(),this._clearButton()},_listOptions:function(t){var i=n.fn._listOptions.call(this,e.extend(t,{skipUpdateOnBind:!0}));return i.dataValueField=i.dataTextField,i.selectedItemChange=null,i},_editable:function(e){var t=this,i=t.element,s=t.wrapper.off(y),o=e.readonly,a=e.disable;o||a?(s.addClass(a?v:"").removeClass(a?"":v),i.attr(h,a).attr(f,o).attr(d,a).attr(p,o)):(s.removeClass(v).on("mouseenter.kendoAutoComplete mouseleave.kendoAutoComplete",t._toggleHover),i.prop(h,!1).prop(f,!1).attr(d,!1).attr(p,!1))},close:function(){var e=this,t=e.listView.focus();t&&t.removeClass("k-selected"),e.popup.close(),e._deactivateItem()},destroy:function(){var e=this;e.element.off(y),e._clear.off(y),e.wrapper.off(y),n.fn.destroy.call(e)},refresh:function(){this.listView.refresh()},select:function(e){this._select(e)},search:function(e){var t,i=this,s=i.options,a=s.ignoreCase,l=i._separator(),r=i.dataSource.options.accentFoldingFiltering;e=e||i._accessor(),clearTimeout(i._typingTimeout),l&&(e=function(e,t,i){return t.split(i)[C(e,t,i)]}(o(i.element)[0],e,l)),t=e.length,(!s.enforceMinLength&&!t||t>=s.minLength)&&(i._open=!0,i._mute((function(){this.listView.value([])})),i._filterSource({value:a?r?e.toLocaleLowerCase(r):e.toLowerCase():e,operator:s.filter,field:s.dataTextField,ignoreCase:a}),i.one("close",i._unifySeparators.bind(i))),i._toggleCloseVisibility()},suggest:function(e){var i,s=this,l=s._last,r=s._accessor(),c=s.element[0],d=o(c)[0],p=s._separator(),_=r.split(p),h=C(d,r,p),f=d,g=s.dataSource.options.accentFoldingFiltering;l!=u.BACKSPACE&&l!=u.DELETE?("string"!=typeof(e=e||"")&&(e[0]&&(e=s.dataSource.view()[n.inArray(e[0],s.ul[0])]),e=e?s._text(e):""),d<=0&&(d=(g?r.toLocaleLowerCase(g):r.toLowerCase()).indexOf(g?e.toLocaleLowerCase(g):e.toLowerCase())+1),i=(i=r.substring(0,d).lastIndexOf(p))>-1?d-(i+p.length):d,r=_[h].substring(0,i),e&&(e=e.toString(),(i=(g?e.toLocaleLowerCase(g):e.toLowerCase()).indexOf(g?r.toLocaleLowerCase(g):r.toLowerCase()))>-1&&(f=d+(e=e.substring(i+r.length)).length,r+=e),p&&""!==_[_.length-1]&&_.push("")),_[h]=r,s._accessor(_.join(p||"")),c===a()&&o(c,d,f)):s._last=t},value:function(e){if(e===t)return this._accessor();this.listView.value(e),this._accessor(e),this._old=this._accessor(),this._oldText=this._accessor(),this._toggleCloseVisibility(),this._refreshFloatingLabel()},_click:function(e){var t=e.item,i=this,s=i.element,a=i.listView.dataItemByIndex(i.listView.getElementIndex(t));e.preventDefault(),i._active=!0,i.trigger("select",{dataItem:a,item:t})?i.close():(i._oldText=s.val(),i._select(t).done((function(){i._blur(),o(s,s.val().length)})))},_clearText:e.noop,_resetFocusItem:function(){var e=this.options.highlightFirst?0:-1;this.options.virtual&&this.listView.scrollTo(0),this.listView.focus(e)},_listBound:function(){var e,i=this,s=i.popup,o=i.options,l=i.dataSource.flatView(),r=l.length,n=i.dataSource._group?i.dataSource._group.length:0,u=i.element[0]===a();i._renderFooter(),i._renderNoData(),i._toggleNoData(!r),i._toggleHeader(!!n&&!!r),i._resizePopup(),s.position(),r&&o.suggest&&u&&i._inputValue()&&i.suggest(l[0]),i._open&&(i._open=!1,e=i._allowOpening()?"open":"close",i._typingTimeout&&!u&&(e="close"),r&&(i._resetFocusItem(),o.virtual&&i.popup.unbind("activate",i._resetFocusItemHandler).one("activate",i._resetFocusItemHandler)),s[e](),i._typingTimeout=t),i._touchScroller&&i._touchScroller.reset(),i._hideBusy(),i.trigger("dataBound")},_mute:function(e){this._muted=!0,e.call(this),this._muted=!1},_listChange:function(){(this._active||this.element[0]===a())&&!this._muted&&this._selectValue(this.listView.selectedDataItems()[0])},_selectValue:function(e){var t=this._separator(),i="";e&&(i=this._text(e)),null===i&&(i=""),t&&(i=function(e,t,i,s,o){var a=t.split(s);return a.splice(C(e,t,s),1,i),s&&""!==a[a.length-1]&&a.push(""),a.join(o)}(o(this.element)[0],this._accessor(),i,t,this._defaultSeparator())),this._prev=i,this._accessor(i),this._placeholder()},_unifySeparators:function(){return this._accessor(this.value().split(this._separator()).join(this._defaultSeparator())),this},_preselect:function(e,t){this._inputValue(t),this._accessor(e),this._old=this.oldText=this._accessor(),this.listView.setValue(e),this._placeholder()},_change:function(){var e=this,t=e._unifySeparators().value(),i=t!==n.unifyType(e._old,typeof t),s=i&&!e._typing,o=e._oldText!==t;e._old=t,e._oldText=t,(s||o)&&e.element.trigger(_),i&&e.trigger(_),e.typing=!1,e._toggleCloseVisibility()},_accessor:function(e){var i=this,s=i.element[0];if(e===t)return e=s.value,s.className.indexOf("k-readonly")>-1&&e===i.options.placeholder?"":e;s.value=null===e?"":e,i._placeholder()},_keydown:function(e){var t=this,i=e.keyCode,s=t.listView,o=t.popup.visible(),a=s.focus();if(t._last=i,i===u.DOWN)o?this._move(a?"focusNext":"focusFirst"):t.value()&&t._filterSource({value:t.ignoreCase?t.value().toLowerCase():t.value(),operator:t.options.filter,field:t.options.dataTextField,ignoreCase:t.ignoreCase}).done((function(){t._allowOpening()&&(t._resetFocusItem(),t.popup.open())})),e.preventDefault();else if(i===u.ESC)o?(e.preventDefault(),t.close()):t._clearValue();else if(e.altKey&&i===u.UP&&o)e.preventDefault(),t.close();else if(i===u.UP)o&&this._move(a?"focusPrev":"focusLast"),e.preventDefault();else if(i===u.HOME)this._move("focusFirst");else if(i===u.END)this._move("focusLast");else if(i===u.ENTER||i===u.TAB){if(i===u.ENTER&&o&&e.preventDefault(),o&&a){var l=s.dataItemByIndex(s.getElementIndex(a));if(t.trigger("select",{dataItem:l,item:a}))return;this._select(a)}this._blur()}else if(!t.popup.visible()||i!==u.PAGEDOWN&&i!==u.PAGEUP)t.popup._hovered=!0,t._search();else{e.preventDefault();var r=i===u.PAGEDOWN?1:-1;s.scrollWith(r*s.screenHeight())}},_keypress:function(){this._oldText=this.element.val(),this._typing=!0},_move:function(e){this.listView[e](),this.options.suggest&&this.suggest(this.listView.focus())},_hideBusy:function(){var e=this;clearTimeout(e._busy),e._loading.addClass(m),e.element.attr("aria-busy",!1),e._busy=null,e._showClear()},_showBusy:function(){var e=this;e._busy||(e._busy=setTimeout((function(){e.element.attr("aria-busy",!0),e._loading.removeClass(m),e._hideClear()}),100))},_placeholder:function(e){if(!l){var i,s=this,a=s.element,r=s.options.placeholder;if(r){if(i=a.val(),e===t&&(e=!i),e||(r=i!==r?i:""),i===s._old&&!e)return;a.toggleClass("k-readonly",e).val(r),r||a[0]!==document.activeElement||o(a[0],0,0)}}},_separator:function(){var e=this.options.separator;return e instanceof Array?new RegExp(e.join("|"),"gi"):e},_defaultSeparator:function(){var e=this.options.separator;return e instanceof Array?e[0]:e},_inputValue:function(){return this.element.val()},_search:function(){var e=this;clearTimeout(e._typingTimeout),e._typingTimeout=setTimeout((function(){e._prev!==e._accessor()&&(e._prev=e._accessor(),e.search())}),e.options.delay)},_select:function(e){var t=this;return t._active=!0,t.listView.select(e).done((function(){t._active=!1}))},_loader:function(){this._loading=e('<span class="k-icon k-i-loading k-input-loading-icon k-hidden"></span>').insertAfter(this.element)},_clearButton:function(){n.fn._clearButton.call(this),this.options.clearButton&&(this._clear.insertAfter(this.element),this.wrapper.addClass("k-autocomplete-clearable"))},_toggleHover:function(t){e(t.currentTarget).toggleClass("k-hover","mouseenter"===t.type)},_toggleCloseVisibility:function(){this.value()?this._showClear():this._hideClear()},_wrapper:function(){var e,t=this,i=t.element,s=i[0];(e=i.parent()).is("span.k-autocomplete")||(e=i.wrap("<span />").parent()),e.attr("tabindex",-1),e[0].style.cssText=s.style.cssText,i.css({width:"",height:s.style.height}),t._focused=t.element,t.wrapper=e.addClass("k-autocomplete k-input").addClass(s.className).removeClass("input-validation-error")},_clearValue:function(){n.fn._clearValue.call(this),this.element.focus()}});r.plugin(w),i.cssProperties.registerPrefix("AutoComplete","k-input-"),i.cssProperties.registerValues("AutoComplete",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}])}(window.kendo.jQuery);
//# sourceMappingURL=kendo.autocomplete.js.map
