({
    add : function(component, event, helper) {
        var fnumber = component.get("v.fnumber");
        var snumber = component.get("v.snumber");
        component.set("v.Result",fnumber+snumber);
    },
    mul : function(component, event, helper) {
        var fnumber = component.get("v.fnumber");
        var snumber = component.get("v.snumber");
        component.set("v.Result",fnumber*snumber);
    },
    sub : function(component, event, helper) {
        var fnumber = component.get("v.fnumber");
        var snumber = component.get("v.snumber");
        component.set("v.Result",fnumber-snumber);
    },
    div : function(component, event, helper) {
        var fnumber = component.get("v.fnumber");
        var snumber = component.get("v.snumber");
        component.set("v.Result",fnumber/snumber);
    },
})