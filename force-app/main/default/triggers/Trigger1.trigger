trigger Trigger1 on Account (before insert,before update) {
    
    Account a = Trigger.new[0];
    a.Name = a.Name + 'Limited';
    

}