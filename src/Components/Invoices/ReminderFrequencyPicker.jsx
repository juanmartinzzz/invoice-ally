import { X } from "lucide-react";

const reminderFrequencies = [
  {
    value: 'daily',
    label: 'Daily',
  },
  {
    value: 'onWeekdays',
    label: 'On Weekdays',
  },
  {
    value: 'specificDaysOfWeek',
    label: 'Specific Days of the Week',
  },
  {
    value: 'onWeekends',
    label: 'On Weekends',
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'biweekly',
    label: 'Biweekly',
  },
  {
    value: 'monthly',
    label: 'Monthly',
  },
];

const ReminderFrequencyPicker = ({setShowReminderFrequencyPicker, onChange}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-xs p-6 shadow-sm relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Select Reminder Frequency</h2>

          <button
            aria-label="Close"
            onClick={() => setShowReminderFrequencyPicker(false)}
            className="relative -top-4 -right-4 text-black hover:bg-light rounded-full cursor-pointer"
          >
            <X size={32} />
          </button>
        </div>

        {reminderFrequencies.map((frequency) => (
          <div key={frequency.value} className="py-2" onClick={() => {
            onChange({target: {value: frequency.value}});
            setShowReminderFrequencyPicker(false);
          }}>{frequency.label}</div>
        ))}
      </div>
    </div>
  );
};

export default ReminderFrequencyPicker;
