Stopwatch Object
======================================

Design a stopwatch object that has
1 property: duration;
3 methods: 
    start(): start a stop watch; if call start again throw an error;
    stop(): stop a stop watch; if call again throw an error;
    reset(): back to its initial state.

const sw =new Stopwatch();
initially sw.duration = 0;
========================================

Pseudocode:
//use constructor function
function Stopwatch(){
    this.duration = 0;
    this.start = function(){
        if switch is on, throw an error;
        set switch on;
        set duration 0;
        record startTime;
    }
    this.stop = function(){
        if switch is off, throw an error;
        set switch off;
        set duration as currentTime-startTime;        
    }
    this.reset = function(){
        set switch on;
        set duration 0;
    }
}

