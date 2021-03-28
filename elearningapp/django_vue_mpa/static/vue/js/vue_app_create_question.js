(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={vue_app_create_question:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([5,"chunk-vendors"]),a()})({"027f":function(t,e,a){},"2ac9":function(t,e,a){"use strict";a("c749")},"316a":function(t,e,a){"use strict";a("027f")},"3a4a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid question-editor-grid one-col-mobile one-col-tablet"},[a("div",{staticClass:"grid-col"},[a("div",[a("h3",[t._v("Testo della domanda")]),a("vue-editor",{staticClass:"big-editor",attrs:{id:"questionText",editorToolbar:t.customToolbar},model:{value:t.questionTextData,callback:function(e){t.questionTextData=e},expression:"questionTextData"}})],1),t.categories.length>0?a("div",[a("h3",[t._v("Categoria")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryData,expression:"categoryData"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryData=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Scegli la categoria")]),t._l(t.categories,(function(e,n){return a("option",{key:n,domProps:{value:Object.keys(e)[0]}},[t._v(" "+t._s(e[Object.keys(e)[0]])+" ")])}))],2)]):t._e(),a("div",[a("h3",[t._v("Risposte")]),t._l(t.answersData,(function(e,n){return a("div",{key:n,staticClass:"grid two-to-one-col-fr rem-1-gap",staticStyle:{"margin-bottom":"0.5rem"}},[a("div",[a("vue-editor",{staticClass:"answer-editor",attrs:{id:"answer_"+n,editorToolbar:t.customToolbar},model:{value:t.answersData[n],callback:function(e){t.$set(t.answersData,n,e)},expression:"answersData[index]"}})],1),a("div",{staticStyle:{"align-self":"center"}},[a("b-button",{staticStyle:{"align-self":"center"},attrs:{disabled:t.answersData.length<=2,variant:"danger"},on:{click:function(e){t.correctAnswerIndexData+1==n&&(t.correctAnswerIndexData=0),t.answersData.splice(n,1)}}},[t._v("Rimuovi")]),a("div",{staticClass:"radio-option"},[a("b-form-radio",{attrs:{name:String(n+1),value:n+1},model:{value:t.correctAnswerIndexData,callback:function(e){t.correctAnswerIndexData=e},expression:"correctAnswerIndexData"}},[t._v("Risposta corretta")])],1)],1)])})),a("b-button",{staticClass:"w-100",attrs:{variant:"outline-primary"},on:{click:function(e){return t.answersData.push("")}}},[a("b-icon",{staticClass:"inline-icon",staticStyle:{"margin-bottom":"2px"},attrs:{icon:"plus-circle"}}),t._v(" Aggiungi risposta")],1)],2),a("div",[a("h3",[t._v("Soluzione")]),a("vue-editor",{staticClass:"big-editor",attrs:{id:"solutionText",editorToolbar:t.customToolbar},model:{value:t.solutionData,callback:function(e){t.solutionData=e},expression:"solutionData"}})],1)]),a("div",{staticClass:"grid-col preview-col"},[a("div",{staticClass:"preview"},[a("h3",[t._v("Anteprima")]),a("QuestionPreview",{attrs:{text:t.questionTextWithoutParagraphTag,answers:t.answerTextsWithoutParagraphTag,correctAnswerIndex:t.correctAnswerIndexData,solution:t.solutionData}}),a("b-button",{staticClass:"w-100 mt-4",attrs:{variant:"outline-success",disabled:t.invalidForm||t.disableSave},on:{click:function(e){return t.$emit("save",t.serializedQuestionData)}}},[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"check-circle"}}),t._v(" Salva domanda")],1)],1)])])},r=[],o=(a("4de4"),a("c975"),a("d81d"),a("45fc"),a("a9e3"),a("5873")),s=a("ce79"),i=a("ecee"),c=a("c074");i["c"].add(c["c"]);var u={name:"QuestionEditor",components:{VueEditor:o["a"],QuestionPreview:s["a"]},props:{courseId:Number,disableSave:{type:Boolean,default:!1},questionId:{type:Number,default:-1},questionText:{type:String,default:""},answers:{type:Array,default:function(){return["",""]}},correctAnswerIndex:{type:Number,default:0},solution:{type:String,default:""},categories:{type:[Array,Number],default:function(){return[]}},category:{type:[String,Number],default:""}},mounted:function(){this.questionTextData=this.questionText,this.answersData=this.answers,this.correctAnswerIndexData=this.correctAnswerIndex,this.solutionData=this.solution,this.categoryData=String(this.category)},watch:{},data:function(){return{questionTextData:"",solutionData:"",answersData:[],previewElements:[],categoryData:"",correctAnswerIndexData:-1,customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],["image"]]}},methods:{cleanup:function(){this.questionTextData=this.solutionData=this.categoryData="",this.answersData=["",""],this.correctAnswerIndexData=0}},computed:{questionTextWithoutParagraphTag:function(){return this.questionTextData.replaceAll(/<[/]?p>/gi,"")},answerTextsWithoutParagraphTag:function(){return this.answersData.map((function(t){return t.replaceAll(/<[/]?p>/gi,"")}))},solutionTextWithoutParagraphTag:function(){return this.solutionData.replaceAll(/<[/]?p>/gi,"")},serializedQuestionData:function(){var t={text:this.questionTextWithoutParagraphTag,solution_text:this.solutionTextWithoutParagraphTag.length?this.solutionData:"(soluzione non ancora inserita)",category:this.categoryData,answers:this.answerTextsWithoutParagraphTag,correct_answer_index:this.correctAnswerIndexData,course:this.courseId};return-1!=this.questionId&&(t.questionId=this.questionId),t},invalidForm:function(){var t=function(t){return t.filter((function(e,a){return t.indexOf(e)!=a}))};return!this.questionTextData.length||0==this.correctAnswerIndexData||this.answersData.some((function(t){return!t.length}))||t(this.answersData).length>0||this.categories.length&&!this.categoryData.length}}},l=u,d=(a("f55c"),a("2877")),p=Object(d["a"])(l,n,r,!1,null,"fa599ec6",null);e["a"]=p.exports},5:function(t,e,a){t.exports=a("f58d")},"6c66":function(t,e,a){},c749:function(t,e,a){},ce79:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"question-preview-box":t.styled}},[t._m(0),a("vue-mathjax",{attrs:{id:"question-preview-"+t.questionId,formula:t.text,safe:!1,options:t.mathjaxOptions}}),t._l(t.answers,(function(e,n){return a("p",{key:n,staticClass:"answer-paragraph answer-paragraph-full"},[a("strong",[t._v(t._s(parseInt(n+1))+".")]),t._v(" "),a("vue-mathjax",{attrs:{formula:e,safe:!1,options:t.mathjaxOptions}}),n+1==t.correctAnswerIndex?a("span",{staticClass:"comment"},[a("em",{staticClass:"text-muted"},[t._v("(Risposta corretta)")])]):t._e()],1)})),t._m(1),a("vue-mathjax",{attrs:{formula:t.solution,safe:!1,options:t.mathjaxOptions}})],2)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Domanda")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Soluzione")])])}],o=(a("a9e3"),a("7b93")),s={name:"QuestionPreview",components:{"vue-mathjax":o["VueMathjax"]},props:{text:String,solution:String,answers:Array,correctAnswerIndex:Number,questionId:[String,Number],styled:{type:Boolean,default:!0}},mounted:function(){},data:function(){return{mathjaxOptions:{tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0}}}},methods:{},computed:{}},i=s,c=(a("316a"),a("2877")),u=Object(c["a"])(i,n,r,!1,null,"1e27a754",null);e["a"]=u.exports},f55c:function(t,e,a){"use strict";a("6c66")},f58d:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("ba4c"),r=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("question-editor",{ref:"editor",attrs:{"course-id":t.courseId,categories:t.categories,"disable-save":t.loading},on:{save:t.saveQuestionToDatabase}}),a("transition",{attrs:{name:"overlay-text"}},[t.success||t.loading?a("div",{staticClass:"overlay-card"},[a("b-card",{attrs:{"bg-variant":"light","text-variant":"black"}},[t.loading?a("b-card-text",{staticClass:"grid-card"},[a("b-spinner",{staticClass:"ml-3"}),t._v(" Salvataggio in corso. Se la domanda contiene parecchie formule LaTeX, il salvataggio potrebbe richiedere un po' di tempo. ")],1):t._e(),t.success?a("b-card-text",{staticClass:"grid-card"},[a("font-awesome-icon",{staticClass:"correct",staticStyle:{width:"80px",height:"80px"},attrs:{icon:"check-circle"}}),t._v(" Domanda salvata con successo ")],1):t._e()],1)],1):t._e()])],1)},s=[],i=(a("a9e3"),a("3a4a")),c=a("bc3a"),u=a.n(c),l={name:"CreateQuestion",components:{QuestionEditor:i["a"]},props:{courseId:Number,categories:Array,apiUrl:String},mounted:function(){u.a.defaults.xsrfCookieName="csrftoken",u.a.defaults.xsrfHeaderName="X-CSRFTOKEN"},data:function(){return{success:!1,loading:!1}},methods:{saveQuestionToDatabase:function(t){var e=this;console.log(t),this.loading=!0,u.a.post(this.apiUrl,t).then((function(t){console.log(t),200==t.status&&e.showConfirmationAndCleanup(),e.loading=!1})).catch((function(t){alert(t),console.log(t)}))},showConfirmationAndCleanup:function(){var t=this;this.$refs.editor.cleanup(),this.success=!0,setTimeout((function(){t.success=!1}),2e3)}},computed:{}},d=l,p=(a("2ac9"),a("2877")),f=Object(p["a"])(d,o,s,!1,null,"5fd772c2",null),h=f.exports,v=a("5f5b"),g=a("b1e0"),m=a("ad3d");r.a.use(v["a"]),r.a.use(g["a"]),r.a.component("font-awesome-icon",m["a"]),r.a.config.productionTip=!1,r.a.config.devtools=!1,new r.a({el:"#app",components:{"create-question":h}})}});