// Build a component that books a one-way or round-trip flight for specified dates.

// Requirements
// The user can choose from two flight options: "One-way flight" and "Round-trip flight".
// Input date fields
// The date input fields represent the departure date and return dates.
// The return date input is displayed if the "Round-trip flight" option is chosen, hidden otherwise.
// Form validation should be done upon submission for invalid fields:
// Dates are in the past.
// Return date is before the departure date.
// Upon successful submission, a message is displayed informing the user of the selection:
// One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
// Round-trip flight "You have booked a round-trip flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"
// The <input type="date"> element would be helpful for the date input fields.

import { useState } from 'react';

const TODAY = formatDate(new Date());
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return [year, month, day].join('-');
}

export default function App() {
  const [flightOption, setFlightOption] =
    useState('one-way');
  const [departureDate, setDepartureDate] = useState(
    formatDate(new Date(Date.now() + DAY_IN_MILLISECONDS)), // Tomorrow.
  );
  const [returnDate, setReturnDate] =
    useState(departureDate);

  function submitForm(event) {
    event.preventDefault();
    if (flightOption === 'one-way') {
      alert(
        `You have booked a one-way flight on ${departureDate}`,
      );
      return;
    }

    alert(
      `You have booked a round-trip flight, departing on ${departureDate} and returning on ${returnDate}`,
    );
  }

  return (
    <div>
      <form className="flight-booker" onSubmit={submitForm}>
        <select
          value={flightOption}
          onChange={(event) => {
            setFlightOption(event.target.value);
          }}>
          <option value="one-way">One-way flight</option>
          <option value="round-trip">
            Round-trip flight
          </option>
        </select>
        <input
          aria-label="Departure date"
          type="date"
          value={departureDate}
          onChange={(event) => {
            setDepartureDate(event.target.value);
          }}
          min={TODAY}
        />
        {flightOption === 'round-trip' && (
          <input
            aria-label="Return date"
            type="date"
            value={returnDate}
            min={departureDate}
            onChange={(event) => {
              setReturnDate(event.target.value);
            }}
          />
        )}
        <button>Book</button>
      </form>
    </div>
  );
}