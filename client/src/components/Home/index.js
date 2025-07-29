import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../Header";
import MyImage from "../../images/style-frame-asset.png";
import "./style.css";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import {
  PiIntersectSquareDuotone,
  PiCoinsLight,
  PiBagLight,
} from "react-icons/pi";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const API_URL = process.env.REACT_APP_API_URI;

const features1 = [
  {
    icon: <MdKeyboardDoubleArrowRight />,
    text: "Ready to Go Algos",
    desc: "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
  },
  {
    icon: <PiIntersectSquareDuotone />,
    text: "Internal capability building",
    desc: "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
  },
];

const features2 = [
  {
    icon: <PiCoinsLight />,
    text: "Multi-source data",
    desc: "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
  },
  {
    icon: <PiBagLight />,
    text: "Stakeholder alignment",
    desc: "No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.",
  },
  {
    icon: <HiMiniArrowPathRoundedSquare />,
    text: "Continuous engagement",
    desc: "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
  },
];

const Home = () => {
  const [heading, setHeading] = useState("");
  const [isLoading, setisLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/heading`);
        setHeading(response?.data?.text);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-home">
      <Header />

      <div className="Home-container">
        <div className="container color-background">
          <div className="container-2">
            <div className="banner-text-container">
              {isLoading ? (
                <h1>
                  <Skeleton width={500} />
                </h1>
              ) : (
                <h1>
                  {heading
                    ? heading
                    : " Hyper boost Your Revenue Management, Marketing and Commercial Functions with Business Ready AI"}
                </h1>
              )}
              <p>
                Powerful AI solutions that go beyond mere data sorting and
                exploration. Use our array of AI enabled solutions that
                understand your business and recommend the optimal way forward. 
              </p>
              <button
                type="button"
                onClick={() => {
                  navigate("/cms");
                }}
              >
                Get started
              </button>
            </div>

            <div className="banner-image-container">
              <img src={MyImage} alt="style-frame-asset" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="main-progress-bar">
            <ul className="features-container">
              {features1.map((each, index) => (
                <li key={index} className="each-feature">
                  <div className="icon-container">{each.icon}</div>
                  <h4>{each.text}</h4>
                  <p>{each.desc}</p>
                </li>
              ))}
            </ul>

            <div className="progress-bar">
              <div className="line">
                <div className="green-section"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>

            <ul className="features-container second">
              {features2.map((each, index) => (
                <li key={index} className="each-feature">
                  <div className="icon-container">{each.icon}</div>
                  <h4>{each.text}</h4>
                  <p>{each.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
