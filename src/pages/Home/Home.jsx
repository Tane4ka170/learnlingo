import { Link } from "react-router-dom";
import Girl from "../../img/icons/girl.svg";
import Mac from "../../img/icons/iMac-yellow.svg";

const Home = () => {
  return (
    <div>
      <div>
        {/* Main body */}
        <div>
          <h1>
            Unlock your potential with the best<span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link to="/teachers">Get started</Link>
        </div>

        {/* Image */}
        <div>
          <Girl />
          <Mac />
        </div>
      </div>
      <div>
        <ul>
          <li>
            <p>32,000 +</p>
            <p>
              Experienced <span>tutors</span>
            </p>
          </li>
          <li>
            <p>300,000 +</p>
            <p>
              5-star tutor <span>reviews</span>
            </p>
          </li>
          <li>
            <p>120 +</p>
            <p>
              Subjects <span>taught</span>
            </p>
          </li>
          <li>
            <p>200 +</p>
            <p>
              Tutor <span>nationalities</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
