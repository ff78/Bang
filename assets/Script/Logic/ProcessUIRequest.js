
// 视图层到逻辑层分发方法集
var UI2LogicFunc = {
    UIClickLogo: function (param) { 
        cc.log('func:UIClickLogo:%s', param.eProtocol);

        cc.find('LogicNode').getComponent('LogicCenter').endLogo();
    },

    UIClickLogin: function (param) {
        cc.log('func:UIClickLogin:%s', param.eProtocol);
        cc.find('SystemLogicNode').getComponent('SystemLogic').clickLogin(param);
    },
}; 

module.exports.UI2LogicFunc = UI2LogicFunc;
