(this["webpackJsonpmemes-frontend"]=this["webpackJsonpmemes-frontend"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(0),s=n.n(c),r=n(12),a=n.n(r),o=(n(20),n(3)),d=(n(21),n(14)),j=n(7),l=n(13);var m=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(j.useWebSocket)("ws://localhost:8080/ws"),a=r.sendMessage,m=r.lastMessage,u=r.readyState,b=Object(d.a)(),h=b.register,g=b.handleSubmit,x=b.errors;return Object(c.useEffect)((function(){if(m&&(null===m||void 0===m?void 0:m.data)){var e=JSON.parse(m.data);s(e)}}),[m]),Object(i.jsxs)("div",{className:"App",children:[u===l.ReadyState.OPEN?"Connected":"Not connected",n&&n.memes&&n.memes.map((function(e){var t;return Object(i.jsxs)("div",{children:[e.title&&Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("img",{alt:"meme",src:null!==(t=e.imgSrc)&&void 0!==t?t:"https://image.shutterstock.com/image-vector/no-sign-isolated-on-white-260nw-323390270.jpg"}),e.text&&Object(i.jsx)("div",{children:e.text}),Object(i.jsx)("div",{style:{marginBottom:"40px"},children:"Author: "+e.author})]})})),Object(i.jsx)("form",{onSubmit:g((function(e){console.log("Sending ".concat(JSON.stringify(e))),a(JSON.stringify(e))})),children:Object(i.jsxs)("fieldset",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"author",children:"Autor"}),Object(i.jsx)("input",{type:"text",name:"author",id:"author",ref:h({required:"Wymagane"})}),x.author&&x.author.message]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"imgSrc",children:"Img src"}),Object(i.jsx)("input",{type:"text",name:"imgSrc",id:"imgSrc",ref:h({required:"Wymagane"})}),x.imgSrc&&x.imgSrc.message]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"text",children:"Komentarz"}),Object(i.jsx)("input",{type:"text",name:"text",id:"senderName",ref:h()}),x.text&&x.text.message]}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"submit",className:"button",id:"submit",value:"Wy\u015blij"})})]})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),u()}},[[29,1,2]]]);
//# sourceMappingURL=main.81599db9.chunk.js.map