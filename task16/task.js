/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
	
    var city = document.getElementById("aqi-city-input").value.trim();
    var num = document.getElementById("aqi-value-input").value.trim();
    
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
    	alert("城市名必须为中英文字符!");
    	return;
    }
    if(!num.match(/^\d+$/)){
    	alert("空气质量指数必须为整数!");
    	return;
    }

    aqiData[city] = num;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	table.innerHTML = "";
	for(var city in aqiData){
		if(table.children.length === 0){
			table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
		}
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		td1.innerHTML = city;
		tr.appendChild(td1);
		var td2 = document.createElement("td");
		td2.innerHTML = aqiData[city];
		tr.appendChild(td2);
		var td3 = document.createElement("td");
		td3.innerHTML = "<button id = 'btn-del'>删除</button>";
		tr.appendChild(td3);

		table.appendChild(tr);
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(row) {
  // do sth.
  var tr = row.parentElement.parentElement;
  var city = tr.children[0].innerHTML;

  delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var btnAdd = document.getElementById("add-btn");
    btnAdd.onclick = addBtnHandle;

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var table = document.getElementById("aqi-table");
  var delBtn = document.getElementById("btn-del");

  table.addEventListener("click",function(event){
  	if(event.target.nodeName=='BUTTON')
  		delBtnHandle(event.target);
  })

}

init();
