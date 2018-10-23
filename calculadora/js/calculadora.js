
var pantalla= document.getElementById("texto");
var valor="";
var resultado=0;
var ope="";
var cadena="";
var tabla= document.getElementsByTagName("table");

//FUNCION QUE ME COMPRUEBA LOS RESULTADOS ANTERIORES PARA ENCADENAR OPERACIONES
function comprueba(ope , resultado){
    var result=0;
    var content=pantalla.value;
    var number=parseFloat(content);
   
    switch(ope){
        case "+":
            result= number+resultado;
            console.log("dentro de la funcion comprueba despues de la suma el resultado es "+result);
            return result;
            
            break;

        case "-":
            if(resultado > number){
                result=number - resultado;
            }else if(resultado < number){
                result=resultado - number;
            }
        
            return result;
            
            break;

        case "*":
            if(resultado==0){
                result=number;
            }
            else{
                result= resultado*number;
            }
            
            return result;
            
            break;

        case "/":
        if(resultado==0){
            result=number;
        }
        else{
            result= resultado/number;
        }
            return result;
            
            break;
    }

}

tabla[0].addEventListener( 'click' , function(e){
    var x= e.target;
    var casillaClickada= x.textContent;
    var clickado= x.value;

    if(clickado==undefined){

    }else{
    
    if((clickado=="+")||(clickado=="-")||(clickado=="*")||(clickado=="/")||(clickado=="=")||(clickado=="<")||(clickado=="CE")||(clickado==".")||(clickado=="C")){
            
            var contenido=pantalla.value;
            var numero=parseFloat(contenido);
            switch(clickado){
        //-------------------------------------------------------//
                case "+":
                    console.log("EL NUMERO QUE VA A COGER EL OPERANDO + ES "+numero);
                    if(ope!=""){
                        console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                        resultado= comprueba(ope,resultado);
                        console.log("ahora el resultado es "+resultado);
                        pantalla.value=resultado;
                        valor="";
                        ope='+';
                    }else{
                    resultado=numero+resultado;
                    pantalla.value="";
                    valor="";
                    ope='+';}

                    break;
         //-----------------------------------------------------//
                case ".":
                    var busca=contenido.indexOf('.');
                    if(busca >= 0){
                    }else{
                        valor=contenido+".";
                        pantalla.value=valor;
                    }
                    contenido="";
                break;
        //-----------------------------------------------------//
                case "-":
                if(pantalla.value==""){
                    pantalla.value="-";
                    valor="-";
                }else{
                if(ope!=""){
                        console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                        resultado= comprueba(ope,resultado);
                        console.log("ahora el resultado es "+resultado);
                        valor="";
                        pantalla.value=resultado;
                        ope='-';
                }else{
                    console.log(resultado);
                    resultado=numero-resultado;
                    pantalla.value="";
                    valor="";
                    ope='-';}}
                break;
        //-------------------------------------------------------//
                case "*":
                if(ope!=""){
                    console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                    resultado= comprueba(ope,resultado);
                    console.log("ahora el resultado es "+resultado);
                    valor="";
                    pantalla.value=resultado;
                    ope='*';
                }else{
                    if(resultado==0){
                        resultado=numero;
                        pantalla.value="";
                        valor="";
                        ope='*';}
                    else{
                        resultado=resultado*numero;
                        pantalla.value="";
                        valor="";
                        ope='*';
                    }}
                break;
                //------------------------------------------------------------ */
                case "/":
                if(ope!=""){
                        console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                        resultado= comprueba(ope,resultado);
                        console.log("ahora el resultado es "+resultado);
                        valor="";
                        pantalla.value=resultado;
                        ope='/';
                }else{
                    if(resultado==0){
                        resultado=numero;
                    }else{
                        resultado=resultado/numero;
                }
                    pantalla.value="";
                    valor="";
                    ope='/';
                }
                break;
        
        //-------------------------------------------------------------//
                case "CE":
                    pantalla.value="";
                    valor="";
                    resultado=0;
                    ope="";
        
                break;


        //-------------------------------------------------------------//
                 case "C":
                 pantalla.value="";
                 valor="";
     
             break;
        //--------------------------------------------------------------//
                case "=":
                
                    if(ope == '+'){
                        console.log("has entradoa ala suma");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        console.log("el numero es "+numero);
                        console.log("el resultado es "+resultado);
                        resultado=numero+resultado;
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        pantalla.value=resultado;
                        resultado=0;}
                    }else if(ope == '-'){
                        console.log("has entradoa ala  resta");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        resultado=resultado-numero;
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        pantalla.value=resultado;
                        resultado=0;}
                    }else if(ope == '*'){
                        console.log("has entradoa ala  multi");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        console.log(numero);
                        console.log(resultado);
                        resultado=resultado*numero
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        pantalla.value=resultado;
                        resultado=0;}
                    }else if(ope == '/'){
                        console.log("has entradoa ala divi");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        resultado=resultado/numero
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        pantalla.value=resultado;
                        resultado=0;}
                    }else{
                        
                    }
                    
                break;
        
                case "<":
                    var array=[];
                    var valorBorrar= pantalla.value;
                    var string="";
                    for(var i=0 ; i < valorBorrar.length-1 ; i++){
                        array[i]=valorBorrar[i];
                        string=string+array[i];
                    }
                    pantalla.value=string;
                    valor="";
                
                break;
            }
        }else{
            valor=valor+clickado;
            pantalla.value=valor
            var cont=0;
        }

        if(isNaN(resultado)){
           
        }
    }});