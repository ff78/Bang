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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var mask = this.node.getChildByName('mask_node');
        mask.width = cc.director.getWinSize().width;
        mask.height = cc.director.getWinSize().height;
    },

    start () {
        var anim = this.node.getComponent(cc.Animation);
        anim.play('logo_in');
    },

    // update (dt) {},

    enableJump: function() {
        this.node.destroy();

        var param = {
            eProtocol: 'e2l_click_logo',
        };

        cc.find('LogicNode').getComponent('LogicCenter').ProcessUIRequest(param);
        // cc.warn("LogicCenter name : " + LogicCenter._instance.name + ",age = " + LogicCenter._instance.age);
    },

});
