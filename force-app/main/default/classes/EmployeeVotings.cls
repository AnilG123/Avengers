public class EmployeeVotings {
    @AuraEnabled
    public static List<Employee__c> EmployeVote(string employeeId){
        List<Employee__c> voteList = new List<Employee__c>([select id,Name,Votes__c from Employee__c]);
        return voteList;
    }
    
   
    @AuraEnabled
    public static void saveAllEmployee(string allEmployees){
        System.debug('allEmployees' + allEmployees);
        //Sine all Employee is strigified for its array of object, hence needs deserialize into object form       
        List<Employee__c> employeeDetails = (List<Employee__c>)JSON.deserialize(allEmployees, List<Employee__c>.class);
      
        update employeeDetails;
        Voting_Result__c v = new Voting_Result__c();
        for(Employee__c vm : [select id,Name,Votes__c from Employee__c WHERE Id =:employeeDetails]){
                                  system.debug('Vm>>>>>'+vm); 
                                  if(vm.Name == 'Anil'){
                                      v.Anil__c = vm.Votes__c;
                                  }
                                  else if(vm.Name == 'Rohan'){v.Rohan__c = vm.Votes__c;
                                                             }
             else if(vm.Name == 'Shweta'){v.Shweta__c = vm.Votes__c;
                                                             }
            
                                  
                                  
                              }
        insert v;
        
    }
     @AuraEnabled 
    public static List<ContentVersion> getContents(string employeeId) { 
        Set<Id> contentIds = new Set<Id>(); 
        //SOQL query to get pictures from VamriTechEmployee object 
        for (ContentDocumentLink cont :[SELECT ContentDocumentId, LinkedEntityId FROM ContentDocumentLink where 
                                        LinkedEntityId in ( SELECT Id FROM Employee__c where Id =: employeeId)]) { 
                                            contentIds.add(cont.ContentDocumentId); 
                                        } 
        
        //Below Query will return the latest image Id uploaded in files  
        return [SELECT Id,Title FROM ContentVersion WHERE ContentDocumentId IN :contentIds LIMIT 1]; 
    } 
}