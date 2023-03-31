
var divs = document.querySelectorAll(".dv")
var dv1 = document.querySelector(".dv1")
var dv2 = document.querySelector(".dv2")
var dv3 = document.querySelector(".dv3")
var dv4 = document.querySelector(".dv4")
var dv5 = document.querySelector(".dv5")
var dv6 = document.querySelector(".dv6")
var dv7 = document.querySelector(".dv7")
var dv8 = document.querySelector(".dv8")
var dv9 = document.querySelector(".dv9")
var div_x = document.querySelector(".div_x")
var div_o = document.querySelector(".div_o")
var player_x = document.querySelector(".player_x")
var player_o = document.querySelector(".player_o")
var score_x = document.querySelector(".score_x")
var score_o = document.querySelector(".score_o")
var turn_x = document.querySelector(".turn_x")
var turn_o = document.querySelector(".turn_o")
var new_round = document.querySelector(".new_round")
var new_game = document.querySelector(".new_game")
var main = document.querySelector(".main")

var xxx = 0
var ooo = 0
var counter = 0

for(var i of divs){
    i.addEventListener("click", function(){
        //XO
        if(this.innerHTML == ""){
            if(counter%2==0){
               this.innerHTML = "X"
               this.style.pointerEvents = "none"
               div_x.style.borderBottom = "1px solid var(--gray)"
               player_x.style.color = "var(--white)"
               turn_x.innerHTML = ""
               div_o.style.borderBottom = "1px solid var(--pink)"
               player_o.style.color = "var(--pink)"
               turn_o.innerHTML = "Turn"
               player_o.style.transition = "0.2s"
            }
            else{
                this.innerHTML = "O"
                this.style.pointerEvents = "none"
                div_o.style.borderBottom = "1px solid var(--gray)"
                player_o.style.color = "var(--white)"
                turn_o.innerHTML = ""
                div_x.style.borderBottom = "1px solid var(--pink)"
                player_x.style.color = "var(--pink)"
                turn_x.innerHTML = "Turn"
                player_x.style.transition = "0.2s"
            }
        }
        //X wins
        if(dv1.innerHTML == "X" && dv2.innerHTML == "X" && dv3.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv1.style.backgroundColor = "var(--aqua)"
            dv2.style.backgroundColor = "var(--aqua)"
            dv3.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
            i.style.pointerEvents = "none"
            }
        }
        if (dv4.innerHTML == "X" && dv5.innerHTML == "X" && dv6.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv4.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv6.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv7.innerHTML == "X" && dv8.innerHTML == "X" && dv9.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv7.style.backgroundColor = "var(--aqua)"
            dv8.style.backgroundColor = "var(--aqua)"
            dv9.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv1.innerHTML == "X" && dv4.innerHTML == "X" && dv7.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv1.style.backgroundColor = "var(--aqua)"
            dv4.style.backgroundColor = "var(--aqua)"
            dv7.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv2.innerHTML == "X" && dv5.innerHTML == "X" && dv8.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv2.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv8.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv3.innerHTML == "X" && dv6.innerHTML == "X" && dv9.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv3.style.backgroundColor = "var(--aqua)"
            dv6.style.backgroundColor = "var(--aqua)"
            dv9.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv1.innerHTML == "X" && dv5.innerHTML == "X" && dv9.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv1.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv9.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            } 
        }
        if (dv3.innerHTML == "X" && dv5.innerHTML == "X" && dv7.innerHTML == "X"){
            xxx++
            score_x.innerHTML = xxx
            player_o.style.color = "var(--white)"
            div_o.style.borderBottom = "1px solid var(--gray)"
            div_x.style.border = "1px solid var(--pink)"
            turn_x.innerHTML = "Winner"
            score_x.style.color = "var(--pink)"
            turn_o.innerHTML = ""
            dv3.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv7.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        //O wins
        if(dv1.innerHTML == "O" && dv2.innerHTML == "O" && dv3.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv1.style.backgroundColor = "var(--aqua)"
            dv2.style.backgroundColor = "var(--aqua)"
            dv3.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            } 
        }
        if (dv4.innerHTML == "O" && dv5.innerHTML == "O" && dv6.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv4.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv6.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            } 
        }
        if (dv7.innerHTML == "O" && dv8.innerHTML == "O" && dv9.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv7.style.backgroundColor = "var(--aqua)"
            dv8.style.backgroundColor = "var(--aqua)"
            dv9.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv1.innerHTML == "O" && dv4.innerHTML == "O" && dv7.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv1.style.backgroundColor = "var(--aqua)"
            dv4.style.backgroundColor = "var(--aqua)"
            dv7.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv2.innerHTML == "O" && dv5.innerHTML == "O" && dv8.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv2.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv8.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if(dv3.innerHTML == "O" && dv6.innerHTML == "O" && dv9.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv3.style.backgroundColor = "var(--aqua)"
            dv6.style.backgroundColor = "var(--aqua)"
            dv9.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv1.innerHTML == "O" && dv5.innerHTML == "O" && dv9.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv1.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv9.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }
        if (dv3.innerHTML == "O" && dv5.innerHTML == "O" && dv7.innerHTML == "O"){
            ooo++
            score_o.innerHTML = ooo
            player_x.style.color = "var(--white)"
            div_x.style.borderBottom = "1px solid var(--gray)"
            div_o.style.border = "1px solid var(--pink)"
            turn_o.innerHTML = "Winner"
            score_o.style.color = "var(--pink)"
            turn_x.innerHTML = ""
            dv3.style.backgroundColor = "var(--aqua)"
            dv5.style.backgroundColor = "var(--aqua)"
            dv7.style.backgroundColor = "var(--aqua)"
            main.style.width = "90%"
            main.style.height = "90%"
            for(var i of divs){
                i.style.pointerEvents = "none"
            }
        }   
    counter++        
    })
}

