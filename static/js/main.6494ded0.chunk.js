(this["webpackJsonpcio-gamble"]=this["webpackJsonpcio-gamble"]||[]).push([[0],{126:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(52),i=t.n(r),o=t(4),s=t(49),d=t(15),b=t(21),j=t.n(b),u=t(39),l=t(66),p=t(62);t(118),t(127);p.a.initializeApp({apiKey:"AIzaSyBgXjC6U_F9j2pW5XV19fZBPq2XKpvSu88",authDomain:"cio-gamble.firebaseapp.com",projectId:"cio-gamble",storageBucket:"cio-gamble.appspot.com",messagingSenderId:"114672325138",appId:"1:114672325138:web:f2d5b89e884934063b3ecb"});var f,h,x,O,g,m=p.a,w=p.a.auth(),v=p.a.firestore(),k=t(144),y=t(140),S=t(139),D=t(151),z=t(102),C=t(147),A=t(53),R=t(138),F=t(150),E=t(141),B=t(142),I=t(54),N=t(3),L=I.a.div(f||(f=Object(A.a)(["\n  height: 100%;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: linear-gradient(\n    124deg,\n    #ff2400,\n    #e81d1d,\n    #e8b71d,\n    #e3e81d,\n    #1de840,\n    #1ddde8,\n    #2b1de8,\n    #dd00f3,\n    #dd00f3\n  );\n  color: #ffffff;\n  background-size: 1800% 1800%;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n\n  -webkit-animation: rainbow 18s ease infinite;\n  -z-animation: rainbow 18s ease infinite;\n  -o-animation: rainbow 18s ease infinite;\n  animation: rainbow 18s ease infinite;\n\n  @-webkit-keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n  @-moz-keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n  @-o-keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n  @keyframes rainbow {\n    0% {\n      background-position: 0% 82%;\n    }\n    50% {\n      background-position: 100% 19%;\n    }\n    100% {\n      background-position: 0% 82%;\n    }\n  }\n"]))),q=I.a.div(h||(h=Object(A.a)(["\n  background-color: #c0c0c0;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),U=I.a.div(x||(x=Object(A.a)(["\n  background-color: #ffd700;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),W=I.a.div(O||(O=Object(A.a)(["\n  background-color: #b08d57;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),P=I.a.div(g||(g=Object(A.a)(["\n  background-color: #d3d3d3;\n  color: #ffffff;\n  border-radius: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-bottom: 4px;\n"]))),T=function(e){var n=e.board;return Object(N.jsx)(R.a,{spacing:3,children:n.sort((function(e,n){return n.coin-e.coin})).map((function(e,n){return Object(N.jsx)(R.b,{children:Object(N.jsxs)(S.a,{children:[Object(N.jsx)(F.a,{src:e.photoURL}),Object(N.jsx)(y.a,{children:Object(N.jsxs)(y.a,{ml:"5",children:[Object(N.jsxs)(E.a,{fontWeight:"bold",children:[0===n?Object(N.jsxs)(N.Fragment,{children:["\ud83e\udd47",e.displayName]}):1===n?Object(N.jsxs)(N.Fragment,{children:["\ud83e\udd48",e.displayName]}):2===n?Object(N.jsxs)(N.Fragment,{children:["\ud83e\udd49",e.displayName]}):Object(N.jsx)(N.Fragment,{children:e.displayName}),Object(N.jsx)(B.a,{ml:2,colorScheme:"",children:0===n?Object(N.jsxs)(L,{children:[n+1,"\ub4f1"]}):1===n?Object(N.jsxs)(U,{children:[n+1,"\ub4f1"]}):2===n?Object(N.jsxs)(q,{children:[n+1,"\ub4f1"]}):3===n?Object(N.jsxs)(W,{children:[n+1,"\ub4f1"]}):Object(N.jsxs)(P,{children:[n+1,"\ub4f1"]})})]}),Object(N.jsx)(E.a,{fontSize:"sm",children:e.coin})]})})]})},e.id)}))})},M=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(E.a,{as:"i",children:"\ud83d\udcb8 \ucfe0\ud3f0 5\uac1c \uc774\ubca4\ud2b8 \uc99d\uc815!"}),Object(N.jsx)("br",{}),Object(N.jsx)(E.a,{as:"i",children:"\ud83c\udfb0 \ud655\ub960 5% \uc7ad\ud31f, 20% \ud3c9\ud0c0, 80% \ub5a1\ub77d"})]})},V=t(143),X=function(e){var n=e.matchDocument;return Object(N.jsx)(y.a,{padding:"4",bg:"#FAF1E6",children:Object(N.jsxs)(V.b,{children:[Object(N.jsxs)(V.a,{children:[Object(N.jsx)(V.c,{children:"\ud83d\udcb8 \ubcf4\uc720 \ucf54\uc778"}),Object(N.jsx)(V.d,{children:n.coin})]}),Object(N.jsxs)(V.a,{children:[Object(N.jsx)(V.c,{children:"\ud83d\udcb3 \ubcf4\uc720 \ucfe0\ud3f0"}),Object(N.jsx)(V.d,{children:n.coupon})]})]})})},Y=function(e){var n=e.user,t=Object(c.useState)(0),a=Object(o.a)(t,2),r=a[0],i=a[1],s=Object(c.useState)(0),d=Object(o.a)(s,2),b=d[0],p=d[1],f=Object(c.useState)(!1),h=Object(o.a)(f,2),x=h[0],O=h[1],g=Object(c.useState)(!1),m=Object(o.a)(g,2),w=m[0],A=m[1],R=Object(c.useState)([]),F=Object(o.a)(R,2),E=F[0],B=F[1],I=Object(C.a)();Object(c.useEffect)((function(){v.collection("cio").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));B(n);var t=W(n);t&&(p(t.coupon),i(t.coin),O(t))}))}),[]),Object(c.useEffect)((function(){L()}),[]),Object(c.useEffect)((function(){x&&A(!U(x.couponTimeStamp))}),[x]);var L=function(){var e=Object(u.a)(j.a.mark((function e(){var n,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("cio").get();case 2:n=e.sent,t=[],n.forEach((function(e){t.push(e.data())})),void 0===W(t)&&q();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,v.collection("cio").add({coin:0,coupon:1,createdAt:Date.now(),updatedAt:Date.now(),couponTimeStamp:Date.now(),uid:n.uid,displayName:n.displayName,photoURL:n.photoURL});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){var n=new Date(1*e),t=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate());return console.log(t,n),t>n},W=function(e){return e.filter((function(e){return e.uid===n.uid}))[0]},P=function e(n,t){var c=new Uint8Array(1);window.crypto.getRandomValues(c);var a=t-n+1;return c[0]>=Math.floor(256/a)*a?e(n,t):n+c[0]%a},V=function(){var e=Object(u.a)(j.a.mark((function e(){var n,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=P(1,100),t=0,n>80?(t=P(20,35),(n=P(1,100))>90&&(t=P(40,50))):t=P(1,19),!(x&&b>0)){e.next=6;break}return e.next=6,v.doc("cio/".concat(x.id)).update({coin:r+t,coupon:b-1,updatedAt:Date.now()});case 6:I({title:"\ucf54\uc778\uc774 \uc801\ub9bd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",description:"\ucf54\uc778\uc774 ".concat(t,"\uac1c \uc801\ub9bd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),status:"success",duration:1e3,isClosable:!0});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(x&&r>=20)){e.next=3;break}return e.next=3,v.doc("cio/".concat(x.id)).update({coin:r-20,coupon:b+1,updatedAt:Date.now()});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)(k.a,{children:[Object(N.jsx)(X,{matchDocument:x}),Object(N.jsx)(y.a,{padding:"4",bg:"#f8eded",children:Object(N.jsxs)(S.a,{space:"4",children:[Object(N.jsx)(y.a,{children:w?Object(N.jsx)(D.a,{mr:"-px",bg:"#eeb76b",border:"2px",borderColor:"#E9AD03",onClick:V,disabled:!b,children:"\ud83d\udcb0 \ucf54\uc778 \uad6c\ub9e4"}):Object(N.jsx)(D.a,{bg:"#eeb76b",border:"2px",borderColor:"#E9AD03",onClick:function(){x&&(console.log(x),console.log())},children:"\ud83c\udf9f\ufe0f \ubb34\ub8cc \ucfe0\ud3f0 \ubc1b\uae30"})}),Object(N.jsx)(y.a,{children:Object(N.jsx)(z.a,{children:Object(N.jsx)(D.a,{bg:"#e798ae",border:"2px",ml:4,mr:"-px",borderColor:"#e4bad4",onClick:Y,disabled:!(r>=20),children:"\ud83c\udf9f\ufe0f \ucfe0\ud3f0 \uad6c\uc785(20\uc6d0)"})})})]})}),Object(N.jsx)(y.a,{padding:"4",bg:"#f6dfeb",children:Object(N.jsx)(T,{user:n,board:E})}),Object(N.jsx)(y.a,{padding:"4",bg:"#faf3f3",children:Object(N.jsx)(M,{})})]})},H=t(105),J=function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(n){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===n.target.name&&(t=new m.auth.GoogleAuthProvider),e.next=3,w.signInWithPopup(t);case 3:c=e.sent,console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(N.jsx)(k.a,{centerContent:!0,children:Object(N.jsx)(y.a,{padding:"4",bg:"gray.100",children:Object(N.jsx)(D.a,{leftIcon:Object(N.jsx)(H.a,{}),colorScheme:"messenger",onClick:e,name:"google",children:"\uad6c\uae00 \ub85c\uadf8\uc778"})})})},K=function(e){var n=e.user;return Object(N.jsx)(k.a,{children:Object(N.jsxs)(y.a,{padding:"4",bg:"gray.100",children:[Object(N.jsx)("li",{children:Object(N.jsx)("img",{src:n.photoURL})}),Object(N.jsxs)("li",{children:["\ub85c\uadf8\uc778\ud55c \uacc4\uc815 ",n.displayName]}),Object(N.jsxs)("li",{children:["\ub85c\uadf8\uc778\ud55c \uc774\uba54\uc77c ",n.email]}),Object(N.jsx)("button",{onClick:function(){return w.signOut()},children:"Log Out"})]})})},G=t(149),Z=function(){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),s=i[0],d=i[1],b=Object(c.useState)(""),p=Object(o.a)(b,2),f=p[0],h=p[1],x=function(e){"quiz"===e.target.name?d(e.target.value):"answer"===e.target.name&&h(e.target.value)};Object(c.useEffect)((function(){v.collection("cio").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));a(n)}))}),[]);var O,g,m=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach((function(e){v.doc("cio/".concat(e.id)).update({coupon:e.coupon+5,updatedAt:Date.now()})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(E.a,{mb:"8px",children:"\ud034\uc988"}),Object(N.jsx)(G.a,{value:s,onChange:x,placeholder:"Here is a sample placeholder",size:"sm",name:"quiz"}),Object(N.jsx)(E.a,{mb:"8px",children:"\uc815\ub2f5"}),Object(N.jsx)(G.a,{value:f,onChange:x,placeholder:"Here is a sample placeholder",size:"sm",name:"answer"}),Object(N.jsx)(D.a,{onClick:(O=s,g=f,void v.collection("quiz").add({quiz:O,answer:g,createdAt:Date.now(),updatedAt:Date.now()})),children:"\ud034\uc988 \ub4f1\ub85d"}),Object(N.jsx)(D.a,{onClick:m,children:"\ubb34\ub8cc \ucfe0\ud3f0 \uc99d\uc815"})]})},_=t(146),Q=function(e){var n=e.user;return Object(N.jsx)(k.a,{children:Object(N.jsx)(y.a,{padding:"4",bg:"#caf7e3",borderTopLeftRadius:5,borderTopRightRadius:5,children:Object(N.jsxs)(_.a,{fontWeight:"medium",fontSize:"sm",children:[Object(N.jsx)(_.b,{children:Object(N.jsx)(s.c,{to:"/",children:"\ud83c\udfe0 \ud648"})}),Object(N.jsx)(_.b,{children:Object(N.jsxs)(s.c,{to:"/profile",children:["\ud83e\udddf ",n.displayName,"\ub2d8 \ubc18\uac11\uc2b5\ub2c8\ub2e4!"]})}),"BlPR1gz2x6RuoIukzh3Vkq5YbyB2"===n.uid&&Object(N.jsx)(_.b,{children:Object(N.jsx)(s.c,{to:"/admin",children:"\uc6b4\uc601\uc790 \uba54\ub274"})})]})})})},$=function(e){var n=e.user;return Object(N.jsx)(s.a,{basename:"https://canine89.github.io/cio",children:Object(N.jsxs)(s.b,{children:[n&&Object(N.jsx)(Q,{user:n}),Object(N.jsxs)(d.d,{children:[n?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(d.b,{exact:!0,path:"/",children:Object(N.jsx)(Y,{user:n})}),Object(N.jsx)(d.b,{exact:!0,path:"/profile",children:Object(N.jsx)(K,{user:n})}),Object(N.jsx)(d.b,{exact:!0,path:"/admin",children:Object(N.jsx)(Z,{user:n})})]}):Object(N.jsx)(d.b,{exact:!0,path:"/",children:Object(N.jsx)(J,{})}),Object(N.jsx)(d.a,{from:"*",to:"/"})]})]})})},ee=t(148),ne=function(){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),s=i[0],d=i[1];return Object(c.useEffect)((function(){w.onAuthStateChanged((function(e){d(e||!1)})),a(!0)}),[]),Object(N.jsxs)(ee.a,{children:[t?Object(N.jsx)($,{user:s}):"initializing...",Object(N.jsx)(k.a,{children:Object(N.jsx)(y.a,{padding:"4",bg:"#e4bad4",borderBottomLeftRadius:5,borderBottomRightRadius:5,children:Object(N.jsxs)(E.a,{style:{color:"white",fontWeight:"bold"},children:["\ud83e\udd84 \ucd9c\uccb5\ucf54\uc778, ",(new Date).getFullYear()," "]})})})]})};i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(ne,{})}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.6494ded0.chunk.js.map