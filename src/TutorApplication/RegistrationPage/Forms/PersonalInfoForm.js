import React from "react";
const Li = ({ children }) => (
  <li style={{ marginTop: 10, marginBottom: 10 }}>{children}</li>
);
const PersonalInfoForm = () => (
  <div className="need-to-know">
    <div id="section-1" className="what-to-know">
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="img/tutor/independent.png"
            className=" center-block"
          />
        </div>

        <div className="media-body">
          <p>
            <span className="font-head">
              <b>1. You are an independent tutor</b>
            </span>
          </p>

          <p>
            This means you have full responsibility to create your subjects, set
            your price, accept appointments with clients, and submit lessons
            taught into our system in order to get paid.
          </p>

          <p>
            We offer one-on-one tutoring. You cannot use Tuteria to acquire
            students for your organisation, and you cannot transfer a student to
            any other tutor outside Tuteria.
          </p>
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="img/tutor/thorough.png"
            className=" center-block"
          />
        </div>

        <div className="media-body">
          <p>
            <span className="font-head">
              <b>2. Application is thorough but flexible</b>
            </span>
          </p>

          <p>
            If your application is approved, you'll be able to add subjects,
            take the tests and receive clients. If it's denied, you can only
            re-apply after 3 months and not more than 3 attempts. The
            information you've submitted is used to decide if Tuteria is the
            right place for you.
          </p>
        </div>
      </div>
      <div className="row row-space-top-4">
        <div className="col-sm-4 col-sm-offset-8 col-md-3 col-md-offset-9 col-xs-6 col-xs-offset-6">
          <button className="btn btn-block btn-primary next-btn">
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
    <div id="section-2" className="what-to-know hidden">
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="/img/tutor/create_subjects.png"
            className=" center-block"
          />
        </div>

        <div className="media-body">
          <p>
            <span className="font-head">
              <b>3. You create your own subjects and set your own prices</b>
            </span>
          </p>

          <p>
            For most Academic, Music, Exams & Languages, you MUST pass the
            relevant online tests, without which you CANNOT take any students.
            For hands-on skills like Photography, Fashion etc. you'll need to
            send us samples of your work and experience, and if it matches our
            requirements, we'll let you know. Clients in your area can review
            your subjects, see your experience and can request to hire you from
            the site. We'll send instant SMS and email containing details of
            your clients.
          </p>
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="img/tutor/performance.png"
            className=" center-block"
          />
        </div>

        <div className="media-body">
          <p>
            <span className="font-head">
              <b>
                4. Tuteria is performance-based: great service gets you more
                clients
              </b>
            </span>
          </p>

          <p>
            We make sure clients get the very best performing tutors, and that
            great tutors receive more clients. Quality teaching, excellent
            customer service, and good feedback is expected at all times.
            Clients rate you after every completed lesson as part of our
            continuous evaluation. High rating gets you much more clients.
            Tutors whose ratings fall below 4.0 are asked to leave.
          </p>
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="img/tutor/payment.png"
            className=" center-block"
          />
        </div>

        <div className="media-body">
          <p>
            <span className="font-head">
              <b>5. Your payment is always certain and prompt</b>
            </span>
          </p>

          <p>
            To ensure you always get paid, Tuteria handles all payments on your
            behalf and pays directly to your bank. As a tutor, you set your
            price and earn 70-75% of whatever you charge clients. Successful
            tutors earn more than &#x20A6;360, 000 every year.
          </p>

          <p>
            E.g. if you charge clients &#x20A6;1000/hr, you'll be paid at the
            rate of &#x20A6;700-&#x20A6;750/hr.
          </p>

          <p>
            Clients pay in full through Tuteria when booking lessons with you,
            which becomes available to you immediately after client confirms
            that lesson has been taught or 1 day after you submit lesson into
            our system. You can withdraw your earnings at anytime.
          </p>
        </div>
      </div>
      <div className="row row-space-top-4">
        <div className="col-sm-4 col-md-3 col-xs-6 text-center">
          <a href="no-script-url" className="previous-btn">
            <i className="glyphicon glyphicon-menu-left" />Back
          </a>
        </div>
        <div className="col-sm-4 col-sm-offset-4 col-md-3 col-md-offset-6 col-xs-6 col-xs-offset-0">
          <button className="btn btn-block btn-primary next-btn">
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
    <div id="section-3" className="what-to-know hidden">
      <div className="media">
        <div className="media-left">
          <img alt="/bu" src="img/tutor/rules.png" className=" center-block" />
        </div>

        <div className="media-body">
          <p>
            <span className="font-head">
              <b>6. Important rules within Tuteria Community</b>
            </span>
          </p>

          <p>
            There are standard rules to ensure that tutors always get paid,
            protect users privacy, and make our service fair to everyone. Please
            keep the following in mind as you use Tuteria:
          </p>

          <ul style={{ marginTop: 10 }}>
            <Li>
              Accepting payments directly from clients or continuing to deal
              directly with them outside Tuteria is not allowed, and will
              prevent you from succeeding within our community.
            </Li>
            <Li>
              You’ll always be supplied with client details. Do not enter any
              personal information such as your full name, home address, email,
              phone, adverts or links on your profile.
            </Li>
            <Li>
              Do not make claim to any false or inaccurate information such as
              your education, experience, work history, certifications, awards,
              photos etc. Be completely honest. We will find out.
            </Li>
            <Li>
              Always be ethical when dealing with clients. We DO NOT condone any
              attempt to use Tuteria to perpetuate any form of criminal
              misdemeanor such as stealing, fraud, sex offences, molestations,
              kidnappings etc.
            </Li>
            <Li>
              If clients request to re-hire you privately, kindly direct them to
              book appointments through your profile on Tuteria. This ensures
              you’re not cheated or struggle to collect payment after lessons.
            </Li>
          </ul>
          <p>
            Tuteria is a trusted community. In order to protect all users,
            tutors who violate ANY of the above policies – even for once – will
            be permanently & completely disabled from using Tuteria in anyway.
            Welcome once again!
          </p>
        </div>
      </div>
      <div className="row row-space-top-4">
        <div className="col-sm-4 col-md-3 col-xs-6 text-center">
          <a href="no-script-url" className="previous-btn">
            <i className="glyphicon glyphicon-menu-left" />Back
          </a>
        </div>
        <div className="col-sm-4 col-sm-offset-4 col-md-3 col-md-offset-6 col-xs-6 col-xs-offset-0">
          <button className="btn btn-block btn-primary next-btn">
            Take Quiz &rarr;
          </button>
        </div>
      </div>
    </div>
    <div id="section-4" className="what-to-know hidden">
      <a href="no-script-url" className="previous-btn pull-left">
        <i className="glyphicon glyphicon-menu-left" />Back
      </a>

      <div className="col-xs-12">
        <h2 className="br-bottom-md text-center">Quiz</h2>
        <section id="tutor_registration_quiz" />
      </div>
    </div>
  </div>
);
export default PersonalInfoForm;
