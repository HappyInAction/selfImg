
define(["../panel"], function (Panel) {
    /**
     *
     * @param opts={}
     * @constructor
     */
    function BigItem(opts) {
        this.init(opts);

        //this.initDom()
        //this.initEvent();
    }

    BigItem.prototype = {
        constructor: BigItem,
        init: function (opts) {
            //获取产品的数据
            var data=opts.data;
            //设置每一个栏目的容器
            var $container = $("<a target='_self' href='"+data.link+"' class='big-item-container'></a>");
            //给容器添加左边和右边2个子容器
            $container.append("<div class='left'>" +
                "<img src='"+data.imgUrl+"' alt=''>" +
                "</div>")
                .append("<div class='right'>" +
                    "<div class='row row-title'>"+data.title+"</div>" +
                    "<ul class='row row-desc'>" +
                        "<li>"+data.desc[0]+"</li>" +
                        "<li>"+data.desc[1]+"</li>" +
                        "<li>"+data.desc[2]+"</li>" +
                    "</ul>" +
                    "<div class='row row-time'>" +
                        "<span class='desc-time'>时间 : </span>" +
                        "<span class='data-time'>"+data.time+"</span>" +
                        "<span class='action'> 更多照片 > </span>" +
                    "</div>");

            $container.appendTo(opts.parent);
            this.container = $container;
            //绑定事件
            this.bindEvents();
        },
        bindEvents:function(){
            //开发技巧：一般用于给元素操作样式的时候，是通过控制元素的类名，给类名设置样式
            this.container.on("mouseenter",function(){
                $(this).addClass("hover");
            }).on("mouseleave",function(){
                $(this).removeClass("hover");
            })
        }
    };
    return BigItem;
});
