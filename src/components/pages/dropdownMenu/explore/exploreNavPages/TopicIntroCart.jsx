import "./topicIntroCart.scss";

const TopicIntroCart = ({ intro }) => {
  return (
    <div className="browse">
      <div>
        <h1 className="text-large">{intro.title}</h1>
        <p className="mt-4">{intro.intro}</p>
      </div>
    </div>
  );
};

export default TopicIntroCart;
