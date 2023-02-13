import e,{useCallback as t,useContext as n,useRef as r,useEffect as o,useState as l}from"react";import i from"prop-types";import{Button as a,Card as s,CardBody as c,CardFooter as d,CardHeader as u,Dropdown as p,DropdownToggle as f,DropdownMenu as g,DropdownItem as m,Table as h}from"reactstrap";import y from"classnames";import{jsxs as v,jsx as b,Fragment as T}from"react/jsx-runtime";import{Modifier as C,EditorState as S,CompositeDecorator as k,ContentState as w,convertFromRaw as E,convertToRaw as I,RichUtils as N,SelectionState as x,AtomicBlockUtils as O,Editor as F}from"draft-js";import L from"assets/img/default-avatar.png";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function R(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function j(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(o[n]=e[n]);return o}Object.assign({leftIcon:"",rightIcon:""},a.prototype.props);const A=e=>/*#__PURE__*/v(a,D({},e,{children:[e.leftIcon?/*#__PURE__*/b("i",{className:y(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?/*#__PURE__*/b("i",{className:y(e.rightIcon,"ms-2")}):null]}));A.propTypes=D({leftIcon:i.string,rightIcon:i.string},a.propTypes&&a.propTypes),Object.assign({},s.prototype.props);const M=e=>/*#__PURE__*/b(s,D({},e,{children:e.children}));M.propTypes=D({},s.propTypes&&s.propTypes),Object.assign({},c.prototype.props);const z=e=>/*#__PURE__*/b(c,D({},e,{children:e.children}));z.propTypes=D({},c.propTypes&&c.propTypes),Object.assign({},d.prototype.props);const P=e=>/*#__PURE__*/b(d,D({},e,{children:e.children}));P.propTypes=D({},d.propTypes&&d.propTypes),Object.assign({},u.prototype.props);const U=e=>/*#__PURE__*/b(u,D({},e,{children:e.children}));U.propTypes=D({},u.propTypes&&u.propTypes),Object.assign({},p.prototype.props);const B=e=>{let t=D({},(R(e),e));/*#__PURE__*/return b(p,D({},t,{children:t.children}))};B.propTypes=D({},p.propTypes&&p.propTypes);const K=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},f.prototype.props);const _=e=>{let t=j(e,K);/*#__PURE__*/return b(T,{children:/*#__PURE__*/v(f,D({caret:!t.startIcon&&!t.endIcon&&t.caret},t,{children:[t.startIcon&&/*#__PURE__*/b("i",{className:y(t.startIcon,"me-2")}),t.children,t.endIcon&&/*#__PURE__*/b("i",{className:y(t.endIcon,"ms-2")})]}))})};_.propTypes=D({startIcon:i.string,endIcon:i.string,caret:i.bool},f.propTypes&&f.propTypes),Object.assign({},g.prototype.props);const q=e=>{let t=D({},(R(e),e));/*#__PURE__*/return b(g,D({},t,{children:t.children}))};q.propTypes=D({},g.propTypes&&g.propTypes);const G=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},m.prototype.props);const H=e=>{let{leftIcon:t="",rightIcon:n="",leftIconStyle:r="text-secondary",rightIconStyle:o="text-secondary"}=e,l=j(e,G);/*#__PURE__*/return v(m,D({},l,{className:"d-flex justify-content-between align-items-center",children:[/*#__PURE__*/v("span",{children:[t&&/*#__PURE__*/b("i",{className:`${t} ${r} me-2`}),l.children]}),n&&/*#__PURE__*/b("i",{className:`${n} ${o}`})]}))};H.propTypes=D({},m.propTypes&&m.propTypes);const Y=e=>/*#__PURE__*/v(h,{striped:!0,hover:!0,children:[/*#__PURE__*/b("thead",{children:/*#__PURE__*/b("tr",{children:e.thead.map((t,n)=>/*#__PURE__*/b("th",{className:y("",{"text-right":e.thead.length-1===n}),children:t.text},n))})}),/*#__PURE__*/b("tbody",{children:e.tbody.map((e,t)=>/*#__PURE__*/v("tr",{className:y({[e.className]:void 0!==e.className}),children:[e.data.map((e,t)=>/*#__PURE__*/b("td",{className:y({[e.className]:void 0!==e.className}),children:e.item},t)),e.actions&&/*#__PURE__*/b("td",{className:"text-right",children:e.actions})]},t))})]});Y.propTypes={thead:i.arrayOf(i.shape({className:i.string,text:i.string.isRequired})).isRequired,tbody:i.arrayOf(i.shape({className:i.string,data:i.arrayOf(i.shape({className:i.string,item:i.oneOfType([i.string,i.number,i.node]).isRequired})).isRequired,actions:i.node})).isRequired};const $="inline-default",J="block-default",W="atomic-entity",Z="image",V="divider",X="link",Q="mention",ee="checklist",te="start";function ne({name:e,profileImageUrl:n,_id:r,onSelect:o=(()=>{})}){let l=t(t=>{t.preventDefault(),o({name:e,profileImageUrl:n,_id:r})});/*#__PURE__*/return v("div",{className:"d-flex align-items-center",children:[/*#__PURE__*/b("div",{className:"avatar mb-1",children:/*#__PURE__*/b("img",{src:n||L,alt:e})}),/*#__PURE__*/b("div",{onClick:l,className:"btn btn-link p-2 mb-1",children:e})]})}const re=["suggestions"];function oe(e){let{suggestions:t}=e,r=j(e,re),{computedPosForMentionSuggestions:o}=n(de);/*#__PURE__*/return b(T,{children:t.length?/*#__PURE__*/b("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:D({},o),children:t.map((e,t)=>/*#__PURE__*/b(ne,D({},e,r),e.name+t))}):null})}function le(e,t,n){const r=t.getText();let o,l;for(;null!==(o=e.exec(r));)l=o.index,n(l,l+o[0].length)}const ie=/\B@\w+/g,ae=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,se=new k([{strategy:function(e,t,n){le(ie,e,t)},component:function(e){let l=r(null),{editorRef:i,mentionSuggestions:a,updateComputedPosForMentionSuggestions:s,handleMentionSelect:c}=n(de);const d=t(()=>{var e,t;return{left:(null==(e=i.current)||null==(t=e.editor)?void 0:t.getBoundingClientRect()).width-l.current.offsetLeft<240?l.current.offsetLeft-230:l.current.offsetLeft,top:l.current.offsetTop,display:"block"}},[]),u=t(()=>({display:"none"}),[]);function p(){if(!e.entityKey)return null;const t=e.contentState.getEntity(e.entityKey);return D({},null==t?void 0:t.getData())}return o(()=>{l.current&&s(d())},[]),/*#__PURE__*/v(T,{children:[p()?/*#__PURE__*/b("a",{href:"/admin/users/"+p()._id,className:"text-primary",children:p().name}):/*#__PURE__*/b("span",{ref:l,className:"",children:e.children}),/*#__PURE__*/b(oe,{suggestions:a.filter(t=>{var n;return t.name.toLowerCase().includes(e.decoratedText.slice(1,null==e||null==(n=e.decoratedText)?void 0:n.length).toLowerCase())}),onSelect:({name:t,profileImageUrl:n,_id:r})=>{let o="@"+t.split(" ").join("_");c(e.contentState,e.blockKey,{start:e.start,end:e.end},{mention:o+" ",profileImageUrl:n,_id:r,name:t}),s(u())}})]})}},{strategy:function(e,t,n){le(ae,e,t)},component:function(e){/*#__PURE__*/return b("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer",children:e.children})}},{strategy:(e,t,n)=>{e.findEntityRanges(e=>{const t=e.getEntity();return null!==t&&n.getEntity(t).getType()===X},t)},component:function(e){let t=e.contentState.getEntity(e.entityKey).getData();return t.href?/*#__PURE__*/b("a",{href:t.href,title:t.linkText,target:"_blank",rel:"noreferrer",children:t.linkText||t.href}):null}}]),ce=["children"],de=/*#__PURE__*/e.createContext(),ue=t=>{let{children:n}=t,r=j(t,ce),o=function(t){const n=e.useRef(null),[r,o]=e.useState(S.createEmpty(se)),[i,a]=l(!1),[s,c]=e.useState({display:"none"});e.useEffect(()=>{let e;try{"string"==typeof t.value&&(e=JSON.parse(t.value)),"object"==typeof t.value&&(e=t.value)}catch(e){if(console.log(e),"string"==typeof t.value)return p(S.createWithContent(w.createFromText(t.value)))}return p(t.value||e?S.set(r,{currentContent:E(e),directionMap:S.createWithContent(E(e)).getDirectionMap()}):S.createEmpty(se))},[t.value]);const d=e.useRef(null),u=(e,t)=>{const n=r.getCurrentContent().createEntity(e,"IMMUTABLE",D({},t)),o=n.getLastCreatedEntityKey(),l=S.set(r,{currentContent:n},"create-entity");p(O.insertAtomicBlock(l,o," "))},p=e=>{const n=e.getCurrentContent();o(e),t.onDataStructureChange(JSON.stringify(I(n)))},f=async e=>{if(!t.handleUpload)return console.log("Uploader function not specified");if(!e.every(e=>"image"===e.type.split("/")[0]))return console.log("All files has to be images");try{let n=await Promise.all(e.map(e=>t.handleUpload(e)));console.log(n),n.every(e=>e)||console.log("one or mutiple files don't have storage info"),n.map(e=>u(Z,{storageInfo:e}))}catch(e){return console.log(e)}},g=e=>{e.preventDefault(),f(Array.from(e.target.files))},m={[Z]:()=>d.current.click(),[X]:()=>p((e=>{let t=window.prompt("Paste the link bellow:");if(t){let n=window.prompt("Paste the link-text below:");if(n){const r=e.getCurrentContent();r.createEntity(X,"MUTABLE",{href:t,linkText:n});let o=r.getLastCreatedEntityKey();const l=e.getSelection(),i=C.replaceText(r,l,n,null,o),a=l.set("anchorOffset",l.getAnchorOffset()+n.length),s=S.set(e,{currentContent:i},"create-entity"),c=S.forceSelection(s,a);return console.log(a.getAnchorOffset(),"editor selection anchor offset after link insert:",c.getSelection().getAnchorOffset()),c}}})(r)),[V]:()=>u(V,{}),[Q]:()=>{},[ee]:()=>{u(ee,{})}},h={[$]:e=>p(N.toggleInlineStyle(r,e)),[J]:e=>p(N.toggleBlockType(r,e)),[W]:e=>{m[e]()}};return{editorRef:n,editorState:r,computedPosForMentionSuggestions:s,focusedForEditing:i,getFileInputProps:()=>({ref:d,onChange:g}),generateLink:async e=>t.linkGeneratorFn&&"function"==typeof t.linkGeneratorFn?t.linkGeneratorFn(e):null,handleDroppedFiles:(e,t)=>f(t),handlePastedFiles:e=>f(e),handleEditorStateChange:p,handleKeyCommand:(e,t)=>{let n=N.handleKeyCommand(t,e);return n?(p(n),"handled"):"not-handled"},handleToolClick:(e,t)=>(t.preventDefault(),r.getSelection().getHasFocus()&&null!=e&&e.element?void h[e.element](e.style):null),forceFocusEditorEnd:e=>{var t;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(t=n.current.editor)||t.focus(),p(S.moveFocusToEnd(r))},updateComputedPosForMentionSuggestions:e=>c(e),handleMentionSelect:(e,t,n,o)=>{let l=x.createEmpty(t),i=e.createEntity(Q,"IMMUTABLE",D({},o)),a=i.getLastCreatedEntityKey();i=C.replaceText(e,l.merge({anchorOffset:n.start,focusOffset:n.end}),o.mention,r.getCurrentInlineStyle(),a),p(S.forceSelection(S.moveFocusToEnd(S.set(r,{currentContent:i})),i.getSelectionAfter()))},activateEditor:()=>a(!0),deactivateEditor:()=>a(!1)}}({handleUpload:r.handleUpload||async function(){},linkGeneratorFn:r.linkGeneratorFn,onDataStructureChange:r.onDataStructureChange||function(){},value:r.value||null}),i=D({},(R(o),o));/*#__PURE__*/return b(de.Provider,{value:D({},i,{mentionSuggestions:r.mentionSuggestions||[]}),children:n})};function pe(e){var t;return e.src||e.link?/*#__PURE__*/b("img",{src:e.src||e.link,alt:e.alt||(null==(t=e.storageInfo)?void 0:t.Key)||"...",className:"unselectable"}):null}function fe(){/*#__PURE__*/return b("hr",{})}function ge({}){/*#__PURE__*/return b(e.Fragment,{})}const me=["editorRef","onResizeEnd","reference","currentSize"],he=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function ye(t){var n,r;let{editorRef:o,onResizeEnd:l,reference:i="left",currentSize:a=10}=t,s=j(t,me),[c,d]=e.useState(!1),[u,p]=e.useState(a);const f=null==(n=o.current)||null==(r=n.editor)?void 0:r.getBoundingClientRect();let g=e.useCallback(e=>{e.preventDefault();const t=e=>{let t=[...he];d(!0);let n="center"===i?f.width/2:f.width,r=parseInt(Math.abs(e.clientX-("center"===i?f.left+f.width/2:"end"===i?f.left+f.width:f.left))),o=parseInt(r/n*100);t.sort((e,t)=>Math.abs(o-e)-Math.abs(o-t));let a=t[0];p(a),l&&l({partition:a});let c=s.block.getEntityAt(0);s.contentState.mergeEntityData(c,{size:a})},n=()=>{d(!1),document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",n,!1)};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",n,!1)},[l]);/*#__PURE__*/return v(T,{children:[/*#__PURE__*/b("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:g,children:/*#__PURE__*/b("div",{className:"bg-primary rounded resize-bar"})}),c&&/*#__PURE__*/b("div",{className:"resize-guides-container position-absolute ",children:he.map(e=>(parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(f.width*e/100)})).map(e=>/*#__PURE__*/b("div",{className:y("resize-guide position-absolute rounded",{"bg-info":"start"===i&&e.percentage===u||"end"===i&&100-e.percentage===u}),style:{left:e.pixels}},e.pixels))})]})}const ve=["editorRef","onAlignmentChange"],be=[{label:"Align left",style:te,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function Te(e){let{onAlignmentChange:n}=e,r=j(e,ve),o=t(({alignment:e})=>{n&&n({alignment:e});let t=r.block.getEntityAt(0);r.contentState.mergeEntityData(t,{alignment:e})},[n]);/*#__PURE__*/return b("div",{className:"d-inline-block shadow-md rounded mb-1",children:be.map(e=>/*#__PURE__*/b(a,{title:null==e?void 0:e.label,type:"button",className:y("btn btn-icon m-0 text-muted",{}),onClick:t=>o({alignment:null==e?void 0:e.style}),children:e.icon?/*#__PURE__*/b("i",{className:e.icon}):null==e?void 0:e.label},null==e?void 0:e.style))})}const Ce=["children"];function Se(t){let{children:n}=t,r=j(t,Ce),[o,l]=e.useState(!1),[i,a]=e.useState(r.size||30),[s,c]=e.useState(r.alignment||te),d=()=>({"justify-content-start":"start"===s,"justify-content-center":"center"===s,"justify-content-end":"end"===s});/*#__PURE__*/return v(T,{children:[o&&s&&/*#__PURE__*/b("div",{className:y("d-flex",d()),children:/*#__PURE__*/b(Te,D({onAlignmentChange:e=>c(e.alignment)},r))}),/*#__PURE__*/v("div",{className:y("d-flex align-items-center position-relative",d()),children:[o&&"start"!==s&&/*#__PURE__*/b(ye,D({},r,{reference:s,onResizeEnd:e=>a(e.partition)})),/*#__PURE__*/b("div",{className:y("d-inline-block rounded resize-container unselectable",{"resize-focused":o,"w-10":10===i,"w-15":15===i,"w-20":20===i,"w-25":25===i,"w-30":30===i,"w-35":35===i,"w-40":40===i,"w-45":45===i,"w-50":50===i,"w-55":55===i,"w-60":60===i,"w-65":65===i,"w-70":70===i,"w-75":75===i,"w-80":80===i,"w-85":85===i,"w-90":90===i,"w-95":95===i,"w-100":100===i}),onClick:()=>l(e=>!e),children:n}),o&&"end"!==s&&/*#__PURE__*/b(ye,D({},r,{reference:s,currentSize:i,onResizeEnd:e=>a(e.partition)}))]})]})}const ke=["type","data","editorControllers"];function we(e){let{type:t,data:n,editorControllers:r}=e,o=null,l=D({},n,r,j(e,ke));return t===Z&&(o=/*#__PURE__*/b(Se,D({},l,{children:/*#__PURE__*/b(pe,D({},n))}))),t===V&&(o=/*#__PURE__*/b(fe,D({},n))),t===ee&&(o=/*#__PURE__*/b(ge,D({},n))),o}const Ee=["generateLink"],Ie=e=>"atomic"===e.getType()?{component:Ne,editable:!1}:null,Ne=t=>{const r=t.block.getEntityAt(0),o=r&&t.contentState.getEntity(r),l=null==o?void 0:o.getType(),i=n(de),{generateLink:a}=i,s=j(i,Ee);let c=function(t){let[n,r]=e.useState(t.src);return e.useEffect(()=>(async function(){if(!t.src)try{if(!t.generateLink||"function"!=typeof t.generateLink)throw Error("link gnerator function must be supplied");let e=await t.generateLink(t.storageInfo);if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");r(e)}catch(e){r(L),console.log(e)}}(),()=>{}),[t.generateLink]),{link:n}}(D({generateLink:a},null==o?void 0:o.getData()));/*#__PURE__*/return b(we,D({type:l,data:D({},null==o?void 0:o.getData(),c),editorControllers:D({},s)},t))},xe=["readOnly"];function Oe(t){let{readOnly:n=!1}=t,r=j(t,xe);const{editorRef:o,editorState:l,handleEditorStateChange:i,handleDroppedFiles:a,handlePastedFiles:s,handleKeyCommand:c,activateEditor:d,deactivateEditor:u}=e.useContext(de);/*#__PURE__*/return b(T,{children:/*#__PURE__*/b(F,{ref:o,blockRendererFn:Ie,placeholder:r.placeholder,onChange:i,editorState:l,spellCheck:!0,handleKeyCommand:c,handleDroppedFiles:a,handlePastedFiles:s,readOnly:n,onFocus:d,onBlur:u})})}const Fe={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:$},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:$},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:$},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:$}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:J},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:J},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:J},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:J},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:J}],ENTITY_TYPES:[{label:"Image",style:Z,icon:"fa-solid fa-images",element:W},{label:"Divider",style:V,icon:"fa-solid fa-minus",element:W}]};function Le(e){/*#__PURE__*/return b("span",{className:"draft-toolbar-button-separator",children:"|"})}const De=/*#__PURE__*/e.forwardRef((e,t)=>/*#__PURE__*/b("input",D({},e,{ref:t,className:"d-none",type:"file",accept:e.accept||"image/*"})));function Re(t){const{getFileInputProps:n,editorState:r,handleToolClick:o}=e.useContext(de);/*#__PURE__*/return v(T,{children:[/*#__PURE__*/b(De,D({},n())),Object.keys(Fe).map((t,n)=>{var l;/*#__PURE__*/return v(e.Fragment,{children:[null==(l=Fe[t])?void 0:l.map(e=>/*#__PURE__*/b(a,{title:null==e?void 0:e.label,className:"btn btn-icon text-muted m-0",onMouseDown:t=>o(e,t),children:e.icon?/*#__PURE__*/b("i",{className:y(e.icon,{"text-primary":r.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==r?void 0:r.getCurrentContent().getBlockForKey(null==r?void 0:r.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)})}):null==e?void 0:e.label},null==e?void 0:e.style)),n<Object.keys(Fe).length-1&&/*#__PURE__*/b(Le,{})]},t)})]})}function je(t){const{forceFocusEditorEnd:n,focusedForEditing:r}=e.useContext(de);/*#__PURE__*/return v("div",{className:y("draft-editor-container d-flex flex-column",{"editor-disabled":t.readOnly,"editor-active":r}),children:[!t.readOnly&&/*#__PURE__*/v("div",{children:[/*#__PURE__*/b(Re,D({},t)),/*#__PURE__*/b("hr",{})]}),/*#__PURE__*/b(Oe,D({},t)),/*#__PURE__*/b("div",{className:"flex-grow-1",onMouseDown:n})]})}function Ae(e){/*#__PURE__*/return b(ue,D({},e,{children:/*#__PURE__*/b(je,D({},e))}))}Ae.propTypes={value:i.string,linkGeneratorFn:i.func,handleUpload:i.func};export{A as Button,M as Card,z as CardBody,P as CardFooter,U as CardHeader,B as Dropdown,H as DropdownItem,q as DropdownMenu,_ as DropdownToggle,Y as SimpleTable,Ae as TextEditor};
//# sourceMappingURL=ims-ui-kit.modern.mjs.map
