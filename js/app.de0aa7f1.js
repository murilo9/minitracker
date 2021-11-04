(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/minitracker/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0b3a":function(t,e,a){},"1f4e":function(t,e,a){"use strict";a("47ef")},3388:function(t,e,a){},"39d9":function(t,e,a){"use strict";a("c017")},4418:function(t,e,a){},"47ef":function(t,e,a){},"48f2":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6b81":function(t,e,a){"use strict";a("48f2")},"7c92":function(t,e,a){"use strict";a("af48")},"8e9e":function(t,e,a){"use strict";a("3388")},"931e":function(t,e,a){},"9c0c":function(t,e,a){},af48:function(t,e,a){},afd1:function(t,e,a){"use strict";a("eaba")},c017:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s=n["a"].extend({}),r=s,c=(a("5c0b"),a("2877")),l=Object(c["a"])(r,i,o,!1,null,null,null),d=l.exports,u=a("9483");Object(u["a"])("".concat("/minitracker/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h;a("7db0"),a("c740"),a("a434");(function(t){t["DONE"]="DONE",t["FAILED"]="FAILED",t["SKIPPED"]="SKIPPED"})(h||(h={}));var b=h;function f(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function v(t,e){var a=e.acomplishments.find((function(e){return f(t,e.date)}));return a||null}var p=a("2f62"),m=a("bfa9"),D=a("a002"),g=a.n(D),y=new m["a"]({storage:g.a,asyncStorage:!0});n["a"].use(p["a"]);var k=function(t){switch(t){case b.DONE:return b.FAILED;case b.FAILED:return b.SKIPPED;case b.SKIPPED:return b.DONE;default:return b.DONE}},w=new p["a"].Store({state:{habits:[]},mutations:{addHabit:function(t,e){t.habits.push(e)},toggleHabitStatus:function(t,e){var a=e.habitId,n=e.date,i=t.habits.find((function(t){return t.id===a}));if(i){var o=v(n,i);if(o){var s=o.status;o.status=k(s)}else o={status:null,date:n},i.acomplishments.push(o);o.status=k(o.status)}},deleteHabit:function(t,e){var a=t.habits.findIndex((function(t){return t.id===e}));a>-1&&t.habits.splice(a,1)},saveHabitNote:function(t,e){var a=e.habitId,n=e.date,i=e.text,o=t.habits.find((function(t){return t.id===a}));if(o){var s=o.notes.findIndex((function(t){return f(t.date,n)}));if(s>=0){var r={text:i,date:n};o.notes.splice(s,1,r)}else{var c={text:i,date:n};o.notes.push(c)}}},deleteHabitNote:function(t,e){var a=e.habitId,n=e.date,i=t.habits.find((function(t){return t.id===a}));if(i){var o=i.notes.findIndex((function(t){return f(t.date,n)}));o>-1&&i.notes.splice(o,1)}}},actions:{},modules:{},plugins:[y.plugin]}),x=a("f309");n["a"].use(x["a"]);var _=new x["a"]({theme:{themes:{light:{primary:"#0A6066"}}}}),C=a("1da1"),I=(a("96cf"),a("8c4f")),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("MobileTopBar"),a("DesktopTopBar"),a("v-main",[a("v-container",{staticClass:"mtk-list-container py-2"},[a("ul",{staticClass:"mt-3 pl-0"},t._l(t.habits,(function(t){return a("HabitItem",{key:t.id,attrs:{habit:t}})})),1)])],1),a("v-footer",[a("v-btn",{attrs:{text:"",block:""},on:{click:function(e){return t.openPage("add")}}},[a("v-icon",[t._v(" mdi-plus ")])],1)],1)],1)},O=[],$=a("5530"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"mx-3 d-md-none",attrs:{app:"",elevation:"0",height:"160"}},[a("v-container",{staticClass:"\n      mx-sm-10\n      d-flex\n      align-center\n      justify-space-between\n      flex-column flex-sm-row\n    ",attrs:{fluid:""}},[a("div",{staticClass:"text-h5 mb-3 mb-sm-0"},[t._v("TODAY")]),a("div",[a("div",{staticClass:"body-1 text-center"},[t._v(t._s(t.weekLabel))]),a("div",{staticClass:"body-1"},[t._v(t._s(t.monthLabel))])])])],1)},F=[],T=(a("ac1f"),a("1276"),n["a"].extend({computed:{weekLabel:function(){return(new Date).toUTCString().split(",")[0].toUpperCase()},monthLabel:function(){return(new Date).toUTCString().split(" ")[2].toUpperCase()+" "+(new Date).getDate()}}})),V=T,N=a("6544"),j=a.n(N),S=a("40dc"),E=a("a523"),A=Object(c["a"])(V,H,F,!1,null,null,null),B=A.exports;j()(A,{VAppBar:S["a"],VContainer:E["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"mx-3 d-none d-md-block",attrs:{app:"",elevation:"0",height:"64"}},[a("v-container",{staticClass:"\n      mx-sm-10\n      d-flex\n      align-center\n      justify-space-between\n      flex-column flex-sm-row\n    ",attrs:{fluid:""}},[a("div",{staticClass:"text-h5 mb-3 mb-sm-0"},[t._v("TODAY")]),a("div",[a("div",{staticClass:"body-1 text-center"},[t._v(t._s(t.weekLabel))]),a("div",{staticClass:"body-1"},[t._v(t._s(t.monthLabel))])])])],1)},Y=[],L=n["a"].extend({computed:{weekLabel:function(){return(new Date).toUTCString().split(",")[0].toUpperCase()},monthLabel:function(){return(new Date).toUTCString().split(" ")[2].toUpperCase()+" "+(new Date).getDate()}}}),U=L,W=Object(c["a"])(U,P,Y,!1,null,null,null),R=W.exports;j()(W,{VAppBar:S["a"],VContainer:E["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){t.showDetails=!t.showDetails}}},[t.showDetails?a("v-icon",[t._v("mdi-menu-down")]):a("v-icon",[t._v("mdi-menu-right")])],1),a("v-btn",{staticClass:"mtk-habit-button pl-2 pr-0",attrs:{text:""},on:{click:t.openHabitDetails}},[t._v(" "+t._s(t.habit.name)+" ")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.showDetails,expression:"!showDetails"}],staticClass:"float-right today",attrs:{text:"",icon:""},on:{click:t.toggleStatus}},["DONE"===t.habitStatus?a("CompletedIcon"):"FAILED"===t.habitStatus?a("FailedIcon"):a("SkippedIcon")],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"mtk-habit-details"},[a("WeekTable",{attrs:{habit:t.habit}})],1)])],1)},J=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-icon",{class:{today:t.today}},[t._v("mdi-check")])},G=[],z={props:{today:{type:Boolean,default:!1}}},Q=z,X=(a("7c92"),a("132d")),Z=Object(c["a"])(Q,q,G,!1,null,"0009c9b0",null),tt=Z.exports;j()(Z,{VIcon:X["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-icon",{class:{today:t.today}},[t._v("mdi-close")])},at=[],nt={props:{today:{type:Boolean,default:!1}}},it=nt,ot=(a("8e9e"),Object(c["a"])(it,et,at,!1,null,"7acd3193",null)),st=ot.exports;j()(ot,{VIcon:X["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-icon",{class:{today:t.today}},[t._v("mdi-power-on")])},ct=[],lt={props:{today:{type:Boolean,default:!1}}},dt=lt,ut=(a("e468"),Object(c["a"])(dt,rt,ct,!1,null,"1edb3fbe",null)),ht=ut.exports;j()(ut,{VIcon:X["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-center align-center"},t._l(t.weekDays,(function(e,n){return a("v-btn",{key:n,staticClass:"date-item",attrs:{text:"",icon:"",outlined:t.weekDayIsToday(n),disabled:""}},[t._v(" "+t._s(e.name)+" ")])})),1),a("div",{staticClass:"mt-1 d-flex justify-center align-center"},[t._l(t.weekDays,(function(e,n){return[a("WeekTableButton",{key:n,class:{"is-past":t.weekDayIsPast(n)},attrs:{isPast:t.weekDayIsPast(n),habit:t.habit,date:[t.currentYear,t.currentMonth,e.label]}})]}))],2)])},ft=[],vt=(a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{class:{today:t.isToday,"date-item":!0},attrs:{text:"",icon:"",disabled:!t.isPast},on:{click:t.toggleStatus}},["DONE"===t.habitStatus?a("CompletedIcon"):"FAILED"===t.habitStatus?a("FailedIcon"):"SKIPPED"===t.habitStatus?a("SkippedIcon"):[t.isToday||!t.isPast?[t._v(" "+t._s(t.date[2])+" ")]:[t.weekDayRepeat(t.weekDay)?a("FailedIcon"):a("SkippedIcon")]]],2)}),pt=[];function mt(t){var e=t.getFullYear(),a=t.getMonth(),n=t.getDate();return[e,a,n]}var Dt=n["a"].extend({components:{CompletedIcon:tt,FailedIcon:st,SkippedIcon:ht},props:{habit:Object,date:Array,isPast:Boolean},methods:{toggleStatus:function(){var t=this.$props.date;this.$store.commit("toggleHabitStatus",{habitId:this.$props.habit.id,date:t}),this.$forceUpdate()},weekDayIsPast:function(t){var e=(new Date).getDay();return e>=t},weekDayRepeat:function(t){return this.habit.repeatsOn[t]}},computed:{isToday:function(){return f(this.date,mt(new Date))},habitStatus:function(){var t=this.date,e=this.habit,a=v(t,e);return null===a||void 0===a?void 0:a.status},weekDay:function(){var t=new Date;return t.setDate(this.date[2]),t.setMonth(this.date[1]-1),t.setFullYear(this.date[0]),t.getDay()}}}),gt=Dt,yt=a("8336"),kt=Object(c["a"])(gt,vt,pt,!1,null,null,null),wt=kt.exports;j()(kt,{VBtn:yt["a"]});var xt=n["a"].extend({components:{WeekTableButton:wt},data:function(){return{weekDays:[{name:"S",label:0},{name:"M",label:0},{name:"T",label:0},{name:"W",label:0},{name:"T",label:0},{name:"F",label:0},{name:"S",label:0}]}},props:{habit:Object},computed:{currentMonth:function(){return(new Date).getMonth()+1},currentYear:function(){return(new Date).getFullYear()}},methods:{weekDayIsPast:function(t){var e=(new Date).getDay();return e>=t},weekDayIsToday:function(t){var e=(new Date).getDay();return t===e}},mounted:function(){var t=this,e=new Date,a=e.getDay(),n=new Date;n.setDate(e.getDate()-a),this.weekDays.forEach((function(e,a){var i=new Date;i.setDate(n.getDate()+a),t.weekDays[a].label=i.getDate()}))}}),_t=xt,Ct=Object(c["a"])(_t,bt,ft,!1,null,"3565798a",null),It=Ct.exports;function Mt(t,e){var a=e.acomplishments.find((function(e){return f(mt(t),e.date)}));return a||null}j()(Ct,{VBtn:yt["a"]});var Ot=n["a"].extend({components:{CompletedIcon:tt,FailedIcon:st,SkippedIcon:ht,WeekTable:It},computed:{habitStatus:function(){var t=new Date,e=Mt(t,this.habit);return null===e||void 0===e?void 0:e.status}},data:function(){return{showDetails:!1}},props:{habit:Object},methods:{toggleStatus:function(){this.$store.commit("toggleHabitStatus",{habitId:this.habit.id,date:mt(new Date)}),this.$forceUpdate()},openHabitDetails:function(){this.$router.push("/details/".concat(this.habit.id))}}}),$t=Ot,Ht=(a("e26e"),a("0789")),Ft=Object(c["a"])($t,K,J,!1,null,"0ccfad37",null),Tt=Ft.exports;j()(Ft,{VBtn:yt["a"],VExpandTransition:Ht["a"],VIcon:X["a"]});var Vt=n["a"].extend({name:"Home",components:{MobileTopBar:B,DesktopTopBar:R,HabitItem:Tt},computed:Object($["a"])({},Object(p["b"])({habits:"habits"})),methods:{openPage:function(t){this.$router.push(t)}}}),Nt=Vt,jt=(a("1f4e"),a("7496")),St=a("553a"),Et=a("f6c4"),At=Object(c["a"])(Nt,M,O,!1,null,"48f18cba",null),Bt=At.exports;j()(At,{VApp:jt["a"],VBtn:yt["a"],VContainer:E["a"],VFooter:St["a"],VIcon:X["a"],VMain:Et["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-container",[a("div",{staticClass:"text-h4 text-center my-12"},[t._v("ADD HABIT")]),a("v-text-field",{attrs:{id:"add-habit-name-input",placeholder:"Name","error-messages":t.errorMessage},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleAddClick.apply(null,arguments)}},model:{value:t.habitForm.name,callback:function(e){t.$set(t.habitForm,"name",e)},expression:"habitForm.name"}}),a("p",{staticClass:"text--secondary"},[t._v("Repeats on:")]),a("v-container",{staticClass:"py-0 justify-center",attrs:{fluid:""}},t._l(7,(function(e,n){return a("v-btn",{key:n,staticClass:"ml-2",attrs:{outlined:t.habitForm.repeatsOn[n],color:t.habitForm.repeatsOn[n]?"primary":"secondary",small:"",icon:""},on:{click:function(e){return t.toggleRepeatsOn(n)}}},[t._v(" "+t._s(t.weekLetter[n])+" ")])})),1)],1)],1),a("v-footer",[a("v-row",[a("v-col",[a("v-btn",{attrs:{text:"",color:"secondary",block:""},on:{click:t.handleBackClick}},[t._v(" Discard ")])],1),a("v-col",[a("v-btn",{attrs:{text:"",color:"primary",block:""},on:{click:t.handleAddClick}},[t._v(" Add ")])],1)],1)],1)],1)},Yt=[],Lt=(a("b0c0"),n["a"].extend({name:"AddHabit",data:function(){return{weekLetter:["S","M","T","W","T","F","S"],habitForm:{id:"_".concat((new Date).getTime()+Math.floor(1e4*Math.random())),name:"",acomplishments:[],notes:[],repeatsOn:[!1,!0,!0,!0,!0,!0,!1]},errorMessage:""}},mounted:function(){var t;null===(t=document.getElementById("add-habit-name-input"))||void 0===t||t.focus()},methods:{handleBackClick:function(){this.$router.push("/")},handleAddClick:function(){var t=this.habitForm.name.length;0===t?this.errorMessage="Habit name can't be empty":t>50?this.errorMessage="Habit name can't be more than 50 characters long":(this.$store.commit("addHabit",Object($["a"])({},this.habitForm)),this.$router.push("/"))},toggleRepeatsOn:function(t){this.habitForm.repeatsOn[t]=!this.habitForm.repeatsOn[t],this.$forceUpdate()}}})),Ut=Lt,Wt=(a("afd1"),a("62ad")),Rt=a("0fd9"),Kt=a("8654"),Jt=Object(c["a"])(Ut,Pt,Yt,!1,null,"bf4e7526",null),qt=Jt.exports;j()(Jt,{VApp:jt["a"],VBtn:yt["a"],VCol:Wt["a"],VContainer:E["a"],VFooter:St["a"],VMain:Et["a"],VRow:Rt["a"],VTextField:Kt["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div"):a("v-app",[t.habit?a("v-main",{staticClass:"pt-0 px-8"},[a("h1",{staticClass:"mb-2 mt-7 habit-title"},[t._v(t._s(t.habit.name.toUpperCase()))]),a("v-divider"),a("v-container",{staticClass:"\n        d-flex\n        justify-space-between justify-sm-center\n        align-center\n        pa-0\n        mt-5\n      ",attrs:{fluid:""}},[a("v-btn",{staticClass:"mtk-prev-button d-block d-sm-none",attrs:{icon:"",text:""},on:{click:t.prevMonth}},[a("v-icon",[t._v("mdi-chevron-up")])],1),a("span",{staticClass:"text-body-2 text-center"},[t._v(" "+t._s(t.selectedMonthName)+" - "+t._s(t.selectedYear)+" ")]),a("v-btn",{staticClass:"mtk-next-button d-block d-sm-none",attrs:{icon:"",text:""},on:{click:t.nextMonth}},[a("v-icon",[t._v("mdi-chevron-up")])],1)],1),a("v-container",{staticClass:"d-flex justify-center align-center",attrs:{fluid:""}},[a("v-btn",{staticClass:"mtk-prev-button d-none d-sm-block",attrs:{icon:"",text:""},on:{click:t.prevMonth}},[a("v-icon",[t._v("mdi-chevron-up")])],1),a("MonthTable",{staticClass:"mt-4 mx-0 mx-sm-4",attrs:{habit:t.habit,month:t.selectedMonth,year:t.selectedYear}}),a("v-btn",{staticClass:"mtk-next-button d-none d-sm-block",attrs:{icon:"",text:""},on:{click:t.nextMonth}},[a("v-icon",[t._v("mdi-chevron-up")])],1)],1),a("v-divider"),a("HabitAcomplishment",{attrs:{month:t.selectedMonth,year:t.selectedYear,habit:t.habit}})],1):a("v-container",{staticClass:"text-center fill-height justify-center"},[a("div",[a("h1",{staticClass:"text-h4 mb-8"},[t._v("Oops...")]),a("h2",{staticClass:"text-subtitle-1"},[t._v(" It looks like this habit does not exist :c ")])])]),a("v-divider"),a("v-footer",[t.habit?a("v-row",[a("v-col",[a("v-btn",{attrs:{text:"",color:"secondary",block:""},on:{click:t.handleBackClick}},[t._v(" Back ")])],1),a("v-col",[a("v-btn",{attrs:{text:"",color:"error",block:""},on:{click:function(e){t.showDeleteHabitDialog=!0}}},[t._v(" Delete ")])],1)],1):a("v-btn",{attrs:{color:"secondary",text:"",block:""},on:{click:t.handleBackClick}},[t._v(" Go Back ")])],1),t.habit?a("v-dialog",{model:{value:t.showDeleteHabitDialog,callback:function(e){t.showDeleteHabitDialog=e},expression:"showDeleteHabitDialog"}},[a("v-card",{attrs:{color:"#9BCFD1"}},[a("v-card-title",{staticClass:"text-h5 lighten-2"},[t._v(" "+t._s(t.habit.name)+" ")]),a("v-card-text",[t._v(" Are you sure you want to "),a("b",[t._v("delete")]),t._v(" this habit? This action can't be undone. ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.showDeleteHabitDialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"error",text:""},on:{click:t.handleDeleteClick}},[t._v(" Delete ")])],1)],1)],1):t._e()],1)},zt=[],Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-center"},t._l(t.weekDays,(function(e,n){return a("v-btn",{key:n,staticClass:"date-item",attrs:{text:"",icon:"",disabled:""}},[a("b",[t._v(t._s(e))])])})),1),t._l(t.monthWeeks,(function(e,n){return a("div",{key:n,staticClass:"d-flex justify-center"},t._l(e,(function(e,n){return a("v-btn",{key:n,class:{today:t.isToday(e.data),"is-past":t.isPast(e.data),"date-item":!0},attrs:{text:"",icon:"",outlined:t.isToday(e.data),disabled:!(t.isPast(e.data)||t.isToday(e.data))},on:{click:function(a){return t.handleDayClick(e.data)}}},[a("div",{style:{color:t.dayColor(e.data)}},[t._v(" "+t._s(e.data)+" ")]),a("div",{staticClass:"item-note d-flex align-center justify-center"},[t.notesForDay(e.data)&&e.data?a("v-icon",[t._v(" mdi-circle-small ")]):t._e()],1)])})),1)})),a("HabitNoteDialog",{attrs:{show:t.showAddHabitNoteDialog,habitName:t.addDetailForHabitName,habitId:t.addDetailForHabitId,habitDate:t.addDetailForHabitDate},on:{close:function(e){t.showAddHabitNoteDialog=!1}}})],2)},Xt=[];a("a9e3");function Zt(t,e){var a=t.notes.find((function(t){return f(t.date,e)}));return a}var te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"300",persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",{attrs:{color:"#9BCFD1"}},[a("v-card-title",{staticClass:"text-h5 lighten-2"},[t._v(" "+t._s(t.noteLabel)+" ")]),t.showDeleteHabitConfirmationMessage?[a("v-card-text",[t._v(" Are you sure you want to clear notes for this date? That cannot be undone. ")]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){t.showDeleteHabitConfirmationMessage=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"error",text:""},on:{click:t.deleteNote}},[t._v(" Clear Notes ")])],1)]:[a("v-card-text",[a("v-textarea",{attrs:{placeholder:"Add notes"},model:{value:t.noteInput,callback:function(e){t.noteInput=e},expression:"noteInput"}})],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:t.closeModal}},[t._v(" Cancel ")]),t.noteExists?a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.showDeleteHabitConfirmationMessage=!0}}},[t._v(" Clear ")]):t._e(),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.saveNote}},[t._v(" Save ")])],1)]],2)],1)},ee=[],ae=(a("99af"),["January","February","March","April","May","June","July","August","September","October","November","December"]);function ne(t){return ae[t]||""}var ie=n["a"].extend({props:{show:Boolean,habitName:String,habitId:String,habitDate:Array},computed:{noteLabel:function(){var t=this.habitDate[1],e=this.habitDate[2],a=ne(t).substring(0,3);return"".concat(a," ").concat(e," - ").concat(this.habitName.toUpperCase())}},data:function(){return{noteInput:"",noteExists:!1,showDeleteHabitConfirmationMessage:!1}},methods:{loadExistingNote:function(){var t=this,e=this.$store.state.habits.find((function(e){return e.id===t.habitId}));if(e){var a=Zt(e,this.habitDate);this.$data.noteInput=null===a||void 0===a?void 0:a.text,this.noteExists=!!a}},saveNote:function(){var t=this.habitId,e=this.habitDate,a=this.$data.noteInput;this.$store.commit("saveHabitNote",{habitId:t,date:e,text:a}),this.closeModal()},closeModal:function(){this.$data.noteInput="",this.$data.showDeleteHabitConfirmationMessage=!1,this.$emit("close")},deleteNote:function(){var t=this.habitId,e=this.habitDate;this.$store.commit("deleteHabitNote",{habitId:t,date:e}),this.closeModal()}},watch:{show:function(t){t&&this.loadExistingNote()}}}),oe=ie,se=a("b0af"),re=a("99d9"),ce=a("169a"),le=a("ce7e"),de=a("a844"),ue=Object(c["a"])(oe,te,ee,!1,null,null,null),he=ue.exports;j()(ue,{VBtn:yt["a"],VCard:se["a"],VCardActions:re["a"],VCardText:re["b"],VCardTitle:re["c"],VDialog:ce["a"],VDivider:le["a"],VTextarea:de["a"]});var be=n["a"].extend({data:function(){return{clickTimeout:0,addNoteMode:!1,showAddHabitNoteDialog:!1,addDetailForHabitName:"",addDetailForHabitId:"",addDetailForHabitDate:[],weekDays:["S","M","T","W","T","F","S"],monthWeeks:[[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}]]}},components:{HabitNoteDialog:he},props:{month:Number,year:Number,habit:Object},methods:{resetMonthWeeks:function(){this.$data.monthWeeks=[[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}],[{},{},{},{},{},{},{}]]},fillMonth:function(){this.resetMonthWeeks();var t=new Date;t.setFullYear(this.year),t.setMonth(this.month),t.setDate(1);var e=0,a=0;do{var n=t.getDay();6===a&&e++,a=n;var i=t.getDate();this.monthWeeks[e][n].data=i,t.setDate(i+1)}while(t.getDate()>1);this.$forceUpdate()},notesForDay:function(t){var e=[this.year,this.month,t];return Zt(this.habit,e)},isToday:function(t){var e=new Date;return e.getDate()===t&&e.getMonth()===this.month&&e.getFullYear()===this.year},isPast:function(t){var e=new Date,a=new Date;return a.setHours(0,0,0,0),a.setFullYear(this.year),a.setMonth(this.month),a.setDate(t),a.getTime()<e.getTime()},handleDayClick:function(t){var e=this;if(this.addNoteMode){clearTimeout(this.clickTimeout),this.addNoteMode=!1;var a=[this.year,this.month,t];this.showAddHabitNoteDialog=!0,this.addDetailForHabitName=this.habit.name,this.addDetailForHabitId=this.habit.id,this.addDetailForHabitDate=a}else this.clickTimeout=setTimeout((function(){return e.toggle(t)}),200),this.addNoteMode=!0},toggle:function(t){this.$data.addNoteMode=!1;var e=this.$props,a=e.month,n=e.year,i=new Date;i.setDate(t),i.setMonth(a),i.setFullYear(n);var o=mt(i);this.$store.commit("toggleHabitStatus",{habitId:this.habit.id,date:o}),this.$forceUpdate()},dayColor:function(t){var e={failed:"#9c1d1d",done:"#35c732",skipped:"#61acae"},a=this.$props,n=a.month,i=a.year,o=new Date;o.setHours(0,0,0,0),o.setDate(t),o.setMonth(n),o.setFullYear(i);var s=Mt(o,this.habit),r=null===s||void 0===s?void 0:s.status,c=this.isPast(t),l=o.getDay(),d=this.habit.repeatsOn[l];switch(r){case b.FAILED:return e.failed;case b.DONE:return e.done;case b.SKIPPED:return e.skipped;default:return c?d?e.failed:e.skipped:"unset"}}},mounted:function(){this.fillMonth()},watch:{showAddHabitNoteDialog:function(){this.$forceUpdate()},month:function(){this.fillMonth()},year:function(){this.fillMonth()}}}),fe=be,ve=(a("39d9"),Object(c["a"])(fe,Qt,Xt,!1,null,"329ed0f2",null)),pe=ve.exports;j()(ve,{VBtn:yt["a"],VIcon:X["a"]});var me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-5"},[a("h2",[a("v-icon",{staticClass:"text-h4 acomplishment-icon"},[t._v(" mdi-medal ")])],1),a("p",{staticClass:"text-h6"},[t._v(t._s(t.success)+"/"+t._s(t.total))])])},De=[];function ge(t,e,a){var n=a.repeatsOn[0],i=a.repeatsOn[6],o=a.acomplishments.reduce((function(a,o){var s=o.date[2],r=o.date[1],c=o.date[0],l=r===t,d=c===e,u=o.status===b.DONE,h=new Date;h.setHours(0,0,0,0),h.setFullYear(c),h.setMonth(r),h.setDate(s);var f=h.getDay(),v=0===f,p=6===f,m=v&&!n||p&&!i;return l&&d&&!m&&u?a+1:a+0}),0);return o}var ye=n["a"].extend({props:{habit:Object,month:Number,year:Number},computed:{success:function(){return ge(this.month,this.year,this.habit)},total:function(){var t=new Date;t.setMonth(this.month),t.setDate(0);var e=t.getDate();return e}}}),ke=ye,we=(a("6b81"),Object(c["a"])(ke,me,De,!1,null,null,null)),xe=we.exports;j()(we,{VIcon:X["a"]});var _e=n["a"].extend({components:{MonthTable:pe,HabitAcomplishment:xe},data:function(){return{loading:!0,habit:null,showDeleteHabitDialog:!1,selectedMonth:(new Date).getMonth(),selectedYear:(new Date).getFullYear()}},computed:Object($["a"])(Object($["a"])({},Object(p["b"])({habits:"habits"})),{},{selectedMonthName:function(){return ne(this.$data.selectedMonth).toUpperCase().substring(0,3)}}),mounted:function(){var t=this.$route.params.habitId,e=this.habits.find((function(e){return e.id===t}));e&&(this.$data.habit=e),this.$data.loading=!1},methods:{handleBackClick:function(){this.$router.push("/")},handleDeleteClick:function(){this.$store.commit("deleteHabit",this.$data.habit.id),this.$router.push("/")},prevMonth:function(){this.$data.selectedMonth-=1,this.$data.selectedMonth<0&&(this.$data.selectedMonth=11,this.$data.selectedYear-=1)},nextMonth:function(){this.$data.selectedMonth+=1,this.$data.selectedMonth>11&&(this.$data.selectedMonth=0,this.$data.selectedYear+=1)}}}),Ce=_e,Ie=(a("f26e"),a("2fa4")),Me=Object(c["a"])(Ce,Gt,zt,!1,null,null,null),Oe=Me.exports;j()(Me,{VApp:jt["a"],VBtn:yt["a"],VCard:se["a"],VCardActions:re["a"],VCardText:re["b"],VCardTitle:re["c"],VCol:Wt["a"],VContainer:E["a"],VDialog:ce["a"],VDivider:le["a"],VFooter:St["a"],VIcon:X["a"],VMain:Et["a"],VRow:Rt["a"],VSpacer:Ie["a"]}),n["a"].use(I["a"]);var $e=[{path:"/",name:"Home",component:Bt},{path:"/add",name:"AddHabit",component:qt},{path:"/details/:habitId",name:"HabitDetails",component:Oe}],He=new I["a"]({routes:$e});He.beforeEach(function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e,a,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.restored;case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}());var Fe=He;n["a"].config.productionTip=!1,new n["a"]({store:w,vuetify:_,router:Fe,render:function(t){return t(d)}}).$mount("#app")},e26e:function(t,e,a){"use strict";a("931e")},e468:function(t,e,a){"use strict";a("4418")},eaba:function(t,e,a){},f26e:function(t,e,a){"use strict";a("0b3a")}});
//# sourceMappingURL=app.de0aa7f1.js.map