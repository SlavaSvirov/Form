(this["webpackJsonpmy-form"]=this["webpackJsonpmy-form"]||[]).push([[0],{14:function(e,a,s){e.exports={form:"styles_form__6oprg",formGroup:"styles_formGroup__iQhBi",x:"styles_x__1PLwl",labelName:"styles_labelName__r07mx",formControl:"styles_formControl__17cvb",genderDescription:"styles_genderDescription__2NQAn",radioWrapper:"styles_radioWrapper__3s8cH",gender:"styles_gender__15cle",button:"styles_button__1JLPg"}},33:function(e,a,s){e.exports={form:"styles_form__1XvR3",formGroup:"styles_formGroup__1GYj5",labelName:"styles_labelName__3kvG6",formControl:"styles_formControl__OMtbC",genderDescription:"styles_genderDescription__2pUe0",gender:"styles_gender__1uqVx"}},60:function(e,a,s){},61:function(e,a,s){},66:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),l=s(28),r=s.n(l),c=(s(60),s(61),s(62),s(23)),o=s(38),i=s(39),m=s(55),j=s(51),d=s(68),p=s(50),b=s(4),h=s.n(b),u=s(7),_=s.n(u),g=s.p+"static/media/entry.b057ede7.png",x=s(2),O=function(e){Object(m.a)(s,e);var a=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={email:"",password:""},e.handleUserInput=function(a){var s=a.target.name,t=a.target.value;e.setState(Object(c.a)({},s,t))},e.handleClick=function(){console.log(e.state.email),console.log(e.state.password)},e.handleReset=function(){e.setState({email:"",password:""})},e}return Object(i.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("form",{action:"#",method:"get",className:_.a.form,children:[Object(x.jsx)("h2",{children:"Sign In"}),Object(x.jsxs)("div",{className:_.a.imgContainer,children:[Object(x.jsx)("img",{className:_.a.image,src:g,alt:"entry"}),Object(x.jsx)("img",{className:_.a.image,src:g,alt:"entry"}),Object(x.jsx)("img",{className:_.a.image,src:g,alt:"entry"}),Object(x.jsx)("img",{className:_.a.image,src:g,alt:"entry"}),Object(x.jsx)("img",{className:_.a.image,src:g,alt:"entry"})]}),Object(x.jsx)("div",{className:_.a.formGroup,children:Object(x.jsxs)("label",{className:_.a.labelName,children:["E-mail",Object(x.jsxs)("p",{className:_.a.inputWrapper,children:[Object(x.jsx)("i",{className:h()(_.a.icon,"fas fa-user")}),Object(x.jsx)(d.a,{placeholder:"example@yandex.ru",className:_.a.formControl,name:"email",value:this.state.email,onChange:this.handleUserInput,autoComplete:"off"})]})]})}),Object(x.jsx)("div",{className:_.a.formGroup,children:Object(x.jsxs)("label",{className:_.a.labelName,children:["Password",Object(x.jsxs)("p",{className:_.a.inputWrapper,children:[Object(x.jsx)("i",{className:h()(_.a.icon,"fas fa-key")}),Object(x.jsx)(d.a,{className:_.a.formControl,type:"password",name:"password",value:this.state.password,onChange:this.handleUserInput})]})]})}),Object(x.jsxs)("div",{className:_.a.logginBtn,children:[Object(x.jsx)(p.a,{className:_.a.button,onClick:this.handleClick,children:"Sign in"}),Object(x.jsx)(p.a,{className:_.a.button,onClick:this.handleReset,children:"Reset"})]})]})}}]),s}(t.Component),f=s(36),N=s(52),y=s(33),v=s.n(y),C=function(e){var a=e.onChange,s=e.type,t=void 0===s?"text":s,n=e.name,l=e.placeholder,r=e.value;return Object(x.jsxs)("label",{className:v.a.labelName,children:["date"===n&&"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",Object(x.jsx)("p",{className:v.a.inputWrapper,children:Object(x.jsx)(d.a,{className:v.a.formControl,placeholder:l,type:t,name:n,onChange:a,value:r,required:!0})})]})},G=s(14),k=s.n(G),w=function(){var e=n.a.useState({}),a=Object(N.a)(e,2),s=a[0],t=a[1],l=function(e){var a=e.target,n=a.value,l=a.name;t(Object(f.a)(Object(f.a)({},s),{},Object(c.a)({},l,n)))};return Object(x.jsxs)("form",{className:k.a.form,method:"get",onSubmit:function(e){t({}),e.preventDefault()},children:[Object(x.jsx)("h2",{children:"Application"}),Object(x.jsxs)("div",{className:k.a.formGroup,children:[Object(x.jsx)(C,{onChange:l,placeholder:"Nickname",name:"nickName",value:s.nickName}),Object(x.jsx)(C,{onChange:l,placeholder:"First Name",name:"firstName",value:s.firstName}),Object(x.jsx)(C,{onChange:l,placeholder:"Last Name",name:"lastName",value:s.lastName}),Object(x.jsxs)("label",{className:k.a.labelName,children:["\u0414\u0430\u0442\u0430 \u0420\u043e\u0436\u0434\u0435\u043d\u0438\u044f",Object(x.jsx)("p",{className:k.a.inputWrapper,children:Object(x.jsx)(d.a,{className:k.a.formControl,placeholder:"",type:"date",name:"date",onChange:l,value:s.date,required:!0})})]})]}),Object(x.jsxs)("div",{className:h()(k.a.formGroup,k.a.x),children:[Object(x.jsx)("div",{className:k.a.genderDescription,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b"}),Object(x.jsxs)("div",{className:k.a.radioWrapper,children:[Object(x.jsxs)("label",{className:k.a.gender,children:["\u041c\u0443\u0436\u0441\u043a\u043e\u0439",Object(x.jsx)(d.a,{name:"gender",type:"radio",checked:"male"===s.gender,value:"male",onChange:l})]}),Object(x.jsxs)("label",{className:k.a.gender,children:["\u0416\u0435\u043d\u0441\u043a\u0438\u0439",Object(x.jsx)(d.a,{name:"gender",type:"radio",checked:"female"===s.gender,value:"female",onChange:l})]})]})]}),Object(x.jsx)(p.a,{className:k.a.button,htmlType:"submit",type:"primary",children:"Submit"})]})};var W=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"App-header",children:Object(x.jsxs)("div",{className:"header-wrapper",children:[Object(x.jsx)("span",{className:"logo",children:"f"}),Object(x.jsx)("span",{className:"logo",children:"o"}),Object(x.jsx)("span",{className:"logo",children:"r"}),Object(x.jsx)("span",{className:"logo",children:"m"})]})}),Object(x.jsx)(O,{}),Object(x.jsx)(w,{})]})})};r.a.render(Object(x.jsx)(W,{}),document.getElementById("root"))},7:function(e,a,s){e.exports={form:"styles_form__1ToMG",imgContainer:"styles_imgContainer__1_zdh",image:"styles_image__IGhAa",formGroup:"styles_formGroup__2_-Um",formControl:"styles_formControl__1x_Gu",inputWrapper:"styles_inputWrapper__3_cOq",icon:"styles_icon__3hI1W",labelName:"styles_labelName__3FCFz",logginBtn:"styles_logginBtn__XuMSp",button:"styles_button__2ruDP"}}},[[66,1,2]]]);
//# sourceMappingURL=main.9aabfd81.chunk.js.map