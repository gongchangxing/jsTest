

var t = "{'firstName': 'cyra', 'lastName': 'richardson', 'address': { 'streetAddress': '1 Microsoft way', 'city': 'Redmond', 'state': 'WA', 'postalCode': 98052 },'phoneNumbers': [ '425-777-7777','206-777-7777' ] }";
var jsonobj = eval('(' + t + ')');
alert(jsonobj.firstName);
alert(jsonobj.lastName);

var t2 = "[{name:'zhangsan',age:'24'},{name:'lisi',age:'30'},{name:'wangwu',age:'16'},{name:'tianqi',age:'7'}] ";
var myobj = eval(t2);
for (var i = 0; i < myobj.length; i++) {
	alert(myobj[i].name);
	alert(myobj[i].age);
}

var t3 = "[['<a href=# onclick=openLink(14113295100,社旗县国税局桥头税务所,14113295100,d6d223892dc94f5bb501d4408a68333d,swjg_dm);>14113295100</a>','社旗县国税局桥头税务所','社旗县城郊乡长江路西段']]";
// 通过eval() 函数可以将JSON字符串转化为对象
var obj = eval(t3);
for (var i = 0; i < obj.length; i++) {
	for (var j = 0; j < obj[i].length; j++) {
		alert(obj[i][j]);
	}

}

/*
 * //stringifier 函数的作用跟 parse 相反， 用来将一个js对象转换为 JSON 文本。 var jsonText =
 * JSON.stringify(obj); alert(jsonText);
 * 
 * //如果基于安全的考虑的话，最好是使用一个 JSON 解析器。 一个 JSON 解析器将只接受 JSON 文本。所以是更安全的。 var myObject =
 * JSON.parse(myJSONtext, filter); //可选的 filter 参数将遍历每一个value key 值对，
 * 并进行相关的处理。如： //如 myData = JSON.parse(text, function (key, value) {
 * 
 * return key.indexOf('date') >= 0 ? new Date(value) : value; });
 * 
 * //stringifier 函数的作用跟 parse 相反， 用来将一个js对象转换为 JSON 文本。 var myJSONText =
 * JSON.stringifier(myObject);
 */
