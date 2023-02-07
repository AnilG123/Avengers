import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import bulma from '@salesforce/resourceUrl/bulma';
import salesimage from '@salesforce/resourceUrl/Backgroundimage';
export default class Bulmacss extends LightningElement {
    connectedCallback() {
        loadStyle(this, bulma);
    }
   
}
