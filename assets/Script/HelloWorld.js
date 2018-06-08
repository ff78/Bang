var EventDefine = require('EventDefine');

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },

        logicNode: {
            default: null,
            type: cc.Node
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',   
    },
    self:this,
    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        self = this;

        // 注册自定义事件，给常驻节点，方便发射事件
        cc.find("LogicNode").on(EventDefine.SHOW_LOGIN, this.showLogin);
        cc.loader.loadRes("prefabs/logo_node", function (err, prefab) {
            var logo = cc.instantiate(prefab);
            logo.parent = self.node;
            // this.node.addChild(logo);
        });  
    },

    start: function() {

    },

    // called every frame
    update: function (dt) {

    },


    onDisable:function(){
        cc.log("清除自定义事件")
        cc.find('LogicNode').off(EventDefine.SHOW_LOGIN, this.showLogin, this)    
    },

    showLogin: function(event) {
        cc.log("showLogin:%s", event.detail.param1);
        cc.log("HelloWorld:showLogin");

        var loginNode = cc.find('Canvas').getChildByName('login_node');
        loginNode.active = true;
    }.bind(this),

});
