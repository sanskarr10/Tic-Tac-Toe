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

function checkWinner(flag)
{
    // const winIndex = [
    //     [0,3,6],
    //     [1,4,7],
    //     [2,5,8],
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,4,8],
    //     [2,4,6]
    // ];

    // for(let i=0; i < winIndex.length; i++)
    // {
    //     let [a,b,c] = winIndex[i];
    //     if(state[a]==state[b] && state[a]==state[b])
    //     {
    //         if( state[a]=="X" || state[a]=="0" &&
    //             state[b]=="X" || state[b]=="0" &&
    //             state[c]=="X" || state[c]=="0"
    //         )
    //         {
    //             winner.innerHTML = flag ? "Winner X" : "Winner O";
    //             setDisable();
    //         }
    //     }
    //     else
    //     {
    //         let i;
    //         var count=0;
    //         for(i=0;i<9;i++)
    //         {
    //             if(state[i]==1 || state[i]==0)
    //             {
    //                 count++;
    //             }
    //         }
    //         if(count==0)
    //         {
    //             winner.innerHTML = "Draw";
    //         }
    //     }
    // }
    if(state[0]==state[3] && state[0]==state[6])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
       
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(0,3,6);
    }
    else if(state[1]==state[4] && state[1]==state[7])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(1,4,7);
    }
    else if(state[2]==state[5] && state[2]==state[8])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(2,5,8);
    }
    else if(state[0]==state[1] && state[0]==state[2])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(0,1,2);
    }
    else if(state[3]==state[4] && state[3]==state[5])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(3,4,5);
    }
    else if(state[6]==state[7] && state[6]==state[8])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(6,7,8);
    }
    else if(state[0]==state[4] && state[0]==state[8])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(0,4,8);
    }
    else if(state[2]==state[4] && state[2]==state[6])
    {
        winner.innerHTML = flag ? "Winner X" : "Winner O";
        setDisable();
        setTimeout(resetGame,5000);
        patternMatch(2,4,6);
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

function restartGame()
{
    var choice = confirm("are you sure you want to restart the match");
    if(choice)
    {
        location.reload();
    }
}

function resetGame()
{
    var i;
    flag=true;
    state = [1,0,1,1,1,0,0,1,0];
    for(i=0;i<9;i++)
    {
        document.getElementById(i).innerText = "";
        document.getElementById(i).style.backgroundColor="#ddd";
    }
    winner.innerHTML = "";
}

function patternMatch(a,b,c)
{
    document.getElementById(a).style.backgroundColor="yellow";
    document.getElementById(b).style.backgroundColor="yellow";
    document.getElementById(c).style.backgroundColor="yellow";
}

document.getElementById('game').style.display="none";
function startGame()
{

    if(true)
    {
        document.getElementById('user_page').style.display="none";
    }
    if(true)
    {
        document.getElementById('game').style.display="block";
    }
    
}


