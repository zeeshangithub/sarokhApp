export interface Shipment {
  "billedAmount"?: number,
      "deliveryCharges"?: number,
      "dimensions"?: string,
      "id"?: number,
      "paymentType"?: string,
      "receiver"?: {
        "address"?: string,
        "city"?: string,
        "contact"?: string,
        "country"?: string,
        "customerName"?: string,
        "email"?: string,
        "id"?: number,
        "locationLatitude"?: string,
        "locationLongitude"?: string,
        "postalCode"?: number,
        "receiverName"?: string
      },
      "shipmentContent"?: string,
      "shipmentTitle"?: string,
      "shipmentType"?: string,
      "shipmentValue"?: number,
      "weight"?: number
}
