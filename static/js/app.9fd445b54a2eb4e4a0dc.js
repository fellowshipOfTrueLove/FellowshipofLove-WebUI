webpackJsonp([1],{"5GXd":function(t,e){},IHtZ:function(t,e){},JknA:function(t,e){},"L/RX":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("fZjL"),n=i.n(a),s=i("7+uW"),r={name:"app",data:function(){return{transitionName:"slide-left"}},methods:{appMode:function(){return null===window.location.search.match("mode=app")}},watch:{$route:function(t,e){var i=t.meta.index,a=e.meta.index;this.transitionName=i<a?"slide-right":"slide-left"}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.appMode()?e("main-nav"):this._e(),this._v(" "),e("main",{class:{app:!this.appMode()}},[e("transition",{attrs:{name:this.transitionName}},[e("keep-alive",[e("router-view",{staticClass:"child-view"})],1)],1)],1),this._v(" "),e("main-footer",{class:this.$route.name})],1)},staticRenderFns:[]};var o=i("VU/8")(r,c,!1,function(t){i("gdX+")},null,null).exports,l=i("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"main"},[i("section",{staticClass:"container"},[i("h1",[t._v("[照片輪播]")])]),t._v(" "),i("section",{staticClass:"brand"},[i("div",{staticClass:"brand-image"}),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("h2",[t._v("ABOUT")]),t._v(" "),i("h3",[t._v("真愛團契")])])])]),t._v(" "),i("section",{staticClass:"brand color"},[i("div",{staticClass:"brand-image"}),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("h2",[t._v("聚會內容")]),t._v(" "),i("h3",[t._v("小組查經")])])])]),t._v(" "),i("section",{staticClass:"brand"},[i("div",{staticClass:"brand-image"}),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("h2",[t._v("聚會內容")]),t._v(" "),i("h3",[t._v("生活專題")])])])]),t._v(" "),i("section",{staticClass:"brand color"},[i("div",{staticClass:"brand-image"}),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("h2",[t._v("聚會內容")]),t._v(" "),i("h3",[t._v("聖經綜覽")])])])]),t._v(" "),i("section",{staticClass:"brand"},[i("div",{staticClass:"brand-image"}),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("h2",[t._v("聚會內容")]),t._v(" "),i("h3",[t._v("信仰專題")])])])])])}]};var v=i("VU/8")({name:"Main"},d,!1,function(t){i("QlgS")},"data-v-8b9c153a",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("section",[e("commingSoon",[e("center",[e("h1",[this._v(" [Coming Soon] ")])])],1)],1)])},staticRenderFns:[]};var h=i("VU/8")({name:"Calendar",props:{},data:function(){return{Calendar:[{uid:0,date:{month:7,day:7},worshipLeader:"以誠",worshipPianist:"詩吟姐",worshipGroup:"核心同工",topic:"迎新送舊",introduction:"簡介",type:"其他"}]}}},u,!1,function(t){i("L/RX")},"data-v-56a78f5e",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"all"},[e("section",[e("commingSoon",[e("center",[e("h1",[this._v(" [Coming Soon] ")])])],1)],1)])},staticRenderFns:[]};var p=i("VU/8")({name:"SongBook",data:function(){return{}},methods:{},watch:{}},m,!1,function(t){i("JknA")},"data-v-48b33ff3",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("time-line")],1)},staticRenderFns:[]};var f=i("VU/8")({name:"BibleBus",data:function(){return{}}},_,!1,function(t){i("s0bd")},"data-v-3cacce60",null).exports,C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("section",[e("commingSoon",[e("center",[e("h1",[this._v(" [Coming Soon] ")])])],1)],1)])},staticRenderFns:[]};var g=i("VU/8")({name:"Wishingwell"},C,!1,function(t){i("QWwo")},"data-v-0b4c7df9",null).exports;s.a.use(l.a);var b=new l.a({routes:[{path:"/",name:"Main",component:v,meta:{index:0}},{path:"/calendar",name:"Calendar",component:h,meta:{index:1}},{path:"/songbook",name:"SongBook",component:p,meta:{index:2}},{path:"/biblebus",name:"BibleBus",component:f,meta:{index:3}},{path:"/wishingwell",name:"WishingWell",component:g,meta:{index:4}}],scrollBehavior:function(t,e,i){return!1===e.meta.page||!1===t.meta.page?i:{x:0,y:0}}}),w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"Navbar"},[i("nav",{class:{open:t.toggle}},[i("div",{staticClass:"container"},[i("div",{staticClass:"nav-side-btn",on:{click:function(e){t.toggle=!t.toggle}}}),t._v(" "),i("div",{staticClass:"nav-left"},[i("router-link",{staticClass:"item",class:{active:"Main"==t.$route.name},attrs:{to:"/"},nativeOn:{click:function(e){t.toggle=!t.toggle}}},[i("div",[t._v("首頁"),i("p",[t._v("HOME")])])]),t._v(" "),i("router-link",{staticClass:"item divider",class:{active:"Calendar"==t.$route.name},attrs:{to:"/calendar"},nativeOn:{click:function(e){t.toggle=!t.toggle}}},[i("div",[t._v("聚會行事曆"),i("p",[t._v("CALENDAR")])])]),t._v(" "),i("router-link",{staticClass:"item divider",class:{active:"SongBook"==t.$route.name},attrs:{to:"/songbook"},nativeOn:{click:function(e){t.toggle=!t.toggle}}},[i("div",[t._v("詩歌資料庫"),i("p",[t._v("SONG BOOK")])])]),t._v(" "),i("router-link",{staticClass:"item divider",class:{active:"BibleBus"==t.$route.name},attrs:{to:"/biblebus"},nativeOn:{click:function(e){t.toggle=!t.toggle}}},[i("div",[t._v("經文列車"),i("p",[t._v("BIBLE BUS")])])]),t._v(" "),i("router-link",{staticClass:"item divider",class:{active:"WishingWell"==t.$route.name},attrs:{to:"/wishingwell"},nativeOn:{click:function(e){t.toggle=!t.toggle}}},[i("div",[t._v("開坑專區"),i("p",[t._v("WISHING WELL")])])])],1)]),t._v(" "),i("div",{staticClass:"side-blur"})])])},staticRenderFns:[]};var x=i("VU/8")({name:"Navbar",data:function(){return{toggle:!1}}},w,!1,function(t){i("IHtZ")},"data-v-29775f69",null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"Footer"},[e("div",[e("p",[this._v("© 真愛團契 | Fellowship of Love")])])])}]};var k=i("VU/8")({name:"Footer"},S,!1,function(t){i("5GXd")},"data-v-7f9eaec8",null).exports,M={name:"TimeLine",data:function(){return{timelines:[{year:2018,items:[{id:10,hide:!0,chapter:"約翰福音 3:16",author:"Micheal",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"}]},{year:2017,items:[{id:9,hide:!0,chapter:"約翰福音 3:16",author:"SamuelYeh",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"}]},{year:2016,items:[{id:8,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"},{id:7,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"},{id:6,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"},{id:5,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"},{id:4,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"},{id:3,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"},{id:2,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"},{id:1,hide:!0,chapter:"約翰福音 3:16",author:"test",created:"24. Sep",context:"神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",review:"<p>aaa</p>"}]}]}},methods:{clk:function(t){t.hide=!t.hide},getMore:function(){console.log("get")}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"header"}),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"inner"},[t._l(t.timelines,function(e){return i("div",{key:e.year,staticClass:"year"},[i("h3",[t._v(t._s(e.year))]),t._v(" "),i("ul",{staticClass:"timeline"},t._l(e.items,function(e){return i("li",{key:e.id,staticClass:"timeline-item"},[i("div",{staticClass:"timeline-badge",on:{click:function(i){t.clk(e)}}},[i("comment-icon",{staticClass:"icon",attrs:{title:""}})],1),t._v(" "),i("div",{staticClass:"timeline-panel"},[i("div",{staticClass:"timeline-heading"},[i("h4",{staticClass:"timeline-title"},[t._v(t._s(e.chapter))]),t._v(" "),i("div",{staticClass:"timeline-panel-controls"},[i("div",{staticClass:"timestamp"},[i("small",{staticClass:"text-muted"},[t._v(t._s(e.created))])])])]),t._v(" "),i("div",{staticClass:"timeline-body"},[t._v(t._s(e.author))]),t._v(" "),e.hide?t._e():i("div",{staticClass:"timeline-context"},[i("span",{domProps:{innerHTML:t._s(e.context)}})]),t._v(" "),e.hide?t._e():i("div",{staticClass:"timeline-review"},[t._v("心得："),i("span",{domProps:{innerHTML:t._s(e.review)}})])])])}))])}),t._v(" "),i("div",[i("ul",{staticClass:"timeline"},[i("li",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-badge white non-board",on:{click:function(e){t.getMore()}}},[i("dot-icon",{staticClass:"icon gray big",attrs:{title:""}})],1)])])])],2)])])},staticRenderFns:[]};var y=i("VU/8")(M,V,!1,function(t){i("mvMF")},"data-v-62ebc7c6",null).exports,$={name:"comment-text-outline-icon",props:{title:{type:String,default:"Comment text outline icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon comment-text-outline-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z"}})])])},staticRenderFns:[]},H=i("VU/8")($,B,!1,null,null,null).exports,E={name:"dots-vertical-icon",props:{title:{type:String,default:"Dots vertical icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon dots-vertical-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z"}})])])},staticRenderFns:[]},L={MainNav:x,MainFooter:k,TimeLine:y,CommentIcon:H,DotIcon:i("VU/8")(E,F,!1,null,null,null).exports};i("siN1");s.a.config.productionTip=!1,n()(L).forEach(function(t){s.a.component(t,L[t])}),new s.a({el:"#app",router:b,template:"<App/>",components:{App:o}})},QWwo:function(t,e){},QlgS:function(t,e){},"gdX+":function(t,e){},mvMF:function(t,e){},s0bd:function(t,e){},siN1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9fd445b54a2eb4e4a0dc.js.map