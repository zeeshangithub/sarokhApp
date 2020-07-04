import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: 'fas fa-rocket',

    },
    {
        name: 'Tracking',
        url: '/dashboard',
        icon: 'fas fa-map-marker-alt',
        children: [
            {
                name: 'Driver Locations',
                url: '/admin/driverlocation',
                icon: 'fas fa-map-marker-alt'
            },
            {
                name: 'Order Locations',
                url: '/admin/orderlocation',
                icon: 'fas fa-map-marker-alt'
            }
        ]
    },
    {
        name: 'Orders',
        url: '/shipment',
        icon: 'fas fa-dolly-flatbed',
        children: [
            {
                name: 'All Orders',
                url: 'shipment/allshipment',
                icon: 'fas fa-dolly-flatbed'
            },
            // {
            //     name: 'Pickup Orders',
            //     url: '/admin/pickuporders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
            // {
            //     name: 'Delivery Orders',
            //     url: '/admin/deliveryorders',
            //     icon: 'fas fa-dolly-flatbed'
            // },
        ]
    },
    {
        name: 'Shipments',
        url: '/dashboard',
        icon: 'fas fa-box',
        children: [
            {
                name: 'All Shipments',
                url: '/admin/allshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'Deliverd Shipments',
                url: '/admin/deliverdshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'Pending Shipments',
                url: '/admin/pendingshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'No Response Shipments',
                url: '/admin/noresponseshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'COD Shipments',
                url: '/admin/codshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'Prepaid Shipments',
                url: '/admin/prepaidshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'Return Shipments',
                url: '/admin/returnshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'Shipment Issues',
                url: '/admin/issushipments',
                icon: 'fas fa-box',
            },
            {
                name: 'Pickup Shipments',
                url: '/admin/pickupshipments',
                icon: 'fas fa-box',
            },
            {
                name: 'Delivery Shipments',
                url: '/admin/deliveryshipments',
                icon: 'fas fa-box',
            },
        ]
    },
    {
        name: 'Shippers',
        url: '/dashboard',
        icon: 'fas fa-shipping-fast',
        children: [
            {
                name: 'Shippers',
                url: '/admin/shippers',
                icon: 'fas fa-shipping-fast'
            },
            {
                name: 'Shipper Billing',
                url: '/admin/shippersbilling',
                icon: 'fas fa-shipping-fast'
            },
        ]
    },
    {
        name: 'Warehouse',
        url: '/dashboard',
        icon: 'fas fa-warehouse',
        children: [
            {
                name: 'Add Warehouse',
                url: '/admin/addsarokhwearhouse',
                icon: 'fas fa-warehouse',
            },
            {
                name: 'Warehouse List',
                url: '/admin/sarokhwearhouselist',
                icon: 'fas fa-warehouse',
            },
            {
                name: 'Inventory Management',
                url: '/admin/inventoryManagement',
                icon: 'fas fa-warehouse',
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
                url: '/admin/printlabels',

                icon: 'fas fa-print'
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
        url: '/dashboard',
        icon: 'fas fa-money-bill-wave',
        children: [
            {
                name: 'Create Trip',
                url: '/admin/createTrip',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'All Trips',
                url: '/admin/allTrips',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Active Trips',
                url: '/admin/activeTrips',
                icon: 'fas fa-money-bill-wave'
            },
            // {
            //     name: 'Pending Trips',
            //     url: '/admin/pendingTrips',
            //     icon: 'fas fa-money-bill-wave'
            // },
            // {
            //     name: 'Completed Trips',
            //     url: '/admin/completedTrips',
            //     icon: 'fas fa-money-bill-wave'
            // },
        ]
    },
    {
        name: 'Finance',
        url: '/dashboard',
        icon: 'fas fa-money-bill-wave',
        children: [
            {
                name: 'Finance Dashboard',
                url: '/admin/financeDashboard',
                icon: 'fas fa-rocket',
            },
            {
                name: 'All ledgers',
                url: '/admin/allLedgers',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Receive Cash',
                url: '/admin/receivecash',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'Dispense Cash',
                url: '/admin/dispensecash',
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
                url: '/admin/dealerPayout',
                icon: 'fas fa-money-bill-wave'
            },
        ]
    },
    {
        name: 'Drivers',
        url: '/dashboard',
        icon: 'icon-calculator',
        children: [
            {
                name: 'Add Driver',
                url: '/admin/adddriver',
                icon: 'icon-map'
            },
            {
                name: 'All Drivers',
                url: '/admin/alldrivers',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Dealer',
        url: '/dashboard',
        icon: 'fas fa-store',
        children: [
            {
                name: 'Add Dealers',
                url: '/admin/adddealer',
                icon: 'fas fa-store',
            },
            {
                name: 'All Dealers',
                url: '/admin/alldealers',
                icon: 'fas fa-store',
            },
            {
                name: 'Dealers Inventory',
                url: '/admin/dealersInventory',
                icon: 'fas fa-store',
            },
            {
                name: 'Received Ledgers',
                url: '/dealer/add',
                icon: 'icon-map'
            },
            {
                name: 'COD Ledgers',
                url: '/admin/codLedgers',
                icon: 'icon-map'
            },
        ]
    },
    {
        name: 'Vehicles',
        url: '/dashboard',
        icon: 'fas fa-truck',
        children: [
            {
                name: 'Add Vehicles',
                url: '/admin/addVehical',
                icon: 'fas fa-truck'
            },
            {
                name: 'All Vehicles',
                url: '/admin/allVehicles',
                icon: 'fas fa-truck'
            },
            {
                name: 'Maintenance Records',
                url: '/admin/maintenanceRecords',
                icon: 'fas fa-truck'
            },
        ]
    },
    {
        name: 'User',
        url: '/dashboard',
        icon: 'fas fa-user',
        children: [
            {
                name: 'Add User',
                url: '/user/add',
                icon: 'fas fa-user-plus'
            },
            {
                name: 'All Users',
                url: '/user',
                icon: 'fas fa-users'
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
        name: 'Dashboard',
        url: '/shipper/Dashboard',
        icon: 'fas fa-rocket',

    },
    {
        name: 'Our Locations',
        url: '/shipper/shipperwearhouse',
        icon: 'fas fa-warehouse',
    },
    // {
    //     name: 'Orders',
    //     url: '/dashboard',
    //     icon: 'fas fa-dolly-flatbed',
    //     children: [
    //         {
    //             name: 'New Order',
    //             url: '/shipment/add',
    //             icon: 'fas fa-shopping-cart'
    //         },
    //         {
    //             name: 'All Orders',
    //             url: '/shipment/allshipment',
    //             icon: 'fas fa-shopping-cart'
    //         },
    //         {
    //             name: 'Pending Orders',
    //             url: '/orders/pendingorders',
    //             icon: 'fas fa-dolly-flatbed'
    //         },
    //     ]
    // },


    {
        name: 'All Shipments',
        url: '/shipment/allshipment',
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
    },
    {
        name: 'Shipments Issue',
        url: '/shipper/shipmentissue',
        icon: 'icon-map'
    },
    // {
    //     name: 'Print Labels',
    //     url: '/shipper/printlabel',
    //     icon: 'fas fa-print',
    // },
    {
        name: 'User',
        url: '/dashboard',
        icon: 'fas fa-user',
        children: [
            {
                name: 'Add Users',
                url: '/user/add',
                icon: 'fas fa-user-plus'
            },
            {
                name: 'All Users',
                url: '/user',
                icon: 'fas fa-users'
            }
        ]
    },
    {
        name: 'Ledger',
        url: '/dashboard',
        icon: 'fas fa-money-bill-wave',
        children: [
            {
                name: 'Add Ledger',
                url: '/shipper/addledgers',
                icon: 'fas fa-money-bill-wave'
            },
            {
                name: 'All Ledger',
                url: '/shipper/ledgers',
                icon: 'fas fa-money-bill-wave'
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
        url: '/dashboard',
        icon: 'fas fa-store',
        children: [
            {
                name: 'View Dealer Points',
                url: '/Dealer/ViewDealerPoints',
                icon: 'fas fa-store',
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
        url: '/dashboard',
        icon: 'fas fa-money-bill-wave',
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
        icon: 'fas fa-user',
        children: [
            {
                name: 'Add Users',
                url: '/user/add',
                icon: 'fas fa-user-plus'
            },
            {
                name: 'All Users',
                url: '/user',
                icon: 'fas fa-users'
            }
        ]
    },
    {
        name: 'Reports',
        url: '/',
        icon: 'fas fa-dolly-flatbed',
    },
];


export const AdminWarehouseNavItems: INavData[] = [
    {
        name: 'Warehouse Dashboard',
        url: '/warehouseadmin/warehouse',
        icon: 'fas fa-rocket',
    },
    // {
    //     name: 'Recive Orders',
    //     url: '/warehouseadmin/reciveOrder',
    //     icon: 'fas fa-dolly-flatbed',
    // },
    // {
    //     name: 'Dispatch Orders',
    //     url: '/warehouseadmin/dispatchOrder',
    //     icon: 'icon-ban',
    // },
    // {
    //     name: 'Receiver Drop Off',
    //     url: '/warehouseadmin/receiverDropOff',
    //     icon: 'icon-ban',
    // },

];

export const WarehouseManagerNavItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/warehousemanager/warehouseManagerDashboard',
        icon: 'fas fa-rocket',
    },
    {
        name: 'Create Trip',
        url: '/admin/createTrip',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'Trips',
        url: '/admin/allTrips',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'Drivers',
        url: '/warehousemanager/allDrivers',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'Dealers',
        url: '/warehousemanager/allDealers',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'Shippers',
        url: '/warehousemanager/allShippers',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'Vehicles',
        url: '/warehousemanager/allVehicles',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'All Shipments',
        url: '/warehousemanager/allShipments',
        icon: 'fas fa-money-bill-wave'
    },

    {
        name: 'Pending Shipments',
        url: '/admin/pendingshipments',
        icon: 'fas fa-box',
    },
    {
        name: 'COD Shipments',
        url: '/admin/codshipments',
        icon: 'fas fa-box',
    },
    {
        name: 'Prepaid Shipments',
        url: '/admin/prepaidshipments',
        icon: 'fas fa-box',
    },
    {
        name: 'Pickup Shipments',
        url: '/admin/pickupshipments',
        icon: 'fas fa-box',
    },
    {
        name: 'Delivery Shipments',
        url: '/admin/deliveryshipments',
        icon: 'fas fa-box',
    },

];


export const FinanceManagerNavItems: INavData[] = [
    {
        name: 'Finance Dashboard',
        url: '/admin/financeDashboard',
        icon: 'fas fa-rocket',
    },
    {
        name: 'All ledgers',
        url: '/admin/allLedgers',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'Receive Cash',
        url: '/admin/receivecash',
        icon: 'fas fa-money-bill-wave'
    },
    {
        name: 'Dispense Cash',
        url: '/admin/dispensecash',
        icon: 'fas fa-money-bill-wave'
    },

];