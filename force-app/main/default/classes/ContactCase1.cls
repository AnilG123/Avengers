public class ContactCase1 {
     @AuraEnabled
    public static List<case> getCaseList1(string ContactId){
        List<case> caseList = new List<case>([select id ,CaseNumber,Status,Origin from Case where ContactId =:ContactId]);
        return caseList;
    }

}