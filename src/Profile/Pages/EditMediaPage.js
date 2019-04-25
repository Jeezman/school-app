import React from "react";
const MediaPage = () => (
  <div className="col-md-9 col-xs-12">
    <div className="row">
      <div className="smart-forms">
        <form
          action="/users/edit-media/"
          id="edit_media_form"
          method="post"
          enctype="multipart/form-data"
        >
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="nGCo3Ai2rQW5ZtUFRWuBfvPJwqfs0WrW"
          />
          <div id="dashboard-content">
            <div className="panel panel-default row-space-4">
              <div className="panel-heading">
                <h4>Profile Photo</h4>
              </div>
              <div className="panel-body photos-section">
                <div className="media row-space-4">
                  <div id="image_container" className="media-left pull-left">
                    <img
                      alt="/bu"
                      className="img-thumbnail3"
                      height="161"
                      src="https://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,g_faces,h_161,q_85,r_5,w_227/v1459195036/profile_pics/vltgv9ytc1cy3h24jhw8.jpg"
                      width="227"
                      data-pagespeed-url-hash="1963794041"
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>

                  <div className="row">
                    <div className="media-body col-xs-12 col-sm-6 col-md-6 col-sm-offset-1">
                      <div className="well bg-info margin-up-mob-10">
                        <p>
                          <span style={{ color: "red" }} className="font-head">
                            THIS IS HOW CLIENTS SEE YOU
                          </span>
                          <br />
                          Hope your photo looks friendly, clear and
                          professional.
                        </p>

                        <ul
                          style={{
                            listStylePosition: "inside",
                            paddingLeft: "0"
                          }}
                        >
                          <li>Is any part of your face cut off?</li>
                          <li>Does it look bright and presentable?</li>
                          <li>Do you have a smile on your face?</li>
                          <li>Will clients hire you looking like this?</li>
                        </ul>
                        <p>
                          If it doesn't look great, then please upload a better
                          one or move on to the the next step if it looks
                          amazing.
                        </p>
                      </div>

                      <div className="row row-condensed">
                        <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                          <input
                            className="cloudinary-fileupload "
                            data-cloudinary-field="image"
                            data-form-data="{&quot;timestamp&quot;: &quot;1497556448&quot;, &quot;upload_preset&quot;: &quot;profile_pics&quot;}"
                            data-url="https://api.cloudinary.com/v1_1/tuteria/auto/upload"
                            id="id_image"
                            name="file"
                            options=""
                            type="file"
                          />
                          <input
                            name="image"
                            type="hidden"
                            value="image/upload/v1459195036/profile_pics/vltgv9ytc1cy3h24jhw8.jpg#38ad9e00f8956b6326c0e2004402bd4d3da10cf7"
                          />
                          <span
                            id="image-upload-btn"
                            data-loading-text="Uploading..."
                            className="btn btn-block btn-lg btn-default btn-file"
                          >
                            Upload Photo
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">
                          <span
                            className="status_value hide"
                            style={{ paddingTop: "10px" }}
                          >
                            Idle
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <hr />
                    <span className="font-head blue-font">
                      Here are good examples from other tutors
                    </span>
                    <p>
                      A good photo should look bright, have a smile and make
                      eye-contact that attracts the best clients to you!
                    </p>
                    <div className="row">
                      <div className="col-sm-4 col-xs-6">
                        <div className="thumbnail">
                          <img
                            src="/static/img/tuteria/xmedia-sample1.jpg.pagespeed.ic.dnnIzt-CMS.webp"
                            alt="..."
                            data-pagespeed-url-hash="968653175"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-6">
                        <div className="thumbnail">
                          <img
                            src="/static/img/tuteria/xmedia-sample3.jpg.pagespeed.ic.p6IGGcFfLo.webp"
                            alt="..."
                            data-pagespeed-url-hash="1557653017"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-6 hidden-xs">
                        <div className="thumbnail">
                          <img
                            src="/static/img/tuteria/xmedia-sample2.jpg.pagespeed.ic.En57ODIQYD.webp"
                            alt="..."
                            data-pagespeed-url-hash="1263153096"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>

                    <small>
                      <em>
                        <span className="font-head red-text">Please note:</span>
                        if you are having troubles uploading your photo, please
                        use Chrome or Firefox browser or email it to
                        <a href="mailto:help@tuteria.com">help@tuteria.com</a>
                      </em>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div className="row">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Profile Video </h4>
        </div>
        <div className="panel-body">
          <div id="video-container" className="row">
            <div className="container-with-delete col-md-7">
              <div
                id="parent-video-container"
                className="panel panel-dark video col-md-middle text-center placeholder"
              >
                <video
                  id="video_profile"
                  className="video-js vjs-default-skin vjs-big-play-centered"
                  controls=""
                  preload="auto"
                  width="300"
                  height="320"
                />
              </div>
              <form
                id="video-upload-form"
                action="/users/edit-media/"
                method="post"
                novalidate=""
              >
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="nGCo3Ai2rQW5ZtUFRWuBfvPJwqfs0WrW"
                />
                <input
                  id="id_upload_type"
                  name="upload_type"
                  type="hidden"
                  value="video"
                />
                <div className="form-group">
                  <label className="control-label sr-only">
                    Youtube Embed Url
                  </label>

                  <div className="input-group">
                    <input
                      className="form-control"
                      data-parsley-errors-container="#err"
                      id="id_video"
                      name="video"
                      placeholder="Youtube Embed Url"
                      required="true"
                      type="url"
                    />
                    <span className="input-group-btn">
                      <button
                        id="upload_btn"
                        data-loading-text="Uploading..."
                        className="btn btn-primary"
                        type="submit"
                      >
                        Upload
                      </button>
                    </span>
                  </div>
                </div>
                <div id="err" />
              </form>
            </div>
            <div className="video-profile-tips col-md-5">
              <h3>Upload a Video</h3>

              <p>Tutors with clear videos get 3 times more clients.</p>
              <ul id="video-checklist" className="checklist">
                <li>
                  Simply introduce yourself to potential clients. Be creative
                  and friendly!
                </li>
                <li>
                  If possible, make it 60 secs or less. Do your best to be
                  concise.
                </li>
                <li>Try to keep the light in front of you, not behind you.</li>
                <li>
                  Look into the camera to create that personal connection. Don't
                  forget smile!
                </li>
                <li>
                  Need help? Follow our simple guide to
                  <a href="/help/topic/25/">upload your video.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MediaPage;
