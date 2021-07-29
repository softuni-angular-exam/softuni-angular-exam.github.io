(self.webpackChunksoftuni_angular_exam=self.webpackChunksoftuni_angular_exam||[]).push([[586],{2586:(n,e,o)=>{"use strict";o.r(e),o.d(e,{SignupModule:()=>F});var t=o(1116),r=o(1462),i=o(9843),s=o(4601),g=o(5366),a=o(6659),u=o(7653),l=o(3070),m=o(9410),c=o(7064);function p(n,e){1&n&&g._UZ(0,"app-loading-spinner")}function d(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," Please enter your name! "),g.qZA())}function _(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," The name could not be longer then 30 characters! "),g.qZA())}function h(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," The name should be at least 3 characters! "),g.qZA())}function f(n,e){if(1&n&&(g.TgZ(0,"mat-option",32),g._UZ(1,"img",33),g._uU(2),g.qZA()),2&n){const n=e.$implicit;g.Q6J("value",n.phoneCode),g.xp6(1),g.Q6J("src",n.imgUrl,g.LSH),g.xp6(1),g.hij(" +",n.phoneCode," ")}}function b(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," Please enter your phone number! "),g.qZA())}function Z(n,e){if(1&n&&(g.TgZ(0,"li"),g._uU(1),g.qZA()),2&n){const n=g.oxw();g.xp6(1),g.hij(" ",n.errorMsgOnLoadPhoneCodes," ")}}function C(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," Please enter your email! "),g.qZA())}function P(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," Please enter a valid email! "),g.qZA())}function x(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," Please enter a passowrd! "),g.qZA())}function O(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," The password could not be longer then 30 symbols! "),g.qZA())}function M(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," The password should be at least 8 symbols! "),g.qZA())}function v(n,e){1&n&&(g.TgZ(0,"li"),g._uU(1," The passwords do not match! "),g.qZA())}function w(n,e){if(1&n&&(g.TgZ(0,"li",34),g._uU(1),g.qZA()),2&n){const n=g.oxw();g.xp6(1),g.Oqu(n.errorAuthMsg)}}function q(n,e){if(1&n&&(g.TgZ(0,"li",34),g._uU(1),g.qZA()),2&n){const n=g.oxw();g.xp6(1),g.Oqu(n.errorOnSetUserData)}}const A=function(n){return{"if-phone-invalid":n}},T=function(n){return{invalid:n}};let k=(()=>{class n{constructor(n,e,o){this._formBuilder=n,this._authService=e,this._firestoreCollections=o}ngOnInit(){this.signupForm=this._formBuilder.group({name:[null,[r.kI.required,r.kI.minLength(3),r.kI.maxLength(30)]],phoneCode:[359,r.kI.required],phone:[null,[r.kI.required,r.kI.pattern("^[0-9]*$")]],email:[null,[r.kI.required,r.kI.email]],password:[null,[r.kI.required,r.kI.minLength(8),r.kI.maxLength(30)]],confirmPass:[null,[r.kI.required]]},{validator:this.confirmPasswordMatcher("password","confirmPass")}),this._firestoreCollections.getPhoneCodes().subscribe(n=>{this.phoneCodes=n.map(n=>Object.assign({id:n.payload.doc.id},n.payload.doc.data())),this.errorMsgOnLoadPhoneCodes=""},n=>{this.errorMsgOnLoadPhoneCodes=n.message}),this._errorAuthMsgSubscription=this._authService.errorAuthMsgSubject.subscribe(n=>{this.errorAuthMsg=n}),this._errorOnSetUserDataSubscription=this._authService.errorOnSetUserDataSubject.subscribe(n=>{this.errorOnSetUserData=n}),this._isLoadingSubscription=this._authService.isLoadingSubject.subscribe(n=>{this.isLoading=n})}ngOnDestroy(){this._errorAuthMsgSubscription.unsubscribe(),this._errorOnSetUserDataSubscription.unsubscribe(),this._isLoadingSubscription.unsubscribe(),this._authService.errorAuthMsg="",this._authService.errorAuthMsgSubject.next(this._authService.errorAuthMsg)}confirmPasswordMatcher(n,e){return o=>{const t=o.controls[e];t.setErrors(o.controls[n].value!==t.value?{mustMatch:!0}:null)}}onSubmit(n){n.invalid||this._authService.signUp({name:n.value.name,email:n.value.email,password:n.value.password,phoneCode:n.value.phoneCode,phone:n.value.phone,userImgUrl:this._firestoreCollections.userDefaultImgUrl})}}return n.\u0275fac=function(e){return new(e||n)(g.Y36(r.qu),g.Y36(a.e),g.Y36(u.P))},n.\u0275cmp=g.Xpm({type:n,selectors:[["app-signup"]],decls:64,vars:23,consts:[[1,"container"],[1,"sign-form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"sign-form__sign-up-header"],[1,"hr-border"],[1,"sign-form__sign-element"],["for","name"],[1,"name"],[1,"name-img"],["type","text","name","name","formControlName","name"],[1,"sign-error"],["for","phone"],[1,"phone"],[1,"phone-img"],[1,"sign-select"],[3,"ngClass"],["formControlName","phoneCode"],[3,"value",4,"ngFor","ngForOf"],["type","number","name","phone","formControlName","phone"],["for","email"],[1,"email"],[1,"email-img"],["type","text","name","email","formControlName","email"],["for","password"],[1,"password"],[1,"password-img"],["type","password","name","password","formControlName","password"],["for","confirmPass"],["type","password","name","confirmPass","formControlName","confirmPass",3,"ngClass"],[1,"sign-form__sign-form-btn"],["type","submit",1,"btn-default",3,"disabled"],["class","error-msg",4,"ngIf"],[3,"value"],[3,"src"],[1,"error-msg"]],template:function(n,e){1&n&&(g.TgZ(0,"div"),g.TgZ(1,"div",0),g.TgZ(2,"form",1),g.NdJ("ngSubmit",function(){return e.onSubmit(e.signupForm)}),g.YNc(3,p,1,0,"app-loading-spinner",2),g.TgZ(4,"div",3),g.TgZ(5,"h2"),g._uU(6,"Sign up"),g.qZA(),g.qZA(),g._UZ(7,"hr",4),g.TgZ(8,"div",5),g.TgZ(9,"label",6),g._uU(10,"Name"),g.qZA(),g.TgZ(11,"div",7),g._UZ(12,"div",8),g._UZ(13,"input",9),g.qZA(),g.TgZ(14,"ul",10),g.YNc(15,d,2,0,"li",2),g.YNc(16,_,2,0,"li",2),g.YNc(17,h,2,0,"li",2),g.qZA(),g.qZA(),g.TgZ(18,"div",5),g.TgZ(19,"label",11),g._uU(20,"Phone Number"),g.qZA(),g.TgZ(21,"div",12),g._UZ(22,"div",13),g.TgZ(23,"div",14),g.TgZ(24,"mat-form-field",15),g.TgZ(25,"mat-select",16),g.YNc(26,f,3,3,"mat-option",17),g.qZA(),g.qZA(),g.qZA(),g._UZ(27,"input",18),g.qZA(),g.TgZ(28,"ul",10),g.YNc(29,b,2,0,"li",2),g.YNc(30,Z,2,1,"li",2),g.qZA(),g.qZA(),g.TgZ(31,"div",5),g.TgZ(32,"label",19),g._uU(33,"Email"),g.qZA(),g.TgZ(34,"div",20),g._UZ(35,"div",21),g._UZ(36,"input",22),g.qZA(),g.TgZ(37,"ul",10),g.YNc(38,C,2,0,"li",2),g.YNc(39,P,2,0,"li",2),g.qZA(),g.qZA(),g.TgZ(40,"div",5),g.TgZ(41,"label",23),g._uU(42,"Password"),g.qZA(),g.TgZ(43,"div",24),g._UZ(44,"div",25),g._UZ(45,"input",26),g.qZA(),g.TgZ(46,"ul",10),g.YNc(47,x,2,0,"li",2),g.YNc(48,O,2,0,"li",2),g.YNc(49,M,2,0,"li",2),g.qZA(),g.qZA(),g.TgZ(50,"div",5),g.TgZ(51,"label",27),g._uU(52,"Confirm Password"),g.qZA(),g.TgZ(53,"div",24),g._UZ(54,"div",25),g._UZ(55,"input",28),g.qZA(),g.TgZ(56,"ul",10),g.YNc(57,v,2,0,"li",2),g.qZA(),g.qZA(),g.TgZ(58,"div",29),g.TgZ(59,"button",30),g._uU(60,"Sign up"),g.qZA(),g.TgZ(61,"ul",10),g.YNc(62,w,2,1,"li",31),g.YNc(63,q,2,1,"li",31),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(2),g.Q6J("formGroup",e.signupForm),g.xp6(1),g.Q6J("ngIf",e.isLoading),g.xp6(12),g.Q6J("ngIf",!e.signupForm.get("name").valid&&!e.signupForm.get("name").hasError("maxlength")&&!e.signupForm.get("name").hasError("minlength")&&e.signupForm.get("name").touched),g.xp6(1),g.Q6J("ngIf",e.signupForm.get("name").hasError("maxlength")&&e.signupForm.get("name").touched),g.xp6(1),g.Q6J("ngIf",e.signupForm.get("name").hasError("minlength")&&e.signupForm.get("name").touched),g.xp6(7),g.Q6J("ngClass",g.VKq(19,A,!e.signupForm.get("phone").valid&&e.signupForm.get("phone").touched)),g.xp6(2),g.Q6J("ngForOf",e.phoneCodes),g.xp6(3),g.Q6J("ngIf",!e.signupForm.get("phone").valid&&e.signupForm.get("phone").touched),g.xp6(1),g.Q6J("ngIf",e.errorMsgOnLoadPhoneCodes),g.xp6(8),g.Q6J("ngIf",!e.signupForm.get("email").valid&&!e.signupForm.get("email").hasError("email")&&e.signupForm.get("email").touched),g.xp6(1),g.Q6J("ngIf",e.signupForm.get("email").hasError("email")&&e.signupForm.get("email").touched),g.xp6(8),g.Q6J("ngIf",!e.signupForm.get("password").valid&&!e.signupForm.get("password").hasError("maxlength")&&!e.signupForm.get("password").hasError("minlength")&&e.signupForm.get("password").touched),g.xp6(1),g.Q6J("ngIf",e.signupForm.get("password").hasError("maxlength")&&e.signupForm.get("password").touched),g.xp6(1),g.Q6J("ngIf",e.signupForm.get("password").hasError("minlength")&&e.signupForm.get("password").touched),g.xp6(6),g.Q6J("ngClass",g.VKq(21,T,!e.signupForm.get("confirmPass").valid&&e.signupForm.get("confirmPass").dirty)),g.xp6(2),g.Q6J("ngIf",!e.signupForm.get("confirmPass").valid&&e.signupForm.get("confirmPass").dirty),g.xp6(2),g.Q6J("disabled",!e.signupForm.valid),g.xp6(3),g.Q6J("ngIf",e.errorAuthMsg),g.xp6(1),g.Q6J("ngIf",e.errorOnSetUserData))},directives:[r._Y,r.JL,r.sg,t.O5,r.Fj,r.JJ,r.u,l.KE,t.mk,s.gD,t.sg,r.wV,m.g,c.ey],styles:['@import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");.sign-form[_ngcontent-%COMP%]{background-color:var(--color2);box-shadow:0 0 10px 1px #000000bf;max-width:767px;padding:20px;margin:0 auto;position:relative}.sign-form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block}.sign-form__sign-up-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#b53636;text-align:center;font-size:1.3em;padding:5px}.sign-form__sign-element[_ngcontent-%COMP%]{font-size:1.1em;margin:20px 0}.sign-form__sign-element[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .sign-form__sign-element[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sign-form__sign-element[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%], .sign-form__sign-element[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{display:flex}.sign-form__sign-element[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .name-img[_ngcontent-%COMP%]{background-image:url(user.73c0f083ad3711c1d950.png)}.sign-form__sign-element[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .name-img[_ngcontent-%COMP%], .sign-form__sign-element[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .phone-img[_ngcontent-%COMP%]{background-color:#b53636;background-size:contain;background-position:50%;background-origin:content-box;background-repeat:no-repeat;width:50px;border-radius:3px 0 0 3px;padding:7px;box-sizing:border-box}.sign-form__sign-element[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .phone-img[_ngcontent-%COMP%]{background-image:url(phone.fb842bee9111b51d51a6.png)}.sign-form__sign-element[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:textfield;margin:0;border-left:none!important}.sign-form__sign-element[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .sign-form__sign-element[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.sign-form__sign-element[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .email-img[_ngcontent-%COMP%]{background-image:url(email.31cd4a3f10faa4acdb5c.png);padding:10px}.sign-form__sign-element[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .email-img[_ngcontent-%COMP%], .sign-form__sign-element[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]   .password-img[_ngcontent-%COMP%]{background-color:#b53636;background-size:contain;background-position:50%;background-origin:content-box;background-repeat:no-repeat;width:50px;border-radius:3px 0 0 3px;box-sizing:border-box}.sign-form__sign-element[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]   .password-img[_ngcontent-%COMP%]{padding:7px;background-image:url(password.63582da5386052e0358d.png)}.sign-form__sign-element[_ngcontent-%COMP%]   .sign-error[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#b53636;font-size:1.1em;padding:10px 0 0;list-style:none}.sign-form__sign-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:calc(100% - 50px);border:1px solid var(--color8);color:var(--color7);border-radius:0 3px 3px 0;box-sizing:border-box;padding:7px;font-size:1.1em;outline:none;background-color:#ffffff80;filter:none}.sign-form__sign-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, .sign-form__sign-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus, .sign-form__sign-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:hover{border:1px solid var(--color8);-webkit-text-fill-color:var(--color7);-webkit-box-shadow:none;-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}.sign-form__sign-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px;width:100%;color:var(--color7)}.sign-form[_ngcontent-%COMP%]   .hr-border[_ngcontent-%COMP%]{border-top:1px solid var(--color9);border-bottom:1px solid var(--color5);margin:20px 0}']}),n})();var U=o(5425);let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[t.ez,s.LD,r.UX,U.m,i.Bz.forChild([{path:"",component:k}])]]}),n})()}}]);