({
	handleAppEvent : function(component, event, helper) {
        var message= event.getParams("message");
        component.set("v.messageFromNotifier", message);
		
	}
})