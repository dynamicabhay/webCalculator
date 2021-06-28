let styles = [
    {
        bgColor:  "hsl(222, 26%, 31%)",
        bgToggle: "hsl(223, 31%, 20%)",
        bgToggleBtn: "red",
        bgKeypad: "hsl(223, 31%, 20%)",
        bgScreen: "hsl(224, 36%, 15%)",
        resetColor: "hsl(225, 21%, 49%)",
        resetShadow: "hsl(224, 28%, 35%)",
        delShadow: "hsl(224, 28%, 35%)",
        delColor: "hsl(225, 21%, 49%)",
        screenText: "white",
        equalColor: "hsl(6, 63%, 50%)",
        equalKeyShadow: "hsl(6, 70%, 34%)",
        keyColor: "hsl(221, 14%, 31%)",
        keyBgColor: "white",
        textColor: "white",
        calcColor: "white",
        themeColor: "white",
        keyShadow: " hsl(28, 16%, 65%)"


    },

    {
        bgColor:  "hsl(0, 0%, 90%)",
        bgToggle: "hsl(0, 5%, 81%)",
        bgToggleBtn: "orange",
        bgKeypad: "hsl(0, 5%, 81%)",
        screenText: "black",
        bgScreen: "hsl(0, 0%, 93%)",
        resetColor: "hsl(185, 42%, 37%)",
        resetShadow: "hsl(185, 58%, 25%)",
        delColor: "hsl(185, 42%, 37%)",
        delShadow: "hsl(185, 58%, 25%)",
        equalColor: "hsl(25, 98%, 40%)",
        equalKeyShadow: "hsl(25, 99%, 27%)",
        keyColor: "black",
        keyBgColor: "hsl(45, 7%, 89%)",
        textColor: "white",
        calcColor: "black",
        themeColor: "black",
        keyShadow: "hsl(35, 11%, 61%)"
    },

    {
        bgColor:  "hsl(268, 75%, 9%)",
        bgToggle: "hsl(268, 71%, 12%)",
        bgToggleBtn: "cyan",
        screenText: "white",
        bgKeypad: "hsl(268, 71%, 12%)",
        bgScreen: "hsl(268, 71%, 12%)",
        resetColor: "hsl(281, 89%, 26%)",
        resetShadow: "hsl(285, 91%, 52%)",
        delColor: "hsl(281, 89%, 26%)",
        delShadow: "hsl(285, 91%, 52%)",
        equalColor: "hsl(177, 92%, 70%)",
        equalKeyShadow: "hsl(177, 92%, 70%)",
        keyColor: "hsl(52, 100%, 62%)",
        keyBgColor: "hsl(268, 47%, 21%)",
        textColor: "white",
        calcColor: "hsl(52, 100%, 62%)",
        themeColor: "hsl(52, 100%, 62%)",
        keyShadow: " hsl(290, 70%, 36%)"
        
    }
]
let write_cnt = 0;
let diffBtn = ["del", "resetBtn", "equalsBtn"]
let calc = document.querySelector("#calc")
let theme = document.querySelector("#theme")
let tgnum = document.querySelectorAll(".nums span")
let tgSurface = document.querySelector(".toggleSurface")
let tgBtn = document.querySelector("#toggleBtn")
let screen = document.querySelector(".sCnt")
let keypad = document.querySelector(".keypad")
let buttons = document.querySelectorAll(".keypad button")
let reset = document.querySelector("#resetBtn")
let equal = document.querySelector("#equalsBtn")
let del = document.querySelector("#del")
let content = document.querySelector(".content")
let symbols = ["+","X","-","/"]




let tgl = document.querySelector('#toggleBtn')
let count =0;
tgl.addEventListener('click',toggle)
function toggle(e){
    if (count%3===0){
        tgl.style.left = "23px";
        changeTheme(1,styles);

    }
    if (count%3===1){
        tgl.style.left = "46px";
        changeTheme(2,styles);
    }
    if (count%3===2){
        tgl.style.left = "0px";
        changeTheme(0,styles);
    }
    count++;



}

function changeTheme(i,styles){
    let style = styles[i];
    document.body.style.backgroundColor = style.bgColor;
    calc.style.color = style.calcColor;
    theme.style.color = style.themeColor;
    for(num of tgnum){
        if (i===0){
        num.style.color = "white";
        }else{
            num.style.color = style.keyColor;
        }
    }
    tgSurface.style.backgroundColor = style.bgToggle;
    tgBtn.style.backgroundColor = style.bgToggleBtn;
    screen.style.backgroundColor = style.bgScreen;
    keypad.style.backgroundColor = style.bgKeypad;

    for(btn of buttons){
        btn.style.backgroundColor = style.keyBgColor;
        btn.style.color = style.keyColor;
        btn.style.borderTop = "none";
        btn.style.borderLeft = "none";
        btn.style.borderRight = "none";

        btn.style.borderColor = style.keyShadow;
    }

    reset.style.backgroundColor = style.resetColor;
    reset.style.borderColor = style.resetShadow;
    reset.style.color="white";
    equal.style.backgroundColor = style.equalColor;
    equal.style.color = "white";
    equal.style.borderColor = style.equalKeyShadow;
    del.style.backgroundColor = style.delColor;
    del.style.borderColor = style.delShadow;
    del.style.color = "white";
    content.style.color = style.screenText;
    
    
}

for(btn of buttons){
    if(!diffBtn.includes(btn.id))
      {btn.addEventListener('click',write);}
}
function write(e){
    if (content.innerText==0){
        content.innerText =  e.target.innerText;
    }else{
   content.innerText +=  e.target.innerText;}
   
}

del.addEventListener('click',remove)

function remove(e)
{
        content.innerText = content.innerText.slice(0,content.innerText.length - 1)
        if(content.innerText===""){
            content.innerText=0;
        }
    
}

reset.addEventListener('click',resetting)

function resetting(e){
    content.innerText = 0;
}

equal.addEventListener('click',calci)

function calci(e){
    
    if (content.innerText.includes("+")){
            let index =  content.innerText.indexOf('+');
            pre = parseInt(content.innerText.slice(0,index));
            post = parseInt(content.innerText.slice(index+1,));
            content.innerText = pre + post;
        
    }

    if (content.innerText.includes("X")){
        let index =  content.innerText.indexOf('X');
        pre = parseInt(content.innerText.slice(0,index));
        post = parseInt(content.innerText.slice(index+1,));
        content.innerText = pre * post;
    
}

if (content.innerText.includes("-")){
    let index =  content.innerText.indexOf('-');
    pre = parseInt(content.innerText.slice(0,index));
    post = parseInt(content.innerText.slice(index+1,));
    content.innerText = pre - post;

}

if (content.innerText.includes("/")){
    let index =  content.innerText.indexOf('/');
    pre = parseInt(content.innerText.slice(0,index));
    post = parseInt(content.innerText.slice(index+1,));
    content.innerText = pre / post;

}
}