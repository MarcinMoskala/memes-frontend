(this["webpackJsonpmemes-frontend"]=this["webpackJsonpmemes-frontend"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),i=n.n(c),r=n(12),a=n.n(r),o=(n(20),n(3)),d=(n(21),n(14)),l=n(7),m=n(13);var j=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(l.useWebSocket)("ws://fathomless-chamber-39903.herokuapp.com/ws"),a=r.sendMessage,j=r.lastMessage,u=r.readyState,b=Object(d.a)(),h=b.register,g=b.handleSubmit,x=b.errors;return Object(c.useEffect)((function(){if(console.log("Last message ",j),console.log("Last message data ",null===j||void 0===j?void 0:j.data),j&&(null===j||void 0===j?void 0:j.data)){var e=JSON.parse(j.data);console.log("Setting memes ",e),i(e)}}),[j]),Object(s.jsxs)("div",{className:"App",children:[u===m.ReadyState.OPEN?"Connected":"Not connected",n&&n.memes&&n.memes.map((function(e){var t;return Object(s.jsxs)("div",{children:[e.title&&Object(s.jsx)("h1",{children:e.title}),Object(s.jsx)("img",{alt:"meme",src:null!==(t=e.imgSrc)&&void 0!==t?t:"https://image.shutterstock.com/image-vector/no-sign-isolated-on-white-260nw-323390270.jpg"}),e.text&&Object(s.jsx)("div",{children:e.text}),Object(s.jsx)("div",{style:{marginBottom:"40px"},children:"Author: "+e.author})]})})),Object(s.jsx)("form",{onSubmit:g((function(e){console.log("Sending ".concat(JSON.stringify(e))),a(JSON.stringify(e))})),children:Object(s.jsxs)("fieldset",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"author",children:"Autor"}),Object(s.jsx)("input",{type:"text",name:"author",id:"author",ref:h({required:"Wymagane"})}),x.author&&x.author.message]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"imgSrc",children:"Img src"}),Object(s.jsx)("input",{type:"text",name:"imgSrc",id:"imgSrc",ref:h({required:"Wymagane"})}),x.imgSrc&&x.imgSrc.message]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"text",children:"Komentarz"}),Object(s.jsx)("input",{type:"text",name:"text",id:"senderName",ref:h()}),x.text&&x.text.message]}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"submit",className:"button",id:"submit",value:"Wy\u015blij"})})]})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),u()}},[[29,1,2]]]);
//# sourceMappingURL=main.3a09bde9.chunk.js.map