
define(["../panel"], function (Panel) {
    /**
     *
     * @param opts={}
     * @constructor
     */
    function Item(opts) {
        this.init(opts);
    }

    Item.prototype = {
        constructor: Item,
        init: function (opts) {
            var $container = $("<a class='item-container'>" +
                    "<div class='item-title'></div>" +
                    "<div class='sub-items'></div>" +
                "</a>");

            var headerOpts = opts.header;
            this.header = new Panel({
                parent: $container.find(".item-title"),
                html: headerOpts.html,
                style: {
                    backgroundColor: "hotpink",
                    height: "34px",
                    lineHeight: "34px",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    textIndent: "10px",
                    marginBottom: "10px"
                }
            });
            this.subItems = [];

            $container.appendTo(opts.parent);
            this.container = $container;
        },
        addSubItem: function (opts) {
            var $subItem = $("<div class='sub-item-container'><a target='_blank' href='"+opts.link+"'>" +
                "<div class='left'>" + opts.left.content + "</div>" +
                "<div class='right'>" + opts.right.content + "</div>" +
                "</a></div>");
            $subItem.find(".left").css(opts.left.style);
            $subItem.find(".right").css(opts.right.style);

            this.subItems.push(
                new Panel({
                    parent: this.container,
                    html: $subItem,
                    style: opts.style
                })
            );
        }
    };
    return Item;
});
