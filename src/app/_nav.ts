import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'fas fa-rocket',

    },
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
            {
                name: 'Pending Orders',
                url: '/orders/pendingorders',
                icon: 'fas fa-dolly-flatbed'
            },
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
                name: 'Return Shipments',
                url: '/shipper/returnshipments',
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
    // {
    //     name: 'Dealer Warehouse',
    //     url: '/shipper/shipperwearhouse',
    //     icon: 'fas fa-warehouse',
    // },
    // {
    //     name: 'Orders',
    //     url: '/orders',
    //     icon: 'fas fa-dolly-flatbed',
    //     children: [
    //         {
    //             name: 'New Order',
    //             url: '/orders/add',
    //             icon: 'fas fa-dolly-flatbed'
    //         },
    //         {
    //             name: 'All Orders',
    //             url: '/orders/orders',
    //             icon: 'fas fa-dolly-flatbed'
    //         },
    //         {
    //             name: 'Pending Orders',
    //             url: '/orders/pendingorders',
    //             icon: 'fas fa-dolly-flatbed'
    //         },
    //     ]
    // },
    // {
    //     name: 'Shipments',
    //     url: '/dashboard',
    //     icon: 'icon-ban',
    //     children: [
    //         {
    //             name: 'All Shipments',
    //             url: '/shipper/shipments',
    //             icon: 'icon-map'
    //         },
    //         {
    //             name: 'Return Shipments',
    //             url: '/shipper/returnshipments',
    //             icon: 'icon-map'
    //         }
    //     ]
    // },
    // {
    //     name: 'Print Labels',
    //     url: '/base/cards',
    //     icon: 'icon-pie-chart',
    // },
    // {
    //     name: 'User',
    //     url: '/dashboard',
    //     icon: 'icon-ban',
    //     children: [
    //         {
    //             name: 'Add Users',
    //             url: '/user/add',
    //             icon: 'icon-map'
    //         },
    //         {
    //             name: 'All Users',
    //             url: '/user',
    //             icon: 'icon-map'
    //         }
    //     ]
    // },
    // {
    //     name: 'Legder',
    //     // url: '',
    //     icon: 'icon-ban',
    //     children: [
    //         {
    //             name: 'All Ledger',
    //             url: '/shipper/ledgers',
    //             icon: 'icon-map'
    //         },
    //         {
    //             name: 'Add Ledger',
    //             url: '/shipper/addledgers',
    //             icon: 'icon-map'
    //         }
    //     ]
    // },
    // {
    //     name: 'Reports',
    //     url: '/base/cards',
    //     icon: 'icon-pie-chart',
    // },
];
