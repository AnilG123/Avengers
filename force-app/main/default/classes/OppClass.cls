public class OppClass {
    public static void Opportunity(List<Opportunity> OppOldList,List<Opportunity>OppNewList){
        
        For(Opportunity Old1:OppOldList)
        {
            For(Opportunity new1:OppNewList){
                If(Old1.id==new1.id && new1.Amount!=Old1.Amount)
                    new1.addError('Amount Cannot be Changed');
            }
        }
      
                 
    }
    
}