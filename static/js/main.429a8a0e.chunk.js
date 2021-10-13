(this["webpackJsonptodo-frontend"]=this["webpackJsonptodo-frontend"]||[]).push([[0],{14:function(e,t,c){},19:function(e,t,c){},38:function(e,t,c){},41:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(28),o=c.n(a),r=(c(38),c(14),c(15)),l=c.n(r),i=c(29),d=c(6),j=c(30),b=(c(19),c(41),c(2)),u=c(0),h=function(e){var t=e.trigger,c=e.setPop,n=e.children,s=Object(b.f)();return t?Object(u.jsxs)("div",{className:"block__popup",children:[n,Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){localStorage.removeItem("token"),s.push("/")},children:"Logout"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return c(!1)},children:"Close"})]})]}):""},O=function(e){var t=e.title,c=Object(n.useState)(!1),s=Object(d.a)(c,2),a=s[0],o=s[1];return Object(u.jsxs)("div",{className:"block__title",children:[Object(u.jsx)("div",{children:t}),Object(u.jsx)("div",{className:"block__title-buttons",children:Object(u.jsx)("button",{onClick:function(){o(!0),console.log("clicked")},class:"button__logout",children:"Logout"})}),Object(u.jsx)(h,{trigger:a,setPop:o,children:Object(u.jsx)("p",{children:"Do you really want to logout?"})})]})},m=(c(50),function(e){var t=e.children,c=e.className;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:c,children:t})})}),p=(c(51),c(52),c(33)),x=c.n(p).a.create({baseURL:"httpa://api.ectd.ml/"}),f=function(){var e=Object(b.f)(),t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],a=c[1],o=Object(n.useState)(""),r=Object(d.a)(o,2),h=r[0],p=r[1],f=Object(n.useState)(null),g=Object(d.a)(f,2),v=g[0],k=g[1],N=function(){var t=Object(i.a)(l.a.mark((function t(c){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),console.log(s,h),n={headers:{Authorization:"Basic "+Object(j.encode)("".concat(s,":").concat(h))}},t.prev=3,t.next=6,x.get("login",n);case 6:a=t.sent,console.log(a.data),localStorage.setItem("token",a.data.token),e.push("/dashboard"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),401===t.t0.response.status&&k("Invalid Username or Password");case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{title:"Login"}),Object(u.jsx)(m,{className:"block__slate",children:Object(u.jsx)("div",{className:"card p-5 in2",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{onSubmit:N,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsx)("label",{htmlFor:"username",children:"Email address"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",value:s,onChange:function(e){a(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:h,onChange:function(e){return p(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group form-check",children:[Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",id:"remember"}),Object(u.jsx)("label",{className:"form-check-label",htmlFor:"remember",children:"Remember me"})]}),Object(u.jsx)("div",{style:{color:"#DF362D"},children:v}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})})})})]})},g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("/user",{method:"GET",headers:{}}).then((function(e){return e.json()})).then((function(e){s(e),console.log(e)})).catch(console.error)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{title:"All Users"}),Object(u.jsx)(m,{className:"block__slate",children:Object(u.jsxs)("div",{className:"darkback",children:[Object(u.jsx)("h1",{children:"Hi There"}),0!==c.length&&c.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:e.id}),Object(u.jsx)("h1",{children:e.name})]},e.id)}))]})})]})},v=c(11),k=(c(71),function(e){var t=e.children,c=Object(n.useContext)(C);return console.log(c),Object(u.jsxs)("div",{className:"block__card",children:[t,Object(u.jsx)("p",{children:c})]})}),N=localStorage.getItem("token"),_={headers:{Authorization:"Bearer "+N}},y=function(){var e="toggle",t="fetch_todos",c="delete_todo",s=Object(b.f)(),a=Object(n.useReducer)((function(n,s){switch(s.type){case e:return n.map((function(e){return e.id===s.payload.id?(x.put("/todo/".concat(e.id),{complete:!e.complete},{headers:{Authorization:"Bearer "+N}}).then((function(t){e.complete=!e.complete})).catch((function(e){console.log(e.response.status)})),Object(v.a)(Object(v.a)({},e),{},{complete:!e.complete})):Object(v.a)({},e)}));case c:return n.filter((function(e){return e.id!==s.payload.id}));case t:return s.payload.data;default:return n}}),[]),o=Object(d.a)(a,2),r=o[0],l=o[1];Object(n.useEffect)((function(){x.get("/todo",_).then((function(e){l({type:t,payload:{data:e.data}})})).catch((function(e){422===e.response.status?s.push("/"):401===e.response.status&&(alert("you have been logged out"),s.push("/"))}))}),[s,t]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{title:"Dashboard"}),Object(u.jsxs)(m,{className:"block__slate--dashboard",children:[0!==r.length&&r.map((function(t){return Object(u.jsxs)(k,{children:[Object(u.jsx)("h3",{children:t.text}),Object(u.jsx)("hr",{className:"elem__hr"}),t.complete?Object(u.jsx)("span",{children:"Completed"}):Object(u.jsx)("span",{children:"Incomplete"}),Object(u.jsx)("hr",{className:"elem__hr"}),Object(u.jsx)("button",{onClick:function(){return e=t.id,console.log(e),void s.push("/todoone/".concat(e));var e},className:"view",children:"View"}),Object(u.jsxs)("div",{className:"block__actions",children:[Object(u.jsx)("button",{onClick:function(){l({type:c,payload:{id:t.id}})},className:"delete",children:"Delete"}),Object(u.jsx)("button",{onClick:function(){l({type:e,payload:{id:t.id}})},className:"toggle",children:"Toggle"})]})]},t.id)})),Object(u.jsx)("button",{onClick:function(){alert("pressed addTodo")},className:"block__add--bottomRight",children:"+"})]})]})},w=function(e){var t=Object(b.g)().id,c=Object(n.useState)(""),s=Object(d.a)(c,2),a=s[0],o=s[1],r={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};return Object(n.useEffect)((function(){x.get("/todo/".concat(t),r).then((function(e){o(e.data.todo.text)}))})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{title:"Todo"}),Object(u.jsx)(m,{className:"block__slate",children:Object(u.jsx)("div",{children:a})})]})},C=s.a.createContext("I am in App component");console.log(C);var S=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"LeftPane",children:Object(u.jsx)("div",{className:"login-lp",children:Object(u.jsxs)("p",{children:["TODO - Web App","\n","Made in react"]})})}),Object(u.jsx)("div",{className:"block--right",children:Object(u.jsx)(C.Provider,{value:"I am in App component",children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",children:Object(u.jsx)(f,{})}),Object(u.jsx)(b.a,{exact:!0,path:"/getallusers",children:Object(u.jsx)(g,{})}),Object(u.jsx)(b.a,{exact:!0,path:"/dashboard",children:Object(u.jsx)(y,{})}),Object(u.jsx)(b.a,{exact:!0,path:"/todoone/:id",children:Object(u.jsx)(w,{})})]})})})]})},F=c(7);o.a.render(Object(u.jsx)(F.a,{basename:"/todo-frontend-reactflask",children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.429a8a0e.chunk.js.map