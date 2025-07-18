import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Cms = () => {
  const [heading, setHeading] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/heading");
        setHeading(response?.data?.text);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const saveHeading = async () => {
    try {
      axios.post("http://localhost:5000/api/heading", { text: heading });
      alert("heading changed successfully");
      navigate("/");
    } catch (error) {
      console.log("error posting Data: ", error);
    }
    axios
      .post("http://localhost:5000/api/heading", { text: heading })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-cms">
      <div className="box-container">
        <p className="cms-btn">Heading</p>

        <div className="textarea-container">
          <textarea
            rows={6}
            onChange={(e) => setHeading(e.target.value)}
            value={heading}
            id="myTextarea"
            readOnly={isEditable}
          />
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
