
let x = 0;
function Nav()
{ 
    x = 1-x;
    if (x == 1)
    {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    else
    {
        if (x == 0)
        {
            document.getElementById("mySidebar").style.width = "0px";
            document.getElementById("main").style.marginLeft = "0px";
        }
    }
}
