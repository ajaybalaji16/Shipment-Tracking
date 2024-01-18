import { LightningElement, api } from 'lwc';
import fetchShipmentStatus from '@salesforce/apex/ShipmentTrackingController.fetchShipmentStatus';

export default class ShipmentTracking extends LightningElement {

    @api recordId;
    @api objectApiName;
    @api trackingFieldApi;

    trackingStatus;

    connectedCallback() {

        fetchShipmentStatus({ objectName: this.objectApiName, fieldApi: this.trackingFieldApi, recordId: this.recordId })
            .then(result => {
                this.trackingStatus = result;
            })
            .catch(error => {
                console.log('Error in fetchShipmentStatus: ' + error);
            })

    }

}
