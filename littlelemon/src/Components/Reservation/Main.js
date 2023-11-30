import Booking from "./Booking";

function Main() {
  const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = (date) => {
    const result = [];
    const random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = (formData) => {
    if (!true) console.log(formData);
    return true;
  };

  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
  };

  return (
    <div id="Main">
      <Booking availableTimes={initializeTimes()} submit={submitAPI} />;
    </div>
  );
}

export default Main;
