<?php

	header('Content-Type:text/html; charset=utf-8');

	/*获取数据  字符串*/
	$data = file_get_contents('data.json');

	/*转化php对象？ 需要对其操作*/
	$data = json_decode($data);

	/*页码*/
	$page = $_GET['page'];
	/*条数*/
	$pageSize = $_GET['pageSize'];

	/*获取数据的起始索引*/
	$offset = ($page - 1) * $pageSize;

	/*slice 从什么位子开始切割 切割多少条*/
	$result = array_slice($data, $offset, $pageSize);

	/*下一也的页码*/
	$page++;

	/*转化json字符串 输出到前台*/
	echo json_encode(array('page'=>$page, 'items'=>$result));/*｛items:[]｝*/

	sleep(1);

?>