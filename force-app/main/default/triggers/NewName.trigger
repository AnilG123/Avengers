trigger NewName on Account (before Update,after Update) {
    if(trigger.isBefore && Trigger.isUpdate)
    {
        for(Account acc:Trigger.new){
            System.debug('new name is'+acc.name);
                System.debug('old name is'+Trigger.oldMap.get(acc.id).name);
        }
    }

}