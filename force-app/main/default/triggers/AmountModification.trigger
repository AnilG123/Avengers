trigger AmountModification on Opportunity (before update) {
    
    if(Trigger.isUpdate && Trigger.isBefore){
    
    OppClass.Opportunity(Trigger.New,Trigger.Old);
    }
}