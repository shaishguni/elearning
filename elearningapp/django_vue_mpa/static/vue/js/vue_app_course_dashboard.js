(function(t){function e(e){for(var a,n,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},s={vue_app_course_dashboard:0},o=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=c;o.push([3,"chunk-vendors"]),r()})({"1e78":function(t,e,r){},3:function(t,e,r){t.exports=r("8276")},8276:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("ba4c"),s=r.n(a),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"mb-5",attrs:{id:"course_title"}},[t._v(t._s(t.courseName))]),r("div",{staticClass:"grid two-col-grid dashboard-grid"},[r("div",{staticStyle:{"margin-top":"0rem"}},[r("a",{attrs:{href:"/test/"+t.courseId}},[r("button",{staticClass:"btn btn-dark dashboard-btn"},[r("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"stream"}}),t._v(" Inizia un test ")],1)]),r("br"),r("a",{attrs:{href:"/question_history/"+t.courseId}},[r("button",{staticClass:"btn btn-dark dashboard-btn"},[r("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"bookmark"}}),t._v(" Lista domande già viste ")],1)]),r("br"),r("a",{attrs:{href:"/test_history/"+t.courseId}},[r("button",{staticClass:"btn mb-0 btn-dark dashboard-btn"},[r("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"history"}}),t._v(" Cronologia test ")],1)])]),r("div",{staticClass:"user-stats"},[r("span",{staticClass:"h5"},[t._v("I tuoi ultimi punteggi")]),r("span",{staticClass:"text-muted",staticStyle:{"margin-left":"0.5rem"}},[t._v(" Media: "+t._s(t.userAverageScore))]),r("TrendChart",{attrs:{datasets:[{data:t.lastScores,smooth:!0,fill:!0,showPoints:!0}],grid:{verticalLines:!1,horizontalLines:!1},labels:{yLabels:parseInt(new Set(t.lastScores).size),yLabelsTextFormatter:function(t){return Math.round(t)}},interactive:!1,padding:"25 0 8 0"}}),r("svg",{attrs:{width:"0",height:"0",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("linearGradient",{attrs:{id:"gradient",x1:"1",x2:"1",y1:"0",y2:"1"}},[r("stop",{attrs:{offset:"0%","stop-color":"rgba(97,218,251, 0.4)"}}),r("stop",{attrs:{offset:"100%","stop-color":"rgba(97,218,251, 0.2)"}})],1)],1)])],1)])])},n=[],i=(r("a9e3"),r("ecee")),c=r("c074");i["c"].add(c["l"]),i["c"].add(c["f"]),i["c"].add(c["a"]);var u={name:"CourseDashboard",components:{},props:{courseName:String,courseId:Number,userAverageScore:Number,userLastScore:Number,userId:Number,lastScores:Array},mounted:function(){},data:function(){return{}},methods:{}},d=u,l=(r("e7b7"),r("2877")),f=Object(l["a"])(d,o,n,!1,null,null,null),p=f.exports,b=r("5f5b"),h=r("b1e0"),m=r("4ddc"),v=r("ad3d");s.a.use(b["a"]),s.a.use(h["a"]),s.a.use(m["a"]),s.a.component("font-awesome-icon",v["a"]),s.a.config.productionTip=!1,new s.a({el:"#app",components:{"course-dashboard":p}})},e7b7:function(t,e,r){"use strict";r("1e78")}});