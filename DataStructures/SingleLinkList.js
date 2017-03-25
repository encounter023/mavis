//节点类型定义
function Node(data){
	this.data = data;
	this.next = null;
}

//创建单链表
function SingleLinkList(){
	 this.L = new Node(null);  //建立头节点，指针域为空，此时单链表为空

	//头插法建表
	this.CreateFromHead = function(data){
		var node = new Node(data);  //建立新节点
		node.next = this.L.next;   //新节点指向头节点指向的节点
		this.L.next = node;   //头节点指向新节点
	}

	//尾插法建表
	this.CreateFromTail = function(data){
		var node = new Node(data);
		var r = this.L;      //指向当前链表的表尾,以便做尾插入，其初值指向头节点
		while(r.next != null){
			r = r.next;
		}
		r.next = node;  //尾指针指向新插入的节点
	}

	//按序号查找
	this.Get = function(i){
		var p = this.L,
		    j = 0;   //从头节点开始扫描
		while((p.next != null) && (j < i)){
			p = p.next;    //扫描下一个节点
			j++;           //已扫描节点计数器
		}
		if(i == j){
			return p;    //找到第i个节点
		}else{
			return null;    //若为找到，返回空
		}
	}

	//按值查找
	this.Locate = function(key){
		var p = this.L;    //从表中第一个节点开始
		while(p.next != null){   //当前表未查完
			if(p.data != key){
				p = p.next;
			}
			else
				break;     //找到节点值为key时退出循环
		}
		return p;
	}


	//求单链表的长度
	this.ListLength = function(){
		var p =this.L,
		    j = 0;
		while(p.next != null){
			p = p.next;
			j++;
		}
		return j;
	}

	//单链表的插入操作
	this.InsList = function(i,e){
		if(i < 0)
			return ERROR;    
		var pre = this.L,
		    k = 0;        //从头节点开始，查找第i-1个节点
		while(pre != null && k < i-1){
			pre = pre.next;
			k = k + 1;
		}
		if(!pre){    //当前位置pre为空表，还未数到第i个
			console.error("插入位置不合理！");
		}
		var s = new Node(data);    //申请一个新节点
		s.data = e;                //值e置入s的数据域
		s.next = pre.next;         //新节点指向当前节点指向的节点
		pre.next = s;
		return true;
	}

	//单链表的删除操作
	this.DelList = function(i,e){   //删除第i个元素，并将删除的元素保存在变量e中
		var pre = this.L,
		    k = 0;
		while(pre.next != null && k < i - 1){
			pre = pre.next;
			k = k + 1;
		}
		if(!pre.next){    //pre.next为空，即没有找到合法的前驱位置
			console.error("删除位置不合理!");
		}
		var r = pre.next;   //r为第i个元素所在的节点
		r.next = pre.next;   //修改指针，删除节点r
		e = r.data;         //将删除元素保存在变量e中
		delete this.r;      //释放被删除节点所占的内存空间
		return true;
	}

	//显示单链表中的元素
	this.printLink = function(){
		var p = this.L;
		var arr = [];
		while(p.next != null){
			p = p.next;
			arr.push(p.data);
		}
		return arr.join(" ");
	}

}

//合并两个有序的单链表
function mergeLinkList(LA,LB){
	var pa = LA.next,   //指向LA的第一个节点
	    pb = LB.next,   //指向LB的第一个节点
	    LC = new SingleLinkList();   //LC初始置空表
	LC.next = null;
	var r = LC;    //r始终指向LC表尾
	 while(pa != null && pb != null){   //选择值较小的节点插入LC中
	 	if(pa.data <= pb.data){
	 		r.next = pa;
	 		r = pa;
	 		pa = pa.next;
	 	}else{
	 		r.next = pb;
	 		r = pb;
	 		pb = pb.next;
	 	}
	 }
	 if(pa)
	 	r.next = pa;   //若表LA未完，将LA中的后续元素链接到LC中
	 if(pb)
	 	r.next = pb;   

	 return LC;
}