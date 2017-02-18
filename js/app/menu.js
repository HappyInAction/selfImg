
//js/app/panel.js
define(["panel"],function(Panel){
    /**
     * 右侧选项菜单
     * @param opts={items:[{title:"",anchorLink:""}]}
     * @constructor
     */
    function Menu(opts){
        this.init(opts);
    }
    Menu.prototype={
        constructor: Menu,
        init:function(opts){
            if(!opts) return;
            if(!opts.parent) throw new Error("缺少父容器");

            var ulContents="<ul>";
            for (var i = 0; i < opts.items.length; i++) {
                var item = opts.items[i];
                ulContents+="<li><a href='#"+item.anchorLink+"'>"+item.title+"</a></li>";
            }
            ulContents+="</ul>";
            var $menu=$("<div class='menu'>" + ulContents + "</div>");
            //默认选中第一个菜单
            $menu.find("li:first").addClass("selected");
            //再把菜单添加到父容器中
            $menu.appendTo($(opts.parent));

        }
    };
    return Menu;
});