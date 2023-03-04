const Box = (props) => {
  //  Write your code here.
  const { box, text } = props;
  return <p className={box}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="boxes-container">
      <Box box="small-box" text="Small" />
      <Box box="medium-box" text="Medium" />
      <Box box="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
