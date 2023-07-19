"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GrayButton from "./gray-button";

const TaskForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
  };

  return (
    <div className="px-10 py-5">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Left Column */}
        <div className="space-y-4">
          <label>
            Sender
            <input
              name="sender"
              type="text"
              className="border rounded px-2 py-1 w-full"
            />
          </label>

          <label>
            Document Type
            <input
              name="documentType"
              type="text"
              className="border rounded px-2 py-1 w-full"
            />
          </label>

          <label>
            Urgency
            <input
              name="urgency"
              type="text"
              className="border rounded px-2 py-1 w-full"
            />
          </label>

          <div className="py-1">
            <label>
              Deadline
              <div>
                <DatePicker
                  name="deadline"
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
              name="receiver"
              type="text"
              className="border rounded px-2 py-1 w-full"
            />
          </label>

          <label>
            Additional Info
            <textarea
              name="additionalInfo"
              className="border rounded px-2 py-1 w-full"
              rows="4"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <GrayButton
            text={"Create Task"}
            size={"md"}
            type="submit"
          ></GrayButton>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
