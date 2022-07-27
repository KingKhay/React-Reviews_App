import Review from "./Components/Review";
const App = () => {
  return (
    <section>
      <div className="title">
        <h2 className="heading">Reviews</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <Review />
      </div>
    </section>
  );
};

export default App;
