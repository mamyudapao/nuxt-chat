(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{279:function(e,r,t){"use strict";t.r(r);var o={data:function(){return{email:"",password:""}},methods:{signup:function(){console.log({email:this.email,password:this.password}),this.$nuxt.$emit("signup",{email:this.email,password:this.password})}}},l=t(66),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("サインアップ！！")]),e._v(" "),t("div",[t("b-form",[t("b-form-group",{attrs:{label:"email"}},[t("b-form-input",{attrs:{type:"email",placeholder:"please enter your email",required:""},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"password"}},[t("b-form-input",{attrs:{type:"password",placeholder:"please enter a password",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),e._v(" "),t("b-button",{attrs:{variant:"primary"},on:{click:e.signup}},[e._v("Submit")])],1)],1)])}),[],!1,null,null,null);r.default=component.exports}}]);