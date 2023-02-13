import e,{useCallback as t,useContext as n,useRef as r,useEffect as o,useState as i}from"react";import a from"prop-types";import{Button as l,Card as c,CardBody as s,CardFooter as u,CardHeader as d,Dropdown as f,DropdownToggle as p,DropdownMenu as g,DropdownItem as m,Table as h}from"reactstrap";import v from"classnames";import{jsxs as y,jsx as b,Fragment as T}from"react/jsx-runtime";import{Modifier as C,EditorState as S,CompositeDecorator as k,ContentState as E,convertFromRaw as w,convertToRaw as I,RichUtils as N,AtomicBlockUtils as x,SelectionState as O,Editor as F}from"draft-js";import L from"assets/img/default-avatar.png";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function P(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function j(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}Object.assign({leftIcon:"",rightIcon:""},l.prototype.props);var R=function(e){/*#__PURE__*/return y(l,D({},e,{children:[e.leftIcon?/*#__PURE__*/b("i",{className:v(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?/*#__PURE__*/b("i",{className:v(e.rightIcon,"ms-2")}):null]}))};R.propTypes=D({leftIcon:a.string,rightIcon:a.string},l.propTypes&&l.propTypes),Object.assign({},c.prototype.props);var A=function(e){/*#__PURE__*/return b(c,D({},e,{children:e.children}))};A.propTypes=D({},c.propTypes&&c.propTypes),Object.assign({},s.prototype.props);var M=function(e){/*#__PURE__*/return b(s,D({},e,{children:e.children}))};M.propTypes=D({},s.propTypes&&s.propTypes),Object.assign({},u.prototype.props);var z=function(e){/*#__PURE__*/return b(u,D({},e,{children:e.children}))};z.propTypes=D({},u.propTypes&&u.propTypes),Object.assign({},d.prototype.props);var U=function(e){/*#__PURE__*/return b(d,D({},e,{children:e.children}))};U.propTypes=D({},d.propTypes&&d.propTypes),Object.assign({},f.prototype.props);var B=function(e){var t=D({},(P(e),e));/*#__PURE__*/return b(f,D({},t,{children:t.children}))};B.propTypes=D({},f.propTypes&&f.propTypes);var K=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},p.prototype.props);var _=function(e){var t=j(e,K);/*#__PURE__*/return b(T,{children:/*#__PURE__*/y(p,D({caret:!t.startIcon&&!t.endIcon&&t.caret},t,{children:[t.startIcon&&/*#__PURE__*/b("i",{className:v(t.startIcon,"me-2")}),t.children,t.endIcon&&/*#__PURE__*/b("i",{className:v(t.endIcon,"ms-2")})]}))})};_.propTypes=D({startIcon:a.string,endIcon:a.string,caret:a.bool},p.propTypes&&p.propTypes),Object.assign({},g.prototype.props);var q=function(e){var t=D({},(P(e),e));/*#__PURE__*/return b(g,D({},t,{children:t.children}))};q.propTypes=D({},g.propTypes&&g.propTypes);var G=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},m.prototype.props);var H=function(e){var t=e.leftIcon,n=void 0===t?"":t,r=e.rightIcon,o=void 0===r?"":r,i=e.leftIconStyle,a=void 0===i?"text-secondary":i,l=e.rightIconStyle,c=void 0===l?"text-secondary":l,s=j(e,G);/*#__PURE__*/return y(m,D({},s,{className:"d-flex justify-content-between align-items-center",children:[/*#__PURE__*/y("span",{children:[n&&/*#__PURE__*/b("i",{className:n+" "+a+" me-2"}),s.children]}),o&&/*#__PURE__*/b("i",{className:o+" "+c})]}))};H.propTypes=D({},m.propTypes&&m.propTypes);var Y=function(e){/*#__PURE__*/return y(h,{striped:!0,hover:!0,children:[/*#__PURE__*/b("thead",{children:/*#__PURE__*/b("tr",{children:e.thead.map(function(t,n){/*#__PURE__*/return b("th",{className:v("",{"text-right":e.thead.length-1===n}),children:t.text},n)})})}),/*#__PURE__*/b("tbody",{children:e.tbody.map(function(e,t){var n;/*#__PURE__*/return y("tr",{className:v((n={},n[e.className]=void 0!==e.className,n)),children:[e.data.map(function(e,t){var n;/*#__PURE__*/return b("td",{className:v((n={},n[e.className]=void 0!==e.className,n)),children:e.item},t)}),e.actions&&/*#__PURE__*/b("td",{className:"text-right",children:e.actions})]},t)})})]})};Y.propTypes={thead:a.arrayOf(a.shape({className:a.string,text:a.string.isRequired})).isRequired,tbody:a.arrayOf(a.shape({className:a.string,data:a.arrayOf(a.shape({className:a.string,item:a.oneOfType([a.string,a.number,a.node]).isRequired})).isRequired,actions:a.node})).isRequired};var J="inline-default",W="block-default",Z="atomic-entity",V="image",X="divider",Q="link",$="mention",ee="checklist",te="start";function ne(e){var n=e.name,r=e.profileImageUrl,o=e._id,i=e.onSelect,a=void 0===i?function(){}:i,l=t(function(e){e.preventDefault(),a({name:n,profileImageUrl:r,_id:o})});/*#__PURE__*/return y("div",{className:"d-flex align-items-center",children:[/*#__PURE__*/b("div",{className:"avatar mb-1",children:/*#__PURE__*/b("img",{src:r||L,alt:n})}),/*#__PURE__*/b("div",{onClick:l,className:"btn btn-link p-2 mb-1",children:n})]})}var re=["suggestions"];function oe(e){var t=e.suggestions,r=j(e,re),o=n(ue);/*#__PURE__*/return b(T,{children:t.length?/*#__PURE__*/b("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:D({},o.computedPosForMentionSuggestions),children:t.map(function(e,t){/*#__PURE__*/return b(ne,D({},e,r),e.name+t)})}):null})}function ie(e,t,n){for(var r,o,i=t.getText();null!==(r=e.exec(i));)n(o=r.index,o+r[0].length)}var ae=/\B@\w+/g,le=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,ce=new k([{strategy:function(e,t,n){ie(ae,e,t)},component:function(e){var i=r(null),a=n(ue),l=a.editorRef,c=a.mentionSuggestions,s=a.updateComputedPosForMentionSuggestions,u=a.handleMentionSelect,d=t(function(){var e,t;return{left:(null==(e=l.current)||null==(t=e.editor)?void 0:t.getBoundingClientRect()).width-i.current.offsetLeft<240?i.current.offsetLeft-230:i.current.offsetLeft,top:i.current.offsetTop,display:"block"}},[]),f=t(function(){return{display:"none"}},[]);function p(){if(!e.entityKey)return null;var t=e.contentState.getEntity(e.entityKey);return D({},null==t?void 0:t.getData())}return o(function(){i.current&&s(d())},[]),/*#__PURE__*/y(T,{children:[p()?/*#__PURE__*/b("a",{href:"/admin/users/"+p()._id,className:"text-primary",children:p().name}):/*#__PURE__*/b("span",{ref:i,className:"",children:e.children}),/*#__PURE__*/b(oe,{suggestions:c.filter(function(t){var n;return t.name.toLowerCase().includes(e.decoratedText.slice(1,null==e||null==(n=e.decoratedText)?void 0:n.length).toLowerCase())}),onSelect:function(t){var n=t.name,r=t.profileImageUrl,o=t._id,i="@"+n.split(" ").join("_");u(e.contentState,e.blockKey,{start:e.start,end:e.end},{mention:i+" ",profileImageUrl:r,_id:o,name:n}),s(f())}})]})}},{strategy:function(e,t,n){ie(le,e,t)},component:function(e){/*#__PURE__*/return b("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer",children:e.children})}},{strategy:function(e,t,n){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&n.getEntity(t).getType()===Q},t)},component:function(e){var t=e.contentState.getEntity(e.entityKey).getData();return t.href?/*#__PURE__*/b("a",{href:t.href,title:t.linkText,target:"_blank",rel:"noreferrer",children:t.linkText||t.href}):null}}]),se=["children"],ue=/*#__PURE__*/e.createContext(),de=function(t){var n=t.children,r=j(t,se),o=function(t){var n,r,o=e.useRef(null),a=e.useState(S.createEmpty(ce)),l=a[0],c=a[1],s=i(!1),u=s[0],d=s[1],f=e.useState({display:"none"}),p=f[0],g=f[1];e.useEffect(function(){var e;try{"string"==typeof t.value&&(e=JSON.parse(t.value)),"object"==typeof t.value&&(e=t.value)}catch(e){if(console.log(e),"string"==typeof t.value)return v(S.createWithContent(E.createFromText(t.value)))}return v(t.value||e?S.set(l,{currentContent:w(e),directionMap:S.createWithContent(w(e)).getDirectionMap()}):S.createEmpty(ce))},[t.value]);var m=e.useRef(null),h=function(e,t){var n=l.getCurrentContent().createEntity(e,"IMMUTABLE",D({},t)),r=n.getLastCreatedEntityKey(),o=S.set(l,{currentContent:n},"create-entity");v(x.insertAtomicBlock(o,r," "))},v=function(e){var n=e.getCurrentContent();c(e),t.onDataStructureChange(JSON.stringify(I(n)))},y=function(e){try{if(!t.handleUpload)return Promise.resolve(console.log("Uploader function not specified"));var n=e.every(function(e){return"image"===e.type.split("/")[0]});return Promise.resolve(n?function(n,r){try{var o=Promise.resolve(Promise.all(e.map(function(e){return t.handleUpload(e)}))).then(function(e){console.log(e),e.every(function(e){return e})||console.log("one or mutiple files don't have storage info"),e.map(function(e){return h(V,{storageInfo:e})})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e)}):console.log("All files has to be images"))}catch(e){return Promise.reject(e)}},b=function(e){e.preventDefault(),y(Array.from(e.target.files))},T=((n={})[V]=function(){return m.current.click()},n[Q]=function(){return v(function(e){var t=window.prompt("Paste the link bellow:");if(t){var n=window.prompt("Paste the link-text below:");if(n){var r=e.getCurrentContent();r.createEntity(Q,"MUTABLE",{href:t,linkText:n});var o=r.getLastCreatedEntityKey(),i=e.getSelection(),a=C.replaceText(r,i,n,null,o),l=i.set("anchorOffset",i.getAnchorOffset()+n.length),c=S.set(e,{currentContent:a},"create-entity"),s=S.forceSelection(c,l);return console.log(l.getAnchorOffset(),"editor selection anchor offset after link insert:",s.getSelection().getAnchorOffset()),s}}}(l))},n[X]=function(){return h(X,{})},n[$]=function(){},n[ee]=function(){h(ee,{})},n),k=((r={})[J]=function(e){return v(N.toggleInlineStyle(l,e))},r[W]=function(e){return v(N.toggleBlockType(l,e))},r[Z]=function(e){T[e]()},r);return{editorRef:o,editorState:l,computedPosForMentionSuggestions:p,focusedForEditing:u,getFileInputProps:function(){return{ref:m,onChange:b}},generateLink:function(e){try{return Promise.resolve(t.linkGeneratorFn&&"function"==typeof t.linkGeneratorFn?t.linkGeneratorFn(e):null)}catch(e){return Promise.reject(e)}},handleDroppedFiles:function(e,t){return y(t)},handlePastedFiles:function(e){return y(e)},handleEditorStateChange:v,handleKeyCommand:function(e,t){var n=N.handleKeyCommand(t,e);return n?(v(n),"handled"):"not-handled"},handleToolClick:function(e,t){return t.preventDefault(),l.getSelection().getHasFocus()&&null!=e&&e.element?void k[e.element](e.style):null},forceFocusEditorEnd:function(e){var t;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(t=o.current.editor)||t.focus(),v(S.moveFocusToEnd(l))},updateComputedPosForMentionSuggestions:function(e){return g(e)},handleMentionSelect:function(e,t,n,r){var o=O.createEmpty(t),i=e.createEntity($,"IMMUTABLE",D({},r)),a=i.getLastCreatedEntityKey();i=C.replaceText(e,o.merge({anchorOffset:n.start,focusOffset:n.end}),r.mention,l.getCurrentInlineStyle(),a),v(S.forceSelection(S.moveFocusToEnd(S.set(l,{currentContent:i})),i.getSelectionAfter()))},activateEditor:function(){return d(!0)},deactivateEditor:function(){return d(!1)}}}({handleUpload:r.handleUpload||function(){return Promise.resolve()},linkGeneratorFn:r.linkGeneratorFn,onDataStructureChange:r.onDataStructureChange||function(){},value:r.value||null}),a=D({},(P(o),o));/*#__PURE__*/return b(ue.Provider,{value:D({},a,{mentionSuggestions:r.mentionSuggestions||[]}),children:n})};function fe(e){var t;return e.src||e.link?/*#__PURE__*/b("img",{src:e.src||e.link,alt:e.alt||(null==(t=e.storageInfo)?void 0:t.Key)||"...",className:"unselectable"}):null}function pe(){/*#__PURE__*/return b("hr",{})}function ge(t){/*#__PURE__*/return b(e.Fragment,{})}var me=["editorRef","onResizeEnd","reference","currentSize"],he=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function ve(t){var n,r,o=t.editorRef,i=t.onResizeEnd,a=t.reference,l=void 0===a?"left":a,c=t.currentSize,s=void 0===c?10:c,u=j(t,me),d=e.useState(!1),f=d[0],p=d[1],g=e.useState(s),m=g[0],h=g[1],C=null==(n=o.current)||null==(r=n.editor)?void 0:r.getBoundingClientRect(),S=e.useCallback(function(e){e.preventDefault();var t=function(e){var t=[].concat(he);p(!0);var n="center"===l?C.width/2:C.width,r=parseInt(Math.abs(e.clientX-("center"===l?C.left+C.width/2:"end"===l?C.left+C.width:C.left))),o=parseInt(r/n*100);t.sort(function(e,t){return Math.abs(o-e)-Math.abs(o-t)});var a=t[0];h(a),i&&i({partition:a});var c=u.block.getEntityAt(0);u.contentState.mergeEntityData(c,{size:a})};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",function e(){p(!1),document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",e,!1)},!1)},[i]);/*#__PURE__*/return y(T,{children:[/*#__PURE__*/b("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:S,children:/*#__PURE__*/b("div",{className:"bg-primary rounded resize-bar"})}),f&&/*#__PURE__*/b("div",{className:"resize-guides-container position-absolute ",children:he.map(function(e){return parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(C.width*e/100)}}).map(function(e){/*#__PURE__*/return b("div",{className:v("resize-guide position-absolute rounded",{"bg-info":"start"===l&&e.percentage===m||"end"===l&&100-e.percentage===m}),style:{left:e.pixels}},e.pixels)})})]})}var ye=["editorRef","onAlignmentChange"],be=[{label:"Align left",style:te,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function Te(e){var n=e.onAlignmentChange,r=j(e,ye),o=t(function(e){var t=e.alignment;n&&n({alignment:t});var o=r.block.getEntityAt(0);r.contentState.mergeEntityData(o,{alignment:t})},[n]);/*#__PURE__*/return b("div",{className:"d-inline-block shadow-md rounded mb-1",children:be.map(function(e){/*#__PURE__*/return b(l,{title:null==e?void 0:e.label,type:"button",className:v("btn btn-icon m-0 text-muted",{}),onClick:function(t){return o({alignment:null==e?void 0:e.style})},children:e.icon?/*#__PURE__*/b("i",{className:e.icon}):null==e?void 0:e.label},null==e?void 0:e.style)})})}var Ce=["children"];function Se(t){var n=t.children,r=j(t,Ce),o=e.useState(!1),i=o[0],a=o[1],l=e.useState(r.size||30),c=l[0],s=l[1],u=e.useState(r.alignment||te),d=u[0],f=u[1],p=function(){return{"justify-content-start":"start"===d,"justify-content-center":"center"===d,"justify-content-end":"end"===d}};/*#__PURE__*/return y(T,{children:[i&&d&&/*#__PURE__*/b("div",{className:v("d-flex",p()),children:/*#__PURE__*/b(Te,D({onAlignmentChange:function(e){return f(e.alignment)}},r))}),/*#__PURE__*/y("div",{className:v("d-flex align-items-center position-relative",p()),children:[i&&"start"!==d&&/*#__PURE__*/b(ve,D({},r,{reference:d,onResizeEnd:function(e){return s(e.partition)}})),/*#__PURE__*/b("div",{className:v("d-inline-block rounded resize-container unselectable",{"resize-focused":i,"w-10":10===c,"w-15":15===c,"w-20":20===c,"w-25":25===c,"w-30":30===c,"w-35":35===c,"w-40":40===c,"w-45":45===c,"w-50":50===c,"w-55":55===c,"w-60":60===c,"w-65":65===c,"w-70":70===c,"w-75":75===c,"w-80":80===c,"w-85":85===c,"w-90":90===c,"w-95":95===c,"w-100":100===c}),onClick:function(){return a(function(e){return!e})},children:n}),i&&"end"!==d&&/*#__PURE__*/b(ve,D({},r,{reference:d,currentSize:c,onResizeEnd:function(e){return s(e.partition)}}))]})]})}var ke=["type","data","editorControllers"];function Ee(e){var t=e.type,n=e.data,r=null,o=D({},n,e.editorControllers,j(e,ke));return t===V&&(r=/*#__PURE__*/b(Se,D({},o,{children:/*#__PURE__*/b(fe,D({},n))}))),t===X&&(r=/*#__PURE__*/b(pe,D({},n))),t===ee&&(r=/*#__PURE__*/b(ge,D({},n))),r}var we=["generateLink"],Ie=function(e){return"atomic"===e.getType()?{component:Ne,editable:!1}:null},Ne=function(t){var r,o,i,a,l=t.block.getEntityAt(0),c=l&&t.contentState.getEntity(l),s=null==c?void 0:c.getType(),u=n(ue),d=u.generateLink,f=j(u,we),p=(r=D({generateLink:d},null==c?void 0:c.getData()),i=(o=e.useState(r.src))[0],a=o[1],e.useEffect(function(){return function(){try{Promise.resolve(function(){if(!r.src)return function(e,t){try{var n=function(){if(!r.generateLink||"function"!=typeof r.generateLink)throw Error("link gnerator function must be supplied");return Promise.resolve(r.generateLink(r.storageInfo)).then(function(e){if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");a(e)})}()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}(0,function(e){a(L),console.log(e)})}())}catch(e){return Promise.reject(e)}}(),function(){}},[r.generateLink]),{link:i});/*#__PURE__*/return b(Ee,D({type:s,data:D({},null==c?void 0:c.getData(),p),editorControllers:D({},f)},t))},xe=["readOnly"];function Oe(t){var n=t.readOnly,r=void 0!==n&&n,o=j(t,xe),i=e.useContext(ue);/*#__PURE__*/return b(T,{children:/*#__PURE__*/b(F,{ref:i.editorRef,blockRendererFn:Ie,placeholder:o.placeholder,onChange:i.handleEditorStateChange,editorState:i.editorState,spellCheck:!0,handleKeyCommand:i.handleKeyCommand,handleDroppedFiles:i.handleDroppedFiles,handlePastedFiles:i.handlePastedFiles,readOnly:r,onFocus:i.activateEditor,onBlur:i.deactivateEditor})})}var Fe={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:J},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:J},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:J},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:J}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:W},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:W},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:W},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:W},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:W}],ENTITY_TYPES:[{label:"Image",style:V,icon:"fa-solid fa-images",element:Z},{label:"Divider",style:X,icon:"fa-solid fa-minus",element:Z}]};function Le(e){/*#__PURE__*/return b("span",{className:"draft-toolbar-button-separator",children:"|"})}var De=/*#__PURE__*/e.forwardRef(function(e,t){/*#__PURE__*/return b("input",D({},e,{ref:t,className:"d-none",type:"file",accept:e.accept||"image/*"}))});function Pe(t){var n=e.useContext(ue),r=n.editorState,o=n.handleToolClick;/*#__PURE__*/return y(T,{children:[/*#__PURE__*/b(De,D({},(0,n.getFileInputProps)())),Object.keys(Fe).map(function(t,n){var i;/*#__PURE__*/return y(e.Fragment,{children:[null==(i=Fe[t])?void 0:i.map(function(e){/*#__PURE__*/return b(l,{title:null==e?void 0:e.label,className:"btn btn-icon text-muted m-0",onMouseDown:function(t){return o(e,t)},children:e.icon?/*#__PURE__*/b("i",{className:v(e.icon,{"text-primary":r.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==r?void 0:r.getCurrentContent().getBlockForKey(null==r?void 0:r.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)})}):null==e?void 0:e.label},null==e?void 0:e.style)}),n<Object.keys(Fe).length-1&&/*#__PURE__*/b(Le,{})]},t)})]})}function je(t){var n=e.useContext(ue),r=n.forceFocusEditorEnd;/*#__PURE__*/return y("div",{className:v("draft-editor-container d-flex flex-column",{"editor-disabled":t.readOnly,"editor-active":n.focusedForEditing}),children:[!t.readOnly&&/*#__PURE__*/y("div",{children:[/*#__PURE__*/b(Pe,D({},t)),/*#__PURE__*/b("hr",{})]}),/*#__PURE__*/b(Oe,D({},t)),/*#__PURE__*/b("div",{className:"flex-grow-1",onMouseDown:r})]})}function Re(e){/*#__PURE__*/return b(de,D({},e,{children:/*#__PURE__*/b(je,D({},e))}))}Re.propTypes={value:a.string,linkGeneratorFn:a.func,handleUpload:a.func};export{R as Button,A as Card,M as CardBody,z as CardFooter,U as CardHeader,B as Dropdown,H as DropdownItem,q as DropdownMenu,_ as DropdownToggle,Y as SimpleTable,Re as TextEditor};
//# sourceMappingURL=ims-ui-kit.module.js.map