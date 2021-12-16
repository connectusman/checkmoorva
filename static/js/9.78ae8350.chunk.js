(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1337:function(e,t,n){"use strict";n.r(t);var r,c,o,a,s,i,u,b,j,l,d,p=n(8),f=n(1),O=n(2),x=n(4),h=n(85),m=n(13),g=n(235),v=Object(x.e)(O.Y)(r||(r=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),y=n(0),C=Object(x.e)(O.l)(c||(c=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),w=function(){var e=Object(m.b)().t;return Object(y.jsx)(C,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(O.S,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(O.l,{pr:"32px",children:[Object(y.jsx)(O.U,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),Object(y.jsx)(O.U,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the Moorex Ecosystem")}),Object(y.jsx)(O.o,{startIcon:Object(y.jsx)(O.Ib,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},S=Object(x.e)(O.l)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),I=function(){var e=Object(m.b)().t;return Object(y.jsx)(S,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(O.S,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(O.l,{pr:"32px",children:[Object(y.jsx)(O.U,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),Object(y.jsx)(O.ac,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),Object(y.jsx)(O.ac,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(y.jsx)(O.o,{startIcon:Object(y.jsx)(O.Ib,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},k=n(6),M=n(10),E=n(66),T=n(364),L=n(798),N=n(111),A=n(771),D=n(829),P=n(799),U=n.n(P),V=n(772),B=Object(x.e)(O.S)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),J=x.e.div(s||(s=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),B),G=function(){return Object(y.jsx)(J,{children:U()(V.d).map((function(e){return Object(y.jsxs)(B,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(y.jsxs)(O.l,{style:{flex:1},children:[Object(y.jsx)(O.Mb,{height:"21px",width:"70%",mb:"4px"}),Object(y.jsx)(O.Mb,{height:"21px",width:"30%",mb:"4px"}),Object(y.jsx)(O.Mb,{height:"21px",width:"40%"})]}),Object(y.jsx)(O.Mb,{height:"32px",width:"32px"})]},e)}))})},H=x.e.div(i||(i=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.input})),R=function(e){switch(e){case N.b.COMMUNITY:return 1;case N.b.ALL:return 2;case N.b.CORE:default:return 0}},Y=function(e){var t=e.proposalType,n=e.onTypeChange,r=Object(m.b)().t;return Object(y.jsx)(H,{children:Object(y.jsxs)(O.Xb,{activeIndex:R(t),onItemClick:function(e){n(function(e){switch(e){case 1:return N.b.COMMUNITY;case 2:return N.b.ALL;default:return N.b.CORE}}(e))},children:[Object(y.jsx)(O.Wb,{children:Object(y.jsxs)(O.S,{alignItems:"center",children:[Object(y.jsx)(O.mc,{color:"currentColor",mr:"4px"}),r("Core")]})}),Object(y.jsxs)(O.Wb,{children:[" ",Object(y.jsxs)(O.S,{alignItems:"center",children:[Object(y.jsx)(O.J,{color:"currentColor",mr:"4px"}),r("Community")]})]}),Object(y.jsx)(O.Wb,{children:"All"})]})})},F=n(18),W=n(747),X=function(e){var t=Object(F.default)(1e3*e);return Object(W.default)(t,"MMM do, yyyy HH:mm")},_=function(e){var t=e.startDate,n=e.endDate,r=e.proposalState,c=Object(m.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===N.a.CLOSED?Object(y.jsx)(O.ac,Object(k.a)(Object(k.a)({},o),{},{children:c("Ended %date%",{date:X(n)})})):r===N.a.PENDING?Object(y.jsx)(O.ac,Object(k.a)(Object(k.a)({},o),{},{children:c("Starts %date%",{date:X(t)})})):Object(y.jsx)(O.ac,Object(k.a)(Object(k.a)({},o),{},{children:c("Ends %date%",{date:X(n)})}))},z=n(813),Q=Object(x.e)(h.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),q=function(e){var t=e.proposal,n="/voting/proposal/".concat(t.id);return Object(y.jsxs)(Q,{to:n,children:[Object(y.jsxs)(O.l,{as:"span",style:{flex:1},children:[Object(y.jsx)(O.ac,{bold:!0,mb:"8px",children:t.title}),Object(y.jsx)(O.S,{alignItems:"center",mb:"8px",children:Object(y.jsx)(_,{startDate:t.start,endDate:t.end,proposalState:t.state})}),Object(y.jsxs)(O.S,{alignItems:"center",children:[Object(y.jsx)(z.a,{proposalState:t.state}),Object(y.jsx)(z.b,{isCoreProposal:Object(A.h)(t),ml:"8px"})]})]}),Object(y.jsx)(O.X,{variant:"text",children:Object(y.jsx)(O.e,{width:"24px"})})]})},K=Object(x.e)(O.S).attrs({alignItems:"center"})(b||(b=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),Z=x.e.label(j||(j=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),$=[{value:N.a.ACTIVE,label:"Vote Now"},{value:N.a.PENDING,label:"Soon"},{value:N.a.CLOSED,label:"Closed"}],ee=function(e){var t=e.filterState,n=e.onFilterChange,r=e.isLoading,c=Object(m.b)().t;return Object(y.jsx)(K,{children:$.map((function(e){var o=e.value,a=e.label;return Object(y.jsxs)(Z,{children:[Object(y.jsx)(O.Jb,{scale:"sm",value:o,checked:t===o,onChange:function(e){var t=e.currentTarget.value;n(t)},disabled:r}),Object(y.jsx)(O.ac,{ml:"8px",children:c(a)})]},a)}))})},te=function(){var e=Object(m.b)().t,t=Object(f.useState)({proposalType:N.b.CORE,filterState:N.a.ACTIVE}),n=Object(M.a)(t,2),r=n[0],c=n[1],o=Object(L.b)(),a=Object(L.c)(),s=Object(E.b)(),i=r.proposalType,u=r.filterState,b=o===N.d.LOADING,j=o===N.d.IDLE;Object(f.useEffect)((function(){s(Object(T.c)({first:1e3,state:u}))}),[u,s]);var l=Object(A.b)(Object(A.c)(a,i),u);return Object(y.jsxs)(g.a,{py:"40px",children:[Object(y.jsx)(O.l,{mb:"48px",children:Object(y.jsxs)(O.m,{children:[Object(y.jsx)(D.a,{to:"/",children:e("Home")}),Object(y.jsx)(O.ac,{children:e("Voting")})]})}),Object(y.jsx)(O.U,{as:"h2",scale:"xl",mb:"32px",children:e("Proposals")}),Object(y.jsxs)(O.s,{children:[Object(y.jsx)(Y,{proposalType:i,onTypeChange:function(e){c((function(t){return Object(k.a)(Object(k.a)({},t),{},{proposalType:e})}))}}),Object(y.jsx)(ee,{filterState:u,onFilterChange:function(e){c((function(t){return Object(k.a)(Object(k.a)({},t),{},{filterState:e})}))},isLoading:b}),b&&Object(y.jsx)(G,{}),j&&l.length>0&&l.map((function(e){return Object(y.jsx)(q,{proposal:e},e.id)})),j&&0===l.length&&Object(y.jsx)(O.S,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(y.jsx)(O.U,{as:"h5",children:e("No proposals found")})})]})]})},ne=x.e.div(l||(l=Object(p.a)(["\n  flex: none;\n"]))),re=x.e.div(d||(d=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));t.default=function(){return Object(y.jsxs)(O.S,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(y.jsx)(ne,{children:Object(y.jsx)(w,{})}),Object(y.jsx)(re,{children:Object(y.jsx)(te,{})}),Object(y.jsx)(ne,{children:Object(y.jsx)(I,{})})]})}},771:function(e,t,n){"use strict";n.d(t,"h",(function(){return x})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"g",(function(){return C})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return S}));var r=n(19),c=n(38),o=n(6),a=n(3),s=n.n(a),i=n(12),u=n(14),b=n.n(u),j=n(21),l=n(119),d=n(29),p=n(111),f=n(91),O=n(772),x=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},h=function(e,t){switch(t){case p.b.COMMUNITY:return e.filter((function(e){return!x(e)}));case p.b.CORE:return e.filter((function(e){return x(e)}));case p.b.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},g=function(){return{plugins:{},network:56,strategies:[{name:"Moorex",params:{symbol:"MOOVA",address:Object(j.f)(),decimals:18}}]}},v=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},y=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.d,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw r=e.sent,new Error(null===r||void 0===r?void 0:r.error_description);case 8:return e.next=10,n.json();case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r){var c,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,e.t0){e.next=5;break}return e.next=4,f.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return c=e.t0,e.next=8,fetch("".concat(l.e,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:c,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},n,e[n]?[].concat(Object(c.a)(e[n]),[t]):[t]))}),{})},S=function(e){return e.reduce((function(e,t){var n,r=new b.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(r)}),d.d)}},772:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var r=10,c="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},798:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(32),c=function(){var e=Object(r.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(r.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(r.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(r.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(r.c)((function(e){return e.voting.proposalLoadingStatus}))}},799:function(e,t,n){var r=n(468),c=n(830),o=n(831),a=4294967295,s=Math.min;e.exports=function(e,t){if((e=o(e))<1||e>9007199254740991)return[];var n=a,i=s(e,a);t=c(t),e-=a;for(var u=r(i,t);++n<e;)t(n);return u}},813:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(6),c=n(49),o=(n(1),n(184)),a=n(111),s=n(0),i=["proposalState"],u=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(c.a)(e,i);return t===a.a.ACTIVE?Object(s.jsx)(o.h,Object(r.a)({},n)):t===a.a.PENDING?Object(s.jsx)(o.g,Object(r.a)({},n)):Object(s.jsx)(o.a,Object(r.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(c.a)(e,u);return t?Object(s.jsx)(o.d,Object(r.a)({},n)):Object(s.jsx)(o.b,Object(r.a)({},n))}},829:function(e,t,n){"use strict";var r,c=n(8),o=n(85),a=n(4),s=Object(a.e)(o.a)(r||(r=Object(c.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryBright}));t.a=s},830:function(e,t,n){var r=n(170);e.exports=function(e){return"function"==typeof e?e:r}},831:function(e,t,n){var r=n(832);e.exports=function(e){var t=r(e),n=t%1;return t===t?n?t-n:t:0}},832:function(e,t,n){var r=n(470),c=1/0;e.exports=function(e){return e?(e=r(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}}}]);
//# sourceMappingURL=9.78ae8350.chunk.js.map