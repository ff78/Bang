// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {

    },
    self: this,
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        self = this;

        var mask = self.node.getChildByName('mask_node');
        mask.width = cc.director.getWinSize().width;
        mask.height = cc.director.getWinSize().height;

        mask.on(cc.Node.EventType.TOUCH_END, self.clickMask, self.node);
    },

    start () {
        self = this;
        var anim = self.node.getComponent(cc.Animation);
        anim.play('win_in');
    },

    // update (dt) {},

    // 点击事件
    clickClose: function() {
        self = this;
        var anim = self.node.getComponent(cc.Animation);
        anim.play('win_out');

        var mask = self.node.getChildByName('mask_node');

        mask.off(cc.Node.EventType.TOUCH_END, self.clickClose, self.node);
        mask.on(cc.Node.EventType.TOUCH_END, self.clickMask, self.node);
    },

    clickMask: function() {
        //吞噬事件
    },

    // 动画事件函数
    endWinIn: function() {
        self = this;
        var mask = self.node.getChildByName('mask_node');
        mask.off(cc.Node.EventType.TOUCH_END, self.clickMask, self.node);
        mask.on(cc.Node.EventType.TOUCH_END, self.clickClose, self.node);
    },

    endWinOut: function() {
        self = this;
        var mask = self.node.getChildByName('mask_node');
        mask.off(cc.Node.EventType.TOUCH_END, self.clickMask, self.node);
        self.node.destroy();
    },
});
