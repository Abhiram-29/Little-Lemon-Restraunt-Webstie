import { useState } from "react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

const Booking = (props) => {
  const [submitted, setSubmitted] = useState(false);
  console.log(props.availableTimes);
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccassion] = useState("");
  return (
    <>
      {submitted ? (
        <div>
          <ConfirmedBooking
            date={date}
            times={times}
            guests={guests}
            occassion={occassion}
            resubmit={setSubmitted}
          />
        </div>
      ) : (
        <div id="booking">
          <BookingForm
            availableTimes={
              props.availableTimes
            } /*disptach = {props.disptach} submitForm = {props.SubmitForm}*/
            changeStatus={setSubmitted}
            apiSubmit={props.submit}
            date={date}
            setDate={setDate}
            times={times}
            setTimes={setTimes}
            guests={guests}
            setGuests={setGuests}
            occassion={occassion}
            setOccassion={setOccassion}
          />
        </div>
      )}
    </>
  );
};
export default Booking;
