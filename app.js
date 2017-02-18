//设置基本路径
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/app',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    //设置指定的文件、或者文件夹的路径
    paths: {
        jquery: "../lib/jquery.min",
        app: 'app',
        lib: "../lib",
        nprogress:'../nprogress/nprogress'
    },
    //设置模块的依赖项
    shim: {
        // tab:{
        // deps:["jquery"]
        // }
    }
});

// Start the main app logic.
//数组的参数位置跟回调函数的参数位置一一对应
//                 js/app/menu.js
require(['jquery', 'menu', 'xiaomi/item',"xiaomi/bigItem","xiaomi/smallItem",'nprogress'],
    function ($, Menu, Item,BigItem,SmallItem,NProgress) {

        // 加载进度条
        NProgress.start();
        NProgress.done();

        //ajax请求数据
        $.get("js/HongMi.json",function(res){
            //解析json数据
            res=eval(res);//res是一个对象数组

            //右侧菜单栏的配置
            var menuOpts = {
                parent: "#menu",
                items: []
            };

            $.each(res,function(i,data){    //data={title:"",items:[]}
                //第一步、渲染红色标题区
                var item1 = new Item({
                    parent: "#content", header: {html: this.title}
                });
                //设置a标签的锚名
                item1.container.attr("name","floor"+(i+1));
                //对右侧菜单数据的配置：设置标题名称+锚链接
                menuOpts.items.push({title:this.title,anchorLink:"floor"+(i+1)});
                //第二步、渲染商品数据
                var items=this.items;//当前分类中的商品数据
                $.each(items,function(j,tuijian){//tuijian表示每一个小产品的数据
                    if(i===0){
                        //渲染大的栏目
                        var bigItem1=new BigItem({parent:item1.container.find(".sub-items"),data:tuijian});
                    }else{
                        //渲染小的栏目
                        var smallItem1=new SmallItem({parent:item1.container.find(".sub-items"),data:tuijian});
                    }

                });
                if(i>0){
                    item1.container.find(".sub-items").css({marginRight:"-20px"});
                }
            });
            menuOpts.items.push({title:"更多照片",anchorLink:"floor"+(res.length+1)});
            //渲染右侧菜单栏
            var menu = new Menu(menuOpts);

            //给右侧添加点击事件
            $('#menu').on('click','li', function () {
                $(this)
                    .parent()
                    .find('.selected')
                    .removeClass('selected')
                    .end().end()
                    .addClass('selected');
            });
        });




    });