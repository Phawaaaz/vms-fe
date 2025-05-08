import React, { useState } from "react";
import { Download, Maximize2, X } from "lucide-react";

// Simulate a QR code with a placeholder
const QRCode = ({ data, size = 100 }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // This would normally use a real QR code library
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    data
  )}`;

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative border border-gray-200 p-2 rounded-lg bg-white">
          <img src={qrImageUrl} alt="QR Code" width={size} height={size} />

          <div className="absolute -top-2 -right-2 flex space-x-1">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white shadow-md rounded-full p-1 text-gray-600 hover:bg-gray-100 transition-all duration-300"
            >
              <Maximize2 size={14} />
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = qrImageUrl;
                link.download = `qrcode-${data}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-white shadow-md rounded-full p-1 text-gray-600 hover:bg-gray-100 transition-all duration-300"
            >
              <Download size={14} />
            </button>
          </div>
        </div>
        {size < 80 && (
          <span className="text-xs text-gray-500 mt-1">QR Code</span>
        )}
      </div>

      {/* Modal for expanded view */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">QR Code</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  data
                )}`}
                alt="QR Code"
                className="mb-4"
              />
              <p className="text-sm text-gray-600 mb-4 text-center">
                Scan this QR code for visitor information.
              </p>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                    data
                  )}`;
                  link.download = `qrcode-${data}.png`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-all duration-300 cursor-pointer"
              >
                Download QR Code
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QRCode;
