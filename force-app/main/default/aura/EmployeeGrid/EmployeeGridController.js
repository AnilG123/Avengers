({
    handle : function(component, event, helper) {
        var action = component.get('c.EmployeVote');
        action.setParams({
            
        });
        action.setCallback(this, function(response){
            var responseValue = response.getReturnValue();
            console.log('responseValue ', responseValue);
            component.set('v.employeeList', responseValue);
        });
        $A.enqueueAction(action, false);
        
    },
    
    handleEvent : function(component, event, helper) {
        var allEmployees =  component.get('v.votewithId');
        var valueFromChild = event.getParam("message");
        var isDataExists = false;
        
        allEmployees.forEach((eachemp)=>{
            //for same employee if, vote is increasing/decreasing keep updating
            if(eachemp.id === valueFromChild.id) {
            	eachemp.Votes__c = valueFromChild.vote;
            	isDataExists = true;
        }
        })
        //for different employee, vote is increasing/decreasing create new object in array
        if(isDataExists === false) {
            allEmployees.push({id:valueFromChild.id, Votes__c: valueFromChild.vote});
        }
        console.log('valueFromChild ',valueFromChild);
        console.log('allEmployees ',allEmployees);
        component.set('v.votewithId', allEmployees);
    }, 
    
    Submit : function(component, event, helper) {
        if(component.get('v.votewithId').length > 0) {
            var action = component.get("c.saveAllEmployee");
            action.setParams({
                allEmployees : JSON.stringify(component.get('v.votewithId'))
            });
            action.setCallback(this, function(response){
                var state = response.getState();
                if (state === "SUCCESS") {
                  alert('Votes has been submitted.');
               }
            });
            $A.enqueueAction(action);
        }else {
            alert('Votes are not calculated.')
        } 
    },        
 
   openModel: function(component, event, helper) {
      // Set isModalOpen attribute to true
      component.set("v.isModalOpen", true);
       var updatedData = [];
       var existingEmployee = component.get('v.employeeList');
      var allEmployees =  component.get('v.votewithId');
       existingEmployee.forEach((eachExistingEmp) => {
           var result = allEmployees.filter(eachemp => eachExistingEmp.Id === eachemp.id);
           if(result.length > 0) {
           		eachExistingEmp.Votes__c = result[0].Votes__c;
       		}else {
                   eachExistingEmp.Votes__c = 0;
               }
           updatedData.push(eachExistingEmp);
       })
       component.set("v.employeeList", updatedData);
       
   },
  
   submitDetails: function(component, event, helper) {
      // Set isModalOpen attribute to false
      //Add your code to call apex method or do some processing
      component.set("v.isModalOpen", false);
   }

    
})