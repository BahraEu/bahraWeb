_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"+4l/":function(e,r,t){"use strict";var n=t("nKUr"),a=t("lSNA");function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});d(t("q1tI"));var l=d(t("TSYQ")),c=t("DfQ9"),u=d(t("lSOa")),p=c.makeStyles(u.default);r.default=function(e){var r,t=p(),i=e.className,d=e.children,c=e.plain,u=e.profile,f=e.stats,m=e.chart,x=s(e,["className","children","plain","profile","stats","chart"]),g=l.default((a(r={},t.cardFooter,!0),a(r,t.cardFooterPlain,c),a(r,t.cardFooterProfile,u),a(r,t.cardFooterStats,f),a(r,t.cardFooterChart,m),a(r,i,void 0!==i),r));return n.jsx("div",o(o({className:g},x),{},{children:d}))}},"1G7/":function(e,r,t){"use strict";var n=t("J4zp"),a=t("lSNA"),i=t("nKUr");function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var l=d(t("q1tI")),c=d(t("uoyk")),u=t("VyGx");function p(e){return i.jsx(i.Fragment,{children:i.jsx("div",{children:i.jsxs(c.default,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:[i.jsx(u.Spinner,s({},e)),i.jsx(u.SpinnerPrecent,{children:"".concat(Math.round(e.value),"%")})]})})})}r.default=function(){var e=l.default.useState(30),r=n(e,2),t=r[0],a=r[1];return l.default.useEffect((function(){var e=setInterval((function(){a((function(e){return e>=100?90:e+60}))}),800);return function(){clearInterval(e)}}),[]),i.jsx(p,{value:t})}},"89rC":function(e,r,t){"use strict";var n=t("VkAN");function a(){var e=n(["\nquery BahraTeam{\n team {\n        nodes {\n          id\n          uri\n          title\n          status\n          adminId\n          content\n          image: featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          databaseId\n          date\n          dateGmt\n          desiredSlug\n          enclosure\n          featuredImageDatabaseId\n          featuredImageId\n          guid\n          isPreview\n          isRestricted\n          link\n          modified\n          modifiedGmt\n          previewRevisionDatabaseId\n          previewRevisionId\n          seo {\n            ...SeoFragment\n          }\n    \n        }\n      }\n    }\n          ","\n\n"]);return a=function(){return e},e}function i(){var e=n(["\n    query Admin($id: Int!) {\n        adminBy(adminId: $id) {\n                        date\n                        slug\n                        content\n                        adminId\n                        dateGmt\n                        title\n                        uri\n                        status\n                        seo {\n                          canonical\n                          cornerstone\n                          metaDesc\n                          focuskw\n                          metaRobotsNofollow\n                          opengraphDescription\n                          opengraphModifiedTime\n                          opengraphPublishedTime\n                          metaRobotsNoindex\n                          opengraphAuthor\n                          opengraphPublisher\n                          opengraphSiteName\n                          opengraphTitle\n                          opengraphType\n                          opengraphUrl\n                          title\n                          twitterDescription\n                          twitterTitle\n                          twitterImage {\n                            id\n                            sourceUrl(size: BAHRA_FULLSCREEN)\n                            authorId\n                          }\n                        }\n                        featuredImageId\n                        modifiedGmt\n                        previewRevisionId\n                        isPreview\n                        desiredSlug\n                        databaseId\n                      }\n                    }\n          \n"]);return i=function(){return e},e}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.GET_TEAM=r.GET_ADMIN_BIJ_ID=void 0;var s=o(t("lTCR")),d=o(t("Gdld"));r.GET_ADMIN_BIJ_ID=s.default(i()),r.GET_TEAM=s.default(a(),d.default)},"9TsZ":function(e,r,t){"use strict";var n=t("nKUr"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});a(t("q1tI"));var i=t("DfQ9"),o=a(t("mkMn")),s=a(t("UUOa")),d=a(t("OL8L")),l=a(t("+4l/")),c=a(t("NtxB")),u=t("TTf+"),p=i.makeStyles(c.default);r.default=function(e){var r=e.admins;console.log("AdminListProps",r);var t=p(c.default);return n.jsx(n.Fragment,{children:r.map((function(e){return n.jsxs("div",{className:t.section,children:[n.jsx("h2",{className:t.title,children:e.titlle}),n.jsx("div",{children:n.jsxs(o.default,{children:[n.jsx(u.Grid,{xs:12,sm:12,md:4,children:n.jsxs(s.default,{children:[n.jsxs("h4",{className:t.cardTitle,children:["Gigi Hadid",n.jsx("br",{}),n.jsx("small",{className:t.smallTitle,children:"Model"})]}),n.jsx(d.default,{children:n.jsxs("p",{className:t.description,children:["You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",n.jsx("a",{href:"#pablo",children:"links"})," for people to be able to follow them outside the site."]})}),n.jsxs(l.default,{className:t.justifyCenter,children:[n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-twitter"})}),n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-instagram"})}),n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-facebook"})})]})]})}),n.jsx(u.Grid,{xs:12,sm:12,md:4,children:n.jsxs(s.default,{plain:!0,children:[n.jsx(u.Grid,{xs:12,sm:12,md:6,className:t.itemGrid}),n.jsxs("h4",{className:t.cardTitle,children:["Christian Louboutin",n.jsx("br",{}),n.jsx("small",{className:t.smallTitle,children:"Designer"})]}),n.jsx(d.default,{children:n.jsxs("p",{className:t.description,children:["You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",n.jsx("a",{href:"#pablo",children:"links"})," for people to be able to follow them outside the site."]})}),n.jsxs(l.default,{className:t.justifyCenter,children:[n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-twitter"})}),n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-linkedin"})})]})]})}),n.jsx(u.Grid,{xs:12,sm:12,md:4,children:n.jsxs(s.default,{plain:!0,children:[n.jsxs("h4",{className:t.cardTitle,children:["Kendall Jenner",n.jsx("br",{}),n.jsx("small",{className:t.smallTitle,children:"Model"})]}),n.jsx(d.default,{children:n.jsxs("p",{className:t.description,children:["You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",n.jsx("a",{href:"#pablo",children:"links"})," for people to be able to follow them outside the site."]})}),n.jsxs(l.default,{className:t.justifyCenter,children:[n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-twitter"})}),n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-instagram"})}),n.jsx(u.Button,{className:t.margin5,children:n.jsx("i",{className:t.socials+" fab fa-facebook"})})]})]})})]})})]})}))})}},Do8W:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return t("yrEz")}])},Gdld:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default="\nfragment SeoFragment on PostTypeSEO{\n      breadcrumbs {\n        text\n        url\n      }\n      title\n      metaDesc\n      metaRobotsNoindex\n      metaRobotsNofollow\n      opengraphAuthor\n      opengraphDescription\n      opengraphTitle\n      opengraphImage {\n        sourceUrl\n      }\n      opengraphSiteName\n      opengraphPublishedTime\n      opengraphModifiedTime\n      twitterTitle\n      twitterDescription\n      twitterImage {\n        sourceUrl\n      }\n}\n"},NtxB:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=t("XQoy"),i=n(t("n4vn")),o=Object.assign(Object.assign({section:{padding:"70px 0",textAlign:"center"},title:Object.assign(Object.assign({},a.title),{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"})},i.default),{itemGrid:{marginLeft:"auto",marginRight:"auto"},cardTitle:a.cardTitle,smallTitle:{color:"#6c757d"},description:{color:"#999"},justifyCenter:{justifyContent:"center !important"},socials:{marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px",color:"#999"},margin5:{margin:"5px"}});r.default=o},VyGx:function(e,r,t){"use strict";var n=t("VkAN");function a(){var e=n(["\n  display: inline-flex;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: scale(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: scale(360deg);\n    }\n  }\n"]);return a=function(){return e},e}function i(){var e=n(["\n  height:4em;\n  width: 4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return i=function(){return e},e}function o(){var e=n(["\n  height:2em !important;\n  width: 2em !important;\n  position: absolute;\n  margin-left: 0;\n  display: inline-flex;\n  justify-content: center;\n  color:","; !important;\n  align-items: center;"]);return o=function(){return e},e}function s(){var e=n(["\nheight:4.6em !important;\n  width: 4.6em !important;\n  display: flex;\n  justify-content: center;\n  color:   #3185FC !important;\n  align-items: center;"]);return s=function(){return e},e}var d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.SpinnerContainer=r.SpinnerOverlay=r.SpinnerPrecent=r.Spinner=void 0;var l=t("TTf+"),c=t("H8nO"),u=d(t("izHv")),p=t("MD2z");r.Spinner=u.default(l.CircularProgress)(s()),r.SpinnerPrecent=u.default(p.H2)(o(),c.hexa("#9094A6",.9)),r.SpinnerOverlay=u.default.div(i()),r.SpinnerContainer=u.default(l.Box)(a())},XQoy:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.cardSubtitle=r.cardLink=r.cardTitle=r.title=r.defaultBoxShadow=r.cardHeader=r.cardActions=r.roseCardHeader=r.primaryCardHeader=r.infoCardHeader=r.dangerCardHeader=r.successCardHeader=r.warningCardHeader=r.roseBoxShadow=r.dangerBoxShadow=r.warningBoxShadow=r.successBoxShadow=r.infoBoxShadow=r.primaryBoxShadow=r.grayColor=r.roseColor=r.infoColor=r.successColor=r.dangerColor=r.warningColor=r.primaryColor=r.defaultFont=r.card=r.boxShadow=r.containerFluid=r.container=r.transition=r.drawerWidth=void 0;r.drawerWidth=260;r.transition={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"};var n={paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"};r.containerFluid=n;var a=Object.assign(Object.assign({},n),{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}});r.container=a;r.boxShadow={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"};r.card={display:"inline-block",position:"relative",width:"100%",margin:"25px 0",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.14)",borderRadius:"3px",color:"rgba(0, 0, 0, 0.87)",background:"#fff"};var i={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"};r.defaultFont=i;r.primaryColor="#9c27b0";r.warningColor="#ff9800";r.dangerColor="#f44336";r.successColor="#4caf50";r.infoColor="#00acc1";r.roseColor="#e91e63";r.grayColor="#999999";var o={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"};r.primaryBoxShadow=o;var s={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"};r.infoBoxShadow=s;var d={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"};r.successBoxShadow=d;var l={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"};r.warningBoxShadow=l;var c={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"};r.dangerBoxShadow=c;var u={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"};r.roseBoxShadow=u;var p=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},l);r.warningCardHeader=p;var f=Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},d);r.successCardHeader=f;var m=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},c);r.dangerCardHeader=m;var x=Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},s);r.infoCardHeader=x;var g=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},o);r.primaryCardHeader=g;var b=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},u);r.roseCardHeader=b;var h=Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},i);r.cardActions=h;r.cardHeader={margin:"-30px 15px 0",borderRadius:"3px",padding:"15px"};r.defaultBoxShadow={border:"0",borderRadius:"3px",boxShadow:"0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",padding:"10px 0",transition:"all 150ms ease 0s"};var j={color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'};r.title=j;var v=Object.assign(Object.assign({},j),{marginTop:".625rem"});r.cardTitle=v;r.cardLink={"& + $cardLink":{marginLeft:"1.25rem"}};r.cardSubtitle={marginBottom:"0",marginTop:"-.375rem"}},lSOa:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("uZlL"),a={cardFooter:{padding:"0",paddingTop:"10px",margin:"0 15px 10px",borderRadius:"0",justifyContent:"space-between",alignItems:"center",display:"flex",backgroundColor:"transparent",border:"0"},cardFooterProfile:{marginTop:"-15px"},cardFooterPlain:{paddingLeft:"5px",paddingRight:"5px",backgroundColor:"transparent"},cardFooterStats:{borderTop:"1px solid "+n.grayColor[10],marginTop:"20px","& svg":{position:"relative",top:"4px",marginRight:"3px",marginLeft:"3px",width:"16px",height:"16px"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"16px",position:"relative",top:"4px",marginRight:"3px",marginLeft:"3px"}},cardFooterChart:{borderTop:"1px solid "+n.grayColor[10]}};r.default=a},n4vn:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default={imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}}},yrEz:function(e,r,t){"use strict";var n=t("o0o1"),a=t("yXPU"),i=t("lSNA"),o=t("nKUr");function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),c=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&l(r,e,t);return c(r,e),r},p=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});u(t("q1tI"));var f=t("k7Sn"),m=p(t("5IwB")),x=t("Uuew"),g=t("89rC"),b=p(t("1G7/")),h=t("xg0D"),j=p(t("9TsZ")),v=p(t("OOas")),w=function(e){var r=e.currentUrl,t=e.currentLanguage,n=e.Children,a=x.useQuery(g.GET_TEAM),i=a.loading,s=a.error,l=a.data;if(i)return o.jsx(b.default,{});if(s)return"Error! ".concat(s.message);if(l){var c=l.team.nodes;return o.jsx(o.Fragment,{children:o.jsx(v.default,d(d({},n),{},{currentUrl:r,currentLanguage:t,children:o.jsx(j.default,{admins:c,currentUrl:r,currentLanguage:t})}))})}};w.displayName="Blogs Page",w.getInitialProps=function(){var e=a(n.mark((function e(r){var t,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.isServer){e.next=6;break}return e.next=3,r.req.path;case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0="/blogs";case 7:if(t=e.t0,!h.isServer){e.next=14;break}return e.next=11,r.req.language;case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=f.i18n.language;case 15:return a=e.t1,e.abrupt("return",{namespacesRequired:"common",t:void 0,currentLanguage:a,currentUrl:t});case 17:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),r.default=m.default(f.withTranslation("common")(w))}},[["Do8W",1,2,3,8,12,0,4,5,6,7,9,10,11,13,14,17]]]);