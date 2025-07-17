import { useState } from "react";
import "./style.css";

const Cms = () => {
  const [heading, setHeading] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  const saveHeading = () => {};

  return (
    <div className="main-cms">
      <div className="box-container">
        <p className="cms-btn">Heading</p>

        <div className="textarea-container">
          <textarea
            rows={6}
            onChange={(e) => setHeading(e.target.value)}
            value={heading}
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
