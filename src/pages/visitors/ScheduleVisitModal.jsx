import React, { useState, useEffect, useRef } from "react";
import QRCode from "../../components/common/QRCode";

const ScheduleVisitModal = ({ isOpen, onClose, onSchedule }) => {
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [step, setStep] = useState(1); // Step 1: Form, Step 2: Confirmation with QR
  const [visitId, setVisitId] = useState("");
  const [qrData, setQrData] = useState("");
  const modalRef = useRef(null);

  // Generate visit ID when modal is opened and form is displayed
  useEffect(() => {
    if (isOpen && step === 1) {
      setVisitId(
        `VISIT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
      );
    }
  }, [isOpen]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Handle form submission and QR generation
  const handleSubmit = () => {
    if (!department || !date || !time || !purpose) {
      alert("Please fill all fields");
      return;
    }

    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);

    const visitData = {
      id: visitId,
      department,
      date: formattedDate,
      time: formattedTime,
      purpose,
      status: "Upcoming",
    };

    const qrCodeData = JSON.stringify({
      id: visitId,
      dept: department,
      date: formattedDate,
      time: formattedTime,
      purpose,
    });

    setQrData(qrCodeData);
    setStep(2);

    if (onSchedule) {
      onSchedule({ ...visitData, qrData: qrCodeData });
    }
  };

  // Format date: "YYYY-MM-DD" → "Month D, YYYY"
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Format time: "HH:MM" → "h:mm AM/PM - h:mm AM/PM"
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    const endDate = new Date(date);
    endDate.setMinutes(endDate.getMinutes() + 45);

    const startTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    const endTime = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    return `${startTime} - ${endTime}`;
  };

  // Reset state and close modal
  const handleClose = () => {
    setDepartment("");
    setDate("");
    setTime("");
    setPurpose("");
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {step === 1 ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Schedule a Visit
              </h2>
              <p className="text-gray-500 mt-1">
                Complete the form below to schedule your visit
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select a department</option>
                  <option value="HR Department">HR Department</option>
                  <option value="IT Department">IT Department</option>
                  <option value="Finance Department">Finance Department</option>
                  <option value="Marketing Department">
                    Marketing Department
                  </option>
                  <option value="Operations Department">
                    Operations Department
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="purpose"
                  className="block text-sm font-medium text-gray-700"
                >
                  Purpose of Visit
                </label>
                <input
                  type="text"
                  id="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="Briefly describe your visit purpose"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full rounded-md bg-[#3c73b6] py-2 px-4 text-white font-medium hover:bg-[#3c73b6]/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Schedule Visit
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">
                Visit Scheduled!
              </h2>
              <p className="text-gray-500 mt-1">
                Your visit has been confirmed
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <QRCode data={qrData} size={200} />
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-500">Visit ID:</div>
                  <div className="font-medium">{visitId}</div>

                  <div className="text-gray-500">Department:</div>
                  <div className="font-medium">{department}</div>

                  <div className="text-gray-500">Date:</div>
                  <div className="font-medium">{formatDate(date)}</div>

                  <div className="text-gray-500">Time:</div>
                  <div className="font-medium">{formatTime(time)}</div>

                  <div className="text-gray-500">Purpose:</div>
                  <div className="font-medium">{purpose}</div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>Please present this QR code at the reception desk</p>
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  onClick={handleClose}
                  className="flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Done
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleVisitModal;
