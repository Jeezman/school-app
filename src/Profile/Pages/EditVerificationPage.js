import React from "react";
const Verification = () => (
  <div className="col-md-9 col-xs-12">
    <div className="">
      <div className="panel panel-default row">
        <div className="panel-heading">Your Current Verifications</div>
        <div className="panel-body">
          <ul className="list-unstyled">
            <li className="email unverified row-space-4 clearfix">
              <h4>Email Address</h4>
              <p className="description">
                You have confirmed your email: <b>oyeniyibiola@gmail.com</b>. A
                confirmed email is important to allow us to securely communicate
                with you.
              </p>
            </li>

            <h4>Google</h4>
            <p className="description">
              You have connected your Tuteria account to your Google account.
              Connecting to a social network helps establish your online
              identity.
            </p>

            <h4>Offline ID</h4>
            <p className="description">
              Your offline ID has been verified. Uploading an offline ID helps
              confirm personal details about you and maintain trust within our
              community.
            </p>
          </ul>
        </div>
      </div>

      <div className="panel panel-default row">
        <div className="panel-heading">
          <h4>Verify Your Online ID</h4>
        </div>
        <div className="panel-body">
          <ul className="list-unstyled">
            <li className="facebook unverified row-space-4 clearfix">
              <h4>Facebook</h4>

              <div className="row">
                <div className="col-sm-7">
                  <p className="description verification-text-description">
                    Connect your Tuteria account to Facebook. This verifies your
                    online identity and never posts on your profile.
                  </p>
                </div>

                <div className="col-sm-5">
                  <div className="connect-button">
                    <a
                      href="no-script-url"
                      ng-click="facebookConnect()"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="unverified row-space-4 clearfix">
              <h4>LinkedIn</h4>

              <div className="row">
                <div className="col-sm-7">
                  <p className="description verification-text-description">
                    Connect your Tuteria profile to your LinkedIn account to
                    verify your online identity. This does not post on your
                    network.
                  </p>
                </div>
                <div className="col-sm-5">
                  <div className="connect-button">
                    <a
                      href="/accounts/linkedin_oauth2/login/?process=connect&amp;next=%2Fusers%2Fedit-verification%2F"
                      className="btn btn-block btn-lg"
                      style={{ background: "#1686B0", color: "white" }}
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Verification;
