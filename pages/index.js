import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8JmK6poRsOPb2dEIEppR90KQsanLtnbr5QjSTtd0&s",
    address: "Some  addrs",
    decription: "Descrition",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8JmK6poRsOPb2dEIEppR90KQsanLtnbr5QjSTtd0&s",
    address: "Some  addrs",
    decription: "Descrition",
  },
];

function Homepage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default Homepage;
