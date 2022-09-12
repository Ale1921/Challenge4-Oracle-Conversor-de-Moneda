function convertir(argument) 
{
    var valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    var dolar=23.81;
    var euro=25.90;
    resultado=0;
    //Peso a Dolar
    if(de==1&&a==2){
        resultado=valor/dolar;
    }
    //Peso a Euro
    else if(de==1&&a==3)
    {
        resultado=valor/euro;  
    }//Dolar a peso
    else if(de==2&&a==1)
    {
        resultado=valor*dolar;
    }//Dolar a euro
    else if(de==2&&a==3)
    {
        resultado=valor*(valor/euro);
    }//Euro a peso
    else if(de==3&&a==1)
    {
        resultado=valor*euro;
    }//Euro a Dolar
    else if(de==3&&==2)
    {
        resultado=valor*(euro/dolar);
    }// peso a peso, dolar a dolar y euro a euro
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="Resultado: $"+rsultado.toFixed(2);
}    
