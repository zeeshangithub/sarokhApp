import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: 'fas fa-rocket',

    },
    {
        name: 'Tracking',
        url: '',
        icon: 'fas fa-map-marker-alt',
        children: [
            {
                name: 'Driver Locations',
                url: '/admin/driverlocation',
                icon: 'icon-map'
            },
            {
                name: 'Order Locations',
                url: '/admin/orderlocation',
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
                url: '/admin/allorder',
                icon: 'fas fa-dolly-flatbed'
            },
            {
                name: 'Pickup Orders',
                url: '/admin/pickuporders',
                icon: 'fas fa-dolly-flatbed'
            },
            {
                name: 'Delivery Orders',
                url: '/admin/deliveryorders',
                icon: 'fas fa-dolly-flatbed'
            },
        ]
    },
    {
        name: 'Shipments',
        url: '',
        icon: 'fas fa-shipping-fast',
        children: [
            {
                name: 'All Shipments',
                url: '/admin/allshipments',
                icon: 'fas fa-shipping-fast'
            },
            {
                name: 'Deliverd Shipments',
                url: '/admin/deliverdshipments',
                icon: 'fas fa-box'
            },
            {
                name: 'Pending Shipments',
                url: '/admin/pendingshipments',
                icon: 'icon-map'
            },
            {
                name: 'No Response Shipments',
                url: '/admin/noresponseshipments',
                icon: 'icon-map'
            },
            {
                name: 'COD Shipments',
                url: '/admin/codshipments',
                icon: 'icon-map'
            },
            {
                name: 'Prepaid Shipments',
                url: '/admin/prepaidshipments',
                icon: 'icon-map'
            },
            {
                name: 'Return Shipments',
                url: '/admin/returnshipments',
                icon: 'icon-map'
            },
            {
                name: 'Shipment Issues',
                url: '/admin/issushipments',
                icon: 'icon-map'
            },
        ]
    },
    {
        name: 'Shippers',
        url: '',
        icon: 'fas fa-shipping-fast',
        children: [
            {
                name: 'Shippers',
                url: '/admin/shippers',
                icon: 'fas fa-shipping-fast'
            },
            {
                name: 'Shipper Issues',
                url: '/admin/shippersissues',
                icon: 'fas fa-box'
            },
            {
                name: 'Shipper Billing',
                url: '/admin/shippersbilling',
                icon: 'icon-map'
            },
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
            {
                name: 'Inventory Management',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Driver Allocation',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Oprators',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Print Label',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Inventory Reconcilation',
                url: '/base/cards',
                icon: 'icon-map'
            },
        ]
    },
    {
        name: 'Scheduling',
        url: '/notifications',
        icon: 'fas fa-money-bill-wave',
        children: [
            {
                name: 'Create Trip',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'All Trips',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Active Trips',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Pending Trips',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Completed Trips',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
            },
        ]
    },
    {
        name: 'Finance',
        url: '',
        icon: 'fas fa-money-bill-wave',
        children: [
            {
                name: 'All ledgers',
                url: '/admin/allLedgers',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Receive Cash',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Dispense Cash',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
            },
            // {
            //     name: 'Account Statements',
            //     url: '/base/cards',
            //     icon: 'fas fa-money-bill-wave'
            // },
            {
                name: 'COD Collection',
                url: '/admin/codCollection',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Shipper Billing',
                url: '/admin/shipperBilling',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Driver Payouts',
                url: '/admin/driverPayout',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Dealer Payouts',
                url: '/base/cards',
                icon: 'fas fa-money-bill-wave'
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
                url: '/admin/alldealers',
                icon: 'icon-map'
            },
            {
                name: 'Add Dealers',
                url: '/admin/adddealer',
                icon: 'icon-map'
            },
            {
                name: 'Dealers Inventory',
                url: '/dealer/add',
                icon: 'icon-map'
            },
            {
                name: 'Received Ledgers',
                url: '/dealer/add',
                icon: 'icon-map'
            },
            {
                name: 'COD Ledgers',
                url: '/dealer/add',
                icon: 'icon-map'
            },
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
        ]
    },
];
export const ShipperNavItems: INavData[] = [
    {
        name: 'Shipper Dashboard',
        url: '/shipper/Dashboard',
        icon: 'fas fa-rocket',

    },
    {
        name: 'Warehouse',
        url: '/shipper/shipperwearhouse',
        icon: 'fas fa-warehouse',
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'fas fa-dolly-flatbed',
        children: [
            {
                name: 'New Order',
                url: '/orders/add',
                icon: 'fas fa-dolly-flatbed'
            },
            {
                name: 'All Orders',
                url: '/orders/orders',
                icon: 'fas fa-dolly-flatbed'
            },
            // {
            //     name: 'Pending Orders',
            //     url: '/orders/pendingorders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
        ]
    },
    {
        name: 'Shipments',
        url: '/dashboard',
        icon: 'icon-ban',
        children: [
            {
                name: 'All Shipments',
                url: '/shipper/shipments',
                icon: 'icon-map'
            },
            {
                name: 'COD Shipments',
                url: '/shipper/codshipments',
                icon: 'icon-map'
            },
            {
                name: 'Pending Shipments',
                url: '/shipper/pendingshipments',
                icon: 'icon-map'
            }
            ,
            {
                name: 'Shipments Issue',
                url: '/shipper/shipmentissue',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Print Labels',
        url: '/base/cards',
        icon: 'icon-pie-chart',
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
            }
        ]
    },
    {
        name: 'Legder',
        // url: '',
        icon: 'icon-ban',
        children: [
            {
                name: 'All Ledger',
                url: '/shipper/ledgers',
                icon: 'icon-map'
            },
            {
                name: 'Add Ledger',
                url: '/shipper/addledgers',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Reports',
        url: '/base/cards',
        icon: 'icon-pie-chart',
    },
];

export const DealerNavItems: INavData[] = [
    {
        name: 'Dealer Dashboard',
        url: '/Dealer/Dashboard',
        icon: 'fas fa-rocket',
    },
    {
        name: 'Point',
        // url: '',
        icon: 'icon-ban',
        children: [
            {
                name: 'View Dealer Points',
                url: '/Dealer/ViewDealerPoints',
                icon: 'fas fa-dolly-flatbed',
            },
        ]
    },
    {
        name: 'Inventory',
        url: '/Dealer/Inventory',
        icon: 'fas fa-rocket',
    },
    {
        name: 'Legder',
        // url: '',
        icon: 'icon-ban',
        children: [
            {
                name: 'Service Charges',
                url: '/Dealer/ServicesCharges',
                icon: 'icon-ban',
            },
            {
                name: 'COD Returns',
                url: '/Dealer/CODReturns',
                icon: 'icon-pie-chart',
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
            }
        ]
    },
    {
        name: 'Reports',
        url: '/',
        icon: 'fas fa-dolly-flatbed',
    },
];
