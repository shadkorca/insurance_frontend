(function(t){function e(e){for(var i,n,l=e[0],o=e[1],c=e[2],u=0,f=[];u<l.length;u++)n=l[u],s[n]&&f.push(s[n][0]),s[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("87dc"),s=a.n(i);s.a},"0681":function(t,e,a){"use strict";var i=a("130c"),s=a.n(i);s.a},"0945":function(t,e,a){"use strict";var i=a("28f0"),s=a.n(i);s.a},"0a8b":function(t,e,a){},"130c":function(t,e,a){},2109:function(t,e,a){},2454:function(t,e,a){},"28f0":function(t,e,a){},"3a21":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),s=a("bb71");a("da64"),a("bf40");i["a"].use(s["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{staticStyle:{"background-color":"aqua"},attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[t._v("\n      Test Insurance\n    ")]),a("v-toolbar-items",{staticClass:"hidden-sm-and-down text-uppercase"},[a("v-btn",{staticClass:"font-weight-bold",attrs:{flat:"",to:"/"}},[t._v("Policies")]),a("v-btn",{staticClass:"font-weight-bold",attrs:{flat:"",to:"/risk_page"}},[t._v("Risk Types")])],1),a("v-spacer")],1),a("v-content",[a("router-view")],1),a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-actions",{staticClass:"justify-center",staticStyle:{"background-color":"#0080ff"}},[t._v("\n      ©2018 — "),a("strong",[t._v("Test Insurance")])])],1)],1)],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{staticClass:"justify-center",attrs:{xs6:"","offset-xs2":""}},[a("h2",{staticClass:"headline font-weight-bold"},[t._v("Risk Types")]),a("v-flex",{staticClass:"xs8 offset-xs2"},t._l(t.risks,function(e,i){return a("v-card",{key:e.id,staticClass:"my-4"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",[a("v-card-actions",{staticClass:"justify-center xs12"},[a("v-btn",{staticClass:"justify",staticStyle:{width:"70%"},attrs:{flat:""},on:{click:function(a){t.submitForm(e.id)}}},[t._v(t._s(e.name))]),a("v-spacer"),a("v-btn",{staticStyle:{width:"30px",height:"30px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.deleteRisk(e)}}},[a("v-icon",{attrs:{dark:""}},[t._v("remove")])],1)],1)],1)],1)],1)],1)}))],1)],1)],1)},o=[],c=a("2f62"),d={name:"risk_types",computed:Object(c["b"])(["risks"]),methods:{submitForm(t){this.$router.push({name:"risk_details",params:{id:t}})},deleteRisk(t){this.$store.dispatch("deleteRisk",t)}},mounted:function(){this.$store.dispatch("getRisks")}},u=d,f=(a("849e"),a("2877")),p=a("6544"),m=a.n(p),v=a("8336"),h=a("b0af"),_=a("99d9"),b=a("a523"),y=a("0e8f"),x=a("132d"),k=a("a722"),V=a("9910"),C=Object(f["a"])(u,l,o,!1,null,null,null);C.options.__file="RiskTypes.vue";var g=C.exports;m()(C,{VBtn:v["a"],VCard:h["a"],VCardActions:_["a"],VContainer:b["a"],VFlex:y["a"],VIcon:x["a"],VLayout:k["a"],VSpacer:V["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-start":"",wrap:"",top:"","mb-5":""}},[a("v-flex",{staticClass:"justify-start",attrs:{xs4:"","offset-xs2":""}},[a("h2",{staticClass:"headline font-weight-bold"},[t._v("Add new risk type")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"add new type risk",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-btn",{on:{click:t.submitForm}},[t._v("Add type")])],1)],1)],1)},w=[],j={name:"add_risk_type",data:()=>({name:"",nameRules:[t=>!!t||"Name is required"],info:null,posts:null}),methods:{clearForm(){this.$refs.form.reset()},submitForm(t){this.$refs.form.validate()&&(this.$store.dispatch("createRisk",{name:this.name}),this.clearForm(),t.preventDefault())}}},R=j,$=(a("d353"),a("4bd4")),P=a("2677"),O=Object(f["a"])(R,F,w,!1,null,null,null);O.options.__file="AddRiskType.vue";var S=O.exports;m()(O,{VBtn:v["a"],VContainer:b["a"],VFlex:y["a"],VForm:$["a"],VLayout:k["a"],VTextField:P["a"]});var A={name:"App",components:{RiskTypes:g,AddRiskType:S},data(){return{}}},T=A,E=(a("034f"),a("7496")),L=a("549c"),I=a("553a"),D=a("71d9"),q=a("2a7f"),M=Object(f["a"])(T,r,n,!1,null,null,null);M.options.__file="App.vue";var B=M.exports;m()(M,{VApp:E["a"],VBtn:v["a"],VCard:h["a"],VCardActions:_["a"],VContent:L["a"],VFooter:I["a"],VSpacer:V["a"],VToolbar:D["a"],VToolbarItems:q["a"],VToolbarTitle:q["b"]});var N=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-layout",[a("v-flex",{attrs:{column:""}},[a("risk_types")],1),a("v-flex",{attrs:{column:""}},[a("add_risk_type")],1)],1)],1)],1)},K=[],J={name:"risk_page",components:{risk_types:g,add_risk_type:S}},Y=J,U=(a("0681"),Object(f["a"])(Y,z,K,!1,null,null,null));U.options.__file="RiskPage.vue";var G=U.exports;m()(U,{VApp:E["a"],VContent:L["a"],VFlex:y["a"],VLayout:k["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-layout",[a("v-flex",{attrs:{column:""}},[a("PolicyList")],1),a("v-flex",{attrs:{column:""}},[a("AddPolicy")],1)],1)],1)],1)},Q=[],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{staticClass:"justify-center",attrs:{xs6:"","offset-xs2":""}},[a("h2",{staticClass:"headline font-weight-bold"},[t._v("Policies List")]),a("v-flex",{staticClass:"xs8 offset-xs2"},t._l(t.policies,function(e,i){return a("v-card",{key:e.id,staticClass:"my-4"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",[a("v-card-actions",{staticClass:"justify-center xs12"},[a("v-btn",{staticClass:"justify",staticStyle:{width:"70%"},attrs:{flat:""},on:{click:function(a){t.submitForm(e.risk_type_id)}}},[t._v(t._s(e.name))]),a("v-spacer"),a("v-btn",{staticStyle:{width:"30px",height:"30px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.deletePolicy(e)}}},[a("v-icon",{attrs:{flat:"",dark:""}},[t._v("remove")])],1)],1)],1)],1)],1)],1)}))],1)],1)],1)},X=[],Z={computed:Object(c["b"])(["policies"]),mounted:function(){this.$store.dispatch("getPolicies")},methods:{submitForm(t){this.$router.push({name:"policy_details",params:{id:t}})},deletePolicy(t){this.$store.dispatch("deletePolicy",t)}}},tt=Z,et=(a("cc9f"),Object(f["a"])(tt,W,X,!1,null,null,null));et.options.__file="PolicyList.vue";var at=et.exports;m()(et,{VBtn:v["a"],VCard:h["a"],VCardActions:_["a"],VContainer:b["a"],VFlex:y["a"],VIcon:x["a"],VLayout:k["a"],VSpacer:V["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-start":"",wrap:"",top:"","mb-5":""}},[a("v-flex",{staticClass:"justify-start",attrs:{xs4:"","offset-xs2":""}},[a("h2",{staticClass:"headline font-weight-bold"},[t._v("Add new policy")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-autocomplete",{attrs:{items:t.risks,"item-text":"name",label:"Choose field type",required:""},model:{value:t.current_risk,callback:function(e){t.current_risk=e},expression:"current_risk"}})],1),a("v-btn",{on:{click:t.submitForm}},[t._v("Add policy")])],1)],1)],1)},st=[],rt={computed:Object(c["b"])(["risks"]),data:()=>({name:"",nameRules:[t=>!!t||"Name is required"],current_risk:""}),methods:{submitForm(){if(this.$refs.form.validate()){let t;this.risks.forEach(e=>{e["name"]===this.current_risk&&(t=e["id"])}),this.$store.dispatch("createPolicy",{risk_type_id:t})}}},mounted:function(){this.$store.dispatch("getRisks")}},nt=rt,lt=(a("6692"),a("c6a6")),ot=Object(f["a"])(nt,it,st,!1,null,null,null);ot.options.__file="AddPolicy.vue";var ct=ot.exports;m()(ot,{VAutocomplete:lt["a"],VBtn:v["a"],VContainer:b["a"],VFlex:y["a"],VForm:$["a"],VLayout:k["a"]});var dt={name:"policies",components:{PolicyList:at,AddPolicy:ct},data(){return{}}},ut=dt,ft=(a("9b25"),Object(f["a"])(ut,H,Q,!1,null,null,null));ft.options.__file="PolicyPage.vue";var pt=ft.exports;m()(ft,{VApp:E["a"],VContent:L["a"],VFlex:y["a"],VLayout:k["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-layout",[a("v-flex",{attrs:{column:""}},[a("RiskFields",{attrs:{id:t.id}})],1),a("v-flex",{attrs:{column:""}},[a("AddField",{attrs:{id:t.id}})],1)],1)],1)],1)},vt=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{staticClass:"justify-center",attrs:{xs8:"","offset-xs2":""}},[a("h2",{staticClass:"headline font-weight-bold"},[t._v("Risk Type Fields")]),a("v-flex",{staticClass:"xs8 offset-xs2"},[a("form",{ref:"form",staticClass:"my-2"},t._l(t.fields,function(e){return a("v-layout",{key:e.id,attrs:{row:"",wrap:""}},[1==e.field_type_id&&0==e.enumerate?[a("v-text-field",{attrs:{label:e.field_name,"data-vv-name":e.field_name,type:"number",required:""}}),a("v-btn",{staticStyle:{width:"30px",height:"30px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.deleteRisk(e.id)}}},[a("v-icon",{attrs:{dark:""}},[t._v("close")])],1)]:2==e.field_type_id&&0==e.enumerate?[a("v-text-field",{attrs:{label:e.field_name,"data-vv-name":e.field_name,required:""}}),a("v-btn",{staticStyle:{width:"30px",height:"30px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.deleteRisk(e.id)}}},[a("v-icon",{attrs:{dark:""}},[t._v("close")])],1)]:3==e.field_type_id&&0==e.enumerate?[a("v-checkbox",{attrs:{label:e.field_name}}),a("v-btn",{staticStyle:{width:"30px",height:"30px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.deleteRisk(e.id)}}},[a("v-icon",{attrs:{dark:""}},[t._v("close")])],1)]:4==e.field_type_id&&0==e.enumerate?[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"200px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{slot:"activator",label:e.field_name,"append-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("v-date-picker",{on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("v-spacer"),a("v-btn",{staticStyle:{width:"30px",height:"30px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.deleteRisk(e.id)}}},[a("v-icon",{attrs:{dark:""}},[t._v("close")])],1)]:1==e.enumerate?[a("v-autocomplete",{attrs:{items:t.variants[e.id],label:e.field_name,"data-vv-name":e.field_name,required:""}}),a("v-btn",{staticStyle:{width:"30px",height:"30px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.deleteRisk(e.id)}}},[a("v-icon",{attrs:{dark:""}},[t._v("close")])],1)]:t._e()],2)}))])],1)],1)],1)},_t=[],bt={props:["id"],computed:Object(c["b"])(["fields"]),mounted:function(){this.$store.dispatch("getFields",this.id)},updated(){Object(c["b"])(["fields"]);for(const[t,e]of Object.entries(this.fields))!0===e["enumerate"]&&(this.variants[e["id"]]=e["enum_text"].split(this.join_str))},data:()=>({date:(new Date).toISOString().substr(0,10),menu:!1,risks:null,field_type:{1:"Number",2:"Text",3:"Checkbox",4:"Date"},variants:{},join_str:"#$"}),methods:{deleteRisk(t){this.$store.dispatch("deleteField",[this.id,t])}}},yt=bt,xt=(a("8c37"),a("ac7c")),kt=a("2e4b"),Vt=a("e449"),Ct=Object(f["a"])(yt,ht,_t,!1,null,null,null);Ct.options.__file="RiskFields.vue";var gt=Ct.exports;m()(Ct,{VAutocomplete:lt["a"],VBtn:v["a"],VCheckbox:xt["a"],VContainer:b["a"],VDatePicker:kt["a"],VFlex:y["a"],VIcon:x["a"],VLayout:k["a"],VMenu:Vt["a"],VSpacer:V["a"],VTextField:P["a"]});var Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-start":"",wrap:"",top:"","mb-5":"","align-start":"","justify-start":""}},[a("v-flex",{staticClass:"justify-start",attrs:{xs4:"","offset-xs2":""}},[a("h2",{staticClass:"headline font-weight-bold"},[t._v("Add new field")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"add field name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-autocomplete",{attrs:{items:t.f_types,label:"Choose field type",required:""},model:{value:t.current_type,callback:function(e){t.current_type=e},expression:"current_type"}}),a("v-checkbox",{attrs:{label:"is_enumerated"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),1==t.checkbox?[a("v-autocomplete",{attrs:{items:t.enum_variant,label:"Add text and press Enter",required:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addValue(e):null}},model:{value:t.current_var,callback:function(e){t.current_var=e},expression:"current_var"}})]:t._e()],2),a("v-btn",{on:{click:t.submitForm}},[t._v("Add field")])],1)],1)],1)},wt=[],jt={props:["id"],data:()=>({name:"",nameRules:[t=>!!t||"Name is required"],info:null,posts:null,current_type:"",f_types:["Number","Text","Checkbox","Date"],field_types:{Number:"1",Text:"2",Checkbox:"3",Date:"4"},current_var:"",enum_variant:[],join_str:"#$",checkbox:!1}),methods:{addValue:function(t){this.enum_variant.push(t.target.value)},clearForm(){this.$refs.form.reset()},submitForm(){this.$refs.form.validate()&&(this.$store.dispatch("createField",[{id:this.id},{field_name:this.name,enumerate:this.checkbox,enum_text:this.enum_variant.join(this.join_str),risk_type_id:parseInt(this.id),field_type_id:this.field_types[this.current_type]}]),this.clearForm())}}},Rt=jt,$t=(a("0945"),Object(f["a"])(Rt,Ft,wt,!1,null,null,null));$t.options.__file="AddField.vue";var Pt=$t.exports;m()($t,{VAutocomplete:lt["a"],VBtn:v["a"],VCheckbox:xt["a"],VContainer:b["a"],VFlex:y["a"],VForm:$["a"],VLayout:k["a"],VTextField:P["a"]});var Ot={props:["id"],name:"risk_details",components:{RiskFields:gt,AddField:Pt},data(){return{}}},St=Ot,At=(a("bd7c"),Object(f["a"])(St,mt,vt,!1,null,null,null));At.options.__file="RiskDetailsPage.vue";var Tt=At.exports;m()(At,{VApp:E["a"],VContent:L["a"],VFlex:y["a"],VLayout:k["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-content",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{staticClass:"justify-center",attrs:{xs4:"","offset-xs2-right":""}},[a("h2",{staticClass:"headline font-weight-bold"},[t._v("Policy Fields")]),a("v-flex",{staticClass:"xs8 offset-xs2"},[a("form",{ref:"form",staticClass:"my-2"},t._l(t.fields,function(e){return a("v-layout",{key:e.id,attrs:{row:"",wrap:""}},[1==e.field_type_id&&0==e.enumerate?[a("v-text-field",{attrs:{label:e.field_name,"data-vv-name":e.field_name,type:"number",required:""}})]:2==e.field_type_id&&0==e.enumerate?[a("v-text-field",{attrs:{label:e.field_name,"data-vv-name":e.field_name,required:""}})]:3==e.field_type_id&&0==e.enumerate?[a("v-checkbox",{attrs:{label:e.field_name}})]:4==e.field_type_id&&0==e.enumerate?[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"200px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{slot:"activator",label:e.field_name,"append-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("v-date-picker",{on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("v-spacer")]:1==e.enumerate?[a("v-autocomplete",{attrs:{items:t.variants[e.id],label:e.field_name,"data-vv-name":e.field_name,required:""}})]:t._e()],2)}))])],1)],1)],1)],1)},Lt=[],It={props:["id"],computed:Object(c["b"])(["fields"]),mounted:function(){this.$store.dispatch("getFields",this.id)},updated(){Object(c["b"])(["fields"]);for(const[t,e]of Object.entries(this.fields))!0===e["enumerate"]&&(this.variants[e["id"]]=e["enum_text"].split(this.join_str))},data:()=>({date:(new Date).toISOString().substr(0,10),menu:!1,risks:null,field_type:{1:"Number",2:"Text",3:"Checkbox",4:"Date"},variants:{},join_str:"#$"}),methods:{deleteRisk(t){this.$store.dispatch("deleteField",[this.id,t])}}},Dt=It,qt=(a("611e"),Object(f["a"])(Dt,Et,Lt,!1,null,null,null));qt.options.__file="PolicyFields.vue";var Mt=qt.exports;m()(qt,{VAutocomplete:lt["a"],VCheckbox:xt["a"],VContainer:b["a"],VContent:L["a"],VDatePicker:kt["a"],VFlex:y["a"],VLayout:k["a"],VMenu:Vt["a"],VSpacer:V["a"],VTextField:P["a"]}),i["a"].use(N["a"]);var Bt=new N["a"]({name:"router",routes:[{path:"/",name:"policies",component:pt},{path:"/risk_page",name:"risk_page",component:G},{path:"/risk_page/:id",name:"risk_details",component:Tt,props:!0},{path:"/policy_details/:id",name:"policy_details",component:Mt,props:!0}]}),Nt=a("bc3a"),zt=a.n(Nt);const Kt=zt.a.create({baseURL:"https://insurance-the-api-of-risks.herokuapp.com/api/"}),Jt={create(t){return Kt.post("/risks/",t).then(t=>{return t.data})},delete(t){return Kt.delete(`/risks/${t.id}/`)},list(){return Kt.get("/risks/").then(t=>{return t.data})}},Yt={listPolicies(){return Kt.get("/policies/").then(t=>{return t.data})},createPolicy(t){return Kt.post("/policies/",t).then(t=>{return t.data})},deletePolicy(t){return Kt.delete(`/policies/${t.id}/`)}},Ut={listFields(t){return Kt.get(`/risks/fields/${t}/`).then(t=>{return t.data})},addField(t,e){return Kt.post(`/risks/fields/${t}/`,e).then(t=>{return t.data})},delField(t,e){return Kt.delete(`/risks/fields/${t}/${e}`)}},Gt="ADD_RISK",Ht="REMOVE_RISK",Qt="LIST_RISKS",Wt="ADD_POLICY",Xt="REMOVE_POLICY",Zt="LIST_POLICIES",te="ADD_FIELD",ee="REMOVE_FIELD",ae="LIST_FIELDS";i["a"].use(c["a"]);const ie={risks:[],policies:[],fields:[]},se={risks(t){return t.risks},policies(t){return t.policies},fields(t){return t.fields}},re={[Gt](t,e){t.risks.push(e)},[Ht](t,e){t.risks=t.risks.filter(t=>{return t.id!==e.id})},[Qt](t,{risks:e}){t.risks=e},[Wt](t,e){t.policies.push(e)},[Xt](t,e){t.policies=t.policies.filter(t=>{return t.id!==e.id})},[Zt](t,{policies:e}){t.policies=e},[te](t,e){t.fields.push(e)},[ee](t,e){t.fields=t.fields.filter(t=>{return t.id!==e})},[ae](t,{fields:e}){t.fields=e}},ne={createRisk({commit:t},e){Jt.create(e).then(e=>{t(Gt,e)})},deleteRisk({commit:t},e){Jt.delete(e).then(()=>{t(Ht,e)})},getRisks({commit:t}){Jt.list().then(e=>{t(Qt,{risks:e})})},createPolicy({commit:t},e){Yt.createPolicy(e).then(e=>{t(Wt,e)})},deletePolicy({commit:t},e){Yt.deletePolicy(e).then(()=>{t(Xt,e)})},getPolicies({commit:t}){Yt.listPolicies().then(e=>{t(Zt,{policies:e})})},createField({commit:t},e){let a=e[0]["id"],i=e[1];Ut.addField(a,i).then(e=>{t(te,e)})},deleteField({commit:t},e){let a=e[0],i=e[1];Ut.delField(a,i).then(()=>{t(ee,i)})},getFields({commit:t},e){Ut.listFields(e).then(e=>{t(ae,{fields:e})})}};var le=new c["a"].Store({state:ie,getters:se,actions:ne,mutations:re});i["a"].config.productionTip=!1,new i["a"]({render:t=>t(B),router:Bt,store:le}).$mount("#app")},"611e":function(t,e,a){"use strict";var i=a("0a8b"),s=a.n(i);s.a},6692:function(t,e,a){"use strict";var i=a("2109"),s=a.n(i);s.a},"849e":function(t,e,a){"use strict";var i=a("3a21"),s=a.n(i);s.a},"87dc":function(t,e,a){},"8c37":function(t,e,a){"use strict";var i=a("b41d"),s=a.n(i);s.a},"9b25":function(t,e,a){"use strict";var i=a("ee02"),s=a.n(i);s.a},b41d:function(t,e,a){},b4e2:function(t,e,a){},bd7c:function(t,e,a){"use strict";var i=a("f9ca"),s=a.n(i);s.a},cc9f:function(t,e,a){"use strict";var i=a("2454"),s=a.n(i);s.a},d353:function(t,e,a){"use strict";var i=a("b4e2"),s=a.n(i);s.a},ee02:function(t,e,a){},f9ca:function(t,e,a){}});
//# sourceMappingURL=app.b559bf63.js.map