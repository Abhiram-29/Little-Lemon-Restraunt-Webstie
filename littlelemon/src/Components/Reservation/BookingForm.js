function BookingForm(props) {
  // const [date, setDate] = useState("");
  // const [times, setTimes] = useState("");
  // const [guests, setGuests] = useState("");
  // const [occassion, setOccassion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeStatus(true);
    // props.SubmitForm(e);
  };

  const handleChange = (e) => {
    props.setDate(e);
    // props.dispach(e);
  };

  return (
    <div id="BookingForm">
      <section id="bookingSection">
        <form
          onSubmit={handleSubmit}
          id="bookingForm"
          data-testid="bookingForm"
        >
          <h1>Reserve a Table</h1>
          <fieldset>
            <div>
              <label htmlFor="DateSelect">Choose Date</label>
              <input
                id="DateSelect"
                value={props.date}
                type="date"
                required
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="TimeSelect">Choose Time Slot</label>
              <select
                id="TimeSelect"
                required
                value={props.times}
                onChange={(e) => props.setTimes(e.target.value)}
              >
                <option value="">Select a Time Slot</option>
                {props.availableTimes.map((a) => {
                  return <option key={a}>{a}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="bookGuests">Number of Guests</label>
              <input
                id="bookGuests"
                min={1}
                required
                value={props.guests}
                type="number"
                onChange={(e) => props.setGuests(e.target.value)}
                max={50}
              />
            </div>
            <div>
              <label htmlFor="bookOccassion">Select Occassion</label>
              <select
                id="bookOccassion"
                value={props.occassion}
                key={props.occassion}
                onChange={(e) => props.setOccassion(e.target.value)}
              >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="Submitbtn">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default BookingForm;
