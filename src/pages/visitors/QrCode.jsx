import React from "react";
import Card from "../../components/common/Card";
import QRCode from "../../components/common/QRCode";
import { Download, Share2, RefreshCw, Info } from "lucide-react";

const QRCodePanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">My QR Code</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex flex-col items-center justify-center py-6">
              <h2 className="text-xl font-semibold mb-6">
                Personal Visitor QR Code
              </h2>

              <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
                <QRCode data="visitor-alex-johnson-3492" size={250} />
              </div>

              <p className="text-gray-600 text-center mb-6 max-w-md">
                Present this QR code at reception to check in quickly or share
                it with the host before your visit.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <button className="flex items-center px-6 py-3 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-all duration-300 cursor-pointer">
                  <Download size={18} className="mr-2" />
                  Download QR Code
                </button>

                <button className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                  <Share2 size={18} className="mr-2" />
                  Share QR Code
                </button>

                <button className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                  <RefreshCw size={18} className="mr-2" />
                  Regenerate
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card title="How It Works" icon={<Info size={20} />}>
            <div className="space-y-4">
              <div className="p-4 border border-blue-100 rounded-lg bg-blue-50">
                <h3 className="font-medium mb-2 text-[#3c73b6]">
                  Quick Check-In
                </h3>
                <p className="text-sm text-gray-600">
                  Your QR code contains your visitor information. Simply present
                  it at reception for instant check-in.
                </p>
              </div>

              <div className="p-4 border border-green-100 rounded-lg bg-green-50">
                <h3 className="font-medium mb-2 text-green-700">
                  Pre-Registration
                </h3>
                <p className="text-sm text-gray-600">
                  Share your QR code with your host before your visit to
                  pre-register and save time.
                </p>
              </div>

              <div className="p-4 border border-purple-100 rounded-lg bg-purple-50">
                <h3 className="font-medium mb-2 text-purple-700">
                  Secure & Private
                </h3>
                <p className="text-sm text-gray-600">
                  Your QR code is encrypted and can only be read by our visitor
                  management system.
                </p>
              </div>
            </div>
          </Card>

          <Card className="mt-6" title="Visit History">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">HR Department</p>
                  <p className="text-xs text-gray-500">May 1, 2025</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  Used
                </span>
              </div>

              <div className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">IT Department</p>
                  <p className="text-xs text-gray-500">Apr 28, 2025</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  Used
                </span>
              </div>

              <div className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing</p>
                  <p className="text-xs text-gray-500">Apr 20, 2025</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  Used
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QRCodePanel;
