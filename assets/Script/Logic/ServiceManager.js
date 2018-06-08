var Logic2ServiceFunc = {
    WechatLogin: function (param) {
        cc.log('Logic2ServiceFunc:WechatLogin:%s', param.eProtocol);
        
        // 通过常驻节点，方便发射事件
        // cc.find("LogicNode").emit(EventDefine.UPDATE_NET_STATE, {
        //     param1: 'param1',
        //     param2: 11,
        //     param3: ['icon1','icon2','icon3']
        // });

        if (cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("BeiyouJni/JniHelper", "weixin_login", "(I)V", function(ret){
                
            });
        }
    },
};

module.exports.Logic2ServiceFunc = Logic2ServiceFunc;
