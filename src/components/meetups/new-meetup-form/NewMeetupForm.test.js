// Import necessary dependencies for testing
import React from "react";
import { shallow } from "enzyme";
import NewMeetupForm from "./NewMeetupForm";
import { useMeetups } from "@services/store/MeetupsContext";
import { toast } from "react-toastify";
import { ROUTES } from "@services/routing";

const mockHistoryPushFn = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPushFn,
  }),
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

jest.mock("@services/store/MeetupsContext", () => ({
  useMeetups: jest.fn(),
}));

describe("NewMeetupForm component", () => {
  it("should render NewMeetupForm", () => {
    useMeetups.mockReturnValue({ addMeetup: jest.fn() });

    shallow(<NewMeetupForm />);
  });

  it("should submit form correctly", () => {
    const mockAddMeetup = jest.fn();
    useMeetups.mockReturnValue({ addMeetup: mockAddMeetup });

    const wrapper = shallow(<NewMeetupForm />);

    const formEventMock = {
      preventDefault: jest.fn(),
      target: {
        title: { value: "Test Meetup" },
        image: { value: "test.jpg" },
        address: { value: "Test Address" },
        description: { value: "Test Description" },
        reset: jest.fn(),
      },
    };

    wrapper.find("form").simulate("submit", formEventMock);

    expect(formEventMock.preventDefault).toHaveBeenCalled();
    expect(mockAddMeetup).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Test Meetup",
        image: "test.jpg",
        address: "Test Address",
        description: "Test Description",
      })
    );
    expect(toast.success).toHaveBeenCalledWith(
      "New meetup added successfully!",
      {
        position: "top-right",
      }
    );

    expect(mockHistoryPushFn).toHaveBeenCalledWith(ROUTES.HOME);
    expect(mockHistoryPushFn).toHaveBeenCalledTimes(1);
  });
});
