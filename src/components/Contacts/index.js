import "./index.css";

export default function Contacts() {
  return (
    <div className="contact">
      <div>
        <h1 className="contact-heading">Contact Information</h1>
        <p className="contact-para">Name: Bellary China Rayudu</p>
        <p className="contact-para">Email: bellarychinna78936@gmail.com</p>
        <p className="contact-para">Phone: 8688261165</p>
        <p className="contact-para">
          Address: Anantapuram,Andhra Pradesh ,515865
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704424820/contact_image_touuwn.jpg"
        alt="contact"
        className="contact-image"
      />
    </div>
  );
}
