public class RelatedCases {
   @AuraEnabled
    public static List<Contact> showContactForAccordion()
    {
        List<Contact> conList = [select Id,Name,(select Id,CaseNumber from Cases)
                                 FROM
                                 Contact
                                 Order By name LIMIT 10];
        return conList;
    }
    
}