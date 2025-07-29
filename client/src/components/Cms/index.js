import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Skeleton from "react-loading-skeleton";

const API_URL = process.env.REACT_APP_API_URI;

const Cms = () => {
  const [heading, setHeading] = useState("");
  const [isEditable, setIsEditable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/heading`);
        setHeading(response?.data?.text);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const saveHeading = async () => {
    try {
      await axios.post(`${API_URL}/api/heading`, {
        text: heading,
      });
      alert("heading changed successfully");
      navigate("/");
    } catch (error) {
      console.log("error posting Data: ", error);
    }
  };

  return (
    <div className="main-cms">
      <div className="box-container">
        <p className="cms-btn heading-btn-cms">Heading</p>

        <div className="textarea-container">
          {isLoading ? (
            <Skeleton height={100} />
          ) : (
            <textarea
              rows={6}
              onChange={(e) => setHeading(e.target.value)}
              value={heading}
              id="myTextarea"
              readOnly={isEditable}
            />
          )}
          <div>
            <button
              type="button"
              className="cms-btn"
              onClick={() => setIsEditable(!isEditable)}
            >
              Edit
            </button>
            <button type="button" className="cms-btn" onClick={saveHeading}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cms;
