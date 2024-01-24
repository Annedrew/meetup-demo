import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Aerial_view_of_Apple_Park_dllu.jpg/2560px-Aerial_view_of_Apple_Park_dllu.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Apple_Garage.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={DUMMY_DATA} />
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
