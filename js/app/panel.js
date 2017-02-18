//面板
define(["jquery"], function () {

    //var menu=require("menu");
    /**
     * @param opts={parent:...,html:"",style:{width:"",height:"",color:""}}
     * @constructor
     */
    function Panel(opts) {
        //面板的初始化：初始化内容、事件
        this.init(opts);
    }

    Panel.prototype = {
        constructor: Panel,
        init: function (opts) {
            var panelStyle, $container;

            if (!opts.parent) throw new Error("面板缺少父容器");
            if (!opts.html) throw new Error("缺少面板的内容");

            //面板的样式对象
            panelStyle = opts.style || {};
            //面板的容器
            $container = $("<div class='panel'></div>")
                .append(opts.html || "")
                .css(panelStyle)
                .appendTo(opts.parent);
            this.container = $container;
        },
        bindEvents: function (type, target, callback) {
            this.container.on(type, target, callback);
        }
    };
    return Panel;

});

