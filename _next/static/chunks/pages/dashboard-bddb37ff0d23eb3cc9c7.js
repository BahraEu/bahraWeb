_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"1G7/":function(e,t,r){"use strict";var n=r("J4zp"),a=r("lSNA"),s=r("nKUr");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(r("q1tI")),d=o(r("uoyk")),u=r("VyGx");function f(e){return s.jsx(s.Fragment,{children:s.jsx("div",{children:s.jsxs(d.default,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:[s.jsx(u.Spinner,l({},e)),s.jsx(u.SpinnerPrecent,{children:"".concat(Math.round(e.value),"%")})]})})})}t.default=function(){var e=c.default.useState(30),t=n(e,2),r=t[0],a=t[1];return c.default.useEffect((function(){var e=setInterval((function(){a((function(e){return e>=100?90:e+60}))}),800);return function(){clearInterval(e)}}),[]),s.jsx(f,{value:r})}},NYfH:function(e,t,r){"use strict";var n=r("o0o1"),a=r("yXPU"),s=r("lSNA"),i=r("nKUr");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("mwnj"),u=r("k7Sn"),f=r("MD2z"),h=r("xg0D"),x=c(r("FL+C")),p=c(r("OcYQ")),m=(c(r("q1tI")),r("Uuew")),j=c(r("1G7/")),g=c(r("5IwB")),y=c(r("UpHi")),b=c(r("OOas")),v=function(e){var t=e.Children,r=e.currentUrl,n=e.currentLanguage,a=e.user,s=e.userID,l=e.t,c=m.useQuery(d.WP_USER,{variables:{id:s}}),u=c.loading,h=c.error,x=c.data;if(u)return i.jsx(j.default,{});if(h)return"Error! ".concat(h.message);if(x){var p=x.user;return console.log(p,a,l,s),i.jsx(i.Fragment,{children:i.jsxs(b.default,o(o({},t),{},{currentUrl:r,currentLanguage:n,children:[i.jsx(f.H1,{children:'"Dashboard"'}),i.jsx(y.default,{}),i.jsx(f.H1,{children:s})]}))})}};v.getInitialProps=function(){var e=a(n.mark((function e(t){var r,a,s;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("pageProps",t),r=h.isServer?t.req.path:"/Dashboard",a=h.isServer?t.req.language||u.i18n.language:localStorage.getItem(p.default.Language),s=h.isServer?x.default(t.req).userID:localStorage.getItem("userID"),e.abrupt("return",{namespacesRequired:["common"],namespaces:"common",t:void 0,userID:s,currentLanguage:a,currentUrl:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=g.default(u.withTranslation("common")(v))},QI6j:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r("NYfH")}])},UpHi:function(e,t,r){"use strict";var n=r("nKUr"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});a(r("q1tI"));var s=r("DfQ9"),i=a(r("pGlz")),l=a(r("URnb")),o=a(r("xV1m")),c=a(r("lFw3")),d=a(r("B7jU")),u=a(r("zjGP")),f=a(r("Dpg8")),h=a(r("MT4C")),x=a(r("vS8f")),p=a(r("lIm7")),m=a(r("8Koj")),j=a(r("jwjF")),g=a(r("mkMn")),y=a(r("/XvI")),b=a(r("yWm5")),v=a(r("1+h1")),w=a(r("UUOa")),O=a(r("733k")),C=a(r("uJC0")),N=a(r("OL8L")),_=a(r("+4l/")),S=a(r("VHb5")),P=r("TTf+"),k=s.makeStyles(S.default);t.default=function(){var e=k();return n.jsxs("div",{children:[n.jsxs(g.default,{children:[n.jsx(P.Grid,{xs:12,sm:6,md:3,children:n.jsxs(w.default,{children:[n.jsxs(O.default,{color:"warning",stats:!0,icon:!0,children:[n.jsx(C.default,{color:"warning",children:n.jsx(i.default,{children:"content_copy"})}),n.jsx("p",{className:e.cardCategory,children:"Used Space"}),n.jsxs("h3",{className:e.cardTitle,children:["49/50 ",n.jsx("small",{children:"GB"})]})]}),n.jsx(_.default,{stats:!0,children:n.jsxs("div",{className:e.stats,children:[n.jsx(o.default,{}),n.jsx("a",{href:"#pablo",onClick:function(e){return e.preventDefault()},children:"Get more space"})]})})]})}),n.jsx(P.Grid,{xs:12,sm:6,md:3,children:n.jsxs(w.default,{children:[n.jsxs(O.default,{color:"success",stats:!0,icon:!0,children:[n.jsx(C.default,{color:"success",children:n.jsx(l.default,{})}),n.jsx("p",{className:e.cardCategory,children:"Revenue"}),n.jsx("h3",{className:e.cardTitle,children:"$34,245"})]}),n.jsx(_.default,{stats:!0,children:n.jsxs("div",{className:e.stats,children:[n.jsx(c.default,{}),"Last 24 Hours"]})})]})}),n.jsx(P.Grid,{xs:12,sm:6,md:3,children:n.jsxs(w.default,{children:[n.jsxs(O.default,{color:"danger",stats:!0,icon:!0,children:[n.jsx(C.default,{color:"danger",children:n.jsx(i.default,{children:"info_outline"})}),n.jsx("p",{className:e.cardCategory,children:"Fixed Issues"}),n.jsx("h3",{className:e.cardTitle,children:"75"})]}),n.jsx(_.default,{stats:!0,children:n.jsxs("div",{className:e.stats,children:[n.jsx(d.default,{}),"Tracked from Github"]})})]})}),n.jsx(P.Grid,{xs:12,sm:6,md:3,children:n.jsxs(w.default,{children:[n.jsxs(O.default,{color:"info",stats:!0,icon:!0,children:[n.jsx(C.default,{color:"info",children:n.jsx(x.default,{})}),n.jsx("p",{className:e.cardCategory,children:"Followers"}),n.jsx("h3",{className:e.cardTitle,children:"+245"})]}),n.jsx(_.default,{stats:!0,children:n.jsxs("div",{className:e.stats,children:[n.jsx(u.default,{}),"Just Updated"]})})]})})]}),n.jsxs(g.default,{children:[n.jsx(P.Grid,{xs:12,sm:12,md:4,children:n.jsxs(w.default,{chart:!0,children:[n.jsx(O.default,{color:"success"}),n.jsxs(N.default,{children:[n.jsx("h4",{className:e.cardTitle,children:"Daily Sales"}),n.jsxs("p",{className:e.cardCategory,children:[n.jsxs("span",{className:e.successText,children:[n.jsx(f.default,{className:e.upArrowCardCategory})," 55%"]})," ","increase in today sales."]})]}),n.jsx(_.default,{chart:!0,children:n.jsxs("div",{className:e.stats,children:[n.jsx(h.default,{})," updated 4 minutes ago"]})})]})}),n.jsx(P.Grid,{xs:12,sm:12,md:4,children:n.jsxs(w.default,{chart:!0,children:[n.jsx(O.default,{color:"warning",children:"CardHeader"}),n.jsxs(N.default,{children:[n.jsx("h4",{className:e.cardTitle,children:"Email Subscriptions"}),n.jsx("p",{className:e.cardCategory,children:"Last Campaign Performance"})]}),n.jsx(_.default,{chart:!0,children:n.jsxs("div",{className:e.stats,children:[n.jsx(h.default,{})," campaign sent 2 days ago"]})})]})}),n.jsx(P.Grid,{xs:12,sm:12,md:4,children:n.jsxs(w.default,{chart:!0,children:[n.jsx(O.default,{color:"danger"}),n.jsxs(N.default,{children:[n.jsx("h4",{className:e.cardTitle,children:"Completed Tasks"}),n.jsx("p",{className:e.cardCategory,children:"Last Campaign Performance"})]}),n.jsx(_.default,{chart:!0,children:n.jsxs("div",{className:e.stats,children:[n.jsx(h.default,{})," campaign sent 2 days ago"]})})]})})]}),n.jsxs(g.default,{children:[n.jsx(P.Grid,{xs:12,sm:12,md:6,children:n.jsx(v.default,{title:"Tasks:",headerColor:"primary",tabs:[{tabName:"Bugs",tabIcon:p.default,tabContent:n.jsx(b.default,{checkedIndexes:[0,3],tasksIndexes:[0,1,2,3],tasks:"bugs"})},{tabName:"Website",tabIcon:m.default,tabContent:n.jsx(b.default,{checkedIndexes:[0],tasksIndexes:[0,1],tasks:"website"})},{tabName:"Server",tabIcon:j.default,tabContent:n.jsx(b.default,{checkedIndexes:[1],tasksIndexes:[0,1,2],tasks:"server"})}]})}),n.jsx(P.Grid,{xs:12,sm:12,md:6,children:n.jsxs(w.default,{children:[n.jsxs(O.default,{color:"warning",children:[n.jsx("h4",{className:e.cardTitleWhite,children:"Employees Stats"}),n.jsx("p",{className:e.cardCategoryWhite,children:"New employees on 15th September, 2016"})]}),n.jsx(N.default,{children:n.jsx(y.default,{tableHeaderColor:"warning",tableHead:["ID","Name","Salary","Country"],tableData:[["1","Dakota Rice","$36,738","Niger"],["2","Minerva Hooper","$23,789","Cura\xe7ao"],["3","Sage Rodriguez","$56,142","Netherlands"],["4","Philip Chaney","$38,735","Korea, South"]]})})]})})]})]})}},VHb5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("uZlL"),a={successText:{color:n.successColor[0]},upArrowCardCategory:{width:"16px",height:"16px"},stats:{color:n.grayColor[0],display:"inline-flex",fontSize:"12px",lineHeight:"22px","& svg":{top:"4px",width:"16px",height:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{top:"4px",fontSize:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"}},cardCategory:{color:n.grayColor[0],margin:"0",fontSize:"14px",marginTop:"0",paddingTop:"10px",marginBottom:"0"},cardCategoryWhite:{color:"rgba("+n.hexToRgb(n.whiteColor)+",.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitle:{color:n.grayColor[2],marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:n.grayColor[1],fontWeight:"400",lineHeight:"1"}},cardTitleWhite:{color:n.whiteColor,marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:n.grayColor[1],fontWeight:"400",lineHeight:"1"}}};t.default=a},VyGx:function(e,t,r){"use strict";var n=r("VkAN");function a(){var e=n(["\n  display: inline-flex;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: scale(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: scale(360deg);\n    }\n  }\n"]);return a=function(){return e},e}function s(){var e=n(["\n  height:4em;\n  width: 4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return s=function(){return e},e}function i(){var e=n(["\n  height:2em !important;\n  width: 2em !important;\n  position: absolute;\n  margin-left: 0;\n  display: inline-flex;\n  justify-content: center;\n  color:","; !important;\n  align-items: center;"]);return i=function(){return e},e}function l(){var e=n(["\nheight:4.6em !important;\n  width: 4.6em !important;\n  display: flex;\n  justify-content: center;\n  color:   #3185FC !important;\n  align-items: center;"]);return l=function(){return e},e}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SpinnerContainer=t.SpinnerOverlay=t.SpinnerPrecent=t.Spinner=void 0;var c=r("TTf+"),d=r("H8nO"),u=o(r("izHv")),f=r("MD2z");t.Spinner=u.default(c.CircularProgress)(l()),t.SpinnerPrecent=u.default(f.H2)(i(),d.hexa("#9094A6",.9)),t.SpinnerOverlay=u.default.div(s()),t.SpinnerContainer=u.default(c.Box)(a())}},[["QI6j",1,2,3,8,12,0,4,5,6,7,9,10,11,13,14,17,20]]]);