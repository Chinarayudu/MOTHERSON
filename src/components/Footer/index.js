import "./index.css";

export default function Footer() {
  return (
    <div>
      <div>
        <div className="icons-container"></div>
      </div>
      <div className="copyright-container">
        <p>Copyright</p>
        <p>2024, All rights received</p>
      </div>
      <div className="vector-image">
        <img
          src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704413921/assignment_vector_hudkqt.png"
          alt="assignment"
          className="vector-logo"
        />
      </div>
    </div>
  );
}
