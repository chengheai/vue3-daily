import{y as s,g as u,G as n,r as m,o as p,c as i,a as c,w as d,F as _,b as f}from"./vendor.ac9d22d5.js";const h={props:{name:{type:String,default:"\u9ED8\u8BA4"}},setup(a,{expose:t}){console.log("props: ",a.name);const e=s(0),o=u({foo:"bar"});return t({reset:()=>e.value=0}),()=>n("div",[n("h1",{hello:"ok",onclick:()=>e.value++},`count\u6570\u91CF: ${e.value}`),n("h1",[e.value,o.foo]),n("h2",{props:"name"},a.name)])}},v=f("reset"),k={setup(a){s(1);const t=s(null);return(e,o)=>{const r=m("a-button");return p(),i(_,null,[c(h,{name:"child",ref_key:"myChild",ref:t},null,512),c(r,{type:"primary",onClick:o[0]||(o[0]=()=>{var l;return(l=t.value)==null?void 0:l.reset()})},{default:d(()=>[v]),_:1})],64)}}};export{k as default};