// new round
new_round.addEventListener("click",function(){
    for(var i of divs){
        if(i.innerHTML == "X"){
            i.innerHTML = ""
        }
        if(i.innerHTML == "O"){
            i.innerHTML = ""
        }
        if(i.style.backgroundColor = "var(--aqua)"){
            i.style.backgroundColor = ""
        }
        if (i.style.pointerEvents = "none"){
            i.style.pointerEvents = "auto"
        }
    }  
    if (counter%2!=0){
        div_x.style.border = "1px solid var(--gray)"
        div_o.style.borderBottom = "1px solid var(--pink)"
        player_o.style.color = "var(--pink)"
        turn_x.innerHTML = ""
        turn_o.innerHTML = "Start"
    }
    else{
        div_o.style.border = "1px solid var(--gray)"
        div_x.style.borderBottom = "1px solid var(--pink)"
        player_x.style.color = "var(--pink)"
        turn_o.innerHTML = ""
        turn_x.innerHTML = "Start"
    }
    score_x.style.color = "var(--lite-gray)"
    score_o.style.color = "var(--lite-gray)"
    main.style.width = "100%"
    main.style.height = "100%"
})

// new game
new_game.addEventListener("click",function(){
    xxx = 0
    ooo = 0
    score_x.innerHTML = "-"
    score_o.innerHTML = "-"
    for(var i of divs){
        if(i.innerHTML == "X"){
            i.innerHTML = ""
        }
        if(i.innerHTML == "O"){
            i.innerHTML = ""
        }
        if(i.style.backgroundColor = "var(--aqua)"){
            i.style.backgroundColor = ""
        }
        if (i.style.pointerEvents = "none"){
            i.style.pointerEvents = "auto"
        }
    } 
    if (counter%2!=0){
        div_x.style.border = "1px solid var(--gray)"
        div_o.style.borderBottom = "1px solid var(--pink)"
        player_o.style.color = "var(--pink)"
        turn_x.innerHTML = ""
        turn_o.innerHTML = "Start"
    }
    else{
        div_o.style.border = "1px solid var(--gray)"
        div_x.style.borderBottom = "1px solid var(--pink)"
        player_x.style.color = "var(--pink)"
        turn_o.innerHTML = ""
        turn_x.innerHTML = "Start"
    }
    score_x.style.color = "var(--lite-gray)"
    score_o.style.color = "var(--lite-gray)"
    main.style.width = "100%"
    main.style.height = "100%"
})
