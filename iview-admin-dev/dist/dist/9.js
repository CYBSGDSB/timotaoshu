webpackJsonp([9],{258:function(t,e,n){"use strict";function o(t){r||n(519)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(443),i=n.n(a);for(var l in a)"default"!==l&&function(t){n.d(e,t,function(){return a[t]})}(l);var s=n(521),c=n.n(s),r=!1,u=n(4),d=o,p=u(i.a,c.a,!1,d,"data-v-0069a794",null);p.options.__file="src\\views\\log\\index.vue",e.default=p.exports},284:function(t,e,n){t.exports={default:n(285),__esModule:!0}},285:function(t,e,n){n(286),t.exports=n(0).Object.assign},286:function(t,e,n){var o=n(8);o(o.S+o.F,"Object",{assign:n(287)})},287:function(t,e,n){"use strict";var o=n(26),a=n(54),i=n(34),l=n(33),s=n(94),c=Object.assign;t.exports=!c||n(20)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var n=l(t),c=arguments.length,r=1,u=a.f,d=i.f;c>r;)for(var p,f=s(arguments[r++]),g=u?o(f).concat(u(f)):o(f),h=g.length,v=0;h>v;)d.call(f,p=g[v++])&&(n[p]=f[p]);return n}:c},443:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(284),i=o(a),l=n(17),s=o(l);e.default={name:"logLog",data:function(){var t=this;return{loading:!1,columns:[{type:"selection",width:60,align:"center"},{title:"日志",key:"index"},{title:"日志",key:"name"},{title:"操作",render:function(e,n){return e("a",{attrs:{href:"javascript:void(0);",target:"_blank"},on:{click:function(e){t.onClickDown(n.row)}}},"下载")}}],params:{page:parseInt(this.$route.query.page)||1,limit:parseInt(this.$route.query.limit)||20,logType:parseInt(this.$route.query.logType)||1},selectList:[{value:1,label:"adminApi"},{value:4,label:"visit"}],total:0,list:[],selection:[]}},computed:{},methods:{download:function(t,e){if(console.log(t),t){var n=window.URL.createObjectURL(new Blob([t]));console.log(n);var o=document.createElement("a");o.style.display="none",o.href=n,o.setAttribute("download",e),document.body.appendChild(o),o.click()}},onClickDown:function(t){var e=this;if(!this.loading){var n={params:{logType:t.logType,name:t.name},responseType:"blob"},o={timeout:"100000"};this.loading=!0,s.default.post.log.download(n,o).then(function(n){e.loading=!1,202==n.status?e.$Message.error("下载失败"):e.download(n,t.name)}).catch(function(t){e.loading=!1})}},onClickDel:function(){var t=this;this.loading||this.$Modal.confirm({closable:!0,title:"温馨提示",content:"<p>你确定要删除日志？</p>",onOk:function(){var e=[];if(t.selection.forEach(function(t,n){e.push(t.name)}),!t.loading){var n={params:{logType:t.params.logType,nameArr:e.join(",")}};t.loading=!0,s.default.post.log.delete(n).then(function(e){t.loading=!1,t.$Message.success(e),t.getList()}).catch(function(e){t.loading=!1})}},onCancel:function(){t.$Message.info("你取消了清除")}})},onClickClear:function(){var t=this;this.loading||this.$Modal.confirm({closable:!0,title:"温馨提示",content:"<p>你确定要删除日志？</p>",onOk:function(){if(!t.loading){var e={params:{logType:0}};t.loading=!0,s.default.post.log.clearAll(e).then(function(e){t.loading=!1,t.$Message.success(e)}).catch(function(e){t.loading=!1})}},onCancel:function(){t.$Message.info("你取消了清除")}})},onClickSplice:function(){var t=this,e={params:{logType:this.params.logType}};this.loading=!0,s.default.post.log.splice(e).then(function(e){t.$Message.success(e),t.getList(),t.loading=!1}).catch(function(e){t.loading=!1})},getList:function(t){var e=this;t&&(this.params.page=t);var n={params:{page:this.params.page,limit:this.params.limit,logType:this.params.logType}};this.loading=!0,this.$router.replace({path:"/log/index",query:(0,i.default)({},n.params)}),s.default.post.log.list(n).then(function(t){e.loading=!1,e.total=t.count,e.list=t.list}).catch(function(t){e.loading=!1})},onClickSelect:function(t){this.selection=t,console.log(this.selection)},selectChange:function(){this.getList(1)}},components:{},created:function(){},mounted:function(){this.getList()},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){}}},519:function(t,e,n){var o=n(520);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(19)("4c32e574",o,!1,{})},520:function(t,e,n){e=t.exports=n(18)(!1),e.push([t.i,"",""])},521:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("Card",[n("Row",[n("Col",{attrs:{span:"12"}},[n("Select",{staticClass:"w100",attrs:{placeholder:"全部","label-in-value":""},on:{"on-change":t.selectChange},model:{value:t.params.logType,callback:function(e){t.$set(t.params,"logType",e)},expression:"params.logType"}},t._l(t.selectList,function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),t._v(" "),n("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onClickSplice}},[t._v("截取日志")])],1),t._v(" "),n("Col",{staticClass:"tr",attrs:{span:"12"}},[n("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onClickDel}},[t._v("删除日志")])],1)],1)],1),t._v(" "),n("Card",{attrs:{shadow:""}},[n("Table",{ref:"table",attrs:{border:"","highlight-row":"",loading:t.loading,columns:t.columns,data:t.list},on:{"on-selection-change":t.onClickSelect}})],1),t._v(" "),n("Card",{attrs:{shadow:""}},[n("Page",{attrs:{current:t.params.page,"page-size":t.params.limit,total:t.total,"show-total":"","show-elevator":""},on:{"on-change":t.getList}})],1)],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.default=i}});