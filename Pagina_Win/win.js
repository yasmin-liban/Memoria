function color(){
    console.log("oi");
    var n = 0;
    setTimeout(colorize, 400)
    function colorize()
    {
        if(n==0)
        {
            console.log(n)
            document.getElementById("win").style.color = "#4286f4" 
            n = 1;
            setTimeout(colorize, 400) 
        }
        else{
            if(n==1)
            {
                console.log("pink")
                document.getElementById("win").style.color = "#e54776"
                n = 2;
                setTimeout(colorize, 400)
            }
            else{
                if(n==2)
                {
                    console.log("green")
                    document.getElementById("win").style.color = "#2ea539"
                    n = 3;
                    setTimeout(colorize, 400)
                }
                else{
                    if(n==3)
                    {
                        console.log("yellow")
                        document.getElementById("win").style.color = "white"
                        n = 4;
                        setTimeout(colorize, 400)
                    }
                    else{
                        if(n==4)
                        {
                            document.getElementById("win").style.color = "#000000"
                            n = 0;
                            setTimeout(colorize, 400)
                        }
                    }
                }
            }
        }
    }
}

function redirect()
{
    location.replace("../index.html");
}
