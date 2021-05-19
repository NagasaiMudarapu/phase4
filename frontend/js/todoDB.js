function display()
{
    $.get('/tododata', function(data, status){
        console.log("Done") ;
        var x = "<table width=100%>" 
        var pre = "<tr><td><div class=\"input-group mb-3\" style=\"width: 30%; margin-left: auto;margin-right: auto;\"><div class=\"form-control " ;
        for(let i = 0 ; i < data.tasks.length ; i++)
        {
            var st = JSON.stringify(data.tasks[i].task) ;
            console.log(st) ;
            var k = "" ;
            if(st === undefined) continue ;
            if(data.tasks[i].isdel) continue ;
            for(let i = 1 ; i < st.length - 1 ; i++)
            k += st[i] ;
            x += pre ;
            console.log(data.tasks[i].checked) ;
            if(!data.tasks[i].checked)
            x += "un" ;
            x += "checklist\">" ;
            x += k ;
            x += "</div><div class=\"input-group-append\" style=\"width:20%; margin-left: auto;margin-right: auto;\"><button onclick = \"toggle(" + data.tasks[i].id + ")\"  class=\"container btn btn-" ;
            if(!data.tasks[i].checked)
            x += "success\"" ;
            else x += "danger\"" ;
            x += "type=\"button\" id=\"" ;
            x += "lstbtn" + data.tasks[i].id + "\">" ;
            if(!data.tasks[i].checked)
            x += "Check" ;
            else x += "Delete" ;
            x += "</button></div></div></td></tr>"
        }
        x += "</table>" ;
        document.getElementById('list').innerHTML = x ;
    }).fail(function(xhr, status){
        console.log("Failed") ;
    })
}
function toggle(idx)
{
    $.ajax({
        url : `/todoDB/${idx}`,
        type : 'PUT',
        success : function(result){
            console.log(result) ;
        }
    })
    display() ;
}
$(document).ready(function()
{
    display() ;
}) ;