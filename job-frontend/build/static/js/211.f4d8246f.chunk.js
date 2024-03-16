"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[211],{2076:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(5043);const c=(e,t,a)=>{const[c,n]=(0,s.useState)([]),[l,o]=(0,s.useState)([]);return(0,s.useEffect)((()=>{const s=((e,t)=>{const a=[],s=Math.ceil(e.length/t);for(let c=1;c<=s;c++)a.push(c);return a})(e,a);n([...s]);const c=((e,t,a)=>e.slice((t-1)*a,t*a))(e,t,a);o([...c])}),[e,n,t,o,a]),{slice:l,range:c}}},5212:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(5043);const c="TableFooter_tableFooter__I30t8",n="TableFooter_button__wrCJ0",l="TableFooter_activeButton__PX8sM",o="TableFooter_inactiveButton__GJbjO";var r=a(579);const i=e=>{let{range:t,setPage:a,page:i,slice:d}=e;return(0,s.useEffect)((()=>{d.length<1&&1!==i&&a(i-1)}),[d,i,a]),(0,r.jsx)("div",{className:c,children:t.map(((e,t)=>(0,r.jsx)("button",{className:"".concat(n," ").concat(i===e?l:o),onClick:()=>a(e),children:e},t)))})}},211:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(5043),c=a(3519),n=a(1072),l=a(8602),o=a(4196),r=a(6971),i=a(7154),d=a(5212),p=a(2076),h=a(5141),_=a(1427),b=a(2933),A=a(6214),u=a(579);const j=e=>{let{setAction:t,...a}=e;const s=a.applicantItem._id,c=a.token;return(0,u.jsxs)("tr",{className:b.A.row,children:[(0,u.jsx)("td",{children:a.applicantItem.userId.name}),(0,u.jsx)("td",{children:(0,u.jsx)("button",{className:b.A.button,onClick:()=>{i.A.get("".concat(A.U+"provider/applicants/view-resume/"+s),{headers:{Authorization:"Bearer "+c},responseType:"blob"}).then((e=>{const t=new Blob([e.data],{type:"application/pdf"}),a=URL.createObjectURL(t);window.open(a)})).catch((e=>{console.log(e)}))},children:"View Resume"})}),(0,u.jsxs)("td",{className:b.A.actions,children:[(0,u.jsxs)("button",{className:"".concat(b.A.shortlistCandidate," ").concat(b.A.button),onClick:()=>{i.A.patch("".concat(A.U+"provider/applicants/shortlist/"+s),{},{headers:{Authorization:"Bearer "+c}}).then((e=>{t((e=>!e))})).catch((e=>{console.log(e)}))},disabled:"Shortlisted"===a.applicantItem.status,children:[(0,u.jsx)("span",{children:(0,u.jsx)("i",{className:"bi bi-person-check-fill"})}),(0,u.jsx)("span",{children:"Shortlist"})]}),(0,u.jsxs)("button",{className:"".concat(b.A.rejectCandidate," ").concat(b.A.button),onClick:()=>{i.A.patch("".concat(A.U+"provider/applicants/reject/"+s),{},{headers:{Authorization:"Bearer "+c}}).then((e=>{t((e=>!e))})).catch((e=>{console.log(e)}))},children:[(0,u.jsx)("span",{children:(0,u.jsx)("i",{className:"bi bi-person-x-fill"})}),(0,u.jsx)("span",{children:"Reject"})]})]})]})};let m=[];const x=()=>{const[e,t]=(0,s.useState)(1),[a,b]=(0,s.useState)([]),[A,x]=(0,s.useState)(!0),[g,f]=(0,s.useState)(!1),{slice:N,range:v}=(0,p.A)(a,e,5),w=(0,r.g)().jobId,B=localStorage.getItem("token");(0,s.useEffect)((()=>{i.A.get("http://localhost:8080/provider/view-applicants/".concat(w),{headers:{Authorization:"Bearer "+B}}).then((e=>{const t=e.data.applicants;x(!1),m=[...t],b(t)})).catch((e=>{x(!1),console.log(e)}))}),[w,g,B]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.A,{children:(0,u.jsxs)(n.A,{className:_.A.rowStyle,children:[(0,u.jsx)(l.A,{className:"".concat(_.A.manageUsers," col-md-3"),children:(0,u.jsx)("span",{className:_.A.span,children:"Manage Applicants"})}),(0,u.jsx)(l.A,{className:"".concat(_.A.col," col-md-6  "),children:(0,u.jsx)(l.A,{className:"d-flex justify-content-center align-items-center",children:(0,u.jsx)("input",{type:"text",id:"search",placeholder:"Search Applicants",className:_.A.searchBar,onChange:e=>{b(m.filter((t=>t.userId.name.toLowerCase().includes(e.target.value.toLowerCase()))))}})})})]})}),a.length>0&&(0,u.jsxs)(c.A,{children:[(0,u.jsxs)("div",{className:_.A.tableBox,children:[A&&(0,u.jsx)(h.A,{}),(0,u.jsxs)(o.A,{striped:!0,hover:!0,children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{className:_.A.tableHeader,children:[(0,u.jsx)("th",{children:"Job Title"}),(0,u.jsx)("th",{children:"Resume"}),(0,u.jsx)("th",{children:"Actions"})]})}),(0,u.jsx)("tbody",{className:_.A.tableBody,children:N.map((e=>(0,u.jsx)(j,{applicantItem:e,setAction:f,token:B},e._id)))})]})]}),(0,u.jsx)(d.A,{range:v,slice:N,setPage:t,page:e})]}),0===a.length&&(0,u.jsx)("h3",{className:"text-center fw-bold",children:"No Applicant Data!"})]})};function g(){return(0,s.useEffect)((()=>{document.title=A.l.eM}),[]),(0,u.jsx)(x,{})}},4196:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(4600),c=a.n(s),n=a(5043),l=a(7852),o=a(579);const r=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,striped:n,bordered:r,borderless:i,hover:d,size:p,variant:h,responsive:_,...b}=e;const A=(0,l.oU)(a,"table"),u=c()(s,A,h&&"".concat(A,"-").concat(h),p&&"".concat(A,"-").concat(p),n&&"".concat(A,"-striped"),r&&"".concat(A,"-bordered"),i&&"".concat(A,"-borderless"),d&&"".concat(A,"-hover")),j=(0,o.jsx)("table",{...b,className:u,ref:t});if(_){let e="".concat(A,"-responsive");return"string"===typeof _&&(e="".concat(e,"-").concat(_)),(0,o.jsx)("div",{className:e,children:j})}return j}))},2933:(e,t,a)=>{a.d(t,{A:()=>s});const s={row:"ApplicantItem_row__Jp8AB",actions:"ApplicantItem_actions__LgXuh",button:"ApplicantItem_button__m-7BZ",applicants:"ApplicantItem_applicants__cSBfb",shortlisted:"ApplicantItem_shortlisted__N5loK",shortlistCandidate:"ApplicantItem_shortlistCandidate__B+Z3F",rejectCandidate:"ApplicantItem_rejectCandidate__PGnwB"}},1427:(e,t,a)=>{a.d(t,{A:()=>s});const s={rowStyle:"ApplicantTab_rowStyle__3bl+o",manageUsers:"ApplicantTab_manageUsers__PXeBE",col:"ApplicantTab_col__eBJUD",input:"ApplicantTab_input__nuNg0",span:"ApplicantTab_span__x4YCL",addUser:"ApplicantTab_addUser__Tx+sj",button:"ApplicantTab_button__vdoVZ",tableHeader:"ApplicantTab_tableHeader__y1qw3",tableBody:"ApplicantTab_tableBody__nZV4u",tableBox:"ApplicantTab_tableBox__VO4+b"}}}]);
//# sourceMappingURL=211.f4d8246f.chunk.js.map