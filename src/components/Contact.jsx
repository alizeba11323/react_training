import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async () => {
    const formData = new FormData();
    const templateParams = {
      to_name: data.name,
      from_name: "alizeba",
      message: data.message,
    };
    formData.append("user_name", data.name);
    formData.append("user_email", data.email);
    formData.append("message", data.message);
    try {
      const res = await emailjs.send(
        "service_jmw2009",
        "template_76xgc9l",
        templateParams,
        "fOamCqrZuIS6DQh0d"
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="message"
          value={data.message}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add Contact</button>
      </div>
    </div>
  );
}

export default Contact;
