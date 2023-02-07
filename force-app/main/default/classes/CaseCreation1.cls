public class CaseCreation1 {
     @AuraEnabled
    public static List<case> getCaseList(){
        List<case> caseList = new List<case>([select id,CaseNumber,Status,Origin from Case ]);
        return caseList;
    }
    
}