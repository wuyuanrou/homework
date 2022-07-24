var btn=document.getElementsByClassName("btn");
var text=document.getElementById("text");
var res=[];//全局变量res运算数组
var flag=false;//flag表示是数字/小数点还是运算符号，用来防止连续输入运算符号

for(var i=0;i<btn.length;i++){
    btn[i].onclick=addClick;
    function addClick(){
        //数字和小数点
        if(!isNaN(this.innerHTML) || this.innerHTML=="."){
            flag=true;
            //初值不为0
            if(text.value!==""){
                if(text.value.indexOf(".")!==-1){//即已有小数点，没有的话indexOf返回-1，这句是如果indexOf不返回-1
                    if(this.innerHTML!=="."){
                        text.value+=this.innerHTML;
                    }//如果加的不是点，是数字，就正常加到text.value里
                    //如果是点，就不加，无任何操作
                }else{
                    text.value+=this.innerHTML;
                }
            }
            //初值为0
            else{
                if(this.innerHTML=="."){
                    text.value=this.innerHTML;//是点就以0作为整数位
                }else{
                    text.value=this.innerHTML;
                }
            }
        }
        //运算符号，每按一次运算符都会break退出当前循环
        else{
            switch (this.innerHTML){
                case "+":
                    save(this);
                    break;
                case "-":
                    save(this);
                    break;
                case "*":
                    save(this);
                    break;
                case "/":
                    save(this);
                    break;
                case "=":
                    res.push(text.value);//push到数组运算
                    console.log(res.join(''));
                    var result=eval(res.join(''));//把运算数组转成字符串再得出结果
                    if(result===Infinity){
                        remove_add("remove");
                    }
                    text.value=result==Infinity? "除数不能为0":result;
                    res=[];//清空运算数组，为下一次运算做准备
                    break;
                case "清除":
                    text.value=text.value.length==1? "":text.value.substr(0, text.value.length-1);//substr返回一个字符串指定的子串
                    break;
                case "AC":
                    text.value="";//恢复默认值
                    res=[];//清空运算数组
                    remove_add("add");//循环从头开始（？）
                    break;
            }
        }
    }
}

//保存运算符
function save(m){
    //如果上一次输入是运算符（flag=false）
    if(!flag){
        res[res.length-1]=m.innerHTML;//把运算数组最后一个元素，也就是上一次的运算符改为这次输入的运算符
    }
    //如果上一次输入是数字或小数点（flag=true）
    else{
        res.push(text.value);//把text-value目前存的数字push进运算数组
        res.push(m.innerHTML);//再把这次输入的运算符push进运算数组
    }
    text.value="";//恢复为默认0
    flag=false;//flag值恢复为false
}

function remove_add(p){
    for(var i=0;i<btn.length;i++){
        if(p=="add"){
            btn[i].onclick=addClick;//相当于第一个大循环从头开始，开始新的一次运算
        }else{
            //相当于p==remove的时候
            //按除AC以外的键都没有反应，必须要按AC键
            if(btn[i].innerHTML!="AC"){
                btn[i].onclick=null;
            }
        }
    }
}