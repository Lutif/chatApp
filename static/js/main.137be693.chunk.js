(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){e.exports=n.p+"static/media/signin.282d27d0.svg"},44:function(e,t,n){e.exports=n.p+"static/media/logo.15093548.svg"},50:function(e,t,n){e.exports=n(97)},55:function(e,t,n){},94:function(e,t){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(41),r=n.n(o),l=n(14),m=n(6),s=n(13),u=n(42),i=n(9),p=(n(55),n(43)),f=n.n(p),E=n(44),g=n.n(E);function v(){var e=Object(a.useState)({username:"",room:""}),t=Object(i.a)(e,2),n=t[0],o=n.username,r=n.room,m=t[1];function p(e){var t=e.target,n=t.name,a=t.value;m((function(e){return Object(u.a)({},e,Object(s.a)({},n,a))})),console.log("name : ".concat(o," room:").concat(r))}return c.a.createElement("div",null,c.a.createElement("div",{className:"header"}," ",c.a.createElement("img",{src:g.a})," "),c.a.createElement("div",{className:"joinContainer"},c.a.createElement("div",{className:"signinForm"},c.a.createElement("h1",null,"Welcome to EverChat"),c.a.createElement("input",{type:"text",name:"username",placeholder:"Enter your name",onChange:p}),c.a.createElement("input",{type:"text",name:"room",placeholder:"Enter room name",onChange:p}),c.a.createElement(l.b,{onClick:function(e){return o&&r?null:e.preventDefault()},to:"/chat?name=".concat(o,"&room=").concat(r)},c.a.createElement("button",{type:"submit"},"Sign in"))),c.a.createElement("div",null," ",c.a.createElement("img",{className:"signin",src:f.a})," ")))}var d,h=n(49),b=n(47),j=n.n(b),O=n(48),x=n.n(O),y="https://node-chatapp-server.herokuapp.com";function k(e){var t=e.location,n=Object(a.useState)({name:"",room:""}),o=Object(i.a)(n,2),r=o[0],l=(r.name,r.room,o[1],Object(a.useState)("")),m=Object(i.a)(l,2),s=m[0],u=m[1],p=Object(a.useState)([]),f=Object(i.a)(p,2),E=f[0],g=f[1];return Object(a.useEffect)((function(){var e=j.a.parse(t.search),n=e.name,a=e.room;return console.log(y),d=x()(y),console.log("socket is ",console.log(d.connected)),d.emit("Join",{name:n,room:a},(function(e){return console.log(e)})),function(){d.emit("disconnect"),d.off(),console.log("cleaning done")}}),[t.search,y]),Object(a.useEffect)((function(){d.on("message",(function(e){g([].concat(Object(h.a)(E),[e]))}))}),[E]),c.a.createElement("div",{className:"chatContainer"},c.a.createElement("div",null,c.a.createElement("p",null,"messages"),E.map((function(e){return c.a.createElement("p",{key:e.user+e.text},e.user,":  ",e.text)}))),c.a.createElement("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?function(e){e.preventDefault(),d.emit("sendMessage",s,(function(){u("")}))}(e):null}}))}var C=document.getElementById("root");r.a.render(c.a.createElement((function(){return c.a.createElement(l.a,{basename:"/chatApp"},c.a.createElement(m.a,{path:"/",exact:!0,component:v}),c.a.createElement(m.a,{path:"/chat",component:k}))}),null),C)}},[[50,1,2]]]);
//# sourceMappingURL=main.137be693.chunk.js.map