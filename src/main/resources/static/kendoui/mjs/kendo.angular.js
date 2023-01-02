/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";var __meta__={id:"angular",name:"AngularJS Directives",category:"framework",description:"Adds Kendo UI for AngularJS directives",depends:["core"],defer:!0};!function(e,t,n){"use strict";if(t&&t.injector){var i,o,a,r,l=t.module("kendo.directives",[]),u=t.injector(["ng"]),c=u.get("$parse"),d=u.get("$timeout"),s=u.get("$log"),f=(a={TreeList:"TreeListDataSource",TreeView:"HierarchicalDataSource",Scheduler:"SchedulerDataSource",PivotGrid:"PivotDataSource",PivotConfigurator:"PivotDataSource",PanelBar:"HierarchicalDataSource",Menu:"$PLAIN",ContextMenu:"$PLAIN"},r=function(e,t){return"$PLAIN"==t?e:kendo.data[t].create(e)},function(t,n,i,o){var l=a[i]||"DataSource",u=t.$eval(o),c=r(u,l);return t.$watch(o,(function(t){var i,o=(i=e(i=n),kendo.widgetInstance(i,kendo.ui)||kendo.widgetInstance(i,kendo.mobile.ui)||kendo.widgetInstance(i,kendo.dataviz.ui));if(o&&"function"==typeof o.setDataSource&&t!==u&&t!==o.dataSource){var a=r(t,l);o.setDataSource(a),u=t}})),c}),p={kDataSource:!0,kOptions:!0,kRebind:!0,kNgModel:!0,kNgDelay:!0},v={name:!0,title:!0,style:!0},m=/^(input|select|textarea)$/i;l.factory("directiveFactory",["$compile",function(t){var n,o=!1;i=t;return{create:function(t,i){return{restrict:"AC",require:["?ngModel","^?form"],scope:!1,controller:["$scope","$attrs","$element",function(e,t){this.template=x(A,t),t._cleanUp=x((function(){this.template=null,t._cleanUp=null}),this)}],link:function(a,r,l,u){var c=e(r),d=t.replace(/([A-Z])/g,"-$1");c.attr(d,c.attr("data-"+d)),c[0].removeAttribute("data-"+d),V(a,r,l,t,i,u)&&(n&&clearTimeout(n),n=setTimeout((function(){a.$emit("kendoRendered"),o||(o=!0,e("form").each((function(){var t=e(this).controller("form");t&&t.$setPristine()})))})))}}}}}]);var k={Editor:"textarea",NumericTextBox:"input",DatePicker:"input",DateTimePicker:"input",TimePicker:"input",AutoComplete:"input",ColorPicker:"input",MaskedTextBox:"input",MultiSelect:"input",Upload:"input",Validator:"form",Button:"button",MobileButton:"a",MobileBackButton:"a",MobileDetailButton:"a",ListView:"ul",MobileListView:"ul",ScrollView:"div",PanelBar:"ul",TreeView:"ul",Menu:"ul",ContextMenu:"ul",ActionSheet:"ul",Switch:"input"},g=["MobileView","MobileDrawer","MobileLayout","MobileSplitView","MobilePane","MobileModalView"],h=["MobileApplication","MobileView","MobileModalView","MobileLayout","MobileActionSheet","MobileDrawer","MobileSplitView","MobilePane","MobileScrollView","MobilePopOver"];t.forEach(["MobileNavBar","MobileButton","MobileBackButton","MobileDetailButton","MobileTabStrip","MobileScrollView","MobileScroller"],(function(e){h.push(e),e="kendo"+e,l.directive(e,(function(){return{restrict:"A",link:function(t,n,i){V(t,n,i,e,e)}}}))}));var b=kendo.htmlEncode,w=/{{/g,$=/}}/g;kendo.htmlEncode=function(e){return b(e).replace(w,"{&#8203;{").replace($,"}&#8203;}")};var M=[];kendo.onWidgetRegistered((function(n){M=e.grep(M,(function(e){return!L.apply(null,e)})),function(e,n){function i(e,t){l.directive(e,["directiveFactory",function(n){return n.create(t,e)}])}var o=n?"Mobile":"",a=o+=e.fn.options.name,r="kendo"+o.charAt(0)+o.substr(1).toLowerCase(),u=(o="kendo"+o).replace(/([A-Z])/g,"-$1");if(-1==g.indexOf(o.replace("kendo",""))){var c=o===r?[o]:[o,r];t.forEach(c,(function(e){l.directive(e,(function(){return{restrict:"E",replace:!0,template:function(e,t){var n=k[a]||"div",i=t.kScopeField||t.scopeField;return"<"+n+" "+u+(i?'="'+i+'"':"")+">"+e.html()+"</"+n+">"}}}))}))}h.indexOf(o.replace("kendo",""))>-1||(i(o,o),r!=o&&i(r,o))}(n.widget,"Mobile"==n.prefix)})),L(["ui.Widget","mobile.ui.Widget"],"angular",(function(a,r){var l=this.self;if("init"==a)return!r&&o&&(r=o),o=null,void(r&&r.$angular&&(l.$angular_scope=r.$angular[0],l.$angular_init(l.element,r)));var u=l.$angular_scope;u&&function(e){var t=d;try{d=function(e){return e()},e()}finally{d=t}}((function(){var o=r(),c=o.elements,d=o.data;if(c.length>0)switch(a){case"cleanup":t.forEach(c,(function(t){var n=e(t).data("$$kendoScope");n&&n!==u&&n.$$kendoScope&&function(t,n){t.$destroy(),n&&e(n).removeData("$scope").removeData("$$kendoScope").removeData("$isolateScope").removeData("$isolateScopeNoTemplate").removeClass("ng-scope")}(n,t)}));break;case"compile":var s=l.element.injector(),f=s?s.get("$compile"):i;t.forEach(c,(function(t,i){var a;if(o.scopeFrom)a=o.scopeFrom;else{var r=d&&d[i];r!==n?(a=e.extend(u.$new(),r)).$$kendoScope=!0:a=u}e(t).data("$$kendoScope",a),f(t)(a)})),D(u)}}))})),L("ui.Widget","$angular_getLogicValue",(function(){return this.self.value()})),L("ui.Widget","$angular_setLogicValue",(function(e){this.self.value(e)})),L("ui.Select","$angular_getLogicValue",(function(){var e=this.self.dataItem(),t=this.self.options.dataValueField;return e?this.self.options.valuePrimitive?t?e[t]:e:e.toJSON():null})),L("ui.Select","$angular_setLogicValue",(function(e){var t=this.self,i=t.options,o=i.dataValueField,a=i.text||"";e===n&&(e=""),o&&!i.valuePrimitive&&e&&(a=e[i.dataTextField]||"",e=e[o||i.dataTextField]),!1!==t.options.autoBind||t.listView.bound()||!a&&e&&i.valuePrimitive?t.value(e):t._preselect(e,a)})),L("ui.MultiSelect","$angular_getLogicValue",(function(){var t=this.self.dataItems().slice(0),n=this.self.options.dataValueField;return n&&this.self.options.valuePrimitive&&(t=e.map(t,(function(e){return e[n]}))),t})),L("ui.MultiSelect","$angular_setLogicValue",(function(t){null==t&&(t=[]);var n=this.self,i=n.options,o=i.dataValueField,a=t;o&&!i.valuePrimitive&&(t=e.map(t,(function(e){return e[o]}))),!1!==i.autoBind||i.valuePrimitive||n.listView.bound()?n.value(t):n._preselect(a,t)})),L("ui.Widget","$angular_init",(function(e,t){var n=this.self;if(t&&!Array.isArray(t))for(var i=n.$angular_scope,o=n.events.length;--o>=0;){var a=n.events[o],r=t[a];r&&"string"==typeof r&&(t[a]=n.$angular_makeEventHandler(a,i,r))}})),L("ui.Widget","$angular_makeEventHandler",(function(e,t,n){return n=c(n),function(e){D(t,(function(){n(t,{kendoEvent:e})}))}})),L(["ui.Grid","ui.ListView","ui.TreeView","ui.PanelBar"],"$angular_makeEventHandler",(function(e,n,i){return"change"!=e?this.next():(i=c(i),function(e){var o,a,r,l,u,c,d=e.sender,s=d.options,f={kendoEvent:e};t.isString(s.selectable)&&(o=-1!==s.selectable.indexOf("cell"),a=-1!==s.selectable.indexOf("multiple")),d._checkBoxSelection&&(a=!0),r=f.selected=this.select(),l=f.data=[],u=f.columns=[];for(var p=0;p<r.length;p++){var v=o?r[p].parentNode:r[p],m=d.dataItem(v);o?(t.element.inArray(m,l)<0&&l.push(m),c=t.element(r[p]).index(),t.element.inArray(c,u)<0&&u.push(c)):l.push(m)}a||(f.dataItem=f.data=l[0],f.angularDataItem=kendo.proxyModelSetters(f.dataItem),f.selected=r[0]),D(n,(function(){i(n,f)}))})})),L("ui.Grid","$angular_init",(function(i,o){if(this.next(),o.columns){var a=e.extend({},kendo.Template,o.templateSettings);t.forEach(o.columns,(function(e){!e.field||e.template||e.format||e.values||e.encoded!==n&&!e.encoded||(e.template="<span ng-bind='"+kendo.expr(e.field,"dataItem")+"'>#: "+kendo.expr(e.field,a.paramName)+"#</span>")}))}})),L("mobile.ui.ButtonGroup","value",(function(e){var t=this.self;return null!=e&&(t.select(t.element.children("li.km-button").eq(e)),t.trigger("change"),t.trigger("select",{index:t.selectedIndex})),t.selectedIndex})),L("mobile.ui.ButtonGroup","_select",(function(){this.next(),this.self.trigger("change")})),l.directive("kendoMobileApplication",(function(){return{terminal:!0,link:function(e,t,n){V(e,t,n,"kendoMobileApplication","kendoMobileApplication")}}})).directive("kendoMobileView",(function(){return{scope:!0,link:{pre:function(e,t,n){n.defaultOptions=e.viewOptions,n._instance=V(e,t,n,"kendoMobileView","kendoMobileView")},post:function(e,t,n){n._instance._layout(),n._instance._scroller()}}}})).directive("kendoMobileDrawer",(function(){return{scope:!0,link:{pre:function(e,t,n){n.defaultOptions=e.viewOptions,n._instance=V(e,t,n,"kendoMobileDrawer","kendoMobileDrawer")},post:function(e,t,n){n._instance._layout(),n._instance._scroller()}}}})).directive("kendoMobileModalView",(function(){return{scope:!0,link:{pre:function(e,t,n){n.defaultOptions=e.viewOptions,n._instance=V(e,t,n,"kendoMobileModalView","kendoMobileModalView")},post:function(e,t,n){n._instance._layout(),n._instance._scroller()}}}})).directive("kendoMobileSplitView",(function(){return{terminal:!0,link:{pre:function(e,t,n){n.defaultOptions=e.viewOptions,n._instance=V(e,t,n,"kendoMobileSplitView","kendoMobileSplitView")},post:function(e,t,n){n._instance._layout()}}}})).directive("kendoMobilePane",(function(){return{terminal:!0,link:{pre:function(e,t,n){n.defaultOptions=e.viewOptions,V(e,t,n,"kendoMobilePane","kendoMobilePane")}}}})).directive("kendoMobileLayout",(function(){return{link:{pre:function(e,t,n){V(e,t,n,"kendoMobileLayout","kendoMobileLayout")}}}})).directive("kendoMobileActionSheet",(function(){return{restrict:"A",link:function(t,n,i){n.find("a[k-action]").each((function(){e(this).attr("data-"+kendo.ns+"action",e(this).attr("k-action"))})),V(t,n,i,"kendoMobileActionSheet","kendoMobileActionSheet")}}})).directive("kendoMobilePopOver",(function(){return{terminal:!0,link:{pre:function(e,t,n){n.defaultOptions=e.viewOptions,V(e,t,n,"kendoMobilePopOver","kendoMobilePopOver")}}}})).directive("kendoViewTitle",(function(){return{restrict:"E",replace:!0,template:function(e){return"<span data-"+kendo.ns+"role='view-title'>"+e.html()+"</span>"}}})).directive("kendoMobileHeader",(function(){return{restrict:"E",link:function(e,t){t.addClass("km-header").attr("data-role","header")}}})).directive("kendoMobileFooter",(function(){return{restrict:"E",link:function(e,t){t.addClass("km-footer").attr("data-role","footer")}}})).directive("kendoMobileScrollViewPage",(function(){return{restrict:"E",replace:!0,template:function(e){return"<div data-"+kendo.ns+"role='page'>"+e.html()+"</div>"}}})),t.forEach(["align","icon","rel","transition","actionsheetContext"],(function(e){var t="k"+e.slice(0,1).toUpperCase()+e.slice(1);l.directive(t,(function(){return{restrict:"A",priority:2,link:function(n,i,o){i.attr(kendo.attr(kendo.toHyphens(e)),n.$eval(o[t]))}}}))}));var y,S={TreeMap:["Template"],MobileListView:["HeaderTemplate","Template"],MobileScrollView:["EmptyTemplate","Template"],Grid:["AltRowTemplate","DetailTemplate","RowTemplate"],ListView:["EditTemplate","Template","AltTemplate"],Pager:["SelectTemplate","LinkTemplate"],PivotGrid:["ColumnHeaderTemplate","DataCellTemplate","RowHeaderTemplate"],Scheduler:["AllDayEventTemplate","DateHeaderTemplate","EventTemplate","MajorTimeHeaderTemplate","MinorTimeHeaderTemplate"],ScrollView:["Template"],PanelBar:["Template"],TreeView:["Template"],Validator:["ErrorTemplate"]};y={},t.forEach(S,(function(e,n){t.forEach(e,(function(e){y[e]||(y[e]=[]),y[e].push("?^^kendo"+n)}))})),t.forEach(y,(function(e,t){var n="k"+t,i=kendo.toHyphens(n);l.directive(n,(function(){return{restrict:"A",require:e,terminal:!0,compile:function(t,o){if(""===o[n]){t.removeAttr(i);var a=t[0].outerHTML;return function(t,o,r,l){for(var u;!u&&l.length;)u=l.shift();u?(u.template(n,a),o.remove()):s.warn(i+" without a matching parent widget found. It can be one of the following: "+e.join(", "))}}}}}))}))}function V(t,i,a,r,l,u){if(!(i instanceof jQuery))throw new Error("The Kendo UI directives require jQuery to be available before AngularJS. Please include jquery before angular in the document.");var f=a.kNgDelay,p=t.$eval(f),v=(u=u||[])[0],m=u[1],k=e(i)[r];if(!k)return window.console.error("Could not find: "+r),null;var g=_(t,i,a,r,k),h=g.options;if(g.unresolved.length){for(var b=[],w=0,$=g.unresolved.length;w<$;w++){var M=g.unresolved[w],y=e.Deferred((function(e){var i=t.$watch(M.path,(function(t){t!==n&&(i(),e.resolve())}))})).promise();b.push(y)}e.when.apply(null,b).then(A)}else{if(!f||p)return A();var V=t.$root||t,x=function(){var e=t.$watch(f,(function(t){t!==n&&(e(),i.removeAttr(a.$attr.kNgDelay),f=null,d(A))}))};/^\$(digest|apply)$/.test(V.$$phase)?x():t.$apply(x)}function A(){var u;a.kRebind&&(u=e(e(i)[0].cloneNode(!0))),h=_(t,i,a,r,k).options,i.is("select")&&function(t){if(t.length>0){var n=e(t[0]);!/\S/.test(n.text())&&/^\?/.test(n.val())&&n.remove();for(var i=0;i<t.length;i++)e(t[i]).off("$destroy")}}(i[0].options);var d=k.call(i,o=h).data(r);!function(e,t,n,i,o){if(n[o]){var a=c(n[o]).assign;if(!a)throw new Error(o+" attribute used but expression in it is not assignable: "+n[i]);a(t,e)}}(d,t,a,r,l),t.$emit("kendoWidgetCreated",d);var f=function(e,t){var n=e.$on("$destroy",(function(){n(),t&&(kendo.destroy(t.element),t=null)}));return n}(t,d);if(a.kRebind&&function(t,n,i,o,a,r,l){var u=n.$watch(a,(function(a,c){if(!t._muteRebind&&a!==c){u(),l._cleanUp&&l._cleanUp();var d=S[t.options.name];d&&d.forEach((function(t){var i=n.$eval(l["k"+t]);i&&o.append(e(i).attr(kendo.toHyphens("k"+t),""))}));var s=e(t.wrapper)[0],f=e(t.element)[0];"Upload"===t.options.name&&(i=e(f));var p=i.injector().get("$compile");t._destroy(),r&&r(),t=null,f&&(s&&s.parentNode.replaceChild(f,s),e(i).replaceWith(o)),p(o)(n)}}),!0);D(n)}(d,t,i,u,a.kRebind,f,a),a.kNgDisabled){var p=a.kNgDisabled,g=t.$eval(p);g&&d.enable(!g),function(e,t,n,i){if(kendo.ui.PanelBar&&e instanceof kendo.ui.PanelBar||kendo.ui.Menu&&e instanceof kendo.ui.Menu)return void s.warn("k-ng-disabled specified on a widget that does not have the enable() method: "+e.options.name);t.$watch(i,(function(t,n){t!=n&&e.enable(!t)}))}(d,t,0,p)}if(a.kNgReadonly){var b=a.kNgReadonly,w=t.$eval(b);w&&d.readonly(w),function(e,t,n,i){if("function"!=typeof e.readonly)return void s.warn("k-ng-readonly specified on a widget that does not have the readonly() method: "+e.options.name);t.$watch(i,(function(t,n){t!=n&&e.readonly(t)}))}(d,t,0,b)}return a.kNgModel&&P(d,t,a.kNgModel),v&&function(e,t,i,o,a){if(!e.value)return;var r,l=!1;r=T(i)?function(){return function(e){if(/checkbox|radio/i.test(e.attr("type")))return e.prop("checked");return e.val()}(i)}:function(){return e.value()};var u=function(){var i=o.$viewValue;i===n&&(i=o.$modelValue),i===n&&(i=null),l=!0,setTimeout((function(){if(l=!1,e){var n=t[e.element.attr("k-ng-model")];n&&(i=n),(!1!==e.options.autoBind||e.listView.bound()||i)&&e.value(i)}}),0)};o.$render=u,setTimeout((function(){o.$render!==u&&(o.$render=u,o.$render())})),T(i)&&i.on("change",(function(){l=!0}));var c=function(e){return function(){var n;l&&!i.is("select")||(e&&a&&(n=a.$pristine),o.$setViewValue(r()),e&&(o.$setPristine(),n&&a.$setPristine()),D(t))}};e.first("change",c(!1)),e.first("spin",c(!1)),kendo.ui.AutoComplete&&e instanceof kendo.ui.AutoComplete||e.first("dataBound",c(!0));var d=r();isNaN(o.$viewValue)||d==o.$viewValue||(o.$isEmpty(o.$viewValue)?null!=d&&""!==d&&d!=o.$viewValue&&o.$setViewValue(d):e.value(o.$viewValue));o.$setPristine()}(d,t,i,v,m),d&&function(t,n){if(!window.MutationObserver||!t.wrapper)return;var i=[].slice.call(e(n)[0].classList),o=new MutationObserver((function(n){a(),t&&(n.forEach((function(n){var o=e(t.wrapper)[0];switch(n.attributeName){case"class":var a=[].slice.call(n.target.classList);a.forEach((function(e){i.indexOf(e)<0&&(o.classList.add(e),kendo.ui.ComboBox&&t instanceof kendo.ui.ComboBox&&t.input[0].classList.add(e))})),i.forEach((function(e){a.indexOf(e)<0&&(o.classList.remove(e),kendo.ui.ComboBox&&t instanceof kendo.ui.ComboBox&&t.input[0].classList.remove(e))})),i=a;break;case"disabled":"function"!=typeof t.enable||t.element.attr("readonly")||t.enable(!e(n.target).attr("disabled"));break;case"readonly":"function"!=typeof t.readonly||t.element.attr("disabled")||t.readonly(!!e(n.target).attr("readonly"))}})),r())}));function a(){o.disconnect()}function r(){o.observe(e(n)[0],{attributes:!0})}r(),t.first("destroy",a)}(d,i),d}}function _(i,o,a,r,l){var u=r.replace(/^kendo/,""),c=[],d=a.kOptions||a.options,s=i.$eval(d);d&&s===n&&c.push({option:"options",path:d});var m=t.extend({},a.defaultOptions,s);function k(e,o){var a=t.copy(i.$eval(o));a===n?c.push({option:e,path:o}):m[e]=a}var g=l.widget.prototype.options,h=l.widget.prototype.events;e.each(a,(function(e,t){if("source"!==e&&"kDataSource"!==e&&"kScopeField"!==e&&"scopeField"!==e){var n="data"+e.charAt(0).toUpperCase()+e.slice(1);if(0===e.indexOf("on")){var i=e.replace(/^on./,(function(e){return e.charAt(2).toLowerCase()}));h.indexOf(i)>-1&&(m[i]=t)}if(g.hasOwnProperty(n))k(n,t);else if(g.hasOwnProperty(e)&&!v[e])k(e,t);else if(!p[e]){var o=e.match(/^k(On)?([A-Z].*)/);if(o){var a=o[2].charAt(0).toLowerCase()+o[2].slice(1);o[1]&&"kOnLabel"!=e?m[a]=t:("kOnLabel"==e&&(a="onLabel"),k(a,t))}}}}));var b=a.kDataSource||a.source;return b&&(m.dataSource=f(i,o,u,b)),m.$angular=[i],{options:m,unresolved:c}}function T(e){return m.test(e[0].tagName)}function P(t,i,o){if(kendo.ui.DateRangePicker&&t instanceof kendo.ui.DateRangePicker){var a,r=o.split(","),l=r[0].trim();return P(t._startDateInput,i,l),void(r[1]?(a=r[1].trim(),P(t._endDateInput,i,a),t.range({start:i[l],end:i[a]})):t.range({start:i[l],end:null}))}if("function"==typeof t.value){var u=e(t.element).parents("ng-form, form").first(),d=kendo.getter(u.attr("name"),!0)(i),f=c(o),p=f.assign,v=!1,m=kendo.ui.MultiSelect&&t instanceof kendo.ui.MultiSelect||kendo.ui.RangeSlider&&t instanceof kendo.ui.RangeSlider,k=function(e){return e&&m?e.length:0},g=k(f(i));t.$angular_setLogicValue(f(i));var h=function(e,i){e===n&&(e=null),v||e==i&&k(e)==g||(g=k(e),t.$angular_setLogicValue(e))};m?i.$watchCollection(o,h):i.$watch(o,h);var b=function(){v=!0,d&&d.$pristine&&d.$setDirty(),D(i,(function(){p(i,t.$angular_getLogicValue()),g=k(f(i))})),v=!1};t.first("change",b),t.first("spin",b)}else s.warn("k-ng-model specified on a widget that does not have the value() method: "+t.options.name)}function x(e,t){return function(n,i){return e.call(t,n,i)}}function A(e,t){this[e]=kendo.stringify(t)}function D(e,t){var n=e.$root||e,i=/^\$(digest|apply)$/.test(n.$$phase);t?i?t():n.$apply(t):i||n.$digest()}function L(e,n,i){if(Array.isArray(e))return t.forEach(e,(function(e){L(e,n,i)}));if("string"==typeof e){for(var o=e.split("."),a=kendo;a&&o.length>0;)a=a[o.shift()];if(!a)return M.push([e,n,i]),!1;e=a.prototype}var r=e[n];return e[n]=function(){var e=this,t=arguments;return i.apply({self:e,next:function(){return r.apply(e,arguments.length>0?arguments:t)}},t)},!0}}(window.kendo.jQuery,window.angular);
//# sourceMappingURL=kendo.angular.js.map
