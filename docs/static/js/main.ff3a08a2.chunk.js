(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),r=n.n(c),i=(n(15),n(2)),s=n(10),u=n(0),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],j=c[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(e){r.trim().length>2?(t((function(e){return[r].concat(Object(s.a)(e))})),j("")):alert("Please enter a value"),e.preventDefault()},children:[Object(u.jsx)("label",{children:"Search"}),Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){j(e.target.value)},placeholder:"New Category"}),Object(u.jsx)("input",{type:"submit",value:"Add"})]})})},o=n(7),l=n(6),d=n.n(l),b=n(9),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&lImit=20&api_key=1ywURhrBl5cdf1Eqb0nCB2PLVy7Yme9o"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" ",t," "]}),r&&Object(u.jsx)("p",{className:"animate__animated  animate__shakeX",children:"Cargando..."}),Object(u.jsx)("div",{className:"container",children:c.map((function(e){return Object(a.createElement)(p,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})]})};var O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"animate__animated animate__bounce",children:"Gif Expert App"}),Object(u.jsx)("hr",{}),Object(u.jsx)(j,{setCategories:c}),n.map((function(e){return Object(u.jsx)(h,{category:e},e)}))]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ff3a08a2.chunk.js.map