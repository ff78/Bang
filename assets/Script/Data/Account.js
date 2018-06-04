// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var Account = cc.Class({

    // properties: {
    // accountData: {
    //     currJob: 1,
    //     name: '骑士艾瑟',
    //     exp: 0,
    //     level: 1,
    //     hp: 720,
    //     attack: 24,
    //     defence: 16,
    //     crit: 0,
    //     deCrit: 0,
    //     vipExp: 0,
    //     vipLevel: 0,
    //     gold: 0,
    //     diamond: 0,
    //     fame: 0,
    // },

    // jobConfig: {
    //     jobId: 0,
    //     name: '骑士',
    //     headIcon: 'im_userhead0.png',
    //     armature: 'role1',
    //     pvpImg: 'head_trust.png',
    //     lock: 0,
    //     active: 1,
    //     fighterId: 10012,
    //     opponentId: 10022,
    //     descript: '牢城营的雪说来就来，却一下便停不下来。炉子上的烧酒壶早已没了热气，一层厚厚的白雪。北风把破门砸得哐哐地晃，骑士似乎走了有一段时间，但没人知道去了哪里。',
    //     price: 300,
    // },

    // jobData: {
    //     jobId: 0,
    //     lock: 0,
    //     active: 1,
    // },

    // uplevelConfig: {
    //     level: 1,
    //     expThres: 100,
    //     deltaHp: 100,
    //     deltaAttack: 100,
    //     deltaDefence: 100,
    //     deltaCrit: 100,
    //     deltaDecrit: 100,
    // },

    // unlockConfig: {
    //     unlockId: 1,
    //     stageId: 10005,
    //     lockType: 1,
    //     icon: 'im_userhead0.png',
    // },

    // unlockData: {
    //     unlockId: 1,
    //     lock: 0,
    // },

    // jobConfigMap: {
    //     default: null,
    //     type: Map,
    // },

    // uplevelConfigMap: {
    //     default: null,
    //     type: Map,
    // },

    // unlockConfigMap: {
    //     default: null,
    //     type: Map,
    // },

    // unlockMap: {
    //     default: null,
    //     type: Map,
    // },

    // jobMap: {
    //     default: null,
    //     type: Map,
    // },
    // },
    properties: {

        name: "骑士艾瑟",

        age: 22,

        jobConfigMap: {
            default: null,
            type: Array,
        },
    },

    statics: {
        _instance : null
    },

    ctor: function() {
        jobConfigMap.clear();
    },

    readJobConfigFile: function() {
        cc.loader.load(cc.url.raw('resources/data/system_month_assign.json'), function(err,res){  
            if (err) {  
                cc.log(err);  
            }else{  
                this.jobConfigMap=res;  
                cc.log("load:");  
                cc.log("list:"+this.jobConfigMap);  
            }  
        }.bind(this));  
    //    //louadRes()方法，默认路径就是resources  
    //     cc.loader.loadRes('data', function(err,res){  
    //         if (err) {  
    //             cc.log(err);  
    //         }else{  
    //             let list=res;  
    //             cc.log("loadRes:");  
    //             cc.log("list:"+list);  
    //         }  
    //     });
    },

    readAccountData: function() {

    },

    writeAccountData: function() {
        if(cc.sys.isNative) {  
            cc.log("Path:"+jsb.fileUtils.getWritablePath());  
            cc.log( jsb.fileUtils.writeToFile({"new":"value"},jsb.fileUtils.getWritablePath()+'data.json'));  
    
    
            cc.log("fullPathForFilename:"+jsb.fileUtils.fullPathForFilename("resources/data.json"));  
        }

        cc.log("writeStringToFile:"+jsb.fileUtils.writeStringToFile('{"a":"b","c":"d"}', jsb.fileUtils.getWritablePath()+'kk.json'));  
        cc.log("getValueMapFromFile:"+JSON.stringify(jsb.fileUtils.getValueMapFromFile(jsb.fileUtils.getWritablePath()+"kk.json")));  

        var arry=JSON.stringify(jsb.fileUtils.getStringFromFile(jsb.fileUtils.getWritablePath()+"kk.json"));  
        cc.log("arry:"+arry);  
  
        cc.loader.load(jsb.fileUtils.getWritablePath()+"kk.json", function(err,res){  
            if (err) {  
                cc.log(err);  
            }else{  
                let list=res;  
                
                cc.log("list:"+list.a);  
            }  
        });  
    },

    readProtoPlayer: function() {
        // let protobuf = require('protobufjs');

        // protobufjs.Util.IS_NODE = cc.sys.isNative;

        // let builder = protobuf.newBuilder();

        // protobuf.protoFromFile(cc.url.raw('resources/pb/xxx.proto'), builder);
        // protobuf.protoFromFile(cc.url.raw('resources/pb/yyy.proto'), builder);

        // let PB = builder.build('grace.proto.msg');

        let PBHelper = require('pbhelper');
        let pbHelper = new PBHelper();
        let PB = pbHelper.loadFile('resources/proto', 'grace.proto.msg');

        let player = new PB.Player();
        player.name = '黑豹';
        player.enterTime = Date.now();

        let data = player.toArrayBuffer();
        // let otherPlayer = PB.player.decode(data);
    }
});

Account._instance = null;
Account.getInstance = function () {
    if(!Account._instance){
        Account._instance = new Account();
    }
    return Account._instance;
}

module.exports = Account;
