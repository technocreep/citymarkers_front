(function(t){function e(e){for(var o,n,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={app:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),r=a.n(o);r.a},"3d22":function(t,e,a){"use strict";var o=a("9b99"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o,r=a("a026"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"buttons"},[a("input",{staticStyle:{"background-color":"red",color:"white"},attrs:{type:"button",value:"TEST BUTTON"},on:{click:t.getMa}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedType,expression:"selectedType"}],staticClass:"button",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"graffity"}},[t._v("ГРАФФИТИ")]),a("option",{attrs:{value:"streetart"}},[t._v("СТРИТ-АРТ")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStatus,expression:"selectedStatus"}],staticClass:"button",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedStatus=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"onspot"}},[t._v("НА УЛИЦЕ")]),a("option",{attrs:{value:"buff"}},[t._v("БАФФ")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedAuthor,expression:"selectedAuthor"}],staticClass:"button",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedAuthor=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"all"}},[t._v("ВСЕ ХУДОЖНИКИ")]),t._l(t.uniqueAuthors,(function(e,o){return a("option",{key:o,domProps:{value:e}},[t._v(t._s(e))])}))],2),a("input",{staticClass:"button",attrs:{type:"button",value:"ИНФО"}})]),a("div",{staticClass:"union"},[a("div",{staticClass:"cards"},[t.loading?a("loader"):t.filteredMarks.length?a("marks-list",{attrs:{filteredMarks:t.filteredMarks},on:{"locate-on":t.getCoord}}):a("p",{staticClass:"condition"},[t._v("ТУТ ДОЛЖНЫ БЫЛИ БЫТЬ ФОТКИ :(")])],1),a("div",{staticClass:"map"},[t.loading?a("loader"):t.filteredMarks.length?a("yandex-maps",{attrs:{filteredMarks:t.filteredMarks,selectedMarkCoords:t.selectedMarkCoords}}):a("p",{staticClass:"condition"},[t._v("ТУТ ДОЛЖНА БЫЛА БЫТЬ КАРТА :(")])],1)])])},n=[],i=(a("4de4"),a("c975"),a("ac1f"),a("466d"),a("3835")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mymap"},[a("yandex-map",{attrs:{id:"map",settings:t.settings,coords:t.coords,zoom:"12",controls:["zoomControl","geolocationControl"],behaviors:["drag","scrollZoom","dblClickZoom"],initWithoutMarkers:t.without}},t._l(t.filteredMarks,(function(e){return a("div",{key:e.id},[a("ymap-marker",{attrs:{markerId:"mark.id","marker-type":"Placemark",coords:[e.latti,e.longi],icon:t.customIcon,"balloon-template":t.balloonTemplate(e)}})],1)})),0)],1)},c=[],u=(a("99af"),a("b0c0"),a("f5ce")),d={name:"yandex-maps",props:{filteredMarks:{type:Array},selectedMarkCoords:{type:Array}},methods:{balloonTemplate:function(t){return"\n      <h3>".concat(t.name,'</h3>\n      <img class="balloonImage" src=').concat(t.photo,">\n      <p>Author: ").concat(t.author,"</p>\n      <p>").concat(t.addrdate,"</p>\n      ")}},components:{yandexMap:u["a"],ymapMarker:u["b"]},computed:{coords:function(){return this.selectedMarkCoords}},data:function(){return{settings:{apiKey:"330241da-79b7-4aa0-bb0a-ff03f342c936",lang:"ru_RU",coordorder:"latlong",version:"2.1.76",mapType:"map"},without:!0,customIcon:{layout:"default#imageWithContent",imageHref:"myIcon.gif",imageSize:[35,45],imageOffset:[0,0]}}}},p=d,m=(a("c3f0"),a("2877")),f=Object(m["a"])(p,l,c,!1,null,null,null),v=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cards"}},t._l(t.filteredMarks,(function(e,o){return a("div",{key:o,staticClass:"polaroid item",on:{click:function(a){return t.locateOn(e.latti,e.longi)}}},[a("a",{attrs:{"data-fancybox":"images",href:e.photo}},[a("img",{attrs:{src:e.photo}})]),a("div",{staticClass:"caption"},[a("div",[a("span",[t._v(" "+t._s(e.name)+" "),a("strong",[t._v("by")]),t._v(" "+t._s(e.author)+" ")])])])])})),0)},g=[],y={name:"mark-list",methods:{locateOn:function(t,e){this.$emit("locate-on",[t,e])}},props:{filteredMarks:{type:Array,required:!0}}},b=y,C=(a("3d22"),Object(m["a"])(b,h,g,!1,null,null,null)),k=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form-horizontal",attrs:{action:"/api/",method:"POST"},on:{submit:t.submitForm}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"name"}},[t._v("NAME")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"latti"}},[t._v("LATTI")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.latti,expression:"latti"}],staticClass:"form-control",attrs:{type:"text",id:"latti"},domProps:{value:t.latti},on:{input:function(e){e.target.composing||(t.latti=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"longi"}},[t._v("LONGI")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.longi,expression:"longi"}],staticClass:"form-control",attrs:{type:"text",id:"longi"},domProps:{value:t.longi},on:{input:function(e){e.target.composing||(t.longi=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"author"}},[t._v("AUTHOR")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"form-control",attrs:{type:"text",id:"author"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"addrdate"}},[t._v("ADDRDATE")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.addrdate,expression:"addrdate"}],staticClass:"form-control",attrs:{type:"text",id:"addrdate"},domProps:{value:t.addrdate},on:{input:function(e){e.target.composing||(t.addrdate=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"photo"}},[t._v("URL photo")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.photo,expression:"photo"}],staticClass:"form-control",attrs:{type:"text",id:"photo"},domProps:{value:t.photo},on:{input:function(e){e.target.composing||(t.photo=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"typeof"}},[t._v("TYPE OF WORK")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",attrs:{type:"text",id:"typeof"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"status"}},[t._v("STATUS")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",attrs:{type:"text",id:"status"},domProps:{value:t.status},on:{input:function(e){e.target.composing||(t.status=e.target.value)}}})])]),t._m(0)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-offset-2 col-sm-10"},[a("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Добавить метку")])])])}],x={name:"create-mark",data:function(){return{name:"",latti:"",longi:"",author:"",addrdate:"",photo:"",type:"",status:""}},methods:{submitForm:function(t){this.createMark(),this.name="",this.latti="",this.longi="",this.author="",this.addrdate="",this.photo="",this.type="",this.status="",t.preventDefault()},createMark:function(){this.$store.dispatch("createMark",{name:this.name,latti:this.latti,longi:this.longi,author:this.author,addrdate:this.addrdate,photo:this.photo,typeof:this.type,status:this.status})}}},O=x,T=(a("6982"),Object(m["a"])(O,_,M,!1,null,null,null)),w=T.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-dual-ring"})},S=[],P=(a("74ae"),{}),j=Object(m["a"])(P,A,S,!1,null,null,null),N=j.exports,E={name:"App",components:{"yandex-maps":v,"marks-list":k,"create-mark":w,loader:N},data:function(){return{selectedType:"streetart",selectedStatus:"onspot",selectedAuthor:"all",selectedMarkCoords:[59.93877935,30.3091297],loading:!0}},beforeMount:function(){var t=this;setTimeout((function(){t.$store.dispatch("getMarks"),t.loading=!1}),500)},computed:{filteredMarks:function(){return this.initMarks.filter(this.filterMark)},initMarks:function(){return this.$store.state.marks},uniqueAuthors:function(){for(var t=this.initMarks.filter(this.filterByTypeStatus),e=[],a=0;a<t.length;a++)-1===e.indexOf(t[a].author)&&e.push(t[a].author.toUpperCase());return e}},methods:{getMa:function(){console.log(this.filteredByTypeStatus)},filterMark:function(t){return"all"===this.selectedAuthor?t.typeof.match(this.selectedType)&&t.status.match(this.selectedStatus):t.author.toUpperCase().match(this.selectedAuthor)&&t.typeof.match(this.selectedType)&&t.status.match(this.selectedStatus)},filterByTypeStatus:function(t){return t.status.match(this.selectedStatus)&&t.typeof.match(this.selectedType)},getCoord:function(t){var e=Object(i["a"])(t,2),a=e[0],o=e[1];this.selectedMarkCoords=[a,o]}}},$=E,R=(a("034f"),Object(m["a"])($,s,n,!1,null,null,null)),U=R.exports,I=a("ade3"),D=a("2909"),z=a("2f62"),B=a("bc3a"),K=a.n(B),L=K.a.create({baseURL:"https://vadimpotemkin.pythonanywhere.com/api"}),q={create:function(t){return L.post("/",t).then((function(t){return t.data}))},list:function(){return L.get("").then((function(t){return t.data}))}},F="SET_MARKS",W="ADD_MARK";r["a"].use(z["a"]);var H={marks:[]},J={marks:function(t){return t.marks}},Z=(o={},Object(I["a"])(o,F,(function(t,e){var a=e.marks;t.marks=a})),Object(I["a"])(o,W,(function(t,e){t.marks=[e].concat(Object(D["a"])(t.marks))})),o),G={getMarks:function(t){var e=t.commit;q.list().then((function(t){e(F,{marks:t})}))},createMark:function(t,e){var a=t.commit;q.create(e).then((function(t){a(W,t)}))}},Y=new z["a"].Store({state:H,getters:J,actions:G,mutations:Z});r["a"].config.productionTip=!1,new r["a"]({el:"#app",store:Y,components:{App:U},template:"<App/>"})},"63dc":function(t,e,a){},6982:function(t,e,a){"use strict";var o=a("fb5c"),r=a.n(o);r.a},"74ae":function(t,e,a){"use strict";var o=a("b4ad"),r=a.n(o);r.a},"85ec":function(t,e,a){},"9b99":function(t,e,a){},b4ad:function(t,e,a){},c3f0:function(t,e,a){"use strict";var o=a("63dc"),r=a.n(o);r.a},fb5c:function(t,e,a){}});
//# sourceMappingURL=app.dc19c881.js.map