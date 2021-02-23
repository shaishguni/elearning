(function(e){function t(t){for(var i,r,n=t[0],u=t[1],c=t[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],i=!0,n=1;n<o.length;n++){var u=o[n];0!==a[u]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},a={vue_app_course_setup:0},s=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var l=u;s.push([8,"chunk-vendors"]),o()})({1700:function(e,t,o){},"2a54":function(e,t,o){"use strict";o("1700")},8:function(e,t,o){e.exports=o("e29b")},e29b:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("ba4c"),a=o.n(i),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"setup"}},[e.loading?o("b-spinner",{staticStyle:{position:"fixed",top:"50%",left:"50%"},attrs:{label:"Loading..."}}):e._e(),o("div",[o("transition",{attrs:{name:"slide-fade"}},[1==e.currstep?o("div",{attrs:{id:"step1"}},[o("div",{staticClass:"setupfield"},[o("label",{attrs:{for:"input-large"}},[o("h3",[e._v("Nome del corso")])]),o("b-form-input",{attrs:{autocomplete:"off",id:"input-large",size:"lg",placeholder:"Inserisci il nome del corso"},model:{value:e.coursename,callback:function(t){e.coursename=t},expression:"coursename"}})],1)]):e._e()]),o("transition",{attrs:{name:"slide-fade"}},[2==e.currstep?o("div",{attrs:{id:"step2"}},[o("div",{staticClass:"setupfield"},[o("label",{attrs:{for:"input-large"}},[o("h3",[e._v("Qual è il punteggio minimo per la sufficienza nei test?")])]),o("b-form-input",{attrs:{autocomplete:"off",type:"number",id:"input-large",size:"lg",value:"0"},model:{value:e.minpoints,callback:function(t){e.minpoints=t},expression:"minpoints"}})],1),o("div",{staticClass:"setupfield"},[o("h3",[e._v("Quanti punti assegnare per:")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-4"},[o("label",{attrs:{for:"input-large"}},[o("h5",[e._v("Risposta corretta")])]),o("b-form-input",{attrs:{autocomplete:"off",type:"number",id:"input-large",size:"lg"},model:{value:e.corrpoints,callback:function(t){e.corrpoints=t},expression:"corrpoints"}})],1),o("div",{staticClass:"col-4"},[o("label",{attrs:{for:"input-large"}},[o("h5",[e._v("Risposta sbagliata")])]),o("b-form-input",{attrs:{autocomplete:"off",type:"number",id:"input-large",size:"lg"},model:{value:e.incorrpoints,callback:function(t){e.incorrpoints=t},expression:"incorrpoints"}})],1),o("div",{staticClass:"col-4"},[o("label",{attrs:{for:"input-large"}},[o("h5",[e._v("Risposta non data")])]),o("b-form-input",{attrs:{autocomplete:"off",type:"number",id:"input-large",size:"lg"},model:{value:e.unanspoints,callback:function(t){e.unanspoints=t},expression:"unanspoints"}})],1),o("div",{staticClass:"col-12",staticStyle:{"margin-top":"1rem"}},["B"==e.questionmode?o("p",[o("strong",[e._v("Nota bene:")]),e._v(" dato che hai selezionato la modalità "),o("em",[e._v("Domande raggruppate")]),e._v(', questo parametro si riferisce al numero di punti che ogni singola "micro-domanda" vale. Questo significa che se, per esempio, crei una domanda raggruppata che ne contiene 3 al suo interno, ciascuna delle 3 domande a essa associata avrà i valori specificati. ')]):e._e()])])])]):e._e()]),o("transition",{attrs:{name:"slide-fade"}},[3==e.currstep?o("div",{attrs:{id:"step3"}},[o("div",{staticClass:"setupfield"},[o("h3",[e._v("Vuoi che le domande vengano raggruppate per categoria?")]),o("b-form-group",[o("div",{staticClass:"radio-option"},[o("b-form-radio",{attrs:{name:"a",value:"A"},model:{value:e.categorymode,callback:function(t){e.categorymode=t},expression:"categorymode"}},[e._v("Sì")]),o("span",{staticClass:"desc text-muted"},[e._v(" Potrai creare una lista di argomenti trattati nel corso, e ogni domanda verrà inserita in una categoria. Dopodiché, potrai specificare una distribuzione di domande per categoria, ovvero impostare per ogni categoria quante domande di quella categoria dovranno comparire nei test. ")])],1),o("div",{staticClass:"radio-option"},[o("b-form-radio",{attrs:{name:"b",value:"B"},model:{value:e.categorymode,callback:function(t){e.categorymode=t},expression:"categorymode"}},[e._v("No")]),o("span",{staticClass:"desc text-muted"},[e._v(" Le domande non verranno associate a una categoria e avranno tutte la stessa probabilità di comparire nei test. ")])],1)]),"A"==e.categorymode?o("div",{staticClass:"setupfield"},[o("h3",[e._v("Crea categorie")]),e._l(e.categories,(function(t,i){return o("div",{key:i,staticClass:"row"},[o("div",{staticClass:"col-8"},[o("b-form-input",{staticClass:"category-input",attrs:{autocomplete:"off",size:"lg",placeholder:"Categoria"},model:{value:e.categories[i],callback:function(t){e.$set(e.categories,i,t)},expression:"categories[index]"}})],1),o("div",{staticClass:"col-4"},[o("b-button",{attrs:{disabled:e.categories.length<=1,variant:"danger"},on:{click:function(t){return e.categories.splice(i,1)}}},[e._v("Rimuovi")])],1)])})),o("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.categories.push("")}}},[e._v("Aggiungi")])],2):e._e()],1)]):e._e()]),o("transition",{attrs:{name:"slide-fade"}},[4==e.currstep?o("div",{attrs:{id:"step4"}},[o("div",{staticClass:"setupfield"},["A"==e.categorymode?o("div",[o("h3",[e._v(" Vuoi che le domande compaiano nei test con una particolare distribuzione in base alle categorie? ")]),o("div",{staticClass:"radio-option"},[o("b-form-radio",{attrs:{name:"a",value:"A"},model:{value:e.distributionmode,callback:function(t){e.distributionmode=t},expression:"distributionmode"}},[e._v("Sì")])],1),o("div",{staticClass:"radio-option"},[o("b-form-radio",{attrs:{name:"b",value:"B"},model:{value:e.distributionmode,callback:function(t){e.distributionmode=t},expression:"distributionmode"}},[e._v("No")]),o("span",{staticClass:"desc text-muted"},[e._v(" Le domande verranno sempre scelte in maniera casuale indipendentemente dalla loro categoria. Selezionando questa opzione, si rischia che in alcuni test compaiano tutte domande sullo stesso argomento. ")])],1)]):e._e(),"A"==e.distributionmode?o("div",{staticClass:"setupfield"},[o("h3",[e._v("Crea distribuzione")]),e._l(e.categories,(function(t,i){return o("div",{key:i,staticClass:"row"},[o("div",{staticClass:"col-6"},[o("span",{staticClass:"categoryName h5"},[e._v(e._s(t))]),o("b-form-input",{staticClass:"category-input form-control-inline",class:{"form-error":e.distributionvalues[i]<0},attrs:{autocomplete:"off",size:"md",type:"number",placeholder:"0"},model:{value:e.distributionvalues[i],callback:function(t){e.$set(e.distributionvalues,i,t)},expression:"distributionvalues[index]"}})],1),o("div",{staticClass:"col-2"})])})),"B"==e.questionmode?o("p",[o("strong",[e._v("Nota bene:")]),e._v(" dato che hai selezionato la modalità "),o("em",[e._v("Domande raggruppate")]),e._v(', questi parametri si riferiscono al numero di "macro-domande" che compariranno nei test. Per ciascuna "macro-domanda", potrai comunque selezionare un numero arbitrario di "mini-domande" da associarvi. ')]):e._e(),o("p",[e._v("Numero di domande per test: "+e._s(e.questionsPerTest))])],2):o("div",{staticClass:"setupfield"},[o("h3",[e._v(" Scegli il numero di domande che vuoi che compaiano in ogni test ")]),o("span",[e._v("Numero di domande per test")]),o("b-form-input",{staticClass:"category-input form-control-inline",class:{"form-error":e.questionspertestValue<1},attrs:{autocomplete:"off",size:"md",type:"number",placeholder:"1"},model:{value:e.questionspertestValue,callback:function(t){e.questionspertestValue=t},expression:"questionspertestValue"}}),"B"==e.questionmode?o("p",[o("strong",[e._v("Nota bene:")]),e._v(" dato che hai selezionato la modalità "),o("em",[e._v("Domande raggruppate")]),e._v(', questo parametro si riferisce al numero di "macro-domande" che compariranno nei test. Per ciascuna "macro-domanda", potrai comunque selezionare un numero arbitrario di "mini-domande" da associarvi. ')]):e._e()],1)])]):e._e()]),o("transition",{attrs:{name:"slide-fade"}},[5==e.currstep?o("div",{attrs:{id:"step1"}},[o("div",{staticClass:"setupfield"},[o("h3",[e._v("Ci siamo quasi!")]),o("p",[e._v(" Controlla che le impostazioni riportate qui sotto siano corrette. Se hai commesso un errore, puoi tornare indietro per correggerlo. ")]),o("div",{staticClass:"summary"},[o("div",[o("p",[o("strong",[e._v("Nome del corso:")]),e._v(" "+e._s(e.coursename))]),"A"==e.categorymode?o("p",[o("strong",[e._v("Categorie:")]),"B"==e.categorymode?o("span",[o("em",[e._v("nessuna")])]):e._e()]):e._e(),"A"==e.categorymode?o("ul",e._l(e.categories,(function(t){return o("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0):e._e(),"A"==e.distributionmode?o("p",[o("strong",[e._v("Ogni test conterrà:")])]):e._e(),"A"==e.distributionmode?o("ul",e._l(e.categories,(function(t,i){return o("li",{key:"distribution_summary_"+i},[o("strong",[e._v(e._s(e.distributionvalues[i]))]),e._v(" "+e._s(1==parseInt(e.distributionvalues[i])?"domanda":"domande")+" "+e._s(1==parseInt(e.distributionvalues[i])?"appartenente":"appartenenti")+" alla categoria "),o("strong",[e._v(e._s(t))])])})),0):e._e()]),"C"!=e.questionmode?o("div",[o("p",[e._v(" Ogni test sarà composto da "),o("strong",[e._v(e._s(e.questionsPerTest)+" "+e._s(1==e.questionsPerTest?"domanda":"domande"))])]),o("p",[e._v(" Punteggio minimo per la sufficienza: "),o("strong",[e._v(e._s(e.minpoints))]),e._v(" "+e._s(1==parseInt(e.minpoints)?"punto":"punti")+" ")]),o("p",[e._v(" Punteggio per risposte corrette: "),o("strong",[e._v(e._s(e.corrpoints))]),e._v(" "+e._s(1==Math.abs(parseInt(e.corrpoints))?"punto":"punti")+" ")]),o("p",[e._v(" Punteggio per risposte errate: "),o("strong",[e._v(e._s(e.incorrpoints))]),e._v(" "+e._s(1==Math.abs(parseInt(e.incorrpoints))?"punto":"punti")+" ")]),o("p",[e._v(" Punteggio per domande senza risposta: "),o("strong",[e._v(e._s(e.unanspoints))]),e._v(" "+e._s(1==Math.abs(parseInt(e.unanspoints))?"punto":"punti")+" ")])]):e._e()])])]):e._e()]),o("div",{staticClass:"buttons-grid"},[o("b-button",{staticStyle:{"margin-bottom":"10px"},attrs:{disabled:1==e.currstep,id:"goback-button",variant:"outline-primary"},on:{click:function(t){"C"==e.questionmode?e.currstep=1:e.currstep--}}},[e._v(" Step precedente ")]),o("b-button",{staticStyle:{"margin-bottom":"10px"},attrs:{id:"next-button",disabled:e.invalidData,variant:"outline-primary"},on:{click:function(t){5==e.currstep?e.sendCourseData():"C"==e.questionmode?e.currstep=5:e.currstep++}}},[e._v(e._s(5!=e.currstep?"Prossimo step":"Concludi"))])],1)],1),o("b-modal",{ref:"doneModal",attrs:{"no-close-on-backdrop":!0,"ok-only":!0,size:"xl",title:"Corso creato con successo!",id:"done-modal"},on:{hide:e.goToCourseCp}},[o("p",[e._v(" Il link al corso, che dovrai dare ai tuoi studenti per unirsi, è: "),o("a",{attrs:{href:"course/"+e.courseId}},[e._v(e._s("http://127.0.0.1/course/"+e.courseId))]),e._v(". ")]),o("p",[e._v(" Da adesso in poi, questo corso comparirà nella tua "),o("a",{attrs:{href:"/accounts/profile"}},[e._v("pagina del profilo")]),e._v(". ")]),o("div",{staticClass:"text-center"},[o("a",{attrs:{href:"/course_cp/"+e.courseId}},[o("b-button",{attrs:{variant:"success"}},[e._v("Accedi al pannello del corso")])],1)])])],1)},r=[],n=(o("45fc"),o("a9e3"),o("9129"),o("b85c")),u=o("bc3a"),c=o.n(u),l=o("ecee"),d=o("c074");l["c"].add(d["c"]);var p={name:"App",components:{},props:{questions:Array,postApiUrl:String},data:function(){return{success:!1,courseId:null,currstep:1,loading:!1,questionmode:null,minpoints:0,corrpoints:1,incorrpoints:-1,unanspoints:0,coursename:null,categorymode:null,distributionmode:"B",categories:[""],distributionvalues:[],questionspertestValue:1}},mounted:function(){c.a.defaults.xsrfCookieName="csrftoken",c.a.defaults.xsrfHeaderName="X-CSRFTOKEN"},computed:{questionsPerTest:function(){if("B"==this.categorymode||"B"==this.distributionmode)return this.questionspertestValue;var e=0;if(!this.distributionvalues.length)return e;var t,o=Object(n["a"])(this.distributionvalues);try{for(o.s();!(t=o.n()).done;){var i=t.value,a=Number.isNaN(parseInt(i))?0:parseInt(i);e+=a}}catch(s){o.e(s)}finally{o.f()}return e},invalidData:function(){return 1==this.currstep?null==this.coursename||!this.coursename.length:3==this.currstep?null==this.categorymode||"A"==this.categorymode&&this.categories.some((function(e){return!e.length})):4==this.currstep&&("A"==this.distributionmode&&(this.distributionvalues.some((function(e){return parseInt(e)<0||""==e}))||this.distributionvalues.length!=this.categories.length))}},methods:{constructDataObject:function(){var e={name:this.coursename,minimum_passing_score:this.minpoints,points_for_correct_answer:this.corrpoints,points_for_wrong_answer:this.incorrpoints,points_for_unanswered:this.unanspoints,categories:[],category_distribution_values:[],number_of_questions_per_test:this.questionsPerTest,uses_category_distribution:"A"==this.distributionmode};return"A"==this.categorymode&&(e["categories"]=this.categories),"A"==this.distributionmode&&(e["category_distribution_values"]=this.distributionvalues),e},sendCourseData:function(){var e=this,t=this.constructDataObject();console.log(t),c.a.post(this.postApiUrl,t).then((function(t){console.log(t),e.courseId=t.data.courseId,e.showConfirmation()})).catch((function(e){console.log(e)}))},showConfirmation:function(){this.$root.$emit("bv::show::modal","done-modal")},goToCourseCp:function(){window.location.href="course_cp/"+this.courseId}}},m=p,v=(o("2a54"),o("2877")),f=Object(v["a"])(m,s,r,!1,null,null,null),g=f.exports,_=o("5f5b"),b=o("ad3d");a.a.use(_["a"]),a.a.component("font-awesome-icon",b["a"]),a.a.config.productionTip=!1,new a.a({el:"#app",components:{"course-setup":g}})}});