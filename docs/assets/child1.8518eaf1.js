var c=Object.defineProperty;var r=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var n=(o,e,t)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))l.call(e,t)&&n(o,t,e[t]);if(r)for(var t of r(e))i.call(e,t)&&n(o,t,e[t]);return o};import{u as d,f as p,g as _,t as f,o as h,c as m,e as s,i as u}from"./vendor.1acd8372.js";import{_ as v}from"./index.98b6c8ee.js";const $={setup(){const o=d(),e=p(),t=_({route:e,router:o});return a({},f(t))}},B=s("h1",null,"\u7B2C\u4E09\u5C42",-1),R=s("h3",null,"route:",-1),g=s("h3",null,"router:",-1);function j(o,e,t,k,x,b){return h(),m("div",null,[B,R,s("p",null,u(o.route),1),g,s("p",null,u(o.router),1)])}var N=v($,[["render",j]]);export{N as default};