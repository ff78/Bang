var Account = require('Account');

// 系统逻辑处理类，通过常驻节点常驻内存
cc.Class({
    extends: cc.Component,

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
    },


    // start () {

    // },

    // update (dt) {},

    // 点击登录界面的逻辑处理
    clickLogin: function(param) {
        cc.log("SystemLogic:clickLogin:%s",param.eProtocol);
        var paramOut = {
            eProtocol: 'l2e_show_login',
        };

        cc.find('LogicNode').getComponent('LogicCenter').pass2Engine(paramOut);

        // Account.getInstance().readJobConfigFile();
        Account.getInstance().readProtoPlayer();
        // cc.find('LogicNode').getComponent('LogicCenter').sm.enterLogin();
    },

});
