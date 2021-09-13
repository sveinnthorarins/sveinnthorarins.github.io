(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{266:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(5893),s=t(9008),i=t(6748),a=t.n(i),c=t(6670),o=t.n(c);function l(){return(0,r.jsx)("img",{style:{width:"100%",height:"100%"},className:o().portrait__image,src:a(),alt:"Image of Sveinn Thorarinsson"})}var d=t(36),h=t.n(d);function _(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Hello! I'm ",(0,r.jsx)("span",{className:h().line1,children:"Sveinn"}),"."]}),(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("span",{className:h().line2,children:"fresh university graduate"})]}),(0,r.jsxs)("p",{children:["with a ",(0,r.jsx)("span",{className:h().line3,children:"B.Sc. degree"})]}),(0,r.jsxs)("p",{children:["in ",(0,r.jsx)("span",{className:h().line4,children:"Software Engineering"})]}),(0,r.jsxs)("p",{children:["from the ",(0,r.jsx)("span",{className:h().line5,children:"University of Iceland"}),"."]})]})}var u=t(146),f=t.n(u),m=t(4298),x=t(7294);function j(e){var n=(0,x.useRef)(null);return(0,x.useEffect)((function(){!function e(){try{FallingStarsGameData&&FallingStarsGameData.updateContainer(n.current)}catch(t){setTimeout((function(){return e()}),100)}}()}),[n]),(0,r.jsx)("div",{className:e.className,ref:n})}function p(){return(0,r.jsxs)("section",{className:f().introduction,children:[(0,r.jsx)(j,{className:f().canvas}),(0,r.jsx)("div",{className:f().portrait,children:(0,r.jsx)(l,{})}),(0,r.jsx)("div",{className:f().greeting,children:(0,r.jsx)(_,{})}),(0,r.jsx)("div",{className:f().arrowcontainer,onClick:function(){var e=document.getElementById("projects");null!==e&&window.scroll({behavior:"smooth",left:0,top:e.offsetTop-.15*window.innerHeight})},children:(0,r.jsx)("div",{className:f().arrow})}),(0,r.jsx)(m.default,{src:"/fsbundle.js"})]})}var g=t(7451),v=t(9706),b=t(5651),w=t(8964),N=t.n(w);function k(e){return(0,r.jsx)("div",{className:N().showcase,children:(0,r.jsx)("div",{className:N().showcase__flexrows,children:e.children})})}var y=t(6001),S=t.n(y),T=t(1664),E=t(3603);function A(e){return void 0===e.href?(0,r.jsxs)("div",{className:S().showcase__card,children:[(0,r.jsx)("img",{style:{width:"100%",height:"100%"},src:e.imageSrc,alt:e.imageAlt}),(0,r.jsx)(E.Z,{className:S().card__codetag,codeLangOrTech:e.codeLangOrTech}),(0,r.jsx)("div",{className:S().card__content,children:(0,r.jsx)("p",{className:S().card__title,children:e.title})})]}):(0,r.jsx)(T.default,{href:e.href,children:(0,r.jsxs)("a",{className:S().showcase__card,children:[(0,r.jsx)("img",{style:{width:"100%",height:"100%"},src:e.imageSrc,alt:e.imageAlt}),(0,r.jsx)(E.Z,{className:S().card__codetag,codeLangOrTech:e.codeLangOrTech}),(0,r.jsx)("div",{className:S().card__content,children:(0,r.jsx)("p",{className:S().card__title,children:e.title})})]})})}var Z=t(7757),O=t.n(Z);function P(e,n,t,r,s,i,a){try{var c=e[i](a),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,s)}function H(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function a(e){P(i,r,s,a,c,"next",e)}function c(e){P(i,r,s,a,c,"throw",e)}a(void 0)}))}}var I=t(8890),C=t.n(I),L=t(6962),F=t.n(L);function M(e){return(0,r.jsx)("div",{className:F().wrapper,children:(0,r.jsx)("div",{className:F().list,children:e.children})})}function B(){var e=(0,x.useState)(!1),n=e[0],t=e[1],s=(0,x.useState)(!1),i=s[0],a=s[1],c=(0,x.useState)(null),o=c[0],l=c[1];return(0,x.useEffect)((function(){function e(e){return n.apply(this,arguments)}function n(){return(n=H(O().mark((function n(r){var s,i,c;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r&&t(!0),r&&a(!1),s=!0,n.prev=3,n.next=6,fetch("https://sveinnthorarins-kattis-scraper.herokuapp.com/");case 6:if((c=n.sent).ok){n.next=9;break}throw new Error("result not ok");case 9:return n.next=11,c.json();case 11:i=n.sent,n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(3),r&&a(!0),n.abrupt("return");case 18:return n.prev=18,r&&t(!1),n.finish(18);case 21:i.old&&(s=!1,setTimeout((function(){return e(!1)}),6e4)),(r||s)&&l(i.solvedProblems);case 23:case"end":return n.stop()}}),n,null,[[3,14,18,21]])})))).apply(this,arguments)}e(!0)}),[]),i?(0,r.jsx)("p",{className:C().message,children:"Couldn't fetch the solved problems at this time. \ud83d\ude41"}):n?(0,r.jsx)(M,{children:(0,r.jsxs)("table",{className:C().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)("div",{className:C().skeleton__fitcontent,children:"Name"})}),(0,r.jsx)("th",{children:(0,r.jsx)("div",{className:C().skeleton__fitcontent,children:"Fastest"})}),(0,r.jsx)("th",{children:(0,r.jsx)("div",{className:C().skeleton__fitcontent,children:"Min\xa0\xa0"})}),(0,r.jsx)("th",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"})]})}),(0,r.jsx)("tbody",{children:Array(15).fill(null).map((function(e,n){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:C().skeleton__long,children:"\xa0"})}),(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:C().skeleton__fitcontent,children:"0.00\xa0s"})}),(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:C().skeleton__fitcontent,children:"0.00\xa0s"})}),(0,r.jsx)("td",{children:"\xa0"})]},n)}))})]})}):o?(0,r.jsx)(M,{children:(0,r.jsxs)("table",{className:C().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Fastest"}),(0,r.jsx)("th",{children:"Mine"}),(0,r.jsx)("th",{children:"\xa0"})]})}),(0,r.jsx)("tbody",{children:o&&o.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.name})}),(0,r.jsx)("td",{children:e.fastest}),(0,r.jsx)("td",{children:e.mine}),(0,r.jsx)("td",{children:null===e.topplace||null===e.tophref?void 0:(0,r.jsx)("a",{href:e.tophref,target:"_blank",rel:"noreferrer",children:"Top ".concat(e.topplace)})})]},e.id)}))})]})}):(0,r.jsx)("p",{className:C().message,children:"No solved problems."})}var Y=t(250),q=t(7268),z=t.n(q),G=t(7335),K=t.n(G);function R(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Sveinn Thorarinsson"}),(0,r.jsx)("meta",{name:"description",content:"Personal Portfolio Website"})," ",(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{children:[(0,r.jsx)(p,{}),(0,r.jsxs)(g.Z,{id:"projects",children:[(0,r.jsx)(v.Z,{children:"Personal Projects"}),(0,r.jsxs)(b.Z,{children:["In my spare time I enjoy turning my ideas and curiosities into programming projects. Some projects make my life easier in some way and others are solely for the purpose of fun and learning. Here below you can find detailed information about some of my bigger projects. Visit ",(0,r.jsx)("a",{href:"https://github.com/sveinnthorarins",rel:"noreferrer",target:"_blank",children:"my GitHub"})," for a more comprehensive list including smaller projects."]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(A,{title:"Ant Foraging Simulation",codeLangOrTech:"typescript",href:"/project/ant-foraging-simulation",imageSrc:z(),imageAlt:"Ant simulation project in action"}),(0,r.jsx)(A,{title:"Minecraft Server Sleep Manager",codeLangOrTech:"c++",href:"/project/minecraft-server-sleep-manager",imageSrc:K(),imageAlt:"Console application icon"})]})]}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{children:"Solved Coding Problems"}),(0,r.jsxs)(b.Z,{children:["I also love taking a crack at solving complex coding problems. The feeling you get when you finally solve an extremely hard problem that you've been thinking about for days is just so thrilling! I've found that the best sources of such problems are online judge platforms for competitive programming. Here below you can see a daily-updated list of the problems I've solved (using C++) on the online judge platform ",(0,r.jsx)("a",{href:"https://www.kattis.com/",rel:"noreferrer",target:"_blank",children:"Kattis"}),"."]}),(0,r.jsx)(B,{})]}),(0,r.jsx)(Y.Z,{})]})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(266)}])},36:function(e){e.exports={line1:"greeting_line1__1ygkY","rotate-color-theme":"greeting_rotate-color-theme__aVsom",line2:"greeting_line2__34xhM",line3:"greeting_line3__3lYk2",line4:"greeting_line4__1eHVL",line5:"greeting_line5__2zGMH","rotate-color-wheel":"greeting_rotate-color-wheel__3EJY2"}},146:function(e){e.exports={canvas:"introduction_canvas__3JdYf",introduction:"introduction_introduction__3xSKV",arrowcontainer:"introduction_arrowcontainer__1byOw",verticalbob:"introduction_verticalbob__OAhbE",arrow:"introduction_arrow__2AleR",portrait:"introduction_portrait__2qcfh",greeting:"introduction_greeting__3byeT"}},8890:function(e){e.exports={message:"kattissolvedproblems_message__1R7Bj",table:"kattissolvedproblems_table__2bXKH",skeleton__fitcontent:"kattissolvedproblems_skeleton__fitcontent__17vJq",loading:"kattissolvedproblems_loading__bAzje",skeleton__long:"kattissolvedproblems_skeleton__long__2Nzwf"}},6670:function(e){e.exports={portrait__image:"portrait_portrait__image__3hWq3"}},6962:function(e){e.exports={wrapper:"scrolllist_wrapper__BBdHc",list:"scrolllist_list__2Fyxr"}},6001:function(e){e.exports={showcase__card:"card_showcase__card__vZQzE",card__codetag:"card_card__codetag__x4Yyp",card__title:"card_card__title__qZ2N8",card__content:"card_card__content__2l2bR"}},8964:function(e){e.exports={showcase:"showcase_showcase__2Uv_K",showcase__flexrows:"showcase_showcase__flexrows__dWl0D"}},4298:function(e,n,t){e.exports=t(7926)},7268:function(e){e.exports="/_next/static/images/antsimulation-081464413209f7d910b727ca4ad737ae.jpg"},7335:function(e){e.exports="/_next/static/images/console-icon-4f1212298759e9739f80406a377720ba.jpg"},6748:function(e){e.exports="/_next/static/images/me-4e0ca79716f2dc746f9a09cd3cbdab63.jpg"}},function(e){e.O(0,[116,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);