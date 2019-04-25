import React from "react";
import SubjectDetailSidebar from "./SubjectDetailSidebar";

const SubjectDetailPage = () => (
  <div className="container row-space-top-4 row-space-4">
    <div className="row">
      <SubjectDetailSidebar />
      <div className="col-sm-9 col-xs-12">
        <div className="row smart-forms">
          <form
            accept-charset="UTF-8"
            action="/subjects/needle-work/edit"
            className="new_user"
            id="edit_subject_form"
            method="post"
            novalidate=""
          >
            <div id="describe" className="panel panel-default row-space-4">
              <div className="panel-heading">
                <h3 className="blue-font">Needle Work</h3>

                <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                  Talk about your experience in Needle Work below so that it
                  stands out to clients who want to hire you
                </p>
              </div>
              <div className="panel-body">
                <div className="row row-space-4">
                  <label className="col-md-3 text-right">
                    Subject Headline
                  </label>
                  <div className="col-md-9">
                    <textarea
                      placeholder="Be very clear and descriptive"
                      className="form-control"
                      cols="40"
                      id="id_heading"
                      maxlength="70"
                      name="heading"
                      rows="2"
                      data-parsley-id="6920"
                    >
                      I am passionate about knitting anything and I love to
                      teach it as well
                    </textarea>
                    <ul className="parsley-errors-list" id="parsley-id-6920" />
                    <div
                      id="textCounter"
                      style={{ font: "12px", color: "red" }}
                      className="pull-right"
                    >
                      70
                    </div>
                    <span className="input-hint">
                      {" "}
                      Your headline is the first thing clients see when they
                      find your subject in search results
                    </span>

                    <div className="margin-top-15">
                      <a id="heading-example" href="no-script-url">
                        See some examples
                      </a>
                    </div>
                    <div className="row-space-4" />
                    <div className="well bg-info heading-section hidden">
                      <p>
                        <b>
                          In 70 characters or less, summarize your{" "}
                          <u>expertise</u> in Needle Work.
                        </b>
                      </p>

                      <p>
                        Headlines <span className="font-head">must</span> convey
                        real value to prospective clients. Here are some
                        examples to gain inspiration, but yours must be unique.
                        <br />
                        <em>
                          - Experienced ICAN instructor with a personalized
                          teaching approach
                        </em>
                        <br />
                        <em>
                          - I love teaching Math and helping my students get
                          better grades
                        </em>
                        <br />
                        <em>
                          - Learn the art of making beautiful jeweleries and
                          beads by yourself
                        </em>
                        <br />
                        <em>
                          - Graduate of Muson Music Academy and an expert violin
                          teacher
                        </em>
                      </p>

                      <p>
                        Please don't make any errors, only use alphabets and
                        numbers, avoid unnecessary punctuations and write in
                        full, NO ABBREVIATIONS.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row  row-space-4">
                  <label className="col-md-3 text-right">
                    Describe Your Experience and Teaching Style
                  </label>

                  <div className="col-md-9">
                    <div className="well bg-danger">
                      <p className="font-head black-text">
                        <b>PAY CLOSE ATTENTION</b>
                      </p>
                      <p>
                        Clients will read what you write here, and is a MAJOR
                        determinant whether they hire you or another tutor. Make
                        sure your description contains these three components:
                      </p>
                      <p>
                        1. Demonstrate your knowledge, experience or
                        qualification in Needle Work. A good way to do this is
                        to talk about <u>very specific things</u> pertaining to
                        the subject that show you are an expert. Don't write
                        generally, else we will not approve your subject.
                      </p>
                      <p>
                        2. Describe the <u>results you achieved</u> for people
                        you may have taught in the past. This is very crucial.
                        Be very specific, honest and detailed too. We will read
                        what you write.
                      </p>
                      <p>
                        3. Explain your style of teaching. What the client
                        should expect, how they should prepare, what you will
                        need for the lesson etc.
                      </p>
                      <p>
                        Lastly, don't make any errors. High standards are
                        expected of teachers. Clients will always have a choice,
                        so a single error can make them hire someone else. See
                        more help below.
                      </p>
                    </div>
                    <textarea
                      className="form-control"
                      cols="40"
                      data-parsley-no_email=""
                      data-parsley-no_link=""
                      data-parsley-trigger="keyup"
                      id="id_description"
                      name="description"
                      placeholder="Why should clients hire you in particular? What makes you the best tutor for them?"
                      rows="10"
                      data-parsley-id="9009"
                    >
                      I have been crocheting since I was in primary school where
                      I leant how to knit and since then I have developed my
                      skills in knitting and I now make use of the knitting
                      machine with the crochet pin I produce bags purses Alice
                      bands hair ruffles table and chair covers caps and lot
                      more and with the machine I make cardigans mufflers socks
                      caps baby trousers dresses I have successfully taught
                      knitting to many individuals with both the crochet pins
                      and the knitting machine and they performed very well
                      being able to produce things for themselves and one thing
                      I tell them is that once you can think of then you can do
                      it All you need to be able to knit is your interest in the
                      skill and putting whatever you learn to practise
                    </textarea>
                    <ul className="parsley-errors-list" id="parsley-id-9009" />
                    <div
                      id="description_counter"
                      style={{ font: "12px", color: "red" }}
                      className="pull-right"
                    >
                      1200
                    </div>
                    <span className="input-hint">
                      {" "}
                      Talk about your experience and teaching style in details
                      so clients can learn more about you
                    </span>

                    <div className="margin-top-15">
                      <a id="description_link" href="no-script-url">
                        Need Help?
                      </a>
                    </div>
                    <div className="row-space-4" />
                    <div className="well bg-info description-note hidden">
                      For example, if you have taught 13 people who excelled in
                      the subject, talk about it! Will you bring a guitar or
                      should they have theirs? Will you like to know what
                      textbooks they use or speak with their school teacher
                      first? Do you give short tests to assess understanding?
                      Give clients a feel of what to expect.
                      <br />
                      <br />
                      <span className="font-head">
                        Common errors that can discourage clients from hiring
                        you
                      </span>
                      <br />
                      1. Don't spell <em>taught</em> as <em>thought</em> e.g. I
                      have <strike> thought </strike> taught 6 people ...
                      <br />
                      2. Always capitalize your I. Don't write "i like to",
                      instead of "I like to"
                      <br />
                      3. Write in full. "Have taught people" should be written
                      as "I have taught people"
                      <br />
                      4. Re-read your writing to ensure it's free of errors and
                      well spaced. DON'T WRITE IN ALL CAPITALS. Make sure you
                      use paragraphs so that clients can easily read through.
                      <div className="margin-top-15">
                        <a id="wellers" href="no-script-url">
                          See an example
                        </a>
                      </div>
                      <div className="well-hidden hidden row-space-top-1">
                        <p className="font-head">
                          <span style={{ color: "green" }}>
                            <b>A Simple Example:</b>
                          </span>{" "}
                          let this inspire you, <u>but don't copy it</u>. Write
                          in your own style.<em />
                        </p>
                        <em>
                          <p>
                            "Most universities require a minimum score of 60% in
                            the Math section of SAT before an applicant can be
                            considered for admission. I got 700 out of 800
                            (87.5%) in SAT Math in 2013, and have prepared 17
                            students for the exam most of whom are now in their
                            desired schools abroad, including several who had
                            less than a month to prepare.
                          </p>

                          <p>
                            So I'm confident that I can help you or your wards
                            master SAT Math. I’m up-to-date with the curriculum,
                            and text books, and have in-depth understanding of
                            how to bring students up to speed with nifty tactics
                            to help them solve SAT Math questions quickly and
                            correctly. I'll be happy to help you pass the exam
                            and achieve your goals. Hire me so we can get
                            started."
                          </p>
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
export default SubjectDetailPage;
