//***********************************//
//INICIO VALIDA플O CAMPOS OBRIGATOROS//
//***********************************//
function CampoObrigatorio(form) {
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type == "text" ||form.elements[i].type == "password" || form.elements[i].type == "email") {
            if (form.elements[i].value == "" && form.elements[i].className == "obrigatorio") {
                alert("O campo: " + form.elements[i].name + " \u00e9 obrigat\u00f3rio.");
                form.elements[i].focus();
                return false;
                break;
            }
			if (document.getElementById("senha").value.length < 6){
				alert("A senha deve conter no min\u00edmo 6 caracteres.");
				return false;
				break;
			}
        }
    }
    return true;
}
//***********************************//
//**FIM VALIDA플O CAMPOS OBRIGATOROS*//
//***********************************//

//***********************************//
//***********VALIDA플O CPF***********//
//***********************************//
function validarCPF(){
   var cpf = document.formCadastroCliente.cpf.value;
   var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
   if(!filtro.test(cpf)){
     window.alert("CPF inv\u00e1lido.");
	 document.getElementById("cpf").focus();
	 document.getElementById("cpf").value = "";
	 return false;
   }
   
   cpf = remove(cpf, ".");
   cpf = remove(cpf, "-");
    
   if(cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" ||
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" ||
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" ||
		cpf == "88888888888" || 
		cpf == "99999999999"){
		window.alert("CPF inv\u00e1lido.");
		document.getElementById("cpf").focus();
		document.getElementById("cpf").value = "";
		return false;
   }

   soma = 0;
   for(i = 0; i < 9; i++)
   	 soma += parseInt(cpf.charAt(i)) * (10 - i);
   resto = 11 - (soma % 11);
   if(resto == 10 || resto == 11)
	 resto = 0;
   if(resto != parseInt(cpf.charAt(9))){
	 window.alert("CPF inv\u00e1lido.");
	 document.getElementById("cpf").focus();
	 document.getElementById("cpf").value = "";
	 return false;
   }
   soma = 0;
   for(i = 0; i < 10; i ++)
	 soma += parseInt(cpf.charAt(i)) * (11 - i);
   resto = 11 - (soma % 11);
   if(resto == 10 || resto == 11)
	 resto = 0;
   if(resto != parseInt(cpf.charAt(10))){
     window.alert("CPF inv\u00e1lido.");
	 document.getElementById("cpf").focus();
	 document.getElementById("cpf").value = "";
	 return false;
   }
   return true;
 }
function remove(str, sub) {
   i = str.indexOf(sub);
   r = "";
   if (i == -1) return str;
   r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
   return r;
 }
//***********************************//
//*********FIM VALIDA플O CPF*********//
//***********************************//

 //**********************************//
//*****FORMATA플O(MASCARA) DO CPF****//
//***********************************//
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}
function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}
function cpf_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que n? ?d?ito
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto d?itos
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava d?itos
	v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo d?itos
	return v
}
//***********************************//
//*********FIM FORMATA플O CPF********//
//***********************************//

//***********************************//
//****INICIO FORMATA플O TELEFONE*****//
//***********************************//
function mascaraTel(telefone){ 
	if(telefone.value.length == 0)
		telefone.value = '(' + telefone.value;
	if(telefone.value.length == 3)
		telefone.value = telefone.value + ') ';
	if(telefone.value.length == 9)
		telefone.value = telefone.value + '-';
  
}
//***********************************//
//******FIM FORMATA플O TELEFONE******//
//***********************************//

//***********************************//
//*********FORMATA플O LETRAS*********//
//***********************************//
function SomenteLetras(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla >= 65 && tecla <= 90 || tecla >= 97 && tecla <= 122 || tecla == 32)) 
		return true;
    else{
    	if (tecla==8 || tecla==0) 
			return true;
		else  
			return false;
    }
}
function VerificaSenha(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla >= 65 && tecla <= 90 || tecla >= 97 && tecla <= 122 || tecla >= 48 && tecla <= 57))
		return true;
    else{
    	if (tecla==8 || tecla==0) 
			return true;
		else  
			return false;
    }
}
function ConverteMaiuscula(Campo) {
    Campo.value = Campo.value.toUpperCase();
}
//***********************************//
//*******FIM FORMATA플O LETRAS*******//
//***********************************//

//***********************************//
//*********VALIDA플O CHECKBOX********//
//***********************************//
function VerificaCheckbox(id, visibility){
	if(id == "sim"){
		document.getElementById("sim").checked = true;
		document.getElementById("nao").checked = false;
		document.getElementById("msgPromocao").style.display = "inline";
	}
	if(id == "nao"){
		document.getElementById("sim").checked = false;
		document.getElementById("nao").checked = true;
		document.getElementById("msgPromocao").style.display = "none";
	}
}
//***********************************//
//*******FIM VALIDA플O CHECKBOX******//
//***********************************//

//***********************************//
//*******INICIO VALIDA플O SEXO*******//
//***********************************//
function VerificaSexo(){
	if(document.getElementById("sexo").selectedIndex == 0){
		alert("Sexo inv\u00e1lido.");
		return false;
	}
}
//***********************************//
//*********FIM VALIDA플O SEXO********//
//***********************************//

//***********************************//
//*****INICIO VALIDA플O TEXTAREA*****//
//***********************************//
function MaxCaracteres(){
	if(formCadastroCliente.obs.value.length > 200){
		alert("A observa\u00e7\u00e3o deve conter no m\u00e1ximo 200 caracteres.");
		formCadastroCliente.obs.value = formCadastroCliente.obs.value.substr(0, 200);
		formCadastroCliente.obs.focus();
		return false;
	}
}
//***********************************//
//*******FIM VALIDA플O TEXTAREA******//
//***********************************//
