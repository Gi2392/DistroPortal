import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getStatusColor, Order } from '@/lib/types';

// Mock Data representing the state of the system
const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-101',
    companyName: 'Green Leaf Cultivation',
    manifestNumber: '1A4000...',
    pickupLocation: 'Reno Facility A',
    deliveryLocation: 'Las Vegas Dispensary B',
    status: 'AT_HUB_TONOPAH',
    pickupDate: '2026-01-02',
    packageCount: 5,
    region: 'CROSS_STATE',
    documents: [{ type: 'MANIFEST', url: '#' }]
  },
  {
    id: 'ORD-102',
    companyName: 'High Sierra Farms',
    manifestNumber: '1A4000...',
    pickupLocation: 'Carson City',
    deliveryLocation: 'Reno Distro',
    status: 'IN_TRANSIT_LEG_1',
    pickupDate: '2026-01-02',
    packageCount: 12,
    region: 'NORTH',
    documents: [{ type: 'MANIFEST', url: '#' }]
  }
];

export default function DispatchDashboard() {
  return (
    <div className="p-6 h-screen bg-slate-50 flex flex-col">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dispatch Command Center</h1>
          <p className="text-sm text-slate-500">Tonopah Meet Status: <span className="text-green-600 font-bold">ACTIVE</span></p>
        </div>
        <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">SRENE (North): 4 Drivers</Badge>
            <Badge variant="outline" className="text-xs">MATRIX (South): 3 Drivers</Badge>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        
        {/* Northern Region Column */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-slate-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            North (SRENE)
          </h2>
          {MOCK_ORDERS.filter(o => o.region === 'NORTH').map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>

        {/* The Tonopah Hub / Cross-State Column */}
        <div className="flex flex-col gap-4 bg-orange-50/50 p-4 rounded-xl border border-orange-100">
          <h2 className="font-semibold text-orange-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Tonopah Transfers (Meet Point)
          </h2>
          <p className="text-xs text-orange-600 mb-2">Requires Handoff Confirmation</p>
          
          {MOCK_ORDERS.filter(o => o.region === 'CROSS_STATE').map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>

        {/* Southern Region Column */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-slate-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            South (Matrix)
          </h2>
          {/* Mock South Orders would go here */}
          <div className="text-sm text-slate-400 text-center py-10 border-2 border-dashed rounded-lg">
            No active south-origin orders
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderCard({ order }: { order: Order }) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer border-slate-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-xs text-slate-500">{order.id}</span>
          <span className={`px-2 py-1 rounded text-[10px] font-bold ${getStatusColor(order.status)}`}>
            {order.status.replace(/_/g, ' ')}
          </span>
        </div>
        <h3 className="font-bold text-slate-800 text-sm">{order.companyName}</h3>
        <div className="mt-3 text-xs space-y-1 text-slate-600">
          <p>📍 {order.pickupLocation} ➝ {order.deliveryLocation}</p>
          <p>📦 {order.packageCount} Parcels</p>
          <p>📄 Manifest: {order.manifestNumber}</p>
        </div>
      </CardContent>
    </Card>
  );
}
