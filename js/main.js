/**************学习笔记****************/	
//1.js的三种引入方式
	/*内嵌式
	<script>
		alert("hello world");（弹出 hello world）
	</script>
	*/
	/*外联式
	 * <script src="#"></script>
	 */
	/*行间事件
	 * <input type="button" value="弹出弹框 onlick="alert('hello world')>
	*/
	
	
	//2.定义变量
	/*定义变量关键字 变量等于值（弱类型语言）
	 * 'var'
	 * ex: /单行注释
	 *     /*多行注释
	  */
	/*var aa=12;(变量申明  匈牙利命名风格）
	 	* 
	 	* 对象Object   :o   ex:oDiv
	 	* 数组Array    ：a   比如：aItems
	 	* 字符串String  ：s   比如：sUerName
	 	* 整数 integer   ：i  比如：iitemcount
	 	* 浮点数      ：f
	 	* 函数 function ： fn
	 	* 正则表达 RegExp ：re         *加封号*
	 */
	/*ex：写到一行代码中，执行效率更高
	 var iNum01=12,sTr='abc',bIsMove=true;
	 */
	/*数据类型：基本类型
	 * 
	 * number 数字类型
	 * string 字符串类型
	 * boolean 布尔类型  true或false
	 * undefined类型  
	 * null  空对象
	 * 
	 * 复合类型
	 * object  对象类型
	 */
	  	/*定义与执行
	    <script type="text/javascript">
	        //函数定义
	        function fnAlert(){
	        	alert('hello!')            先调用，再定义为预解析功能
	        }
	        //函数执行
	        fnAlert();
	    </script>
	    */
	  //条件语句、
	    /* 条件运算符  ：与C，Python相似    ==  、 ===  、 >  、  < 、    >= 、  &&和  、  ||或  、      ！取反；
	    * var iNum01=12;
	    * var sNum01='12';
	    * if(iNum01==12){                      '==='不会转化类型
	    * 	alert('相等')                        '=='转换类型
	    * }
	    * else{
	    * 	alert('不相等')
	    * }
	    */
	   /*
