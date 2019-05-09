var pont = 0;
var card = []
function sortDeck()
{
    var j = 0, count = 0, pont = 0;
    var max = 6;
    for(var i=0 ; i<max ; i++)
    {
        card[i] = "Imagens/card0" + j + ".jpg";
        card[i+max]= "Imagens/card0" + j + ".jpg";
        j++;
    }
    sortCards(card);
    const imgs = document.getElementsByTagName("IMG");
    for (const img of imgs) {
        img.addEventListener("click", clickCard);
    }
    var card_name = [1]
    var card_id = [1]
    function clickCard()
    {
        var src = this.getAttribute("src");
        var id = this.getAttribute("id");
        if(src =="Imagens/back.gif")
        {
            this.setAttribute("src",card[id]);
            this.style.cursor = "default";
            card_name[count] = card[id];
            card_id[count] = id;
            count++;
            if(count==2)
            {
                compareCard(card_name[0],card_name[1],card_id[0],card_id[1]);
                count=0;
            }
        }
    }
}



function random(min, max)
{
    return min+(~~(Math.random()*(max-min)));
}

function sortCards(c)
{
    for(var i=0 ; i<c.length ; i++)
    {
        var index = random(0,c.length);
        var aux = c[i];
        c[i] = c[index];
        c[index] = aux;
    }
}

function compareCard(a,b,a_id,b_id)
{
    if(a==b)
    {
        pont++;
        setTimeout(switchCardWin, 500);
        function switchCardWin()
        {
            document.getElementById(a_id).setAttribute("src","Imagens/done.gif");
            document.getElementById(b_id).setAttribute("src","Imagens/done.gif");
            document.getElementById("score").innerHTML="Score: "+pont;
            checkDeck();
        }
    }else
    {
        setTimeout(switchCardLose, 500);
        function switchCardLose()
        {
            document.getElementById(a_id).setAttribute("src","Imagens/back.gif");
            document.getElementById(b_id).setAttribute("src","Imagens/back.gif");
            document.getElementById(a_id).style.cursor = "pointer";
            document.getElementById(b_id).style.cursor = "pointer";
        }
    }
}

function checkDeck()
{
    var count = 0;
        const imgs = document.getElementsByTagName("IMG");
        for (const img of imgs) 
        {
            if(img.getAttribute("src")=="Imagens/done.gif")
            {
                count++;
            }
        }   
         
    if(count==12)
    {
        location.replace("Pagina_Win/win.html");
    }
}
