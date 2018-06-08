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

    // // 点击Logo界面的逻辑处理
    // clickLogo: function(param) {
    //     cc.log("SystemLogic:clickLogo:%s",param.eProtocol);

    //     // Account.getInstance().readJobConfigFile();
    //     Account.getInstance().readProtoPlayer();
    // },

    clickLogin (param) {
        cc.log("SystemLogic:clickLogin:%s",param.eProtocol);
        cc.log("SystemLogic:clickLogin:username:%s",param.username);
        cc.log("SystemLogic:clickLogin:pwd:%s",param.pwd);

        if (cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("BeiyouJni/JniHelper", "weixin_login", "(I)V", function(ret){
                
            });
        }
    },

});
