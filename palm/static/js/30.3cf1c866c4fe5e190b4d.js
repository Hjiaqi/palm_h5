webpackJsonp([30],{Drzx:function(e,n,t){var r=t("b8OW");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("a6d4b5c8",r,!0)},MO6C:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("Xxa5"),o=t.n(r),a=t("exGp"),i=t.n(a),s=t("o01X"),l=t("86xn"),A=t("Au9i"),c=t("y5xs"),m=t("0xDb"),u={data:function(){return{agencysInfo:this.$route.params.agencysInfo,userInfo:{},curRouteName:"",selectWay:!1,imageInfo:{},takePhoto:!1,selectPicture:!1,cancelHead:!1}},components:{navReturn:s.a,navEnter:l.a},beforeRouteEnter:function(e,n,t){var r=Object(m.c)("userInfo");null!==r&&(r=JSON.parse(r),10===Number(r.role)&&"studentInfo"!==e.name&&t("/"+e.params.agencysNamePy+"/studentInfo"),2===Number(r.role)&&"agencysInfo"!==e.name&&t("/"+e.params.agencysNamePy+"/agencysInfo")),t()},beforeRouteLeave:function(e,n,t){"personalImage"===e.name&&(e.params.imageInfo=this.imageInfo),t()},created:function(){this.curRouteName=this.$route.name,this.getUserProfile()},methods:{getUserProfile:function(){var e=i()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A.Indicator.open(),e.next=3,Object(c.p)(this.agencysInfo.id);case 3:n=e.sent,A.Indicator.close(),0===n.errCode&&null!==n.data?this.userInfo=n.data:10003===n.errCode||10005===n.errCode?this.tokenOutOfDate():80001===n.errCode?Object(A.Toast)("机构不存在"):Object(A.Toast)("获取用户信息失败");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),goToReset:function(e){"studentInfo"===this.$route.name?1===e?this.goToOther("/resetStudentNickname"):this.goToOther("/resetStudentEmail"):1===e?this.goToOther("/resetAgencysNickname"):this.goToOther("/resetAgencysEmail")},selectImg:function(e){this.$refs[e].click()},showImage:function(e){var n=this.$refs[e].files[0];void 0!==n&&(this.imageInfo=n,this.$refs[e].value="",this.goToOther("/personalImage"))},hideSelect:function(e){"select-way"===e.target.className&&(this.selectWay=!1)}},watch:{$route:function(){window.location.reload()}}},d={render:function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"wrap",class:e.selectWay?"no-scroll":""},[r("nav-return",{staticClass:"nav-return",attrs:{title:"个人信息"}}),e._v(" "),r("div",{staticClass:"user-info-module"},[r("div",{staticClass:"module-item"},[r("div",{staticClass:"module-item-border"},[r("p",{staticClass:"module-item-title"},[e._v("头像")]),e._v(" "),r("div",{staticClass:"module-item-head",on:{click:function(n){e.selectWay=!0}}},[r("div",{staticClass:"user-img-wrap"},[""!==e.userInfo.img_url&&null!==e.userInfo.img_url?r("img",{staticClass:"user-img",attrs:{src:e.userInfo.img_url,alt:"头像"}}):r("img",{staticClass:"user-img empty-head",attrs:{src:t("vqPe"),alt:"头像"}})]),e._v(" "),r("img",{staticClass:"icon",attrs:{src:t("DZTJ")}})])])]),e._v(" "),r("nav-enter",{attrs:{leftText:"昵称",rightText:""===e.userInfo.nickname||null===e.userInfo.nickname?"未设置":e.userInfo.nickname},nativeOn:{click:function(n){e.goToReset(1)}}}),e._v(" "),r("nav-enter",{attrs:{leftText:"真实姓名",rightText:""===e.userInfo.truename||null===e.userInfo.truename?"未设置":e.userInfo.truename,enterBtn:!1,border:!1}})],1),e._v(" "),r("div",{staticClass:"user-info-module"},[r("nav-enter",{attrs:{leftText:"手机号",rightText:e.userInfo.mobile,enterBtn:!1}}),e._v(" "),r("nav-enter",{attrs:{leftText:"应急邮箱",rightText:""===e.userInfo.email||null===e.userInfo.email?"未设置":e.userInfo.email,border:!1},nativeOn:{click:function(n){e.goToReset(2)}}})],1),e._v(" "),10===Number(e.userInfo.role)?[1===Number(e.agencysInfo.type)?r("div",{staticClass:"user-info-module"},[r("nav-enter",{attrs:{leftText:"班级",rightText:""===e.userInfo.dept||null===e.userInfo.dept?"未设置":e.userInfo.dept,enterBtn:!1}}),e._v(" "),r("nav-enter",{attrs:{leftText:"学生证",rightText:""===e.userInfo.student_no||null===e.userInfo.student_no?"未设置":e.userInfo.student_no,enterBtn:!1,border:!1}})],1):r("div",{staticClass:"user-info-module"},[r("nav-enter",{attrs:{leftText:"部门",rightText:""===e.userInfo.dept||null===e.userInfo.dept?"未设置":e.userInfo.dept,enterBtn:!1}}),e._v(" "),r("nav-enter",{attrs:{leftText:"职务",rightText:""===e.userInfo.career||null===e.userInfo.career?"未设置":e.userInfo.career,enterBtn:!1}}),e._v(" "),r("nav-enter",{attrs:{leftText:"员工证",rightText:""===e.userInfo.student_no||null===e.userInfo.student_no?"未设置":e.userInfo.student_no,enterBtn:!1,border:!1}})],1)]:e._e(),e._v(" "),e.selectWay?r("div",{staticClass:"select-way",on:{touchstart:e.hideSelect,click:e.hideSelect}},[r("p",{staticClass:"confirm-select"},[r("span",{class:{"white-click":e.takePhoto},on:{click:function(n){e.selectImg("camera")},mousedown:function(n){e.takePhoto=!0},mouseup:function(n){e.takePhoto=!1},touchstart:function(n){e.takePhoto=!0},touchend:function(n){e.takePhoto=!1}}},[e._v("拍照")]),e._v(" "),r("span",{staticClass:"select-border",class:{"white-click":e.selectPicture},on:{click:function(n){e.selectImg("image")},mousedown:function(n){e.selectPicture=!0},mouseup:function(n){e.selectPicture=!1},touchstart:function(n){e.selectPicture=!0},touchend:function(n){e.selectPicture=!1}}},[e._v("从手机相册选择")])]),e._v(" "),r("p",{staticClass:"cancel-select",class:{"white-click":e.cancelHead},on:{click:function(n){e.selectWay=!1},mousedown:function(n){e.cancelHead=!0},mouseup:function(n){e.cancelHead=!1},touchstart:function(n){e.cancelHead=!0},touchend:function(n){e.cancelHead=!1}}},[e._v("取消")])]):e._e(),e._v(" "),r("input",{ref:"camera",attrs:{type:"file",accept:"image/*",capture:"camera",hidden:""},on:{change:function(n){e.showImage("camera")}}}),e._v(" "),r("input",{ref:"image",attrs:{type:"file",accept:"image/*",hidden:""},on:{change:function(n){e.showImage("image")}}})],2)},staticRenderFns:[]},f=t("VU/8")(u,d,!1,function(e){t("Drzx")},"data-v-0e6ba470",null);n.default=f.exports},b8OW:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.wrap[data-v-0e6ba470] {\n  min-height: 100vh;\n  position: relative;\n}\n.wrap .nav-return[data-v-0e6ba470] {\n  margin-bottom: 0.4rem;\n}\n.wrap .user-info-module[data-v-0e6ba470] {\n  background-color: #ffffff;\n  margin-bottom: 0.266667rem;\n}\n.wrap .user-info-module .module-item[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 2.16rem;\n  padding: 0 0.333333rem;\n}\n.wrap .user-info-module .module-item .module-item-border[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  border-bottom: 0.026667rem solid #eeeeee;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-title[data-v-0e6ba470] {\n  font-size: 0.426667rem;\n  color: #323333;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .user-img-wrap[data-v-0e6ba470] {\n  width: 1.466667rem;\n  height: 1.466667rem;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  margin-right: 0.32rem;\n  position: relative;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .user-img-wrap .user-img[data-v-0e6ba470] {\n  width: 1.466667rem;\n  height: 1.466667rem;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .user-img-wrap .empty-head[data-v-0e6ba470] {\n  width: 1.466667rem;\n  height: 1.466667rem;\n  border-radius: 50%;\n  border: 0.026667rem solid #eee;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .icon[data-v-0e6ba470] {\n  width: 0.16rem;\n  height: 0.293333rem;\n}\n.wrap .select-way[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(7, 12, 12, 0.3);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.wrap .select-way .confirm-select[data-v-0e6ba470] {\n  background-color: #ffffff;\n  border-radius: 0.133333rem;\n}\n.wrap .select-way .confirm-select span[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 9.36rem;\n  height: 1.466667rem;\n  font-size: 0.426667rem;\n  color: #333333;\n  cursor: pointer;\n}\n.wrap .select-way .confirm-select .select-border[data-v-0e6ba470] {\n  border-top: 0.013333rem solid #dedede;\n}\n.wrap .select-way .cancel-select[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 9.36rem;\n  height: 1.466667rem;\n  font-size: 0.426667rem;\n  color: #333333;\n  background-color: #ffffff;\n  border-radius: 0.133333rem;\n  cursor: pointer;\n  margin: 0.266667rem 0;\n}\n.no-scroll[data-v-0e6ba470] {\n  overflow-y: hidden;\n}","",{version:3,sources:["D:/项目文件/demo/palm-h5/src/views/user/personalInfo.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;EAC1B,2BAA2B;CAC5B;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,YAAY;EACZ,aAAa;EACb,yCAAyC;CAC1C;AACD;EACE,uBAAuB;EACvB,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,+BAA+B;EAC/B,mBAAmB;EACnB,OAAO;EACP,QAAQ;CACT;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,sBAAsB;MAClB,mBAAmB;UACf,0BAA0B;EAClC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,YAAY;EACZ,aAAa;EACb,uCAAuC;EACvC,mBAAmB;EACnB,OAAO;EACP,QAAQ;CACT;AACD;EACE,0BAA0B;EAC1B,2BAA2B;CAC5B;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,sCAAsC;CACvC;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;EACf,0BAA0B;EAC1B,2BAA2B;EAC3B,gBAAgB;EAChB,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB",file:"personalInfo.vue",sourcesContent:["\n.wrap[data-v-0e6ba470] {\n  min-height: 100vh;\n  position: relative;\n}\n.wrap .nav-return[data-v-0e6ba470] {\n  margin-bottom: 0.4rem;\n}\n.wrap .user-info-module[data-v-0e6ba470] {\n  background-color: #ffffff;\n  margin-bottom: 0.266667rem;\n}\n.wrap .user-info-module .module-item[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 2.16rem;\n  padding: 0 0.333333rem;\n}\n.wrap .user-info-module .module-item .module-item-border[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  border-bottom: 0.026667rem solid #eeeeee;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-title[data-v-0e6ba470] {\n  font-size: 0.426667rem;\n  color: #323333;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .user-img-wrap[data-v-0e6ba470] {\n  width: 1.466667rem;\n  height: 1.466667rem;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  margin-right: 0.32rem;\n  position: relative;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .user-img-wrap .user-img[data-v-0e6ba470] {\n  width: 1.466667rem;\n  height: 1.466667rem;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .user-img-wrap .empty-head[data-v-0e6ba470] {\n  width: 1.466667rem;\n  height: 1.466667rem;\n  border-radius: 50%;\n  border: 0.026667rem solid #eee;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.wrap .user-info-module .module-item .module-item-border .module-item-head .icon[data-v-0e6ba470] {\n  width: 0.16rem;\n  height: 0.293333rem;\n}\n.wrap .select-way[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(7, 12, 12, 0.3);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.wrap .select-way .confirm-select[data-v-0e6ba470] {\n  background-color: #ffffff;\n  border-radius: 0.133333rem;\n}\n.wrap .select-way .confirm-select span[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 9.36rem;\n  height: 1.466667rem;\n  font-size: 0.426667rem;\n  color: #333333;\n  cursor: pointer;\n}\n.wrap .select-way .confirm-select .select-border[data-v-0e6ba470] {\n  border-top: 0.013333rem solid #dedede;\n}\n.wrap .select-way .cancel-select[data-v-0e6ba470] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 9.36rem;\n  height: 1.466667rem;\n  font-size: 0.426667rem;\n  color: #333333;\n  background-color: #ffffff;\n  border-radius: 0.133333rem;\n  cursor: pointer;\n  margin: 0.266667rem 0;\n}\n.no-scroll[data-v-0e6ba470] {\n  overflow-y: hidden;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=30.3cf1c866c4fe5e190b4d.js.map