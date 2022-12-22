"use strict";(self.webpackChunkcrudApp=self.webpackChunkcrudApp||[]).push([[482],{482:(O,c,p)=>{p.r(c),p.d(c,{AuthModule:()=>M});var d=p(6895),e=p(433),s=p(4154),t=p(8256);let m=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main"]],decls:1,vars:0,template:function(o,r){1&o&&t._UZ(0,"router-outlet")},dependencies:[s.lC]}),n})();var f=p(5226),l=p.n(f),g=p(7556);let h=(()=>{class n{constructor(o,r,a){this.fb=o,this.router=r,this.authService=a,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.loginForm=this.fb.group({email:["",[e.kI.required,e.kI.pattern(this.emailPattern)]],password:["",[e.kI.required,e.kI.minLength(6)]]})}login(){const{email:o,password:r}=this.loginForm.value;this.authService.login(o,r).subscribe(a=>{!0===a?this.router.navigateByUrl("/productos/listado"):l().fire("Error",a,"error")})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(s.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:25,vars:1,consts:[[1,"wrapper","bg-white"],[1,"h2","text-center"],[1,"pt-3",3,"formGroup","ngSubmit"],[1,"form-group","py-2"],[1,"input-field"],["type","email","formControlName","email","placeholder","Ingrese su correo","required",""],[1,"form-group","py-1"],["type","password","placeholder","Contrase\xf1a","formControlName","password","required",""],[1,"d-flex","align-items-start"],[1,"remember"],[1,"option","text-muted"],["type","radio","name","radio"],[1,"checkmark"],[1,"ml-auto"],["href","#","id","forgot"],["type","submit",1,"btn","btn-block","text-center","my-3"],[1,"text-center","pt-3","text-muted"],["routerLink","/auth/registro"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return r.login()}),t.TgZ(4,"div",3)(5,"div",4),t._UZ(6,"input",5),t.qZA()(),t.TgZ(7,"div",6)(8,"div",4),t._UZ(9,"input",7),t.qZA()(),t.TgZ(10,"div",8)(11,"div",9)(12,"label",10),t._uU(13," Recordarme \xa0"),t._UZ(14,"input",11)(15,"span",12),t.qZA()(),t.TgZ(16,"div",13)(17,"a",14),t._uU(18,"Olvidaste tu contrase\xf1a?"),t.qZA()()(),t.TgZ(19,"button",15),t._uU(20,"Iniciar"),t.qZA(),t.TgZ(21,"div",16),t._uU(22,"No tienes cuenta? "),t.TgZ(23,"a",17),t._uU(24,"Registrarse"),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",r.loginForm))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.sg,e.u,s.yS],styles:['@import"https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#eee;height:100vh;font-family:Poppins,sans-serif;background:linear-gradient(to top,#fff 10%,rgba(93,42,141,.4) 90%) no-repeat}.wrapper[_ngcontent-%COMP%]{max-width:500px;border-radius:10px;margin:50px auto;padding:30px 40px;box-shadow:20px 20px 80px #cecece}.h2[_ngcontent-%COMP%]{font-family:Kaushan Script,cursive;font-size:3.5rem;font-weight:700;color:#400485;font-style:italic}.h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.input-field[_ngcontent-%COMP%]{border-radius:5px;padding:5px;display:flex;align-items:center;cursor:pointer;border:1px solid #400485;color:#400485}.input-field[_ngcontent-%COMP%]:hover{color:#7b4ca0;border:1px solid #7b4ca0}input[_ngcontent-%COMP%]{border:none;outline:none;box-shadow:none;width:100%;padding:0 2px;font-family:Poppins,sans-serif}.fa-eye-slash.btn[_ngcontent-%COMP%]{border:none;outline:none;box-shadow:none}a[_ngcontent-%COMP%]{text-decoration:none;color:#400485;font-weight:700}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#7b4ca0}.option[_ngcontent-%COMP%]{position:relative;padding-left:30px;cursor:pointer}.option[_ngcontent-%COMP%]   label.text-muted[_ngcontent-%COMP%]{display:block;cursor:pointer}.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.checkmark[_ngcontent-%COMP%]{position:absolute;top:3px;left:0;height:20px;width:20px;background-color:#fff;border:1px solid #ddd;border-radius:50%;cursor:pointer}.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.option[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{content:"";width:13px;height:13px;display:block;background:#400485;position:absolute;top:48%;left:53%;border-radius:50%;transform:translate(-50%,-50%) scale(0);transition:.3s ease-in-out 0s}.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background:#fff;transition:.3s ease-in-out 0s;border:1px solid #400485}.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{transform:translate(-50%,-50%) scale(1)}.btn.btn-block[_ngcontent-%COMP%]{border-radius:20px;background-color:#400485;color:#fff;padding:.5em}.btn.btn-block[_ngcontent-%COMP%]:hover{background-color:#55268be0}@media (max-width: 575px){.wrapper[_ngcontent-%COMP%]{margin:10px}}@media (max-width:424px){.wrapper[_ngcontent-%COMP%]{padding:30px 10px;margin:5px}.option[_ngcontent-%COMP%]{position:relative;padding-left:22px}.option[_ngcontent-%COMP%]   label.text-muted[_ngcontent-%COMP%]{font-size:.95rem}.checkmark[_ngcontent-%COMP%]{position:absolute;top:2px}.option[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{top:50%}#forgot[_ngcontent-%COMP%]{font-size:.95rem}}']}),n})();function b(n,i){1&n&&(t.TgZ(0,"span",20),t._uU(1," Nombre obligatorio "),t.qZA())}function C(n,i){1&n&&(t.TgZ(0,"span",20),t._uU(1," Correo obligatorio "),t.qZA())}function x(n,i){1&n&&(t.TgZ(0,"span",20),t._uU(1," Contrase\xf1a debe contener al menos 6 caracteres "),t.qZA())}const _=[{path:"",component:m,children:[{path:"registro",component:(()=>{class n{constructor(o,r,a){this.fb=o,this.router=r,this.authService=a,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.registroForm=this.fb.group({name:["",[e.kI.required]],email:["",[e.kI.required,e.kI.pattern(this.emailPattern)]],password:["",[e.kI.required,e.kI.minLength(6)]]})}registro(){const{name:o,email:r,password:a}=this.registroForm.value;this.authService.registro(o,r,a).subscribe(u=>{!0===u?this.router.navigateByUrl("/productos/listado"):l().fire("Error",u,"error"),this.registroForm.markAllAsTouched()})}campoNoValido(o){return this.registroForm.get(o)?.invalid&&this.registroForm.get(o)?.touched}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(s.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-registro"]],decls:31,vars:5,consts:[[1,"wrapper","bg-white"],[1,"h2","text-center"],[1,"pt-3",3,"formGroup","ngSubmit"],[1,"form-group","py-2"],[1,"input-field"],["type","text","formControlName","email","placeholder","Nombre","required","","formControlName","name"],["class","form-text text-danger",4,"ngIf"],[1,"form-group","py-1"],["type","mail","placeholder","Email","required","","formControlName","email"],["type","password","placeholder","Contrase\xf1a","required","","formControlName","password"],[1,"d-flex","align-items-start"],[1,"remember"],[1,"option","text-muted"],["type","radio","name","radio"],[1,"checkmark"],[1,"ml-auto"],["href","#","id","forgot"],["type","submit",1,"btn","btn-block","text-center","my-3",3,"disabled"],[1,"text-center","pt-3","text-muted"],["routerLink","/auth/login"],[1,"form-text","text-danger"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Nuevo Usuario"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return r.registro()}),t.TgZ(4,"div",3)(5,"div",4),t._UZ(6,"input",5),t.YNc(7,b,2,0,"span",6),t.qZA()(),t.TgZ(8,"div",7)(9,"div",4),t._UZ(10,"input",8),t.YNc(11,C,2,0,"span",6),t.qZA()(),t.TgZ(12,"div",7)(13,"div",4),t._UZ(14,"input",9),t.YNc(15,x,2,0,"span",6),t.qZA()(),t.TgZ(16,"div",10)(17,"div",11)(18,"label",12),t._uU(19," Recordarme \xa0"),t._UZ(20,"input",13)(21,"span",14),t.qZA()(),t.TgZ(22,"div",15)(23,"a",16),t._uU(24,"Olvidaste tu contrase\xf1a?"),t.qZA()()(),t.TgZ(25,"button",17),t._uU(26,"Registrarse"),t.qZA(),t.TgZ(27,"div",18),t._uU(28,"Ya tiene cuenta? "),t.TgZ(29,"a",19),t._uU(30,"Iniciar sesion"),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",r.registroForm),t.xp6(4),t.Q6J("ngIf",r.campoNoValido("name")),t.xp6(4),t.Q6J("ngIf",r.campoNoValido("email")),t.xp6(4),t.Q6J("ngIf",r.campoNoValido("password")),t.xp6(10),t.Q6J("disabled",r.registroForm.invalid))},dependencies:[d.O5,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.sg,e.u,s.yS],styles:['@import"https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#eee;height:100vh;font-family:Poppins,sans-serif;background:linear-gradient(to top,#fff 10%,rgba(93,42,141,.4) 90%) no-repeat}.wrapper[_ngcontent-%COMP%]{max-width:500px;border-radius:10px;margin:50px auto;padding:30px 40px;box-shadow:20px 20px 80px #cecece}.h2[_ngcontent-%COMP%]{font-family:Kaushan Script,cursive;font-size:3.5rem;font-weight:700;color:#400485;font-style:italic}.h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.input-field[_ngcontent-%COMP%]{border-radius:5px;padding:5px;display:flex;align-items:center;cursor:pointer;border:1px solid #400485;color:#400485}.input-field[_ngcontent-%COMP%]:hover{color:#7b4ca0;border:1px solid #7b4ca0}input[_ngcontent-%COMP%]{border:none;outline:none;box-shadow:none;width:100%;padding:0 2px;font-family:Poppins,sans-serif}.fa-eye-slash.btn[_ngcontent-%COMP%]{border:none;outline:none;box-shadow:none}a[_ngcontent-%COMP%]{text-decoration:none;color:#400485;font-weight:700}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#7b4ca0}.option[_ngcontent-%COMP%]{position:relative;padding-left:30px;cursor:pointer}.option[_ngcontent-%COMP%]   label.text-muted[_ngcontent-%COMP%]{display:block;cursor:pointer}.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.checkmark[_ngcontent-%COMP%]{position:absolute;top:3px;left:0;height:20px;width:20px;background-color:#fff;border:1px solid #ddd;border-radius:50%;cursor:pointer}.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.option[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{content:"";width:13px;height:13px;display:block;background:#400485;position:absolute;top:48%;left:53%;border-radius:50%;transform:translate(-50%,-50%) scale(0);transition:.3s ease-in-out 0s}.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background:#fff;transition:.3s ease-in-out 0s;border:1px solid #400485}.option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{transform:translate(-50%,-50%) scale(1)}.btn.btn-block[_ngcontent-%COMP%]{border-radius:20px;background-color:#400485;color:#fff;padding:.4em}.btn.btn-block[_ngcontent-%COMP%]:hover{background-color:#55268be0}@media (max-width: 575px){.wrapper[_ngcontent-%COMP%]{margin:10px}}@media (max-width:424px){.wrapper[_ngcontent-%COMP%]{padding:30px 10px;margin:5px}.option[_ngcontent-%COMP%]{position:relative;padding-left:22px}.option[_ngcontent-%COMP%]   label.text-muted[_ngcontent-%COMP%]{font-size:.95rem}.checkmark[_ngcontent-%COMP%]{position:absolute;top:2px}.option[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{top:50%}#forgot[_ngcontent-%COMP%]{font-size:.95rem}}']}),n})()},{path:"login",component:h},{path:"**",redirectTo:"registro"}]}];let P=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(_),s.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,e.UX,P]}),n})()}}]);