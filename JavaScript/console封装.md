# 封装console.log
    
    function log() { 
        console.log.apply(console, arguments);
    }