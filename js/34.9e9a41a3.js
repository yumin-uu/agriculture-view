"use strict";(self["webpackChunkagriculture_information"]=self["webpackChunkagriculture_information"]||[]).push([[34],{27034:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",[e("LayoutContent",{scopedSlots:t._u([{key:"head",fn:function(){return[e("div",{staticClass:"head-nav"},t._l(t.tabs,(function(a){return e("router-link",{key:a.id,class:{"router-link-active":"all"===a.value&&"/"===t.$route.path},attrs:{tag:"li",to:a.value}},[t._v(t._s(a.label))])})),1)]},proxy:!0}])},[e("div",{staticClass:"list"},[t.skeleton?e("el-skeleton",{attrs:{rows:20,animated:""}}):t.list.length?t._l(t.list,(function(a){return e("TopicItem",t._b({key:a.id},"TopicItem",a,!1))})):e("el-empty",{attrs:{description:"暂无数据"}})],2),t.list.length?e("div",{staticClass:"block"},[e("el-pagination",{attrs:{background:"","page-sizes":[20,40,60],"current-page":t.page,"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrent,"size-change":t.handleSize,"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e}}})],1):t._e()])],1)},l=[],s=a(43698),n={data(){return{list:[],tabs:[{id:"tf8wrtgy",label:"全部",value:"all",total:133},{id:"h54yuyy",label:"精华",value:"good",total:710},{id:"6u56trte",label:"分享",value:"share",total:95},{id:"es5y56y5",label:"问答",value:"ask",total:38},{id:"srwat5yu6",label:"招聘",value:"job",total:16},{id:"sruy65u6u",label:"客户端测试",value:"dev",total:145}],page:1,limit:40,total:0,skeleton:!1}},watch:{"$route.params.type":{handler(t){const e=t||"all";this.getTopicList(e),this.page=1,this.limit=40;const a=this.tabs.findIndex((t=>t.value===e));this.total=this.tabs[a].total},immediate:!0}},methods:{async getTopicList(t){const{page:e,limit:a}=this;this.skeleton=!0;const i={page:e,limit:a,tab:t},{data:l}=await(0,s.gp)(i);this.list=l,this.skeleton=!1},handleCurrent(){this.getTopicList()},handleSize(){this.getTopicList()}}},o=n,u=a(1001),r=(0,u.Z)(o,i,l,!1,null,"6d1e7179",null),c=r.exports}}]);
//# sourceMappingURL=34.9e9a41a3.js.map