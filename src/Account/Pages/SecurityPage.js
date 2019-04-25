import React from "react";
const Security = () => (
  <div className="col-sm-9 col-xs-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4>Change Password</h4>
      </div>
      <div className="panel-body">
        <form
          method="POST"
          action="/accounts/password/change/"
          className="password_change"
        >
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="nGCo3Ai2rQW5ZtUFRWuBfvPJwqfs0WrW"
          />
          <div id="div_id_oldpassword" className="form-group">
            {" "}
            <label
              for="id_oldpassword"
              className="control-label  requiredField"
            >
              Current Password<span className="asteriskField">*</span>{" "}
            </label>{" "}
            <div className="controls ">
              {" "}
              <input
                className="textinput textInput form-control"
                id="id_oldpassword"
                name="oldpassword"
                placeholder="Current Password"
                type="password"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div id="div_id_password1" className="form-group">
            {" "}
            <label for="id_password1" className="control-label  requiredField">
              New Password<span className="asteriskField">*</span>{" "}
            </label>{" "}
            <div className="controls ">
              {" "}
              <input
                className="textinput textInput form-control"
                id="id_password1"
                name="password1"
                placeholder="New Password"
                type="password"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div id="div_id_password2" className="form-group">
            {" "}
            <label for="id_password2" className="control-label  requiredField">
              New Password (again)<span className="asteriskField">*</span>{" "}
            </label>{" "}
            <div className="controls ">
              {" "}
              <input
                className="textinput textInput form-control"
                id="id_password2"
                name="password2"
                placeholder="New Password (again)"
                type="password"
              />{" "}
            </div>{" "}
          </div>
          <button className="btn btn-primary" type="submit" name="action">
            Change Password
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Security;
