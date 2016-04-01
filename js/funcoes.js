function CampoObrigatorio(form) {
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type == "text") {
            if (form.elements[i].value == "" && form.elements[i].className == "obrigatorio") {
                alert("Por favor, Preencha o Campo: " + form.elements[i].name);
                form.elements[i].focus();
                return false;
                break;
            }
        }
    }
    return true;
}
//************************************//
//***********VALIDAÇÃO CPF************//
//************************************//
function validarCPF(){
   var cpf = document.formCadastroCliente.cpf.value;
   var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
   if(!filtro.test(cpf)){
     window.alert("CPF inválido.");
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
		window.alert("CPF inválido.");
		return false;
   }

   soma = 0;
   for(i = 0; i < 9; i++)
   	 soma += parseInt(cpf.charAt(i)) * (10 - i);
   resto = 11 - (soma % 11);
   if(resto == 10 || resto == 11)
	 resto = 0;
   if(resto != parseInt(cpf.charAt(9))){
	 window.alert("CPF inválido. Tente novamente.");
	 return false;
   }
   soma = 0;
   for(i = 0; i < 10; i ++)
	 soma += parseInt(cpf.charAt(i)) * (11 - i);
   resto = 11 - (soma % 11);
   if(resto == 10 || resto == 11)
	 resto = 0;
   if(resto != parseInt(cpf.charAt(10))){
     window.alert("CPF inválido.");
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
//************************************//
//***********FIM VALIDAÇÃO************//
//************************************//


 //***********************************************//
//**********FORMATAÇÃO(MASCARA) DO CPF***********//
//***********************************************//
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}
function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}
function cpf_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto dígitos
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava dígitos
	v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
	return v
}
//************************************//
//***********FIM FORMATAÇÃO***********//
//************************************//


function ConverteMaiuscula(Campo) {
    Campo.value = Campo.value.toUpperCase();
}
function autoTab(input, e) {
    var ind = 0;
    var isNN = (navigator.appName.indexOf("Netscape") != -1);
    var keyCode = (isNN) ? e.which : e.keyCode;
    var nKeyCode = e.keyCode;
    if (keyCode == 13) {
        if (!isNN) {
            window.event.keyCode = 0;
        } // evitar o beep
        ind = getIndex(input);
        if (input.form[ind].type == 'textarea') {
            return;
        }
        ind++;
        input.form[ind].focus();
        if (input.form[ind].type == 'text') {
            input.form[ind].select();
        }
    }

    function getIndex(input) {
        var index = -1, i = 0, found = false;
        while (i < input.form.length && index == - 1)
            if (input.form[i] == input) {
                index = i;
                if (i < (input.form.length - 1)) {
                    if (input.form[i + 1].type == 'hidden') {
                        index++;
                    }
                    if (input.form[i + 1].type == 'button' && input.form[i + 1].id == 'tabstopfalse') {
                        index++;
                    }
                }
            }
            else
                i++;
        return index;
    }
}