"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[136,644],{3263:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(5284),s=a(4282);const o="ReactModal_reactModal__wn3kp",r="ReactModal_submitBtn__QkQjZ";var l=a(579);const c=e=>{let{isDelete:t=!1,formId:a,buttonTitle:c,formModal:i=!1,...d}=e;return(0,l.jsxs)(n.A,{...d,size:t?"md":"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,l.jsx)(n.A.Header,{closeButton:!0,children:(0,l.jsx)(n.A.Title,{id:"contained-modal-title-vcenter",children:d.children.title})}),(0,l.jsx)(n.A.Body,{className:t?"":o,children:d.children.body}),!i&&t&&(0,l.jsxs)(n.A.Footer,{className:"d-flex justify-content-between",children:[(0,l.jsx)(s.A,{variant:"danger",size:"md",onClick:d.onOk,children:"Ok"}),(0,l.jsx)(s.A,{variant:"danger",size:"md",onClick:d.onHide,children:"Close"})]}),i&&(0,l.jsx)(n.A.Footer,{className:"d-flex justify-content-center",children:(0,l.jsx)("button",{className:r,type:"submit",form:a,children:c})})]})}},7903:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(5043);const s="TableFooter_tableFooter__BY7Te",o="TableFooter_button__yIbKx",r="TableFooter_activeButton__jZf9B",l="TableFooter_inactiveButton__JqTMM";var c=a(579);const i=e=>{let{range:t,setPage:a,page:i,slice:d}=e;return(0,n.useEffect)((()=>{d.length<1&&1!==i&&a(i-1)}),[d,i,a]),(0,c.jsx)("div",{className:s,children:t.map(((e,t)=>(0,c.jsx)("button",{className:"".concat(o," ").concat(i===e?r:l),onClick:()=>a(e),children:e},t)))})}},4494:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(5043);const s=(e,t,a)=>{const[s,o]=(0,n.useState)([]),[r,l]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const n=((e,t)=>{const a=[],n=Math.ceil(e.length/t);for(let s=1;s<=n;s++)a.push(s);return a})(e,a);o([...n]);const s=((e,t,a)=>e.slice((t-1)*a,t*a))(e,t,a);l([...s])}),[e,o,t,l,a]),{slice:r,range:s}}},4136:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(5043),s=a(3519),o=a(7154),r=a(9628),l=(a(2342),a(1072)),c=a(8602),i=a(4282),d=a(4196),h=a(7903),j=a(4494),b=a(5141),m=a(6214);const u={rowStyle:"ManageTab_rowStyle__aw5P+",manageUsers:"ManageTab_manageUsers__NxKPm",col:"ManageTab_col__ujkEE",input:"ManageTab_input__7hzNR",span:"ManageTab_span__eY5cK",addUser:"ManageTab_addUser__Uz3BY",button:"ManageTab_button__ckcTw",tableHeader:"ManageTab_tableHeader__UFwrY",tableBody:"ManageTab_tableBody__YuzPm",tableBox:"ManageTab_tableBox__vVO7l"};var x=a(6405),g=a(579);const p=e=>(0,g.jsxs)("tr",{className:x.A.row,children:[(0,g.jsx)("td",{children:e.jobInfo.title}),(0,g.jsx)("td",{children:e.jobInfo.description}),(0,g.jsx)("td",{children:e.jobInfo.startDate}),(0,g.jsx)("td",{children:e.jobInfo.endDate}),(0,g.jsxs)("td",{className:x.A.actions,children:[(0,g.jsxs)("button",{className:"".concat(x.A.edit," ").concat(x.A.button),onClick:()=>{o.A.get("".concat(m.U+"admin/jobs/"+e.jobInfo._id),{headers:{Authorization:"Bearer "+e.token}}).then((t=>{e.onEdit(t.data.job)})).catch((e=>console.log(e)))},children:[(0,g.jsx)("span",{children:(0,g.jsx)("i",{className:"bi bi-pencil-fill"})}),(0,g.jsx)("span",{children:"Edit"})]}),(0,g.jsxs)("button",{className:"".concat(x.A.delete," ").concat(x.A.button),onClick:()=>{e.onDelete(e.jobInfo._id)},children:[(0,g.jsx)("span",{children:(0,g.jsx)("i",{className:"bi bi-trash3-fill"})}),(0,g.jsx)("span",{children:"Delete"})]})]})]}),_=e=>{const[t,a]=(0,n.useState)(1),[r,x]=(0,n.useState)([]),[_,f]=(0,n.useState)([]),[A,v]=(0,n.useState)(!0),{slice:w,range:y}=(0,j.A)(r,t,5),N=localStorage.getItem("token");(0,n.useEffect)((()=>{(async()=>{const e=(await o.A.get("".concat(m.U+"admin/jobs"),{headers:{Authorization:"Bearer "+N}})).data.jobs;v(!1),x(e),f(e)})()}),[e.changes,N]);const D=t=>{e.onEditJob(t)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.A,{children:(0,g.jsxs)(l.A,{className:u.rowStyle,children:[(0,g.jsx)(c.A,{className:"".concat(u.manageUsers," col-md-3"),children:(0,g.jsx)("span",{className:u.span,children:"Manage Jobs"})}),(0,g.jsx)(c.A,{className:"".concat(u.col," col-md-6  "),children:(0,g.jsx)(c.A,{className:"d-flex justify-content-center align-items-center",children:(0,g.jsx)("input",{type:"text",id:"search",placeholder:"Search Jobs",className:u.searchBar,onChange:e=>{x(_.filter((t=>t.title.toLowerCase().includes(e.target.value.toLowerCase()))))}})})}),(0,g.jsx)(c.A,{className:"".concat(u.addUser," col-md-3"),children:(0,g.jsx)(i.A,{variant:"primary",id:"add-new-user",className:u.button,onClick:()=>{e.onShowAddUser({show:!0,edit:!1})},children:"Add New Job"})})]})}),A&&(0,g.jsx)(b.A,{}),r.length>0&&(0,g.jsxs)(s.A,{children:[(0,g.jsx)("div",{className:u.tableBox,children:(0,g.jsxs)(d.A,{striped:!0,hover:!0,children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{className:u.tableHeader,children:[(0,g.jsx)("th",{children:" Job Title"}),(0,g.jsx)("th",{children:"Job Description"}),(0,g.jsx)("th",{children:"Start Date"}),(0,g.jsx)("th",{children:"End Date"}),(0,g.jsx)("th",{children:"Actions"})]})}),(0,g.jsx)("tbody",{className:u.tableBody,children:w.map((t=>(0,g.jsx)(p,{token:N,jobInfo:t,onEdit:D,onDelete:e.onShowDelete},t._id)))})]})}),(0,g.jsx)(h.A,{range:y,slice:w,setPage:a,page:t})]}),0===r.length&&(0,g.jsx)("h3",{className:"text-center fw-bold",children:"No jobs Data!"})]})};var f=a(3263),A=a(3892),v=a(2351);const w=e=>{let{label:t,...a}=e;const[n,s]=(0,A.Mt)(a);return(0,g.jsxs)("div",{className:"mb-2",children:[(0,g.jsxs)("label",{htmlFor:n.name,children:[t,(0,g.jsx)("span",{className:"text-danger",children:"*"})]}),(0,g.jsx)("input",{className:"form-control shadow-none ".concat(s.touched&&s.error&&"is-invalid"," "),...n,...a,autoComplete:"off"}),(0,g.jsx)(A.Kw,{component:"div",name:n.name,style:{color:"red"}})]})},y=e=>{let{label:t,...a}=e;const[n,s]=(0,A.Mt)(a);return(0,g.jsxs)("div",{className:"mb-2",children:[(0,g.jsx)("label",{htmlFor:n.id,children:t}),(0,g.jsx)("select",{className:"form-control  ".concat(s.touched&&s.error&&"is-invalid"," "),...n,...a}),(0,g.jsx)(A.Kw,{name:n.name})]})};var N=a(3033);function D(e){let t={title:"",description:"",startDate:"",endDate:"",category:""};e.jobInfo&&(t={title:e.jobInfo.title,description:e.jobInfo.description,startDate:e.jobInfo.startDate,endDate:e.jobInfo.endDate,category:e.jobInfo.category});const a=N.Ik({title:N.Yj().max(30).required("Required"),description:N.Yj().max(100,"Must be 100 characters or less").required("Required"),startDate:N.p6().required("Required"),endDate:N.p6().required("Required"),category:N.Yj().required("Required")});return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(A.l1,{initialValues:t,validationSchema:a,onSubmit:(t,a)=>{let{setSubmitting:n}=a;const s={...e.jobInfo,...t};e.onAdd(s)},children:e=>(0,g.jsx)(v.A,{onSubmit:e.handleSubmit,id:"manageJob-form",children:(0,g.jsxs)("div",{children:[(0,g.jsx)(w,{label:"Title",name:"title",type:"text"}),(0,g.jsx)(w,{label:"Description ",name:"description",type:"text-area"}),(0,g.jsxs)(y,{label:"Category ",name:"category",children:[(0,g.jsx)("option",{value:"",children:"Select"}),(0,g.jsx)("option",{value:"Software Development",children:"Software Development"}),(0,g.jsx)("option",{value:"HR Department",children:"HR Department"}),(0,g.jsx)("option",{value:"Techincal and Hardware",children:"Techincal and Hardware"}),(0,g.jsx)("option",{value:"Front Desk",children:"Front Desk"})]}),(0,g.jsx)(w,{label:"Start date ",name:"startDate",type:"date"}),(0,g.jsx)(w,{label:"  End date ",name:"endDate",type:"date"})]})})})})}var S=a(3067);let M;function I(){const[e,t]=(0,n.useState)(!1),[a,l]=(0,n.useState)(!1),[c,i]=(0,n.useState)(!1),[d,h]=(0,n.useState)({show:!1,inititalValues:{}}),[j,u]=(0,n.useState)(!1),x=localStorage.getItem("token");return(0,g.jsxs)(g.Fragment,{children:[c&&(0,g.jsx)(s.A,{className:S.A.overlaySpinner,children:(0,g.jsx)(b.A,{})}),(0,g.jsx)(f.default,{show:e,onHide:()=>{t(!1)},formModal:!0,buttonTitle:"Add Job",formId:"manageJob-form",children:{title:"Add new Job",body:(0,g.jsx)(D,{onAdd:e=>{i(!0),o.A.post("".concat(m.U+"admin/add-job"),e,{headers:{Authorization:"Bearer "+x}}).then((e=>{i(!1),l(!a),t(!1),r.oR.success(e.data.message)})).catch((e=>{i(!1),r.oR.error("Oops something went wrong")}))}})}}),(0,g.jsx)(f.default,{show:d.show,onHide:()=>{h((e=>({show:!1,inititalValues:e.inititalValues})))},formModal:!0,buttonTitle:"Edit Job",formId:"manageJob-form",children:{title:"Edit the Job",body:(0,g.jsx)(D,{jobInfo:d.inititalValues,onAdd:e=>{const t=e._id,n={title:e.title,description:e.description,category:e.category,startDate:e.startDate,endDate:e.endDate};i(!0),o.A.put("".concat(m.U+"admin/edit-job/"+t),n,{headers:{Authorization:"Bearer "+x}}).then((e=>{h((e=>({show:!1,inititalValues:e.inititalValues}))),i(!1),l(!a),r.oR.success(e.data.message)})).catch((e=>{i(!1),r.oR.error("Oops something went wrong")}))}})}}),(0,g.jsx)(f.default,{show:j,isDelete:!0,onOk:()=>{u(!1),i(!0),o.A.delete("".concat(m.U+"admin/jobs/"+M),{headers:{Authorization:"Bearer "+x}}).then((e=>{l(!a),i(!1),r.oR.success(e.data.message)})).catch((e=>{i(!1),r.oR.error("Oops something went wrong")}))},onHide:()=>{u(!1)},children:{title:"Delete Job",body:(0,g.jsx)("h1",{children:"Are you sure?"})}}),(0,g.jsx)(_,{onShowAddUser:t,onEditJob:e=>{h({show:!0,inititalValues:e})},onShowDelete:e=>{M=e,u(!0)},changes:a}),(0,g.jsx)(r.N9,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}const T=()=>((0,n.useEffect)((()=>{document.title=m.l.vE}),[]),(0,g.jsx)(n.Fragment,{children:(0,g.jsx)(I,{})}))},4196:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(4600),s=a.n(n),o=a(5043),r=a(7852),l=a(579);const c=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,striped:o,bordered:c,borderless:i,hover:d,size:h,variant:j,responsive:b,...m}=e;const u=(0,r.oU)(a,"table"),x=s()(n,u,j&&"".concat(u,"-").concat(j),h&&"".concat(u,"-").concat(h),o&&"".concat(u,"-striped"),c&&"".concat(u,"-bordered"),i&&"".concat(u,"-borderless"),d&&"".concat(u,"-hover")),g=(0,l.jsx)("table",{...m,className:x,ref:t});if(b){let e="".concat(u,"-responsive");return"string"===typeof b&&(e="".concat(e,"-").concat(b)),(0,l.jsx)("div",{className:e,children:g})}return g}))},6405:(e,t,a)=>{a.d(t,{A:()=>n});const n={row:"ManageUserItem_row__J7ps4",actions:"ManageUserItem_actions__DaBJB",button:"ManageUserItem_button__amJ5Z",edit:"ManageUserItem_edit__EmEF-",delete:"ManageUserItem_delete__bo+Qz"}},3067:(e,t,a)=>{a.d(t,{A:()=>n});const n={overlaySpinner:"ManageUsersPage_overlaySpinner__vBCZZ"}}}]);
//# sourceMappingURL=136.66df3cc1.chunk.js.map