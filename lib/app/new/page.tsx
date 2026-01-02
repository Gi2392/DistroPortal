'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { UploadCloud, FileText } from 'lucide-react';

export default function NewPickupRequest() {
  const [loading, setLoading] = useState(false);

  // Simple state for demo; use React Hook Form + Zod in production
  const [formData, setFormData] = useState({
    pickupDate: '',
    pickupLocation: '',
    deliveryLocation: '',
    packageCount: 1,
    declaredValue: 0,
    manifestNumber: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Call
    console.log("Submitting order:", formData);
    setTimeout(() => {
      setLoading(false);
      alert("Order Submitted to Dispatch!");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">New Pickup Request</h1>
        <p className="text-slate-500">Nevada Cannabis Compliance Board (CCB) Compliant Transfer</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              Logistics & Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Requested Pickup Date</Label>
                <Input 
                  type="date" 
                  required 
                  onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label>Metrc Manifest #</Label>
                <Input 
                  placeholder="0000000000..." 
                  required 
                  pattern="[A-Za-z0-9]+"
                  onChange={(e) => setFormData({...formData, manifestNumber: e.target.value})}
                />
                <p className="text-xs text-slate-400">Must match physical manifest exactly.</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Pickup Facility (Origin)</Label>
              <Input 
                placeholder="License Name & Address" 
                required 
                onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label>Delivery Destination</Label>
              <Input 
                placeholder="License Name & Address" 
                required 
                onChange={(e) => setFormData({...formData, deliveryLocation: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Total Parcels</Label>
                <Input 
                  type="number" 
                  min="1" 
                  required 
                  onChange={(e) => setFormData({...formData, packageCount: parseInt(e.target.value)})}
                />
              </div>
              <div className="space-y-2">
                <Label>Declared Wholesale Value ($)</Label>
                <Input 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  required 
                  onChange={(e) => setFormData({...formData, declaredValue: parseFloat(e.target.value)})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Required Attachments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition cursor-pointer">
              <UploadCloud className="w-10 h-10 mx-auto text-slate-400 mb-2" />
              <p className="font-medium text-slate-700">Upload Manifest & Invoices</p>
              <p className="text-sm text-slate-500">PDF or JPG up to 10MB. Encrypted storage.</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" type="button">Save Draft</Button>
          <Button className="bg-green-700 hover:bg-green-800" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  );
}
