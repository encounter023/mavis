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

        leftIn : function(num){
            this.str.unshift(num);
            this.paint();
        },

        rightIn : function(num){
            this.str.push(num);
            this.paint();
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
            each(this.str, function(item){str += ("<div>" + parseInt(item) + "</div>")});
            $("show").innerHTML = str;
            addDivDelEvent();
        },

        deleteID : function(id){
            this.str.splice(id,1);
            this.paint();
        }

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
    
    //为4个按钮绑定函数
    addEvent($("left_in"), "click", function() {
        var input = $("input").value;
        if ((/^[0-9]+$/).test(input)) {
            queue.leftIn(input);
        }
        else {
            alert("Please enter an interger!");
        }
    });
    addEvent($("right_in"), "click", function() {
        var input = $("input").value;
        if ((/^[0-9]+$/).test(input)) {
            queue.rightIn(input);
        }
        else {
            alert("Please enter an interger!");
        }
    });
    addEvent($("left_out"), "click", function(){queue.leftOut()});
    addEvent($("right_out"), "click", function(){queue.rightOut()});
