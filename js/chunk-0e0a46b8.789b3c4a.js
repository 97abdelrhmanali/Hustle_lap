(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e0a46b8"],{"58ba":function(e,t,r){"use strict";r("9b23")},"5cf1":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-wrapper auth-v2"},[r("b-row",{staticClass:"auth-inner m-0"},[r("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5 parent",style:{backgroundImage:"linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("+e.imgUrl+")"},attrs:{lg:"8"}},[r("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[r("h1",{staticStyle:{"font-weight":"bolder","font-size":"50px",color:"beige"}},[e._v(" Let's start playing the game to better your future ")])])]),r("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[r("b-link",{staticClass:"brand-logo d-flex justify-content-end w-75"},[r("vuexy-logo")],1),r("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[r("b-card-title",{staticClass:"mb-1"},[e._v(" Student Sign Up ")]),r("validation-observer",{ref:"registerForm",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("b-form",{staticClass:"auth-register-form mt-2",on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"Username","label-for":"register-username"}},[r("validation-provider",{attrs:{name:"Username",vid:"username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-input-group",{staticClass:"input-group-merge"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"UserIcon"}})],1),r("b-form-input",{attrs:{id:"register-username",name:"register-username",state:!(a.length>0)&&null,placeholder:"johndoe"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(t){return e.clearField("name")}}})],1)],1),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("b-form-group",{attrs:{label:"Email Address","label-for":"register-email"}},[r("validation-provider",{attrs:{name:"Email",vid:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-input-group",{staticClass:"input-group-merge"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"MailIcon"}})],1),r("b-form-input",{attrs:{id:"register-email",name:"register-email",state:!(a.length>0)&&null,placeholder:"john@example.com"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(t){return e.clearField("email")}}})],1)],1),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("b-form-group",{attrs:{label:"Mobile Number","label-for":"register-phone"}},[r("validation-provider",{attrs:{name:"Phone",vid:"phone",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-input-group",{staticClass:"input-group-merge"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"PhoneIcon"}})],1),r("b-form-input",{attrs:{id:"register-phone",name:"register-phone",state:!(a.length>0)&&null,placeholder:"0123455678"},model:{value:e.userPhone,callback:function(t){e.userPhone=t},expression:"userPhone"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(t){return e.clearField("phone")}}})],1)],1),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("b-form-group",{attrs:{"label-for":"register-password",label:"Password"}},[r("validation-provider",{attrs:{name:"Password",vid:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:a.length>0?"is-invalid":null},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"LockIcon"}})],1),r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"register-password",state:!(a.length>0)&&null,type:e.passwordFieldType,name:"register-password",placeholder:"············"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIcon},on:{click:e.togglePasswordVisibility}})],1)],1),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("b-button",{staticClass:"mt-2 rounded-pill",attrs:{variant:"primary",block:"",type:"submit",disabled:a}},[e._v(" Sign up ")]),r("p",{staticClass:"text-center mt-2"},[r("span",[e._v("Already have an account?")]),r("b-link",{attrs:{to:{name:"auth-login"}}},[r("span",[e._v(" Login")])])],1),r("b-button",{staticClass:"rounded-pill",attrs:{variant:"outline-primary",block:"",type:"submit",disabled:a}},[e._v(" Teacher Sign up ")])],1)]}}])})],1)],1)],1)],1)},s=[],n=(r("e9c4"),r("7bb1")),i=r("088b"),o=r("a15b"),l=r("b28b"),u=r("aa59"),c=r("3656"),p=r("8226"),d=r("4797"),m=r("ccc0"),g=r("5e12"),b=r("c3e6"),f=r("d6e4"),h=r("4968"),v=r("4918"),x=r("11de"),w=r("1947"),k=r("5fda"),C=r("8f03"),y=r("b91d"),I=r("4360"),_=r("7100"),B=(r("a98a"),{components:{VuexyLogo:i["a"],BRow:o["a"],BCol:l["a"],BLink:u["a"],BInputGroupPrepend:c["a"],BFormGroup:p["a"],BFormInput:d["a"],BInputGroupAppend:m["a"],BInputGroup:g["a"],BFormCheckbox:b["a"],BCardText:f["a"],BCardTitle:h["a"],BImg:v["a"],BForm:x["a"],BButton:w["a"],BAlert:k["a"],ValidationProvider:n["b"],ValidationObserver:n["a"]},mixins:[y["a"]],data:function(){return{status:"",username:"",userPhone:"",userEmail:"",password:"",sideImg:r("67df"),required:C["l"],email:C["g"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===I["a"].state.appConfig.layout.skin?(this.sideImg=r("99b7"),this.sideImg):this.sideImg}},methods:{clearField:function(e){"email"===e?this.userEmail="":"name"===e?this.username="":"phone"===e?this.userPhone="":"password"===e&&(this.userPassword="")},register:function(){var e=this;this.$refs.registerForm.validate().then((function(t){t&&_["a"].register({username:e.username,email:e.userEmail,password:e.password}).then((function(t){_["a"].setToken(t.data.accessToken),_["a"].setRefreshToken(t.data.refreshToken),localStorage.setItem("userData",JSON.stringify(t.data.userData)),e.$ability.update(t.data.userData.ability),e.$router.push("/")})).catch((function(t){e.$refs.registerForm.setErrors(t.response.data.error)}))}))}}}),F=B,P=(r("58ba"),r("2877")),E=Object(P["a"])(F,a,s,!1,null,null,null);t["default"]=E.exports},"9b23":function(e,t,r){}}]);
//# sourceMappingURL=chunk-0e0a46b8.789b3c4a.js.map