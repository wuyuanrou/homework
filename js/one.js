function add(){
    var btn = document.getElementById('btn');
    var ul = document.querySelector("ul");//获取ul表格

    btn.onclick = function (){
        var newThing = document.getElementById("newThing");
        if(newThing.value===""){
            console.log("请输入待办事项");
            return false;
        }else{
            console.log(newThing.value);//打印输入的内容

            var newLi = document.createElement("li");//先创建一个新的li
            var newBtn = document.createElement("button");

            newLi.innerHTML=newThing.value;//再赋值，把input输入的内容赋给新的li
            newLi.style.justifyContent="space-around";
            //newBtn.style.content="&#10006";
            newLi.appendChild(newBtn);
            ul.appendChild(newLi);//添加到ul表
            //ul[0].insertBefore(newLi, ul[0].children[0]);//插到第一位
            alert("添加成功");

            //console.log(ul[0].children)打印ul的子节点
            //lis=document.getElementsByTagName("li");
        }
    }
}

function done(){
    var done_li=document.getElementById("banzhuan");
    done_li.style.backgroundColor="pink";
    done_li.style.textDecoration="line-through";
    //this.style.content="&#1003";
}

function del(){
    var btn=document.getElementsByClassName("delete");
    for(let i=0;i<btn.length;i++){
        let parentli=btn[i].parentNode;
        btn[i].onclick=function (){
            btn[i].parentNode.parentNode.removeChild(parentli);
        }
    }
}

