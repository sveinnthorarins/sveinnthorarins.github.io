(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6612:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var s=t(5893),r=t(9008),i=t(6748),a=t.n(i),o=t(6670),c=t.n(o);function l(){return(0,s.jsx)("img",{style:{width:"100%",height:"100%"},className:c().portrait__image,src:a(),alt:"Image of Sveinn Thorarinsson"})}var h=t(36),u=t.n(h);function d(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Hello! I'm ",(0,s.jsx)("span",{className:u().line1,children:"Sveinn"}),"."]}),(0,s.jsxs)("p",{children:["A ",(0,s.jsx)("span",{className:u().line2,children:"fresh university graduate"})]}),(0,s.jsxs)("p",{children:["with a ",(0,s.jsx)("span",{className:u().line3,children:"B.Sc. degree"})]}),(0,s.jsxs)("p",{children:["in ",(0,s.jsx)("span",{className:u().line4,children:"Software Engineering"})]}),(0,s.jsxs)("p",{children:["from the ",(0,s.jsx)("span",{className:u().line5,children:"University of Iceland"}),"."]})]})}var _=t(146),m=t.n(_),f=t(4298),p=t(7294);function g(e){var n=(0,p.useRef)(null);return(0,p.useEffect)((function(){!function e(){try{FallingStarsGameData&&FallingStarsGameData.updateContainer(n.current)}catch(t){setTimeout((function(){return e()}),100)}}()}),[n]),(0,s.jsx)("div",{className:e.className,ref:n})}function x(){return(0,s.jsxs)("section",{className:m().introduction,children:[(0,s.jsx)(g,{className:m().canvas}),(0,s.jsx)("div",{className:m().portrait,children:(0,s.jsx)(l,{})}),(0,s.jsx)("div",{className:m().greeting,children:(0,s.jsx)(d,{})}),(0,s.jsx)(f.default,{src:"/fsbundle.js"})]})}var j=t(7451),v=t(9706),w=t(5651),b=t(8964),N=t.n(b);function y(e){return(0,s.jsx)("div",{className:N().showcase,children:(0,s.jsx)("div",{className:N().showcase__flexrows,children:e.children})})}var k=t(6001),S=t.n(k),E=t(1664);function I(e){return void 0===e.href?(0,s.jsxs)("div",{className:S().showcase__card,children:[(0,s.jsx)("img",{style:{width:"100%",height:"100%"},src:e.imageSrc,alt:e.imageAlt}),(0,s.jsx)("div",{className:S().card__content,children:(0,s.jsx)("p",{className:S().card__title,children:e.title})})]}):(0,s.jsx)(E.default,{href:e.href,children:(0,s.jsxs)("a",{className:S().showcase__card,children:[(0,s.jsx)("img",{style:{width:"100%",height:"100%"},src:e.imageSrc,alt:e.imageAlt}),(0,s.jsx)("div",{className:S().card__content,children:(0,s.jsx)("p",{className:S().card__title,children:e.title})})]})})}var P=t(7757),Z=t.n(P);function A(e,n,t,s,r,i,a){try{var o=e[i](a),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(s,r)}function T(e){return function(){var n=this,t=arguments;return new Promise((function(s,r){var i=e.apply(n,t);function a(e){A(i,s,r,a,o,"next",e)}function o(e){A(i,s,r,a,o,"throw",e)}a(void 0)}))}}var C=t(8890),H=t.n(C),M=t(1815),F=t.n(M);function G(e){return(0,s.jsx)("div",{className:F().wrapper,children:(0,s.jsx)("div",{className:F().list,children:e.children})})}function W(){var e=(0,p.useState)(!1),n=e[0],t=e[1],r=(0,p.useState)(!1),i=r[0],a=r[1],o=(0,p.useState)(null),c=o[0],l=o[1];return(0,p.useEffect)((function(){function e(){return(e=T(Z().mark((function e(){var n,s;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),a(!1),e.prev=2,e.next=5,fetch("https://sveinnthorarins-kattis-scraper.herokuapp.com/");case 5:if((s=e.sent).ok){e.next=8;break}throw new Error("result not ok");case 8:return e.next=10,s.json();case 10:n=e.sent,e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),a(!0),e.abrupt("return");case 17:return e.prev=17,t(!1),e.finish(17);case 20:l(n);case 21:case"end":return e.stop()}}),e,null,[[2,13,17,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i?(0,s.jsx)("p",{className:H().message,children:"Couldn't fetch the solved problems at this time. \ud83d\ude41"}):n?(0,s.jsx)("p",{className:H().message,children:"Fetching..."}):c?(0,s.jsx)(G,{children:c&&c.map((function(e){return(0,s.jsx)("a",{className:H().problem,href:e.href,children:e.name},e.id)}))}):(0,s.jsx)("p",{className:H().message,children:"No solved problems."})}var Y=t(250),q=t(7268),D=t.n(q),K=t(7335),R=t.n(K);function V(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"Sveinn Thorarinsson"}),(0,s.jsx)("meta",{name:"description",content:"Personal Portfolio Website"})," ",(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{children:[(0,s.jsx)(x,{}),(0,s.jsxs)(j.Z,{id:"projects",children:[(0,s.jsx)(v.Z,{children:"Personal Projects"}),(0,s.jsxs)(w.Z,{children:["In my spare time I enjoy turning my ideas and curiosities into personal programming projects. Sometimes the projects make my life easier in some way and other times they are just for the purpose of fun and learning. Most of these personal programming endeavours of mine are publicly accessible on ",(0,s.jsx)("a",{href:"https://github.com/sveinnthorarins",rel:"noreferrer",target:"_blank",children:"my GitHub"}),". Here are some of the best ones that I've chosen to showcase:"]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(I,{title:"Ant Foraging Simulation",href:"/project/ant-foraging-simulation",imageSrc:D(),imageAlt:"Ant simulation project in action"}),(0,s.jsx)(I,{title:"Minecraft Server Sleep Manager",href:"/project/minecraft-server-sleep-manager",imageSrc:R(),imageAlt:"Console application icon"})]})]}),(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(v.Z,{children:"Solved Coding Problems"}),(0,s.jsxs)(w.Z,{children:["I also love taking a crack at solving complex coding problems. The feeling you get when you finally solve an extremely hard problem that you've been thinking about for days is just so thrilling! I've found that the best sources of such problems are online judge platforms for competitive programming. Here below you can see a daily-updated list of the problems I've solved (using C++) on the online judge platform ",(0,s.jsx)("a",{href:"https://www.kattis.com/",rel:"noreferrer",target:"_blank",children:"Kattis"}),":"]}),(0,s.jsx)(W,{})]}),(0,s.jsx)(Y.Z,{})]})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6612)}])},36:function(e){e.exports={line1:"greeting_line1__1ygkY","rotate-color-theme":"greeting_rotate-color-theme__aVsom",line2:"greeting_line2__34xhM",line3:"greeting_line3__3lYk2",line4:"greeting_line4__1eHVL",line5:"greeting_line5__2zGMH","rotate-color-wheel":"greeting_rotate-color-wheel__3EJY2"}},146:function(e){e.exports={canvas:"introduction_canvas__3JdYf",introduction:"introduction_introduction__3xSKV",portrait:"introduction_portrait__2qcfh",greeting:"introduction_greeting__3byeT"}},8890:function(e){e.exports={message:"kattissolvedproblems_message__1R7Bj",problem:"kattissolvedproblems_problem__1IuE7"}},1815:function(e){e.exports={wrapper:"multicolumnlist_wrapper__3NTpA",list:"multicolumnlist_list__Wpfca"}},6670:function(e){e.exports={portrait__image:"portrait_portrait__image__3hWq3"}},6001:function(e){e.exports={showcase__card:"card_showcase__card__vZQzE",card__title:"card_card__title__qZ2N8",card__content:"card_card__content__2l2bR"}},8964:function(e){e.exports={showcase:"showcase_showcase__2Uv_K",showcase__flexrows:"showcase_showcase__flexrows__dWl0D"}},4298:function(e,n,t){e.exports=t(7926)},7268:function(e){e.exports="/_next/static/images/antsimulation-081464413209f7d910b727ca4ad737ae.jpg"},7335:function(e){e.exports="/_next/static/images/console-icon-4f1212298759e9739f80406a377720ba.jpg"},6748:function(e){e.exports="/_next/static/images/me-4e0ca79716f2dc746f9a09cd3cbdab63.jpg"}},function(e){e.O(0,[581,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);