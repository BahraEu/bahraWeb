_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"89rC":function(e,n,t){"use strict";var r=t("VkAN");function i(){var e=r(["\nquery BahraTeam{\n team {\n        nodes {\n          id\n          uri\n          title\n          status\n          adminId\n          content\n          image: featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          databaseId\n          date\n          dateGmt\n          desiredSlug\n          enclosure\n          featuredImageDatabaseId\n          featuredImageId\n          guid\n          isPreview\n          isRestricted\n          link\n          modified\n          modifiedGmt\n          previewRevisionDatabaseId\n          previewRevisionId\n          seo {\n            ...SeoFragment\n          }\n    \n        }\n      }\n    }\n          ","\n\n"]);return i=function(){return e},e}function o(){var e=r(["\n    query Admin($id: Int!) {\n        adminBy(adminId: $id) {\n                        date\n                        slug\n                        content\n                        adminId\n                        dateGmt\n                        title\n                        uri\n                        status\n                        seo {\n                          canonical\n                          cornerstone\n                          metaDesc\n                          focuskw\n                          metaRobotsNofollow\n                          opengraphDescription\n                          opengraphModifiedTime\n                          opengraphPublishedTime\n                          metaRobotsNoindex\n                          opengraphAuthor\n                          opengraphPublisher\n                          opengraphSiteName\n                          opengraphTitle\n                          opengraphType\n                          opengraphUrl\n                          title\n                          twitterDescription\n                          twitterTitle\n                          twitterImage {\n                            id\n                            sourceUrl(size: BAHRA_FULLSCREEN)\n                            authorId\n                          }\n                        }\n                        featuredImageId\n                        modifiedGmt\n                        previewRevisionId\n                        isPreview\n                        desiredSlug\n                        databaseId\n                      }\n                    }\n          \n"]);return o=function(){return e},e}var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.GET_TEAM=n.GET_ADMIN_BIJ_ID=void 0;var u=a(t("lTCR")),s=a(t("Gdld"));n.GET_ADMIN_BIJ_ID=u.default(o()),n.GET_TEAM=u.default(i(),s.default)},GVI0:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return t("Wrlz")}])},Gdld:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default="\nfragment SeoFragment on PostTypeSEO{\n      breadcrumbs {\n        text\n        url\n      }\n      title\n      metaDesc\n      metaRobotsNoindex\n      metaRobotsNofollow\n      opengraphAuthor\n      opengraphDescription\n      opengraphTitle\n      opengraphImage {\n        sourceUrl\n      }\n      opengraphSiteName\n      opengraphPublishedTime\n      opengraphModifiedTime\n      twitterTitle\n      twitterDescription\n      twitterImage {\n        sourceUrl\n      }\n}\n"},WMVU:function(e,n,t){"use strict";var r=t("nKUr"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});i(t("q1tI"));var o=t("MD2z");n.default=function(){return r.jsx(r.Fragment,{children:r.jsx(o.H1,{children:"Admin"})})}},Wrlz:function(e,n,t){"use strict";var r=t("o0o1"),i=t("yXPU"),o=t("lSNA"),a=t("nKUr");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var l=t("k7Sn"),c=d(t("5IwB")),p=t("89rC"),f=d(t("DlTA")),m=(d(t("q1tI")),d(t("WMVU")));function g(e){var n=e.BlogItem,t=e.childeren,r=e.currentLanguage,i=e.currentUrl;return a.jsx(a.Fragment,{children:a.jsx(f.default,s(s({},t),{},{currentUrl:i,currentLanguage:r,children:a.jsx(m.default,s({blog:n},t))}))})}g.getInitialProps=function(){var e=i(r.mark((function e(n){var t,i,o,a,u;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.req.path||n.req.originalUrl,i=n.req.language||l.i18n.language,o=n.query.slug,a=o?parseInt(o.split("-").pop()):n.query.id,e.next=6,n.apolloClient.query({query:p.GET_ADMIN_BIJ_ID,variables:{id:a}});case 6:return u=e.sent,e.abrupt("return",{namespacesRequired:["common"],namespaces:"common",BlogItem:u.data.postBy,currentUrl:t,currentLanguage:i});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=c.default(l.withTranslation("common")(g))}},[["GVI0",1,2,3,8,12,0,4,5,6,7,9,10,11,13,14,15]]]);