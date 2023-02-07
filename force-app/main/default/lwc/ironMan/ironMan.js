import { LightningElement,wire} from 'lwc'; 
import { publish, MessageContext } from 'lightning/messageService'; 
import searchMessage from '@salesforce/messageChannel/MessagechannelLWC__c'; 
import bulma from '@salesforce/resourceUrl/bulma';
import salesimage from '@salesforce/resourceUrl/Backgroundimage';
export default class IronMan extends LightningElement { 
 
    @wire(MessageContext) 
    messageContext; 
 
    handleClick(event){ 
    let inputvalue=this.template.querySelectorAll("lightning-input")[0].value; 
    const payload = { isTermvalid:true, searchTerm:inputvalue }; 
 
        publish(this.messageContext, searchMessage, payload); 
    } 
    sfimage = salesimage;
}