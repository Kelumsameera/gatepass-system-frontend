import { useState } from 'react';

export default function GatepassRequest() {
  const [formData, setFormData] = useState({
    name: '',
    employeeNo: '',
    department: '',
    nicNo: '',
    date: '',
    timeOut: '',
    timeIn: '',
    place: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    const required = [
      'name', 'employeeNo', 'department', 'nicNo', 
      'date', 'timeOut', 'timeIn', 'place', 'reason'
    ];

    required.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = 'Required';
      }
    });

    if (formData.nicNo && !/^\d{9}[VvXx]?$|^\d{12}$/.test(formData.nicNo)) {
      newErrors.nicNo = 'Invalid NIC';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Gatepass Request:', formData);
      alert('Gatepass request submitted successfully!');
      setFormData({
        name: '', employeeNo: '', department: '', nicNo: '',
        date: '', timeOut: '', timeIn: '', place: '', reason: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Gatepass Request
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Employee No', name: 'employeeNo', type: 'text', placeholder: 'e.g. E12345' },
            { label: 'Department', name: 'department', type: 'text', placeholder: 'e.g. IT, HR' },
            { label: 'NIC No', name: 'nicNo', type: 'text', placeholder: '123456789V' },
            { label: 'Date', name: 'date', type: 'date' },
            { label: 'Time Out', name: 'timeOut', type: 'time' },
            { label: 'Time In', name: 'timeIn', type: 'time' },
            { label: 'Place', name: 'place', type: 'text', placeholder: 'Where are you going?' },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="flex flex-col md:flex-row md:items-center gap-1">
              <label className="md:w-1/3 text-gray-700 font-medium text-sm md:text-base">
                {label} <span className="text-red-500">*</span>
              </label>
              <div className="flex-1">
                <input
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder || ''}
                  className={`w-full px-3 py-2 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors[name] ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                {errors[name] && <p className="text-red-500 text-xs mt-0.5">{errors[name]}</p>}
              </div>
            </div>
          ))}

          {/* Reason */}
          <div className="md:col-span-2 space-y-1">
            <label className="block text-gray-700 font-medium text-sm md:text-base">
              Reason for Gatepass <span className="text-red-500">*</span>
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Briefly explain the purpose..."
              rows={3}
              className={`w-full p-3 border rounded-lg resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                errors.reason ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-4 sm:mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-base py-2.5 px-8 rounded-lg shadow-md transition transform hover:scale-105 active:scale-95"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}