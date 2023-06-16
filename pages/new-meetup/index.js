import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeupPage() {
  function addMeetupHandler(enteredMeetup) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeupPage;
