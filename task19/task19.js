//添加事件处理，兼容浏览器差异
function addEvent(element,evevnt,listener){
    if(element.addEventListener){
        element.addEventListener(evevnt,listener,false);
    }
    else if(element.attachEvent){
        element.attachEvent("on",evevnt,listener);
    }
    else{
        element["on" + evevnt] = listener;
    }
}

var $ = function(id){
	return document.getElementById(id);
}
//遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递，后面用
function each(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

 //定义队列的对象
    var queue = {
        str : [],

        tooMany : function(){
            return(this.str.length > 60);
        },

        leftIn : function(num){
            if(!this.tooMany()){
                this.str.unshift(num);
                this.paint();
            }
            else{
                alert("The number of numbers can't beyond 60!");
            }
        },

        rightIn : function(num){
            if(!this.tooMany()){
                this.str.push(num);
                this.paint();
            }
            else{
                alert("The number of numbers can't beyond 60!");
            }
        },

        isEmpty : function(){
            return(this.str.length == 0);
        },

        leftOut : function(){
            if(!this.isEmpty()){
                alert(this.str.shift());
                this.paint();
            }
            else{
                alert("the queue is already empty!");
            }
        },

        rightOut : function(){
            if(!this.isEmpty()){
                alert(this.str.pop());
                this.paint();
            }
            else{
                alert("the queue is already empty!");
            }
        },

        paint : function(){
            var str = "";
            each(this.str, function(item){str += ("<div style='height:" +parseInt(item)*2+ "px; background-color:" +colorRandom()+ "'>" + parseInt(item) + "</div>")});
            $("show").innerHTML = str;
            addDivDelEvent();
        },

        deleteID : function(id){
            this.str.splice(id,1);
            this.paint();
        }

    }

    //获取随机的颜色
    function colorRandom(){
        var colors = ['#E0FFFF', '#FFFFF0', '#FFF0F5', '#FFFFE0', '#F8F8FF', '#FAFAD2'];
        var i = Math.floor(Math.random()*10);
        return colors[i];
    }
    
     //为container中的每个div绑定删除函数
    function addDivDelEvent() {
        for (var i = 0; i < $("show").childNodes.length; i++) {
            
            //这里要使用闭包，否则永远绑定到指定div上的delete函数的参数永远等于跳出时的cur值(length);
            addEvent($("show").childNodes[i], "click", function(i) {
                return function(){return queue.deleteID(i)};
            }(i));
        }
    }
    
    //排序算法
    function dataSort(){
        var timer;
        var count = 0, i = 0;
        timer = setInterval(function() {
            if (count >= queue.str.length) {
                clearInterval(timer);
            }
            if (i == queue.str.length - 1 - count) {
                i = 0;
                count++;
            }
            if (queue.str[i] > queue.str[i + 1]) {
                var temp = queue.str[i];
                queue.str[i] = queue.str[i + 1];
                queue.str[i + 1] = temp;
                queue.paint();
            }
            i++;
        }, 100);
    }

    //随机生成一组数据
    function randomData(){
        for(var i = 0;i <= 40;i++){
            queue.str[i] = Math.floor(Math.random()*90 + 10);
            queue.paint();
        }
    }
    
    //为6个按钮绑定函数
    addEvent($("left_in"), "click", function() {
        var input = $("input").value;
        if (input >= 10 && input <= 100){
            queue.leftIn(input);
        }
        else {
            alert("Out of range!");
        }
    });
    addEvent($("right_in"), "click", function() {
        var input = $("input").value;
        if (input >= 10 && input <= 100){
            queue.rightIn(input);
        }
        else {
            alert("Out of range!");
        }
    });
    addEvent($("left_out"), "click", function(){queue.leftOut()});
    addEvent($("right_out"), "click", function(){queue.rightOut()});
    addEvent($("sort"),"click",function(){dataSort()});
    addEvent($("random"),"click",function(){randomData()});
