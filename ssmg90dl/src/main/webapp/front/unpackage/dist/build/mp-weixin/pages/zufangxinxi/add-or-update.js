(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zufangxinxi/add-or-update"],{"30ce":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),c=o.value}catch(f){return void t(f)}o.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b764"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{fangwuhao:"",fangwumingcheng:"",fangwuleixing:"",tupian:"",xiangxidizhi:"",zhanghao:"",xingming:"",userid:""},user:{},ro:{fangwuhao:!1,fangwumingcheng:!1,fangwuleixing:!1,tupian:!1,xiangxidizhi:!1,zhanghao:!1,xingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function a(){var u,i,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:if(i=a.sent,t.user=i.data,t.ruleForm.zhanghao=t.user.zhanghao,t.ruleForm.xingming=t.user.xingming,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=15;break}return t.ruleForm.id=n.id,a.next=13,t.$api.info("zufangxinxi",t.ruleForm.id);case 13:i=a.sent,t.ruleForm=i.data;case 15:if(!n.cross){a.next=54;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=54;break}if(c=a.t1.value,"fangwuhao"!=c){a.next=24;break}return t.ruleForm.fangwuhao=o[c],t.ro.fangwuhao=!0,a.abrupt("continue",18);case 24:if("fangwumingcheng"!=c){a.next=28;break}return t.ruleForm.fangwumingcheng=o[c],t.ro.fangwumingcheng=!0,a.abrupt("continue",18);case 28:if("fangwuleixing"!=c){a.next=32;break}return t.ruleForm.fangwuleixing=o[c],t.ro.fangwuleixing=!0,a.abrupt("continue",18);case 32:if("tupian"!=c){a.next=36;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,a.abrupt("continue",18);case 36:if("xiangxidizhi"!=c){a.next=40;break}return t.ruleForm.xiangxidizhi=o[c],t.ro.xiangxidizhi=!0,a.abrupt("continue",18);case 40:if("zhanghao"!=c){a.next=44;break}return t.ruleForm.zhanghao=o[c],t.ro.zhanghao=!0,a.abrupt("continue",18);case 44:if("xingming"!=c){a.next=48;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,a.abrupt("continue",18);case 48:if("userid"!=c){a.next=52;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,a.abrupt("continue",18);case 52:a.next=18;break;case 54:t.styleChange();case 55:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.fangwuhao){n.next=3;break}return e.$utils.msg("房屋号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.fangwumingcheng){n.next=6;break}return e.$utils.msg("房屋名称不能为空"),n.abrupt("return");case 6:if(e.ruleForm.fangwuleixing){n.next=9;break}return e.$utils.msg("房屋类型不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.id){n.next=14;break}return n.next=12,e.$api.update("zufangxinxi",e.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,e.$api.add("zufangxinxi",e.ruleForm);case 16:e.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"3e90":function(e,n,t){"use strict";t.r(n);var r=t("30ce"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},"5d2e":function(e,n,t){"use strict";var r=t("9157"),a=t.n(r);a.a},9157:function(e,n,t){},ab96:function(e,n,t){"use strict";t.r(n);var r=t("f950"),a=t("3e90");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("5d2e");var i,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"29cfeda9",null,!1,r["a"],i);n["default"]=c.exports},e35e:function(e,n,t){"use strict";(function(e){t("ff36");r(t("66fd"));var n=r(t("ab96"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},f950:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["e35e","common/runtime","common/vendor"]]]);