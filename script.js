var n1 = document.querySelector("button#1")
var n2 = document.querySelector("button#2")
var n3 = document.querySelector("button#3")
var n4 = document.querySelector("button#4")
var n5 = document.querySelector("button#5")
var n6 = document.querySelector("button#6")
var n7 = document.querySelector("button#7")
var n8 = document.querySelector("button#8")
var n9 = document.querySelector("button#9")
var n0 = document.querySelector("button#0")
var txtresul= document.querySelector("input#txtN").value
var somas = document.querySelector("button#soma")
var numeros= n1,n2,n3,n4,n5,n6,n7,n8,n9,n0
function soma(){
    if(n1==1 && n2==2){
        txtresul= n1+n2;
    }
}
switch(numeros){
    case n0:
        n0=0;
        document.getElementById("txtN").value=0
        txtresul=somas.addEventListener("click",soma)
        break;
    case n1:
        n1=1
        document.getElementById("txtN").value=1
        txtresul=n1

}