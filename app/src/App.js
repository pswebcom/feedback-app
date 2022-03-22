import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="feedback">
          <FeedbackItem />
        </div>
      </div>
    </>
  );
};

export default App;
