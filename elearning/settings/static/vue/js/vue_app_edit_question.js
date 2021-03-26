(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={vue_app_edit_question:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([6,"chunk-vendors"]),n()})({"027f":function(t,e,n){},2988:function(t,e,n){"use strict";n("f49f")},"316a":function(t,e,n){"use strict";n("027f")},3720:function(t,e,n){},"3a4a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid question-editor-grid one-col-mobile one-col-tablet"},[n("div",{staticClass:"grid-col"},[n("div",[n("h3",[t._v("Testo della domanda")]),n("vue-editor",{staticClass:"big-editor",attrs:{id:"questionText",editorToolbar:t.customToolbar},model:{value:t.questionTextData,callback:function(e){t.questionTextData=e},expression:"questionTextData"}})],1),t.categories.length>0?n("div",[n("h3",[t._v("Categoria")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryData,expression:"categoryData"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryData=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("Scegli la categoria")]),t._l(t.categories,(function(e,a){return n("option",{key:a,domProps:{value:Object.keys(e)[0]}},[t._v(" "+t._s(e[Object.keys(e)[0]])+" ")])}))],2)]):t._e(),n("div",[n("h3",[t._v("Risposte")]),t._l(t.answersData,(function(e,a){return n("div",{key:a,staticClass:"grid two-to-one-col-fr rem-1-gap",staticStyle:{"margin-bottom":"0.5rem"}},[n("div",[n("vue-editor",{staticClass:"answer-editor",attrs:{id:"answer_"+a,editorToolbar:t.customToolbar},model:{value:t.answersData[a],callback:function(e){t.$set(t.answersData,a,e)},expression:"answersData[index]"}})],1),n("div",{staticStyle:{"align-self":"center"}},[n("b-button",{staticStyle:{"align-self":"center"},attrs:{disabled:t.answersData.length<=2,variant:"danger"},on:{click:function(e){t.correctAnswerIndexData+1==a&&(t.correctAnswerIndexData=0),t.answersData.splice(a,1)}}},[t._v("Rimuovi")]),n("div",{staticClass:"radio-option"},[n("b-form-radio",{attrs:{name:String(a+1),value:a+1},model:{value:t.correctAnswerIndexData,callback:function(e){t.correctAnswerIndexData=e},expression:"correctAnswerIndexData"}},[t._v("Risposta corretta")])],1)],1)])})),n("b-button",{staticClass:"w-100",attrs:{variant:"outline-primary"},on:{click:function(e){return t.answersData.push("")}}},[n("b-icon",{staticClass:"inline-icon",staticStyle:{"margin-bottom":"2px"},attrs:{icon:"plus-circle"}}),t._v(" Aggiungi risposta")],1)],2),n("div",[n("h3",[t._v("Soluzione")]),n("vue-editor",{staticClass:"big-editor",attrs:{id:"solutionText",editorToolbar:t.customToolbar},model:{value:t.solutionData,callback:function(e){t.solutionData=e},expression:"solutionData"}})],1)]),n("div",{staticClass:"grid-col preview-col"},[n("div",{staticClass:"preview"},[n("h3",[t._v("Anteprima")]),n("QuestionPreview",{attrs:{text:t.questionTextWithoutParagraphTag,answers:t.answerTextsWithoutParagraphTag,correctAnswerIndex:t.correctAnswerIndexData,solution:t.solutionData}}),n("b-button",{staticClass:"w-100 mt-4",attrs:{variant:"outline-success",disabled:t.invalidForm},on:{click:function(e){return t.$emit("save",t.serializedQuestionData)}}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"check-circle"}}),t._v(" Salva domanda")],1)],1)])])},s=[],i=(n("d81d"),n("45fc"),n("a9e3"),n("5873")),o=n("ce79"),r=n("ecee"),c=n("c074");r["c"].add(c["c"]);var u={name:"QuestionEditor",components:{VueEditor:i["a"],QuestionPreview:o["a"]},props:{courseId:Number,questionId:{type:Number,default:-1},questionText:{type:String,default:""},answers:{type:Array,default:function(){return["",""]}},correctAnswerIndex:{type:Number,default:0},solution:{type:String,default:""},categories:{type:[Array,Number],default:function(){return[]}},category:{type:[String,Number],default:""}},mounted:function(){this.questionTextData=this.questionText,this.answersData=this.answers,this.correctAnswerIndexData=this.correctAnswerIndex,this.solutionData=this.solution,this.categoryData=String(this.category)},watch:{},data:function(){return{questionTextData:"",solutionData:"",answersData:[],previewElements:[],categoryData:"",correctAnswerIndexData:-1,customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],["image"]]}},methods:{cleanup:function(){this.questionTextData=this.solutionData=this.categoryData="",this.answersData=["",""],this.correctAnswerIndexData=0}},computed:{questionTextWithoutParagraphTag:function(){return this.questionTextData.replaceAll(/<[/]?p>/gi,"")},answerTextsWithoutParagraphTag:function(){return this.answersData.map((function(t){return t.replaceAll(/<[/]?p>/gi,"")}))},solutionTextWithoutParagraphTag:function(){return this.solutionData.replaceAll(/<[/]?p>/gi,"")},serializedQuestionData:function(){var t={text:this.questionTextWithoutParagraphTag,solution_text:this.solutionTextWithoutParagraphTag.length?this.solutionData:"(soluzione non ancora inserita)",category:this.categoryData,answers:this.answerTextsWithoutParagraphTag,correct_answer_index:this.correctAnswerIndexData,course:this.courseId};return-1!=this.questionId&&(t.questionId=this.questionId),t},invalidForm:function(){return!this.questionTextData.length||0==this.correctAnswerIndexData||this.answersData.some((function(t){return!t.length}))||this.categories.length&&!this.categoryData.length}}},l=u,d=(n("f39d"),n("2877")),p=Object(d["a"])(l,a,s,!1,null,"b359ee52",null);e["a"]=p.exports},"3f0d":function(t,e,n){},6:function(t,e,n){t.exports=n("e145")},ca7b:function(t,e,n){"use strict";n("3720")},ce79:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"question-preview-box":t.styled}},[t._m(0),n("vue-mathjax",{attrs:{id:"question-preview-"+t.questionId,formula:t.text,safe:!1,options:t.mathjaxOptions}}),t._l(t.answers,(function(e,a){return n("p",{key:a,staticClass:"answer-paragraph answer-paragraph-full"},[n("strong",[t._v(t._s(parseInt(a+1))+".")]),t._v(" "),n("vue-mathjax",{attrs:{formula:e,safe:!1,options:t.mathjaxOptions}}),a+1==t.correctAnswerIndex?n("span",{staticClass:"comment"},[n("em",{staticClass:"text-muted"},[t._v("(Risposta corretta)")])]):t._e()],1)})),t._m(1),n("vue-mathjax",{attrs:{formula:t.solution,safe:!1,options:t.mathjaxOptions}})],2)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("Domanda")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("Soluzione")])])}],i=(n("a9e3"),n("7b93")),o={name:"QuestionPreview",components:{"vue-mathjax":i["VueMathjax"]},props:{text:String,solution:String,answers:Array,correctAnswerIndex:Number,questionId:[String,Number],styled:{type:Boolean,default:!0}},mounted:function(){},data:function(){return{mathjaxOptions:{tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0}}}},methods:{},computed:{}},r=o,c=(n("316a"),n("2877")),u=Object(c["a"])(r,a,s,!1,null,"1e27a754",null);e["a"]=u.exports},e145:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("ba4c"),s=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("b-spinner",{staticStyle:{position:"fixed",top:"50%",left:"50%",color:"black"},attrs:{label:"Loading..."}}):t._e(),n("div",[n("p",{staticClass:"mt-4"},[n("span",{staticClass:"mr-2"},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"search"}}),t._v(" Filtra per:")],1),this.categories.length?n("span",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.filterByCategory,expression:"filterByCategory"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filterByCategory=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("Categoria")]),t._l(t.categories,(function(e,a){return n("option",{key:a,domProps:{value:Object.keys(e)[0]}},[t._v(" "+t._s(e[Object.keys(e)[0]])+" ")])}))],2)]):t._e()])]),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMoreQuestions,expression:"loadMoreQuestions"}],staticClass:"mt-4 grid edit-question-grid rem-1-gap"},t._l(t.questionsData,(function(e){return n("div",{key:e.questionId,class:{"column-span-2":t.editingId==e.questionId,"successfully-edited":t.successfullyEditedId==e.questionId},attrs:{id:"q-"+e.questionId}},[t.editingId==e.questionId?n("QuestionEditor",{ref:"editor"+parseInt(e.questionId),refInFor:!0,staticClass:"distinct p-5 mb-5 mt-5",attrs:{"course-id":t.courseId,questionText:e.textSource,answers:e.answersSources,"correct-answer-index":e.correctAnswerIndex,questionId:e.questionId,categories:t.categories,category:e.category,solution:e.solutionSource},on:{save:t.saveQuestionToDatabase}}):n("CollapsableQuestionPreview",{attrs:{text:e.text,answers:e.answers,"correct-answer-index":e.correctAnswerIndex,questionId:e.questionId,solution:e.solution},on:{editQuestion:t.editQuestion}})],1)})),0)],1)},o=[],r=(n("4de4"),n("c740"),n("d81d"),n("a9e3"),n("2909")),c=n("5530"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"question-preview-box",class:{"preview-box":t.collapsed}},[n("div",{staticClass:"preview-text",class:{hidden:!t.collapsed}},[n("span",{domProps:{innerHTML:t._s(t.text)}}),t._l(t.answers,(function(e,a){return n("p",{key:a,staticClass:"mt-3 answer-paragraph answer-paragraph-preview"},[n("strong",[t._v(t._s(parseInt(a+1))+".")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e)}}),a+1==t.correctAnswerIndex?n("span",{staticClass:"comment"},[n("em",{staticClass:"text-muted"},[t._v("(Risposta corretta)")])]):t._e()])})),n("div",{staticClass:"preview-text-fade"})],2),n("QuestionPreview",{class:{hidden:t.collapsed},attrs:{text:t.text,solution:t.solution,answers:t.answers,correctAnswerIndex:t.correctAnswerIndex,questionId:t.questionId,styled:!1}}),n("div",{staticClass:"mt-4 pt-2",staticStyle:{"z-index":"2"}},[n("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary"},on:{click:function(e){t.collapsed=!t.collapsed}}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:t.collapsed?"plus":"minus"}}),t._v(" "+t._s(t.collapsed?"Mostra di più":"Mostra di meno ")+" ")],1),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.$emit("editQuestion",t.questionId)}}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"edit"}}),t._v("Modifica ")],1)],1)],1)])},l=[],d=n("ce79"),p=n("ecee"),f=n("c074");p["c"].add(f["i"]),p["c"].add(f["h"]),p["c"].add(f["d"]);var h={name:"CollapsableQuestionPreview",components:{QuestionPreview:d["a"]},props:{text:String,solution:String,answers:Array,correctAnswerIndex:Number,questionId:[String,Number]},mounted:function(){},data:function(){return{collapsed:!0,mathjaxOptions:{tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0}}}},methods:{},computed:{}},g=h,v=(n("2988"),n("2877")),m=Object(v["a"])(g,u,l,!1,null,"24eff1e0",null),x=m.exports,w=n("3a4a"),b=n("bc3a"),y=n.n(b),I=n("487a"),_=n.n(I);p["c"].add(f["k"]);var D={name:"EditQuestion",components:{CollapsableQuestionPreview:x,QuestionEditor:w["a"]},directives:{infiniteScroll:_.a},watch:{filterByCategory:function(){this.loadMoreQuestions(!0)}},props:{questions:Array,userId:Number,courseId:Number,categories:{type:Array,default:function(){return[]}},editQuestionApiUrl:String,getQuestionsApiUrl:String,openEditor:{type:Number,default:null}},mounted:function(){y.a.defaults.xsrfCookieName="csrftoken",y.a.defaults.xsrfHeaderName="X-CSRFTOKEN",this.questionsData=this.questions,null!=this.openEditor&&this.openInitialEditor()},data:function(){return{questionsData:[],loading:!1,editingId:null,successfullyEditedId:null,scrollToConfig:{easing:"linear",cancelable:!0,offset:-250},filterByCategory:""}},methods:{editQuestion:function(t){this.editingId=t,console.log(this.$refs)},saveQuestionToDatabase:function(t){var e=this;console.log(t),this.loading=!0,y.a.put(this.editQuestionApiUrl,t).then((function(t){console.log(t);var n=t.data;200==t.status&&(e.questionsData[e.questionsData.findIndex((function(t){return t.questionId===e.editingId}))]=n,e.showConfirmationAndCloseEditor()),e.loading=!1})).catch((function(t){console.log(t)}))},showConfirmationAndCloseEditor:function(){var t=this,e=this.$refs["editor"+this.editingId][0];e.cleanup(),this.$scrollTo("#q-"+this.editingId,0,this.scrollToConfig),this.successfullyEditedId=this.editingId,setTimeout((function(){t.successfullyEditedId=null}),3e3),this.editingId=null},openInitialEditor:function(){var t=this;-1==this.questionsData.findIndex((function(e){return e.questionId==t.openEditor}))&&y.a.get(this.getQuestionsApiUrl+"1/"+(this.openEditor-1)+"/").then((function(e){t.loading=!1,console.log(e.data),t.questionsData.unshift(Object(c["a"])(Object(c["a"])({},e.data[0]),{},{extra:!0}))})).catch((function(t){console.log(t)})),setTimeout((function(){t.editQuestion(t.openEditor)}),1e3)},loadMoreQuestions:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;e&&(this.questionsData=[]),this.loading=!0,y.a.get(this.getQuestionsApiUrl+n+"/"+this.maxQuestionId+"/"+(this.filterByCategory.length?this.filterByCategory+"/":"")).then((function(e){var n;t.loading=!1,console.log(e.data),(n=t.questionsData).push.apply(n,Object(r["a"])(e.data))})).catch((function(t){console.log(t)}))}},computed:{maxQuestionId:function(){return this.questionsData.length?Math.max.apply(Math,Object(r["a"])(this.questionsData.filter((function(t){return!t.extra})).map((function(t){return parseInt(t.questionId)})))):0}}},q=D,C=(n("ca7b"),Object(v["a"])(q,i,o,!1,null,null,null)),T=C.exports,A=n("5f5b"),j=n("b1e0"),S=n("ad3d"),Q=n("f13c");s.a.use(A["a"]),s.a.use(j["a"]),s.a.use(Q),s.a.component("font-awesome-icon",S["a"]),s.a.config.productionTip=!1,new s.a({el:"#app",components:{"edit-question":T,"vue-scrollto":Q}})},f39d:function(t,e,n){"use strict";n("3f0d")},f49f:function(t,e,n){}});