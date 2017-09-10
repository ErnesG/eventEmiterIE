var EventEmitter = require('events').EventEmitter;
var Counter = function(init){
   this.increment = function(){
       init++;
       
       // .emit(eventName,Object/action to monitor) 
       this.emit('incremented', init);
   }
}
Counter.prototype = new EventEmitter();
var counter = new Counter(10);
var callback = function(count){
    console.log(count);
};
// .addListener(eventName, action to perform when the event is listened)
counter.addListener('incremented',callback);
counter.increment();
counter.increment();