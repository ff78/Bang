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
        versionLabel: {
            default: null,
            type: cc.Label,
        },

        editboxAccount: {
            default: null,
            type: cc.EditBox,
        },

        editboxPwd: {
            default: null,
            type: cc.EditBox,
        },

        toggleAgree: {
            default: null,
            type: cc.Toggle,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {
        
    },

    // update (dt) {},

    onEnable () {
        if (cc.sys.isMobile) {
            this.editboxAccount.active = false;
            this.editboxPwd.active = false;
        }else{
            this.editboxAccount.string = 'sss';
            this.editboxPwd.string = '123456';
        }

        this.versionLabel.string = 'v3.0.1';
    },

    clickWxLogin () {
        if (this.toggleAgree.isChecked) {
            cc.log("user agree");
            var paramOut = {
                eProtocol: 'e2l_click_login',
                username: this.editboxAccount.string,
                pwd: this.editboxPwd.string,
            };
    
            // this.pass2Engine(paramOut);
            cc.find('LogicNode').getComponent('LogicCenter').ProcessUIRequest(paramOut);
        } else {
            cc.log("user disagree");
            this.toggleAgree.isChecked = true;
        }
    },

    clickUserProtocol () {
        cc.loader.loadRes("prefabs/user_agreement", function (err, prefab) {
            var agreeNode = cc.instantiate(prefab);
            agreeNode.setPosition(cc.director.getWinSize().width/2,cc.director.getWinSize().height/2);

            agreeNode.parent = cc.director.getScene();
        });
    },

});
