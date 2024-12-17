"use strict";(self.webpackChunkorder_frontend=self.webpackChunkorder_frontend||[]).push([[200],{3886:(e,t,a)=>{a.d(t,{A:()=>l});var o=a(6825),n=a(7261),r=a(579);const l=e=>{const{title:t,onBack:a,rightContent:l,bgc:s}=e;return(0,r.jsxs)(n.st,{w:"100%",h:"56px",m:"0",p:"10px 20px",bg:s,children:[(0,r.jsxs)(n.st,{m:"auto 0",gap:"10px",children:[(0,r.jsx)(o.Z,{size:24,color:"#fff",onClick:a}),(0,r.jsx)(n.D7,{fs:"18px",lh:"24px",fw:"600",ff:"Inter",c:"#fff",mb:"auto",children:t})]}),l]})}},3779:(e,t,a)=>{a.d(t,{x:()=>o});const o={PENDING:"orange",PACKED:"purple",SENT:"blue",DONE:"green",CANCELLED:"red"}},5819:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var o=a(5043),n=a(5720),r=a(6953),l=a(3072),s=a(2148),i=a(3886),p=a(7261),c=a(3779),d=a(7764),m=a(2249),u=a(7015),x=a(6841),h=a(8876),g=a(3216),y=a(9748),b=a(2019),f=a(5672),$=a(6603),j=a(4015);var C=a(579);const A=e=>{const{open:t,onClose:a}=e,[r,l]=(0,o.useState)(!1),[i]=y.A.useForm(),p=()=>{i.resetFields(),a()};return(0,C.jsx)(f.A,{title:"Add Contact",footer:null,loading:r,open:t,onCancel:p,styles:{content:{padding:"10px"}},style:{top:"50px"},children:(0,C.jsxs)(y.A,{form:i,labelCol:{xs:{span:10},sm:{span:8}},wrapperCol:{xs:{span:14},sm:{span:16}},initialValues:{salutation:"Mr."},layout:"horizontal",size:"middle",style:{maxWidth:600,margin:"20px 0 10px"},onFinish:async e=>{l(!0);const t={primaryName:e.primaryName,salutation:e.salutation,displayName:e.displayName};e.companyName&&(t.companyName=e.companyName),e.email&&(t.email=e.email),e.phone&&(t.phone=e.phone);try{await(e=>{const t=`${s.H$}/contact/add-contact`;return(0,s.Em)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})})(t),b.Ay.success("Contact added successfully"),p()}catch(a){(0,s.ok)(a)}finally{l(!1)}},children:[(0,C.jsx)(y.A.Item,{name:"primaryName",label:"Name",wrapperCol:{span:24},style:{textAlign:"right"},rules:[{required:!0,message:"Name is required"}],getValueProps:e=>({value:e&&e.toUpperCase()}),children:(0,C.jsx)(n.A,{placeholder:"Name",type:"text",style:{marginBottom:0}})}),(0,C.jsx)(y.A.Item,{name:"salutation",label:"Salutation",children:(0,C.jsxs)($.Ay.Group,{children:[(0,C.jsx)($.Ay.Button,{value:"Mr.",children:"Mr."}),(0,C.jsx)($.Ay.Button,{value:"Mrs.",children:"Mrs."})]})}),(0,C.jsx)(y.A.Item,{name:"companyName",label:"Company Name",wrapperCol:{span:24},style:{textAlign:"right"},getValueProps:e=>({value:e&&e.toUpperCase()}),children:(0,C.jsx)(n.A,{placeholder:"Company Name",type:"text",style:{marginBottom:0}})}),(0,C.jsx)(y.A.Item,{name:"displayName",label:"Display Name",wrapperCol:{span:24},style:{textAlign:"right"},rules:[{required:!0,message:"Display Name is required"}],getValueProps:e=>({value:e&&e.toUpperCase()}),children:(0,C.jsx)(n.A,{placeholder:"Display Name",type:"text",style:{marginBottom:0}})}),(0,C.jsx)(y.A.Item,{name:"email",label:"Email",wrapperCol:{span:24},style:{textAlign:"right"},children:(0,C.jsx)(n.A,{placeholder:"Email",type:"text",style:{marginBottom:0}})}),(0,C.jsx)(y.A.Item,{name:"phone",label:"Phone Number",wrapperCol:{span:24},style:{textAlign:"right"},children:(0,C.jsx)(n.A,{placeholder:"Phone Number",type:"number",style:{marginBottom:0}})}),(0,C.jsx)("div",{style:{textAlign:"right"},children:(0,C.jsx)(j.Ay,{type:"primary",htmlType:"submit",children:"Submit"})})]})})};var v=a(3530),w=a(446),N=a.n(w);const E=e=>{const{open:t,onClose:a,contact:n}=e,[r,l]=(0,o.useState)(null),[s,i]=(0,o.useState)(null),[c,d]=(0,o.useState)([]),[u,x]=(0,o.useState)([]),[h,g]=(0,o.useState)(!1),[y,b]=(0,o.useState)(null),[j,A]=(0,o.useState)();return(0,o.useEffect)((()=>{const{date:e,items:t,saleType:a,contactId:o,agentId:r,containers:s}=n||{};d(t||[]),x(s||[]),b(N()(e)),A(a),l(o),i(r)}),[n]),(0,C.jsx)(f.A,{title:"Edit Sale",footer:null,loading:h,open:t,onCancel:a,styles:{content:{padding:"10px"}},style:{maxWidth:"fit-content",top:"50px"},width:"fit-content",children:(0,C.jsxs)(p.u1,{gap:"15px",children:[(0,C.jsx)(v.A,{value:y,style:{alignSelf:"end",marginTop:"10px"},format:"DD/MM/YYYY",onChange:(e,t)=>b(N()(t,"DD/MM/YYYY"))}),(0,C.jsxs)(p.st,{m:"0",children:[(0,C.jsx)(p.D7,{m:"auto 20px auto 0",fs:"14px",ff:"Inter",children:"Sale Type : "}),(0,C.jsx)($.Ay.Group,{options:[{label:"Local",value:"local"},{label:"InterState",value:"interState"}],value:j,optionType:"button",onChange:e=>A(e.target.value)})]}),(0,C.jsx)(m.v,{c:"#fff",w:"80px",h:"42px",type:"primary",onClick:async()=>{},style:{alignSelf:"center"},children:"Save"})]})})},S=(p.D7,c.x.PENDING,p.D7,c.x.PACKED,p.D7,c.x.SENT,p.D7,c.x.DONE,p.D7,c.x.CANCELLED,()=>{const e=(0,g.Zp)(),[t,a]=(0,o.useState)(!1),[c,y]=(0,o.useState)(!1),[b,f]=(0,o.useState)(null),[$,j]=(0,o.useState)([]),[v,w]=(0,o.useState)(""),N=[{title:"Name",dataIndex:"displayName",filteredValue:[v||""],onFilter:(e,t)=>{var a,o;return null===(a=t.displayName)||void 0===a||null===(o=a.toLowerCase())||void 0===o?void 0:o.includes((null===e||void 0===e?void 0:e.toLowerCase())||"")}}],S=()=>(0,C.jsx)(p.st,{m:"0",gap:"20px",children:(0,C.jsx)(m.O,{h:"32px",shape:"circle",icon:(0,C.jsx)(u.F,{size:18,color:"#6a8099",weight:"bold"}),onClick:()=>a(!0),style:{margin:"auto"}})});return(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,d.b6)();200==e.status&&j(e.data)}catch(e){(0,s.ok)(e)}})()}),[]),(0,C.jsxs)(p.u1,{ai:"center",minH:"100vh",maxW:"500px",w:"100%",bgc:"#fff",style:{position:"relative"},children:[(0,C.jsx)(i.A,{title:"Contacts",bgc:"#6a8099",onBack:()=>e(-1),rightContent:(0,s.x8)("EDIT_SALE_ORDER")?(0,C.jsx)(S,{}):null}),(0,C.jsxs)(p.u1,{m:"0",w:"100%",p:"20px",gap:"20px",children:[(0,C.jsxs)(p.st,{w:"100%",m:"0",gap:"20px",children:[(0,C.jsx)(n.A,{value:v,size:"large",placeholder:"Search Contact Name",prefix:(0,C.jsx)(x.K,{size:18,color:"#00000050"}),onChange:e=>{w(e.target.value)},style:{minWidth:"40%",width:"100%"}}),(0,C.jsx)(h.P,{size:28,weight:"bold",color:"#00000070",onClick:()=>{w("")},style:{margin:"auto"}})]}),(0,C.jsx)(r.A,{style:{width:"100%"},size:"middle",pagination:{position:["none","bottomCenter"],pageSize:15},columns:N,dataSource:$||[],expandable:{expandIcon:()=>null,expandIconColumnIndex:-1,expandRowByClick:!0,expandedRowRender:e=>(0,C.jsx)(p.jx,{id:"1234",w:"100%",children:(0,C.jsx)(l.A,{title:"",size:"small",style:{marginBottom:"10px"},layout:"vertical",bordered:!0,column:{xs:2},items:[{key:"1",label:"Name",children:e.primaryName},{key:"2",label:"Phone",children:e.phone},{key:"3",label:"Email",children:e.email}]})})},rowKey:(e,t)=>t})]}),(0,C.jsx)(A,{open:t,onClose:()=>a(!1)}),(0,C.jsx)(E,{open:c,onClose:()=>y(!1),contact:b})]})})},2249:(e,t,a)=>{a.d(t,{O:()=>l,v:()=>r});var o=a(4015),n=a(5464);const r=(0,n.Ay)(o.Ay)`
  background: ${e=>e.isActive?e.activeBgc||"":e.bgc||""} !important;
  width: ${e=>e.isActive?e.activeW||"":e.w||""};
  display: ${e=>e.d||""};
  height: ${e=>e.h||""};
  font-size: ${e=>e.fs||"16px"};
  font-weight: ${e=>e.fw||"500"};
  font-family: ${e=>e.ff};
  margin: ${e=>e.m||""};
  margin-right: ${e=>e.mr||""};
  padding: ${e=>e.p||""};
  border: ${e=>e.b||"1px solid rgba(217, 217, 217, 1)"} !important;
  border-radius: ${e=>e.br||"45px"};
  color: ${e=>e.isActive?e.activeC||"rgba(255, 255, 255, 1)":e.c||"rgba(48, 48, 48, 1)"} !important;
  margin-bottom: ${e=>e.mb||""};
  margin-top: ${e=>e.mt||""};
  ${e=>e.bottom&&`bottom: ${e.bottom};`}
  &:focus {
    background: ${e=>e.focusbgc||""} !important;
    border: ${e=>e.b||""} !important;
  }
  &:disabled {
    background: grey !important;
    color: #ccc !important;
    cursor: not-allowed !important;
    border: none !important;
  }
`,l=(0,n.Ay)(o.Ay)`
  background: ${e=>e.bgc||"#FFF"} !important;
  width: ${e=>e.w||""};
  display: ${e=>e.d||""};
  height: ${e=>e.h||"46px"};
  font-size: ${e=>e.fs||"16px"};
  font-weight: ${e=>e.fw||"500"};
  font-family: ${e=>e.ff};
  margin: ${e=>e.m||""};
  margin-right: ${e=>e.mr||""};
  padding: ${e=>e.p||""};
  border: ${e=>e.b||""} !important;
  border-radius: ${e=>e.br||"10px"};
  color: ${e=>e.c||"#3465FF"} !important;
  margin-bottom: ${e=>e.mb||""};
  margin-top: ${e=>e.mt||""};
  ${e=>e.bottom&&`bottom: ${e.bottom};`}

  &:hover {
    background: ${e=>e.hoverbgc?e.hoverbgc:e.bgc||""} !important;
    border: ${e=>e.b||"0px"} !important;
    color: ${e=>e.c||"#3465FF"} !important;
  }
  &:focus {
    background: ${e=>e.focusbgc||""} !important;
    border: ${e=>e.b||""} !important;
    color: ${e=>e.c||"#3465FF"} !important;
  }
  &:disabled {
    background: grey !important;
    color: #ccc !important;
    cursor: not-allowed !important;
    border: none !important;
  }
`},7764:(e,t,a)=>{a.d(t,{B9:()=>n,b6:()=>r,cg:()=>l,l8:()=>s,mr:()=>p,nP:()=>i});var o=a(2148);const n=e=>{const t=`${o.H$}/saleOrder/list-all`;return(0,o.Em)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})},r=()=>{const e=`${o.H$}/contact/list-all`;return(0,o.Em)({url:e,method:"get",headers:{"Content-Type":"application/json"}})},l=()=>{const e=`${o.H$}/item/list-all`;return(0,o.Em)({url:e,method:"get",headers:{"Content-Type":"application/json"}})},s=e=>{const t=`${o.H$}/saleOrder/add-sale-order`;return(0,o.Em)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})},i=(e,t)=>{const a=`${o.H$}/saleOrder/update-sale-order/${e}`;return(0,o.Em)({url:a,method:"post",data:t,headers:{"Content-Type":"application/json"}})},p=(e,t)=>{const a=`${o.H$}/saleOrder/update-sale-order-status/${e}`;return(0,o.Em)({url:a,method:"post",data:t,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=200.ae375a01.chunk.js.map