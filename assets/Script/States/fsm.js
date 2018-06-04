let StateMachine = require('state-machine');
let fsm = StateMachine.create({
initial: 'nope',
//please select the enter-state here ↓
events: [
{"name":"startup","from":"nope","to":"logo"},
{"name":"endlogo","from":"logo","to":"login"},
{"name":"loginok","from":"login","to":"hall"},
{"name":"enterbattle","from":"hall","to":"battle"},
{"name":"backtohall","from":"battle","to":"hall"}
]
});
fsm.ASYNC = StateMachine.ASYNC;
module.exports = fsm;