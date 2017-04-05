/*
只涉及后继指针的算法，如求表长，取元素，元素定位等，与单链表中相应的算法一样
 */

//为Node类增加一个prior属性，指向当前结点的直接前驱
function Node(data){
	this.data = data;
	this.next = null;
	this.prior = null;
}

//建立双向链表
function DoubleLinlList(){
	//建立头节点
	this.head = new Node(null);

	//双向链表的插入操作，在第i个节点前插入新的节点
	this.DlinkIns = function(i,e){
		if(i < 0){
			return error;
		}
		var pre = this.head,
		    k = 0;        //从头节点开始，查找第i-1个节点
		while(pre != null && k < i-1){
			pre = pre.next;
			k = k + 1;
		}
		if(!pre){    //当前位置pre为空表，还未数到第i个
			console.error("插入位置不合理！");
		}

		var s = new Node(e);  //申请一个新节点
		if(s){
			//s.data = e;
			s.prior = pre;
			s.next = pre.next;
			pre.next = s;
			return true;
		}
		else return false;
	}

	//双向链表的删除操作，删除第i个节点
	this.DlinkDel = function(i,e){
		var pre = this.head,
		    k = 0;
		while(pre.next != null && k < i - 1){
			pre = pre.next;
			k = k + 1;
		}
		if(!pre.next){    //pre.next为空，即没有找到合法的前驱位置
			console.error("删除位置不合理!");
		}

		e = pre.data;     //将删除元素保留在变量e中
		pre.prior.next = pre.next;  //修改指针，删除当前节点
		pre.next.prior = pre.prior;
		delete this.pre;
		return true;
	}
    
    //打印链表中节点的值
	this.display = function(){
		var pre = this.head;
		while(pre.next != null){
			console.log(pre.next.data);
			pre = pre.next;
		}
	}

}

var link = new DoubleLinlList();
link.DlinkIns(1,2);
link.DlinkIns(2,3);
link.DlinkIns(3,4);
link.DlinkIns(4,5);
link.DlinkDel(3,null);
link.display();