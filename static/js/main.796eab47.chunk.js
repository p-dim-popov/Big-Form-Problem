(this["webpackJsonpbig-form-problem"]=this["webpackJsonpbig-form-problem"]||[]).push([[0],{21:function(e,t,n){e.exports={form:"style_form__233-9",result:"style_result__2tbOj"}},22:function(e,t,n){e.exports={active:"style_active__KygeZ",disabled:"style_disabled__338BG"}},24:function(e,t,n){e.exports={visible:"style_visible__1AQT9",hidden:"style_hidden__3Godo"}},26:function(e,t,n){e.exports={container:"App_container__23Tvh"}},28:function(e,t,n){e.exports={label:"style_label__3WK15"}},29:function(e,t,n){e.exports={validationSummary:"style_validationSummary__1jgZq"}},30:function(e,t,n){e.exports={input:"style_input__2bA1_"}},31:function(e,t,n){e.exports={textarea:"style_textarea__1vwSl"}},37:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),s=n(25),o=n.n(s),c=(n(37),n(26)),l=n.n(c),u=n(2),d=n(3),b=n.n(d),p=n(27),f=n(6),h=n(12),m=n(13),v=n(19),j=n(17),g=n(21),O=n.n(g),x=n(22),y=n.n(x);function N(e){var t=e.disabled,n=e.children;return Object(r.jsx)("button",{type:"submit",className:t?y.a.disabled:y.a.active,disabled:t,children:n})}var k=n(18),M=n(7),_={sendForm:function(e){return Object(f.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=Object.entries(e).reduce((function(e,t){var n=Object(M.a)(t,2),r=n[0],a=n[1];return a instanceof FileList?Object(k.a)(a).forEach((function(t,n){return e.append("file".concat(n),t)})):e.append(r,a),e}),new FormData),t.next=4,fetch("https://webhook.site/d58c2bb7-5c45-46a5-828d-438c5080249b",{method:"post",body:n});case 4:if(200===t.sent.status){t.next=7;break}return t.abrupt("return",!1);case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",!1);case 13:return t.abrupt("return",!0);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()}};function V(e){var t=e.object,n=e.indentation;return Object(r.jsx)("div",{children:Object(r.jsx)("pre",{children:JSON.stringify(t,null,n||4)})})}var w=function(e){Object(v.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).setValueOf=function(e){return function(t){return r.form[e]=t}},r.registerValidator=function(e){return function(t){return r.validators[e]=t}},r.unregisterValidator=function(e){return function(){return delete r.validators[e]}},r.submitHandler=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,a,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r.setState({submitDisabled:!0});case 3:n=!1,a=Object(p.a)(r.children.map((function(e){return e.props.name}))),e.prev=5,a.s();case 7:if((i=a.n()).done){e.next=16;break}if(s=i.value,!r.validators.hasOwnProperty(s)){e.next=14;break}if(r.validators[s](),r.form.hasOwnProperty(s)&&null!==r.form[s]){e.next=14;break}return n=!0,e.abrupt("break",16);case 14:e.next=7;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),a.e(e.t0);case 21:return e.prev=21,a.f(),e.finish(21);case 24:if(!n){e.next=27;break}return r.setState({submitDisabled:!1}),e.abrupt("return");case 27:return e.next=29,_.sendForm(r.form);case 29:if(!e.sent){e.next=31;break}r.setState({sentData:!0});case 31:r.setState({submitDisabled:!1});case 32:case"end":return e.stop()}}),e,null,[[5,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),r.state={sentData:!1,submitDisabled:!1},r.form={},r.validators={},r.configureChildren(),r}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){this.configureChildren()}},{key:"configureChildren",value:function(){var e=this;this.children=this.props.children.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{props:Object(u.a)(Object(u.a)({},t.props),{},{setValue:e.setValueOf(t.props.name),registerValidator:e.registerValidator(t.props.name),unregisterValidator:e.unregisterValidator(t.props.name)})})}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[this.state.sentData?Object(r.jsxs)("div",{className:O.a.result,children:[Object(r.jsxs)("div",{children:["See results:\xa0",Object(r.jsx)("a",{href:"https://webhook.site/#!/d58c2bb7-5c45-46a5-828d-438c5080249b/2f4aa726-34b1-4b44-90ac-778cc2da4e2f/1",children:"click"})]}),Object(r.jsx)(V,{object:this.form})]}):Object(r.jsx)(r.Fragment,{}),Object(r.jsxs)("form",{className:O.a.form,method:"post",encType:"multipart/form-data",onSubmit:this.submitHandler,children:[this.children,Object(r.jsx)(N,{disabled:this.state.submitDisabled,children:"Submit"})]})]})}}]),n}(a.Component),q="The field",F={shouldMatch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[e.test(t),n||"".concat(r||q," does not match the pattern ").concat(e)]}},isRequired:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.errorMessage,n=e.propName;return function(e){return["undefined"!==typeof e&&""!==e,t||"".concat(n||q," is required")]}}},R="The string",S={hasMaxLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[t.length<=e,n||"".concat(r||R," should be smaller than ").concat(e," chars")]}},hasMinLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[t.length>=e,n||"".concat(r||R," should be more than ").concat(e," chars")]}}},L="The value",D={isLessThan:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[+t<+e,n||"".concat(r||L," should be less than ").concat(e)]}},isGreaterThan:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[+t>+e,n||"".concat(r||L," should be greater than ").concat(e)]}},isBetween:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.errorMessage,a=n.propName;return function(n){return[+n>+e&&+n<+t,r||"".concat(a||L," should be between ").concat(e," and ").concat(t," (not inclusive)")]}},isEven:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.errorMessage,n=e.propName;return function(e){return[+e%2===0,t||"".concat(n||L," should be even")]}}},C=n(23),T=n.n(C),A="Date",E={isInFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[T()(t).isValid(),n||"".concat(r||A,' should be in format "').concat(e,'"')]}},isAfter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[T()(t).isAfter(e),n||"".concat(r||A," should be after ").concat(e)]}}},P=n(5),B="The file",H={areOfType:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.type!==e})).length,n||"".concat(r||B," should be of type ").concat(e)]}},haveSingleSizeLessThan:function(e){return{bytes:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.size>=e})).length,n||"".concat(r||B," should be less than ").concat(e," bytes")]}},kb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.size>=1e3*e})).length,n||"".concat(r||B," should be less than ").concat(e," kb")]}},mb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return t.size>=1e6*e})).length,n||"".concat(r||B," should be less than ").concat(e," mb")]}}}},nameFollowsPattern:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[0===Object(P.a)(t).slice(0).filter((function(t){return!e.test(t.name)})).length,n||"".concat(r||B," name should follow pattern ").concat(e)]}},maxCount:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errorMessage,r=t.propName;return function(t){return[Object(P.a)(t).slice(0).length<=e,n||"".concat(r||B," count should be ").concat(e," or less")]}}},G=[{key:"#FF0000",value:"red",textContent:"Red"},{key:"#00FF00",value:"green",textContent:"Green"},{key:"#0000FF",value:"blue",textContent:"Blue"}],z={getAll:function(){return Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.abrupt("return",G);case 3:case"end":return e.stop()}}),e)})))()}},W=n(8),I=n(28),J=n.n(I);function U(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{className:J.a.label,htmlFor:e.for,children:[e.label,e.required?" (required)":"",":"]}),e.children]})}function $(e){function t(t){var n=t.label,a=t.required,i=Object(W.a)(t,["label","required"]);return Object(r.jsx)(U,{label:n,required:a,for:i.name,children:Object(r.jsx)(e,Object(u.a)({},i))})}t.defaultProps={required:!1};var n=e.displayName||e.name||"Component";return t.displayName="withLabel(".concat(n,")"),t}U.defaultProps={required:!1};var K=n(9);function Z(e){return{validate:function(t){return e.map((function(e){return e(t)})).reduce((function(e,t){var n=Object(M.a)(t,2),r=n[0],a=n[1];return r?e:[].concat(Object(k.a)(e),[a])}),[])}}}var Q=n(29),X=n.n(Q);function Y(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{children:e.errorMessages.map((function(e){return Object(r.jsx)("li",{className:X.a.validationSummary,children:e},e)}))}),e.children]})}Y.defaultValues={errorMessages:[]};var ee=n(10),te=n.n(ee);function ne(e){var t=e.displayName||e.name||"Component",n="withValidationSummary(".concat(t,")"),s=(te.a.func.isRequired,te.a.func.isRequired,te.a.func.isRequired,te.a.arrayOf(te.a.func),function(t){Object(v.a)(a,t);var n=Object(j.a)(a);function a(e){var t;return Object(h.a)(this,a),(t=n.call(this,e)).state={errorMessages:[]},t.elementRef=i.a.createRef(),t.begunValidation=!1,t.validate=t.validate.bind(Object(K.a)(t)),t.beginValidating=t.beginValidating.bind(Object(K.a)(t)),t.changeHandler=t.changeHandler.bind(Object(K.a)(t)),t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.validator=Z(this.props.validations),this.props.registerValidator(this.validate)}},{key:"componentDidUpdate",value:function(e,t,n){this.validator=Z(this.props.validations)}},{key:"componentWillUnmount",value:function(){this.props.unregisterValidator()}},{key:"validate",value:function(){this.begunValidation=!0;var e=this.elementRef.current.files||this.elementRef.current.value,t=this.validator.validate(e),n=!t.length;n||this.elementRef.current.focus(),this.setState({errorMessages:t}),this.props.setValue(n?e:null)}},{key:"beginValidating",value:function(){this.begunValidation||(this.begunValidation=!0,this.changeHandler())}},{key:"changeHandler",value:function(){this.begunValidation&&this.validate()}},{key:"filterOutWrappedComponentProps",value:function(){var e=this.props;e.validations,e.setValue,e.registerValidator,e.unregisterValidator;return Object(W.a)(e,["validations","setValue","registerValidator","unregisterValidator"])}},{key:"render",value:function(){return Object(r.jsx)(Y,{errorMessages:this.state.errorMessages,children:Object(r.jsx)(e,Object(u.a)({ref:this.elementRef,onBlur:this.beginValidating,onChange:this.changeHandler},this.filterOutWrappedComponentProps()))})}}]),a}(a.Component));return s.displayName=n,s.defaultValues={validations:[]},s}var re=n(30),ae=n.n(re),ie=i.a.forwardRef((function(e,t){return Object(r.jsx)("input",Object(u.a)({ref:t,className:ae.a.input},e))}));ie.displayName="Input";var se=ie,oe=n(24),ce=n.n(oe),le=i.a.forwardRef((function(e,t){var n=Object(a.useState)(null),i=Object(M.a)(n,2),s=i[0],o=i[1],c=e.initiallyEmpty,l=e.getData,d=Object(W.a)(e,["initiallyEmpty","getData"]);return Object(a.useEffect)((function(){l&&l().then((function(e){return o(e)}))}),[l]),Object(r.jsxs)(r.Fragment,{children:[s?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("div",{children:"Loading..."}),Object(r.jsxs)("select",Object(u.a)(Object(u.a)({ref:t,className:s?ce.a.visible:ce.a.hidden},d),{},{hidden:!s,defaultValue:"",children:[c?Object(r.jsx)("option",{hidden:!0,disabled:!0,value:""}):"",null===s||void 0===s?void 0:s.map((function(e){var t=e.key,n=e.value,a=e.textContent;return Object(r.jsx)("option",{value:n,children:a||n},t)}))]}))]})}));le.displayName="Select";var ue=le,de=n(31),be=n.n(de),pe=i.a.forwardRef((function(e,t){return Object(r.jsx)("textarea",Object(u.a)({ref:t,className:be.a.textarea},e))}));pe.displayName="Textarea";var fe=pe,he=$(ne(se)),me=$(ne(ue)),ve=$(ne(fe));function je(){return Object(r.jsxs)("div",{className:l.a.container,children:[Object(r.jsx)("div",{}),Object(r.jsxs)(w,{children:[Object(r.jsx)(he,{name:"first-name",required:!0,label:"First name",validations:[F.isRequired({propName:"First name"}),S.hasMaxLength(64,{propName:"First name"}),S.hasMinLength(2,{propName:"First name"})]}),Object(r.jsx)(he,{name:"last-name",required:!0,label:"Last name",validations:[F.isRequired({propName:"Last name"}),S.hasMaxLength(64,{propName:"Last name"}),S.hasMinLength(2,{propName:"Last name"})]}),Object(r.jsx)(he,{name:"email",type:"email",required:!0,label:"Email",validations:[F.isRequired({propName:"Email"}),F.shouldMatch(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,{errorMessage:"Email is invalid"})]}),Object(r.jsx)(he,{name:"phone",type:"tel",label:"Phone",validations:[F.shouldMatch(/^((\([0-9]{3}\)|[0-9]{3})\s[0-9]{3}[-\s]?[0-9]{4,6}|)$/im,{errorMessage:"Phone number should be in some of the following formats: ".concat("(123) 456-7890, (123) 456 7890, 123 456 7890, 123 456-7890")})]}),Object(r.jsx)(he,{name:"lucky-number",type:"number",step:"2",required:!0,label:"Lucky number",validations:[F.isRequired(),D.isGreaterThan(1),D.isLessThan(10),D.isBetween(1,10),D.isEven()]}),Object(r.jsx)(he,{name:"date",type:"date",required:!0,label:"Date",validations:[F.isRequired(),E.isAfter(new Date)]}),Object(r.jsx)(he,{name:"file",type:"file",label:"File",validations:[H.haveSingleSizeLessThan(500).kb(),H.areOfType("image/jpeg"),H.nameFollowsPattern(/.jpg$/i,{errorMessage:'Filename should end with ".jpg"'}),H.maxCount(2)],multiple:!0}),Object(r.jsx)(me,{name:"rgb-colors",required:!0,label:"RGB Colors",getData:z.getAll,validations:[F.isRequired({propName:"Color"})],initiallyEmpty:!0}),Object(r.jsx)(ve,{name:"application-letter",cols:50,required:!0,label:"Application letter",validations:[F.isRequired({propName:"Application letter"}),S.hasMinLength(50,{propName:"Application letter"}),S.hasMaxLength(450,{propName:"Application letter"})]})]}),Object(r.jsx)("div",{})]})}o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(je,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.796eab47.chunk.js.map