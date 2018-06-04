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

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        // 注册自定义事件，给常驻节点，方便发射事件
        cc.find("LogicNode").on(EventDefine.UPDATE_NET_STATE, this.showLogin);
    },

    start: function() {
        var param = {
            eProtocol: 'e2l_click_logo',
        };

        cc.find('LogicNode').getComponent('LogicCenter').ProcessUIRequest(param);
        // cc.warn("LogicCenter name : " + LogicCenter._instance.name + ",age = " + LogicCenter._instance.age);
    },

    // called every frame
    update: function (dt) {

    },

    showLogin: function(event) {
        cc.log("showLogin:%s", event.detail.param1);
        cc.log("HelloWorld:showLogin");
    }.bind(this),

    onDisable:function(){
        cc.log("清除自定义事件")
        cc.find('LogicNode').off(EventDefine.UPDATE_NET_STATE, this.showLogin, this)    
    },
});
