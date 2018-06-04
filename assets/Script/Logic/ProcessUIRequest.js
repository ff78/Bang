
// 视图层到逻辑层分发方法集
var UI2LogicFunc = {
    UIClickLogin: function (param) { 
        cc.log('func:UIClickLogin:%s',param.eProtocol);

        cc.find('LogicNode').getComponent('LogicCenter').enterLogin();
        cc.find('SystemLogicNode').getComponent('SystemLogic').clickLogin(param);
    },
}; 

module.exports.UI2LogicFunc = UI2LogicFunc;
