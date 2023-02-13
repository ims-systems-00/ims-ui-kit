!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("prop-types"),require("reactstrap"),require("classnames"),require("react/jsx-runtime"),require("draft-js"),require("assets/img/default-avatar.png")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","reactstrap","classnames","react/jsx-runtime","draft-js","assets/img/default-avatar.png"],t):t((e||self).imsUiKit={},e.react,e.propTypes,e.reactstrap,e.classnames,e.jsxRuntime,e.draftJs,e.defaultAvatar)}(this,function(e,t,n,r,o,a,i,l){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=/*#__PURE__*/s(t),u=/*#__PURE__*/s(n),d=/*#__PURE__*/s(o),f=/*#__PURE__*/s(l);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function g(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function m(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}Object.assign({leftIcon:"",rightIcon:""},r.Button.prototype.props);var h=function(e){/*#__PURE__*/return a.jsxs(r.Button,p({},e,{children:[e.leftIcon?/*#__PURE__*/a.jsx("i",{className:d.default(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?/*#__PURE__*/a.jsx("i",{className:d.default(e.rightIcon,"ms-2")}):null]}))};h.propTypes=p({leftIcon:u.default.string,rightIcon:u.default.string},r.Button.propTypes&&r.Button.propTypes),Object.assign({},r.Card.prototype.props);var y=function(e){/*#__PURE__*/return a.jsx(r.Card,p({},e,{children:e.children}))};y.propTypes=p({},r.Card.propTypes&&r.Card.propTypes),Object.assign({},r.CardBody.prototype.props);var v=function(e){/*#__PURE__*/return a.jsx(r.CardBody,p({},e,{children:e.children}))};v.propTypes=p({},r.CardBody.propTypes&&r.CardBody.propTypes),Object.assign({},r.CardFooter.prototype.props);var x=function(e){/*#__PURE__*/return a.jsx(r.CardFooter,p({},e,{children:e.children}))};x.propTypes=p({},r.CardFooter.propTypes&&r.CardFooter.propTypes),Object.assign({},r.CardHeader.prototype.props);var j=function(e){/*#__PURE__*/return a.jsx(r.CardHeader,p({},e,{children:e.children}))};j.propTypes=p({},r.CardHeader.propTypes&&r.CardHeader.propTypes),Object.assign({},r.Dropdown.prototype.props);var b=function(e){var t=p({},(g(e),e));/*#__PURE__*/return a.jsx(r.Dropdown,p({},t,{children:t.children}))};b.propTypes=p({},r.Dropdown.propTypes&&r.Dropdown.propTypes);var C=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},r.DropdownToggle.prototype.props);var S=function(e){var t=m(e,C);/*#__PURE__*/return a.jsx(a.Fragment,{children:/*#__PURE__*/a.jsxs(r.DropdownToggle,p({caret:!t.startIcon&&!t.endIcon&&t.caret},t,{children:[t.startIcon&&/*#__PURE__*/a.jsx("i",{className:d.default(t.startIcon,"me-2")}),t.children,t.endIcon&&/*#__PURE__*/a.jsx("i",{className:d.default(t.endIcon,"ms-2")})]}))})};S.propTypes=p({startIcon:u.default.string,endIcon:u.default.string,caret:u.default.bool},r.DropdownToggle.propTypes&&r.DropdownToggle.propTypes),Object.assign({},r.DropdownMenu.prototype.props);var w=function(e){var t=p({},(g(e),e));/*#__PURE__*/return a.jsx(r.DropdownMenu,p({},t,{children:t.children}))};w.propTypes=p({},r.DropdownMenu.propTypes&&r.DropdownMenu.propTypes);var T=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},r.DropdownItem.prototype.props);var E=function(e){var t=e.leftIcon,n=void 0===t?"":t,o=e.rightIcon,i=void 0===o?"":o,l=e.leftIconStyle,s=void 0===l?"text-secondary":l,c=e.rightIconStyle,u=void 0===c?"text-secondary":c,d=m(e,T);/*#__PURE__*/return a.jsxs(r.DropdownItem,p({},d,{className:"d-flex justify-content-between align-items-center",children:[/*#__PURE__*/a.jsxs("span",{children:[n&&/*#__PURE__*/a.jsx("i",{className:n+" "+s+" me-2"}),d.children]}),i&&/*#__PURE__*/a.jsx("i",{className:i+" "+u})]}))};E.propTypes=p({},r.DropdownItem.propTypes&&r.DropdownItem.propTypes);var k=function(e){/*#__PURE__*/return a.jsxs(r.Table,{striped:!0,hover:!0,children:[/*#__PURE__*/a.jsx("thead",{children:/*#__PURE__*/a.jsx("tr",{children:e.thead.map(function(t,n){/*#__PURE__*/return a.jsx("th",{className:d.default("",{"text-right":e.thead.length-1===n}),children:t.text},n)})})}),/*#__PURE__*/a.jsx("tbody",{children:e.tbody.map(function(e,t){var n;/*#__PURE__*/return a.jsxs("tr",{className:d.default((n={},n[e.className]=void 0!==e.className,n)),children:[e.data.map(function(e,t){var n;/*#__PURE__*/return a.jsx("td",{className:d.default((n={},n[e.className]=void 0!==e.className,n)),children:e.item},t)}),e.actions&&/*#__PURE__*/a.jsx("td",{className:"text-right",children:e.actions})]},t)})})]})};k.propTypes={thead:u.default.arrayOf(u.default.shape({className:u.default.string,text:u.default.string.isRequired})).isRequired,tbody:u.default.arrayOf(u.default.shape({className:u.default.string,data:u.default.arrayOf(u.default.shape({className:u.default.string,item:u.default.oneOfType([u.default.string,u.default.number,u.default.node]).isRequired})).isRequired,actions:u.default.node})).isRequired};var I="inline-default",N="block-default",D="atomic-entity",F="image",O="divider",R="link",L="mention",P="checklist",B="start";function M(e){var n=e.name,r=e.profileImageUrl,o=e._id,i=e.onSelect,l=void 0===i?function(){}:i,s=t.useCallback(function(e){e.preventDefault(),l({name:n,profileImageUrl:r,_id:o})});/*#__PURE__*/return a.jsxs("div",{className:"d-flex align-items-center",children:[/*#__PURE__*/a.jsx("div",{className:"avatar mb-1",children:/*#__PURE__*/a.jsx("img",{src:r||f.default,alt:n})}),/*#__PURE__*/a.jsx("div",{onClick:s,className:"btn btn-link p-2 mb-1",children:n})]})}var A=["suggestions"];function U(e){var n=e.suggestions,r=m(e,A),o=t.useContext(G);/*#__PURE__*/return a.jsx(a.Fragment,{children:n.length?/*#__PURE__*/a.jsx("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:p({},o.computedPosForMentionSuggestions),children:n.map(function(e,t){/*#__PURE__*/return a.jsx(M,p({},e,r),e.name+t)})}):null})}function z(e,t,n){for(var r,o,a=t.getText();null!==(r=e.exec(a));)n(o=r.index,o+r[0].length)}var K=/\B@\w+/g,q=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,_=new i.CompositeDecorator([{strategy:function(e,t,n){z(K,e,t)},component:function(e){var n=t.useRef(null),r=t.useContext(G),o=r.editorRef,i=r.mentionSuggestions,l=r.updateComputedPosForMentionSuggestions,s=r.handleMentionSelect,c=t.useCallback(function(){var e,t;return{left:(null==(e=o.current)||null==(t=e.editor)?void 0:t.getBoundingClientRect()).width-n.current.offsetLeft<240?n.current.offsetLeft-230:n.current.offsetLeft,top:n.current.offsetTop,display:"block"}},[]),u=t.useCallback(function(){return{display:"none"}},[]);function d(){if(!e.entityKey)return null;var t=e.contentState.getEntity(e.entityKey);return p({},null==t?void 0:t.getData())}return t.useEffect(function(){n.current&&l(c())},[]),/*#__PURE__*/a.jsxs(a.Fragment,{children:[d()?/*#__PURE__*/a.jsx("a",{href:"/admin/users/"+d()._id,className:"text-primary",children:d().name}):/*#__PURE__*/a.jsx("span",{ref:n,className:"",children:e.children}),/*#__PURE__*/a.jsx(U,{suggestions:i.filter(function(t){var n;return t.name.toLowerCase().includes(e.decoratedText.slice(1,null==e||null==(n=e.decoratedText)?void 0:n.length).toLowerCase())}),onSelect:function(t){var n=t.name,r=t.profileImageUrl,o=t._id,a="@"+n.split(" ").join("_");s(e.contentState,e.blockKey,{start:e.start,end:e.end},{mention:a+" ",profileImageUrl:r,_id:o,name:n}),l(u())}})]})}},{strategy:function(e,t,n){z(q,e,t)},component:function(e){/*#__PURE__*/return a.jsx("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer",children:e.children})}},{strategy:function(e,t,n){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&n.getEntity(t).getType()===R},t)},component:function(e){var t=e.contentState.getEntity(e.entityKey).getData();return t.href?/*#__PURE__*/a.jsx("a",{href:t.href,title:t.linkText,target:"_blank",rel:"noreferrer",children:t.linkText||t.href}):null}}]),H=["children"],G=/*#__PURE__*/c.default.createContext(),Y=function(e){var n=e.children,r=m(e,H),o=function(e){var n,r,o=c.default.useRef(null),a=c.default.useState(i.EditorState.createEmpty(_)),l=a[0],s=a[1],u=t.useState(!1),d=u[0],f=u[1],g=c.default.useState({display:"none"}),m=g[0],h=g[1];c.default.useEffect(function(){var t;try{"string"==typeof e.value&&(t=JSON.parse(e.value)),"object"==typeof e.value&&(t=e.value)}catch(t){if(console.log(t),"string"==typeof e.value)return x(i.EditorState.createWithContent(i.ContentState.createFromText(e.value)))}return x(e.value||t?i.EditorState.set(l,{currentContent:i.convertFromRaw(t),directionMap:i.EditorState.createWithContent(i.convertFromRaw(t)).getDirectionMap()}):i.EditorState.createEmpty(_))},[e.value]);var y=c.default.useRef(null),v=function(e,t){var n=l.getCurrentContent().createEntity(e,"IMMUTABLE",p({},t)),r=n.getLastCreatedEntityKey(),o=i.EditorState.set(l,{currentContent:n},"create-entity");x(i.AtomicBlockUtils.insertAtomicBlock(o,r," "))},x=function(t){var n=t.getCurrentContent();s(t),e.onDataStructureChange(JSON.stringify(i.convertToRaw(n)))},j=function(t){try{if(!e.handleUpload)return Promise.resolve(console.log("Uploader function not specified"));var n=t.every(function(e){return"image"===e.type.split("/")[0]});return Promise.resolve(n?function(n,r){try{var o=Promise.resolve(Promise.all(t.map(function(t){return e.handleUpload(t)}))).then(function(e){console.log(e),e.every(function(e){return e})||console.log("one or mutiple files don't have storage info"),e.map(function(e){return v(F,{storageInfo:e})})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e)}):console.log("All files has to be images"))}catch(e){return Promise.reject(e)}},b=function(e){e.preventDefault(),j(Array.from(e.target.files))},C=((n={})[F]=function(){return y.current.click()},n[R]=function(){return x(function(e){var t=window.prompt("Paste the link bellow:");if(t){var n=window.prompt("Paste the link-text below:");if(n){var r=e.getCurrentContent();r.createEntity(R,"MUTABLE",{href:t,linkText:n});var o=r.getLastCreatedEntityKey(),a=e.getSelection(),l=i.Modifier.replaceText(r,a,n,null,o),s=a.set("anchorOffset",a.getAnchorOffset()+n.length),c=i.EditorState.set(e,{currentContent:l},"create-entity"),u=i.EditorState.forceSelection(c,s);return console.log(s.getAnchorOffset(),"editor selection anchor offset after link insert:",u.getSelection().getAnchorOffset()),u}}}(l))},n[O]=function(){return v(O,{})},n[L]=function(){},n[P]=function(){v(P,{})},n),S=((r={})[I]=function(e){return x(i.RichUtils.toggleInlineStyle(l,e))},r[N]=function(e){return x(i.RichUtils.toggleBlockType(l,e))},r[D]=function(e){C[e]()},r);return{editorRef:o,editorState:l,computedPosForMentionSuggestions:m,focusedForEditing:d,getFileInputProps:function(){return{ref:y,onChange:b}},generateLink:function(t){try{return Promise.resolve(e.linkGeneratorFn&&"function"==typeof e.linkGeneratorFn?e.linkGeneratorFn(t):null)}catch(e){return Promise.reject(e)}},handleDroppedFiles:function(e,t){return j(t)},handlePastedFiles:function(e){return j(e)},handleEditorStateChange:x,handleKeyCommand:function(e,t){var n=i.RichUtils.handleKeyCommand(t,e);return n?(x(n),"handled"):"not-handled"},handleToolClick:function(e,t){return t.preventDefault(),l.getSelection().getHasFocus()&&null!=e&&e.element?void S[e.element](e.style):null},forceFocusEditorEnd:function(e){var t;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(t=o.current.editor)||t.focus(),x(i.EditorState.moveFocusToEnd(l))},updateComputedPosForMentionSuggestions:function(e){return h(e)},handleMentionSelect:function(e,t,n,r){var o=i.SelectionState.createEmpty(t),a=e.createEntity(L,"IMMUTABLE",p({},r)),s=a.getLastCreatedEntityKey();a=i.Modifier.replaceText(e,o.merge({anchorOffset:n.start,focusOffset:n.end}),r.mention,l.getCurrentInlineStyle(),s),x(i.EditorState.forceSelection(i.EditorState.moveFocusToEnd(i.EditorState.set(l,{currentContent:a})),a.getSelectionAfter()))},activateEditor:function(){return f(!0)},deactivateEditor:function(){return f(!1)}}}({handleUpload:r.handleUpload||function(){return Promise.resolve()},linkGeneratorFn:r.linkGeneratorFn,onDataStructureChange:r.onDataStructureChange||function(){},value:r.value||null}),l=p({},(g(o),o));/*#__PURE__*/return a.jsx(G.Provider,{value:p({},l,{mentionSuggestions:r.mentionSuggestions||[]}),children:n})};function J(e){var t;return e.src||e.link?/*#__PURE__*/a.jsx("img",{src:e.src||e.link,alt:e.alt||(null==(t=e.storageInfo)?void 0:t.Key)||"...",className:"unselectable"}):null}function W(){/*#__PURE__*/return a.jsx("hr",{})}function Z(e){/*#__PURE__*/return a.jsx(c.default.Fragment,{})}var V=["editorRef","onResizeEnd","reference","currentSize"],X=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function Q(e){var t,n,r=e.editorRef,o=e.onResizeEnd,i=e.reference,l=void 0===i?"left":i,s=e.currentSize,u=void 0===s?10:s,f=m(e,V),p=c.default.useState(!1),g=p[0],h=p[1],y=c.default.useState(u),v=y[0],x=y[1],j=null==(t=r.current)||null==(n=t.editor)?void 0:n.getBoundingClientRect(),b=c.default.useCallback(function(e){e.preventDefault();var t=function(e){var t=[].concat(X);h(!0);var n="center"===l?j.width/2:j.width,r=parseInt(Math.abs(e.clientX-("center"===l?j.left+j.width/2:"end"===l?j.left+j.width:j.left))),a=parseInt(r/n*100);t.sort(function(e,t){return Math.abs(a-e)-Math.abs(a-t)});var i=t[0];x(i),o&&o({partition:i});var s=f.block.getEntityAt(0);f.contentState.mergeEntityData(s,{size:i})};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",function e(){h(!1),document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",e,!1)},!1)},[o]);/*#__PURE__*/return a.jsxs(a.Fragment,{children:[/*#__PURE__*/a.jsx("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:b,children:/*#__PURE__*/a.jsx("div",{className:"bg-primary rounded resize-bar"})}),g&&/*#__PURE__*/a.jsx("div",{className:"resize-guides-container position-absolute ",children:X.map(function(e){return parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(j.width*e/100)}}).map(function(e){/*#__PURE__*/return a.jsx("div",{className:d.default("resize-guide position-absolute rounded",{"bg-info":"start"===l&&e.percentage===v||"end"===l&&100-e.percentage===v}),style:{left:e.pixels}},e.pixels)})})]})}var $=["editorRef","onAlignmentChange"],ee=[{label:"Align left",style:B,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function te(e){var n=e.onAlignmentChange,o=m(e,$),i=t.useCallback(function(e){var t=e.alignment;n&&n({alignment:t});var r=o.block.getEntityAt(0);o.contentState.mergeEntityData(r,{alignment:t})},[n]);/*#__PURE__*/return a.jsx("div",{className:"d-inline-block shadow-md rounded mb-1",children:ee.map(function(e){/*#__PURE__*/return a.jsx(r.Button,{title:null==e?void 0:e.label,type:"button",className:d.default("btn btn-icon m-0 text-muted",{}),onClick:function(t){return i({alignment:null==e?void 0:e.style})},children:e.icon?/*#__PURE__*/a.jsx("i",{className:e.icon}):null==e?void 0:e.label},null==e?void 0:e.style)})})}var ne=["children"];function re(e){var t=e.children,n=m(e,ne),r=c.default.useState(!1),o=r[0],i=r[1],l=c.default.useState(n.size||30),s=l[0],u=l[1],f=c.default.useState(n.alignment||B),g=f[0],h=f[1],y=function(){return{"justify-content-start":"start"===g,"justify-content-center":"center"===g,"justify-content-end":"end"===g}};/*#__PURE__*/return a.jsxs(a.Fragment,{children:[o&&g&&/*#__PURE__*/a.jsx("div",{className:d.default("d-flex",y()),children:/*#__PURE__*/a.jsx(te,p({onAlignmentChange:function(e){return h(e.alignment)}},n))}),/*#__PURE__*/a.jsxs("div",{className:d.default("d-flex align-items-center position-relative",y()),children:[o&&"start"!==g&&/*#__PURE__*/a.jsx(Q,p({},n,{reference:g,onResizeEnd:function(e){return u(e.partition)}})),/*#__PURE__*/a.jsx("div",{className:d.default("d-inline-block rounded resize-container unselectable",{"resize-focused":o,"w-10":10===s,"w-15":15===s,"w-20":20===s,"w-25":25===s,"w-30":30===s,"w-35":35===s,"w-40":40===s,"w-45":45===s,"w-50":50===s,"w-55":55===s,"w-60":60===s,"w-65":65===s,"w-70":70===s,"w-75":75===s,"w-80":80===s,"w-85":85===s,"w-90":90===s,"w-95":95===s,"w-100":100===s}),onClick:function(){return i(function(e){return!e})},children:t}),o&&"end"!==g&&/*#__PURE__*/a.jsx(Q,p({},n,{reference:g,currentSize:s,onResizeEnd:function(e){return u(e.partition)}}))]})]})}var oe=["type","data","editorControllers"];function ae(e){var t=e.type,n=e.data,r=null,o=p({},n,e.editorControllers,m(e,oe));return t===F&&(r=/*#__PURE__*/a.jsx(re,p({},o,{children:/*#__PURE__*/a.jsx(J,p({},n))}))),t===O&&(r=/*#__PURE__*/a.jsx(W,p({},n))),t===P&&(r=/*#__PURE__*/a.jsx(Z,p({},n))),r}var ie=["generateLink"],le=function(e){return"atomic"===e.getType()?{component:se,editable:!1}:null},se=function(e){var n,r,o,i,l=e.block.getEntityAt(0),s=l&&e.contentState.getEntity(l),u=null==s?void 0:s.getType(),d=t.useContext(G),g=d.generateLink,h=m(d,ie),y=(n=p({generateLink:g},null==s?void 0:s.getData()),o=(r=c.default.useState(n.src))[0],i=r[1],c.default.useEffect(function(){return function(){try{Promise.resolve(function(){if(!n.src)return function(e,t){try{var r=function(){if(!n.generateLink||"function"!=typeof n.generateLink)throw Error("link gnerator function must be supplied");return Promise.resolve(n.generateLink(n.storageInfo)).then(function(e){if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");i(e)})}()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){i(f.default),console.log(e)})}())}catch(e){return Promise.reject(e)}}(),function(){}},[n.generateLink]),{link:o});/*#__PURE__*/return a.jsx(ae,p({type:u,data:p({},null==s?void 0:s.getData(),y),editorControllers:p({},h)},e))},ce=["readOnly"];function ue(e){var t=e.readOnly,n=void 0!==t&&t,r=m(e,ce),o=c.default.useContext(G);/*#__PURE__*/return a.jsx(a.Fragment,{children:/*#__PURE__*/a.jsx(i.Editor,{ref:o.editorRef,blockRendererFn:le,placeholder:r.placeholder,onChange:o.handleEditorStateChange,editorState:o.editorState,spellCheck:!0,handleKeyCommand:o.handleKeyCommand,handleDroppedFiles:o.handleDroppedFiles,handlePastedFiles:o.handlePastedFiles,readOnly:n,onFocus:o.activateEditor,onBlur:o.deactivateEditor})})}var de={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:I},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:I},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:I},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:I}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:N},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:N},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:N},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:N},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:N}],ENTITY_TYPES:[{label:"Image",style:F,icon:"fa-solid fa-images",element:D},{label:"Divider",style:O,icon:"fa-solid fa-minus",element:D}]};function fe(e){/*#__PURE__*/return a.jsx("span",{className:"draft-toolbar-button-separator",children:"|"})}var pe=/*#__PURE__*/c.default.forwardRef(function(e,t){/*#__PURE__*/return a.jsx("input",p({},e,{ref:t,className:"d-none",type:"file",accept:e.accept||"image/*"}))});function ge(e){var t=c.default.useContext(G),n=t.editorState,o=t.handleToolClick;/*#__PURE__*/return a.jsxs(a.Fragment,{children:[/*#__PURE__*/a.jsx(pe,p({},(0,t.getFileInputProps)())),Object.keys(de).map(function(e,t){var i;/*#__PURE__*/return a.jsxs(c.default.Fragment,{children:[null==(i=de[e])?void 0:i.map(function(e){/*#__PURE__*/return a.jsx(r.Button,{title:null==e?void 0:e.label,className:"btn btn-icon text-muted m-0",onMouseDown:function(t){return o(e,t)},children:e.icon?/*#__PURE__*/a.jsx("i",{className:d.default(e.icon,{"text-primary":n.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==n?void 0:n.getCurrentContent().getBlockForKey(null==n?void 0:n.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)})}):null==e?void 0:e.label},null==e?void 0:e.style)}),t<Object.keys(de).length-1&&/*#__PURE__*/a.jsx(fe,{})]},e)})]})}function me(e){var t=c.default.useContext(G),n=t.forceFocusEditorEnd;/*#__PURE__*/return a.jsxs("div",{className:d.default("draft-editor-container d-flex flex-column",{"editor-disabled":e.readOnly,"editor-active":t.focusedForEditing}),children:[!e.readOnly&&/*#__PURE__*/a.jsxs("div",{children:[/*#__PURE__*/a.jsx(ge,p({},e)),/*#__PURE__*/a.jsx("hr",{})]}),/*#__PURE__*/a.jsx(ue,p({},e)),/*#__PURE__*/a.jsx("div",{className:"flex-grow-1",onMouseDown:n})]})}function he(e){/*#__PURE__*/return a.jsx(Y,p({},e,{children:/*#__PURE__*/a.jsx(me,p({},e))}))}he.propTypes={value:u.default.string,linkGeneratorFn:u.default.func,handleUpload:u.default.func},e.Button=h,e.Card=y,e.CardBody=v,e.CardFooter=x,e.CardHeader=j,e.Dropdown=b,e.DropdownItem=E,e.DropdownMenu=w,e.DropdownToggle=S,e.SimpleTable=k,e.TextEditor=he});
//# sourceMappingURL=ims-ui-kit.umd.js.map
