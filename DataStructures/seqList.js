//定义线性表的顺序存储结构
function SeqList(){
	this.listSize = 0;  //线性表的元素个数
	this.listLength = listLength; //返回线性表中元素个数
	this.arr = [];  //初始化一个空数组用来保存列表对象
	this.pos = 0;    //线性表的当前位置
	this.append = append; //添加元素
	this.locate = locate;  //顺序表的按内容查找
	this.insList = insList; //插入运算
	this.delList = delList;  //删除元素
	this.clear = clear;  //清空线性表
	this.front = front; //将线性表的当前位置移动到第一个元素
	this.end = end;   //将线性表的当前位置移动到第一个元素
	this.prev =prev;   //当前位置前移一位
	this.next = next;   //当前位置后移一位
	this.curPos = curPos;   //返回当前位置
	this.moveTo = moveTo;   //移动到指定位置
	this.getElement = getElement;  //返回当前位置的元素
}

//列表中元素的个数
function listLength(){
	return this.listSize;
}

//给线性表添加元素
function append(e){
	this.arr[this.listSize++] = e;
}

//按内容查找
function locate(e){
	//在顺序表L中查找与e相等的元素，若找到e,返回其下标，若未找到，返回-1
	for(var i = 0; i <this.arr.length;i++){
		if(this.arr[i] == e){
			return i;
		}
		}
		return -1;
}


//插入操作
function insList(i,e){
	//在第i个节点处插入元素e
	this.arr.splice(i,0,e);
	this.listSize++;
	return true;
}

//删除操作
function delList(e){
	var find = this.locate(e);
	if(find > -1){
		this.arr.splice(find,1);
		this.listSize--;
		return true;
	}
	return false;
}

//清空线性表
function clear(){
	delete this.arr; //删除原数组
	this.arr = [];   //创建一个新的空数组
	this.listSize = this.pos = 0;
}

//遍历线性表
function front(){
	this.pos = 0;
}
function end(){
	this.pos = this.listSize - 1;
}
function prev(){
	if(this.pos > 0){
		this.pos--;
	}
}
function next(){
	if(this.pos < this.listSize-1){
		this.pos++;
	}
}
function curPos(){
	return this.pos;
}
function moveTo(position){
	this.pos = position;
}
function getElement(){
	return this.arr[this.pos];
}

//线性表的合并运算,合并a,b中的元素，并按从小到大的顺序排列
function mergeList(a,b){
	var c = new SeqList();
	c.arr = a.arr.concat(b.arr);
	c.listSize = a.listSize + b.listSize;
    c.arr.sort(function compare(m,n){
    	return m - n;
    });
    return c;
}

//测试数据
var num1 = new SeqList();
num1.append(1);
num1.append(2);
num1.append(4);
console.log(num1);
num1.insList(2,3);
console.log(num1);
num1.next();
num1.next();
console.log(num1.getElement);
var num2 = new SeqList();
num2.append(6);
num2.append(5);
var merge = mergeList(num1,num2);
console.log(merge);