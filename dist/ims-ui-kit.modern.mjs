import e,{useState as t,useEffect as n,useMemo as r,useCallback as l,useContext as a,useRef as o}from"react";import i from"prop-types";import{Button as s,Card as c,CardBody as d,CardFooter as u,CardHeader as p,Dropdown as g,DropdownToggle as m,DropdownMenu as h,DropdownItem as f,Table as y,Row as b,Col as v,InputGroup as S,Input as C}from"reactstrap";import N from"classnames";import{jsxs as T,jsx as k,Fragment as w}from"react/jsx-runtime";import{useTable as E,useSortBy as I,useExpanded as x,usePagination as P,useResizeColumns as F,useFlexLayout as O}from"react-table";import R from"react-select";import{Modifier as D,EditorState as z,CompositeDecorator as L,ContentState as j,convertFromRaw as A,convertToRaw as M,RichUtils as B,SelectionState as U,AtomicBlockUtils as K,Editor as _}from"draft-js";import q from"assets/img/default-avatar.png";function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function H(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function $(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(l[n]=e[n]);return l}Object.assign({leftIcon:"",rightIcon:""},s.prototype.props);const Y=e=>/*#__PURE__*/T(s,G({},e,{children:[e.leftIcon?/*#__PURE__*/k("i",{className:N(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?/*#__PURE__*/k("i",{className:N(e.rightIcon,"ms-2")}):null]}));Y.propTypes=G({leftIcon:i.string,rightIcon:i.string},s.propTypes&&s.propTypes),Object.assign({},c.prototype.props);const J=e=>/*#__PURE__*/k(c,G({},e,{children:e.children}));J.propTypes=G({},c.propTypes&&c.propTypes),Object.assign({},d.prototype.props);const V=e=>/*#__PURE__*/k(d,G({},e,{children:e.children}));V.propTypes=G({},d.propTypes&&d.propTypes),Object.assign({},u.prototype.props);const W=e=>/*#__PURE__*/k(u,G({},e,{children:e.children}));W.propTypes=G({},u.propTypes&&u.propTypes),Object.assign({},p.prototype.props);const Z=e=>/*#__PURE__*/k(p,G({},e,{children:e.children}));Z.propTypes=G({},p.propTypes&&p.propTypes),Object.assign({},g.prototype.props);const X=e=>{let t=G({},(H(e),e));/*#__PURE__*/return k(g,G({},t,{children:t.children}))};X.propTypes=G({},g.propTypes&&g.propTypes);const Q=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},m.prototype.props);const ee=e=>{let t=$(e,Q);/*#__PURE__*/return k(w,{children:/*#__PURE__*/T(m,G({caret:!t.startIcon&&!t.endIcon&&t.caret},t,{children:[t.startIcon&&/*#__PURE__*/k("i",{className:N(t.startIcon,"me-2")}),t.children,t.endIcon&&/*#__PURE__*/k("i",{className:N(t.endIcon,"ms-2")})]}))})};ee.propTypes=G({startIcon:i.string,endIcon:i.string,caret:i.bool},m.propTypes&&m.propTypes),Object.assign({},h.prototype.props);const te=e=>{let t=G({},(H(e),e));/*#__PURE__*/return k(h,G({},t,{children:t.children}))};te.propTypes=G({},h.propTypes&&h.propTypes);const ne=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},f.prototype.props);const re=e=>{let{leftIcon:t="",rightIcon:n="",leftIconStyle:r="text-secondary",rightIconStyle:l="text-secondary"}=e,a=$(e,ne);/*#__PURE__*/return T(f,G({},a,{className:"d-flex justify-content-between align-items-center",children:[/*#__PURE__*/T("span",{children:[t&&/*#__PURE__*/k("i",{className:`${t} ${r} me-2`}),a.children]}),n&&/*#__PURE__*/k("i",{className:`${n} ${l}`})]}))};re.propTypes=G({},f.propTypes&&f.propTypes);const le=e=>/*#__PURE__*/T(y,{striped:!0,hover:!0,children:[/*#__PURE__*/k("thead",{children:/*#__PURE__*/k("tr",{children:e.thead.map((t,n)=>/*#__PURE__*/k("th",{className:N("",{"text-right":e.thead.length-1===n}),children:t.text},n))})}),/*#__PURE__*/k("tbody",{children:e.tbody.map((e,t)=>/*#__PURE__*/T("tr",{className:N({[e.className]:void 0!==e.className}),children:[e.data.map((e,t)=>/*#__PURE__*/k("td",{className:N({[e.className]:void 0!==e.className}),children:e.item},t)),e.actions&&/*#__PURE__*/k("td",{className:"text-right",children:e.actions})]},t))})]});le.propTypes={thead:i.arrayOf(i.shape({className:i.string,text:i.string.isRequired})).isRequired,tbody:i.arrayOf(i.shape({className:i.string,data:i.arrayOf(i.shape({className:i.string,item:i.oneOfType([i.string,i.number,i.node]).isRequired})).isRequired,actions:i.node})).isRequired};const ae=({onFilter:r=(()=>{}),onSearch:l=(()=>{}),filters:a=[]})=>{let[o,i]=e.useState("");const s=function(e,r){const[l,a]=t(e);return n(()=>{const t=setTimeout(()=>{a(e)},500);return()=>{clearTimeout(t)}},[e,500]),l}(o);return e.useEffect(()=>{l({value:{clientSearch:s}})},[s]),/*#__PURE__*/T(b,{children:[/*#__PURE__*/k(v,{md:"3",children:/*#__PURE__*/k(R,{className:"react-select default m-0 w-100",classNamePrefix:"react-select",name:"singleSelect",onChange:e=>{r(e)},defaultValue:a.find(e=>e.default),options:a,placeholder:"Select filter"})}),/*#__PURE__*/k(v,{md:"6",children:/*#__PURE__*/k(S,{children:/*#__PURE__*/k(C,{onChange:e=>i(e.currentTarget.value.toString()),placeholder:"Search item"})})})]})},oe="...",ie=(e,t)=>Array.from({length:t-e+1},(t,n)=>n+e),se=e=>{const{onPageChange:t=(()=>{}),totalCount:n=0,siblingCount:l=1,currentPage:a=1,pageSize:o=10}=e,i=(({totalCount:e,pageSize:t,siblingCount:n=1,currentPage:l})=>r(()=>{const r=Math.ceil(e/t);if(n+5>=r)return ie(1,r);const a=Math.max(l-n,1),o=Math.min(l+n,r),i=a>2,s=o<r-2,c=r;if(!i&&s)return[...ie(1,3+2*n),oe,r];if(i&&!s){let e=ie(r-(3+2*n)+1,r);return[1,oe,...e]}if(i&&s){let e=ie(a,o);return[1,oe,...e,oe,c]}},[e,t,n,l]))({currentPage:a,totalCount:n,siblingCount:l,pageSize:o});if(0===a||i.length<2)return null;let s=i[i.length-1];/*#__PURE__*/return k(w,{children:/*#__PURE__*/k("nav",{"aria-label":"Page navigation",children:/*#__PURE__*/T("ul",{className:"pagination",children:[/*#__PURE__*/k("li",{className:"page-item",children:/*#__PURE__*/T("button",{onClick:()=>{t&&t(a-1)},className:"page-link","aria-label":"Next",children:[/*#__PURE__*/k("span",{"aria-hidden":"true",children:"«"}),/*#__PURE__*/k("span",{className:"sr-only",children:"Previous"})]})},"first-button"),i.map((e,n)=>e===oe?/*#__PURE__*/k("li",{className:"pagination-item dots",children:"…"},oe+n):/*#__PURE__*/k("li",{className:`page-item ${a===e&&" active"}`,children:/*#__PURE__*/k("button",{className:"page-link",onClick:()=>t(e),children:e})},e)),/*#__PURE__*/k("li",{className:"page-item",children:/*#__PURE__*/T("button",{disabled:a===s,className:"page-link",onClick:()=>{t&&t(a+1)},"aria-label":"Next",children:[/*#__PURE__*/k("span",{"aria-hidden":"true",children:"»"}),/*#__PURE__*/k("span",{className:"sr-only",children:"Next"})]})},"next-button")]})})})};function ce({columns:t,data:n,renderRowSubComponent:r,className:l="-highlight -striped ",handleSearch:a=(()=>{}),handleFilter:o=(()=>{}),handlePagination:i=(()=>{}),filters:s=[],pagination:c={currentPage:1,hasNextPage:!0,hasPrevPage:!1,nextPage:2,prevPage:null,size:10,totalPages:2,totalResults:17}}){const{getTableProps:d,getTableBodyProps:u,headerGroups:p,page:g,prepareRow:m,state:{},visibleColumns:h}=E({columns:t,data:n,initialState:{pageSize:10,pageIndex:0}},I,x,P,F,O);/*#__PURE__*/return k(w,{children:/*#__PURE__*/T("div",{className:"ReactTable "+l,children:[/*#__PURE__*/k("div",{className:"pagination-top",children:/*#__PURE__*/k(ae,{filters:s,onFilter:e=>o(e),onSearch:e=>a(e)})}),/*#__PURE__*/T("table",G({},d(),{className:"rt-table",children:[/*#__PURE__*/k("thead",{className:"rt-thead -header",children:p.map(e=>/*#__PURE__*/k("tr",G({},e.getHeaderGroupProps(),{className:"rt-tr",children:e.headers.map((t,n)=>/*#__PURE__*/T("th",G({},t.getHeaderProps(t.getSortByToggleProps()),{className:N("rt-th rt-resizable-header",{"-cursor-pointer":e.headers.length-1!==n,"-sort-asc":t.isSorted&&!t.isSortedDesc,"-sort-desc":t.isSorted&&t.isSortedDesc}),children:[/*#__PURE__*/T("div",{className:"rt-resizable-header-content",children:[t.render("Header"),/*#__PURE__*/k("div",G({},t.getResizerProps(),{className:N("col-resizer",{" active":t.isResizing})}))]}),/*#__PURE__*/k("div",{children:e.headers.length-1===n?null:t.canFilter?t.render("Filter"):null})]})))})))}),/*#__PURE__*/k("tbody",G({},u(),{className:"rt-tbody",children:g.map((t,n)=>{var l;return m(t),/*#__PURE__*/T(e.Fragment,{children:[/*#__PURE__*/k("tr",G({},t.getRowProps(),{className:N("rt-tr",{" -odd":n%2==0},{" -even":n%2==1}),children:t.cells.map(e=>/*#__PURE__*/k("td",G({},e.getCellProps(),{className:"rt-td",children:e.render("Cell")})))})),t.isExpanded?/*#__PURE__*/k("tr",{children:/*#__PURE__*/k("td",{colSpan:h.length,children:r&&r({row:t})})}):null]},null==(l=t.getRowProps())?void 0:l.key)})}))]})),/*#__PURE__*/k("div",{className:"pagination-bottom",children:/*#__PURE__*/k("div",{className:"-pagination",children:/*#__PURE__*/k("div",{className:"-center flex-nowrap",children:/*#__PURE__*/k(se,{className:"pagination-bar",pagination:c,currentPage:c.currentPage,totalCount:c.totalResults,pageSize:c.size,onPageChange:e=>{i({page:e})}})})})})]})})}const de="inline-default",ue="block-default",pe="atomic-entity",ge="image",me="divider",he="link",fe="mention",ye="checklist",be="start";function ve({name:e,profileImageUrl:t,_id:n,onSelect:r=(()=>{})}){let a=l(l=>{l.preventDefault(),r({name:e,profileImageUrl:t,_id:n})});/*#__PURE__*/return T("div",{className:"d-flex align-items-center",children:[/*#__PURE__*/k("div",{className:"avatar mb-1",children:/*#__PURE__*/k("img",{src:t||q,alt:e})}),/*#__PURE__*/k("div",{onClick:a,className:"btn btn-link p-2 mb-1",children:e})]})}const Se=["suggestions"];function Ce(e){let{suggestions:t}=e,n=$(e,Se),{computedPosForMentionSuggestions:r}=a(Ie);/*#__PURE__*/return k(w,{children:t.length?/*#__PURE__*/k("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:G({},r),children:t.map((e,t)=>/*#__PURE__*/k(ve,G({},e,n),e.name+t))}):null})}function Ne(e,t,n){const r=t.getText();let l,a;for(;null!==(l=e.exec(r));)a=l.index,n(a,a+l[0].length)}const Te=/\B@\w+/g,ke=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,we=new L([{strategy:function(e,t,n){Ne(Te,e,t)},component:function(e){let t=o(null),{editorRef:r,mentionSuggestions:i,updateComputedPosForMentionSuggestions:s,handleMentionSelect:c}=a(Ie);const d=l(()=>{var e,n;return{left:(null==(e=r.current)||null==(n=e.editor)?void 0:n.getBoundingClientRect()).width-t.current.offsetLeft<240?t.current.offsetLeft-230:t.current.offsetLeft,top:t.current.offsetTop,display:"block"}},[]),u=l(()=>({display:"none"}),[]);function p(){if(!e.entityKey)return null;const t=e.contentState.getEntity(e.entityKey);return G({},null==t?void 0:t.getData())}return n(()=>{t.current&&s(d())},[]),/*#__PURE__*/T(w,{children:[p()?/*#__PURE__*/k("a",{href:"/admin/users/"+p()._id,className:"text-primary",children:p().name}):/*#__PURE__*/k("span",{ref:t,className:"",children:e.children}),/*#__PURE__*/k(Ce,{suggestions:i.filter(t=>{var n;return t.name.toLowerCase().includes(e.decoratedText.slice(1,null==e||null==(n=e.decoratedText)?void 0:n.length).toLowerCase())}),onSelect:({name:t,profileImageUrl:n,_id:r})=>{let l="@"+t.split(" ").join("_");c(e.contentState,e.blockKey,{start:e.start,end:e.end},{mention:l+" ",profileImageUrl:n,_id:r,name:t}),s(u())}})]})}},{strategy:function(e,t,n){Ne(ke,e,t)},component:function(e){/*#__PURE__*/return k("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer",children:e.children})}},{strategy:(e,t,n)=>{e.findEntityRanges(e=>{const t=e.getEntity();return null!==t&&n.getEntity(t).getType()===he},t)},component:function(e){let t=e.contentState.getEntity(e.entityKey).getData();return t.href?/*#__PURE__*/k("a",{href:t.href,title:t.linkText,target:"_blank",rel:"noreferrer",children:t.linkText||t.href}):null}}]),Ee=["children"],Ie=/*#__PURE__*/e.createContext(),xe=e=>{let{children:r}=e,l=$(e,Ee),a=function(e){const r=o(null),[l,a]=t(z.createEmpty(we)),[i,s]=t(!1),[c,d]=t({display:"none"});n(()=>{let t;try{"string"==typeof e.value&&(t=JSON.parse(e.value)),"object"==typeof e.value&&(t=e.value)}catch(t){if(console.log(t),"string"==typeof e.value)return g(z.createWithContent(j.createFromText(e.value)))}return g(e.value||t?z.set(l,{currentContent:A(t),directionMap:z.createWithContent(A(t)).getDirectionMap()}):z.createEmpty(we))},[e.value]);const u=o(null),p=(e,t)=>{const n=l.getCurrentContent().createEntity(e,"IMMUTABLE",G({},t)),r=n.getLastCreatedEntityKey(),a=z.set(l,{currentContent:n},"create-entity");g(K.insertAtomicBlock(a,r," "))},g=t=>{const n=t.getCurrentContent();a(t),e.onDataStructureChange(JSON.stringify(M(n)))},m=async t=>{if(!e.handleUpload)return console.log("Uploader function not specified");if(!t.every(e=>"image"===e.type.split("/")[0]))return console.log("All files has to be images");try{let n=await Promise.all(t.map(t=>e.handleUpload(t)));console.log(n),n.every(e=>e)||console.log("one or mutiple files don't have storage info"),n.map(e=>p(ge,{storageInfo:e}))}catch(e){return console.log(e)}},h=e=>{e.preventDefault(),m(Array.from(e.target.files))},f={[ge]:()=>u.current.click(),[he]:()=>g((e=>{let t=window.prompt("Paste the link bellow:");if(t){let n=window.prompt("Paste the link-text below:");if(n){const r=e.getCurrentContent();r.createEntity(he,"MUTABLE",{href:t,linkText:n});let l=r.getLastCreatedEntityKey();const a=e.getSelection(),o=D.replaceText(r,a,n,null,l),i=a.set("anchorOffset",a.getAnchorOffset()+n.length),s=z.set(e,{currentContent:o},"create-entity"),c=z.forceSelection(s,i);return console.log(i.getAnchorOffset(),"editor selection anchor offset after link insert:",c.getSelection().getAnchorOffset()),c}}})(l)),[me]:()=>p(me,{}),[fe]:()=>{},[ye]:()=>{p(ye,{})}},y={[de]:e=>g(B.toggleInlineStyle(l,e)),[ue]:e=>g(B.toggleBlockType(l,e)),[pe]:e=>{f[e]()}};return{editorRef:r,editorState:l,computedPosForMentionSuggestions:c,focusedForEditing:i,getFileInputProps:()=>({ref:u,onChange:h}),generateLink:async t=>e.linkGeneratorFn&&"function"==typeof e.linkGeneratorFn?e.linkGeneratorFn(t):null,handleDroppedFiles:(e,t)=>m(t),handlePastedFiles:e=>m(e),handleEditorStateChange:g,handleKeyCommand:(e,t)=>{let n=B.handleKeyCommand(t,e);return n?(g(n),"handled"):"not-handled"},handleToolClick:(e,t)=>(t.preventDefault(),l.getSelection().getHasFocus()&&null!=e&&e.element?void y[e.element](e.style):null),forceFocusEditorEnd:e=>{var t;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(t=r.current.editor)||t.focus(),g(z.moveFocusToEnd(l))},updateComputedPosForMentionSuggestions:e=>d(e),handleMentionSelect:(e,t,n,r)=>{let a=U.createEmpty(t),o=e.createEntity(fe,"IMMUTABLE",G({},r)),i=o.getLastCreatedEntityKey();o=D.replaceText(e,a.merge({anchorOffset:n.start,focusOffset:n.end}),r.mention,l.getCurrentInlineStyle(),i),g(z.forceSelection(z.moveFocusToEnd(z.set(l,{currentContent:o})),o.getSelectionAfter()))},activateEditor:()=>s(!0),deactivateEditor:()=>s(!1)}}({handleUpload:l.handleUpload||async function(){},linkGeneratorFn:l.linkGeneratorFn,onDataStructureChange:l.onDataStructureChange||function(){},value:l.value||null}),i=G({},(H(a),a));/*#__PURE__*/return k(Ie.Provider,{value:G({},i,{mentionSuggestions:l.mentionSuggestions||[]}),children:r})};function Pe(e){var t;return e.src||e.link?/*#__PURE__*/k("img",{src:e.src||e.link,alt:e.alt||(null==(t=e.storageInfo)?void 0:t.Key)||"...",className:"unselectable"}):null}function Fe(){/*#__PURE__*/return k("hr",{})}function Oe({}){/*#__PURE__*/return k(e.Fragment,{})}const Re=["editorRef","onResizeEnd","reference","currentSize"],De=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function ze(t){var n,r;let{editorRef:l,onResizeEnd:a,reference:o="left",currentSize:i=10}=t,s=$(t,Re),[c,d]=e.useState(!1),[u,p]=e.useState(i);const g=null==(n=l.current)||null==(r=n.editor)?void 0:r.getBoundingClientRect();let m=e.useCallback(e=>{e.preventDefault();const t=e=>{let t=[...De];d(!0);let n="center"===o?g.width/2:g.width,r=parseInt(Math.abs(e.clientX-("center"===o?g.left+g.width/2:"end"===o?g.left+g.width:g.left))),l=parseInt(r/n*100);t.sort((e,t)=>Math.abs(l-e)-Math.abs(l-t));let i=t[0];p(i),a&&a({partition:i});let c=s.block.getEntityAt(0);s.contentState.mergeEntityData(c,{size:i})},n=()=>{d(!1),document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",n,!1)};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",n,!1)},[a]);/*#__PURE__*/return T(w,{children:[/*#__PURE__*/k("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:m,children:/*#__PURE__*/k("div",{className:"bg-primary rounded resize-bar"})}),c&&/*#__PURE__*/k("div",{className:"resize-guides-container position-absolute ",children:De.map(e=>(parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(g.width*e/100)})).map(e=>/*#__PURE__*/k("div",{className:N("resize-guide position-absolute rounded",{"bg-info":"start"===o&&e.percentage===u||"end"===o&&100-e.percentage===u}),style:{left:e.pixels}},e.pixels))})]})}const Le=["editorRef","onAlignmentChange"],je=[{label:"Align left",style:be,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function Ae(e){let{onAlignmentChange:t}=e,n=$(e,Le),r=l(({alignment:e})=>{t&&t({alignment:e});let r=n.block.getEntityAt(0);n.contentState.mergeEntityData(r,{alignment:e})},[t]);/*#__PURE__*/return k("div",{className:"d-inline-block shadow-md rounded mb-1",children:je.map(e=>/*#__PURE__*/k(s,{title:null==e?void 0:e.label,type:"button",className:N("btn btn-icon m-0 text-muted",{}),onClick:t=>r({alignment:null==e?void 0:e.style}),children:e.icon?/*#__PURE__*/k("i",{className:e.icon}):null==e?void 0:e.label},null==e?void 0:e.style))})}const Me=["children"];function Be(t){let{children:n}=t,r=$(t,Me),[l,a]=e.useState(!1),[o,i]=e.useState(r.size||30),[s,c]=e.useState(r.alignment||be),d=()=>({"justify-content-start":"start"===s,"justify-content-center":"center"===s,"justify-content-end":"end"===s});/*#__PURE__*/return T(w,{children:[l&&s&&/*#__PURE__*/k("div",{className:N("d-flex",d()),children:/*#__PURE__*/k(Ae,G({onAlignmentChange:e=>c(e.alignment)},r))}),/*#__PURE__*/T("div",{className:N("d-flex align-items-center position-relative",d()),children:[l&&"start"!==s&&/*#__PURE__*/k(ze,G({},r,{reference:s,onResizeEnd:e=>i(e.partition)})),/*#__PURE__*/k("div",{className:N("d-inline-block rounded resize-container unselectable",{"resize-focused":l,"w-10":10===o,"w-15":15===o,"w-20":20===o,"w-25":25===o,"w-30":30===o,"w-35":35===o,"w-40":40===o,"w-45":45===o,"w-50":50===o,"w-55":55===o,"w-60":60===o,"w-65":65===o,"w-70":70===o,"w-75":75===o,"w-80":80===o,"w-85":85===o,"w-90":90===o,"w-95":95===o,"w-100":100===o}),onClick:()=>a(e=>!e),children:n}),l&&"end"!==s&&/*#__PURE__*/k(ze,G({},r,{reference:s,currentSize:o,onResizeEnd:e=>i(e.partition)}))]})]})}const Ue=["type","data","editorControllers"];function Ke(e){let{type:t,data:n,editorControllers:r}=e,l=null,a=G({},n,r,$(e,Ue));return t===ge&&(l=/*#__PURE__*/k(Be,G({},a,{children:/*#__PURE__*/k(Pe,G({},n))}))),t===me&&(l=/*#__PURE__*/k(Fe,G({},n))),t===ye&&(l=/*#__PURE__*/k(Oe,G({},n))),l}const _e=["generateLink"],qe=e=>"atomic"===e.getType()?{component:Ge,editable:!1}:null,Ge=t=>{const n=t.block.getEntityAt(0),r=n&&t.contentState.getEntity(n),l=null==r?void 0:r.getType(),o=a(Ie),{generateLink:i}=o,s=$(o,_e);let c=function(t){let[n,r]=e.useState(t.src);return e.useEffect(()=>(async function(){if(!t.src)try{if(!t.generateLink||"function"!=typeof t.generateLink)throw Error("link gnerator function must be supplied");let e=await t.generateLink(t.storageInfo);if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");r(e)}catch(e){r(q),console.log(e)}}(),()=>{}),[t.generateLink]),{link:n}}(G({generateLink:i},null==r?void 0:r.getData()));/*#__PURE__*/return k(Ke,G({type:l,data:G({},null==r?void 0:r.getData(),c),editorControllers:G({},s)},t))},He=["readOnly"];function $e(t){let{readOnly:n=!1}=t,r=$(t,He);const{editorRef:l,editorState:a,handleEditorStateChange:o,handleDroppedFiles:i,handlePastedFiles:s,handleKeyCommand:c,activateEditor:d,deactivateEditor:u}=e.useContext(Ie);/*#__PURE__*/return k(w,{children:/*#__PURE__*/k(_,{ref:l,blockRendererFn:qe,placeholder:r.placeholder,onChange:o,editorState:a,spellCheck:!0,handleKeyCommand:c,handleDroppedFiles:i,handlePastedFiles:s,readOnly:n,onFocus:d,onBlur:u})})}const Ye={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:de},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:de},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:de},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:de}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:ue},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:ue},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:ue},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:ue},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:ue}],ENTITY_TYPES:[{label:"Image",style:ge,icon:"fa-solid fa-images",element:pe},{label:"Divider",style:me,icon:"fa-solid fa-minus",element:pe}]};function Je(e){/*#__PURE__*/return k("span",{className:"draft-toolbar-button-separator",children:"|"})}const Ve=/*#__PURE__*/e.forwardRef((e,t)=>/*#__PURE__*/k("input",G({},e,{ref:t,className:"d-none",type:"file",accept:e.accept||"image/*"})));function We(t){const{getFileInputProps:n,editorState:r,handleToolClick:l}=e.useContext(Ie);/*#__PURE__*/return T(w,{children:[/*#__PURE__*/k(Ve,G({},n())),Object.keys(Ye).map((t,n)=>{var a;/*#__PURE__*/return T(e.Fragment,{children:[null==(a=Ye[t])?void 0:a.map(e=>/*#__PURE__*/k(s,{title:null==e?void 0:e.label,type:"button",className:"btn btn-icon text-muted m-0",onMouseDown:t=>l(e,t),children:e.icon?/*#__PURE__*/k("i",{className:N(e.icon,{"text-primary":r.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==r?void 0:r.getCurrentContent().getBlockForKey(null==r?void 0:r.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)})}):null==e?void 0:e.label},null==e?void 0:e.style)),n<Object.keys(Ye).length-1&&/*#__PURE__*/k(Je,{})]},t)})]})}function Ze(t){const{forceFocusEditorEnd:n,focusedForEditing:r}=e.useContext(Ie);/*#__PURE__*/return T("div",{className:N("draft-editor-container d-flex flex-column",{"editor-disabled":t.readOnly,"editor-active":r}),children:[!t.readOnly&&/*#__PURE__*/T("div",{children:[/*#__PURE__*/k(We,G({},t)),/*#__PURE__*/k("hr",{})]}),/*#__PURE__*/k($e,G({},t)),/*#__PURE__*/k("div",{className:"flex-grow-1",onMouseDown:n})]})}function Xe(e){/*#__PURE__*/return k(xe,G({},e,{children:/*#__PURE__*/k(Ze,G({},e))}))}Xe.propTypes={value:i.string,linkGeneratorFn:i.func,handleUpload:i.func};export{ce as AdvancedTable,Y as Button,J as Card,V as CardBody,W as CardFooter,Z as CardHeader,X as Dropdown,re as DropdownItem,te as DropdownMenu,ee as DropdownToggle,le as SimpleTable,Xe as TextEditor};
//# sourceMappingURL=ims-ui-kit.modern.mjs.map
