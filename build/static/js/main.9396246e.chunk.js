(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(9),c=n.n(l),o=n(12),u=n(5);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Notes App"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))},p=n(10),f=n(6);var E=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDel(e.id)}},r.a.createElement(f.a,{icon:p.faTrashCan})))},s=n(4),v=n(7),d=n(11);var h=function(e){var t=r.a.useState({title:"",content:""}),n=Object(u.a)(t,2),a=n[0],l=n[1];function c(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(s.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},r.a.createElement("input",{onChange:c,name:"title",value:a.title,placeholder:"Title"}),r.a.createElement("textarea",{onChange:c,name:"content",value:a.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.onAdd(a),l({title:"",content:""})}},r.a.createElement(f.a,{icon:d.faPlus}))))};var b=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1];function l(e){a((function(t){return n.filter((function(t,n){return e!==n}))}))}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(h,{onAdd:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,onDel:l})})),r.a.createElement(m,null))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9396246e.chunk.js.map