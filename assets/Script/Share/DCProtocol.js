// 设备服务层到逻辑层协议对应分发处理方法
var D2LProtocol = {
    'd2l_wechat_login':'WechatLoginResp',
};

// 逻辑层到设备服务层协议对应分发处理方法
var L2DProtocol = {
    'l2d_wechat_login':'wechatLogin',
};

module.exports.D2LProtocol = D2LProtocol;
module.exports.L2DProtocol = L2DProtocol;
