import "../FeatureCard/FeatureCard.css";

function FeatureCard({ icon, title, discription }) {
  return (
   <div className="feature-card">
  <div className="feature-header">
    <span className="feature-icon">
      {icon}
    </span>
    <h3>{title}</h3>
  </div>

  <p>{discription}</p>
</div>
  );
}

export default FeatureCard;