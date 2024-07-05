import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";
import { useMeetups } from "@services/store/MeetupsContext";

jest.mock("@services/store/MeetupsContext");

const mockItem = {
  id: "1",
  title: "Test Meetup",
  address: "Test Address",
  description: "Test Description",
  image: "test.jpg",
};

describe("MeetupItem component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render MeetupItem", () => {
    useMeetups.mockReturnValue({ favorites: [], toggleFavorite: jest.fn() });

    shallow(<MeetupItem item={mockItem} />);
  });

  it("should render correct content based on props", () => {
    const item = {
      id: "1",
      title: "Test Meetup",
      address: "Test Address",
      description: "Test Description",
      image: "test.jpg",
    };
    useMeetups.mockReturnValue({ favorites: [], toggleFavorite: jest.fn() });

    const wrapper = shallow(<MeetupItem item={item} />);

    expect(wrapper.find("h3").text()).toBe(item.title);
    expect(wrapper.find("address").text()).toBe(item.address);
    expect(wrapper.find("p").text()).toBe(item.description);
    expect(wrapper.find("img").prop("src")).toBe(item.image);
    expect(wrapper.find("img").prop("alt")).toBe(item.title);
  });

  it("should correctly toggle favorites on button click", () => {
    const mockToggleFavorite = jest.fn();
    useMeetups.mockReturnValue({
      favorites: [],
      toggleFavorite: mockToggleFavorite,
    });

    const wrapper = shallow(<MeetupItem item={mockItem} />);
    const button = wrapper.find("button");

    button.simulate("click");

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockItem.id);
  });
});
