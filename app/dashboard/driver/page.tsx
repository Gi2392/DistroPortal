'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Camera, MapPin, ArrowRightLeft } from 'lucide-react';

export default function DriverView() {
  // Mock current stop
  const currentStop = {
    type: 'HANDOFF',
    location: 'Tonopah Station, NV',
    action: 'Transfer to Southern Driver',
    orderId: 'ORD-101'
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">Current Route</h2>
        <p className="text-sm text-slate-500">Vehicle: NV-123-ABC (Sprinter)</p>
      </div>

      <Card className="mb-4 border-l-4 border-l-blue-600 shadow-lg">
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-2 text-blue-700 font-bold uppercase text-sm">
            <ArrowRightLeft className="w-4 h-4" />
            Next Stop: {currentStop.location}
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900">{currentStop.action}</h1>
          <p className="text-slate-600">Order #{currentStop.orderId} • 5 Parcels</p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button className="h-14 text-lg bg-slate-800 flex gap-2">
              <Camera className="w-5 h-5" />
              Proof
            </Button>
            <Button className="h-14 text-lg bg-green-600 hover:bg-green-700 flex gap-2">
              <CheckCircle className="w-5 h-5" />
              Confirm
            </Button>
          </div>
        </div>
      </Card>

      <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Upcoming Stops</h3>
      <div className="space-y-2 opacity-60">
        <Card className="p-4">
          <p className="font-bold">Deep Roots Harvest</p>
          <p className="text-xs">Delivery • Mesquite</p>
        </Card>
      </div>
    </div>
  );
}
