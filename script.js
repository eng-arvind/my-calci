const mycalculator = document.querySelector(".mycal");
const myKeys =[["1","2","3","+"],["4","5","6","-"],["7","8","9","*"],["C","0","=","/"]];
const myoper = ["+","-","*","/"];
let myOut;
document.addEventListener("DOMContentLoaded",function(){
    myOut = document.createElement("div");
    myOut.innerHTML = "0";
    myOut.classList.add("output");
    mycalculator.appendChild(myOut);
    for(let y=0;y<myKeys.length;y++)
    {
        let div = document.createElement("div");
        div.classList.add("row");
        for(let x=0;x<myKeys[y].length;x++)
        {
            let btn = document.createElement("div");
            btn.innerHTML = myKeys[y][x];
            btn.classList.add("btn");
            btn.addEventListener("click",btnHit);
            div.appendChild(btn);
        }
        mycalculator.appendChild(div);

    }
})
function btnHit(e){
    let value=this.innerText;
    let myCal = myOut.innerText;
    if(myCal=="0")
    {
        myCal="";
    }
    if(value=="=")
    {
        myCal = eval(myCal);
    }
    else if(value=="C")
    {
        myCal="0";
    }
    else
    {
    let lastchar = myCal.substring(myCal.length-1);

    if(myoper.includes(value))
    {
        if(myoper.includes(lastchar))
        {
            myCal = myCal.substring(0,myCal.length-1);

        }
        else{
            myCal = eval(myCal);
        }
    }
    myCal = myCal + value;
    }
    myOut.innerHTML = myCal;

}