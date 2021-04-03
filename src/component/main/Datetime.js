import React, { useState } from "react";
// import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

// function Datetime() {
// const [value, onChange] = useState(new Date());

// return (
//   <div>
//     <DateTimePicker onChange={onChange} value={value} />
//   </div>
// );
const Datetime = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="datecss">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="dd/MM/yyyy h:mm aa"
          showTimeInput
          fixedHeight
        />
      </div>
      <h3>{startDate.getDay() ? `${startDate.toDateString()}` : "today"}</h3>
    </>
  );
};
export default Datetime;

// import React from "react";
// import "./style.css";
// import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

// function Datetime() {
//   const dateValue: Date = new Date("02/05/2021 10:30 AM");
//   const minDate: Date = new Date("02/05/2021 09:00 AM");
//   const maxDate: Date = new Date("02/06/2021 06:00 PM");
//   return (
//     <div>
//       <DateTimePickerComponent
//         placeholder="Choose a date and time"
//         value={dateValue}
//         min={minDate}
//         max={maxDate}
//         format="dd-MMM-yy HH:mm"
//         step={60}
//       ></DateTimePickerComponent>
//     </div>
//   );
// }

// export default Datetime;
