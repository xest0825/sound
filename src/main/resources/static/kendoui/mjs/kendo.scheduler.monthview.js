/**
 * Kendo UI v2022.3.1109 (http://www.telerik.com/kendo-ui)
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.scheduler.view.js";var __meta__={id:"scheduler.monthview",name:"Scheduler Month View",category:"web",description:"The Scheduler Month View",depends:["scheduler.view"],hidden:!0};!function(t){var e=window.kendo,n=e.ui,i=n.SchedulerView,o=".kendoMonthView",a=t.extend,r=e.date.getDate,s=e.date.MS_PER_DAY,l="k-event-inverse",d=e.template('<span class="k-link k-nav-day">#:kendo.toString(date, "dd")#</span>'),u=e.template('<div title="#=title.replace(/"/g,"&\\#34;")#"><div class="k-event-template">#:title#</div></div>'),h=e.template('<div style="width:#=width#px;left:#=left#px;top:#=top#px" class="k-more-events k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"><span class="k-button-icon k-icon k-i-more-horizontal"></span></div>'),c=e.Class.extend({init:function(t){this._view=t},_verticalRowCountForLevel:function(t){return this._view._rowCountForLevel(t)},_horizontalGroupCountForLevel:function(t){return this._view._columnCountForLevel(t)},_getCalendarRowsLength:function(t,e){return e/t},_createRows:function(t,e,n,i){for(var o=this._view,a=o._isVerticallyGrouped(),r="",s=0;s<n;s++)r+=o._createRow(t,e,7,a?i:s);return r},_adjustStartDate:function(t){return e.date.addDays(t,7)},_getContent:function(t,e,n){return t({date:e,resources:n})},_getTimeSlotByPosition:function(t,e,n){return this._view.groups[n].daySlotByPosition(t,e)},_nextSlotStartDate:function(t){return e.date.nextDay(t)},_createRowsLayout:function(t,e,n){return this._view._createRowsLayout(t,e,n)},_createVerticalColumnsLayout:function(t,e,n,i){return i},_createColumnsLayout:function(t,e,n){return this._view._createColumnsLayout(t,e,n)},_verticalGroupCount:function(t){return this._view._rowCountForLevel(t)},_horizontalGroupCount:function(t){var e=this._view;return e._columnCountForLevel(t)/e._columnOffsetForResource(t)},_positionMobileEvent:function(t,e,n,i,o,a,r){var s=this._view;i>1&&(0===r?a=n.end.endDate():r==i-1?o=n.start.startDate():(o=n.start.startDate(),a=n.end.endDate()));var l=t.clone({start:new Date(o),end:new Date(a),head:n.head,tail:n.tail});s._positionMobileEvent(n,s._createEventElement(l),e)},_positionEvent:function(t,e,n,i,o,a,r){var s=this._view;i>1&&(0===r?a=n.end.endDate():r==i-1?o=n.start.startDate():(o=n.start.startDate(),a=n.end.endDate()));var l=t.clone({start:o,end:a,head:n.head,tail:n.tail});s._positionEvent(n,s._createEventElement(l),e)},_addDaySlotCollections:function(t,n,i){for(var o=this._view,a=0;a<t;a++){var r=0,s=0;o._isVerticallyGrouped()&&(s=a);for(var l=6*s;l<6*(s+1);l++){var d=o.groups[a].addDaySlotCollection(e.date.addDays(i,r),e.date.addDays(i,r+7)),u=n[l].children,h=0;o._isVerticallyGrouped()||(h=a);for(var c=7*h;c<7*(h+1);c++){var f=u[c];o.addDaySlot(d,f,i,r),r++}}}},_changePeriodGroupIndex:function(t){var e=this._view;return t?e.groups.length-1:0},_createResizeHint:function(t){var e=this._view,n=t.startSlot().offsetLeft,o=t.start.offsetTop,a=t.innerWidth(),r=t.start.clientHeight-2,s=i.fn._createResizeHint.call(e,n,o,a,r);e._appendResizeHint(s)},_createMoveHint:function(t,e){var n=this._view,i=t.startSlot(),o=t.endSlot(),a=n._createEventElement(e.clone({head:t.head,tail:t.tail}));a.css({left:i.offsetLeft+2,top:i.offsetTop+i.firstChildHeight,height:"auto"===n.options.eventHeight?25:n.options.eventHeight,width:t.innerWidth()-(i.index!==o.index?3:2)}),a.addClass("k-event-drag-hint"),e.inverseColor&&a.addClass(l),n._appendMoveHint(a)}}),f=e.Class.extend({init:function(t){this._view=t},_verticalRowCountForLevel:function(){return 1},_horizontalGroupCountForLevel:function(t){return this._view._columnCountForLevel(t+1)/7},_createRows:function(t,n,i){var o=this._view,a="",r=0;if(o._isVerticallyGrouped()){for(var s=new Date(t),l=o._groupCount();r<6;r++)a+=o._createRow(s,n,l,r),s=e.date.addDays(s,7);t=e.date.nextDay(t)}else{for(;r<7;r++)a+=o._createRow(t,n,i,r),t=e.date.nextDay(t);t=e.date.addDays(t,7)}return a},_adjustStartDate:function(t,n){return this._view._isVerticallyGrouped()?n?e.date.addDays(t,36):e.date.nextDay(t):e.date.addDays(t,7)},_getContent:function(t,e,n,i){return 0===i?t({date:e,resources:n}):""},_getTimeSlotByPosition:function(t,e,n){return this._view.groups[n].daySlotByPosition(t,e,!0)},_nextSlotStartDate:function(t){return t},_getCalendarRowsLength:function(){return this._view._isVerticallyGrouped()?7:6},_createRowsLayout:function(t,e,n,i){return this._view._createDateLayout(i,null,!1)},_createVerticalColumnsLayout:function(t,n,i){for(var o=this._view,a=t[0],r=[],s=a.dataSource.view(),l=0;l<6*s.length;l++){var d=e.getter(a.dataValueField)(s[l%s.length]),u={text:i({text:e.htmlEncode(e.getter(a.dataTextField)(s[l%s.length])),color:e.getter(a.dataColorField)(s[l%s.length]),field:a.field,title:a.title,name:a.name,value:d}),className:"k-slot-cell",value:d};u.columns=o._createColumnsLayout(t.slice(1),null,i,null,null,d),r.push(u)}return r},_createColumnsLayout:function(t,e,n,i){return this._view._createColumnsLayout(t,e,n,i,!0)},_verticalGroupCount:function(t){return this._view._columnCountForLevel(t)/6},_horizontalGroupCount:function(t){return this._view._columnCountForLevel(t)/7},_positionMobileEvent:function(t,e,n,i,o,a){for(var r=this._view,s=n.start.index,l=n.end.index,d=n.start.index;d<=n.end.index;d++){var u=n.collection._slots[d],h=e.daySlotRanges(u.start,u.start,!0)[0],c=t.clone({start:d===s?o:u.startDate(),end:d===l?a:u.endDate(),head:d!==l||n.head,tail:d!==s||n.tail});r._positionMobileEvent(h,r._createEventElement(c),e)}},_positionEvent:function(t,e,n,i,o,a){for(var r=this._view,s=n.start.index,l=n.end.index,d=n.start.index;d<=n.end.index;d++){var u=n.collection._slots[d],h=e.daySlotRanges(u.start,u.start,!0)[0],c=t.clone({start:d===s?o:u.startDate(),end:d===l?a:u.endDate(),head:d!==l||n.head,tail:d!==s||n.tail});r._positionEvent(h,r._createEventElement(c),e)}},_addDaySlotCollections:function(t,n,i){for(var o=this._view,a=o._isVerticallyGrouped(),r=0;r<7;r++)for(var s=0;s<6;s++){var l=0,d=n[a?r:s].children,u=0;o._isVerticallyGrouped()||(u=r);for(var h=u*t;h<(u+1)*t;h++){var c,f=7*s+r,v=d[a?h+s*t:h],p=a?h:l,_=o.groups[p];c=0===r?_.addDaySlotCollection(e.date.addDays(i,f),e.date.addDays(i,f+7)):_._daySlotCollections[s],o.addDaySlot(c,v,i,f),l++}}},_changePeriodGroupIndex:function(t,e,n){var i=this._view;return e&&i._isVerticallyGrouped()?t?i.groups.length-1:0:n},_createResizeHint:function(t){var e,n,o,a,r,s=this._view;if(s._isVerticallyGrouped())e=t.startSlot().offsetLeft,n=t.start.offsetTop,o=t.startSlot().offsetWidth,a=t.endSlot().offsetTop+t.startSlot().offsetHeight-t.startSlot().offsetTop-2,r=i.fn._createResizeHint.call(s,e,n,o,a),s._appendResizeHint(r);else for(var l=t.startSlot().index;l<=t.endSlot().index;l++){var d=t.collection._slots[l];e=d.offsetLeft,n=d.offsetTop,o=d.offsetWidth,a=d.offsetHeight-2,r=i.fn._createResizeHint.call(s,e,n,o,a),s._appendResizeHint(r)}},_createMoveHint:function(t,e){for(var n=this._view,i=t.startSlot(),o=t.endSlot(),a=i.index;a<=o.index;a++){var r=t.collection._slots[a],s=n._createEventElement(e.clone({head:t.head,tail:t.tail}));s.css({left:r.offsetLeft,top:r.offsetTop+r.firstChildHeight,height:"auto"===n.options.eventHeight?25:n.options.eventHeight,width:r.offsetWidth-2}),s.addClass("k-event-drag-hint"),e.inverseColor&&s.addClass(l),n._appendMoveHint(s)}}});function v(t,e,n){var i;return(i=t)>=e&&i<=n}e.ui.scheduler.MonthGroupedView=c,e.ui.scheduler.MonthGroupedByDateView=f,n.MonthView=i.extend({init:function(t,e){var n=this;0===e.eventsPerDay&&(e.eventsPerDay=1),0===e.eventHeight&&(e.eventHeight=1),0===e.moreButtonHeight&&(e.moreButtonHeight=1),"string"==typeof e.eventHeight&&"auto"!==e.eventHeight&&(e.eventHeight=25),"auto"===e.eventHeight&&(e.adaptiveSlotHeight=!0),i.fn.init.call(n,t,e),n._groupedView=n._getGroupedView();var o=this._isGroupedByDate(),a=this.options.adaptiveSlotHeight,r=this.options.eventHeight;if(!0===o&&!0===a)throw new Error("Incompatible options: adaptive slot height and date grouping!");if(!0===o&&"auto"===r)throw new Error("Incompatible options: auto event height and date grouping!");n.title=n.options.title,n._templates(),n._editable(),n._renderLayout(n.options.date),n._groups()},name:"month",_getGroupedView:function(){return this._isGroupedByDate()?new e.ui.scheduler.MonthGroupedByDateView(this):new e.ui.scheduler.MonthGroupedView(this)},_updateDirection:function(t,e,n,i,o){if(n){var a=e[0].start,r=e[e.length-1].end,s=a.index===r.index,l=a.collectionIndex===r.collectionIndex;(o?s&&l||l:s&&l)&&(t.backward=i)}},_changeDate:function(t,e,n){var i,o,a=this.groups[t.groupIndex];if(n){if(i=a._getCollections(a.daySlotCollectionCount()),(o=e.collectionIndex-1)>=0)return i[o]._slots[i[o]._slots.length-1]}else{if((i=a._getCollections(a.daySlotCollectionCount()))[o=e.collectionIndex+1]&&i[o]._slots[0])return i[o]._slots[0]}},_getNextHorizontalRange:function(t,e,n){var i=this._isVerticallyGrouped();return n.startSlot=t[e](n.startSlot,i),n.endSlot=t[e](n.endSlot,i),n},_getNextVerticalRange:function(t,e,n,i){var o=this._isVerticallyGrouped()&&this._isGroupedByDate();return n.startSlot=t[e](n.startSlot,i,o),n.endSlot=t[e](n.endSlot,i,o),n},_changeViewPeriod:function(t,n,i){var o,a,r=i?7:1;return n&&(r*=-1),o=e.date.addDays(t.start,r),a=e.date.addDays(t.end,r),!this._isInRange(o,a)&&(t.start=o,t.end=a,(!i||i&&this._isVerticallyGrouped())&&(t.groupIndex=this._groupedView._changePeriodGroupIndex(n,i,t.groupIndex)),t.events=[],!0)},_continuousSlot:function(t,e,n){var i=t.backward?0:e.length-1;return this.groups[t.groupIndex].continuousSlot(e[i].start,n)},_changeGroupContinuously:function(t,e,n,i){if(!n){var o=t.groupIndex,a=this.groups.length-1,r=this._isVerticallyGrouped(),s=this.groups[o];!e&&r?(e=s[i?"lastSlot":"firstSlot"](),o+=i?-1:1):e&&!r&&(o=i?a:0),(o<0||o>a)&&(o=i?a:0,e=null),t.groupIndex=o}return e},_normalizeHorizontalSelection:function(t,e,n){return n?e[0].start:e[e.length-1].end},_normalizeVerticalSelection:function(t,e){return t.backward?e[0].start:e[e.length-1].end},_templates:function(){var t=this.options,n=a({},e.Template,t.templateSettings);this.eventTemplate=this._eventTmpl(t.eventTemplate,'<div role="button" data-#=ns#uid="#=uid#"aria-label="#: ariaLabel #" #if (resources[0]) { #style="background-color:#=resources[0].color #; border-color: #=resources[0].color#"class="k-event"#} else {#class="k-event"#}#><span class="k-event-actions"># if (data.tail || data.middle) {#<span class="k-icon k-i-arrow-60-left"></span>#}## if (data.isException()) {#<span class="k-icon k-i-non-recurrence"></span># } else if (data.isRecurring()) {#<span class="k-icon k-i-reload"></span>#}#</span>{0}<span class="k-event-actions">#if (showDelete) {#<a href="\\#" class="k-link k-event-delete" title="${data.messages.destroy}" aria-label="${data.messages.destroy}"><span class="k-icon k-i-close"></span></a>#}## if (data.head || data.middle) {#<span class="k-icon k-i-arrow-60-right"></span>#}#</span># if (resizable && !data.tail && !data.middle) {#<span class="k-resize-handle k-resize-w"></span>#}## if (resizable && !data.head && !data.middle) {#<span class="k-resize-handle k-resize-e"></span>#}#</div>'),this.dayTemplate=e.template(t.dayTemplate,n),this.groupHeaderTemplate=e.template(t.groupHeaderTemplate,n)},dateForTitle:function(){return e.format(this.options.selectedDateFormat,this._firstDayOfMonth,this._lastDayOfMonth)},shortDateForTitle:function(){return e.format(this.options.selectedShortDateFormat,this._firstDayOfMonth,this._lastDayOfMonth)},mobileDateForTitle:function(){return e.format(this.options.selectedMobileDateFormat,this._firstDayOfMonth,this._lastDayOfMonth)},nextDate:function(){return e.date.nextDay(this._lastDayOfMonth)},previousDate:function(){return e.date.previousDay(this._firstDayOfMonth)},startDate:function(){return this._startDate},endDate:function(){return this._endDate},_renderLayout:function(n){var i=this;this._firstDayOfMonth=e.date.firstDayOfMonth(n),this._lastDayOfMonth=e.date.lastDayOfMonth(n),this._startDate=function(t,n){var i=n.firstDay,o=new Date(t.getFullYear(),t.getMonth(),0,t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds());for(;o.getDay()!=i;)e.date.setTime(o,-1*s);return o}(n,this.calendarInfo()),this.createLayout(this._layout()),this._content(),this._initSlotHeight(),this.refreshLayout(),this._isVirtualized()&&this._tryRenderContent(),this.content.on("click"+o,".k-nav-day,.k-more-events",(function(e){var n=t(e.currentTarget).offset(),o=i._slotByPosition(n.left,n.top);e.preventDefault(),i.trigger("navigate",{view:"day",date:o.startDate()})})),this._footer()},_editable:function(){this.options.editable&&(this._isMobile()?this._touchEditable():this._mouseEditable())},_mouseEditable:function(){var n=this;n.element.on("click"+o,".k-scheduler-monthview .k-event a:has(.k-i-close)",(function(i){n.trigger("remove",{uid:t(this).closest(".k-event").attr(e.attr("uid"))}),i.preventDefault()})),!1!==n.options.editable.create&&n.element.on("dblclick"+o,".k-scheduler-monthview .k-scheduler-content td",(function(e){var i=t(e.currentTarget).offset(),o=n._slotByPosition(i.left,i.top);if(o){var r=n._resourceBySlot(o);n.trigger("add",{eventInfo:a({isAllDay:!0,start:o.startDate(),end:o.startDate()},r)})}e.preventDefault()})),!1!==n.options.editable.update&&n.element.on("dblclick"+o,".k-scheduler-monthview .k-event",(function(i){n.trigger("edit",{uid:t(this).closest(".k-event").attr(e.attr("uid"))}),i.preventDefault()}))},_touchEditable:function(){var n=this,i=0;e.support.mobileOS.android&&(i=5),!1!==n.options.editable.create&&(n._addUserEvents=new e.UserEvents(n.element,{threshold:i,useClickAsTap:!e.support.browser.edge,filter:".k-scheduler-monthview .k-scheduler-content td",tap:function(e){if(!n._scrolling){var i=t(e.target).offset(),o=n._slotByPosition(i.left,i.top);if(o){var r=n._resourceBySlot(o);n.trigger("add",{eventInfo:a({isAllDay:!0,start:o.startDate(),end:o.startDate()},r)})}e.preventDefault()}}}))},selectionByElement:function(e){var n=t(e).offset();return this._slotByPosition(n.left,n.top)},_columnCountForLevel:function(t){var e=this.columnLevels[t];return e?e.length:0},_rowCountForLevel:function(t){var e=this.rowLevels[t];return e?e.length:0},_content:function(){var t="<tbody>",e=1,n=this._groupedView,i=this.groupedResources;i.length&&this._isVerticallyGrouped()&&(e=n._verticalRowCountForLevel(i.length-1));for(var o=0;o<e;o++)t+=this._createCalendar(o),this._cachedGroupIndex=o;t+="</tbody>",this.content.find("table").html(t)},_virtualContent:function(){var t="";t+=this._createCalendar(++this._cachedGroupIndex),this.content.find("table tbody").append(t),this._initSlotHeight()},_calcSlotHeight:function(t){var e,n=this.options,i=n.eventHeight,o=n.eventSpacing,a=n.moreButtonHeight,r=this.content.find("table tr td")[0];if("auto"!==i&&r)return e=r.firstChild,Math.round(r.offsetHeight-r.clientHeight+e.offsetTop+e.offsetHeight+2+t*i+(t-1)*o+(2+a)+2)},_initSlotHeight:function(){var t,e=this.options,n=e.eventsPerDay,i=e.eventHeight,o=this._isMobile(),a=this.content.find("table");o||"number"==typeof i&&(t=this._calcSlotHeight(n),a.find("tr").height(t),a.addClass("k-scheduler-table-auto"))},_adjustSlotHeight:function(t){var e=this.options,n=e.eventHeight,i=e.eventSpacing,o=e.moreButtonHeight;if(!0===this._canAdjustSlotHeight){var a=t._daySlotCollections;this.content.find("table").addClass("k-scheduler-table-auto"),a.forEach((function(t){var e=t._events,a=0,r=t._slots,s=r[0],l=s.element.offsetTop,d=0;r.forEach((function(t){t.eventMeta?t.actualEventCount=t.eventMeta.length:(t.eventMeta=[],t.actualEventCount=0)})),r.forEach((function(t,e){t.eventMeta.forEach((function(n,i){n.startIndex===e&&n.startIndex!==n.endIndex&&r.slice(e,n.endIndex+1).forEach((function(e){var o=e.eventMeta;o.indexOf(n)>-1||(o[o.length]=t.eventMeta[i],e.actualEventCount=o.length,e.dirty=!0)}))})),!0===t.dirty&&(t.eventMeta.sort((function(t,e){return t.order-e.order})),delete t.dirty)})),"auto"===n&&r.forEach((function(t,e){var n=t.firstChildTop+t.firstChildHeight+2;t.eventMeta.forEach((function(t,e){t.top=Math.max(t.top,l+n),n=t.top-l+i+t.height}))})),r.forEach((function(t,r){var s=t.firstChildTop+t.firstChildHeight+2;t.eventMeta.forEach((function(t){t.top=Math.max(t.top,l+s),s=t.top-l+i+t.height,t.startIndex===r&&(e[a].element[0].style.top=t.top+"px",a++)})),t.eventMeta.length>0?(s-=i,s+=2):s+="auto"===n?25:n,t.more&&(t.more[0].style.top=l+s+"px",s+=2+o),d=Math.max(d,s+1)})),s.element.parentNode.style.height=d+"px",r.forEach((function(t){t.offsetTop=l,t.offsetHeight=d,t.clientHeight=d-1}))}))}},_createCalendar:function(t){var n=this.startDate(),i=[n],o="",a=1,r=this._isVerticallyGrouped(),s=this._groupedView,l=this.groupedResources;l.length&&(r||(a=s._horizontalGroupCountForLevel(l.length-1))),this._slotIndices={};for(var d=s._getCalendarRowsLength(7,42),u=0;u<d;u++){o+="<tr>",i.push(n);var h=7*u;o+=s._createRows(n,h,a,t),n=s._adjustStartDate(n,u===d-1),o+="</tr>"}return this._weekStartDates=i,this._endDate=e.date.previousDay(n),o},_createRow:function(t,n,i,o){for(var a=this,s=a._firstDayOfMonth,l=a._lastDayOfMonth,d=a.dayTemplate,u="",h="",c=this._groupedView,f=function(){return a._resourceBySlot({groupIndex:o})},v=0;v<i;v++)u="",e.date.isToday(t)&&(u+="k-today"),e.date.isInDateRange(t,s,l)||(u+=" k-other-month"),h+="<td ",""!==u&&(h+='class="'+u+'"'),h+=">",h+=c._getContent(d,t,f,v),h+="</td>",a._slotIndices[r(t).getTime()]=n+v,t=c._nextSlotStartDate(t);return h},_layout:function(){var e,n=this.calendarInfo(),i=function(t,e){return t.slice(e).concat(t.slice(0,e))}(this._isMobile()?n.days.namesShort.map((function(t){return t[0]})):n.days.names,n.firstDay),o=t.map(i,(function(t){return{text:t}})),a=this.groupedResources,r=this._groupedView;if(a.length)if(this._isVerticallyGrouped()){for(var s=[],l=0;l<6;l++)s.push({text:"<div>&nbsp;</div>",className:"k-hidden k-slot-cell"});e=r._createRowsLayout(a,s,this.groupHeaderTemplate,o),o=r._createVerticalColumnsLayout(a,s,this.groupHeaderTemplate,o)}else o=r._createColumnsLayout(a,o,this.groupHeaderTemplate,o);return{columns:o,rows:e}},_createEventElement:function(n){var i=this.options,o=i.editable,a=this._isMobile();n.showDelete=o&&!1!==o.destroy&&!a,n.resizable=o&&!1!==o.resize&&!a,n.ns=e.ns,n.resources=this.eventResources(n),n.inverseColor=!1,n.messages=i.messages||{destroy:"Delete"};var r=t(this.eventTemplate(t.extend({},n,{ariaLabel:this._formatEventAriaLabel(n.title,n.start,n.end,n.isAllDay)})));return this.angular("compile",(function(){return{elements:r,data:[{dataItem:n}]}})),r},_isInDateSlot:function(t){if(!this.groups||0===this.groups.length)return!1;var n=this.groups[0],i=n.firstSlot().start,o=n.lastSlot().end-1,a=e.date.toUtcTime(t.start),r=e.date.toUtcTime(t.end);return(v(a,i,o)||v(r,i,o)||v(i,a,r)||v(o,a,r))&&(!v(r,i,i)||v(r,a,a)||t.isAllDay)},_slotIndex:function(t){return this._slotIndices[r(t).getTime()]},_positionMobileEvent:function(n,o,a){var r,s=n.start,l=this.table.find(".k-scheduler-content .k-scheduler-table")[0],d=this.table.find(".k-scheduler-content")[0];n.start.offsetLeft>n.end.offsetLeft&&(s=n.end);var u=n.start.index,h=u,c=i.collidingEvents(n.events(),u,h);c.push({element:o,start:u,end:h});var f=i.createRows(c),v=n.collection.at(u),p=v.container;p||(r=this._isRtl&&d.clientWidth<d.scrollWidth?s.offsetLeft-(l.clientWidth-d.clientWidth)+"px":s.offsetLeft+"px",p=t(e.format('<div class="k-events-container" style="top:{0};left:{1};width:{2}"></div>',s.offsetTop+s.firstChildTop+s.firstChildHeight+"px",r,s.offsetWidth+"px")),v.container=p,this.content[0].appendChild(p[0])),f.length<=3&&(n.addEvent({element:o,start:u,end:h,groupIndex:s.groupIndex}),a._continuousEvents.push({element:o,uid:o.attr(e.attr("uid")),start:n.start,end:n.end}),p[0].appendChild(o[0]))},_positionEvent:function(n,o,a){var r=this.options.eventHeight,s=this.options.eventSpacing,l=n.start;n.start.offsetLeft>n.end.offsetLeft&&(l=n.end);var d=n.start.index,u=n.end.index,c=l.eventCount,f=i.collidingEvents(n.events(),d,u),v=d!==u?3:2;f.push({element:o,start:d,end:u});for(var p=i.createRows(f),_=0,g=Math.min(p.length,c);_<g;_++)for(var m=p[_].events,y="auto"===r?"":l.offsetTop+l.firstChildTop+l.firstChildHeight+2+_*(r+s)+"px",D=0,w=m.length;D<w;D++)m[D].element[0].style.top=y,m[D].element.attr(e.attr("order"),_);if(p.length>c)for(var S=d;S<=u;S++){var C=n.collection.at(S);C.more||(C.more=t(h({ns:e.ns,start:S,end:S,width:C.clientWidth-2,left:C.offsetLeft+2,top:"auto"===r?"":C.offsetTop+C.firstChildTop+C.firstChildHeight+2+c*r+(c-1)*s+2})),this.content[0].appendChild(C.more[0]))}else{n.addEvent({element:o,start:d,end:u,groupIndex:l.groupIndex}),o[0].style.width=n.innerWidth()-v+"px",o[0].style.left=l.offsetLeft+2+"px",o[0].style.height="auto"===r?"":r+"px",a._continuousEvents.push({element:o,uid:o.attr(e.attr("uid")),start:n.start,end:n.end,order:parseInt(o.attr(e.attr("order")),10)}),o.appendTo(this.content),this._inverseEventColor(o);var x=n.start.collectionIndex,H=n.start.index,k=a._daySlotCollections[x]._slots[H];k.eventMeta||(k.eventMeta=[]),k.eventMeta.push({height:"auto"===r?o.outerHeight():r,top:0,startIndex:H,endIndex:n.end.index,uid:o.attr(e.attr("uid")),order:parseInt(o.attr(e.attr("order")),10)})}},_slotByPosition:function(t,e){var n=this.content.offset();t-=n.left,e-=n.top,e+=this.content[0].scrollTop,t+=this.content[0].scrollLeft,t=Math.ceil(t),e=Math.ceil(e);for(var i=0;i<this.groups.length;i++){var o=this._groupedView._getTimeSlotByPosition(t,e,i);if(o)return o}return null},_appendResizeHint:function(t){t.appendTo(this.content),this._resizeHint=this._resizeHint.add(t)},_updateResizeHint:function(t,n,i,o){this._removeResizeHint();for(var a=this.groups[n].ranges(i,o,!0,t.isAllDay),r=0;r<a.length;r++)this._groupedView._createResizeHint(a[r]);this._resizeHint.find(".k-label-top,.k-label-bottom").text(""),this._resizeHint.first().addClass("k-first").find(".k-label-top").text(e.toString(e.timezone.toLocalDate(i),"M/dd")),this._resizeHint.last().addClass("k-last").find(".k-label-bottom").text(e.toString(e.timezone.toLocalDate(o),"M/dd"))},_updateMoveHint:function(t,n,i){var o=e.date.toUtcTime(t.start)+i,a=o+t.duration(),r=this.groups[n].ranges(o,a,!0,t.isAllDay);this._removeMoveHint(t.uid);for(var s=0;s<r.length;s++)this._groupedView._createMoveHint(r[s],t)},_appendMoveHint:function(t){t.appendTo(this.content),this._moveHint=this._moveHint.add(t)},_groups:function(){var t=this._groupCount(),e=this.content[0].getElementsByTagName("tr"),n=this.startDate();this.groups=[];for(var i=0;i<t;i++)this._addResourceView(i);this._groupedView._addDaySlotCollections(t,e,n)},addDaySlot:function(t,n,i,o){var a=e.date.addDays(i,o),r=e.date.MS_PER_DAY,s=this.options.eventsPerDay;i.getHours()!==a.getHours()&&(r+=(i.getHours()-a.getHours())*e.date.MS_PER_HOUR),r+=a=e.date.toUtcTime(a),t.addDaySlot(n,a,r,s)},render:function(t){this.content.children(".k-event,.k-more-events,.k-events-container").remove(),this._cachedEvents=t,this._groups(),t=new e.data.Query(t).sort([{field:"start",dir:"asc"},{field:"end",dir:"desc"}]).toArray().filter(function(t){return this._isInDateSlot(t)}.bind(this));var n=this.groupedResources,i=this._isMobile(),o=this._isGroupedByDate(),a=this.options.adaptiveSlotHeight;this._canAdjustSlotHeight=!0!==i&&!0!==o&&0===n.length&&!0===a,n.length?this._renderGroups(t,n,0,1):this._renderEvents(t,0),this.refreshLayout(),this.trigger("activate")},_renderEvents:function(t,n){var i=this.groups[n],o=this._groupedView._view._isMobile();i&&(i._continuousEvents||(i._continuousEvents=[]),o?t.forEach(function(t){for(var n=i.slotRanges(t,!0),o=n[0],a=o.start.start,r=o.end.end,s=new Date(o.start.start),l=n[n.length-1].end.end,d=new Date(s),u=new Date(r);s.getTime()<=l&&t.end>=e.timezone.toLocalDate(s)&&t.start<=e.timezone.toLocalDate(l);){var h=i.daySlotRanges(d.getTime(),u.getTime(),!0)[0];u.setDate(u.getDate()+1),d.setDate(d.getDate()+1),h&&(h.head=null,h.middle=null,h.tail=null,this._groupedView._positionMobileEvent(t,i,h,1,a,r,0)),s=e.date.addDays(s,1)}}.bind(this)):(t.forEach(function(t){for(var e,n=t.start,o=t.end,a=i.slotRanges(t,!0),r=a.length,s=0;s<r;s++)e=a[s],this._groupedView._positionEvent(t,i,e,r,n,o,s)}.bind(this)),!0===this._canAdjustSlotHeight&&this._adjustSlotHeight(i)))},_renderGroups:function(t,n,o,a,r){var s=n[0];if(s){var l=s.dataSource.view();l=l.filter((function(t){var n=e.getter(s.dataParentValueField)(t);return null==n||n===r}));for(var d=0;d<l.length;d++){var u=this._resourceValue(s,l[d]),h=new e.data.Query(t).filter({field:s.field,operator:i.groupEqFilter(u)}).toArray();n.length>1?o=this._renderGroups(h,n.slice(1),o++,a+1,u):this._renderEvents(h,o++)}}return o},_groupCount:function(){var t=this.groupedResources,e=this._groupedView;return t.length?this._isVerticallyGrouped()?e._verticalGroupCount(t.length-1):e._horizontalGroupCount(t.length):1},_columnOffsetForResource:function(t){return this._columnCountForLevel(t)/this._columnCountForLevel(t-1)},destroy:function(){this.table&&this.table.removeClass("k-scheduler-monthview"),this.content&&this.content.off(o),this.element&&this.element.off(o),i.fn.destroy.call(this),this._isMobile()&&this.options.editable&&!1!==this.options.editable.create&&this._addUserEvents.destroy()},events:["remove","add","edit","navigate"],options:{title:"Month",name:"month",eventHeight:25,moreButtonHeight:13,editable:!0,selectedDateFormat:"{0:y}",selectedShortDateFormat:"{0:y}",selectedMobileDateFormat:"{0:MMMM}",groupHeaderTemplate:"#=text#",dayTemplate:d,eventTemplate:u,eventsPerDay:2,adaptiveSlotHeight:!1,eventSpacing:3}})}(window.kendo.jQuery);
//# sourceMappingURL=kendo.scheduler.monthview.js.map
