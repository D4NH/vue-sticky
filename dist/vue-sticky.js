!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.StickyDirective=t():e.StickyDirective=t()}(this,function(){return function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={params:["holder-height","sticky-top","z-index"],bind:function(){var e=this,t=document.createElement("div"),i={},o=!1,n=function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop)};this.__listenAction=function(){if(e.vm)if(i.height||(i.height=e.el.offsetHeight,i.offsetTop=e.el.offsetTop,t.style.height=i.height+"px",t.style.visibility="hidden",e.el.style.width="100%"),n()<=i.offsetTop){if(!o)return;o=!1,e.el.style.position="",e.el.parentElement.removeChild(t),e.vm.$dispatch("STICKY_STATE",{isSticky:!1,el:e.el})}else{if(o)return;o=!0,e.el.style.position="fixed",e.el.style.top=(e.params.stickyTop||0)+"px",e.el.style.zIndex=""+(e.params.zIndex||1e3),e.el.parentElement.insertBefore(t,e.el),e.vm.$dispatch("STICKY_STATE",{isSticky:!0,el:e.el})}};var r=null;window.addEventListener("scroll",function(){r&&clearTimeout(r),r=setTimeout(function(){return e.__listenAction()},20)})},unbind:function(){window.removeEventListener("scroll",this.__listenAction)}};t["default"]=i}])});