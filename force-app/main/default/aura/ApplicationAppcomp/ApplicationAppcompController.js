({
    component1Event : function(cmp, event,helper) { 
        //Get the event using event name. 
        var appEvent = $A.get("e.c:ApplicationApp1"); 
        //Set event attribute value
        appEvent.setParams({"message" : "Welcome "}); 
        appEvent.fire(); 
    }
})