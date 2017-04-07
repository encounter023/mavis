/*
链栈，采用链表作为存储结构实现的栈
 */

//定义节点类
function Node(elem){
	this.data = elem;
	this.next = null;
}

//链栈的实现
function LinkStack(){
	var top = new Node(null);   //建立头节点，指针域为空
    
    //链栈进栈操作
	this.push = function(top,x){
		//将数据元素x压入栈top中
		var temp = new Node(x);
		if(temp == null)
			return false;    //申请空间失败
		temp.data = x;     
		temp.next = top.next;    //修改当前栈顶指针
		top.next = temp;
		return true;
	}

	//链栈出战操作
	this.pop = function(top,x){
		//将栈top的栈顶元素弹出，放到x所指的存储空间中
		var temp = top.next;
		if(temp == null)
			return false;
		top.next = temp.next;
		x = temp.data;
		delete this.temp;
		return true;
	}

	/*
	多栈运算
	 */
	this.dataStore = [];  //存储多个链栈的栈顶指针
    this.top = [];
	//第i号栈的进栈操作
	this.pushi =function(i,x){
		var temp = new Node(x);
		top[i] = new Node(null);
		if(temp == null)
			return false;
		temp.data = x;
		temp.next = top[i].next;
		top[i].next = temp;
		return true;
	}

	//第i号栈的出栈操作
	this.popi = function(i,x){
		var temp;
		temp = top[i].next;
		if(temp == null)
			return false;
		top[i].next = temp.next;
		x = temp.data;
		delete this.temp;
		return true;
	}

}
