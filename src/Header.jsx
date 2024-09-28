import React from "react";
import "./Style.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid" id="Background-Header">
        <div className="row">
          <div className="col-sm-12 p-3 d-flex justify-content-between p-3">
            <div></div>
            <div>
              <h1 className="text-white" id="text-design">
                📝TODO
              </h1>
            </div>
            <div>
              <h1 className="bg-secondary rounded-3" id="profile">
                👨‍💼
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
