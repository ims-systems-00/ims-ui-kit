var e=require("react"),t=require("prop-types"),n=require("reactstrap"),r=require("classnames"),o=require("react/jsx-runtime"),a=require("react-table"),i=require("react-select"),l=require("draft-js"),s=require("assets/img/default-avatar.png");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=/*#__PURE__*/c(e),u=/*#__PURE__*/c(t),p=/*#__PURE__*/c(r),f=/*#__PURE__*/c(i),g=/*#__PURE__*/c(s);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function h(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function m(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}Object.assign({leftIcon:"",rightIcon:""},n.Button.prototype.props);var y=function(e){/*#__PURE__*/return o.jsxs(n.Button,v({},e,{children:[e.leftIcon?/*#__PURE__*/o.jsx("i",{className:p.default(e.leftIcon,"me-2")}):null,e.children,e.rightIcon?/*#__PURE__*/o.jsx("i",{className:p.default(e.rightIcon,"ms-2")}):null]}))};y.propTypes=v({leftIcon:u.default.string,rightIcon:u.default.string},n.Button.propTypes&&n.Button.propTypes),Object.assign({},n.Card.prototype.props);var x=function(e){/*#__PURE__*/return o.jsx(n.Card,v({},e,{children:e.children}))};x.propTypes=v({},n.Card.propTypes&&n.Card.propTypes),Object.assign({},n.CardBody.prototype.props);var j=function(e){/*#__PURE__*/return o.jsx(n.CardBody,v({},e,{children:e.children}))};j.propTypes=v({},n.CardBody.propTypes&&n.CardBody.propTypes),Object.assign({},n.CardFooter.prototype.props);var b=function(e){/*#__PURE__*/return o.jsx(n.CardFooter,v({},e,{children:e.children}))};b.propTypes=v({},n.CardFooter.propTypes&&n.CardFooter.propTypes),Object.assign({},n.CardHeader.prototype.props);var T=function(e){/*#__PURE__*/return o.jsx(n.CardHeader,v({},e,{children:e.children}))};T.propTypes=v({},n.CardHeader.propTypes&&n.CardHeader.propTypes),Object.assign({},n.Dropdown.prototype.props);var N=function(e){var t=v({},(h(e),e));/*#__PURE__*/return o.jsx(n.Dropdown,v({},t,{children:t.children}))};N.propTypes=v({},n.Dropdown.propTypes&&n.Dropdown.propTypes);var C=["leftIcon","rightIcon","leftIconStyle","rightIconStyle"];Object.assign({},n.DropdownItem.prototype.props);var S=function(e){var t=e.leftIcon,r=void 0===t?"":t,a=e.rightIcon,i=void 0===a?"":a,l=e.leftIconStyle,s=void 0===l?"text-secondary":l,c=e.rightIconStyle,d=void 0===c?"text-secondary":c,u=m(e,C);/*#__PURE__*/return o.jsxs(n.DropdownItem,v({},u,{className:"d-flex justify-content-between align-items-center",children:[/*#__PURE__*/o.jsxs("span",{children:[r&&/*#__PURE__*/o.jsx("i",{className:r+" "+s+" me-2"}),u.children]}),i&&/*#__PURE__*/o.jsx("i",{className:i+" "+d})]}))};S.propTypes=v({},n.DropdownItem.propTypes&&n.DropdownItem.propTypes);var I=function(e){/*#__PURE__*/return o.jsxs(n.Table,{striped:!0,hover:!0,children:[/*#__PURE__*/o.jsx("thead",{children:/*#__PURE__*/o.jsx("tr",{children:e.thead.map(function(t,n){/*#__PURE__*/return o.jsx("th",{className:p.default("",{"text-right":e.thead.length-1===n}),children:t.text},n)})})}),/*#__PURE__*/o.jsx("tbody",{children:e.tbody.map(function(e,t){var n;/*#__PURE__*/return o.jsxs("tr",{className:p.default((n={},n[e.className]=void 0!==e.className,n)),children:[e.data.map(function(e,t){var n;/*#__PURE__*/return o.jsx("td",{className:p.default((n={},n[e.className]=void 0!==e.className,n)),children:e.item},t)}),e.actions&&/*#__PURE__*/o.jsx("td",{className:"text-right",children:e.actions})]},t)})})]})};I.propTypes={thead:u.default.arrayOf(u.default.shape({className:u.default.string,text:u.default.string.isRequired})).isRequired,tbody:u.default.arrayOf(u.default.shape({className:u.default.string,data:u.default.arrayOf(u.default.shape({className:u.default.string,item:u.default.oneOfType([u.default.string,u.default.number,u.default.node]).isRequired})).isRequired,actions:u.default.node})).isRequired};var k=function(t){var r,a,i,l,s=t.onFilter,c=void 0===s?function(){}:s,u=t.onSearch,p=void 0===u?function(){}:u,g=t.filters,v=void 0===g?[]:g,h=d.default.useState(""),m=h[1],y=(i=(a=e.useState(r=h[0]))[0],l=a[1],e.useEffect(function(){var e=setTimeout(function(){l(r)},500);return function(){clearTimeout(e)}},[r,500]),i);return d.default.useEffect(function(){p({value:{clientSearch:y}})},[y]),/*#__PURE__*/o.jsxs(n.Row,{children:[/*#__PURE__*/o.jsx(n.Col,{md:"3",children:/*#__PURE__*/o.jsx(f.default,{className:"react-select default m-0 w-100",classNamePrefix:"react-select",name:"singleSelect",onChange:function(e){c(e)},defaultValue:v.find(function(e){return e.default}),options:v,placeholder:"Select filter"})}),/*#__PURE__*/o.jsx(n.Col,{md:"6",children:/*#__PURE__*/o.jsx(n.InputGroup,{children:/*#__PURE__*/o.jsx(n.Input,{onChange:function(e){return m(e.currentTarget.value.toString())},placeholder:"Search item"})})})]})},w="...",E=function(e,t){return Array.from({length:t-e+1},function(t,n){return n+e})},P=function(t){var n=t.onPageChange,r=void 0===n?function(){}:n,a=t.totalCount,i=t.siblingCount,l=t.currentPage,s=void 0===l?1:l,c=t.pageSize,d=function(t){var n=t.totalCount,r=t.pageSize,o=t.siblingCount,a=void 0===o?1:o,i=t.currentPage;return e.useMemo(function(){var e=Math.ceil(n/r);if(a+5>=e)return E(1,e);var t=Math.max(i-a,1),o=Math.min(i+a,e),l=t>2,s=o<e-2,c=1,d=e;if(!l&&s){var u=E(1,3+2*a);return[].concat(u,[w,e])}if(l&&!s){var p=E(e-(3+2*a)+1,e);return[c,w].concat(p)}if(l&&s){var f=E(t,o);return[c,w].concat(f,[w,d])}},[n,r,a,i])}({currentPage:s,totalCount:void 0===a?0:a,siblingCount:void 0===i?1:i,pageSize:void 0===c?10:c});if(0===s||d.length<2)return null;var u=d[d.length-1];/*#__PURE__*/return o.jsx(o.Fragment,{children:/*#__PURE__*/o.jsx("nav",{"aria-label":"Page navigation",children:/*#__PURE__*/o.jsxs("ul",{className:"pagination",children:[/*#__PURE__*/o.jsx("li",{className:"page-item",children:/*#__PURE__*/o.jsxs("button",{onClick:function(){r&&r(s-1)},className:"page-link","aria-label":"Next",children:[/*#__PURE__*/o.jsx("span",{"aria-hidden":"true",children:"«"}),/*#__PURE__*/o.jsx("span",{className:"sr-only",children:"Previous"})]})},"first-button"),d.map(function(e,t){return e===w?/*#__PURE__*/o.jsx("li",{className:"pagination-item dots",children:"…"},w+t):/*#__PURE__*/o.jsx("li",{className:"page-item "+(s===e&&" active"),children:/*#__PURE__*/o.jsx("button",{className:"page-link",onClick:function(){return r(e)},children:e})},e)}),/*#__PURE__*/o.jsx("li",{className:"page-item",children:/*#__PURE__*/o.jsxs("button",{disabled:s===u,className:"page-link",onClick:function(){r&&r(s+1)},"aria-label":"Next",children:[/*#__PURE__*/o.jsx("span",{"aria-hidden":"true",children:"»"}),/*#__PURE__*/o.jsx("span",{className:"sr-only",children:"Next"})]})},"next-button")]})})})},L="inline-default",O="block-default",F="atomic-entity",D="image",R="divider",B="link",A="mention",z="checklist",M="start";function U(t){var n=t.name,r=t.profileImageUrl,a=t._id,i=t.onSelect,l=void 0===i?function(){}:i,s=e.useCallback(function(e){e.preventDefault(),l({name:n,profileImageUrl:r,_id:a})});/*#__PURE__*/return o.jsxs("div",{className:"d-flex align-items-center",children:[/*#__PURE__*/o.jsx("div",{className:"avatar mb-1",children:/*#__PURE__*/o.jsx("img",{src:r||g.default,alt:n})}),/*#__PURE__*/o.jsx("div",{onClick:s,className:"btn btn-link p-2 mb-1",children:n})]})}var G=["suggestions"];function q(t){var n=t.suggestions,r=m(t,G),a=e.useContext(V);/*#__PURE__*/return o.jsx(o.Fragment,{children:n.length?/*#__PURE__*/o.jsx("div",{className:"mention-suggestions position-absolute mt-4 p-2 shadow-md",style:v({},a.computedPosForMentionSuggestions),children:n.map(function(e,t){/*#__PURE__*/return o.jsx(U,v({},e,r),e.name+t)})}):null})}function H(e,t,n){for(var r,o,a=t.getText();null!==(r=e.exec(a));)n(o=r.index,o+r[0].length)}var K=/\B@\w+/g,_=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,Y=new l.CompositeDecorator([{strategy:function(e,t,n){H(K,e,t)},component:function(t){var n=e.useRef(null),r=e.useContext(V),a=r.editorRef,i=r.mentionSuggestions,l=r.updateComputedPosForMentionSuggestions,s=r.handleMentionSelect,c=e.useCallback(function(){var e,t;return{left:(null==(e=a.current)||null==(t=e.editor)?void 0:t.getBoundingClientRect()).width-n.current.offsetLeft<240?n.current.offsetLeft-230:n.current.offsetLeft,top:n.current.offsetTop,display:"block"}},[]),d=e.useCallback(function(){return{display:"none"}},[]);function u(){if(!t.entityKey)return null;var e=t.contentState.getEntity(t.entityKey);return v({},null==e?void 0:e.getData())}return e.useEffect(function(){n.current&&l(c())},[]),/*#__PURE__*/o.jsxs(o.Fragment,{children:[u()?/*#__PURE__*/o.jsx("a",{href:"/admin/users/"+u()._id,className:"text-primary",children:u().name}):/*#__PURE__*/o.jsx("span",{ref:n,className:"",children:t.children}),/*#__PURE__*/o.jsx(q,{suggestions:i.filter(function(e){var n;return e.name.toLowerCase().includes(t.decoratedText.slice(1,null==t||null==(n=t.decoratedText)?void 0:n.length).toLowerCase())}),onSelect:function(e){var n=e.name,r=e.profileImageUrl,o=e._id,a="@"+n.split(" ").join("_");s(t.contentState,t.blockKey,{start:t.start,end:t.end},{mention:a+" ",profileImageUrl:r,_id:o,name:n}),l(d())}})]})}},{strategy:function(e,t,n){H(_,e,t)},component:function(e){/*#__PURE__*/return o.jsx("a",{href:e.decoratedText,title:e.decoratedText,target:"_blank",rel:"noreferrer",children:e.children})}},{strategy:function(e,t,n){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&n.getEntity(t).getType()===B},t)},component:function(e){var t=e.contentState.getEntity(e.entityKey).getData();return t.href?/*#__PURE__*/o.jsx("a",{href:t.href,title:t.linkText,target:"_blank",rel:"noreferrer",children:t.linkText||t.href}):null}}]),J=["children"],V=/*#__PURE__*/d.default.createContext(),Z=function(t){var n=t.children,r=m(t,J),a=function(t){var n,r,o=e.useRef(null),a=e.useState(l.EditorState.createEmpty(Y)),i=a[0],s=a[1],c=e.useState(!1),d=c[0],u=c[1],p=e.useState({display:"none"}),f=p[0],g=p[1];e.useEffect(function(){var e;try{"string"==typeof t.value&&(e=JSON.parse(t.value)),"object"==typeof t.value&&(e=t.value)}catch(e){if(console.log(e),"string"==typeof t.value)return y(l.EditorState.createWithContent(l.ContentState.createFromText(t.value)))}return y(t.value||e?l.EditorState.push(i,l.convertFromRaw(e),"change-block-data"):l.EditorState.createEmpty(Y))},[]);var h=e.useRef(null),m=function(e,t){var n=i.getCurrentContent().createEntity(e,"IMMUTABLE",v({},t)),r=n.getLastCreatedEntityKey(),o=l.EditorState.set(i,{currentContent:n},"create-entity");y(l.AtomicBlockUtils.insertAtomicBlock(o,r," "))},y=function(e){var n=e.getCurrentContent();s(e),t.onDataStructureChange(JSON.stringify(l.convertToRaw(n)))},x=function(e){try{if(!t.handleUpload)return Promise.resolve(console.log("Uploader function not specified"));var n=e.every(function(e){return"image"===e.type.split("/")[0]});return Promise.resolve(n?function(n,r){try{var o=Promise.resolve(Promise.all(e.map(function(e){return t.handleUpload(e)}))).then(function(e){console.log(e),e.every(function(e){return e})||console.log("one or mutiple files don't have storage info"),e.map(function(e){return m(D,{storageInfo:e})})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e)}):console.log("All files has to be images"))}catch(e){return Promise.reject(e)}},j=function(e){e.preventDefault(),x(Array.from(e.target.files))},b=((n={})[D]=function(){return h.current.click()},n[B]=function(){return y(function(e){var t=window.prompt("Paste the link bellow:");if(t){var n=window.prompt("Paste the link-text below:");if(n){var r=e.getCurrentContent();r.createEntity(B,"MUTABLE",{href:t,linkText:n});var o=r.getLastCreatedEntityKey(),a=e.getSelection(),i=l.Modifier.replaceText(r,a,n,null,o),s=a.set("anchorOffset",a.getAnchorOffset()+n.length),c=l.EditorState.set(e,{currentContent:i},"create-entity"),d=l.EditorState.forceSelection(c,s);return console.log(s.getAnchorOffset(),"editor selection anchor offset after link insert:",d.getSelection().getAnchorOffset()),d}}}(i))},n[R]=function(){return m(R,{})},n[A]=function(){},n[z]=function(){m(z,{})},n),T=((r={})[L]=function(e){return y(l.RichUtils.toggleInlineStyle(i,e))},r[O]=function(e){return y(l.RichUtils.toggleBlockType(i,e))},r[F]=function(e){b[e]()},r);return{editorRef:o,editorState:i,computedPosForMentionSuggestions:f,focusedForEditing:d,getFileInputProps:function(){return{ref:h,onChange:j}},generateLink:function(e){try{return Promise.resolve(t.linkGeneratorFn&&"function"==typeof t.linkGeneratorFn?t.linkGeneratorFn(e):null)}catch(e){return Promise.reject(e)}},handleDroppedFiles:function(e,t){return x(t)},handlePastedFiles:function(e){return x(e)},handleEditorStateChange:y,handleKeyCommand:function(e,t){var n=l.RichUtils.handleKeyCommand(t,e);return n?(y(n),"handled"):"not-handled"},handleToolClick:function(e,t){return t.preventDefault(),i.getSelection().getHasFocus()&&null!=e&&e.element?void T[e.element](e.style):null},forceFocusEditorEnd:function(e){var t;(null==e?void 0:e.preventDefault)&&e.preventDefault(),null==(t=o.current.editor)||t.focus(),y(l.EditorState.moveFocusToEnd(i))},updateComputedPosForMentionSuggestions:function(e){return g(e)},handleMentionSelect:function(e,t,n,r){var o=l.SelectionState.createEmpty(t),a=e.createEntity(A,"IMMUTABLE",v({},r)),s=a.getLastCreatedEntityKey();a=l.Modifier.replaceText(e,o.merge({anchorOffset:n.start,focusOffset:n.end}),r.mention,i.getCurrentInlineStyle(),s),y(l.EditorState.forceSelection(l.EditorState.moveFocusToEnd(l.EditorState.set(i,{currentContent:a})),a.getSelectionAfter()))},activateEditor:function(){return u(!0)},deactivateEditor:function(){return u(!1)},isToolActive:function(e){return i.getCurrentInlineStyle().has(null==e?void 0:e.style)||(null==i?void 0:i.getCurrentContent().getBlockForKey(null==i?void 0:i.getSelection().getStartKey()).getType())===(null==e?void 0:e.style)}}}({handleUpload:r.handleUpload||function(){return Promise.resolve()},linkGeneratorFn:r.linkGeneratorFn,onDataStructureChange:r.onDataStructureChange||function(){},value:r.value||null}),i=v({},(h(a),a));/*#__PURE__*/return o.jsx(V.Provider,{value:v({},i,{mentionSuggestions:r.mentionSuggestions||[]}),children:n})};function W(e){var t;return e.src||e.link?/*#__PURE__*/o.jsx("img",{src:e.src||e.link,alt:e.alt||(null==(t=e.storageInfo)?void 0:t.Key)||"...",className:"unselectable"}):null}function X(){/*#__PURE__*/return o.jsx("hr",{})}function Q(e){/*#__PURE__*/return o.jsx(d.default.Fragment,{})}var $=["editorRef","onResizeEnd","reference","currentSize"],ee=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];function te(e){var t,n,r=e.editorRef,a=e.onResizeEnd,i=e.reference,l=void 0===i?"left":i,s=e.currentSize,c=void 0===s?10:s,u=m(e,$),f=d.default.useState(!1),g=f[0],v=f[1],h=d.default.useState(c),y=h[0],x=h[1],j=null==(t=r.current)||null==(n=t.editor)?void 0:n.getBoundingClientRect(),b=d.default.useCallback(function(e){e.preventDefault();var t=function(e){var t=[].concat(ee);v(!0);var n="center"===l?j.width/2:j.width,r=parseInt(Math.abs(e.clientX-("center"===l?j.left+j.width/2:"end"===l?j.left+j.width:j.left))),o=parseInt(r/n*100);t.sort(function(e,t){return Math.abs(o-e)-Math.abs(o-t)});var i=t[0];x(i),a&&a({partition:i});var s=u.block.getEntityAt(0);u.contentState.mergeEntityData(s,{size:i})};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",function e(){v(!1),document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",e,!1)},!1)},[a]);/*#__PURE__*/return o.jsxs(o.Fragment,{children:[/*#__PURE__*/o.jsx("div",{className:"d-inline-block p-2 unselectable",style:{cursor:"col-resize"},onMouseDown:b,children:/*#__PURE__*/o.jsx("div",{className:"bg-primary rounded resize-bar"})}),g&&/*#__PURE__*/o.jsx("div",{className:"resize-guides-container position-absolute ",children:ee.map(function(e){return parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"),null).getPropertyValue("padding-left")),{percentage:e,pixels:Math.ceil(j.width*e/100)}}).map(function(e){/*#__PURE__*/return o.jsx("div",{className:p.default("resize-guide position-absolute rounded",{"bg-info":"start"===l&&e.percentage===y||"end"===l&&100-e.percentage===y}),style:{left:e.pixels}},e.pixels)})})]})}var ne=["editorRef","onAlignmentChange"],re=[{label:"Align left",style:M,icon:"fa-solid fa-align-left"},{label:"Align center",style:"center",icon:"fa-solid fa-align-justify"},{label:"Align right",style:"end",icon:"fa-solid fa-align-right"}];function oe(t){var r=t.onAlignmentChange,a=m(t,ne),i=e.useCallback(function(e){var t=e.alignment;r&&r({alignment:t});var n=a.block.getEntityAt(0);a.contentState.mergeEntityData(n,{alignment:t})},[r]);/*#__PURE__*/return o.jsx("div",{className:"d-inline-block shadow-md rounded mb-1",children:re.map(function(e){/*#__PURE__*/return o.jsx(n.Button,{title:null==e?void 0:e.label,type:"button",className:p.default("btn btn-icon m-0 text-muted",{}),onClick:function(t){return i({alignment:null==e?void 0:e.style})},children:e.icon?/*#__PURE__*/o.jsx("i",{className:e.icon}):null==e?void 0:e.label},null==e?void 0:e.style)})})}var ae=["children"];function ie(e){var t=e.children,n=m(e,ae),r=d.default.useState(!1),a=r[0],i=r[1],l=d.default.useState(n.size||30),s=l[0],c=l[1],u=d.default.useState(n.alignment||M),f=u[0],g=u[1],h=function(){return{"justify-content-start":"start"===f,"justify-content-center":"center"===f,"justify-content-end":"end"===f}};/*#__PURE__*/return o.jsxs(o.Fragment,{children:[a&&f&&/*#__PURE__*/o.jsx("div",{className:p.default("d-flex",h()),children:/*#__PURE__*/o.jsx(oe,v({onAlignmentChange:function(e){return g(e.alignment)}},n))}),/*#__PURE__*/o.jsxs("div",{className:p.default("d-flex align-items-center position-relative",h()),children:[a&&"start"!==f&&/*#__PURE__*/o.jsx(te,v({},n,{reference:f,onResizeEnd:function(e){return c(e.partition)}})),/*#__PURE__*/o.jsx("div",{className:p.default("d-inline-block rounded resize-container unselectable",{"resize-focused":a,"w-10":10===s,"w-15":15===s,"w-20":20===s,"w-25":25===s,"w-30":30===s,"w-35":35===s,"w-40":40===s,"w-45":45===s,"w-50":50===s,"w-55":55===s,"w-60":60===s,"w-65":65===s,"w-70":70===s,"w-75":75===s,"w-80":80===s,"w-85":85===s,"w-90":90===s,"w-95":95===s,"w-100":100===s}),onClick:function(){return i(function(e){return!e})},children:t}),a&&"end"!==f&&/*#__PURE__*/o.jsx(te,v({},n,{reference:f,currentSize:s,onResizeEnd:function(e){return c(e.partition)}}))]})]})}var le=["type","data","editorControllers"];function se(e){var t=e.type,n=e.data,r=null,a=v({},n,e.editorControllers,m(e,le));return t===D&&(r=/*#__PURE__*/o.jsx(ie,v({},a,{children:/*#__PURE__*/o.jsx(W,v({},n))}))),t===R&&(r=/*#__PURE__*/o.jsx(X,v({},n))),t===z&&(r=/*#__PURE__*/o.jsx(Q,v({},n))),r}var ce=["generateLink"],de=function(e){return"atomic"===e.getType()?{component:ue,editable:!1}:null},ue=function(t){var n,r,a,i,l=t.block.getEntityAt(0),s=l&&t.contentState.getEntity(l),c=null==s?void 0:s.getType(),u=e.useContext(V),p=u.generateLink,f=m(u,ce),h=(n=v({generateLink:p},null==s?void 0:s.getData()),a=(r=d.default.useState(n.src))[0],i=r[1],d.default.useEffect(function(){return function(){try{Promise.resolve(function(){if(!n.src)return function(e,t){try{var r=function(){if(!n.generateLink||"function"!=typeof n.generateLink)throw Error("link gnerator function must be supplied");return Promise.resolve(n.generateLink(n.storageInfo)).then(function(e){if(!e)throw new Error("link generator function must return a valid link or else provide a valid  image source");i(e)})}()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){i(g.default),console.log(e)})}())}catch(e){return Promise.reject(e)}}(),function(){}},[n.generateLink]),{link:a});/*#__PURE__*/return o.jsx(se,v({type:c,data:v({},null==s?void 0:s.getData(),h),editorControllers:v({},f)},t))},pe=["readOnly"];function fe(e){var t=e.readOnly,n=void 0!==t&&t,r=m(e,pe),a=d.default.useContext(V);/*#__PURE__*/return o.jsx(o.Fragment,{children:/*#__PURE__*/o.jsx(l.Editor,{ref:a.editorRef,blockRendererFn:de,placeholder:r.placeholder,onChange:a.handleEditorStateChange,editorState:a.editorState,spellCheck:!0,handleKeyCommand:a.handleKeyCommand,handleDroppedFiles:a.handleDroppedFiles,handlePastedFiles:a.handlePastedFiles,readOnly:n,onFocus:a.activateEditor,onBlur:a.deactivateEditor})})}var ge={INLINE_TYPES:[{label:"Underline",style:"UNDERLINE",icon:"fa-solid fa-underline",element:L},{label:"Bold",style:"BOLD",icon:"fa-solid fa-bold",element:L},{label:"Italic",style:"ITALIC",icon:"fa-solid fa-italic",element:L},{label:"Strike through",style:"STRIKETHROUGH",icon:"fa-solid fa-strikethrough",element:L}],BLOCK_TYPES:[{label:"Header",style:"header-three",icon:"fa-solid fa-heading",element:O},{label:"UL",style:"unordered-list-item",icon:"fa-solid fa-list",element:O},{label:"OL",style:"ordered-list-item",icon:"fa-solid fa-list-ol",element:O},{label:"Blockquote",style:"blockquote",icon:"fa-solid fa-quote-left",element:O},{label:"Code block",style:"code-block",icon:"fa-solid fa-code",element:O}],ENTITY_TYPES:[{label:"Image",style:D,icon:"fa-solid fa-images",element:F},{label:"Divider",style:R,icon:"fa-solid fa-minus",element:F}]};function ve(e){/*#__PURE__*/return o.jsx("span",{className:"draft-toolbar-button-separator",children:"|"})}var he=/*#__PURE__*/d.default.forwardRef(function(e,t){/*#__PURE__*/return o.jsx("input",v({},e,{ref:t,className:"d-none",type:"file",accept:e.accept||"image/*"}))});function me(e){var t=d.default.useContext(V),r=t.isToolActive,a=t.handleToolClick;/*#__PURE__*/return o.jsxs(o.Fragment,{children:[/*#__PURE__*/o.jsx(he,v({},(0,t.getFileInputProps)())),Object.keys(ge).map(function(e,t){var i;/*#__PURE__*/return o.jsxs(d.default.Fragment,{children:[null==(i=ge[e])?void 0:i.map(function(e){/*#__PURE__*/return o.jsx(n.Button,{title:null==e?void 0:e.label,type:"button",className:"btn btn-icon text-muted mr-1",onMouseDown:function(t){return a(e,t)},children:e.icon?/*#__PURE__*/o.jsx("i",{className:p.default(e.icon,{"text-primary":r(e)})}):null==e?void 0:e.label},null==e?void 0:e.style)}),t<Object.keys(ge).length-1&&/*#__PURE__*/o.jsx(ve,{})]},e)})]})}function ye(e){var t=d.default.useContext(V),n=t.forceFocusEditorEnd;/*#__PURE__*/return o.jsxs("div",{className:p.default("draft-editor-container d-flex flex-column",{"editor-disabled":e.readOnly,"editor-active":t.focusedForEditing}),children:[!e.readOnly&&/*#__PURE__*/o.jsxs("div",{children:[/*#__PURE__*/o.jsx(me,v({},e)),/*#__PURE__*/o.jsx("hr",{})]}),/*#__PURE__*/o.jsx(fe,v({},e)),/*#__PURE__*/o.jsx("div",{className:"flex-grow-1",onMouseDown:n})]})}function xe(e){/*#__PURE__*/return o.jsx(Z,v({},e,{children:/*#__PURE__*/o.jsx(ye,v({},e))}))}xe.propTypes={value:u.default.string,linkGeneratorFn:u.default.func,handleUpload:u.default.func},Object.assign({},n.DropdownMenu.prototype.props);var je=function(e){var t=v({},(h(e),e));/*#__PURE__*/return o.jsx(n.DropdownMenu,v({},t,{children:t.children}))};je.propTypes=v({},n.DropdownMenu.propTypes&&n.DropdownMenu.propTypes);var be=["caret"];Object.assign({startIcon:"",endIcon:"",caret:!0},n.DropdownToggle.prototype.props);var Te=function(e){var t=m(e,be);/*#__PURE__*/return o.jsx(o.Fragment,{children:/*#__PURE__*/o.jsxs(n.DropdownToggle,v({caret:!t.startIcon&&!t.endIcon&&t.caret},t,{children:[t.startIcon&&/*#__PURE__*/o.jsx("i",{className:p.default(t.startIcon,"me-2")}),t.children,t.endIcon&&/*#__PURE__*/o.jsx("i",{className:p.default(t.endIcon,"ms-2")})]}))})};Te.propTypes=v({startIcon:u.default.string,endIcon:u.default.string,caret:u.default.bool},n.DropdownToggle.propTypes&&n.DropdownToggle.propTypes);var Ne,Ce=["children"];Object.assign({},null==(Ne=n.List.prototype)?void 0:Ne.props);var Se=function(e){var t=e.children,r=m(e,Ce);/*#__PURE__*/return o.jsx(n.List,v({},r,{children:t}))};Se.propTypes=v({},n.List.propTypes&&n.List.propTypes);var Ie,ke=["children"];Object.assign({},null==(Ie=n.ListGroupItem.prototype)?void 0:Ie.props);var we=function(e){var t=e.children,r=m(e,ke);/*#__PURE__*/return o.jsx(n.ListGroupItem,v({},r,{children:t}))};we.propTypes=v({},n.ListGroupItem.propTypes&&n.ListGroupItem.propTypes);var Ee,Pe=["children"];Object.assign({},null==(Ee=n.ListGroupItemHeading.prototype)?void 0:Ee.props);var Le=function(e){var t=e.children,r=m(e,Pe);/*#__PURE__*/return o.jsx(n.ListGroupItemHeading,v({},r,{children:t}))};Le.propTypes=v({},n.ListGroupItemHeading.propTypes&&n.ListGroupItemHeading.propTypes);var Oe,Fe=["children"];Object.assign({},null==(Oe=n.ListGroupItemText.prototype)?void 0:Oe.props);var De=function(e){var t=e.children,r=m(e,Fe);/*#__PURE__*/return o.jsx(n.ListGroupItemText,v({},r,{children:t}))};De.propTypes=v({},n.ListGroupItemText.propTypes&&n.ListGroupItemText.propTypes);var Re,Be=["children"];Object.assign({},null==(Re=n.ListInlineItem.prototype)?void 0:Re.props);var Ae=function(e){var t=e.children,r=m(e,Be);/*#__PURE__*/return o.jsx(n.ListInlineItem,v({},r,{children:t}))};Ae.propTypes=v({},n.ListInlineItem.propTypes&&n.ListInlineItem.propTypes);var ze=["children"];Object.assign({},n.Navbar.prototype.props);var Me=function(e){var t=e.children,r=m(e,ze);/*#__PURE__*/return o.jsx(n.Navbar,v({},r,{children:t}))};Me.propTypes=v({},n.Navbar.propTypes&&n.Navbar.propTypes);var Ue=["children"];Object.assign({},n.NavbarBrand.prototype.props);var Ge=function(e){var t=e.children,r=m(e,Ue);/*#__PURE__*/return o.jsx(n.NavbarBrand,v({},r,{children:t}))};Ge.propTypes=v({},n.NavbarBrand.propTypes&&n.NavbarBrand.propTypes);var qe=["children"];Object.assign({},n.NavbarText.prototype.props);var He=function(e){var t=e.children,r=m(e,qe);/*#__PURE__*/return o.jsx(n.NavbarText,v({},r,{children:t}))};He.propTypes=v({},n.NavbarText.propTypes&&n.NavbarText.propTypes);var Ke=["children"];Object.assign({},n.NavbarToggler.prototype.props);var _e=function(e){var t=e.children,r=m(e,Ke);/*#__PURE__*/return o.jsx(n.NavbarToggler,v({},r,{children:t}))};_e.propTypes=v({},n.NavbarToggler.propTypes&&n.NavbarToggler.propTypes);var Ye=["children"];Object.assign({},n.Nav.prototype.props);var Je=function(e){var t=e.children,r=m(e,Ye);/*#__PURE__*/return o.jsx(n.Nav,v({},r,{children:t}))};Je.propTypes=v({},n.Nav.propTypes&&n.Nav.propTypes);var Ve=["children"];Object.assign({},n.NavItem.prototype.props);var Ze=function(e){var t=e.children,r=m(e,Ve);/*#__PURE__*/return o.jsx(n.NavItem,v({},r,{children:t}))};Ze.propTypes=v({},n.NavItem.propTypes&&n.NavItem.propTypes);var We=["children"];Object.assign({},n.NavLink.prototype.props);var Xe=function(e){var t=e.children,r=m(e,We);/*#__PURE__*/return o.jsx(n.NavLink,v({},r,{children:t}))};Xe.propTypes=v({},n.NavLink.propTypes&&n.NavLink.propTypes);var Qe=["children","separated"];Object.assign({separated:!1},n.Pagination.prototype.props);var $e=function(e){var t=e.children,r=e.separated,a=m(e,Qe);/*#__PURE__*/return o.jsx(n.Pagination,v({className:p.default(a.className,{"pagination-separated":r})},a,{children:t}))};$e.propTypes=v({separated:u.default.bool},n.Pagination.propTypes&&n.Pagination.propTypes);var et=["children"];Object.assign({},n.PaginationItem.prototype.props);var tt=function(e){var t=e.children,r=m(e,et);/*#__PURE__*/return o.jsx(n.PaginationItem,v({},r,{children:t}))};tt.propTypes=v({},n.PaginationItem.propTypes&&n.PaginationItem.propTypes);var nt=["children","link"];Object.assign({},n.PaginationLink.prototype.props);var rt=function(e){var t=e.children,r=e.link,a=m(e,nt);return r?/*#__PURE__*/o.jsx("span",{className:"page-link",children:t}):/*#__PURE__*/o.jsx(n.PaginationLink,v({},a,{children:t}))};rt.propTypes=v({},n.PaginationLink.propTypes&&n.PaginationLink.propTypes);var ot,at=["children"];Object.assign({},null==(ot=n.TabContent.prototype)?void 0:ot.props);var it=function(e){var t=e.children,r=m(e,at);/*#__PURE__*/return o.jsx(n.TabContent,v({},r,{children:t}))};it.propTypes=v({},n.TabContent.propTypes&&n.TabContent.propTypes);var lt,st=["children"];Object.assign({},null==(lt=n.TabPane.prototype)?void 0:lt.props);var ct=function(e){var t=e.children,r=m(e,st);/*#__PURE__*/return o.jsx(n.TabPane,v({},r,{children:t}))};ct.propTypes=v({},n.TabPane.propTypes&&n.TabPane.propTypes);var dt,ut=["children"];Object.assign({},null==(dt=n.UncontrolledAlert.prototype)?void 0:dt.props);var pt=function(e){var t=e.children,r=m(e,ut);/*#__PURE__*/return o.jsx(n.UncontrolledAlert,v({},r,{children:t}))};pt.propTypes=v({},n.UncontrolledAlert.propTypes&&n.UncontrolledAlert.propTypes);var ft,gt=["children"];Object.assign({},null==(ft=n.Alert.prototype)?void 0:ft.props);var vt=function(e){var t=e.children;return m(e,gt),/*#__PURE__*/o.jsx(n.Alert,{children:t})};vt.propTypes=v({},vt.propTypes&&vt.propTypes),exports.AdvancedTable=function(e){var t=e.renderRowSubComponent,n=e.className,r=void 0===n?"-highlight -striped ":n,i=e.handleSearch,l=void 0===i?function(){}:i,s=e.handleFilter,c=void 0===s?function(){}:s,u=e.handlePagination,f=void 0===u?function(){}:u,g=e.filters,h=void 0===g?[]:g,m=e.pagination,y=void 0===m?{currentPage:1,hasNextPage:!0,hasPrevPage:!1,nextPage:2,prevPage:null,size:10,totalPages:2,totalResults:17}:m,x=a.useTable({columns:e.columns,data:e.data,initialState:{pageSize:10,pageIndex:0}},a.useSortBy,a.useExpanded,a.usePagination,a.useResizeColumns,a.useFlexLayout),j=x.getTableProps,b=x.getTableBodyProps,T=x.headerGroups,N=x.page,C=x.prepareRow,S=x.visibleColumns;/*#__PURE__*/return o.jsx(o.Fragment,{children:/*#__PURE__*/o.jsxs("div",{className:"ReactTable "+r,children:[/*#__PURE__*/o.jsx("div",{className:"pagination-top",children:/*#__PURE__*/o.jsx(k,{filters:h,onFilter:function(e){return c(e)},onSearch:function(e){return l(e)}})}),/*#__PURE__*/o.jsxs("table",v({},j(),{className:"rt-table",children:[/*#__PURE__*/o.jsx("thead",{className:"rt-thead -header",children:T.map(function(e){/*#__PURE__*/return o.jsx("tr",v({},e.getHeaderGroupProps(),{className:"rt-tr",children:e.headers.map(function(t,n){/*#__PURE__*/return o.jsxs("th",v({},t.getHeaderProps(t.getSortByToggleProps()),{className:p.default("rt-th rt-resizable-header",{"-cursor-pointer":e.headers.length-1!==n,"-sort-asc":t.isSorted&&!t.isSortedDesc,"-sort-desc":t.isSorted&&t.isSortedDesc}),children:[/*#__PURE__*/o.jsxs("div",{className:"rt-resizable-header-content",children:[t.render("Header"),/*#__PURE__*/o.jsx("div",v({},t.getResizerProps(),{className:p.default("col-resizer",{" active":t.isResizing})}))]}),/*#__PURE__*/o.jsx("div",{children:e.headers.length-1===n?null:t.canFilter?t.render("Filter"):null})]}))})}))})}),/*#__PURE__*/o.jsx("tbody",v({},b(),{className:"rt-tbody",children:N.map(function(e,n){var r;return C(e),/*#__PURE__*/o.jsxs(d.default.Fragment,{children:[/*#__PURE__*/o.jsx("tr",v({},e.getRowProps(),{className:p.default("rt-tr",{" -odd":n%2==0},{" -even":n%2==1}),children:e.cells.map(function(e){/*#__PURE__*/return o.jsx("td",v({},e.getCellProps(),{className:"rt-td",children:e.render("Cell")}))})})),e.isExpanded?/*#__PURE__*/o.jsx("tr",{children:/*#__PURE__*/o.jsx("td",{colSpan:S.length,children:t&&t({row:e})})}):null]},null==(r=e.getRowProps())?void 0:r.key)})}))]})),/*#__PURE__*/o.jsx("div",{className:"pagination-bottom",children:/*#__PURE__*/o.jsx("div",{className:"-pagination",children:/*#__PURE__*/o.jsx("div",{className:"-center flex-nowrap",children:/*#__PURE__*/o.jsx(P,{className:"pagination-bar",pagination:y,currentPage:y.currentPage,totalCount:y.totalResults,pageSize:y.size,onPageChange:function(e){f({page:e})}})})})})]})})},exports.Alert=vt,exports.Button=y,exports.Card=x,exports.CardBody=j,exports.CardFooter=b,exports.CardHeader=T,exports.Dropdown=N,exports.DropdownItem=S,exports.DropdownMenu=je,exports.DropdownToggle=Te,exports.ListBase=Se,exports.ListGroupItem=we,exports.ListGroupItemHeading=Le,exports.ListGroupItemText=De,exports.ListInlineItem=Ae,exports.Nav=Je,exports.NavItem=Ze,exports.NavLink=Xe,exports.Navbar=Me,exports.NavbarBrand=Ge,exports.NavbarText=He,exports.NavbarToggler=_e,exports.Pagination=$e,exports.PaginationItem=tt,exports.PaginationLink=rt,exports.SimpleTable=I,exports.TabContent=it,exports.TabPane=ct,exports.TextEditor=xe,exports.UncontrolledAlert=pt;
//# sourceMappingURL=ims-ui-kit.js.map
