export type Role = 'ADMIN' | 'DISPATCHER' | 'DRIVER_NORTH' | 'DRIVER_SOUTH' | 'CUSTOMER';

export type OrderStatus = 
  | 'DRAFT' | 'SUBMITTED' | 'REVIEWED' | 'SCHEDULED' 
  | 'IN_TRANSIT_LEG_1' | 'AT_HUB_TONOPAH' | 'IN_TRANSIT_LEG_2' 
  | 'DELIVERED';

export interface Order {
  id: string;
  companyName: string;
  manifestNumber: string;
  pickupLocation: string;
  deliveryLocation: string;
  status: OrderStatus;
  pickupDate: string; // ISO
  packageCount: number;
  region: 'NORTH' | 'SOUTH' | 'CROSS_STATE';
  documents: { type: 'MANIFEST' | 'INVOICE'; url: string }[];
}

// Utility for status colors
export const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case 'DRAFT': return 'bg-gray-100 text-gray-800';
    case 'SUBMITTED': return 'bg-blue-100 text-blue-800';
    case 'REVIEWED': return 'bg-purple-100 text-purple-800';
    case 'SCHEDULED': return 'bg-indigo-100 text-indigo-800';
    case 'IN_TRANSIT_LEG_1': return 'bg-yellow-100 text-yellow-800 animate-pulse';
    case 'AT_HUB_TONOPAH': return 'bg-orange-100 text-orange-800 border-2 border-orange-500';
    case 'IN_TRANSIT_LEG_2': return 'bg-yellow-100 text-yellow-800';
    case 'DELIVERED': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100';
  }
};
