({
   handle1: function(component){
          var action=component.get('c.showContactForAccordion');
        action.setCallback(this,function(response){
            var state = response.getState();
            console.log('state ='+state);
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.connList", response.getReturnValue());
                console.log('v.connList='+response.getReturnValue());
              }
        });$A.enqueueAction(action);
    }
})