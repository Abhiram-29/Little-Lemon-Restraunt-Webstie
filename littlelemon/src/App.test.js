import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./Components/Reservation/BookingForm";
import Main from "./Components/Reservation/Main";

describe("BookingForm Component", () => {
  it('renders "Reserve a Table" heading', () => {
    const mockProps = {
      date: "",
      times: "",
      guests: "",
      occassion: "",
      availableTimes: [],
      setDate: jest.fn(),
      setTimes: jest.fn(),
      setGuests: jest.fn(),
      setOccassion: jest.fn(),
      changeStatus: jest.fn(),
    };

    render(<BookingForm {...mockProps} />);

    const headingElement = screen.getByRole("heading", {
      name: /Reserve a Table/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});

describe("BookingForm Component", () => {
  it("calls the submit function when the submit button is clicked", () => {
    const mockChangeStatus = jest.fn();
    const mockSetDate = jest.fn();
    const mockSetTimes = jest.fn();
    const mockSetGuests = jest.fn();
    const mockSetOccassion = jest.fn();

    render(
      <BookingForm
        date=""
        times=""
        guests=""
        occassion=""
        availableTimes={[]}
        changeStatus={mockChangeStatus}
        setDate={mockSetDate}
        setTimes={mockSetTimes}
        setGuests={mockSetGuests}
        setOccassion={mockSetOccassion}
      />
    );

    fireEvent.change(screen.getByLabelText("Choose Date"), {
      target: { value: "2023-01-01" },
    });
    fireEvent.change(screen.getByLabelText("Choose Time Slot"), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Select Occassion"), {
      target: { value: "Birthday" },
    });

    fireEvent.submit(screen.getByTestId("bookingForm"));

    expect(mockChangeStatus).toHaveBeenCalledWith(true);
    expect(mockSetDate).toHaveBeenCalledWith("2023-01-01");
    expect(mockSetTimes).toHaveBeenCalledWith("");
    expect(mockSetGuests).toHaveBeenCalledWith("2");
    expect(mockSetOccassion).toHaveBeenCalledWith("Birthday");
  });
});
