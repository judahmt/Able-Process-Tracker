'use client'

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GrayButton from './gray-button';

const TaskForm = () => {
  const [deadline, setDeadline] = useState(null);
  const [sender, setSender] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [receiver, setReceiver] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here
    const formData = {
      deadline,
      sender,
      documentType,
      urgency,
      receiver,
      additionalInfo,
    };
    console.log(formData);
  };

  return (
    <div className='px-10 py-5'>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Column */}
      <div className="space-y-4">
        <label>
          Sender
          <input
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </label>

        <label>
          Document Type
          <input
            type="text"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </label>

        <label>
          Urgency
          <input
            type="text"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </label>

        <div className='py-1'>
        <label>
          Deadline
          <div>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="border rounded px-2 py-1 w-full"
          />
          </div>
        </label>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <label>
          Receiver
          <input
            type="text"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </label>

        <label>
          Additional Info
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="border rounded px-2 py-1 w-full"
            rows="4"
          />
        </label>
      </div>

      {/* Submit Button */}
      <div className="col-span-2">
        <GrayButton text={'Create Task'} size={'md'} type='submit'></GrayButton>
      </div>
    </form>
    </div>
  );
};

export default TaskForm;