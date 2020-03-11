export class Shipment {
  "billedAmount"?: number;
      "deliveryCharges"?: number;
      "dimensions"?: string;
      "id"?: number;
      "paymentType"?: string;
      "receiver"?: {
        "address"?: string;
        "city"?: string;
        "contact"?: string;
        "country"?: string;
        "customerName"?: string;
        "email"?: string;
        "id"?: number;
        "locationLatitude"?: string;
        "locationLongitude"?: string;
        "postalCode"?: number;
        "receiverName"?: string
      };
      "shipmentContent"?: string;
      "shipmentTitle"?: string;
      "shipmentType"?: string;
      "shipmentValue"?: number;
      "weight"?: number

      constructor(){
      this.billedAmount = 0;
      this.deliveryCharges =  0;
      this.dimensions = "";
      this.id= 0;
      this.paymentType= "";
      this.receiver = {};
      this.receiver.address="";
      this.receiver.city="";
      this.receiver.contact="";
      this.receiver.customerName="";
      this.receiver.email="";
      this.receiver.id=0;
      this.receiver.locationLatitude="";
      this.receiver.locationLongitude="";
      this.receiver.postalCode=0;
      this.receiver.receiverName="";
      this.shipmentContent= "";
      this.shipmentTitle= "";
      this.shipmentType= "";
      this.shipmentValue= 0;
      this.weight= 0
      }
}
