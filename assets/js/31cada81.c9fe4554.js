(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[830],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return b},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,f=u["".concat(a,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46254:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=t(22122),o=t(19756),i=(t(2784),t(3905)),a={id:"non-seekable-media",title:"Non-seekable media"},c={unversionedId:"non-seekable-media",id:"non-seekable-media",isDocsHomePage:!1,title:"Non-seekable media",description:"If you see the following error in the console:",source:"@site/docs/non-seekable-media.md",sourceDirName:".",slug:"/non-seekable-media",permalink:"/docs/non-seekable-media",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/non-seekable-media.md",version:"current",frontMatter:{id:"non-seekable-media",title:"Non-seekable media"},sidebar:"someSidebar",previous:{title:"Webpack dynamic imports",permalink:"/docs/webpack-dynamic-imports"},next:{title:"v2.0 Breaking changes",permalink:"/docs/2-0-migration"}},s=[{value:"Reproduction",id:"reproduction",children:[]},{value:"Solution",id:"solution",children:[]}],l={toc:s};function u(e){var n=e.components,t=(0,o.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,r.default)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"If you see the following error in the console:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"The media [audio source] does not seem to support seeking. Remotion cannot properly handle it. Please see https://remotion.dev/docs/non-seekable-media for assistance.\n")),(0,i.mdx)("p",null,"it means you have provided a video or audio that cannot be seeked to an arbitrary time. The cause for this is that when requesting the audio file, no ",(0,i.mdx)("inlineCode",{parentName:"p"},"Content-Range")," HTTP header has been sent by the server, making it impossible for the browser and therefore for Remotion to seek the media."),(0,i.mdx)("h2",{id:"reproduction"},"Reproduction"),(0,i.mdx)("p",null,"You can verify that this is the problem by opening the video or audio in a new tab and observe that you cannot seek the media."),(0,i.mdx)("p",null,"So far, this behavior has been observed when serving media from a private Google Cloud Storage bucket."),(0,i.mdx)("h2",{id:"solution"},"Solution"),(0,i.mdx)("p",null,"To fix this problem, you need to serve the media from a webhost that supports the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Range")," header."),(0,i.mdx)("p",null,"Alternatively, you can download the media and import it locally using an ",(0,i.mdx)("inlineCode",{parentName:"p"},"import")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"require()")," statement."))}u.isMDXComponent=!0}}]);