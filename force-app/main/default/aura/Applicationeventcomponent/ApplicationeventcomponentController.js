({
	fireAppEvent : function(component, event, helper) {
        
        
        var appEvent = $A.get("e.c:Applicationevent");
        
        appEvent.setParams({
            "message" : "Value from Application Event Notifier"
        });
            appEvent.fire();
	}
})