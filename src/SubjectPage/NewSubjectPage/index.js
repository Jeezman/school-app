import React from "react";

const NewSubjectPage = () => (
  <div id="content" className="spaced-top-xl spaced-bottom-xl">
    <div id="body-container" className="container">
      <div className="col-sm-10 col-sm-offset-1 col-xs-12">
        <div className="row">
          <div className="col-sm-12 br-bottom-md" />
        </div>

        <section className="row text-center">
          <div className="col-sm-12 padding-bottom-50 padding-top-50">
            <h2 style={{ fontWeight: "700px" }}>Create Your Subjects</h2>

            <p style={{ fontSize: "15px" }}>
              Tuteria lets you make money teaching people what you love
            </p>
          </div>
        </section>

        <div className="row">
          <div className="col-sm-12">
            <div
              id="wizard-container"
              className="row well bordered spaced-bottom-lg"
            >
              <div className="row">
                <div className="col-sm-12">
                  <div id="containing-container">
                    <div data-reactid=".0">
                      <div data-reactid=".0.0">
                        <h4 className="br-bottom-md" data-reactid=".0.0.0">
                          Add a Subject
                        </h4>
                        <p data-reactid=".0.0.1">
                          Select a category to find the subject, exam or skill
                          you want to teach
                        </p>
                        <div
                          className="row"
                          id="form-field"
                          data-reactid=".0.0.2"
                        >
                          <div className="col-sm-6" data-reactid=".0.0.2.0">
                            <div
                              className="form-group"
                              data-reactid=".0.0.2.0.0"
                            >
                              <label data-reactid=".0.0.2.0.0.0">
                                Category
                              </label>
                              <div data-reactid=".0.0.2.0.0.1">
                                <select
                                  name="category"
                                  className="form-control row-space-2"
                                  data-reactid=".0.0.2.0.0.1.0"
                                >
                                  <option
                                    label="Select Category"
                                    data-reactid=".0.0.2.0.0.1.0.$0"
                                  >
                                    Select Category
                                  </option>
                                  <option
                                    value="1"
                                    label="Mathematics"
                                    data-reactid=".0.0.2.0.0.1.0.$1"
                                  >
                                    Mathematics
                                  </option>
                                  <option
                                    value="2"
                                    label="English"
                                    data-reactid=".0.0.2.0.0.1.0.$2"
                                  >
                                    English
                                  </option>
                                  <option
                                    value="5"
                                    label="Exam Preparation"
                                    data-reactid=".0.0.2.0.0.1.0.$3"
                                  >
                                    Exam Preparation
                                  </option>
                                  <option
                                    value="4"
                                    label="Science"
                                    data-reactid=".0.0.2.0.0.1.0.$4"
                                  >
                                    Science
                                  </option>
                                  <option
                                    value="10"
                                    label="Business &amp; Commercial"
                                    data-reactid=".0.0.2.0.0.1.0.$5"
                                  >
                                    Business &amp; Commercial
                                  </option>
                                  <option
                                    value="15"
                                    label="Music"
                                    data-reactid=".0.0.2.0.0.1.0.$6"
                                  >
                                    Music
                                  </option>
                                  <option
                                    value="3"
                                    label="Languages"
                                    data-reactid=".0.0.2.0.0.1.0.$7"
                                  >
                                    Languages
                                  </option>
                                  <option
                                    value="7"
                                    label="Computer &amp; Software"
                                    data-reactid=".0.0.2.0.0.1.0.$8"
                                  >
                                    Computer &amp; Software
                                  </option>
                                  <option
                                    value="8"
                                    label="Arts &amp; Religion"
                                    data-reactid=".0.0.2.0.0.1.0.$9"
                                  >
                                    Arts &amp; Religion
                                  </option>
                                  <option
                                    value="9"
                                    label="Beauty &amp; Lifestyle"
                                    data-reactid=".0.0.2.0.0.1.0.$10"
                                  >
                                    Beauty &amp; Lifestyle
                                  </option>
                                  <option
                                    value="18"
                                    label="Financial Accounting and Taxation"
                                    data-reactid=".0.0.2.0.0.1.0.$11"
                                  >
                                    Financial Accounting and Taxation
                                  </option>
                                  <option
                                    value="14"
                                    label="Elementary &amp; Kindergarten"
                                    data-reactid=".0.0.2.0.0.1.0.$12"
                                  >
                                    Elementary &amp; Kindergarten
                                  </option>
                                  <option
                                    value="13"
                                    label="Cooking"
                                    data-reactid=".0.0.2.0.0.1.0.$13"
                                  >
                                    Cooking
                                  </option>
                                  <option
                                    value="12"
                                    label="Dance &amp; Crafts"
                                    data-reactid=".0.0.2.0.0.1.0.$14"
                                  >
                                    Dance &amp; Crafts
                                  </option>
                                  <option
                                    value="11"
                                    label="Sports &amp; Fitness"
                                    data-reactid=".0.0.2.0.0.1.0.$15"
                                  >
                                    Sports &amp; Fitness
                                  </option>
                                  <option
                                    value="6"
                                    label="Special Needs"
                                    data-reactid=".0.0.2.0.0.1.0.$16"
                                  >
                                    Special Needs
                                  </option>
                                  <option
                                    value="16"
                                    label="Nigerian Languages"
                                    data-reactid=".0.0.2.0.0.1.0.$17"
                                  >
                                    Nigerian Languages
                                  </option>
                                  <option
                                    value="17"
                                    label="School Subjects"
                                    data-reactid=".0.0.2.0.0.1.0.$18"
                                  >
                                    School Subjects
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6" data-reactid=".0.0.2.2">
                            <div
                              className="form-group"
                              data-reactid=".0.0.2.2.0"
                            >
                              <label data-reactid=".0.0.2.2.0.0">Skill</label>
                              <div data-reactid=".0.0.2.2.0.1">
                                <select
                                  name="skill"
                                  className="form-control row-space-2"
                                  data-reactid=".0.0.2.2.0.1.0"
                                >
                                  <option
                                    value=""
                                    label="Select Skill"
                                    data-reactid=".0.0.2.2.0.1.0.$0"
                                  >
                                    Select Skill
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden" data-reactid=".0.0.3" />
                      </div>
                      <hr data-reactid=".0.1" />
                      <small data-reactid=".0.2">
                        <em data-reactid=".0.2.0">
                          <span data-reactid=".0.2.0.0">
                            If you encounter any difficulties using this page,
                            please email{" "}
                          </span>
                          <a
                            href="mailto:help@tuteria.com"
                            data-reactid=".0.2.0.1"
                          >
                            help@tuteria.com
                          </a>
                          <span data-reactid=".0.2.0.2">
                            {" "}
                            directly for help
                          </span>
                        </em>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="how-it-works"
        className="hidden-xs wrapper-full clearfix text-center"
      >
        <div className="icon-box-6 text-center">
          <div className=" col-sm-4">
            <div className="icon-box-6-item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEVMaXErPU8qPU86l9M6ltI6ltM6ltMzcZw3isA6ltIrPU86l9M6l9M6l9M6l9M6ltMrPU4rPU8qPU86l9MrPU8rPU8qPE4sPlA7l9PbF/PhAAAAF3RSTlMAJkc89rbQCRXmaoWdTyZg5vWlcYm80Xu+mhUAAAPWSURBVHja7ZrrrqsgEIWnylVEbW078/5Pen5ot4qodCu6c8JKmhg1zldYMyAIkJSUlJSUlPStZMsZLUnzVkaOX2tal66jxjdE3KrFy8pyIhMxfkvMbjURozZafMXIgjLLvSBaAEtMxeuAEpRYtQAHKON1gqAcShL54g1WUws5iVgAjCQwqlbuyEmDJBYLgKj77bslASSABJC0Ilm87hhbzatYil80eI7eN2/8J56mxkdQ4Il6zePf7oh4L27RjXZ7ICJm3g5o4ocHAHgh4mN29o2IxTnJliFiMzt7R0R5DoBExPvsLCLiWfXGGysBJIA/AVCckoeyWATA5qnih+/GXD8A4v0RtRzfnp8Jx+xS9vgZqbJo4X9iPLJVuncUhOy12srVqH8Qm8P9mL0/4Z+qDzcVcQsAshjuO9AM7j/L+XzmTkSiluOWwqP8qJ7NpG9rQeQD0ES6VQBwe9wP9ONgrVcGALLVRNoLIGtBxMpqyrzTDCPj3wBAGUYkaukF6PqGiOcTM+wpToPxnzcAqEpGndeWAPp7hA1ImwDnvV3nEZX5OJoHALplON3KSft9b4bB+F0v1oKImcqN5gHofcKMmhanr8zgdV6rfNH8p+yPH0cpHGyGIY0e2ch5i9G8pwY/jotYiBkc7wzOA1AqHODjx644rY8i3pLbNdjYeQBafwMAoIauCxup3JJrJ84bBQkEAJCDebdHKqfkzpwXBsC5c8F6ipPPDI7xldGu88IAPJd8xckdqZySO3befoBPIvXFyTNSOSV3lEEHAXw61KhJV88WPgbnld419R0ATnF6+1Z+CjkB9ciYPQDT4vRyF10WnbfaFN8BTIrTYLtPfRqZdQeA2NhvUUYT+fcGud95XwJsSy7tSpW0tWlZVUcAQE3ce17Q1v9n7BAA5d+4ykkHt/wKgAyYdxgS8zyr9PaWaQiA1tsAUjiDTDdwCnkEQFBXKO7bNP0i/fcCAFiunS8HQvL/QIDf6XKAur4YYC3p/wxAWV4MEFV5fjHAQWNB3DRU6mKAkLEgKsD/XQmvB2AXA1h7McBa0v8ZAGMuBoipvAxcI4qzdSRrRnUQQNV/NFqOjmsAyPtjCwC2O2Q5AJh+WqgAoOyPJQD0M1cBACCm89aNhUqxCsB+CyDqqz2wGo2RPC++75PD7TfLA1V5XiMNlecBtJ5gipE9K77SvuZuidXnxJfcv8Cw8dX0YX+/1l3GzuV+N97ly155niKWPsyV7eSdNw6A5oE9LUgBKFr9jDjqUwxxpTjtnCTveEo/IuzMzT1PUaVmfHd5POYpSUlJSUlJSfH0DzUEvfI85Bv/AAAAAElFTkSuQmCC"
                alt=""
                style={{ width: "80px" }}
                data-pagespeed-url-hash="419516018"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />

              <h5 className="black" style={{ fontSize: "15px" }}>
                <b>Teach More People</b>
                <br />
              </h5>
              <span style={{ fontSize: "14px" }}>
                Receive constant lesson requests from clients in your area
              </span>
            </div>
          </div>
          <div className=" col-sm-4">
            <div className="icon-box-6-item">
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{ width: "80px" }}
                data-pagespeed-url-hash="1377817363"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />

              <h5 className="black" style={{ fontSize: "15px" }}>
                <b>Make Extra Money</b>
                <br />
              </h5>
              <span style={{ fontSize: "14px" }}>
                Enjoy secure, instant payments for all completed lessons
              </span>
            </div>
          </div>
          <div className=" col-sm-4">
            <div className="icon-box-6-item myicon">
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{ width: "80px" }}
                data-pagespeed-url-hash="780957082"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />

              <h5 className="black" style={{ fontSize: "15px" }}>
                <b>Build Your Reputation</b>
                <br />
              </h5>
              <span style={{ fontSize: "14px" }}>
                Grow your income &amp; influence within our trusted community
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewSubjectPage;
