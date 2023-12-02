//var a = 0;
var flag=true;
var state = [1,0,1,1,1,0,0,1,0];
var winner = document.getElementById("winnerDiv")
document.getElementById('main-board').addEventListener('click', (event) => {
    // console.log(event.target);
    // console.log(event.target.id);

    /*if(a%2==0){
        document.getElementById(event.target.id).innerText = "X";
    }
    else{
        document.getElementById(event.target.id).innerText = "O";
    }
    a++;*/
   
    var id = event.target.id;
    setVal(id);
    
    
    console.log(state);
});


function setVal(id)
{
    if(flag)
    {
        if(state[id]== 1 || state[id]== 0 )
        {
            document.getElementById(id).innerText = "X";
            state[id]="X";
            checkWinner(flag);
            flag=!flag;
        }

    }
    else
    {
        if(state[id]== 1 || state[id]== 0 )
        {
            document.getElementById(id).innerText = "O";
            state[id]="O";
            checkWinner(flag);
            flag=!flag;
        }
    }
}

function checkWinner()
{
    if(state[0]==state[3] && state[0]==state[6])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else if(state[1]==state[4] && state[1]==state[7])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else if(state[2]==state[5] && state[2]==state[8])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else if(state[0]==state[1] && state[0]==state[2])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else if(state[3]==state[4] && state[3]==state[5])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else if(state[6]==state[7] && state[6]==state[8])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else if(state[0]==state[4] && state[0]==state[8])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else if(state[2]==state[4] && state[2]==state[6])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable()
    }
    else
    {
        var i;
        var count=0;
        for(i=0;i<9;i++)
        {
            if(state[i]==1 || state[i]==0)
            {
                count++;
            }
        }
        if(count==0)
        {
            winner.innerHTML = "Draw";
        }
        
    }
}

function setDisable()
{
    var i;
    for(i=0;i<9;i++)
    {
        if(state[i]==1 || state[i]==0)
        {
            state[i]=null;
        } 
    }
}
