(this["webpackJsonpbig-form-problem"]=this["webpackJsonpbig-form-problem"]||[]).push([[0],{20:function(e,t,n){e.exports={form:"style_form__233-9",result:"style_result__2tbOj"}},21:function(e,t,n){e.exports={active:"style_active__KygeZ",disabled:"style_disabled__338BG"}},23:function(e,t,n){e.exports={visible:"style_visible__1AQT9",hidden:"style_hidden__3Godo"}},25:function(e,t,n){e.exports={container:"App_container__23Tvh"}},26:function(e,t,n){e.exports={label:"style_label__3WK15"}},27:function(e,t,n){e.exports={validationSummary:"style_validationSummary__1jgZq"}},28:function(e,t,n){e.exports={input:"style_input__2bA1_"}},29:function(e,t,n){e.exports={textarea:"style_textarea__1vwSl"}},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),s=n(24),o=n.n(s),c=(n(35),n(25)),u=n.n(c),l=n(13),d=n(2),h=n(3),p=n.n(h),b=n(4),f=n(6),m=n(7),v=n(10),j=n(9),g=n(20),O=n.n(g),x=n(21),y=n.n(x);function N(e){var t=e.disabled,n=e.children;return Object(r.jsx)("button",{type:"submit",className:t?y.a.disabled:y.a.active,disabled:t,children:n})}var M=n(17),k=n(18),_={sendForm:function(e){return Object(b.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=Object.entries(e).reduce((function(e,t){var n=Object(k.a)(t,2),r=n[0],a=n[1];return a instanceof FileList?Object(M.a)(a).forEach((function(t,n){return e.append("file".concat(n),t)})):e.append(r,a),e}),new FormData),t.next=4,fetch("https://webhook.site/d58c2bb7-5c45-46a5-828d-438c5080249b",{method:"post",body:n});case 4:if(200===t.sent.status){t.next=7;break}return t.abrupt("return",!1);case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",!1);case 13:return t.abrupt("return",!0);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},w={isRequired:null,isNotRequired:""};function V(e){var t=e.object,n=e.indentation;return Object(r.jsx)("div",{children:Object(r.jsx)("pre",{children:JSON.stringify(t,null,n||4)})})}var q=function(e){Object(v.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).submitHandler=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r.setState({submitDisabled:!0});case 3:if(Object.values(r.validators).forEach((function(e){return e()})),0===Object.values(r.form).filter((function(e){return null===e})).length){e.next=8;break}return r.setState({submitDisabled:!1}),e.abrupt("return");case 8:return e.next=10,_.sendForm(r.form);case 10:if(!e.sent){e.next=12;break}r.setState({sentData:!0});case 12:r.setState({submitDisabled:!1});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={sentData:!1,submitDisabled:!1},r.validators={},r.configureChildren(),r}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.form=this.props.children.reduce((function(e,t){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},t.props.name,t.props.required?w.isRequired:w.isNotRequired))}),{})}},{key:"componentDidUpdate",value:function(e,t,n){this.configureChildren()}},{key:"configureChildren",value:function(){var e=this;this.children=this.props.children.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{props:Object(d.a)(Object(d.a)({},t.props),{},{setValue:e.setValueOf(t.props.name),registerValidator:e.registerValidator(t.props.name),unregisterValidator:e.unregisterValidator(t.props.name)})})}))}},{key:"setValueOf",value:function(e){var t=this;return function(n){t.form[e]=n}}},{key:"registerValidator",value:function(e){var t=this;return function(n){return t.validators[e]=n}}},{key:"unregisterValidator",value:function(e){var t=this;return function(){return delete t.validators[e]}}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[this.state.sentData?Object(r.jsxs)("div",{className:O.a.result,children:[Object(r.jsxs)("div",{children:["See results:\xa0",Object(r.jsx)("a",{href:"https://webhook.site/#!/d58c2bb7-5c45-46a5-828d-438c5080249b/2f4aa726-34b1-4b44-90ac-778cc2da4e2f/1",children:"click"})]}),Object(r.jsx)(V,{object:this.form})]}):Object(r.jsx)(r.Fragment,{}),Object(r.jsxs)("form",{className:O.a.form,method:"post",encType:"multipart/form-data",onSubmit:this.submitHandler,children:[this.children,Object(r.jsx)(N,{disabled:this.state.submitDisabled,children:"Submit"})]})]})}}]),n}(a.Component),R="The field",D={shouldMatch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[e.test(t),n||"".concat(r||R," does not match the pattern ").concat(e)]}},isRequired:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.errorMessage,n=e.propName;return function(e){return["undefined"!==typeof e&&""!==e,t||"".concat(n||R," is required")]}}},F="The string",S={hasMaxLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[t.length<=e,n||"".concat(r||F," should be smaller than ").concat(e," chars")]}},hasMinLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[t.length>=e,n||"".concat(r||F," should be more than ").concat(e," chars")]}}},L="The value",C={isLessThan:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[+t<+e,n||"".concat(r||L," should be less than ").concat(e)]}},isGreaterThan:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[+t>+e,n||"".concat(r||L," should be greater than ").concat(e)]}},isBetween:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.errorMessage,a=n.propName;return function(n){return[+n>+e&&+n<+t,r||"".concat(a||L," should be between ").concat(e," and ").concat(t," (not inclusive)")]}},isEven:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.errorMessage,n=e.propName;return function(e){return[+e%2===0,t||"".concat(n||L," should be even")]}}},T=n(22),A=n.n(T),E="Date",B={isInFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[A()(t).isValid(),n||"".concat(r||E,' should be in format "').concat(e,'"')]}},isAfter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[A()(t).isAfter(e),n||"".concat(r||E," should be after ").concat(e)]}}},P=n(5),G="The file",z={areOfType:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.type!==e})).length,n||"".concat(r||G," should be of type ").concat(e)]}},haveSingleSizeLessThan:function(e){return{bytes:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.size>=e})).length,n||"".concat(r||G," should be less than ").concat(e," bytes")]}},kb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.size>=1e3*e})).length,n||"".concat(r||G," should be less than ").concat(e," kb")]}},mb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.size>=1e6*e})).length,n||"".concat(r||G," should be less than ").concat(e," mb")]}}}},nameFollowsPattern:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return!e.test(t.name)})).length,n||"".concat(r||G," name should follow pattern ").concat(e)]}},maxCount:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[Object(P.a)(t).slice(0).length<=e,n||"".concat(r||G," count should be ").concat(e," or less")]}}},H=[{key:"#FF0000",value:"red",textContent:"Red"},{key:"#00FF00",value:"green",textContent:"Green"},{key:"#0000FF",value:"blue",textContent:"Blue"}],J={getAll:function(){return Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.abrupt("return",H);case 3:case"end":return e.stop()}}),e)})))()}},$=n(11),I=n(26),K=n.n(I);function U(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{className:K.a.label,htmlFor:e.for,children:[e.label,e.required?" (required)":"",":"]}),e.children]})}function W(e){function t(t){var n=t.label,a=t.required,i=Object($.a)(t,["label","required"]);return Object(r.jsx)(U,{label:n,required:a,for:i.name,children:Object(r.jsx)(e,Object(d.a)({},i))})}var n=e.displayName||e.name||"Component";return t.displayName="withValidationSummary(".concat(n,")"),t}var Z=n(27),Q=n.n(Z);function X(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{children:e.errorMessages.map((function(e){return Object(r.jsx)("li",{className:Q.a.validationSummary,children:e},e)}))}),e.children]})}function Y(e){var t=function(t){Object(v.a)(a,t);var n=Object(j.a)(a);function a(e){var t,r;return Object(f.a)(this,a),(t=n.call(this,e)).validator=(r=t.props.validations||[],{validate:function(e){return r.map((function(t){return t(e)})).reduce((function(e,t){var n=Object(k.a)(t,2),r=n[0],a=n[1];return r?e:[].concat(Object(M.a)(e),[a])}),[])}}),t.elementRef=i.a.createRef(),t.beginValidating=function(e){t.begunValidation||(t.begunValidation=!0,t.changeHandler(e))},t.changeHandler=function(e){t.begunValidation&&t.validate(e.target)},t.state={errorMessages:[]},t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.registerValidator((function(){return e.validate(e.elementRef.current)}))}},{key:"componentWillUnmount",value:function(){this.props.unregisterValidator()}},{key:"validate",value:function(e){var t=e.files||e.value,n=this.validator.validate(t);this.setState({errorMessages:n,isValid:!!n.length}),this.props.setValue(n.length?null:t)}},{key:"render",value:function(){var t=this.props,n=(t.validations,t.setValue,t.registerValidator,t.unregisterValidator,Object($.a)(t,["validations","setValue","registerValidator","unregisterValidator"]));return Object(r.jsx)(X,{errorMessages:this.state.errorMessages,children:Object(r.jsx)(e,Object(d.a)({ref:this.elementRef,onBlur:this.beginValidating,onChange:this.changeHandler},n))})}}]),a}(a.Component),n=e.displayName||e.name||"Component";return t.displayName="withValidationSummary(".concat(n,")"),t}var ee=n(28),te=n.n(ee),ne=i.a.forwardRef((function(e,t){return Object(r.jsx)("input",Object(d.a)({ref:t,className:te.a.input},e))})),re=n(23),ae=n.n(re),ie=function(e){Object(v.a)(n,e);var t=Object(j.a)(n);function n(e){var r;Object(f.a)(this,n),(r=t.call(this,e)).state={data:null};var a=r.props,i=(a.initiallyEmpty,a.getData),s=a.innerRef,o=Object($.a)(a,["initiallyEmpty","getData","innerRef"]);return r.getData=i,r.selectProps=o,r.innerRef=s,r}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.getData();case 3:e.t1=e.sent,e.t2={data:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return Object(r.jsxs)("div",{children:[this.state.data?"":Object(r.jsx)("div",{children:"Loading..."}),Object(r.jsxs)("select",Object(d.a)(Object(d.a)({ref:this.innerRef,className:this.state.data?ae.a.visible:ae.a.hidden},this.selectProps),{},{hidden:!this.state.data,defaultValue:"",children:[this.props.initiallyEmpty?Object(r.jsx)("option",{hidden:!0,disabled:!0,value:""}):"",null===(e=this.state.data)||void 0===e?void 0:e.map((function(e){var t=e.key,n=e.value,a=e.textContent;return Object(r.jsx)("option",{value:n,children:a||n},t)}))]}))]})}}]),n}(a.Component),se=i.a.forwardRef((function(e,t){return Object(r.jsx)(ie,Object(d.a)({innerRef:t},e))})),oe=n(29),ce=n.n(oe),ue=i.a.forwardRef((function(e,t){return Object(r.jsx)("textarea",Object(d.a)({ref:t,className:ce.a.textarea},e))})),le=W(Y(ne)),de=W(Y(se)),he=W(Y(ue));function pe(){return Object(r.jsxs)("div",{className:u.a.container,children:[Object(r.jsx)("div",{}),Object(r.jsxs)(q,{children:[Object(r.jsx)(le,{name:"first-name",required:!0,label:"First name",validations:[D.isRequired({propName:"First name"}),S.hasMaxLength(64,{propName:"First name"}),S.hasMinLength(2,{propName:"First name"})]}),Object(r.jsx)(le,{name:"last-name",required:!0,label:"Last name",validations:[D.isRequired({propName:"Last name"}),S.hasMaxLength(64,{propName:"Last name"}),S.hasMinLength(2,{propName:"Last name"})]}),Object(r.jsx)(le,{name:"email",type:"email",required:!0,label:"Email",validations:[D.isRequired({propName:"Email"}),D.shouldMatch(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,{errorMessage:"Email is invalid"})]}),Object(r.jsx)(le,{name:"phone",type:"tel",label:"Phone",validations:[D.shouldMatch(/^((\([0-9]{3}\)|[0-9]{3})\s[0-9]{3}[-\s]?[0-9]{4,6}|)$/im,{errorMessage:"Phone number should be in some of the following formats: ".concat("(123) 456-7890, (123) 456 7890, 123 456 7890, 123 456-7890")})]}),Object(r.jsx)(le,{name:"lucky-number",type:"number",step:"2",required:!0,label:"Lucky number",validations:[D.isRequired(),C.isGreaterThan(1),C.isLessThan(10),C.isBetween(1,10),C.isEven()]}),Object(r.jsx)(le,{name:"date",type:"date",required:!0,label:"Date",validations:[D.isRequired(),B.isAfter(new Date)]}),Object(r.jsx)(le,{name:"file",type:"file",label:"File",validations:[z.haveSingleSizeLessThan(500).kb(),z.areOfType("image/jpeg"),z.nameFollowsPattern(/.jpg$/i,{errorMessage:'Filename should end with ".jpg"'}),z.maxCount(2)],multiple:!0}),Object(r.jsx)(de,{name:"rgb-colors",required:!0,label:"RGB Colors",getData:J.getAll,validations:[D.isRequired({propName:"Color"})],initiallyEmpty:!0}),Object(r.jsx)(he,{name:"application-letter",cols:50,required:!0,label:"Application letter",validations:[D.isRequired({propName:"Application letter"}),S.hasMinLength(50,{propName:"Application letter"}),S.hasMaxLength(450,{propName:"Application letter"})]})]}),Object(r.jsx)("div",{})]})}o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(pe,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4fddd5f7.chunk.js.map