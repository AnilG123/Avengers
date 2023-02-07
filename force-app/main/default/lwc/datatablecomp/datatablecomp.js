import { LightningElement,track,wire } from 'lwc';
import getaccounts from '@salesforce/apex/AccountClass.getaccounts';
export default class Datatablecomp extends LightningElement {
    @track data;
    @track columns = [
        {label: 'Label' , fieldName:'Name' , type:'text'},
        {label: 'phone' , fieldName:'phone' , type:'phone'},
        {label: 'Industry' , fieldName:'Industry' , type:'text'},
    ];
    @wire (getaccounts) accountRecords({error,data}){
        if (data){
            this.data = data;
        }
        else if (error){
            TickerSymbol.data = undefined;
        }
    }
}
    