import "./Contact.css";
import Contact_image from "./Contact.jpg";
export function Contact() {
  return (
    <>
      <div className="contact_page">
        <div className=" contact_head">
          <h2>CONTACT US</h2>
        </div>
        <div className="contact_row">
          <div className="contact_div">
            <div className="contact_p">
              <p style={{ color: "black" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                ipsam! Pariatur nemo officiis ullam sapiente!
              </p>
            </div>
            <div className="support_input">
              <form action="https://formspree.io/f/mjvdbdjr" method="POST">
                <h5 className="input_head">Enter First Name * :</h5>
                <input
                  className="sinput"
                  type="text"
                  size={"48"}
                  name="Name"
                  placeholder="First Name"
                  required
                />

                <br />
                <h5 className="input_head">Enter Last Name :</h5>
                <input
                  className="sinput"
                  type="text"
                  size={"48"}
                  name="Name"
                  placeholder="Last Name"
                />

                <br />
                <h5 className="input_head">Enter Your Email *:</h5>
                <input
                  className="sinput"
                  type="Email-id"
                  name="email"
                  size={"48"}
                  placeholder="Email"
                  required
                />

                <br />
                <h5 className="input_head">Message * :</h5>

                <textarea
                  style={{
                    border: "solid 2px #F5F4FA",
                    backgroundColor: "#F5F4FA",
                    paddingLeft: "20px",
                  }}
                  className="stext"
                  name="Message"
                  rows="4"
                  cols="49.5"
                  placeholder="Message"
                  required
                />
                <div className="contact_p">
                  <p style={{ color: "black" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    magnam qui quaerat quod, atque dolores deleniti ut
                    blanditiis harum quae sequi minus ducimus nobis minima.
                  </p>
                </div>
                <div className="contact_btn">
                  <input className="sbutton" type={"submit"} value={"Submit"} />
                </div>
              </form>
            </div>
          </div>

          <div className="contact_div2">
            <img className="contact_image" src={Contact_image} alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
}
