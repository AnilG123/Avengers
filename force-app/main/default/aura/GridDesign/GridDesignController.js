({
	 increment : function(component, event, helper) {
        
        var count = parseInt(component.get("v.fnumber")+1);
        component.set("v.fnumber", count);
     },
     decrease : function(component, event, helper) {
        
        var count = parseInt(component.get("v.fnumber")-1);
        component.set("v.fnumber", count);
     },
     increment1 : function(component, event, helper) {
        
        var count = parseInt(component.get("v.fnumber1")+1);
        component.set("v.fnumber1", count);
     },
     decrease1 : function(component, event, helper) {
        
        var count = parseInt(component.get("v.fnumber1")-1);
        component.set("v.fnumber1", count);
     }
    
})