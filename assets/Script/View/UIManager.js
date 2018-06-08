// 视图中心，发送自定义事件给视图或切换场景
var EventDefine = require('EventDefine');

var Logic2EngineFunc = {
    showLogin: function (param) {
        cc.log('Logic2EngineFunc:showLogin:%s', param.eProtocol);
        
        // 通过常驻节点，方便发射事件
        // cc.find("LogicNode").emit(EventDefine.UPDATE_NET_STATE, {
        //     param1: 'param1',
        //     param2: 11,
        //     param3: ['icon1','icon2','icon3']
        // });

        cc.find("LogicNode").emit(EventDefine.SHOW_LOGIN, {param:'1.0.0'});
    },
};

module.exports.Logic2EngineFunc = Logic2EngineFunc;
