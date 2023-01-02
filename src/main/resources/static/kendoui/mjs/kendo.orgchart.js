/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.treelist.js";import"./kendo.core.js";import"./kendo.menu.js";import"./kendo.dialog.js";import"./kendo.form.js";import"./kendo.upload.js";import"./kendo.window.js";!function(t,e){var i=t.extend,a=kendo.data,n=a.Query,s=a.DataSource,r=a.TreeListDataSource,d=a.Model,o=a.ObservableArray,l=d.define({id:"id",parentId:"parentId",fields:{id:{type:"number",editable:!1},parentId:{type:"number",nullable:!0},name:{type:"string",validation:{required:!0}},title:{type:"string"},avatar:{type:"string"}},init:function(t){d.fn.init.call(this,t),this._loaded=!1,this.parentIdField||(this.parentIdField="parentId"),this.nameField||(this.nameField="name"),this.titleField||(this.titleField="title"),this.avatarField||(this.avatarField="avatar"),this.parentId=this.get(this.parentIdField),this.name=this.get(this.nameField),this.title=this.get(this.titleField),this.avatar=this.get(this.avatarField)},accept:function(t){d.fn.accept.call(this,t),this.parentId=this.get(this.parentIdField),this.name=this.get(this.nameField),this.title=this.get(this.titleField),this.avatar=this.get(this.avatarField)},set:function(t,e,i){"parentId"==t&&"parentId"!=this.nameField&&(this[this.parentIdField]=e),"name"==t&&"name"!=this.nameField&&(this[this.nameField]=e),"title"==t&&"title"!=this.titleField&&(this[this.titleField]=e),"avatar"==t&&"avatar"!=this.avatarField&&(this[this.avatarField]=e),d.fn.set.call(this,t,e,i),t==this.parentIdField&&(this.parentId=this.get(this.parentIdField)),t==this.nameField&&(this.name=this.get(this.nameField)),t==this.titleField&&(this.title=this.get(this.titleField)),t==this.avatarField&&(this.avatar=this.get(this.avatarField))},loaded:function(t){if(t===e)return this._loaded;this._loaded=t},shouldSerialize:function(t){return d.fn.shouldSerialize.call(this,t)&&"_loaded"!==t&&"_error"!=t&&"_edit"!=t&&!("parentId"!==this.parentIdField&&"parentId"===t)}});l.parentIdField="parentId",l.nameField="name",l.titleField="title",l.avatarField="avatar",l.define=function(t,i){i===e&&(i=t,t=l);var a=i.parentId||"parentId",n=i.name||"name",s=i.title||"title",r=i.avatar||"avatar";i.parentIdField=a,i.nameField=n,i.titleField=s,i.avatarField=r;var o=d.define(t,i);return a&&(o.parentIdField=a),n&&(o.nameField=n),s&&(o.titleField=s),r&&(o.avatarField=r),o};var h=r.extend({init:function(t){r.fn.init.call(this,i(!0,{},{schema:{modelBase:l,model:l}},t))},groupedItemsTree:function(t){var e=this._childrenMap(this.view()),i=e[this._defaultParentId()]||[],a=new n(i).group({field:t}).toArray();return this._innerGroupedItemsTree(t,a,e)},itemChildren:function(t,i){var a,s,r={field:"parentId",operator:"eq",value:null},d=this._sort&&this._sort.length?this._sort:{};if(s=i?this.view():this.data(),t){if((a=t.get("id"))===e||null===a||""===a)return[];r.value=a}return s=new n(s).filter(r).sort(d).toArray()},itemsTree:function(t,a){var s,r,d,o=[],l=this.itemChildren(t,!0);for(d=0;d<l.length;d++)(s=l[d]).get("expanded")&&(r=this.itemsTree(s,a),(s=i(!0,{},s)).children=r),s=i(!0,{},s),o.push(s);return null!==a&&a!==e&&(o=new n(o).group({field:a}).toArray()),o},prospectParents:function(t,e){var i,a,n,s=[],r=this.itemChildren(e,!1);for(n=0;n<r.length;n++)(i=r[n]).get("id")!==t.get("id")&&(s.push(i),i.get("hasChildren")&&(a=this.prospectParents(t,i),s=s.concat(a)));return s},read:function(t){return s.fn.read.call(this,t).then(this._loadExpanded.bind(this,t))},toggleChildren:function(i,a){var n=t.Deferred().resolve().promise(),s=i.loaded();return i._error&&(i.expanded=!1,i._error=e),void 0===a&&(a=!i.expanded),i.expanded=a,s||(n=this.load(i)),n},_innerGroupedItemsTree:function(t,e,i){var a,s,r,d,o,l,h;for(s=0;s<e.length;s++){for(a=e[s],l=[],!1,r=0;r<a.items.length;r++)h=a.items[r],!a.hasChildren&&h.hasChildren&&(a.hasChildren=!0),h.expanded&&(a.expanded=!0),d=a.items[r].get("id"),l=l.concat(i[d]);a.expanded&&(o=new n(l).group({field:t}).toArray(),a.children=this._innerGroupedItemsTree(t,o,i)),!a.hasChildren&&l.length>0&&(a.hasChildren=!0)}return e},_loadExpanded:function(t){var i,a,n;if(t)for(i=null!==t.id&&t.id!==e?this._byParentId(t.id):this._byParentId(this._defaultParentId()),a=0;a<i.length;a++)(n=i[a]).expanded&&!n.loaded()&&this.toggleChildren(n,!0)}});h.create=function(t){if(Array.isArray(t)?t={data:t}:t instanceof o&&(t={data:t.toJSON()}),!(t instanceof h)&&t instanceof s)throw new Error("Incorrect DataSource type. Only OrgChartDataSource instances are supported");return t instanceof h?t:new h(t)},i(!0,kendo.data,{OrgChartModel:l,OrgChartDataSource:h})}(window.kendo.jQuery),function(t,e){var i=window.kendo,a=i.keys,n=t.extend,s=".kendoOrgChartView",r="click",d="collapse",o="expand",l="menu",h="select",c=".",u=" ",p="#",g="tabindex",m="uid",f="px",_="plus",v="minus",k="aria-owns",b="aria-selected",I="k-orgchart",C="k-orgchart-line",y="k-orgchart-line-v",w="k-orgchart-line-h",x="k-orgchart-line-v-top",S="k-orgchart-group",F="k-orgchart-group-v",T="k-orgchart-group-h",E="k-orgchart-node-group",D="k-orgchart-node-group-container",H="k-orgchart-node-container",P="k-orgchart-node",j="k-orgchart-card",O="k-orgchart-card-menu",L="k-orgchart-button",W="k-focus",N="k-i-plus",q="k-vstack",G="k-hstack",A='<div role="group" id="#: guid #" class="k-orgchart-level-#: level # k-orgchart-group k-pos-absolute k-justify-content-around"></div>',B='<button aria-label="#: label #" tabindex="-1" class="k-orgchart-button k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button"><span class="k-button-icon k-icon k-i-#: buttonSign #"></span></button>',M='<div class="k-card-body k-hstack" style="border-color:#: color #"># if(!!data.avatar) { #<div class="k-avatar k-avatar-solid-primary k-avatar-solid k-avatar-lg k-rounded-full"><span class="k-avatar-image"><img alt="#: name #" src="#: avatar #"></span></div># } #<div class="k-vstack k-card-title-wrap"><div class="k-card-title k-text-ellipsis">#: name #</div># if(data.title) { #<span class="k-spacer"></span><div class="k-card-subtitle k-text-ellipsis">#: title #</div># } #</div># if(editable) { #<span class="k-spacer"></span><div class="k-card-body-actions"><button class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-orgchart-card-menu" role="button" aria-label="#: menuLabel #" tabindex="-1"><span class="k-button-icon k-icon k-i-more-vertical"></span></button></div># } #</div>',R=i.Observable.extend({init:function(t,e){this.element=t,this.options=e||{},i.Observable.fn.init.call(this),this._attachEvents()},events:[d,o,h,l],destroy:function(){i.ui.Widget.fn.destroy.call(this),this.element.off(s)},collapse:function(){return!1},expand:function(){return!1},jqueryGroupElement:function(t){if(t){var e=this._processItem(t);return e.hasClass(D)||(e=e.closest(c+D)),e&&e.length?e:null}},jqueryItemElement:function(t){if(t){var e=this._processItem(t);return e.hasClass(j)||(e=e.closest(c+j)),e&&e.length?e:null}},refresh:function(){this._cacheFocused(),this._clearContent(),this._generateItemsTree(),this._calculateLevels(),this._render()},select:function(t){var e=this._getToSelect(t),i=this.element.find("[tabindex=0]");e&&(i.removeAttr(g).removeClass(W).attr(b,!1),e.attr(g,"0").addClass(W).trigger("focus").attr(b,!0))},_attachEvents:function(){var t=c+j+","+c+D;this.element.on("keydown"+s,t,this._onKeyDown.bind(this)).on(r+s,t,this._onSelect.bind(this)).on(r+s,c+L,this._onButtonClick.bind(this)).on("focus"+s,t,this._onFocus.bind(this)).on("blur"+s,c+W,this._onBlur.bind(this))},_cacheFocused:function(){var t=this.element.find("[tabindex='0']"),e=this._dataItems(t);t.length&&e&&e.length&&!this._idTabIndex&&(this._idTabIndex=e[0].get("id"),t.hasClass(W)?this._shouldRestoreSelection=!0:this._shouldRestoreSelection=!1)},_calculateDimensions:function(){var t=this.element.find(c+this._selector).first();this._buttonHeight||(this._buttonHeight=this.element.find(c+L).first().outerHeight()),this._spacing||(this._spacing=this.element.find(c+y).first().outerHeight()),this._itemWidth||(this._itemWidth=this._calculateItemWidth()),this._itemHeight||(this._itemHeight=t.outerHeight(!0))},_calculateItemWidth:function(){return!1},_calculateLevel:function(){return!1},_calculateLevels:function(){return!1},_clearContent:function(){this.element.empty()},_dataItem:function(t){var e=this.jqueryItemElement(t);if(e&&e.data(m))return this.dataSource.getByUid(e.data(m))},_dataItems:function(){return!1},_generateItemsTree:function(){return!1},_getToSelect:function(){return!1},_groupIsVertical:function(){return!1},_keyCollapse:function(){return!1},_keyExpand:function(){return!1},_keyNext:function(){return!1},_keyPrev:function(){return!1},_keyEnter:function(){return!1},_keyEscape:function(){return!1},_keyEnd:function(){var t=this.element.find(c+j).last();this.element.find("[tabindex=0]")[0]!==t[0]&&this.trigger(h,{item:t,dataItems:[this._dataItem(t)]})},_keyHome:function(){var t=this.element.find(c+j).first();this.element.find("[tabindex=0]")[0]!==t[0]&&this.trigger(h,{item:t,dataItems:[this._dataItem(t)]})},_onBlur:function(){this.element.find(c+W).removeClass(W)},_onKeyDown:function(t){var e=t.keyCode,n=this.element.find("[tabindex=0]"),s=i.support.isRtl(this.element),r=s?[a.LEFT]:[a.RIGHT],d=s?[a.RIGHT]:[a.LEFT],o=a.DOWN,l=a.UP;n&&(this._groupIsVertical(n)&&(r.push(a.DOWN),d.push(a.UP)),e===a.HOME?this._keyHome():e===a.END?this._keyEnd():r.indexOf(e)>-1?(t.preventDefault(),t.stopPropagation(),this._keyNext(n)):d.indexOf(e)>-1?(t.preventDefault(),t.stopPropagation(),this._keyPrev(n)):e===o?(t.preventDefault(),t.stopPropagation(),this._keyExpand(n)):e===l?(t.preventDefault(),t.stopPropagation(),this._keyCollapse(n)):e===a.ENTER?this._keyEnter(n):e===a.ESC&&this._keyEscape(n))},_onButtonClick:function(e){var i,a=this,n=t(e.currentTarget),s=n.find(c+N).length>0,r=n.siblings(c+this._selector),l=this._dataItems(r);if(s){if(a.trigger(o,{item:r,dataItems:l}))return}else if(a.trigger(d,{item:r,dataItems:l}))return;for(i=0;i<l.length;i++)a.dataSource.toggleChildren(l[i],s).then(this.refresh.bind(this))},_onFocus:function(){return!1},_onSelect:function(){return!1},_orientation:function(){return!1},_processItem:function(e){var a;return"string"===t.type(e)?a=this.element.find(e):i.isElement(e)?a=t(e):e instanceof jQuery&&(a=e),a},_render:function(){var e,a=this._itemsTree,n=t(i.template('<div role="tree" aria-orientation="horizontal" aria-label="#: label #" class="k-orgchart-group k-orgchart-level-1 k-pos-absolute k-hstack k-justify-content-center"></div>')({label:this.options.messages.label})),s=this.element,r=this._total,d=s.closest(c+I).css("padding-left");s.append(n),this._renderGroup(n,a,1,this._total,0),e=r*this._itemWidth+(r-1)*this._spacing,n.width(e),s.width(e+Number(d.split(f)[0])),this._setHeight(),this._restoreSelection()},_renderNode:function(e,a,s,r,d){var o,l,h=this.options.messages,c=this.options.cardsColors||i.getSeriesColors(),u=t('<div class="k-orgchart-node k-vstack k-align-items-center"></div>');return l=t(e(n(!0,{},s,{menuLabel:h.menuLabel,level:r,guid:d,editable:!!this.options.editable,color:c[r-1]||c[0]}))),s.attributes&&l.attr(JSON.parse(JSON.stringify(s.attributes))),o=t(a(n(!0,{},s,{menuLabel:h.menuLabel,level:r,guid:d,editable:!!this.options.editable,color:c[r-1]||c[0]}))),l.append(o),u.append(l),u},_renderGroup:function(){return!1},_restoreSelection:function(){var t,e;this._idTabIndex?((e=(t=this.dataSource.get(this._idTabIndex))?this._getToFocus(t):this.element.find(c+this._selector).first()).attr(g,"0"),this._idTabIndex=null):(e=this.element.find(c+this._selector).first()).attr(g,"0"),this._shouldRestoreSelection&&(this._shouldRestoreSelection=!1,this._preventTriggerSelect=!0,e.trigger("focus"),e.addClass(W))},_setHeight:function(){var e,i=this._selector,a=this.element.find(c+L+","+c+i),n=Number.MAX_VALUE,s=0;this._calculateDimensions(),e=this._buttonHeight,this.element.find(c+x).height(this._spacing+e/2),a.each((function(e,i){var a=t(i).offset().top,r=a+t(i).outerHeight(!0);a<n&&(n=a),r>s&&(s=r)})),this.element.height(s-n)}}),V=R.extend({init:function(t,e){R.fn.init.call(this,t,e),this._selector=j},collapse:function(t){var e=this.jqueryItemElement(t);e&&this.dataSource.toggleChildren(this._dataItem(e),!1).then(this.refresh.bind(this))},expand:function(t){var e=this.jqueryItemElement(t);e&&this.dataSource.toggleChildren(this._dataItem(e),!0).then(this.refresh.bind(this))},_calculateItemWidth:function(){return this.element.find(c+this._selector).first().outerWidth(!0)},_calculateLevel:function(t,e){var i,a,n,s=t.length,r=this._maxColumnsPerLevel,d=!1,o=!1;for((!r[e]||r[e]<s)&&(i=r[e],o=!0,r[e]=s),a=0;a<s;a++)(n=t[a]).hasChildren&&(d=!0,n.expanded&&this._calculateLevel(n.children,e+1));!d&&o&&e>0&&(o=!1,r[e]=i||1)},_calculateLevels:function(){var t,e=this._itemsTree,i=this._maxColumnsPerLevel=[],a=1;for(this._calculateLevel(e,0),t=0;t<i.length;t++)a*=i[t];this._total=a},_dataItems:function(t){var e=this.dataSource.getByUid(t.data(m));return e?[e]:null},_generateItemsTree:function(){this._itemsTree=this.dataSource.itemsTree()},_getToFocus:function(t){return this.element.find("[data-uid='"+t.get(m)+"']")},_getToSelect:function(t){return this.jqueryItemElement(t)},_groupIsVertical:function(t){return t.closest(c+S).hasClass(F)},_keyCollapse:function(t){var e,i,a=this._dataItem(t);a.expanded?this.trigger(d,{item:t,dataItems:[a]})||this.collapse(t):a.parentId&&(e=this.dataSource.get(a.parentId).get(m),i=this.element.find("[data-uid='"+e+"']"),this.trigger(h,{item:i,dataItems:[this._dataItem(i)]}))},_keyEnter:function(t){t.find(c+O).length>0&&this.trigger(l,t)},_keyExpand:function(t){var e,i=this._dataItem(t),a=this.element.find(p+t.attr(k));i.hasChildren&&(i.expanded?(e=a.find(c+this._selector).first(),this.trigger(h,{item:e,dataItems:[this._dataItem(e)]})):this.trigger(o,{item:t,dataItems:[i]})||this.expand(t))},_keyNext:function(t){var e=this._dataItem(t),i=t.parent().next(c+P).find(c+j),a=this.element.find(p+t.attr(k));!i.length&&e.hasChildren&&e.expanded&&(i=a.find(c+j).first()),0===i.length||i.hasClass(W)||this.trigger(h,{item:i,dataItems:[this._dataItem(i)]})},_keyPrev:function(t){var e,i=this._dataItem(t),a=t.parent().prev(c+P).find(c+j);!a.length&&i.parentId&&(e=this.dataSource.get(i.parentId).get(m),a=this.element.find("[data-uid='"+e+"']")),0===a.length||a.hasClass(W)||this.trigger(h,{item:a,dataItems:[this._dataItem(a)]})},_onFocus:function(e){var i=t(e.currentTarget),a=t(e.target);if(this._preventTriggerSelect)return e.stopPropagation(),void(this._preventTriggerSelect=!1);if(a.hasClass(O)){if(a.closest("[tabindex='0']").length>0)return void e.stopPropagation();this._preventTriggerSelect=!0}i.hasClass(j)||(i=i.closest(c+j)),i.hasClass(W)||this.trigger(h,{item:i,dataItems:[this._dataItem(i)]})},_onSelect:function(e){var i=t(e.currentTarget),a=i.hasClass(j)?i:i.closest(c+j);(t(e.target).hasClass(O)?t(e.target):t(e.target).closest(c+O)).length>0||i.hasClass(W)||this.trigger(h,{item:a,dataItems:[this._dataItem(a)]})},_orientation:function(e,i,a){var n=t("<div>").addClass(C+u+y);a&&i>1?(e.addClass(F+u+q),e.find(c+H).addClass(q),0===e.find(c+L).length||1===e.find(c+j).length?(e.find(c+j).before(n.clone()),e.find(c+P).first().find(c+y).addClass(x)):i>1&&e.find(c+j).first().before(n.clone())):(e.addClass(T+u+G),e.find(c+H).addClass(G),i>1&&e.find(c+j).before(n.clone().addClass(x)))},_renderGroup:function(e,i,a,n,s){var r,d;d=t('<div class="k-orgchart-node-container k-justify-content-around" style="width:100%"></div>'),e.append(d),r=this._renderInner(d,i,a,n,s),this._orientation(e,a,r)},_renderInner:function(e,a,n,s,r){var d,o,l,h,p,g,m,k,b,I=i.template(B),x=i.template('<div role="treeitem" data-uid="#: uid #" # if(data.hasChildren && data.guid) { #aria-owns="#: guid #" # if(!!data.expanded) { #aria-expanded="true" # } else { #aria-expanded="false" # } ## } #class="k-orgchart-card k-card # if(!!data.cssClass) { ##: data.cssClass ## } #" aria-keyshortcuts="Enter" aria-level="#: level #" aria-selected="false"></div>'),S=s/a.length,F=!0,E=t("<div>").addClass(C+u+y),D=t("<div>").addClass(C+u+w),H=this.options.messages;for(b=this.options.template?"function"==typeof this.options.template?this.options.template:i.template(this.options.template):i.template(M),d=0;d<a.length;d++)o=a[d],l=i.guid(),h=this._renderNode(x,b,o,n,l),o.hasChildren&&(h.append(E.clone()),p=t(I({buttonSign:o.expanded?v:_,label:o.expanded?H.collapse:H.expand})),h.append(p)),e.append(h),this._calculateDimensions(),m=this._itemWidth,k=this._spacing,o.hasChildren&&(F=!1,o.expanded&&(g=this._renderInnerGroup(o,S,r,d,n,l))),g&&g.hasClass(T)&&o.expanded&&o.children&&o.children.length>1&&p.after(D.clone().css({width:(S-S/o.children.length)*(m+k)+f,"margin-top":this._buttonHeight/-2+f}));return S>1&&!F&&e.find(c+P).width((S-1)*(k+m)),F},_renderInnerGroup:function(e,a,n,s,r,d){var o,l=this._itemWidth,h=this._spacing,c=a*l+(a-1)*h,u=s*a*l+n,p=i.template(A),g=i.support.isRtl(this.element)?"right":"left",m=r*(this._itemHeight+this._buttonHeight+h)+h*(r-1)-this._buttonHeight/2;return s>0&&(u+=s*a*h),(o=t(p({guid:d,level:r+1}))).css({width:c+f,top:m+f}),o.css(g,u+f),this.element.append(o),this._renderGroup(o,e.children,r+1,a,u),o}}),U=R.extend({init:function(t,e){R.fn.init.call(this,t,e),this._selector=D},collapse:function(t){var e,i,a=this.jqueryGroupElement(t);if(a)for(e=this._dataItems(a),i=0;i<e.length;i++)this.dataSource.toggleChildren(e[i],!1).then(this.refresh.bind(this))},expand:function(t){var e,i,a=this.jqueryGroupElement(t);if(a)for(e=this._dataItems(a),i=0;i<e.length;i++)this.dataSource.toggleChildren(e[i],!0).then(this.refresh.bind(this))},_dataItems:function(t){var e,i,a=this.dataSource,n=[];return t.hasClass(j)?(e=a.getByUid(t.data(m)))&&n.push(e):t.hasClass(D)&&(this._groupFocused=!0,t.find(c+j).each((function(t,e){(i=a.getByUid(e.getAttribute("data-uid")))&&n.push(i)}))),n},_calculateItemWidth:function(){var t=this.element.find(c+this._selector).first();return this.element.find(c+j).first().outerWidth(!0)+2*Number(t.css("padding-left").split(f)[0])+2*Number(t.css("border-left").split(f)[0])},_calculateLevel:function(t,e){var i,a,n,s=t.length,r=!1,d=0;for(this._maxColumnsPerLevel[e]=this._maxColumnsPerLevel[e]||0,this._maxGroups[e]=this._maxGroups[e]||0,a=0;a<s;a++)(i=(n=t[a]).items.length)>d&&(d=i),(n=t[a]).hasChildren&&(r=!0,n.expanded&&this._calculateLevel(n.children,e+1));s>this._maxGroups[e]&&(this._maxGroups[e]=s),r||(d=1),d>this._maxColumnsPerLevel[e]&&(this._maxColumnsPerLevel[e]=d)},_calculateLevels:function(){var t,e,i=this._itemsTree,a=this._maxColumnsPerLevel=[],n=this._maxGroups=[],s=1;for(this._calculateLevel(i,0),t=a.length-1;t>=0;t--)e=a[t]*n[t],s>a[t]?s*=n[t]:s<e&&(s=e);this._total=s},_generateItemsTree:function(){this._itemsTree=this.dataSource.groupedItemsTree(this.options.groupField)},_getToFocus:function(t){return this._groupFocused?(this._groupFocused=!1,this.element.find("[data-uid='"+t.get(m)+"']").closest(c+D)):this.element.find("[data-uid='"+t.get(m)+"']")},_getToSelect:function(t){return this.jqueryItemElement(t)||this.jqueryGroupElement(t)},_groupIsVertical:function(t){return t.closest(c+H).hasClass(q)},_keyCollapse:function(t){var e,i=[];(i=this._dataItems(t)).some((function(t){return t.expanded}))?(t.hasClass(j)&&(t=t.closest(c+D),i=this._dataItems(t)),this.trigger(d,{item:t,dataItems:i})||this.collapse(t)):i[0].parentId&&(e=this.dataSource.get(i[0].parentId).get(m),this.trigger(h,{item:this.element.find("[data-uid='"+e+"']").closest(c+this._selector),dataItems:i}))},_keyEnter:function(t){var e,i=[];t.hasClass(j)&&t.find(c+O).length>0?this.trigger(l,t):(e=t.find(c+j).first(),i=this._dataItems(e),this.trigger(h,{item:e,dataItems:i}))},_keyEscape:function(t){if(t.hasClass(j)){var e=t.closest(c+D),i=this._dataItems(e);this.trigger(h,{item:e,dataItems:i})}},_keyExpand:function(t){var e,i,a,n=t.attr(k)||t.closest(c+this._selector).attr(k),s=this.element.find(p+n),r=this._dataItems(t);e=r.some((function(t){return t.hasChildren})),e&&(i=r.some((function(t){return t.expanded})),i?(a=s.find(c+this._selector).first(),this.trigger(h,{item:a,dataItems:this._dataItems(a)})):(t.hasClass(j)&&(t=t.closest(c+D),r=this._dataItems(t)),this.trigger(o,{item:t,dataItems:r})||this.expand(t)))},_keyNext:function(t){var e,i=this.element.find(p+t.attr(k)),a=this._dataItems(t),n=a.some((function(t){return t.hasChildren})),s=a.some((function(t){return t.expanded}));!(e=t.hasClass(j)?t.parent().next(c+P).find(c+j):t.parent().next(c+E).find(c+D)).length&&n&&s&&(e=i.find(c+this._selector).first()),0!==e.length&&this.trigger(h,{item:e,dataItems:this._dataItems(e)})},_keyPrev:function(t){var e,i,a=this._dataItems(t);!(i=t.hasClass(j)?t.parent().prev(c+P).find(c+j):t.parent().prev(c+E).find(c+D)).length&&a[0].parentId&&(e=this.dataSource.get(a[0].parentId).get(m),i=this.element.find("[data-uid='"+e+"']").closest(c+this._selector)),0!==i.length&&this.trigger(h,{item:i,dataItems:this._dataItems(i)})},_onFocus:function(e){var i,a,n=t(e.target);if(this._preventTriggerSelect)return e.stopPropagation(),void(this._preventTriggerSelect=!1);if(n.hasClass(O)){if(n.closest("[tabindex='0']").length>0)return void e.stopPropagation();this._preventTriggerSelect=!0}n.hasClass(j)||n.hasClass(D)||((a=n.closest(c+j)).length||(a=n.closest(c+D)),n=a),0!==n.length&&(i=this._dataItems(n),n.hasClass(W)||(e.stopPropagation(),this.trigger(h,{item:n,dataItems:i})))},_onSelect:function(e){var i,a,n=t(e.target),s=this.element.find("[tabindex=0]");n.hasClass(j)||n.hasClass(D)||((a=n.closest(c+j)).length||(a=n.closest(c+D)),n=a),0!==n.length&&s[0]!==n[0]&&(i=this._dataItems(n),this.trigger(h,{item:n,dataItems:i}))},_orientation:function(e,i,a){var n=t("<div>").addClass(C+u+y+u+x);e.addClass(G),i>1&&e.find(c+D).before(n.clone()),a&&i>1?(e.find(c+H).removeClass(G),e.find(c+H).addClass(q)):e.addClass(T)},_renderChildren:function(e,a,n,s,r,d,o){var l,h,c,p,g,m,k,b=i.template(B),I=i.template(A),x=t("<div>").addClass(C+u+y),S=t("<div>").addClass(C+u+w),F=this.options.messages,T=!0,E=i.support.isRtl(this.element)?"right":"left";return e.hasChildren&&(T=!1,r.append(x.clone()),h=t(b({buttonSign:e.expanded?v:_,label:e.expanded?F.collapse:F.expand})),r.append(h),this._calculateDimensions(),m=this._itemWidth,k=this._spacing,e.expanded&&(g=m*n+(n-1)*k,c=a*n*m+d,p=s*(this._itemHeight+this._buttonHeight+k)+k*(s-1)-this._buttonHeight/2,a>0&&(c+=a*n*k),(l=t(I({guid:o,level:s+1}))).css({width:g+f,top:p+f}),l.css(E,c+f),this.element.append(l),this._renderGroup(l,e.children,s+1,n,c))),l&&e.expanded&&e.children&&e.children.length>1&&h.after(S.clone().css({width:(n-n/e.children.length)*(m+k)+f,"margin-top":this._buttonHeight/-2+f})),T},_renderGroup:function(t,e,a,s,r){var d,o,l,h,u,p,g=!0,m=s/e.length;for(l=0;l<e.length;l++)h=i.guid(),p=e[l],o=(d=this._renderNodesContainer(t,n(!0,{},p,{guid:h,level:a}))).closest(c+E),this._renderItems(d,p.items,a,h),u=this._renderChildren(p,l,m,a,o,r,h),g&&(g=u);var f=this._itemWidth*m+(m-1)*this._spacing;t.find(c+E).width(f),this._orientation(t,a,g)},_renderItems:function(t,e,a,n){var s,r,d,o,l=i.template('<div role="treeitem" data-uid="#: uid #" aria-level="#: level #" aria-selected="false" aria-keyshortcuts="Enter" class="k-orgchart-card k-card # if(!!data.cssClass) { ##: data.cssClass ## } #"></div>');for(o=this.options.template?"function"==typeof this.options.template?this.options.template:i.template(this.options.template):i.template(M),s=0;s<e.length;s++)r=e[s],d=this._renderNode(l,o,r,a,n),t.append(d)},_renderNodesContainer:function(e,a){var n,s=i.template('<div role="treeitem" # if(data.hasChildren && data.guid) { #aria-owns="#: guid #" # if(!!data.expanded) { #aria-expanded="true" # } else { #aria-expanded="false" # } ## } #aria-keyshortcuts="Enter" aria-level="#: level #" aria-selected="false" class="k-orgchart-node-group-container">'),r=t('<div class="k-orgchart-node-group k-align-items-center k-vstack">'),d=t('<div role="group" class="k-orgchart-node-container k-justify-content-around k-hstack" style="width:100%"></div>'),o=t(s(a));return n="function"==typeof this.options.groupHeaderTemplate?this.options.groupHeaderTemplate:i.template(this.options.groupHeaderTemplate),o.append(n({value:a.value,field:a.field})),o.append(d),r.append(o),e.append(r),d}});i.orgChart={View:R,SingleView:V,GroupedView:U}}(window.kendo.jQuery);var __meta__={id:"orgchart",name:"OrgChart",category:"web",description:"The OrgChart widget displays hierarchical organizational structure.",depends:["core","menu","dialog","form","upload","window","data","treelist"]};!function(t,e){var i=window.kendo,a=i.ui.DataBoundWidget,n=i.data.OrgChartDataSource,s=i.ui.ContextMenu,r=t.extend,d=Array.isArray,o="cancel",l="change",h="click",c="collapse",u="create",p="dataBinding",g="dataBound",m="delete",f="edit",_="error",v="expand",k="progress",b="save",I="select",C="requestStart",y=".",w="k-orgchart",x="k-orgchart-group",S="k-orgchart-node-group",F="k-orgchart-node",T="k-orgchart-card",E="k-orgchart-card-menu",D="k-focus",H="k-item",P="k-orgchart-avatar-preview",j="k-orgchart-update",O="k-orgchart-cancel",L="<li data-action='edit'>#: edit #</li>",W="<li data-action='create'>#: create #</li>",N="<li data-action='destroy'>#: destroy #</li>",q=a.extend({init:function(t,e,n){d(e)&&(e={dataSource:e}),e=e||{},a.fn.init.call(this,t,e),n&&(this._events=n),this._wrapper(),this._view(),this._dataSource(),this._contextMenu(),this.options.autoBind&&this.dataSource.fetch(),i.notify(this)},options:{name:"OrgChart",autoBind:!0,cardsColors:null,dataSource:{},editable:{create:!0,destroy:!0,fields:!0,form:{buttonsTemplate:"",orientation:"vertical"},parent:!0},groupField:null,groupHeaderTemplate:'<div><div class="k-orgchart-node-group-title">#: value #</div><div class="k-orgchart-node-group-subtitle">#: field #</div></div>',template:null,messages:{label:"Org Chart",edit:"Edit",create:"Create",destroy:"Delete",destroyContent:"Are you sure you want to delete this item and all its children?",destroyTitle:"Delete item",cancel:"Cancel",save:"Save",menuLabel:"Edit menu",uploadAvatar:"Upload new avatar",parent:"Parent",name:"Name",title:"Title",none:"--None--",expand:"expand",collapse:"collapse"}},events:[o,l,c,u,p,g,m,f,v,"kendoKeydown",b,I],destroy:function(){this._menu&&this._menu.destroy(),this._editWindow&&this._editWindow.destroy(),this._confirmDestroy&&this._confirmDestroy.destroy(),this.view.destroy(),a.fn.destroy.call(this),this.wrapper.off(".kendoOrgChart")},setDataSource:function(t){this.options.dataSource=t,this._dataSource(),this.options.autoBind&&t.fetch()},setOptions:function(t){a.fn.setOptions.call(this,t)},append:function(t,e){var i=this,a=i.view.jqueryItemElement(e),n=i.dataItem(a);a&&n&&(n.loaded()?(i.dataSource.add(r({},t,{parentId:n.id})),i.dataSource.sync()):i.dataSource.read({id:n.id}).then((function(){i.dataSource.add(r({},t,{parentId:n.id})),i.dataSource.sync()})))},cancelChanges:function(){this.dataSource.hasChanges()&&this.dataSource.cancelChanges()},collapse:function(t){return this.view.collapse(t)},dataItem:function(t){var e=this.view.jqueryItemElement(t);if(e&&e.data("uid"))return this.dataSource.getByUid(e.data("uid"))},delete:function(t){var e=this.view.jqueryItemElement(t);e&&(this.dataSource.remove(this.dataItem(e)),this.dataSource.sync())},edit:function(t){var e=this.view.jqueryItemElement(t),i=this.dataItem(e);e&&i&&this._edit(i)},expand:function(t){return this.view.expand(t)},getCollapsedNodes:function(){return this.wrapper.find("[aria-expanded='false']")},items:function(){return this.wrapper.find(y+T)},parent:function(t){var e,i=this.view.jqueryItemElement(t);if(i)return e=i.closest(y+x).attr("id"),this.wrapper.find("[aria-owns='"+e+"']")},saveChanges:function(){this.dataSource.sync()},select:function(t){var e=this.view._getToSelect(t);return e?this.view.select(e):void 0},_avatarPreview:function(t,e){var a,n,s=this._form,r=t.avatar;s&&(e||(e=r.split("\\").pop().split("/").pop())&&-1!=e.indexOf(".")||(e=t.name),n={name:t.name,avatar:r,fileName:e,destroy:this.options.messages.destroy},(a=s.wrapper).find(y+P).remove(),a.find('[type="file"]').closest(".k-form-field").prepend(i.template('<div class="k-orgchart-avatar-preview k-hstack k-align-items-center k-pb-lg"><div class="k-avatar k-avatar-solid-primary k-avatar-solid k-avatar-lg k-rounded-full"><span class="k-avatar-image"><img src="#: avatar #" alt="#: name #"></span></div><div class="k-px-md">#: fileName #</div><button class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button" aria-label="#: destroy #"><span class="k-button-icon k-icon k-i-delete"></span></button></div>')(n)),a.find(y+P+" "+".k-button").on(h,(function(){a.find(y+P).remove(),t.set("avatar",null)})))},_contextMenu:function(){var t,e=this.options,a=e.editable,n=e.messages,r={target:this.wrapper,filter:y+E,select:this._onMenuItemClick.bind(this),activate:this._onMenuOpen.bind(this),deactivate:this._onMenuClose.bind(this),showOn:"click",animation:!1};(!0===a||!1!==a&&(a.create||a.destroy||a.fields||a.parent))&&(t="<ul>",!0===a?(t+=L,t+=W,t+=N):((a.fields||a.parent)&&(t+=L),a.create&&(t+=W),a.destroy&&(t+=N)),t=i.template(t)(n),this._menu=new s(t,r))},_dataSource:function(){var t=this.dataSource,e=this.options.dataSource;t&&(t.unbind(l,this._dataSourceChangeHandler),t.unbind(_,this._errorHandler),t.unbind(k,this._progressHandler),t.unbind(C,this._requestStartHandler)),this._dataSourceChangeHandler=this._onDataSourceChange.bind(this),this._errorHandler=this._onDataSourceError.bind(this),this._progressHandler=this._progress.bind(this),this._requestStartHandler=this._onDataSourceRequestStart.bind(this),(t=this.dataSource=n.create(e)).bind(l,this._dataSourceChangeHandler),t.bind(_,this._errorHandler),t.bind(k,this._progressHandler),t.bind(C,this._requestStartHandler),this.view.dataSource=t},_destroyItem:function(e){var a=this,n=t("<div></div>"),s=a.options.messages,r=this._confirmDestroy=new i.ui.Confirm(n,{title:s.destroyTitle,content:s.destroyContent,messages:{okText:s.destroy,cancel:s.cancel},show:function(){setTimeout((function(){r.element.trigger("focus")}))}});r.open(),r.result.done((function(){a.trigger(m,{dataItem:e})||(a.dataSource.remove(e),a.dataSource.sync()),a.view._shouldRestoreSelection=!0,a.view._restoreSelection()})),r.result.fail((function(){a.wrapper.find(y+T+"[tabindex=0],"+y+S+"[tabindex=0]").addClass(D).trigger("focus")}))},_edit:function(e){var a,n=this,s=t("<div>"),r=t("<div>"),d=this.options.messages,l=this._formOptions(e);l&&(n._form=new i.ui.Form(s,l),e.avatar&&n._avatarPreview(e),r.append(s),n._editWindow=new i.ui.Window(r,{title:d.edit,width:"380 px",modal:!0,close:function(t){a?a=!1:n.trigger(o,{dataItem:e})?t.preventDefault():n.cancelChanges()},deactivate:function(){r.off(h),n._editWindow.destroy(),n._editWindow=null,n.view._restoreSelection()}}),r.append(i.template('<div class="k-edit-buttons"><button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-orgchart-cancel"><span class="k-button-text">#: cancel #</span></button><button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-orgchart-update"><span class="k-button-text">#: save #</span></button></div>')({save:d.save,cancel:d.cancel})),n._editWindow.center().open(),r.on(h,y+j,(function(){n._form.validate()&&(a=!0,n.trigger(b,{dataItem:e})||(n._editWindow.close(),n.saveChanges()))})),r.on(h,y+O,(function(){n._editWindow.close()})))},_formOptions:function(t){var e,i,a=this.options,n=a.messages,s=a.editable.form,d=[];return s&&(i=s.items),i&&0!==i.length||!(!0===a.editable||a.editable&&a.editable.parent)||(e=[{id:null,name:n.none}].concat(this.dataSource.prospectParents(t)),d.push({field:"parentId",editor:"DropDownList",label:n.parent,editorOptions:{dataSource:e,dataValueField:"id",dataTextField:"name",valuePrimitive:!0}})),i&&0!==i.length||!(!0===a.editable||a.editable&&a.editable.fields)||(d=d.concat([{field:"name",label:n.name,validation:{required:!0}},{field:"title",label:n.title},{field:"avatar",label:n.uploadAvatar,editor:this._uploadEditor.bind(this,t)}])),s&&delete s.formData,!!(d.length>0||i&&i.length>0)&&r(!0,{},{formData:t,items:d},s)},_onDataSourceChange:function(t){"add"===t.action||"itemchange"===t.action&&this._editWindow||(t.action&&"sync"!==t.action||!this.trigger(p,t)?(this._progress(!0),this.view.refresh(),t.action&&"sync"!==t.action||this.trigger(g),this._progress(!1)):this._progress(!1))},_onDataSourceError:function(){this._progress(!1)},_onDataSourceRequestStart:function(){this.view._cacheFocused()},_onMenuClose:function(){0===t(document.activeElement).closest("[role='alertdialog']").length&&this.wrapper.find("[tabindex='0']").addClass(D).trigger("focus")},_onMenuItemClick:function(e){var i,a=this,n=t(e.target).closest(y+F).find(y+T),s=a.dataItem(n),r=t(e.item).data("action");s&&(r===f?a.trigger(f,{dataItem:s})||a._edit(s):r===u?a.trigger(u,{dataItem:s})||(s.loaded()?(i=a.dataSource.add({parentId:s.id}),a._edit(i)):a.dataSource.read({id:s.id}).then((function(){i=a.dataSource.add({parentId:s.id}),a._edit(i)}))):"destroy"===r&&a._destroyItem(s))},_onMenuOpen:function(){this.view._cacheFocused(),this.wrapper.find(y+D).removeClass(D),this._menu.element.find(y+H).first().trigger("focus")},_openMenu:function(t){this._menu&&this._menu.open(t.find(y+E))},_progress:function(t){i.ui.progress(this.container,t)},_triggerCollapse:function(t){this.trigger(c,{item:t.item,dataItems:t.dataItems})&&t.preventDefault()},_triggerExpand:function(t){this.trigger(v,{item:t.item,dataItems:t.dataItems})&&t.preventDefault()},_triggerSelect:function(t){this.trigger(I,{item:t.item,dataItems:t.dataItems})||(this.view.select(t.item),this.trigger(l,{item:t.item,dataItems:t.dataItems}))},_uploadEditor:function(e,i){var a=this;t('<input type="file">').appendTo(i).kendoUpload({async:!1,multiple:!1,select:function(t){var i=t.files[0],n=i.rawFile,s=new FileReader;i.validationErrors&&i.validationErrors.length>0||n&&(s.onloadend=function(){e.set("avatar",this.result),a._avatarPreview(e,n.name)},s.readAsDataURL(n))},validation:{allowedExtensions:[".gif",".jpg",".png"],maxFileSize:1048576}})},_view:function(){null!==this.options.groupField&&undefined!==this.options.groupField?this.view=new i.orgChart.GroupedView(this.container,this.options):this.view=new i.orgChart.SingleView(this.container,this.options),this.view.bind(I,this._triggerSelect.bind(this)),this.view.bind(v,this._triggerExpand.bind(this)),this.view.bind(c,this._triggerCollapse.bind(this)),this.view.bind("menu",this._openMenu.bind(this))},_wrapper:function(){var e=t("<div class='k-orgchart-container'>");this.wrapper=this.element,this.container=e,this.wrapper.addClass(w),this.wrapper.append(e)}});i.ui.plugin(q)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.orgchart.js.map
