import { useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



const DateTimePicker = ({ onDateTimeSelect }) => {
    const [startDate, setStartDate] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
        onDateTimeSelect(date);
    }
  return (
    <div className='mt-4'>
   <h2 className='text-lg font-semibold mb-2'>Select Appointment Date and Time</h2>
   <DatePicker 
   selected={startDate} 
   onChange={handleDateChange} 
   showTimeSelect 
   dateFormat='Pp' 
   timeIntervals={30} 
   minDate={new Date()} 
   className='border p-2 rounded w-full' placeholderText='Select date and time'
   />
   </div>
  );
};

export default DateTimePicker;