var e=require("react"),t=require("prop-types"),n=require("reactstrap"),r=require("classnames"),o=require("react/jsx-runtime"),a=require("draft-js"),i=require("assets/img/default-avatar.png");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/l(e),c=/*#__PURE__*/l(t),u=/*#__PURE__*/l(r),d=/*#__PURE__*/l(i);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function g(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}Object.assign({leftIcon:"",rightIcon:""},n.Button.prototype.props);var m=function(e){/*#__PURE__*/return o.jsxs(n.Button,f({},e,{children:[e.leftIcon?/*#__PURE__*/o.jsx("i",{className:u.default(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?/*#__PURE__*/o.jsx("i",{className:u.default(e.rightIcon,"ms-2")}):null]}))};m.propTypes=f({leftIcon:c.default.string,rightIcon:c.default.string},n.Button.propTypes&&n.Button.propTypes),Object.assign({},n.Card.prototype.props);var h=function(e){/*#__PURE__*/return o.jsx(n.Card,f({},e,{children:e.children}))};h.propTypes=f({},n.Card.propTypes&&n.Card.propTypes),Object.assign({},n.CardBody.prototype.props);var v=function(e){/*#__PURE__*/return o.jsx(n.CardBody,f({},e,{children:e.children}))};v.propTypes=f({},n.CardBody.propTypes&&n.CardBody.propTypes),Object.assign({},n.CardFooter.prototype.props);var y=function(e){/*#__PURE__*/return o.jsx(n.CardFooter,f({},e,{children:e.children}))};y.propTypes=f({},n.CardFooter.propTypes&&n.CardFooter.propTypes),Object.assign({},n.CardHeader.prototype.props);var x=function(e){/*#__PURE__*/return o.jsx(n.CardHeader,f({},e,{children:e.children}))};x.propTypes=f({},n.CardHeader.propTypes&&n.CardHeader.propTypes),Object.assign({},n.Dropdown.prototype.props);var j=function(e){var t=f({},(p(e),e));/*#__PURE__*/return o.jsx(n.Dropdown,f({},t,{children:t.children}))};j.propTypes=f({},n.Dropdown.propTypes&&n.Dropdown.propTypes);var b=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},n.DropdownToggle.prototype.props);var C=function(e){var t=g(e,b);/*#__PURE__*/return o.jsx(o.Fragment,{children:/*#__PURE__*/o.jsxs(n.DropdownToggle,f({caret:!t.startIcon&&!t.endIcon&&t.caret},t,{children:[t.startIcon&&/*#__PURE__*/o.jsx("i",{className:u.default(t.startIcon,"me-2")}),t.children,t.endIcon&&/*#__PURE__*/o.jsx("i",{className:u.default(t.endIcon,"ms-2")})]}))})};C.propTypes=f({startIcon:c.default.string,endIcon:c.default.string,caret:c.default.bool},n.DropdownToggle.propTypes&&n.DropdownToggle.propTypes),Object.assign({},n.DropdownMenu.prototype.props);var S=function(e){var t=f({},(p(e),e));/*#__PURE__*/return o.jsx(n.DropdownMenu,f({},t,{children:t.children}))};S.propTypes=f({},n.DropdownMenu.propTypes&&n.DropdownMenu.propTypes);var w=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},n.DropdownItem.prototype.props);var E=function(e){var t=e.leftIcon,r=void 0===t?"":t,a=e.rightIcon,i=void 0===a?"":a,l=e.leftIconStyle,s=void 0===l?"text-secondary":l,c=e.rightIconStyle,u=void 0===c?"text-secondary":c,d=g(e,w);/*#__PURE__*/return o.jsxs(n.DropdownItem,f({},d,{className:"d-flex justify-content-between align-items-center",children:[/*#__PURE__*/o.jsxs("span",{children:[r&&/*#__PURE__*/o.jsx("i",{className:r+" "+s+" me-2"}),d.children]}),i&&/*#__PURE__*/o.jsx("i",{className:i+" "+u})]}))};E.propTypes=f({},n.DropdownItem.propTypes&&n.DropdownItem.propTypes);var T=function(e){/*#__PURE__*/return o.jsxs(n.Table,{striped:!0,hover:!0,children:[/*#__PURE__*/o.jsx("thead",{children:/*#__PURE__*/o.jsx("tr",{children:e.thead.map(function(t,n){/*#__PURE__*/return o.jsx("th",{className:u.default("",{"text-right":e.thead.length-1===n}),children:t.text},n)})})}),/*#__PURE__*/o.jsx("tbody",{children:e.tbody.map(function(e,t){var n;/*#__PURE__*/return o.jsxs("tr",{className:u.default((n={},n[e.className]=void 0!==e.className,n)),children:[e.data.map(function(e,t){var n;/*#__PURE__*/return o.jsx("td",{className:u.default((n={},n[e.className]=void 0!==e.className,n)),children:e.item},t)}),e.actions&&/*#__PURE__*/o.jsx("td",{className:"text-right",children:e.actions})]},t)})})]})};T.propTypes={thead:c.default.arrayOf(c.default.shape({className:c.default.string,text:c.default.string.isRequired})).isRequired,tbody:c.default.arrayOf(c.default.shape({className:c.default.string,data:c.default.arrayOf(c.default.shape({className:c.default.string,item:c.default.oneOfType([c.default.string,c.default.number,c.default.node]).isRequired})).isRequired,actions:c.default.node})).isRequired};var k="inline-default",I="block-default",N="atomic-entity",D="image",F="divider",O="link",R="mention",L="checklist",P="start";function B(t){var n=t.name,r=t.profileImageUrl,a=t._id,i=t.onSelect,l=void 0===i?function(){}:i,s=e.useCallback(function(e){e.preventDefault(),l({name:n,profileImageUrl:r,_id:a})});/*#__PURE__*/return o.jsxs("div",{className:"d-flex align-items-center",children:[/*#__PURE__*/o.jsx("div",{className:"avatar mb-1",children:/*#__PURE__*/o.jsx("img",{src:r||d.default,alt:n})}),/*#__PURE__*/o.jsx("div",{onClick:s,className:"btn btn-link p-2 mb-1",children:n})]})}var M=["suggestions"];function A(t){var n=t.suggestions,r=g(t,M),a=e.useContext(H);/*#__PURE__*/return o.jsx(o.Fragment,{children:n.length?/*#__PURE__*/o.jsx("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:f({},a.computedPosForMentionSuggestions),children:n.map(function(e,t){/*#__PURE__*/return o.jsx(B,f({},e,r),e.name+t)})}):null})}function U(e,t,n){for(var r,o,a=t.getText();null!==(r=e.exec(a));)n(o=r.index,o+r[0].length)}var z=/\B@\w+/g,q=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,K=new a.CompositeDecorator([{strategy:function(e,t,n){U(z,e,t)},component:function(t){var n=e.useRef(null),r=e.useContext(H),a=r.editorRef,i=r.mentionSuggestions,l=r.updateComputedPosForMentionSuggestions,s=r.handleMentionSelect,c=e.useCallback(function(){var e,t;return{left:(null==(e=a.current)||null==(t=e.editor)?void 0:t.getBoundingClientRect()).width-n.current.offsetLeft<240?n.current.offsetLeft-230:n.current.offsetLeft,top:n.current.offsetTop,display:"block"}},[]),u=e.useCallback(function(){return{display:"none"}},[]);function d(){if(!t.entityKey)return null;var e=t.contentState.getEntity(t.entityKey);return f({},null==e?void 0:e.getData())}return e.useEffect(function(){n.current&&l(c())},[]),/*#__PURE__*/o.jsxs(o.Fragment,{children:[d()?/*#__PURE__*/o.jsx("a",{href:"/admin/users/"+d()._id,className:"text-primary",children:d().name}):/*#__PURE__*/o.jsx("span",{ref:n,className:"",children:t.children}),/*#__PURE__*/o.jsx(A,{suggestions:i.filter(function(e){var n;return e.name.toLowerCase().includes(t.decoratedText.slice(1,null==t||null==(n=t.decoratedText)?void 0:n.length).toLowerCase())}),onSelect:function(e){var n=e.name,r=e.profileImageUrl,o=e._id,a="@"+n.split(" ").join("_");s(t.contentState,t.blockKey,{start:t.start,end:t.end},{mention:a+" ",profileImageUrl:r,_id:o,name:n}),l(u())}})]})}},{strategy:function(e,t,n){U(q,e,t)},component:function(e){/*#__PURE__*/return o.jsx("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer",children:e.children})}},{strategy:function(e,t,n){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&n.getEntity(t).getType()===O},t)},component:function(e){var t=e.contentState.getEntity(e.entityKey).getData();return t.href?/*#__PURE__*/o.jsx("a",{href:t.href,title:t.linkText,target:"_blank",rel:"noreferrer",children:t.linkText||t.href}):null}}]),_=["children"],H=/*#__PURE__*/s.default.createContext(),G=function(t){var n=t.children,r=g(t,_),i=function(t){var n,r,o=s.default.useRef(null),i=s.default.useState(a.EditorState.createEmpty(K)),l=i[0],c=i[1],u=e.useState(!1),d=u[0],p=u[1],g=s.default.useState({display:"none"}),m=g[0],h=g[1];s.default.useEffect(function(){var e;try{"string"==typeof t.value&&(e=JSON.parse(t.value)),"object"==typeof t.value&&(e=t.value)}catch(e){if(console.log(e),"string"==typeof t.value)return x(a.EditorState.createWithContent(a.ContentState.createFromText(t.value)))}return x(t.value||e?a.EditorState.set(l,{currentContent:a.convertFromRaw(e),directionMap:a.EditorState.createWithContent(a.convertFromRaw(e)).getDirectionMap()}):a.EditorState.createEmpty(K))},[t.value]);var v=s.default.useRef(null),y=function(e,t){var n=l.getCurrentContent().createEntity(e,"IMMUTABLE",f({},t)),r=n.getLastCreatedEntityKey(),o=a.EditorState.set(l,{currentContent:n},"create-entity");x(a.AtomicBlockUtils.insertAtomicBlock(o,r," "))},x=function(e){var n=e.getCurrentContent();c(e),t.onDataStructureChange(JSON.stringify(a.convertToRaw(n)))},j=function(e){try{if(!t.handleUpload)return Promise.resolve(console.log("Uploader function not specified"));var n=e.every(function(e){return"image"===e.type.split("/")[0]});return Promise.resolve(n?function(n,r){try{var o=Promise.resolve(Promise.all(e.map(function(e){return t.handleUpload(e)}))).then(function(e){console.log(e),e.every(function(e){return e})||console.log("one or mutiple files don't have storage info"),e.map(function(e){return y(D,{storageInfo:e})})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e)}):console.log("All files has to be images"))}catch(e){return Promise.reject(e)}},b=function(e){e.preventDefault(),j(Array.from(e.target.files))},C=((n={})[D]=function(){return v.current.click()},n[O]=function(){return x(function(e){var t=window.prompt("Paste the link bellow:");if(t){var n=window.prompt("Paste the link-text below:");if(n){var r=e.getCurrentContent();r.createEntity(O,"MUTABLE",{href:t,linkText:n});var o=r.getLastCreatedEntityKey(),i=e.getSelection(),l=a.Modifier.replaceText(r,i,n,null,o),s=i.set("anchorOffset",i.getAnchorOffset()+n.length),c=a.EditorState.set(e,{currentContent:l},"create-entity"),u=a.EditorState.forceSelection(c,s);return console.log(s.getAnchorOffset(),"editor selection anchor offset after link insert:",u.getSelection().getAnchorOffset()),u}}}(l))},n[F]=function(){return y(F,{})},n[R]=function(){},n[L]=function(){y(L,{})},n),S=((r={})[k]=function(e){return x(a.RichUtils.toggleInlineStyle(l,e))},r[I]=function(e){return x(a.RichUtils.toggleBlockType(l,e))},r[N]=function(e){C[e]()},r);return{editorRef:o,editorState:l,computedPosForMentionSuggestions:m,focusedForEditing:d,getFileInputProps:function(){return{ref:v,onChange:b}},generateLink:function(e){try{return Promise.resolve(t.linkGeneratorFn&&"function"==typeof t.linkGeneratorFn?t.linkGeneratorFn(e):null)}catch(e){return Promise.reject(e)}},handleDroppedFiles:function(e,t){return j(t)},handlePastedFiles:function(e){return j(e)},handleEditorStateChange:x,handleKeyCommand:function(e,t){var n=a.RichUtils.handleKeyCommand(t,e);return n?(x(n),"handled"):"not-handled"},handleToolClick:function(e,t){return t.preventDefault(),l.getSelection().getHasFocus()&&null!=e&&e.element?void S[e.element](e.style):null},forceFocusEditorEnd:function(e){var t;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(t=o.current.editor)||t.focus(),x(a.EditorState.moveFocusToEnd(l))},updateComputedPosForMentionSuggestions:function(e){return h(e)},handleMentionSelect:function(e,t,n,r){var o=a.SelectionState.createEmpty(t),i=e.createEntity(R,"IMMUTABLE",f({},r)),s=i.getLastCreatedEntityKey();i=a.Modifier.replaceText(e,o.merge({anchorOffset:n.start,focusOffset:n.end}),r.mention,l.getCurrentInlineStyle(),s),x(a.EditorState.forceSelection(a.EditorState.moveFocusToEnd(a.EditorState.set(l,{currentContent:i})),i.getSelectionAfter()))},activateEditor:function(){return p(!0)},deactivateEditor:function(){return p(!1)}}}({handleUpload:r.handleUpload||function(){return Promise.resolve()},linkGeneratorFn:r.linkGeneratorFn,onDataStructureChange:r.onDataStructureChange||function(){},value:r.value||null}),l=f({},(p(i),i));/*#__PURE__*/return o.jsx(H.Provider,{value:f({},l,{mentionSuggestions:r.mentionSuggestions||[]}),children:n})};function Y(e){var t;return e.src||e.link?/*#__PURE__*/o.jsx("img",{src:e.src||e.link,alt:e.alt||(null==(t=e.storageInfo)?void 0:t.Key)||"...",className:"unselectable"}):null}function J(){/*#__PURE__*/return o.jsx("hr",{})}function W(e){/*#__PURE__*/return o.jsx(s.default.Fragment,{})}var Z=["editorRef","onResizeEnd","reference","currentSize"],V=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function X(e){var t,n,r=e.editorRef,a=e.onResizeEnd,i=e.reference,l=void 0===i?"left":i,c=e.currentSize,d=void 0===c?10:c,f=g(e,Z),p=s.default.useState(!1),m=p[0],h=p[1],v=s.default.useState(d),y=v[0],x=v[1],j=null==(t=r.current)||null==(n=t.editor)?void 0:n.getBoundingClientRect(),b=s.default.useCallback(function(e){e.preventDefault();var t=function(e){var t=[].concat(V);h(!0);var n="center"===l?j.width/2:j.width,r=parseInt(Math.abs(e.clientX-("center"===l?j.left+j.width/2:"end"===l?j.left+j.width:j.left))),o=parseInt(r/n*100);t.sort(function(e,t){return Math.abs(o-e)-Math.abs(o-t)});var i=t[0];x(i),a&&a({partition:i});var s=f.block.getEntityAt(0);f.contentState.mergeEntityData(s,{size:i})};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",function e(){h(!1),document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",e,!1)},!1)},[a]);/*#__PURE__*/return o.jsxs(o.Fragment,{children:[/*#__PURE__*/o.jsx("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:b,children:/*#__PURE__*/o.jsx("div",{className:"bg-primary rounded resize-bar"})}),m&&/*#__PURE__*/o.jsx("div",{className:"resize-guides-container position-absolute ",children:V.map(function(e){return parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(j.width*e/100)}}).map(function(e){/*#__PURE__*/return o.jsx("div",{className:u.default("resize-guide position-absolute rounded",{"bg-info":"start"===l&&e.percentage===y||"end"===l&&100-e.percentage===y}),style:{left:e.pixels}},e.pixels)})})]})}var Q=["editorRef","onAlignmentChange"],$=[{label:"Align left",style:P,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function ee(t){var r=t.onAlignmentChange,a=g(t,Q),i=e.useCallback(function(e){var t=e.alignment;r&&r({alignment:t});var n=a.block.getEntityAt(0);a.contentState.mergeEntityData(n,{alignment:t})},[r]);/*#__PURE__*/return o.jsx("div",{className:"d-inline-block shadow-md rounded mb-1",children:$.map(function(e){/*#__PURE__*/return o.jsx(n.Button,{title:null==e?void 0:e.label,type:"button",className:u.default("btn btn-icon m-0 text-muted",{}),onClick:function(t){return i({alignment:null==e?void 0:e.style})},children:e.icon?/*#__PURE__*/o.jsx("i",{className:e.icon}):null==e?void 0:e.label},null==e?void 0:e.style)})})}var te=["children"];function ne(e){var t=e.children,n=g(e,te),r=s.default.useState(!1),a=r[0],i=r[1],l=s.default.useState(n.size||30),c=l[0],d=l[1],p=s.default.useState(n.alignment||P),m=p[0],h=p[1],v=function(){return{"justify-content-start":"start"===m,"justify-content-center":"center"===m,"justify-content-end":"end"===m}};/*#__PURE__*/return o.jsxs(o.Fragment,{children:[a&&m&&/*#__PURE__*/o.jsx("div",{className:u.default("d-flex",v()),children:/*#__PURE__*/o.jsx(ee,f({onAlignmentChange:function(e){return h(e.alignment)}},n))}),/*#__PURE__*/o.jsxs("div",{className:u.default("d-flex align-items-center position-relative",v()),children:[a&&"start"!==m&&/*#__PURE__*/o.jsx(X,f({},n,{reference:m,onResizeEnd:function(e){return d(e.partition)}})),/*#__PURE__*/o.jsx("div",{className:u.default("d-inline-block rounded resize-container unselectable",{"resize-focused":a,"w-10":10===c,"w-15":15===c,"w-20":20===c,"w-25":25===c,"w-30":30===c,"w-35":35===c,"w-40":40===c,"w-45":45===c,"w-50":50===c,"w-55":55===c,"w-60":60===c,"w-65":65===c,"w-70":70===c,"w-75":75===c,"w-80":80===c,"w-85":85===c,"w-90":90===c,"w-95":95===c,"w-100":100===c}),onClick:function(){return i(function(e){return!e})},children:t}),a&&"end"!==m&&/*#__PURE__*/o.jsx(X,f({},n,{reference:m,currentSize:c,onResizeEnd:function(e){return d(e.partition)}}))]})]})}var re=["type","data","editorControllers"];function oe(e){var t=e.type,n=e.data,r=null,a=f({},n,e.editorControllers,g(e,re));return t===D&&(r=/*#__PURE__*/o.jsx(ne,f({},a,{children:/*#__PURE__*/o.jsx(Y,f({},n))}))),t===F&&(r=/*#__PURE__*/o.jsx(J,f({},n))),t===L&&(r=/*#__PURE__*/o.jsx(W,f({},n))),r}var ae=["generateLink"],ie=function(e){return"atomic"===e.getType()?{component:le,editable:!1}:null},le=function(t){var n,r,a,i,l=t.block.getEntityAt(0),c=l&&t.contentState.getEntity(l),u=null==c?void 0:c.getType(),p=e.useContext(H),m=p.generateLink,h=g(p,ae),v=(n=f({generateLink:m},null==c?void 0:c.getData()),a=(r=s.default.useState(n.src))[0],i=r[1],s.default.useEffect(function(){return function(){try{Promise.resolve(function(){if(!n.src)return function(e,t){try{var r=function(){if(!n.generateLink||"function"!=typeof n.generateLink)throw Error("link gnerator function must be supplied");return Promise.resolve(n.generateLink(n.storageInfo)).then(function(e){if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");i(e)})}()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){i(d.default),console.log(e)})}())}catch(e){return Promise.reject(e)}}(),function(){}},[n.generateLink]),{link:a});/*#__PURE__*/return o.jsx(oe,f({type:u,data:f({},null==c?void 0:c.getData(),v),editorControllers:f({},h)},t))},se=["readOnly"];function ce(e){var t=e.readOnly,n=void 0!==t&&t,r=g(e,se),i=s.default.useContext(H);/*#__PURE__*/return o.jsx(o.Fragment,{children:/*#__PURE__*/o.jsx(a.Editor,{ref:i.editorRef,blockRendererFn:ie,placeholder:r.placeholder,onChange:i.handleEditorStateChange,editorState:i.editorState,spellCheck:!0,handleKeyCommand:i.handleKeyCommand,handleDroppedFiles:i.handleDroppedFiles,handlePastedFiles:i.handlePastedFiles,readOnly:n,onFocus:i.activateEditor,onBlur:i.deactivateEditor})})}var ue={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:k},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:k},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:k},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:k}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:I},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:I},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:I},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:I},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:I}],ENTITY_TYPES:[{label:"Image",style:D,icon:"fa-solid fa-images",element:N},{label:"Divider",style:F,icon:"fa-solid fa-minus",element:N}]};function de(e){/*#__PURE__*/return o.jsx("span",{className:"draft-toolbar-button-separator",children:"|"})}var fe=/*#__PURE__*/s.default.forwardRef(function(e,t){/*#__PURE__*/return o.jsx("input",f({},e,{ref:t,className:"d-none",type:"file",accept:e.accept||"image/*"}))});function pe(e){var t=s.default.useContext(H),r=t.editorState,a=t.handleToolClick;/*#__PURE__*/return o.jsxs(o.Fragment,{children:[/*#__PURE__*/o.jsx(fe,f({},(0,t.getFileInputProps)())),Object.keys(ue).map(function(e,t){var i;/*#__PURE__*/return o.jsxs(s.default.Fragment,{children:[null==(i=ue[e])?void 0:i.map(function(e){/*#__PURE__*/return o.jsx(n.Button,{title:null==e?void 0:e.label,className:"btn btn-icon text-muted m-0",onMouseDown:function(t){return a(e,t)},children:e.icon?/*#__PURE__*/o.jsx("i",{className:u.default(e.icon,{"text-primary":r.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==r?void 0:r.getCurrentContent().getBlockForKey(null==r?void 0:r.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)})}):null==e?void 0:e.label},null==e?void 0:e.style)}),t<Object.keys(ue).length-1&&/*#__PURE__*/o.jsx(de,{})]},e)})]})}function ge(e){var t=s.default.useContext(H),n=t.forceFocusEditorEnd;/*#__PURE__*/return o.jsxs("div",{className:u.default("draft-editor-container d-flex flex-column",{"editor-disabled":e.readOnly,"editor-active":t.focusedForEditing}),children:[!e.readOnly&&/*#__PURE__*/o.jsxs("div",{children:[/*#__PURE__*/o.jsx(pe,f({},e)),/*#__PURE__*/o.jsx("hr",{})]}),/*#__PURE__*/o.jsx(ce,f({},e)),/*#__PURE__*/o.jsx("div",{className:"flex-grow-1",onMouseDown:n})]})}function me(e){/*#__PURE__*/return o.jsx(G,f({},e,{children:/*#__PURE__*/o.jsx(ge,f({},e))}))}me.propTypes={value:c.default.string,linkGeneratorFn:c.default.func,handleUpload:c.default.func},exports.Button=m,exports.Card=h,exports.CardBody=v,exports.CardFooter=y,exports.CardHeader=x,exports.Dropdown=j,exports.DropdownItem=E,exports.DropdownMenu=S,exports.DropdownToggle=C,exports.SimpleTable=T,exports.TextEditor=me;
//# sourceMappingURL=ims-ui-kit.js.map