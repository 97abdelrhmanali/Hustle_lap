(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2eec2ac"],{"29bb":function(t,e,n){},"33f9":function(t,e,n){"use strict";n("29bb")},f350:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{id:"tour-card",title:"Tour"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTour)+" ")]},proxy:!0}])},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.tourStart}},[t._v(" Start Tour ")]),n("app-tour",{attrs:{steps:t.steps}})],1)},o=[],s=n("541c"),i=n("1947"),a=n("e009"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tour",{attrs:{name:"vuexyTour",steps:t.steps},scopedSlots:t._u([{key:"default",fn:function(e){return[n("transition",{attrs:{name:"fade"}},t._l(e.steps,(function(r,o){return e.currentStep===o?n("v-step",{key:o,attrs:{step:r,"previous-step":e.previousStep,"next-step":e.nextStep,stop:e.stop,"is-first":e.isFirst,"is-last":e.isLast,labels:e.labels}},[n("div",{staticClass:"tour-actions d-flex justify-content-between",attrs:{slot:"actions"},slot:"actions"},[e.currentStep!=e.steps.length-1?n("b-button",{staticClass:"btn-tour-skip mr-1",attrs:{size:"sm",variant:"outline-primary"},on:{click:e.stop}},[n("span",{staticClass:"mr-25 align-middle"},[t._v("Skip")]),n("feather-icon",{attrs:{icon:"XIcon",size:"12"}})],1):t._e(),e.currentStep?n("b-button",{attrs:{size:"sm",variant:"outline-primary mr-1"},on:{click:e.previousStep}},[n("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"12"}}),n("span",{staticClass:"ml-25 align-middle"},[t._v("Previous")])],1):t._e(),e.currentStep!=e.steps.length-1?n("b-button",{staticClass:"btn-tour-next",attrs:{size:"sm",variant:"primary"},on:{click:e.nextStep}},[n("span",{staticClass:"mr-25 align-middle"},[t._v("Next")]),n("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"12"}})],1):t._e(),e.currentStep==e.steps.length-1?n("b-button",{staticClass:"btn-tour-finish",attrs:{size:"sm",variant:"primary"},on:{click:e.stop}},[n("span",{staticClass:"mr-25 align-middle"},[t._v("Finish")]),n("feather-icon",{attrs:{icon:"CheckCircleIcon",size:"12"}})],1):t._e()],1)]):t._e()})),1)]}}])})},u=[],p={name:"VxTour",components:{BButton:i["a"]},props:{steps:{required:!0,type:Array}}},l=p,d=n("2877"),m=Object(d["a"])(l,c,u,!1,null,null,null),f=m.exports,h="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"tourStart\"\n    >\n      Start Tour\n    </b-button>\n\n    <app-tour :steps=\"steps\" />\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport AppTour from '@core/components/app-tour/AppTour.vue'\n\nexport default {\n  name: 'ShepherdExample',\n  components: {\n    BButton,\n    AppTour,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      steps: [\n        {\n          target: '#tour-card',\n          header: {\n            title: 'Card',\n          },\n          content: 'This card contains demo for the tour.',\n        },\n        {\n          target: '#tour-card .icon-code',\n          header: {\n            title: 'View demo Source',\n          },\n          content: 'If you ever find your self confused, you can click on this code icon to check the source of current demo.',\n        },\n        {\n          target: '#tour-card .btn',\n          header: {\n            title: 'Trigger Tour',\n          },\n          content: 'You can click on this button to trigger the tour.',\n        },\n      ],\n    }\n  },\n  methods: {\n\n    // tour steps\n    tourStart() {\n      this.$tours.vuexyTour.start()\n    },\n  },\n}\n<\/script>\n\n<style lang=\"scss\">\n@import '@core/scss/vue/libs/tour.scss';\n</style>\n",v={name:"ShepherdExample",components:{BCardCode:s["a"],BButton:i["a"],AppTour:f},directives:{Ripple:a["a"]},data:function(){return{codeTour:h,steps:[{target:"#tour-card",header:{title:"Card"},content:"This card contains demo for the tour."},{target:"#tour-card .icon-code",header:{title:"View demo Source"},content:"If you ever find your self confused, you can click on this code icon to check the source of current demo."},{target:"#tour-card .btn",header:{title:"Trigger Tour"},content:"You can click on this button to trigger the tour."}]}},methods:{tourStart:function(){this.$tours.vuexyTour.start()}}},b=v,g=(n("33f9"),Object(d["a"])(b,r,o,!1,null,null,null));e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-f2eec2ac.a72f16fe.js.map