"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[867],{5866:(e,a,s)=>{s.d(a,{A:()=>o});var t=s(768),r=s(6267),n=s(579);const o=e=>{let a=(0,r.A)(e.jobInfo.createdAt),s=(0,r.A)(e.jobInfo.updatedAt);return(0,n.jsxs)("tr",{className:t.A.row,children:[(0,n.jsx)("td",{children:e.jobInfo.title}),(0,n.jsx)("td",{children:e.jobInfo.category}),(0,n.jsx)("td",{children:a}),(0,n.jsx)("td",{children:s})]})}},5867:(e,a,s)=>{s.r(a),s.d(a,{default:()=>I});var t=s(5043);const r="ProviderCard_card__PsCJh",n="ProviderCard_logo-line__P-YQp",o="ProviderCard_logo__AqDQS",c="ProviderCard_card-heading__1bDwv",d="ProviderCard_heading__9Rtl7",i="ProviderCard_caption__VHm7f";var l=s(579);const h=e=>{let{color:a,...s}=e,t={backgroundColor:a};return(0,l.jsxs)("div",{className:r,children:[(0,l.jsxs)("div",{className:n,children:[(0,l.jsx)("div",{className:o,style:t,children:(0,l.jsx)("span",{children:s.logo})}),(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("span",{className:d,children:s.heading}),(0,l.jsx)("h4",{children:s.statistics})]})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:i,children:(0,l.jsx)("p",{children:s.caption})})]})};var j=s(3519),_=s(1072),x=s(8602),b=s(9895);const m=e=>{let{stats:a,...s}=e;return(0,l.jsx)(j.A,{children:(0,l.jsxs)(_.A,{className:b.A.row,children:[(0,l.jsx)(x.A,{children:(0,l.jsx)(h,{logo:(0,l.jsx)("i",{className:"bi bi-briefcase-fill"}),heading:"Total Jobs",statistics:a.jobsCount,caption:""})}),(0,l.jsx)(x.A,{children:(0,l.jsx)(h,{color:"#ff1a1a",logo:(0,l.jsx)("i",{className:"bi bi-file-earmark-person-fill"}),heading:"Total Applicants",statistics:a.applicantsCount,caption:""})})]})})},p="Table_rowStyle__R9rMI",g="Table_span__oaCZO",A="Table_button__ZDo4s",u="Table_tableHeader__jEA7T",v="Table_tableBox__zRUu+";var f=s(5866),C=s(6971),N=s(4282),w=s(4196);const P=e=>{const a=(0,C.Zp)();return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsxs)(_.A,{className:p,children:[(0,l.jsx)(x.A,{children:(0,l.jsx)("span",{className:"".concat(g," float-start"),children:"Recent Jobs"})}),(0,l.jsx)(x.A,{children:(0,l.jsx)(N.A,{className:"".concat(A," float-end"),onClick:()=>{a("/manage-jobs")},children:"View All"})})]}),(0,l.jsxs)("div",{className:v,children:[(0,l.jsxs)(w.A,{striped:!0,hover:!0,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{className:u,children:[(0,l.jsx)("th",{children:"Title"}),(0,l.jsx)("th",{children:"Category"}),(0,l.jsx)("th",{children:"First Created"}),(0,l.jsx)("th",{children:"Last Modified"})]})}),(0,l.jsx)("tbody",{children:e.jobData.map((e=>(0,l.jsx)(f.A,{jobInfo:e},e._id)))})]}),0===e.jobData.length&&(0,l.jsx)("p",{className:"text-center fw-bold",children:"No jobs data!"})]})]})};var T=s(6214),k=s(7154),y=s(5141);function I(){const[e,a]=(0,t.useState)([]),[s,r]=(0,t.useState)({jobsCount:0,applicantsCount:0}),[n,o]=(0,t.useState)(!1),c=localStorage.getItem("token");return(0,t.useEffect)((()=>{o(!0),k.A.get("".concat(T.U+"provider/dashboard-stats"),{headers:{Authorization:"Bearer "+c}}).then((e=>{o(!1),r(e.data.stats)})).catch((e=>{o(!1),console.log(e)})),k.A.get("".concat(T.U+"provider/dashboard-recents"),{headers:{Authorization:"Bearer "+c}}).then((e=>{o(!1),a(e.data.recentJobs)})).catch((e=>{o(!1),console.log(e)})),document.title=T.l.$Q}),[c]),(0,l.jsxs)("div",{children:[(0,l.jsx)(m,{stats:s}),n&&(0,l.jsx)(y.A,{}),!n&&(0,l.jsx)(P,{jobData:e})]})}},6267:(e,a,s)=>{s.d(a,{A:()=>t});const t=e=>new Date(e).toLocaleString("en-gb",{day:"numeric",month:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},4196:(e,a,s)=>{s.d(a,{A:()=>d});var t=s(4600),r=s.n(t),n=s(5043),o=s(7852),c=s(579);const d=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,striped:n,bordered:d,borderless:i,hover:l,size:h,variant:j,responsive:_,...x}=e;const b=(0,o.oU)(s,"table"),m=r()(t,b,j&&"".concat(b,"-").concat(j),h&&"".concat(b,"-").concat(h),n&&"".concat(b,"-striped"),d&&"".concat(b,"-bordered"),i&&"".concat(b,"-borderless"),l&&"".concat(b,"-hover")),p=(0,c.jsx)("table",{...x,className:m,ref:a});if(_){let e="".concat(b,"-responsive");return"string"===typeof _&&(e="".concat(e,"-").concat(_)),(0,c.jsx)("div",{className:e,children:p})}return p}))},9895:(e,a,s)=>{s.d(a,{A:()=>t});const t={card:"AdminCard_card__+rqiH","logo-line":"AdminCard_logo-line__sZwFV",logo:"AdminCard_logo__RbENW","card-heading":"AdminCard_card-heading__ibzno",heading:"AdminCard_heading__KL5hG",caption:"AdminCard_caption__4pYKv"}},768:(e,a,s)=>{s.d(a,{A:()=>t});const t={row:"UserItem_row__BCemE"}}}]);
//# sourceMappingURL=867.567363f4.chunk.js.map