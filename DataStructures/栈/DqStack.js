/*
javascript实现多栈共享技术，即双端栈
 */
function DqStack(){
	this.dataStore = [];
	this.top = [2];   //top[0]和top[1]分别为两个栈顶指示器

	this.top[0] = -1;
	this.top[1] = 10;
    
    //双端顺序栈进栈操作
	this.push = function(i,x){
		//将元素x压入i号堆栈
		if(this.top[0]+1 == this.top[1]){
			return false;   //栈已满
		}
		switch(i){
			case 0:     //0号栈
			this.top[0]++;
			this.dataStore[this.top[0]] = x;
			break;

			case 1:    //1号栈
			this.top[1]--;
			this.dataStore[this.top[1]] = x;
			break;
			default:
			return false;
		}
		return true;
	}

	//双都按顺序栈出栈操作
	this.pop = function(i){
		//从i号堆栈中弹出栈顶元素并送达x中
		switch(i){
			case 0:
			if(this.top[0] == -1)
				return false;
			x = this.dataStore[this.top[0]];
			this.top[0]--;
			break;

			case 1:
			if(this.top[1] == 10)
				return false;
			x = this.dataStore[this.top[1]];
			this.top[1]++;
			break;

			default:
			return false;
		}
		return true;
	}
}

var stack = new DqStack();
var x;
stack.push(0,2);
stack.push(0,3);
stack.push(0,5);
stack.push(1,9);
stack.push(1,10);
stack.pop(0,x);
console.log(stack.dataStore);
console.log(x);