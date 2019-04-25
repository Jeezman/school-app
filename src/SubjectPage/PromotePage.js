import React from "react";

const PromotePage = ({ username }) => (
  <div className="row">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4>Share Your Profile</h4>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-3 col-xs-12 text-center">
            <img
              alt="/bu"
              src="/static/img/gallery/xpromote.png.pagespeed.ic.ZuNTaAcCjY.webp"
              className="img-responsive center-block"
            />
          </div>
          <div className="col-sm-9 col-xs-12">
            <h4>Get clients from your network</h4>
            <p>
              We work hard to get you clients, but you can also share on
              Facebook, Twitter, LinkedIn and Google+ or any other medium in
              order to drive people directly to your profile beyond those
              searching on Tuteria. Click to share and ensure you write a strong
              content!
            </p>

            <div className="row row-space-4">
              <div className="col-sm-12 col-md-12">
                <div className="row col-sm-7 col-xs-12">
                  <textarea
                    readonly="readonly"
                    style={{ height: "35px" }}
                    className="form-control"
                  >
                    {`https://tuteria.com/${username}/`}
                  </textarea>
                </div>
                <div className="row col-sm-5 col-xs-12">
                  <ul className="list-inline space-for-mobile">
                    <li>
                      <a
                        id="facebook-share"
                        title="Share on Facebook"
                        className="btn btn-social-icon btn-facebook share-popup"
                        target="/bu"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A//tuteria.com/biolao/"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="/bbu"
                        title="Share on Twitter"
                        className="btn btn-social-icon btn-twitter share-popup"
                        href="https://twitter.com/home?status=https%3A//tuteria.com/biolao/"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        id="google-share"
                        title="Share on Google+"
                        target="/bu"
                        href="https://plus.google.com/share?url=https%3A//tuteria.com/biolao/"
                        className="share-popup"
                      >
                        <img
                          src="https://www.gstatic.com/images/icons/gplus-32.png"
                          alt="Share on Google+"
                          data-pagespeed-url-hash="2633285453"
                          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="/bu"
                        title="Share on LinkedIn"
                        className="btn btn-social-icon btn-linkedin share-popup"
                        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A//tuteria.com/biolao/&amp;source="
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PromotePage;
