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

        wordIn : function(arr){
            for(var i in arr){
            	this.str.push(arr[i]);
            }
            this.paint();
        },

        isEmpty : function(){
            return(this.str.length == 0);
        },

        wordOut : function(){
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
            each(this.str, function(item){str += ("<div>" + item + "</div>")});
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
            
            //这里要使用闭包，否则永远绑定到指定div上的delete函数的参数永远等于跳出时的i值(length);
            addEvent($("show").childNodes[i], "click", function(i) {
                return function(){return queue.deleteID(i)};
            }(i));
        }
    }
    
    //模糊匹配查询的内容
    function matchWord(){
    	 var input = $("input").value.trim();
    	 var m = new RegExp(input);
    	 for(var i = 0; i < $("show").children.length;i++){
    	 		if(input != '' && $("show").children[i].textContent.match(m)){
    	 		$("show").children[i].style.backgroundColor = 'yellow';
    	 	}
    	 }
    }

    //为3个按钮绑定函数
    addEvent($("word_in"), "click", function() {
        var text = $("text").value.trim();
        var word = text.split(/[^0-9a-zA-Z\U4EOO-\U9FA5]+/g).filter(function(e){
        	if(e.length>0){
        		return true;
        	}else{
        		return false;
        	}
        });
        var arr = queue.str.concat(word);
        queue.wordIn(arr);
    });
    addEvent($("word_out"), "click", function(){queue.wordOut()});
    addEvent($("search"),"click",function(){matchWord()});
