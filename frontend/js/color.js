function color()
{
    var r = document.getElementById("redc").value ;
    var g = document.getElementById("greenc").value ;
    var b = document.getElementById("bluec").value ;
    var R = Number(r).toString(16) ;
    var G = Number(g).toString(16) ;
    var B = Number(b).toString(16) ;
    if(R.length == 1) R = "0" + R ;
    if(G.length == 1) G = "0" + G ;
    if(B.length == 1) B = "0" + B ;
    var RGB = "#" + R + G + B ;
    var tot = Number(r) + Number(g) + Number(b) ;
    if(tot <= 341)
    document.getElementById("rgb").style.color = "white" ;
    else document.getElementById("rgb").style.color = "black" ;
    document.getElementById("colordiv").style.backgroundColor = RGB ;
    var x = "rgb(" + r + ", " + g + ", " + b + ")"
    document.getElementById("rgb").innerHTML = x ;
} ;