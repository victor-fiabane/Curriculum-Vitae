function cos(){
    a = parseInt(document.f1.val1.value)*
    (Math.PI/180);  
    document.f1.val2.value = Math.cos(a);
}
function sin(){
    a = parseInt(document.f1.val1.value)*
    (Math.PI/180);
    document.f1.val2.value = Math.sin(a);
}
function tan(){
    a = parseInt(document.f1.val1.value)*
    (Math.PI/180);
    document.f1.val2.value = Math.tan(a);
}
function sqrt(){
    a = document.f1.val1.value;
    document.f1.val2.value = Math.sqrt(parseInt(a));
}
function log(){
    a = document.f1.val1.value;
    document.f1.val2.value = Math.log(parseInt(a));
}
function exp(){
    a = document.f1.val1.value;
    document.f1.val2.value = Math.exp(parseInt(a));
}