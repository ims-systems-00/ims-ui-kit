import e,{useState as n,useEffect as t,useMemo as r,useCallback as o,useContext as i,useRef as a}from"react";import l from"prop-types";import{Button as c,Card as s,CardBody as p,CardFooter as u,CardHeader as d,Dropdown as f,DropdownItem as h,Table as g,Row as v,Col as m,InputGroup as y,Input as b,DropdownMenu as T,DropdownToggle as N,List as S,ListGroupItem as C,ListGroupItemHeading as k,ListGroupItemText as w,ListInlineItem as I,Navbar as P,NavbarBrand as E,NavbarText as O,NavbarToggler as x,Nav as j,NavItem as F,NavLink as L,Pagination as R,PaginationItem as z,PaginationLink as D,TabContent as A,TabPane as M,UncontrolledAlert as B,Alert as U}from"reactstrap";import K from"classnames";import{jsxs as _,jsx as G,Fragment as q}from"react/jsx-runtime";import{useTable as H,useSortBy as Y,useExpanded as J,usePagination as V,useResizeColumns as Z,useBlockLayout as W,useFlexLayout as X}from"react-table";import{useSticky as Q}from"react-table-sticky";import $ from"react-select";import{Modifier as ee,EditorState as ne,CompositeDecorator as te,ContentState as re,convertFromRaw as oe,convertToRaw as ie,RichUtils as ae,AtomicBlockUtils as le,SelectionState as ce,Editor as se}from"draft-js";import pe from"assets/img/default-avatar.png";function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ue.apply(this,arguments)}function de(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function fe(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}Object.assign({leftIcon:"",rightIcon:""},c.prototype.props);var he=function(e){/*#__PURE__*/return _(c,ue({},e,{children:[e.leftIcon?/*#__PURE__*/G("i",{className:K(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?/*#__PURE__*/G("i",{className:K(e.rightIcon,"ms-2")}):null]}))};he.propTypes=ue({leftIcon:l.string,rightIcon:l.string},c.propTypes&&c.propTypes),Object.assign({},s.prototype.props);var ge=function(e){/*#__PURE__*/return G(s,ue({},e,{children:e.children}))};ge.propTypes=ue({},s.propTypes&&s.propTypes),Object.assign({},p.prototype.props);var ve=function(e){/*#__PURE__*/return G(p,ue({},e,{children:e.children}))};ve.propTypes=ue({},p.propTypes&&p.propTypes),Object.assign({},u.prototype.props);var me=function(e){/*#__PURE__*/return G(u,ue({},e,{children:e.children}))};me.propTypes=ue({},u.propTypes&&u.propTypes),Object.assign({},d.prototype.props);var ye=function(e){/*#__PURE__*/return G(d,ue({},e,{children:e.children}))};ye.propTypes=ue({},d.propTypes&&d.propTypes),Object.assign({},f.prototype.props);var be=function(e){var n=ue({},(de(e),e));/*#__PURE__*/return G(f,ue({},n,{children:n.children}))};be.propTypes=ue({},f.propTypes&&f.propTypes);var Te=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},h.prototype.props);var Ne=function(e){var n=e.leftIcon,t=void 0===n?"":n,r=e.rightIcon,o=void 0===r?"":r,i=e.leftIconStyle,a=void 0===i?"text-secondary":i,l=e.rightIconStyle,c=void 0===l?"text-secondary":l,s=fe(e,Te);/*#__PURE__*/return _(h,ue({},s,{className:"d-flex justify-content-between align-items-center",children:[/*#__PURE__*/_("span",{children:[t&&/*#__PURE__*/G("i",{className:t+" "+a+" me-2"}),s.children]}),o&&/*#__PURE__*/G("i",{className:o+" "+c})]}))};Ne.propTypes=ue({},h.propTypes&&h.propTypes);var Se=function(e){/*#__PURE__*/return _(g,{striped:!0,hover:!0,children:[/*#__PURE__*/G("thead",{children:/*#__PURE__*/G("tr",{children:e.thead.map(function(n,t){/*#__PURE__*/return G("th",{className:K("",{"text-right":e.thead.length-1===t}),children:n.text},t)})})}),/*#__PURE__*/G("tbody",{children:e.tbody.map(function(e,n){var t;/*#__PURE__*/return _("tr",{className:K((t={},t[e.className]=void 0!==e.className,t)),children:[e.data.map(function(e,n){var t;/*#__PURE__*/return G("td",{className:K((t={},t[e.className]=void 0!==e.className,t)),children:e.item},n)}),e.actions&&/*#__PURE__*/G("td",{className:"text-right",children:e.actions})]},n)})})]})};Se.propTypes={thead:l.arrayOf(l.shape({className:l.string,text:l.string.isRequired})).isRequired,tbody:l.arrayOf(l.shape({className:l.string,data:l.arrayOf(l.shape({className:l.string,item:l.oneOfType([l.string,l.number,l.node]).isRequired})).isRequired,actions:l.node})).isRequired};var Ce=function(r){var o,i,a,l,c=r.onFilter,s=void 0===c?function(){}:c,p=r.onSearch,u=void 0===p?function(){}:p,d=r.filters,f=void 0===d?[]:d,h=e.useState(""),g=h[1],T=(a=(i=n(o=h[0]))[0],l=i[1],t(function(){var e=setTimeout(function(){l(o)},500);return function(){clearTimeout(e)}},[o,500]),a);return e.useEffect(function(){u({value:{clientSearch:T}})},[T]),/*#__PURE__*/_(v,{children:[/*#__PURE__*/G(m,{md:"3",children:/*#__PURE__*/G($,{className:"react-select default m-0 w-100",classNamePrefix:"react-select",name:"singleSelect",onChange:function(e){s(e)},defaultValue:f.find(function(e){return e.default}),options:f,placeholder:"Select filter"})}),/*#__PURE__*/G(m,{md:"6",children:/*#__PURE__*/G(y,{children:/*#__PURE__*/G(b,{onChange:function(e){return g(e.currentTarget.value.toString())},placeholder:"Search item"})})})]})},ke="...",we=function(e,n){return Array.from({length:n-e+1},function(n,t){return t+e})},Ie=function(e){var n=e.onPageChange,t=void 0===n?function(){}:n,o=e.totalCount,i=e.siblingCount,a=e.currentPage,l=void 0===a?1:a,c=e.pageSize,s=function(e){var n=e.totalCount,t=e.pageSize,o=e.siblingCount,i=void 0===o?1:o,a=e.currentPage;return r(function(){var e=Math.ceil(n/t);if(i+5>=e)return we(1,e);var r=Math.max(a-i,1),o=Math.min(a+i,e),l=r>2,c=o<e-2,s=1,p=e;if(!l&&c){var u=we(1,3+2*i);return[].concat(u,[ke,e])}if(l&&!c){var d=we(e-(3+2*i)+1,e);return[s,ke].concat(d)}if(l&&c){var f=we(r,o);return[s,ke].concat(f,[ke,p])}},[n,t,i,a])}({currentPage:l,totalCount:void 0===o?0:o,siblingCount:void 0===i?1:i,pageSize:void 0===c?10:c});if(0===l||s.length<2)return null;var p=s[s.length-1];/*#__PURE__*/return G(q,{children:/*#__PURE__*/G("nav",{"aria-label":"Page navigation",children:/*#__PURE__*/_("ul",{className:"pagination",children:[/*#__PURE__*/G("li",{className:"page-item",children:/*#__PURE__*/_("button",{onClick:function(){t&&t(l-1)},className:"page-link","aria-label":"Next",children:[/*#__PURE__*/G("span",{"aria-hidden":"true",children:"«"}),/*#__PURE__*/G("span",{className:"sr-only",children:"Previous"})]})},"first-button"),s.map(function(e,n){return e===ke?/*#__PURE__*/G("li",{className:"pagination-item dots",children:"…"},ke+n):/*#__PURE__*/G("li",{className:"page-item "+(l===e&&" active"),children:/*#__PURE__*/G("button",{className:"page-link",onClick:function(){return t(e)},children:e})},e)}),/*#__PURE__*/G("li",{className:"page-item",children:/*#__PURE__*/_("button",{disabled:l===p,className:"page-link",onClick:function(){t&&t(l+1)},"aria-label":"Next",children:[/*#__PURE__*/G("span",{"aria-hidden":"true",children:"»"}),/*#__PURE__*/G("span",{className:"sr-only",children:"Next"})]})},"next-button")]})})})};function Pe(n){var t=n.renderRowSubComponent,r=n.className,o=void 0===r?"-highlight -striped ":r,i=n.handleSearch,a=void 0===i?function(){}:i,l=n.handleFilter,c=void 0===l?function(){}:l,s=n.handlePagination,p=void 0===s?function(){}:s,u=n.filters,d=void 0===u?[]:u,f=n.pagination,h=void 0===f?{currentPage:1,hasNextPage:!0,hasPrevPage:!1,nextPage:2,prevPage:null,size:10,totalPages:2,totalResults:17}:f,g=H({columns:n.columns,data:n.data,initialState:{pageSize:10,pageIndex:0}},Y,J,V,Z,W,Q,X),v=g.getTableProps,m=g.getTableBodyProps,y=g.headerGroups,b=g.page,T=g.prepareRow,N=g.visibleColumns;/*#__PURE__*/return G(q,{children:/*#__PURE__*/_("div",{className:"ReactTable "+o,children:[/*#__PURE__*/G("div",{className:"pagination-top",children:/*#__PURE__*/G(Ce,{filters:d,onFilter:function(e){return c(e)},onSearch:function(e){return a(e)}})}),/*#__PURE__*/_("table",ue({},v(),{className:"rt-table",children:[/*#__PURE__*/G("thead",{className:"rt-thead -header",children:y.map(function(e){/*#__PURE__*/return G("tr",ue({},e.getHeaderGroupProps(),{className:"rt-tr",children:e.headers.map(function(n,t){/*#__PURE__*/return _("th",ue({},n.getHeaderProps(n.getSortByToggleProps()),{className:K("rt-th rt-resizable-header",{"-cursor-pointer":e.headers.length-1!==t,"-sort-asc":n.isSorted&&!n.isSortedDesc,"-sort-desc":n.isSorted&&n.isSortedDesc}),children:[/*#__PURE__*/_("div",{className:"rt-resizable-header-content",children:[n.render("Header"),/*#__PURE__*/G("div",ue({},n.getResizerProps(),{className:K("col-resizer",{" active":n.isResizing})}))]}),/*#__PURE__*/G("div",{children:e.headers.length-1===t?null:n.canFilter?n.render("Filter"):null})]}))})}))})}),/*#__PURE__*/G("tbody",ue({},m(),{className:"rt-tbody",children:b.map(function(n,r){var o;return T(n),/*#__PURE__*/_(e.Fragment,{children:[/*#__PURE__*/G("tr",ue({},n.getRowProps(),{className:K("rt-tr",{" -odd":r%2==0},{" -even":r%2==1}),children:n.cells.map(function(e){/*#__PURE__*/return G("td",ue({},e.getCellProps(),{className:"rt-td",children:e.render("Cell")}))})})),n.isExpanded?/*#__PURE__*/G("tr",{children:/*#__PURE__*/G("td",{colSpan:N.length,children:t&&t({row:n})})}):null]},null==(o=n.getRowProps())?void 0:o.key)})}))]})),/*#__PURE__*/G("div",{className:"pagination-bottom",children:/*#__PURE__*/G("div",{className:"-pagination",children:/*#__PURE__*/G("div",{className:"-center flex-nowrap",children:/*#__PURE__*/G(Ie,{className:"pagination-bar",pagination:h,currentPage:h.currentPage,totalCount:h.totalResults,pageSize:h.size,onPageChange:function(e){p({page:e})}})})})})]})})}var Ee="inline-default",Oe="block-default",xe="atomic-entity",je="image",Fe="divider",Le="link",Re="mention",ze="checklist",De="start";function Ae(e){var n=e.name,t=e.profileImageUrl,r=e._id,i=e.onSelect,a=void 0===i?function(){}:i,l=o(function(e){e.preventDefault(),a({name:n,profileImageUrl:t,_id:r})});/*#__PURE__*/return _("div",{className:"d-flex align-items-center",children:[/*#__PURE__*/G("div",{className:"avatar mb-1",children:/*#__PURE__*/G("img",{src:t||pe,alt:n})}),/*#__PURE__*/G("div",{onClick:l,className:"btn btn-link p-2 mb-1",children:n})]})}var Me=["suggestions"];function Be(e){var n=e.suggestions,t=fe(e,Me),r=i(He);/*#__PURE__*/return G(q,{children:n.length?/*#__PURE__*/G("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:ue({},r.computedPosForMentionSuggestions),children:n.map(function(e,n){/*#__PURE__*/return G(Ae,ue({},e,t),e.name+n)})}):null})}function Ue(e,n,t){for(var r,o,i=n.getText();null!==(r=e.exec(i));)t(o=r.index,o+r[0].length)}var Ke=/\B@\w+/g,_e=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,Ge=new te([{strategy:function(e,n,t){Ue(Ke,e,n)},component:function(e){var n=a(null),r=i(He),l=r.editorRef,c=r.mentionSuggestions,s=r.updateComputedPosForMentionSuggestions,p=r.handleMentionSelect,u=o(function(){var e,t;return{left:(null==(e=l.current)||null==(t=e.editor)?void 0:t.getBoundingClientRect()).width-n.current.offsetLeft<240?n.current.offsetLeft-230:n.current.offsetLeft,top:n.current.offsetTop,display:"block"}},[]),d=o(function(){return{display:"none"}},[]);function f(){if(!e.entityKey)return null;var n=e.contentState.getEntity(e.entityKey);return ue({},null==n?void 0:n.getData())}return t(function(){n.current&&s(u())},[]),/*#__PURE__*/_(q,{children:[f()?/*#__PURE__*/G("a",{href:"/admin/users/"+f()._id,className:"text-primary",children:f().name}):/*#__PURE__*/G("span",{ref:n,className:"",children:e.children}),/*#__PURE__*/G(Be,{suggestions:c.filter(function(n){var t;return n.name.toLowerCase().includes(e.decoratedText.slice(1,null==e||null==(t=e.decoratedText)?void 0:t.length).toLowerCase())}),onSelect:function(n){var t=n.name,r=n.profileImageUrl,o=n._id,i="@"+t.split(" ").join("_");p(e.contentState,e.blockKey,{start:e.start,end:e.end},{mention:i+" ",profileImageUrl:r,_id:o,name:t}),s(d())}})]})}},{strategy:function(e,n,t){Ue(_e,e,n)},component:function(e){/*#__PURE__*/return G("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer",children:e.children})}},{strategy:function(e,n,t){e.findEntityRanges(function(e){var n=e.getEntity();return null!==n&&t.getEntity(n).getType()===Le},n)},component:function(e){var n=e.contentState.getEntity(e.entityKey).getData();return n.href?/*#__PURE__*/G("a",{href:n.href,title:n.linkText,target:"_blank",rel:"noreferrer",children:n.linkText||n.href}):null}}]),qe=["children"],He=/*#__PURE__*/e.createContext(),Ye=function(e){var r=e.children,o=fe(e,qe),i=function(e){var r,o,i=a(null),l=n(ne.createEmpty(Ge)),c=l[0],s=l[1],p=n(!1),u=p[0],d=p[1],f=n({display:"none"}),h=f[0],g=f[1];t(function(){var n;try{"string"==typeof e.value&&(n=JSON.parse(e.value)),"object"==typeof e.value&&(n=e.value)}catch(n){if(console.log(n),"string"==typeof e.value)return y(ne.createWithContent(re.createFromText(e.value)))}return y(e.value||n?ne.push(c,oe(n),"change-block-data"):ne.createEmpty(Ge))},[]);var v=a(null),m=function(e,n){var t=c.getCurrentContent().createEntity(e,"IMMUTABLE",ue({},n)),r=t.getLastCreatedEntityKey(),o=ne.set(c,{currentContent:t},"create-entity");y(le.insertAtomicBlock(o,r," "))},y=function(n){var t=n.getCurrentContent();s(n),e.onDataStructureChange(JSON.stringify(ie(t)))},b=function(n){try{if(!e.handleUpload)return Promise.resolve(console.log("Uploader function not specified"));var t=n.every(function(e){return"image"===e.type.split("/")[0]});return Promise.resolve(t?function(t,r){try{var o=Promise.resolve(Promise.all(n.map(function(n){return e.handleUpload(n)}))).then(function(e){console.log(e),e.every(function(e){return e})||console.log("one or mutiple files don't have storage info"),e.map(function(e){return m(je,{storageInfo:e})})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e)}):console.log("All files has to be images"))}catch(e){return Promise.reject(e)}},T=function(e){e.preventDefault(),b(Array.from(e.target.files))},N=((r={})[je]=function(){return v.current.click()},r[Le]=function(){return y(function(e){var n=window.prompt("Paste the link bellow:");if(n){var t=window.prompt("Paste the link-text below:");if(t){var r=e.getCurrentContent();r.createEntity(Le,"MUTABLE",{href:n,linkText:t});var o=r.getLastCreatedEntityKey(),i=e.getSelection(),a=ee.replaceText(r,i,t,null,o),l=i.set("anchorOffset",i.getAnchorOffset()+t.length),c=ne.set(e,{currentContent:a},"create-entity"),s=ne.forceSelection(c,l);return console.log(l.getAnchorOffset(),"editor selection anchor offset after link insert:",s.getSelection().getAnchorOffset()),s}}}(c))},r[Fe]=function(){return m(Fe,{})},r[Re]=function(){},r[ze]=function(){m(ze,{})},r),S=((o={})[Ee]=function(e){return y(ae.toggleInlineStyle(c,e))},o[Oe]=function(e){return y(ae.toggleBlockType(c,e))},o[xe]=function(e){N[e]()},o);return{editorRef:i,editorState:c,computedPosForMentionSuggestions:h,focusedForEditing:u,getFileInputProps:function(){return{ref:v,onChange:T}},generateLink:function(n){try{return Promise.resolve(e.linkGeneratorFn&&"function"==typeof e.linkGeneratorFn?e.linkGeneratorFn(n):null)}catch(e){return Promise.reject(e)}},handleDroppedFiles:function(e,n){return b(n)},handlePastedFiles:function(e){return b(e)},handleEditorStateChange:y,handleKeyCommand:function(e,n){var t=ae.handleKeyCommand(n,e);return t?(y(t),"handled"):"not-handled"},handleToolClick:function(e,n){return n.preventDefault(),c.getSelection().getHasFocus()&&null!=e&&e.element?void S[e.element](e.style):null},forceFocusEditorEnd:function(e){var n;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(n=i.current.editor)||n.focus(),y(ne.moveFocusToEnd(c))},updateComputedPosForMentionSuggestions:function(e){return g(e)},handleMentionSelect:function(e,n,t,r){var o=ce.createEmpty(n),i=e.createEntity(Re,"IMMUTABLE",ue({},r)),a=i.getLastCreatedEntityKey();i=ee.replaceText(e,o.merge({anchorOffset:t.start,focusOffset:t.end}),r.mention,c.getCurrentInlineStyle(),a),y(ne.forceSelection(ne.moveFocusToEnd(ne.set(c,{currentContent:i})),i.getSelectionAfter()))},activateEditor:function(){return d(!0)},deactivateEditor:function(){return d(!1)},isToolActive:function(e){return c.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==c?void 0:c.getCurrentContent().getBlockForKey(null==c?void 0:c.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)}}}({handleUpload:o.handleUpload||function(){return Promise.resolve()},linkGeneratorFn:o.linkGeneratorFn,onDataStructureChange:o.onDataStructureChange||function(){},value:o.value||null}),l=ue({},(de(i),i));/*#__PURE__*/return G(He.Provider,{value:ue({},l,{mentionSuggestions:o.mentionSuggestions||[]}),children:r})};function Je(e){var n;return e.src||e.link?/*#__PURE__*/G("img",{src:e.src||e.link,alt:e.alt||(null==(n=e.storageInfo)?void 0:n.Key)||"...",className:"unselectable"}):null}function Ve(){/*#__PURE__*/return G("hr",{})}function Ze(n){/*#__PURE__*/return G(e.Fragment,{})}var We=["editorRef","onResizeEnd","reference","currentSize"],Xe=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function Qe(n){var t,r,o=n.editorRef,i=n.onResizeEnd,a=n.reference,l=void 0===a?"left":a,c=n.currentSize,s=void 0===c?10:c,p=fe(n,We),u=e.useState(!1),d=u[0],f=u[1],h=e.useState(s),g=h[0],v=h[1],m=null==(t=o.current)||null==(r=t.editor)?void 0:r.getBoundingClientRect(),y=e.useCallback(function(e){e.preventDefault();var n=function(e){var n=[].concat(Xe);f(!0);var t="center"===l?m.width/2:m.width,r=parseInt(Math.abs(e.clientX-("center"===l?m.left+m.width/2:"end"===l?m.left+m.width:m.left))),o=parseInt(r/t*100);n.sort(function(e,n){return Math.abs(o-e)-Math.abs(o-n)});var a=n[0];v(a),i&&i({partition:a});var c=p.block.getEntityAt(0);p.contentState.mergeEntityData(c,{size:a})};document.addEventListener("mousemove",n,!1),document.addEventListener("mouseup",function e(){f(!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("mouseup",e,!1)},!1)},[i]);/*#__PURE__*/return _(q,{children:[/*#__PURE__*/G("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:y,children:/*#__PURE__*/G("div",{className:"bg-primary rounded resize-bar"})}),d&&/*#__PURE__*/G("div",{className:"resize-guides-container position-absolute ",children:Xe.map(function(e){return parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(m.width*e/100)}}).map(function(e){/*#__PURE__*/return G("div",{className:K("resize-guide position-absolute rounded",{"bg-info":"start"===l&&e.percentage===g||"end"===l&&100-e.percentage===g}),style:{left:e.pixels}},e.pixels)})})]})}var $e=["editorRef","onAlignmentChange"],en=[{label:"Align left",style:De,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function nn(e){var n=e.onAlignmentChange,t=fe(e,$e),r=o(function(e){var r=e.alignment;n&&n({alignment:r});var o=t.block.getEntityAt(0);t.contentState.mergeEntityData(o,{alignment:r})},[n]);/*#__PURE__*/return G("div",{className:"d-inline-block shadow-md rounded mb-1",children:en.map(function(e){/*#__PURE__*/return G(c,{title:null==e?void 0:e.label,type:"button",className:K("btn btn-icon m-0 text-muted",{}),onClick:function(n){return r({alignment:null==e?void 0:e.style})},children:e.icon?/*#__PURE__*/G("i",{className:e.icon}):null==e?void 0:e.label},null==e?void 0:e.style)})})}var tn=["children"];function rn(n){var t=n.children,r=fe(n,tn),o=e.useState(!1),i=o[0],a=o[1],l=e.useState(r.size||30),c=l[0],s=l[1],p=e.useState(r.alignment||De),u=p[0],d=p[1],f=function(){return{"justify-content-start":"start"===u,"justify-content-center":"center"===u,"justify-content-end":"end"===u}};/*#__PURE__*/return _(q,{children:[i&&u&&/*#__PURE__*/G("div",{className:K("d-flex",f()),children:/*#__PURE__*/G(nn,ue({onAlignmentChange:function(e){return d(e.alignment)}},r))}),/*#__PURE__*/_("div",{className:K("d-flex align-items-center position-relative",f()),children:[i&&"start"!==u&&/*#__PURE__*/G(Qe,ue({},r,{reference:u,onResizeEnd:function(e){return s(e.partition)}})),/*#__PURE__*/G("div",{className:K("d-inline-block rounded resize-container unselectable",{"resize-focused":i,"w-10":10===c,"w-15":15===c,"w-20":20===c,"w-25":25===c,"w-30":30===c,"w-35":35===c,"w-40":40===c,"w-45":45===c,"w-50":50===c,"w-55":55===c,"w-60":60===c,"w-65":65===c,"w-70":70===c,"w-75":75===c,"w-80":80===c,"w-85":85===c,"w-90":90===c,"w-95":95===c,"w-100":100===c}),onClick:function(){return a(function(e){return!e})},children:t}),i&&"end"!==u&&/*#__PURE__*/G(Qe,ue({},r,{reference:u,currentSize:c,onResizeEnd:function(e){return s(e.partition)}}))]})]})}var on=["type","data","editorControllers"];function an(e){var n=e.type,t=e.data,r=null,o=ue({},t,e.editorControllers,fe(e,on));return n===je&&(r=/*#__PURE__*/G(rn,ue({},o,{children:/*#__PURE__*/G(Je,ue({},t))}))),n===Fe&&(r=/*#__PURE__*/G(Ve,ue({},t))),n===ze&&(r=/*#__PURE__*/G(Ze,ue({},t))),r}var ln=["generateLink"],cn=function(e){return"atomic"===e.getType()?{component:sn,editable:!1}:null},sn=function(n){var t,r,o,a,l=n.block.getEntityAt(0),c=l&&n.contentState.getEntity(l),s=null==c?void 0:c.getType(),p=i(He),u=p.generateLink,d=fe(p,ln),f=(t=ue({generateLink:u},null==c?void 0:c.getData()),o=(r=e.useState(t.src))[0],a=r[1],e.useEffect(function(){return function(){try{Promise.resolve(function(){if(!t.src)return function(e,n){try{var r=function(){if(!t.generateLink||"function"!=typeof t.generateLink)throw Error("link gnerator function must be supplied");return Promise.resolve(t.generateLink(t.storageInfo)).then(function(e){if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");a(e)})}()}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){a(pe),console.log(e)})}())}catch(e){return Promise.reject(e)}}(),function(){}},[t.generateLink]),{link:o});/*#__PURE__*/return G(an,ue({type:s,data:ue({},null==c?void 0:c.getData(),f),editorControllers:ue({},d)},n))},pn=["readOnly"];function un(n){var t=n.readOnly,r=void 0!==t&&t,o=fe(n,pn),i=e.useContext(He);/*#__PURE__*/return G(q,{children:/*#__PURE__*/G(se,{ref:i.editorRef,blockRendererFn:cn,placeholder:o.placeholder,onChange:i.handleEditorStateChange,editorState:i.editorState,spellCheck:!0,handleKeyCommand:i.handleKeyCommand,handleDroppedFiles:i.handleDroppedFiles,handlePastedFiles:i.handlePastedFiles,readOnly:r,onFocus:i.activateEditor,onBlur:i.deactivateEditor})})}var dn={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:Ee},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:Ee},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:Ee},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:Ee}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:Oe},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:Oe},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:Oe},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:Oe},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:Oe}],ENTITY_TYPES:[{label:"Image",style:je,icon:"fa-solid fa-images",element:xe},{label:"Divider",style:Fe,icon:"fa-solid fa-minus",element:xe}]};function fn(e){/*#__PURE__*/return G("span",{className:"draft-toolbar-button-separator",children:"|"})}var hn=/*#__PURE__*/e.forwardRef(function(e,n){/*#__PURE__*/return G("input",ue({},e,{ref:n,className:"d-none",type:"file",accept:e.accept||"image/*"}))});function gn(n){var t=e.useContext(He),r=t.isToolActive,o=t.handleToolClick;/*#__PURE__*/return _(q,{children:[/*#__PURE__*/G(hn,ue({},(0,t.getFileInputProps)())),Object.keys(dn).map(function(n,t){var i;/*#__PURE__*/return _(e.Fragment,{children:[null==(i=dn[n])?void 0:i.map(function(e){/*#__PURE__*/return G(c,{title:null==e?void 0:e.label,type:"button",className:"btn btn-icon text-muted mr-1",onMouseDown:function(n){return o(e,n)},children:e.icon?/*#__PURE__*/G("i",{className:K(e.icon,{"text-primary":r(e)})}):null==e?void 0:e.label},null==e?void 0:e.style)}),t<Object.keys(dn).length-1&&/*#__PURE__*/G(fn,{})]},n)})]})}function vn(n){var t=e.useContext(He),r=t.forceFocusEditorEnd;/*#__PURE__*/return _("div",{className:K("draft-editor-container d-flex flex-column",{"editor-disabled":n.readOnly,"editor-active":t.focusedForEditing}),children:[!n.readOnly&&/*#__PURE__*/_("div",{children:[/*#__PURE__*/G(gn,ue({},n)),/*#__PURE__*/G("hr",{})]}),/*#__PURE__*/G(un,ue({},n)),/*#__PURE__*/G("div",{className:"flex-grow-1",onMouseDown:r})]})}function mn(e){/*#__PURE__*/return G(Ye,ue({},e,{children:/*#__PURE__*/G(vn,ue({},e))}))}mn.propTypes={value:l.string,linkGeneratorFn:l.func,handleUpload:l.func},Object.assign({},T.prototype.props);var yn=function(e){var n=ue({},(de(e),e));/*#__PURE__*/return G(T,ue({},n,{children:n.children}))};yn.propTypes=ue({},T.propTypes&&T.propTypes);var bn=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},N.prototype.props);var Tn=function(e){var n=fe(e,bn);/*#__PURE__*/return G(q,{children:/*#__PURE__*/_(N,ue({caret:!n.startIcon&&!n.endIcon&&n.caret},n,{children:[n.startIcon&&/*#__PURE__*/G("i",{className:K(n.startIcon,"me-2")}),n.children,n.endIcon&&/*#__PURE__*/G("i",{className:K(n.endIcon,"ms-2")})]}))})};Tn.propTypes=ue({startIcon:l.string,endIcon:l.string,caret:l.bool},N.propTypes&&N.propTypes);var Nn,Sn=["children"];Object.assign({},null==(Nn=S.prototype)?void 0:Nn.props);var Cn=function(e){var n=e.children,t=fe(e,Sn);/*#__PURE__*/return G(S,ue({},t,{children:n}))};Cn.propTypes=ue({},S.propTypes&&S.propTypes);var kn,wn=["children"];Object.assign({},null==(kn=C.prototype)?void 0:kn.props);var In=function(e){var n=e.children,t=fe(e,wn);/*#__PURE__*/return G(C,ue({},t,{children:n}))};In.propTypes=ue({},C.propTypes&&C.propTypes);var Pn,En=["children"];Object.assign({},null==(Pn=k.prototype)?void 0:Pn.props);var On=function(e){var n=e.children,t=fe(e,En);/*#__PURE__*/return G(k,ue({},t,{children:n}))};On.propTypes=ue({},k.propTypes&&k.propTypes);var xn,jn=["children"];Object.assign({},null==(xn=w.prototype)?void 0:xn.props);var Fn=function(e){var n=e.children,t=fe(e,jn);/*#__PURE__*/return G(w,ue({},t,{children:n}))};Fn.propTypes=ue({},w.propTypes&&w.propTypes);var Ln,Rn=["children"];Object.assign({},null==(Ln=I.prototype)?void 0:Ln.props);var zn=function(e){var n=e.children,t=fe(e,Rn);/*#__PURE__*/return G(I,ue({},t,{children:n}))};zn.propTypes=ue({},I.propTypes&&I.propTypes);var Dn=["children"];Object.assign({},P.prototype.props);var An=function(e){var n=e.children,t=fe(e,Dn);/*#__PURE__*/return G(P,ue({},t,{children:n}))};An.propTypes=ue({},P.propTypes&&P.propTypes);var Mn=["children"];Object.assign({},E.prototype.props);var Bn=function(e){var n=e.children,t=fe(e,Mn);/*#__PURE__*/return G(E,ue({},t,{children:n}))};Bn.propTypes=ue({},E.propTypes&&E.propTypes);var Un=["children"];Object.assign({},O.prototype.props);var Kn=function(e){var n=e.children,t=fe(e,Un);/*#__PURE__*/return G(O,ue({},t,{children:n}))};Kn.propTypes=ue({},O.propTypes&&O.propTypes);var _n=["children"];Object.assign({},x.prototype.props);var Gn=function(e){var n=e.children,t=fe(e,_n);/*#__PURE__*/return G(x,ue({},t,{children:n}))};Gn.propTypes=ue({},x.propTypes&&x.propTypes);var qn=["children"];Object.assign({},j.prototype.props);var Hn=function(e){var n=e.children,t=fe(e,qn);/*#__PURE__*/return G(j,ue({},t,{children:n}))};Hn.propTypes=ue({},j.propTypes&&j.propTypes);var Yn=["children"];Object.assign({},F.prototype.props);var Jn=function(e){var n=e.children,t=fe(e,Yn);/*#__PURE__*/return G(F,ue({},t,{children:n}))};Jn.propTypes=ue({},F.propTypes&&F.propTypes);var Vn=["children"];Object.assign({},L.prototype.props);var Zn=function(e){var n=e.children,t=fe(e,Vn);/*#__PURE__*/return G(L,ue({},t,{children:n}))};Zn.propTypes=ue({},L.propTypes&&L.propTypes);var Wn=["children","separated"];Object.assign({separated:!1},R.prototype.props);var Xn=function(e){var n=e.children,t=e.separated,r=fe(e,Wn);/*#__PURE__*/return G(R,ue({className:K(r.className,{"pagination-separated":t})},r,{children:n}))};Xn.propTypes=ue({separated:l.bool},R.propTypes&&R.propTypes);var Qn=["children"];Object.assign({},z.prototype.props);var $n=function(e){var n=e.children,t=fe(e,Qn);/*#__PURE__*/return G(z,ue({},t,{children:n}))};$n.propTypes=ue({},z.propTypes&&z.propTypes);var et=["children","link"];Object.assign({},D.prototype.props);var nt=function(e){var n=e.children,t=e.link,r=fe(e,et);return t?/*#__PURE__*/G("span",{className:"page-link",children:n}):/*#__PURE__*/G(D,ue({},r,{children:n}))};nt.propTypes=ue({},D.propTypes&&D.propTypes);var tt,rt=["children"];Object.assign({},null==(tt=A.prototype)?void 0:tt.props);var ot=function(e){var n=e.children,t=fe(e,rt);/*#__PURE__*/return G(A,ue({},t,{children:n}))};ot.propTypes=ue({},A.propTypes&&A.propTypes);var it,at=["children"];Object.assign({},null==(it=M.prototype)?void 0:it.props);var lt=function(e){var n=e.children,t=fe(e,at);/*#__PURE__*/return G(M,ue({},t,{children:n}))};lt.propTypes=ue({},M.propTypes&&M.propTypes);var ct,st=["children"];Object.assign({},null==(ct=B.prototype)?void 0:ct.props);var pt=function(e){var n=e.children,t=fe(e,st);/*#__PURE__*/return G(B,ue({},t,{children:n}))};pt.propTypes=ue({},B.propTypes&&B.propTypes);var ut,dt=["children"];Object.assign({},null==(ut=U.prototype)?void 0:ut.props);var ft=function(e){var n=e.children;return fe(e,dt),/*#__PURE__*/G(U,{children:n})};ft.propTypes=ue({},ft.propTypes&&ft.propTypes);export{Pe as AdvancedTable,ft as Alert,he as Button,ge as Card,ve as CardBody,me as CardFooter,ye as CardHeader,be as Dropdown,Ne as DropdownItem,yn as DropdownMenu,Tn as DropdownToggle,Cn as ListBase,In as ListGroupItem,On as ListGroupItemHeading,Fn as ListGroupItemText,zn as ListInlineItem,Hn as Nav,Jn as NavItem,Zn as NavLink,An as Navbar,Bn as NavbarBrand,Kn as NavbarText,Gn as NavbarToggler,Xn as Pagination,$n as PaginationItem,nt as PaginationLink,Se as SimpleTable,ot as TabContent,lt as TabPane,mn as TextEditor,pt as UncontrolledAlert};
//# sourceMappingURL=ims-ui-kit.module.js.map
