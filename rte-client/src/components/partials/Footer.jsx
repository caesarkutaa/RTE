import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const Footer = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function checkSub() {
    if (name != "" && email != "" && message != "") {
      setSubmit(true);
    }
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    checkSub();
    emailjs
      .sendForm(
        "service_de53f4q",
        "template_5ttvt6r",
        form.current,
        "dpZxMv6bPvp0vzdZP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeMail(event) {
    setEmail(event.target.value);
  }
  function handleChangeMessage(event) {
    setMessage(event.target.value);
  }
  return (
    <div>
      <footer class="bg-footer mt-3">
        <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div class="max-w-sm">
            <div class="mb-6 flex h-12 items-center space-x-2">
              <span class="text-2xl font-bold">
                Right Time<span class="text-blue-600">Entertainment</span>.
              </span>
            </div>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
            <nav aria-label="Footer Navigation" class="text-white">
              <ul class="space-y-3">
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Songs
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Music Videos
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    News
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Albums
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="">
            {submit ? (
              <div className="thank-you-meesage">
                <h5>Message Recieved!</h5>
                <p>thank you {name}</p>
                <small>want to send another message?</small>
                <button onClick={() => setSubmit(false)}>
                  send another message
                </button>
              </div>
            ) : (
              <>
                <h2>Intrested in promotion , send a mail</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    onChange={handleChangeName}
                    type="text"
                    required
                    name="user_name"
                    placeholder="enter your name"
                  />
                  <input
                    onChange={handleChangeMail}
                    required
                    type="email"
                    name="user_email"
                    placeholder="enter your email"
                  />
                  <textarea
                    required
                    placeholder="enter message"
                    onChange={handleChangeMessage}
                    name="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button className="email-btn" type="submit">Send Message</button>
                </form>
              </>
            )}
          </div>
        </div>
        <div class="bg-footer">
          <div class="mx-auto  max-w-screen-xl  px-4 py-3 text-center text-gray-100 ">
            <div class="text-center">
              © 2023 Right Time Entertainment | All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
