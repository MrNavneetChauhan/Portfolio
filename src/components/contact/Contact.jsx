import "./Contact.scss";
import {useState} from "react"
export const Contact = () => {
    const [message,setMessage] = useState({
        email:"",
        textarea:""
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
    }
  return (
    <div className="contact" id="contacts">
      <div className="left">
        <img src="assets/contact.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Email"></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};
