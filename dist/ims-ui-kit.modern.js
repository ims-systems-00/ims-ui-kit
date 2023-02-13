import e,{useCallback as t,useContext as n,useRef as o,useEffect as r,useState as l}from"react";import a from"prop-types";import{Button as i,Card as s,CardBody as c,CardFooter as d,CardHeader as u,Dropdown as p,DropdownToggle as f,DropdownMenu as g,DropdownItem as m,Table as y}from"reactstrap";import v from"classnames";import{Modifier as b,EditorState as k,CompositeDecorator as T,ContentState as C,convertFromRaw as S,convertToRaw as E,RichUtils as w,SelectionState as I,AtomicBlockUtils as N,Editor as x}from"draft-js";import{TextEditorContext as F}from"components/TextEditor/Context";import O from"assets/img/default-avatar.png";function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L.apply(this,arguments)}function D(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function R(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t.indexOf(n=l[o])>=0||(r[n]=e[n]);return r}Object.assign({leftIcon:"",rightIcon:""},i.prototype.props);const j=e=>h(i,e,e.leftIcon?h("i",{className:v(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?h("i",{className:v(e.rightIcon,"ms-2")}):null);j.propTypes=L({leftIcon:a.string,rightIcon:a.string},i.propTypes&&i.propTypes),Object.assign({},s.prototype.props);const A=e=>h(s,e,e.children);A.propTypes=L({},s.propTypes&&s.propTypes),Object.assign({},c.prototype.props);const M=e=>h(c,e,e.children);M.propTypes=L({},c.propTypes&&c.propTypes),Object.assign({},d.prototype.props);const z=e=>h(d,e,e.children);z.propTypes=L({},d.propTypes&&d.propTypes),Object.assign({},u.prototype.props);const P=e=>h(u,e,e.children);P.propTypes=L({},u.propTypes&&u.propTypes),Object.assign({},p.prototype.props);const U=e=>{let t=L({},(D(e),e));return h(p,t,t.children)};U.propTypes=L({},p.propTypes&&p.propTypes);const B=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},f.prototype.props);const K=e=>{let t=R(e,B);return h(Fragment,null,h(f,L({caret:!t.startIcon&&!t.endIcon&&t.caret},t),t.startIcon&&h("i",{className:v(t.startIcon,"me-2")}),t.children,t.endIcon&&h("i",{className:v(t.endIcon,"ms-2")})))};K.propTypes=L({startIcon:a.string,endIcon:a.string,caret:a.bool},f.propTypes&&f.propTypes),Object.assign({},g.prototype.props);const _=e=>{let t=L({},(D(e),e));return h(g,t,t.children)};_.propTypes=L({},g.propTypes&&g.propTypes);const q=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},m.prototype.props);const G=e=>{let{leftIcon:t="",rightIcon:n="",leftIconStyle:o="text-secondary",rightIconStyle:r="text-secondary"}=e,l=R(e,q);return h(m,L({},l,{className:"d-flex justify-content-between align-items-center"}),h("span",null,t&&h("i",{className:`${t} ${o} me-2`}),l.children),n&&h("i",{className:`${n} ${r}`}))};G.propTypes=L({},m.propTypes&&m.propTypes);const H=e=>h(y,{striped:!0,hover:!0},h("thead",null,h("tr",null,e.thead.map((t,n)=>h("th",{className:v("",{"text-right":e.thead.length-1===n}),key:n},t.text)))),h("tbody",null,e.tbody.map((e,t)=>h("tr",{className:v({[e.className]:void 0!==e.className}),key:t},e.data.map((e,t)=>h("td",{className:v({[e.className]:void 0!==e.className}),key:t},e.item)),e.actions&&h("td",{className:"text-right"},e.actions)))));H.propTypes={thead:a.arrayOf(a.shape({className:a.string,text:a.string.isRequired})).isRequired,tbody:a.arrayOf(a.shape({className:a.string,data:a.arrayOf(a.shape({className:a.string,item:a.oneOfType([a.string,a.number,a.node]).isRequired})).isRequired,actions:a.node})).isRequired};const Y="inline-default",$="block-default",J="atomic-entity",W="image",Z="divider",V="link",X="mention",Q="checklist",ee="start";function te({name:e,profileImageUrl:n,_id:o,onSelect:r=(()=>{})}){let l=t(t=>{t.preventDefault(),r({name:e,profileImageUrl:n,_id:o})});return h("div",{className:"d-flex align-items-center"},h("div",{className:"avatar mb-1"},h("img",{src:n||O,alt:e})),h("div",{onClick:l,className:"btn btn-link p-2 mb-1"},e))}const ne=["suggestions"];function oe(e){let{suggestions:t}=e,o=R(e,ne),{computedPosForMentionSuggestions:r}=n(F);return h(Fragment,null,t.length?h("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:L({},r)},t.map((e,t)=>h(te,L({key:e.name+t},e,o)))):null)}function re(e,t,n){const o=t.getText();let r,l;for(;null!==(r=e.exec(o));)l=r.index,n(l,l+r[0].length)}const le=/\B@\w+/g,ae=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,ie=new T([{strategy:function(e,t,n){re(le,e,t)},component:function(e){let l=o(null),{editorRef:a,mentionSuggestions:i,updateComputedPosForMentionSuggestions:s,handleMentionSelect:c}=n(ce);const d=t(()=>{var e,t;return{left:(null==(e=a.current)||null==(t=e.editor)?void 0:t.getBoundingClientRect()).width-l.current.offsetLeft<240?l.current.offsetLeft-230:l.current.offsetLeft,top:l.current.offsetTop,display:"block"}},[]),u=t(()=>({display:"none"}),[]);function p(){if(!e.entityKey)return null;const t=e.contentState.getEntity(e.entityKey);return L({},null==t?void 0:t.getData())}return r(()=>{l.current&&s(d())},[]),h(Fragment,null,p()?h("a",{href:"/admin/users/"+p()._id,className:"text-primary"},p().name):h("span",{ref:l,className:""},e.children),h(oe,{suggestions:i.filter(t=>{var n;return t.name.toLowerCase().includes(e.decoratedText.slice(1,null==e||null==(n=e.decoratedText)?void 0:n.length).toLowerCase())}),onSelect:({name:t,profileImageUrl:n,_id:o})=>{let r="@"+t.split(" ").join("_");c(e.contentState,e.blockKey,{start:e.start,end:e.end},{mention:r+" ",profileImageUrl:n,_id:o,name:t}),s(u())}}))}},{strategy:function(e,t,n){re(ae,e,t)},component:function(e){return h("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer"},e.children)}},{strategy:(e,t,n)=>{e.findEntityRanges(e=>{const t=e.getEntity();return null!==t&&n.getEntity(t).getType()===V},t)},component:function(e){let t=e.contentState.getEntity(e.entityKey).getData();return t.href?h("a",{href:t.href,title:t.linkText,target:"_blank",rel:"noreferrer"},t.linkText||t.href):null}}]),se=["children"],ce=e.createContext(),de=t=>{let{children:n}=t,o=R(t,se),r=function(t){const n=e.useRef(null),[o,r]=e.useState(k.createEmpty(ie)),[a,i]=l(!1),[s,c]=e.useState({display:"none"});e.useEffect(()=>{let e;try{"string"==typeof t.value&&(e=JSON.parse(t.value)),"object"==typeof t.value&&(e=t.value)}catch(e){if(console.log(e),"string"==typeof t.value)return p(k.createWithContent(C.createFromText(t.value)))}return p(t.value||e?k.set(o,{currentContent:S(e),directionMap:k.createWithContent(S(e)).getDirectionMap()}):k.createEmpty(ie))},[t.value]);const d=e.useRef(null),u=(e,t)=>{const n=o.getCurrentContent().createEntity(e,"IMMUTABLE",L({},t)),r=n.getLastCreatedEntityKey(),l=k.set(o,{currentContent:n},"create-entity");p(N.insertAtomicBlock(l,r," "))},p=e=>{const n=e.getCurrentContent();r(e),t.onDataStructureChange(JSON.stringify(E(n)))},f=async e=>{if(!t.handleUpload)return console.log("Uploader function not specified");if(!e.every(e=>"image"===e.type.split("/")[0]))return console.log("All files has to be images");try{let n=await Promise.all(e.map(e=>t.handleUpload(e)));console.log(n),n.every(e=>e)||console.log("one or mutiple files don't have storage info"),n.map(e=>u(W,{storageInfo:e}))}catch(e){return console.log(e)}},g=e=>{e.preventDefault(),f(Array.from(e.target.files))},h={[W]:()=>d.current.click(),[V]:()=>p((e=>{let t=window.prompt("Paste the link bellow:");if(t){let n=window.prompt("Paste the link-text below:");if(n){const o=e.getCurrentContent();o.createEntity(V,"MUTABLE",{href:t,linkText:n});let r=o.getLastCreatedEntityKey();const l=e.getSelection(),a=b.replaceText(o,l,n,null,r),i=l.set("anchorOffset",l.getAnchorOffset()+n.length),s=k.set(e,{currentContent:a},"create-entity"),c=k.forceSelection(s,i);return console.log(i.getAnchorOffset(),"editor selection anchor offset after link insert:",c.getSelection().getAnchorOffset()),c}}})(o)),[Z]:()=>u(Z,{}),[X]:()=>{},[Q]:()=>{u(Q,{})}},m={[Y]:e=>p(w.toggleInlineStyle(o,e)),[$]:e=>p(w.toggleBlockType(o,e)),[J]:e=>{h[e]()}};return{editorRef:n,editorState:o,computedPosForMentionSuggestions:s,focusedForEditing:a,getFileInputProps:()=>({ref:d,onChange:g}),generateLink:async e=>t.linkGeneratorFn&&"function"==typeof t.linkGeneratorFn?t.linkGeneratorFn(e):null,handleDroppedFiles:(e,t)=>f(t),handlePastedFiles:e=>f(e),handleEditorStateChange:p,handleKeyCommand:(e,t)=>{let n=w.handleKeyCommand(t,e);return n?(p(n),"handled"):"not-handled"},handleToolClick:(e,t)=>(t.preventDefault(),o.getSelection().getHasFocus()&&null!=e&&e.element?void m[e.element](e.style):null),forceFocusEditorEnd:e=>{var t;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(t=n.current.editor)||t.focus(),p(k.moveFocusToEnd(o))},updateComputedPosForMentionSuggestions:e=>c(e),handleMentionSelect:(e,t,n,r)=>{let l=I.createEmpty(t),a=e.createEntity(X,"IMMUTABLE",L({},r)),i=a.getLastCreatedEntityKey();a=b.replaceText(e,l.merge({anchorOffset:n.start,focusOffset:n.end}),r.mention,o.getCurrentInlineStyle(),i),p(k.forceSelection(k.moveFocusToEnd(k.set(o,{currentContent:a})),a.getSelectionAfter()))},activateEditor:()=>i(!0),deactivateEditor:()=>i(!1)}}({handleUpload:o.handleUpload||async function(){},linkGeneratorFn:o.linkGeneratorFn,onDataStructureChange:o.onDataStructureChange||function(){},value:o.value||null}),a=L({},(D(r),r));return h(ce.Provider,{value:L({},a,{mentionSuggestions:o.mentionSuggestions||[]})},n)};function ue(e){var t;return e.src||e.link?h("img",{src:e.src||e.link,alt:e.alt||(null==(t=e.storageInfo)?void 0:t.Key)||"...",className:"unselectable"}):null}function pe(){return h("hr",null)}function fe({}){return h(e.Fragment,null)}const ge=["editorRef","onResizeEnd","reference","currentSize"],he=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function me(t){var n,o;let{editorRef:r,onResizeEnd:l,reference:a="left",currentSize:i=10}=t,s=R(t,ge),[c,d]=e.useState(!1),[u,p]=e.useState(i);const f=null==(n=r.current)||null==(o=n.editor)?void 0:o.getBoundingClientRect();let g=e.useCallback(e=>{e.preventDefault();const t=e=>{let t=[...he];d(!0);let n="center"===a?f.width/2:f.width,o=parseInt(Math.abs(e.clientX-("center"===a?f.left+f.width/2:"end"===a?f.left+f.width:f.left))),r=parseInt(o/n*100);t.sort((e,t)=>Math.abs(r-e)-Math.abs(r-t));let i=t[0];p(i),l&&l({partition:i});let c=s.block.getEntityAt(0);s.contentState.mergeEntityData(c,{size:i})},n=()=>{d(!1),document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",n,!1)};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",n,!1)},[l]);return h(Fragment,null,h("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:g},h("div",{className:"bg-primary rounded resize-bar"})),c&&h("div",{className:"resize-guides-container position-absolute "},he.map(e=>(parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(f.width*e/100)})).map(e=>h("div",{key:e.pixels,className:v("resize-guide position-absolute rounded",{"bg-info":"start"===a&&e.percentage===u||"end"===a&&100-e.percentage===u}),style:{left:e.pixels}}))))}const ye=["editorRef","onAlignmentChange"],ve=[{label:"Align left",style:ee,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function be(e){let{onAlignmentChange:n}=e,o=R(e,ye),r=t(({alignment:e})=>{n&&n({alignment:e});let t=o.block.getEntityAt(0);o.contentState.mergeEntityData(t,{alignment:e})},[n]);return h("div",{className:"d-inline-block shadow-md rounded mb-1"},ve.map(e=>h(i,{title:null==e?void 0:e.label,type:"button",className:v("btn btn-icon m-0 text-muted",{}),key:null==e?void 0:e.style,onClick:t=>r({alignment:null==e?void 0:e.style})},e.icon?h("i",{className:e.icon}):null==e?void 0:e.label)))}const ke=["children"];function Te(t){let{children:n}=t,o=R(t,ke),[r,l]=e.useState(!1),[a,i]=e.useState(o.size||30),[s,c]=e.useState(o.alignment||ee),d=()=>({"justify-content-start":"start"===s,"justify-content-center":"center"===s,"justify-content-end":"end"===s});return h(Fragment,null,r&&s&&h("div",{className:v("d-flex",d())},h(be,L({onAlignmentChange:e=>c(e.alignment)},o))),h("div",{className:v("d-flex align-items-center position-relative",d())},r&&"start"!==s&&h(me,L({},o,{reference:s,onResizeEnd:e=>i(e.partition)})),h("div",{className:v("d-inline-block rounded resize-container unselectable",{"resize-focused":r,"w-10":10===a,"w-15":15===a,"w-20":20===a,"w-25":25===a,"w-30":30===a,"w-35":35===a,"w-40":40===a,"w-45":45===a,"w-50":50===a,"w-55":55===a,"w-60":60===a,"w-65":65===a,"w-70":70===a,"w-75":75===a,"w-80":80===a,"w-85":85===a,"w-90":90===a,"w-95":95===a,"w-100":100===a}),onClick:()=>l(e=>!e)},n),r&&"end"!==s&&h(me,L({},o,{reference:s,currentSize:a,onResizeEnd:e=>i(e.partition)}))))}const Ce=["type","data","editorControllers"];function Se(e){let{type:t,data:n,editorControllers:o}=e,r=null,l=L({},n,o,R(e,Ce));return t===W&&(r=h(Te,l,h(ue,n))),t===Z&&(r=h(pe,n)),t===Q&&(r=h(fe,n)),r}const Ee=["generateLink"],we=e=>"atomic"===e.getType()?{component:Ie,editable:!1}:null,Ie=t=>{const o=t.block.getEntityAt(0),r=o&&t.contentState.getEntity(o),l=null==r?void 0:r.getType(),a=n(ce),{generateLink:i}=a,s=R(a,Ee);let c=function(t){let[n,o]=e.useState(t.src);return e.useEffect(()=>(async function(){if(!t.src)try{if(!t.generateLink||"function"!=typeof t.generateLink)throw Error("link gnerator function must be supplied");let e=await t.generateLink(t.storageInfo);if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");o(e)}catch(e){o(O),console.log(e)}}(),()=>{}),[t.generateLink]),{link:n}}(L({generateLink:i},null==r?void 0:r.getData()));return h(Se,L({type:l,data:L({},null==r?void 0:r.getData(),c),editorControllers:L({},s)},t))},Ne=["readOnly"];function xe(t){let{readOnly:n=!1}=t,o=R(t,Ne);const{editorRef:r,editorState:l,handleEditorStateChange:a,handleDroppedFiles:i,handlePastedFiles:s,handleKeyCommand:c,activateEditor:d,deactivateEditor:u}=e.useContext(ce);return h(Fragment,null,h(x,{ref:r,blockRendererFn:we,placeholder:o.placeholder,onChange:a,editorState:l,spellCheck:!0,handleKeyCommand:c,handleDroppedFiles:i,handlePastedFiles:s,readOnly:n,onFocus:d,onBlur:u}))}const Fe={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:Y},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:Y},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:Y},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:Y}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:$},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:$},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:$},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:$},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:$}],ENTITY_TYPES:[{label:"Image",style:W,icon:"fa-solid fa-images",element:J},{label:"Divider",style:Z,icon:"fa-solid fa-minus",element:J}]};function Oe(e){return h("span",{className:"draft-toolbar-button-separator"},"|")}const Le=e.forwardRef((e,t)=>h("input",L({},e,{ref:t,className:"d-none",type:"file",accept:e.accept||"image/*"})));function De(t){const{getFileInputProps:n,editorState:o,handleToolClick:r}=e.useContext(ce);return h(Fragment,null,h(Le,n()),Object.keys(Fe).map((t,n)=>{var l;return h(e.Fragment,{key:t},null==(l=Fe[t])?void 0:l.map(e=>h(i,{title:null==e?void 0:e.label,className:"btn btn-icon text-muted m-0",key:null==e?void 0:e.style,onMouseDown:t=>r(e,t)},e.icon?h("i",{className:v(e.icon,{"text-primary":o.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==o?void 0:o.getCurrentContent().getBlockForKey(null==o?void 0:o.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)})}):null==e?void 0:e.label)),n<Object.keys(Fe).length-1&&h(Oe,null))}))}function Re(t){const{forceFocusEditorEnd:n,focusedForEditing:o}=e.useContext(ce);return h("div",{className:v("draft-editor-container d-flex flex-column",{"editor-disabled":t.readOnly,"editor-active":o})},!t.readOnly&&h("div",null,h(De,t),h("hr",null)),h(xe,t),h("div",{className:"flex-grow-1",onMouseDown:n}))}function je(e){return h(de,e,h(Re,e))}je.propTypes={value:a.string,linkGeneratorFn:a.func,handleUpload:a.func};export{j as Button,A as Card,M as CardBody,z as CardFooter,P as CardHeader,U as Dropdown,G as DropdownItem,_ as DropdownMenu,K as DropdownToggle,H as SimpleTable,je as TextEditor};
//# sourceMappingURL=ims-ui-kit.modern.js.map
