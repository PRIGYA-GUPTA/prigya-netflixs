import "./faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Email from "./Email";
function Faq() {
  const List = [
    {
      title: "What is Netflix?",
      des: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },

    {
      title: "How much does Netflix cost ?",
      des: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      des: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      des: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      des: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      des: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [show, setShow] = useState(null);
  return (
    <div className="faq">
      <h1 className="faqHeading">Frequently Asked Questions</h1>

      {List.map((x, index) => (
        <div key={x.title}>
          <FaqDiv
            head={x.title}
            des={x.des}
            index={index}
            show={show}
            setShow={setShow}
          />
        </div>
      ))}
      <p
        style={{
          "font-size": "20px",
          "text-align": "center",
          paddingTop: "40px",
        }}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Email />
    </div>
  );
}

export default Faq;

function FaqDiv({ head, des, index, show, setShow }) {
  function handleClick() {
    setShow(index === show ? null : index);
  }
  return (
    <>
      <div className="faqdiv" onClick={handleClick}>
        <p className="faqpara">{head}</p>
        {index === show ? (
          <FontAwesomeIcon className="faqIcon" icon={faTimes} size="2x" />
        ) : (
          <FontAwesomeIcon className="faqIcon" icon={faPlus} size="2x" />
        )}
      </div>
      {index === show ? <div className="faqdes">{des}</div> : ""}
    </>
  );
}
