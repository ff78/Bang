// 视图层到逻辑层协议对应分发处理方法
var E2LProtocol = {
    'e2l_click_logo':'UIClickLogin',
    'e2l_click_login':'UIClickLogin'
};

// 逻辑层到视图层协议对应分发处理方法
var L2EProtocol = {
    'l2e_show_login':'showLogin',
};

module.exports.E2LProtocol = E2LProtocol;
module.exports.L2EProtocol = L2EProtocol;