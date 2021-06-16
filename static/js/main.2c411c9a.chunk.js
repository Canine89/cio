(this["webpackJsonpcio-gamble"]=this["webpackJsonpcio-gamble"]||[]).push([[0],{124:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),a=t(51),i=t.n(a),o=t(7),s=t(52),d=t(13),b=t(27),j=t.n(b),u=t(46),l=t(93),p=t(61);t(116),t(125);p.a.initializeApp({apiKey:"AIzaSyBgXjC6U_F9j2pW5XV19fZBPq2XKpvSu88",authDomain:"cio-gamble.firebaseapp.com",projectId:"cio-gamble",storageBucket:"cio-gamble.appspot.com",messagingSenderId:"114672325138",appId:"1:114672325138:web:f2d5b89e884934063b3ecb"});var f,x,h,g,O,m=p.a,k=p.a.auth(),w=p.a.firestore(),v=t(141),y=t(138),S=t(137),D=t(145),C=t(100),A=t(143),R=t(53),z=t(136),E=t(146),F=t(139),N=t(140),I=t(54),L=t(3),B=I.a.div(f||(f=Object(R.a)(["\n  height: 100%;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: linear-gradient(\n    124deg,\n    #ff2400,\n    #e81d1d,\n    #e8b71d,\n    #e3e81d,\n    #1de840,\n    #1ddde8,\n    #2b1de8,\n    #dd00f3,\n    #dd00f3\n  );\n  color: #ffffff;\n  background-size: 1800% 1800%;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n\n  -webkit-animation: rainbow 18s ease infinite;\n  -z-animation: rainbow 18s ease infinite;\n  -o-animation: rainbow 18s ease infinite;\n  animation: rainbow 18s ease infinite;\n\n  @-webkit-keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n  @-moz-keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n  @-o-keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n  @keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n"]))),U=I.a.div(x||(x=Object(R.a)(["\n  background-color: #c0c0c0;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),W=I.a.div(h||(h=Object(R.a)(["\n  background-color: #ffd700;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),T=I.a.div(g||(g=Object(R.a)(["\n  background-color: #b08d57;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),M=I.a.div(O||(O=Object(R.a)(["\n  background-color: #d3d3d3;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),P=function(n){var e=n.board;return Object(L.jsx)(z.a,{spacing:3,children:e.sort((function(n,e){return e.coin-n.coin})).map((function(n,e){return Object(L.jsx)(z.b,{children:Object(L.jsxs)(S.a,{children:[Object(L.jsx)(E.a,{src:n.photoURL}),Object(L.jsx)(y.a,{children:Object(L.jsxs)(y.a,{ml:"5",children:[Object(L.jsxs)(F.a,{fontWeight:"bold",children:[0===e?Object(L.jsxs)(L.Fragment,{children:["\ud83e\udd47",n.displayName]}):1===e?Object(L.jsxs)(L.Fragment,{children:["\ud83e\udd48",n.displayName]}):2===e?Object(L.jsxs)(L.Fragment,{children:["\ud83e\udd49",n.displayName]}):Object(L.jsx)(L.Fragment,{children:n.displayName}),Object(L.jsx)(N.a,{ml:2,colorScheme:"",children:0===e?Object(L.jsxs)(B,{children:[e+1,"\ub4f1"]}):1===e?Object(L.jsxs)(W,{children:[e+1,"\ub4f1"]}):2===e?Object(L.jsxs)(U,{children:[e+1,"\ub4f1"]}):3===e?Object(L.jsxs)(T,{children:[e+1,"\ub4f1"]}):Object(L.jsxs)(M,{children:[e+1,"\ub4f1"]})})]}),Object(L.jsx)(F.a,{fontSize:"sm",children:n.coin})]})})]})},n.id)}))})},X=function(){return Object(L.jsx)(F.a,{as:"i",children:"\ud83c\udfb0 \ud655\ub960 5% \uc7ad\ud31f, 20% \ud3c9\ud0c0, 80% \ub5a1\ub77d"})},J=function(n){var e=n.user,t=Object(c.useState)(0),r=Object(o.a)(t,2),a=r[0],i=r[1],s=Object(c.useState)(0),d=Object(o.a)(s,2),b=d[0],p=d[1],f=Object(c.useState)(!1),x=Object(o.a)(f,2),h=x[0],g=x[1],O=Object(c.useState)(!1),m=Object(o.a)(O,2),k=m[0],R=m[1],z=Object(c.useState)([]),E=Object(o.a)(z,2),F=E[0],N=E[1],I=Object(A.a)();Object(c.useEffect)((function(){w.collection("cio").onSnapshot((function(n){var e=n.docs.map((function(n){return Object(l.a)({id:n.id},n.data())}));N(e);var t=T(e);t&&(p(t.coupon),i(t.coin),g(t))}))}),[]),Object(c.useEffect)((function(){B()}),[]),Object(c.useEffect)((function(){h&&R(!W(h.couponTimeStamp))}),[h]);var B=function(){var n=Object(u.a)(j.a.mark((function n(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.collection("cio").get();case 2:e=n.sent,t=[],e.forEach((function(n){t.push(n.data())})),void 0===T(t)&&U();case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),U=function(){var n=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=3;break}return n.next=3,w.collection("cio").add({coin:0,coupon:1,createdAt:Date.now(),updatedAt:Date.now(),couponTimeStamp:Date.now(),uid:e.uid,displayName:e.displayName,photoURL:e.photoURL});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(n){var e=new Date(1*n),t=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate());return console.log(t,e),t>e},T=function(n){return n.filter((function(n){return n.uid===e.uid}))[0]},M=function n(e,t){var c=new Uint8Array(1);window.crypto.getRandomValues(c);var r=t-e+1;return c[0]>=Math.floor(256/r)*r?n(e,t):e+c[0]%r},J=function(){var n=Object(u.a)(j.a.mark((function n(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=M(1,100),t=0,e>80?(t=M(20,35),(e=M(1,100))>90&&(t=M(40,50))):t=M(1,19),!(h&&b>0)){n.next=6;break}return n.next=6,w.doc("cio/".concat(h.id)).update({coin:a+t,coupon:b-1,updatedAt:Date.now()});case 6:I({title:"\ucf54\uc778\uc774 \uc801\ub9bd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",description:"\ucf54\uc778\uc774 ".concat(t,"\uac1c \uc801\ub9bd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),status:"success",duration:1e3,isClosable:!0});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),K=function(){var n=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(h&&a>20)){n.next=3;break}return n.next=3,w.doc("cio/".concat(h.id)).update({coin:a-20,coupon:b+1,updatedAt:Date.now()});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(L.jsxs)(v.a,{children:[Object(L.jsx)(y.a,{padding:"4",bg:"#f8eded",children:Object(L.jsxs)(S.a,{space:"4",children:[Object(L.jsx)(y.a,{children:k?Object(L.jsx)(D.a,{mr:"-px",bg:"#eeb76b",border:"2px",borderColor:"#E9AD03",onClick:J,disabled:!b,children:"\ud83d\udcb0 \ucf54\uc778 \uad6c\ub9e4"}):Object(L.jsx)(D.a,{bg:"#eeb76b",border:"2px",borderColor:"#E9AD03",onClick:function(){h&&(console.log(h),console.log())},children:"\ud83c\udf9f\ufe0f \ubb34\ub8cc \ucfe0\ud3f0 \ubc1b\uae30"})}),Object(L.jsx)(y.a,{children:Object(L.jsx)(C.a,{children:Object(L.jsxs)(D.a,{bg:"#e798ae",border:"2px",ml:4,mr:"-px",borderColor:"#e4bad4",onClick:K,children:["\ud83c\udf9f\ufe0f \ucfe0\ud3f0 \uad6c\uc785(",b,"\uc7a5 \ubcf4\uc720, 20\uc6d0)"]})})})]})}),Object(L.jsx)(y.a,{padding:"4",bg:"#f6dfeb",children:Object(L.jsx)(P,{user:e,board:F})}),Object(L.jsx)(y.a,{padding:"4",bg:"#faf3f3",children:Object(L.jsx)(X,{})})]})},K=t(103),V=function(){var n=function(){var n=Object(u.a)(j.a.mark((function n(e){var t,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"google"===e.target.name&&(t=new m.auth.GoogleAuthProvider),n.next=3,k.signInWithPopup(t);case 3:c=n.sent,console.log(c);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(L.jsx)(v.a,{centerContent:!0,children:Object(L.jsx)(y.a,{padding:"4",bg:"gray.100",children:Object(L.jsx)(D.a,{leftIcon:Object(L.jsx)(K.a,{}),colorScheme:"messenger",onClick:n,name:"google",children:"\uad6c\uae00 \ub85c\uadf8\uc778"})})})},Y=function(n){var e=n.user;return Object(L.jsx)(v.a,{children:Object(L.jsxs)(y.a,{padding:"4",bg:"gray.100",children:[Object(L.jsx)("li",{children:Object(L.jsx)("img",{src:e.photoURL})}),Object(L.jsxs)("li",{children:["\ub85c\uadf8\uc778\ud55c \uacc4\uc815 ",e.displayName]}),Object(L.jsxs)("li",{children:["\ub85c\uadf8\uc778\ud55c \uc774\uba54\uc77c ",e.email]}),Object(L.jsx)("button",{onClick:function(){return k.signOut()},children:"Log Out"})]})})},q=t(142),G=function(n){var e=n.user;return Object(L.jsx)(v.a,{children:Object(L.jsx)(y.a,{padding:"4",bg:"#caf7e3",borderTopLeftRadius:5,borderTopRightRadius:5,children:Object(L.jsxs)(q.a,{fontWeight:"medium",fontSize:"sm",children:[Object(L.jsx)(q.b,{children:Object(L.jsx)(s.c,{to:"/",children:"\ud648"})}),Object(L.jsx)(q.b,{children:Object(L.jsxs)(s.c,{to:"/profile",children:[e.displayName,"\ub2d8 \ubc18\uac11\uc2b5\ub2c8\ub2e4!"]})})]})})})},Z=function(n){var e=n.user;return Object(L.jsx)(s.a,{basename:"/cio",children:Object(L.jsxs)(s.b,{children:[e&&Object(L.jsx)(G,{user:e}),Object(L.jsxs)(d.d,{children:[e?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(d.b,{exact:!0,path:"/",children:Object(L.jsx)(J,{user:e})}),Object(L.jsx)(d.b,{exact:!0,path:"/profile",children:Object(L.jsx)(Y,{user:e})})]}):Object(L.jsx)(d.b,{exact:!0,path:"/",children:Object(L.jsx)(V,{})}),Object(L.jsx)(d.a,{from:"*",to:"/"})]})]})})},_=t(144),H=function(){var n=Object(c.useState)(!1),e=Object(o.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),s=i[0],d=i[1];return Object(c.useEffect)((function(){k.onAuthStateChanged((function(n){d(n||!1)})),r(!0)}),[]),Object(L.jsxs)(_.a,{children:[t?Object(L.jsx)(Z,{user:s}):"initializing...",Object(L.jsx)(v.a,{children:Object(L.jsx)(y.a,{padding:"4",bg:"#e4bad4",borderBottomLeftRadius:5,borderBottomRightRadius:5,children:Object(L.jsxs)(F.a,{style:{color:"white",fontWeight:"bold"},children:["\ud83e\udd84 \ucd9c\uccb5\ucf54\uc778, ",(new Date).getFullYear()," "]})})})]})};i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(H,{})}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.2c411c9a.chunk.js.map