({
    add:function(component, event, helper) {
        var fvalu = component.find("fnum").get("v.value");
        var svalu = component.find("Snum").get("v.value");
        var result = component.find("Result");
        result.set("v.value",fvalu+svalu);

    }
})