Global class BatchClassonAccount Implements Database.Batchable <sObject>{
    Global Database.QueryLocator Start (Database.BatchableContext bc)
    {
        return Database.getQueryLocator('Select Name From Account');
    }
    Global Void execute(Database.BatchableContext bc,List<Account> AccList)
    {
        For(Account Acc :AccList)
        {
            Acc.name = Acc.name +'Vamritech';
        }
        update AccList;
    }
    
    Global Void finish(Database.BatchableContext bc){
        
    }
      
}