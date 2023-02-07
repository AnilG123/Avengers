({
	fireComponentEvent : function(component, event, helper) {
        
        var componentEvent = component.getEvent("CamEvent");
        var msgString = component.get("v.messageString");
        
        
        msgString = $A.util.isEmpty(msgString) ? "No Message Passed" : msgString;
        
        componentEvent.setParams({
        "message" : msgString,
        "label" : "Custom Label"
    });
    
    componentEvent.fire();
	}
 
})