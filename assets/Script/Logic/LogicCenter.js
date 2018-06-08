// 逻辑分发中心，通过常驻节点常驻内存
import { L2EProtocol } from '../Share/ELProtocol';

var E2LProtocol = require('ELProtocol').E2LProtocol;
var UI2LogicFunc = require('ProcessUIRequest').UI2LogicFunc;
var Logic2EngineFunc = require('UIManager').Logic2EngineFunc;
var fsm = require("fsm");

cc.Class({
    extends: cc.Component,

    // self:this,

    onLoad: function () {

        // self = this;

        cc.game.addPersistRootNode(this.node);
        // 注册状态的进入和退出处理方法，不需要处理也可以不注册
        fsm.onlogo = this.onlogo;

        fsm.onlogin = this.onlogin;

        fsm.onhall = this.onhall;

        fsm.onbattle = this.onbattle;

        fsm.onleavelogo = this.leaveLogo;

        fsm.onleavelogin = this.leaveLogin;

        fsm.onleavehall = this.leaveHall;

        fsm.onleavebattle = this.leaveBattle;

        // 启动状态机
        fsm.startup();
    },



    update: function() {
        // cc.log('curr state:%s',fsm.current);
        if(this['process'+fsm.current]) {
            this['process'+fsm.current]();
        }
    },

    
    // 处理视图层来的协议分发
    ProcessUIRequest: function(param) {

        if (!E2LProtocol.hasOwnProperty(param.eProtocol)) {
            return;
        }

        UI2LogicFunc[E2LProtocol[param.eProtocol]](param);
    },

    // 处理到视图的协议分发
    pass2Engine: function(param) {
        // UIManager::instance()->processLogicResponse(pMsg);
        if (!L2EProtocol.hasOwnProperty(param.eProtocol)) {
            return;
        }

        Logic2EngineFunc[L2EProtocol[param.eProtocol]](param);
    },

    // 进入状态
    onlogo: function() {
        cc.log("onlogo");
        // fsm.endlogo();
    }.bind(this),

    onlogin: function() {
        cc.log("onlogin");
    }.bind(this),

    onhall: function() {
        cc.log("onhall");
    }.bind(this),

    onbattle: function() {
        cc.log("onbattle");
    }.bind(this),

    // 退出状态
    leaveLogo: function() {
        cc.log("leave logo");
    },

    leaveLogin: function() {
        cc.log("leave login");
    },

    leaveHall: function() {
        cc.log("leave hall");
    },

    leaveBattle: function() {
        cc.log("leave battle");
    },

    // 触发状态转换事件
    endLogo: function() {
        var paramOut = {
            eProtocol: 'l2e_show_login',
        };

        // this.pass2Engine(paramOut);
        cc.find('LogicNode').getComponent('LogicCenter').pass2Engine(paramOut);

        fsm.endlogo();
   }.bind(this),

    loginOk: function() {
        fsm.loginok();
    }.bind(this),

    startBattle: function() {
        fsm.enterbattle();
    }.bind(this),

    back2Hall: function() {
        fsm.back2hall();
    }.bind(this),

    // 状态执行方法
    processlogo: function () {
        // cc.log("process logo");
    },

    processlogin: function () {
        // cc.log("process login");
    },
});
