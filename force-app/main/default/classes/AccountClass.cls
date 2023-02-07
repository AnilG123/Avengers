public with sharing class AccountClass {
    public AccountClass() {

    }
    @AuraEnabled(cacheable=true)
    public static list<Account> getaccounts (){
       return[select id,name,type,phone,industry from Account limit 10];
    }
}