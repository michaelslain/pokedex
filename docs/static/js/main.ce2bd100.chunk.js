(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/title.5c8b7b80.svg"},function(e,t,n){e.exports=n.p+"static/media/search.90919396.svg"},,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/missingno.6bfa5f43.png"},function(e,t,n){e.exports=n.p+"static/media/logo.b8698716.svg"},function(e,t,n){e.exports=n(68)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){var a={"./de.json":35,"./en.json":16,"./fr.json":36,"./ja.json":37,"./ko.json":38,"./ru.json":39,"./zh-hans.json":40,"./zh-hant.json":41};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=34},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),s=(n(29),n(1)),l=(n(30),n(8)),i=n.n(l);n(31);function u(){return a.createElement("img",{src:i.a,alt:"Pok\xe9dex",className:"title"})}var m=n(9),f=n.n(m),d=n(6),p=n.n(d);n(42);function E(e){var t=e.text,n=e.onChangeQuery,r=e.input;return a.createElement("div",{className:"recommendation",onClick:function(){n(t),r.current.focus()}},t)}n(43);function g(e){var t=e.value,n=e.onChangeQuery,r=e.input,c=a.useState({display:"none"}),o=Object(s.a)(c,2),l=o[0],i=o[1],u=a.useState([]),m=Object(s.a)(u,2),f=m[0],d=m[1];return a.useEffect((function(){""===t?i({display:"none"}):(i({display:"block"}),function(){var e=p.a.all().filter((function(e){return!0===e.toLowerCase().includes(t)}));d(e)}())}),[t]),a.createElement("div",{className:"drop-down",style:l},f.map((function(e,t){return a.createElement(E,{key:t,text:e.toLowerCase(),onChangeQuery:n,input:r})})))}n(44);var k=n(5);function h(){var e=a.useState(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=a.useState({borderRadius:50}),o=Object(s.a)(c,2),l=o[0],i=o[1],u=a.useRef(null),m=Object(k.f)();return a.useEffect((function(){i(""===n?{borderRadius:50}:{borderRadius:"20px 20px 0 0"})}),[n]),a.createElement(a.Fragment,null,a.createElement("div",{className:"search-bar",style:l},a.createElement("img",{src:f.a,alt:"Q",className:"search-icon"}),a.createElement("input",{ref:u,type:"text",className:"search-input",value:n,onChange:function(e){return r(e.target.value.toLowerCase())},onKeyPress:function(e){var t=e.keyCode,n=e.which,a=e.target;13===(t||n)&&m.push("/pokemon/"+a.value)}})),a.createElement(g,{value:n,onChangeQuery:r,input:u}))}n(50);var b=n(3);function v(){return a.createElement(b.b,{to:"/pokemon",className:"all-pokemon-link"},"See all Pok\xe9mon")}n(51);function N(){return a.createElement("div",{className:"browser-container"},a.createElement(u,null),a.createElement(h,null),a.createElement(v,null))}var y=n(14),w=n.n(y),x=n(21);n(53),n(54);function j(){return a.createElement("h1",{className:"loading-msg"},"Loading",a.createElement("font",{className:"dot one"},"."),a.createElement("font",{className:"dot two"},"."),a.createElement("font",{className:"dot three"},"."))}n(55);function C(){return a.createElement("h1",{className:"err-msg"},"Not an existing Pok\xe9mon :D")}n(56);function O(e){var t=e.type,n=a.useState({}),r=Object(s.a)(n,2),c=r[0],o=r[1];return a.useEffect((function(){switch(t){case"normal":o({background:"#9c9c9c"});break;case"fighting":o({background:"#c46464"});break;case"flying":o({background:"#6f8fa6"});break;case"poison":o({background:"#953ba3"});break;case"ground":o({background:"#c98d00"});break;case"rock":o({background:"#827351"});break;case"bug":o({background:"#427a59"});break;case"ghost":o({background:"#521d8f"});break;case"steel":o({background:"#636363"});break;case"fire":o({background:"#ff8800"});break;case"water":o({background:"#0088ff"});break;case"grass":o({background:"#009e35"});break;case"electric":o({background:"#ffe600"});break;case"psychic":o({background:"#6100c2"});break;case"ice":o({background:"#009ec2"});break;case"dragon":o({background:"#461775"});break;case"dark":o({background:"#212121"});break;case"fairy":o({background:"#e80093"})}}),[]),a.createElement("button",{className:"type",style:c},t)}n(57);function R(e){var t=e.info.stats(),n=t.speed,r=t.specialdefense,c=t.specialattack,o=t.defense,s=t.attack,l=t.hp;return a.createElement("div",{className:"stats"},a.createElement("p",{className:"stat"},a.createElement("font",{className:"key"},"HP:")," ",l),a.createElement("p",{className:"stat"},a.createElement("font",{className:"key"},"Defense:")," ",o),a.createElement("p",{className:"stat"},a.createElement("font",{className:"key"},"Attack:")," ",s),a.createElement("p",{className:"stat"},a.createElement("font",{className:"key"},"Speed:")," ",n),a.createElement("p",{className:"stat"},a.createElement("font",{className:"key"},"Special Defense:")," ",r),a.createElement("p",{className:"stat"},a.createElement("font",{className:"key"},"Special Attack:")," ",c))}n(58);function S(e){var t=e.info;return a.createElement("div",{className:"info-container"},a.createElement("h1",{className:"num"},t.num+"."),a.createElement("h1",{className:"name"},t.name),a.createElement("p",{className:"weight"},"Weight: ",t.weight),a.createElement("div",{className:"type-gallery"},t.types.map((function(e,t){return a.createElement(O,{key:t,type:e})}))),a.createElement(R,{info:t}))}var P=n(22),Q=n.n(P);n(59);function L(e){var t=e.text,n=e.onChangeQuery,r=e.input;return a.createElement("div",{className:"header-recommendation",onClick:function(){n(t),r.current.focus()}},t)}n(60);function F(e){var t=e.value,n=e.onChangeQuery,r=e.bar,c=e.input,o=a.useState({display:"none"}),l=Object(s.a)(o,2),i=l[0],u=l[1],m=a.useState([]),f=Object(s.a)(m,2),d=f[0],E=f[1];return a.useEffect((function(){if(""===t)u({display:"none"});else{var e=r.current.getBoundingClientRect();u({display:"block",left:e.left+"px"}),function(){var e=p.a.all().filter((function(e){return!0===e.toLowerCase().includes(t)}));E(e)}()}}),[t]),a.createElement("div",{className:"header-drop-down",style:i},d.map((function(e,t){return a.createElement(L,{key:t,text:e.toLowerCase(),onChangeQuery:n,input:c})})))}n(61);function _(e){var t=e.onReload,n=a.useState(""),r=Object(s.a)(n,2),c=r[0],o=r[1],l=a.useState({borderRadius:50}),i=Object(s.a)(l,2),u=i[0],m=i[1],d=a.useRef(null),p=a.useRef(null),E=Object(k.f)();return a.useEffect((function(){m(""===c?{borderRadius:50}:{borderRadius:"20px 20px 0 0"})}),[c]),a.createElement(a.Fragment,null,a.createElement("div",{ref:d,className:"header-search-bar",style:u},a.createElement("img",{src:f.a,alt:"Q",className:"header-search-icon"}),a.createElement("input",{ref:p,type:"text",className:"header-search-input",value:c,onChange:function(e){return o(e.target.value.toLowerCase())},onKeyPress:function(e){var n=e.keyCode,a=e.which,r=e.target;13===(n||a)&&(E.push("/pokemon/"+r.value),t())}})),a.createElement(F,{value:c,onChangeQuery:o,bar:d,input:p}))}var A=n(23),D=n.n(A);n(62);function I(e){var t=e.onReload;return a.createElement("div",{className:"header"},a.createElement("div",{className:"header-container"},a.createElement(b.b,{to:"/"},a.createElement("img",{src:i.a,alt:"Pok\xe9dex",className:"header-logo"})),a.createElement(b.b,{to:"/"},a.createElement("img",{src:D.a,alt:"Pok\xe9dex",className:"header-mini-logo"})),a.createElement(_,{onReload:t})))}n(63);function B(e){var t=e.info;return a.createElement("div",{className:"img-container"},a.createElement("img",{src:t.img,alt:t.name,className:"img"}))}n(64);function U(){var e={name:"MissingNo.",img:Q.a,num:"",weight:"N\u0341\u0340\u031c\u0330a\u0301\u030e\u0353\u032bN\u034b\u0343\u0313\u0345\u035f\u0330",types:["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"],stats:function(){return{speed:"N\u0302\u033d\u034b\u0313\u032f\u034e\u035f\u0355a\u0358\u0351\u032e\u032dN\u034c\u032f",specialdefense:"N\u0340\u030b\u0361\u032b\u034e\u0349aN\u0312\u0308\u0361\u0343\u032b\u0327\u035c\u0332",specialattack:"Na\u0360\u0329N\u030f\u0326",defense:"N\u0357\u0350\u0314\u032d\u031e\u031da\u0358\u031b\u031f\u0325N\u0314\u0341\u0303\u031f\u033a\u032c",attack:"Na\u0305\u0351\u0305\u030e\u035a\u0332\u031d\u0348N\u0350\u030b\u031a\u0346\u0339\u032a\u031d\u0354",hp:"N\u030d\u0313\u035c\u0355a\u033f\u0320N"}}};return a.createElement(a.Fragment,null,a.createElement(I,null),a.createElement("div",{className:"overall-info-container"},a.createElement(B,{info:e}),a.createElement(S,{info:e})))}function W(e){var t=e.onReload,n=a.useState(null),r=Object(s.a)(n,2),c=r[0],o=r[1],l=Object(k.g)().query;function i(){return(i=Object(x.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://pokeapi.co/api/v2/pokemon/"+l).then((function(e){return 200===e.status?e.json():"RIP"})).then((function(e){"RIP"===e?o(e):u(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){var t=e.species,n=e.sprites,a=e.id,r=e.weight,c=e.types,s=e.stats,l={name:t.name.charAt(0).toUpperCase()+t.name.slice(1),img:n.front_default,num:a,weight:69===r?r+" \ud83d\udc4d":r,types:c.map((function(e){return e.type.name})),stats:function(){var e={};return s.forEach((function(t){var n=69===t.base_stat?t.base_stat+" \ud83d\udc4d":t.base_stat,a=t.stat.name.replace(/-/g,"");e[a]=n})),e}};o(l)}return a.useEffect((function(){!function(){i.apply(this,arguments)}()}),[]),null===c?a.createElement(j,null):"missing no"===l?a.createElement(U,null):"missingno"===l?a.createElement(U,null):"missingno."===l?a.createElement(U,null):"missing no."===l?a.createElement(U,null):"RIP"===c?a.createElement(C,null):a.createElement(a.Fragment,null,a.createElement(I,{onReload:t}),a.createElement("div",{className:"overall-info-container"},a.createElement(B,{info:c}),a.createElement(S,{info:c})))}var q=n(10);n(65);function z(e){var t=e.text;return a.createElement(b.b,{to:"/pokemon/"+t.toLowerCase(),className:"all-pokemon-element"},t)}n(66);function J(e){var t=e.title,n=e.elements;return a.createElement(a.Fragment,null,a.createElement("h1",{className:"category-title"},t),a.createElement("div",{className:"element-gallery"},n.map((function(e,t){return a.createElement(z,{key:t,text:e})}))))}n(67);function K(){var e=a.useState(null),t=Object(s.a)(e,2),n=t[0],r=t[1];if(a.useEffect((function(){var e=p.a.all(),t=q.upper,n={};t.forEach((function(e){n[e]=[]})),e.forEach((function(e){var t=e.charAt(0);n[t].push(e)})),r(n)}),[]),null===n)return a.createElement(j,null);var c=[];for(var o in q.upper){var l=q.upper[o],i=a.createElement(J,{key:o,title:l,elements:n[l]});c.push(i)}return a.createElement(a.Fragment,null,a.createElement(I,null),a.createElement("div",{className:"all-pokemon-container"},a.createElement("h1",{className:"all-pokemon-heading"},"All Pok\xe9mon"),a.createElement("div",{className:"heading-line"}),c))}var M=function(){var e=r.a.useState(1),t=Object(s.a)(e,2),n=t[0],a=t[1];function c(){a(n+1)}return r.a.createElement(b.a,null,r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/",exact:!0,component:N}),r.a.createElement(k.a,{path:"/pokemon",exact:!0,component:K}),r.a.createElement(k.a,{path:"/pokemon/:query",component:function(){return r.a.createElement(W,{onReload:c})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.ce2bd100.chunk.js.map