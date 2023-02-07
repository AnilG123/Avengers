import { LightningElement,api } from 'lwc';

export default class childComponent extends LightningElement {
    @api retrivedUser;

    handlebuttonClick(){ 
        const selectedEvent = new CustomEvent('userclicked', { detail: this.retrivedUser.login }); 
 
        // Dispatches the event. 
        this.dispatchEvent(selectedEvent); 
    }
}