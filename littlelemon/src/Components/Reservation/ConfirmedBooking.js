const ConfirmedBooking = (props) => {
  return (
    <div className="confirm">
      <div>
        <h1>Thank You for your Reservation!</h1>
        <article>
          <h2>Reservation Details:</h2>
          <h3>Date : {props.date}</h3>
          <h3>Time : {props.times}</h3>
          <h3>Guests : {props.guests}</h3>
          {props.occassion != "" ? (
            <h3>Occassion : {props.occassion}</h3>
          ) : (
            <h3>Thank You</h3>
          )}
        </article>
      </div>
    </div>
  );
};
export default ConfirmedBooking;
