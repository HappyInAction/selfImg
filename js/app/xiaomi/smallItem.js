
define(["../panel","text!../../../templates/smallItemTemplate.html"], function (Panel,html) {
    /**
     *
     * @param opts={}
     * @constructor
     */
    function SmallItem(opts) {
        this.init(opts);
    }

    SmallItem.prototype = {
        constructor: SmallItem,
        //初始化
        init: function (opts) {
            var data = opts.data;
            var template=html.replace("{{link}}",data.link)
                .replace("{{imgUrl}}",data.imgUrl)
                .replace("{{title}}",data.title)
                .replace("{{desc}}",data.desc.toString())
                .replace("{{time}}",data.time);
            var $container=$(template);
            // var $container = $("<a target='_blank' href='" + data.link + "'  class='small-item-container'></a>");
            // $container.append("<div class='left'>" +
            //         "<img src='" + data.imgUrl + "' alt=''>" +
            //         "</div>")
            //     .append("<div class='row row-title'>" + data.title + "</div>" +
            //         "<ul class='row row-desc'>" +
            //         "<li>" + data.desc.toString() + "</li>" +
            //         "</ul>" +
            //         "<div class='row row-price'>" +
            //             "<span class='desc-price'>￥</span>" +
            //             "<span class='data-price'>" + data.price + "</span>" +
            //             "<span class='action'>抢</span>" +
            //         "</div>");

            $container.appendTo(opts.parent);
            this.container = $container;
            this.bindEvents();
        },
        //绑定事件
        bindEvents: function () {
            this.container.on("mouseenter", function () {
                $(this).addClass("hover");
            }).on("mouseleave", function () {
                $(this).removeClass("hover");
            })
        }
    };
    return SmallItem;
});
