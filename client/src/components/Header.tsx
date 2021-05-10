import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="row py-2">
        <div className="col-sm-10 col-10 text-center">
          <h3>Simple Notes App</h3>
        </div>
        <div className="col-sm-2 col-12 container-fluid">
          <button type="button" className="btn btn-primary btn-lg float-right">
            Create New Notes
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
