//初始化stack类
function Stack(){ 
	//用一维数组存储数据元素
	this.dataStore = [];
	this.top = -1;   //存储栈顶元素

	//进栈操作
	this.push = function(e){
		this.top++;
		this.dataStore[this.top] = e;
	}

    //出栈操作
	this.pop = function(){
		if(this.top == -1){
			return false;   //栈为空
		}
		else{
			this.dataStore.pop();
			this.top--;
			return true;
		}
	}

    //读取栈顶元素
    this.getTop = function(){
    	if(this.top == -1){
    		return false;
    	}
    	else{
    		return this.dataStore[this.top];
    	}
    }

    //

}

var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(8);
stack.pop();
console.log(stack.dataStore);