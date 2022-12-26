
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";

// parent Card

const Card = (props) => {
 
  return (
    <>
      
       <CompactCard param={props}  />
    </>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {

  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      
      
    >
      
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}
export default Card;
