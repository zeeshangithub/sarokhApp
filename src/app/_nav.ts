import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'fas fa-rocket',
        // badge: {
        //   variant: 'info',
        //   text: 'NEW'
        // }
    },
    // {
    //   title: true,
    //   name: 'Theme'
    // },
    {
        name: 'Tracking',
        url: '/base',
        icon: 'fas fa-map-marker-alt',
        children: [
            {
                name: 'Driver Locations',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Order Locations',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'fas fa-dolly-flatbed',
        children: [
            {
                name: 'All Orders',
                url: '/orders/allorders',
                icon: 'fas fa-dolly-flatbed'
            },
            // {
            //     name: 'Pick up Orders',
            //     url: '/orders/pickuporders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'Delivery Orders',
            //     url: '/orders/deliveryorders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'No Response Orders',
            //     url: '/orders/noresponseorders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'Bulk Order Update',
            //     url: '/orders/bulkordersupdate',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'COD Reports',
            //     url: '/orders/codreports',
            //     icon: 'icon-map'
            // }
        ]
    },
    {
        name: 'Shippers',
        url: '/shipper',
        icon: 'fas fa-shipping-fast',
        children: [
            {
                name: 'Shippers',
                url: '/shipper',
                icon: 'fas fa-shipping-fast'
            },
            {
                name: 'Shipment Issues',
                url: '/shipper',
                icon: 'fas fa-box'
            },
            {
                name: 'Billing',
                url: '/shipper',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Warehouse',
        url: '/icons',
        icon: 'fas fa-warehouse',
        children: [
            {
                name: 'Add Wearhouse',
                url: '/shipper/addsarokhwearhouse',
                icon: 'icon-map'
            },
            {
                name: 'Wearhouse List',
                url: '/shipper/sarokhwearhouselist',
                icon: 'icon-map'
            },
            // {
            //     name: 'Bulk Inventory Update',
            //     url: '/base/carousels',
            //     icon: 'icon-map'
            // },
            // {
            //     name: 'Operator',
            //     url: '/base/carousels',
            //     icon: 'icon-map'
            // },
            // {
            //     name: 'Print Label',
            //     url: '/base/carousels',
            //     icon: 'icon-map'
            // },
            // {
            //     name: 'Inventory Reconcilation',
            //     url: '/base/carousels',
            //     icon: 'icon-map'
            // }
        ]
    },
    {
        name: 'Finance',
        url: '/notifications',
        icon: 'fas fa-money-bill-wave',
        children: [
            {
                name: 'All ledgers',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Receive Cash',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Dispense Cash',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Account Statements',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'COD Reconcilation',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Shipper Billing',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Driver Payouts',
                url: '/base/carousels',
                icon: 'icon-map'
            },
        ]
    },
    {
        name: 'Drivers',
        url: '/driver',
        icon: 'icon-calculator',
        children: [
            {
                name: 'Add Driver',
                url: '/driver/add',
                icon: 'icon-map'
            },
            {
                name: 'All Drivers',
                url: '/driver',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Dealer',
        url: '/dealer',
        icon: 'icon-calculator',
        children: [
            {
                name: 'All Dealers',
                url: '/dealer',
                icon: 'icon-map'
            },
            {
                name: 'Add Dealers',
                url: '/dealer/add',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Vehicles',
        url: '/pages',
        icon: 'fas fa-truck',
        children: [
            {
                name: 'Vehicles',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Maintenance Records',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Accident History',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'User',
        url: '/user',
        icon: 'icon-ban',
        children: [
            {
                name: 'Add User',
                url: '/user/add',
                icon: 'icon-map'
            },
            {
                name: 'All Users',
                url: '/user',
                icon: 'icon-map'
            },
            {
                name: 'Rolls & Permission Management',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Reports',
        url: '/dashboard',
        icon: 'icon-ban',
        children: [
            {
                name: 'Audit Trail',
                url: '/base/cards',
                icon: 'icon-map'
            },
            // {
            //     name: 'Audit Trail',
            //     url: '/base/cards',
            //     icon: 'icon-map'
            // },
            // {
            //     name: 'Audit Trail',
            //     url: '/base/cards',
            //     icon: 'icon-map'
            // },
            // {
            //     name: 'Audit Trail',
            //     url: '/base/cards',
            //     icon: 'icon-map'
            // }
        ]
    },
    // {
    //   name: 'Download CoreUI',
    //   url: 'http://coreui.io/angular/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    //   attributes: { target: '_blank', rel: 'noopener' }
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'http://coreui.io/pro/angular/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    //   attributes: { target: '_blank', rel: 'noopener' }
    // }
];
export const ShipperNavItems: INavData[] = [
    {
        name: 'Shipper Dashboard',
        url: '/shipper/Dashboard',
        icon: 'icon-speedometer',
    },
    {
        name: 'Shipper Wearhouse',
        url: '/shipper/shipperwearhouse',
        icon: 'icon-pie-chart',
        children : [
            {
                name: 'Add Wearhouse',
                url: '/shipper/addshipperwearhouse',
                icon: 'fas fa-dolly-flatbed'   
            },
            {
                name: 'Wearhouse List',
                url: '/shipper/shipperwearhouselist',
                icon: 'fas fa-dolly-flatbed'   
            }
        ]
        
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'fas fa-dolly-flatbed',
        children: [
            {
                name: 'Add Order',
                url: '/orders/add',
                icon: 'fas fa-dolly-flatbed'
            },
            {
                name: 'All Orders',
                url: '/orders/allorders',
                icon: 'fas fa-dolly-flatbed'
            },
            // {
            //     name: 'Pick up Orders',
            //     url: '/orders/pickuporders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'Delivery Orders',
            //     url: '/orders/deliveryorders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'No Response Orders',
            //     url: '/orders/noresponseorders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'Bulk Order Update',
            //     url: '/orders/bulkordersupdate',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'COD Reports',
            //     url: '/orders/codreports',
            //     icon: 'fas fa-dolly-flatbed'
            // }
        ]
    },
    {
        name: 'COD Reconciliation',
        url: '/charts',
        icon: 'icon-pie-chart'
    },
  
    {
        name: 'Drivers',
        url: '/widgets',
        icon: 'icon-calculator',
        children: [
            {
                name: 'Add Drivers',
                url: '/driver/add',
                icon: 'icon-map'
            },
            {
                name: 'Drivers Issues',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'User',
        url: '/dashboard',
        icon: 'icon-ban',
        children: [
            {
                name: 'Add Users',
                url: '/user/add',
                icon: 'icon-map'
            },
            {
                name: 'All Users',
                url: '/user',
                icon: 'icon-map'
            },
            {
                name: 'Rolls & Permission Management',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
];
