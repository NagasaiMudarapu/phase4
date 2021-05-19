var checked = {} ;
function display()
{
    var x = "<table width=100%>" 
    var pre = "<tr><td><div class=\"input-group mb-3\" style=\"width: 30%; margin-left: auto;margin-right: auto;\"><div class=\"form-control " ;
    for(let i = 1 ; i <= 100 ; i++)
    {
        var st = JSON.stringify(localStorage[i]) ;
        var k = "" ;
        if(st === undefined) continue ;
        for(let i = 1 ; i < st.length - 1 ; i++)
        k += st[i] ;
        x += pre ;
        if(!checked[i])
        x += "un" ;
        x += "checklist\">" ;
        x += k ;
        x += "</div><div class=\"input-group-append\" style=\"width:20%; margin-left: auto;margin-right: auto;\"><button onclick = \"toggle(" + i + ")\"  class=\"container btn btn-" ;
        if(!checked[i])
        x += "success\"" ;
        else x += "danger\"" ;
        x += "type=\"button\" id=\"" ;
        x += "lstbtn" + i + "\">" ;
        if(!checked[i])
        x += "Check" ;
        else x += "Delete" ;
        x += "</button></div></div></td></tr>"
    }
    x += "</table>" ;
    document.getElementById('list').innerHTML = x ;
}
function toggle(idx)
{
    if(checked[idx] === false) checked[idx] = true ;
    else localStorage.removeItem(idx) ;
    display() ;
}
$(document).ready(function()
{
    var cnt = 1 ;
    // localStorage.clear() ;
    display() ;
    $('#add').click(function()
    {
        var item = $('#name').val() ;
        if(item == "")
        alert("Enter a task") ;
        else 
        {
            localStorage.setItem(cnt, item) ;
            console.log(localStorage) ;
            checked[cnt] = false ;
            cnt++ ;
            display() ;
        }
    }) ;
}) ;