import React from "react";

export const BookingSummaryRightBar = ({ title, children }) => (
  <div className="row">
    <div className="col-sm-4 col-xs-12">
      <div className="sidebar2 panel">
        <div style={{ marginTop: "0px" }}>
          <div className="col-sm-12 col-xs-12 blue-bg">
            <div className="padding-bottom-25 padding-top-25">
              <h3 className="text-center font-head" style={{ color: "red" }}>
                {title}
              </h3>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ListItem = ({ no, children }) => (
  <div className="media">
    <div className="media-left">
      <div className="numberCircle">{no}</div>
    </div>
    <div className="media-body">
      <p className="media-heading">{children}</p>
    </div>
  </div>
);

export const Invite = () => (
  <section className="row protection large-padding">
    <div className="page-container-full">
      <div className="row">
        <div className="col-lg-8 col-sm-10 col-sm-push-1 col-lg-push-2 text-center">
          <div className="media-photo padding-bottom-25">
            <img
              alt="/bu"
              width="100"
              height="100"
              src="https://tuteria.com/static/img/gallery/2nd-lesson.png"
            />
          </div>
          <h2>
            <span className="font-head">Earn More Money</span>
          </h2>
          <p className="padding-top-10">
            Get 10% for 3 months for every client you refer to Tuteria.
          </p>

          <div className="padding-top-25 col-sm-6 col-sm-offset-3">
            <a
              href="/invite"
              className="btn btn-danger btn-lg col-sm-12 col-xs-12 big-btn"
              style={{ padding: "10px 40px" }}
            >
              Invite friends
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Resolution = ({
  first_column,
  second_column,
  third_column,
  children
}) => (
  <div>
    <div className="panel">
      <article className="panel-body db-order-resolution-center js-page-tab-content js-page-tab-resolution-center">
        <div className="cf row">
          <span className="col-sm-4 col-xs-12">{first_column}</span>
          <time className="col-sm-5 col-xs-12" dateTime="2017-02-27">
            {second_column}
          </time>
          <span className="col-sm-3 col-xs-12">{third_column}</span>
        </div>
      </article>
    </div>
    {children}
  </div>
);

export const DetailFooterItem = ({ title, link, link_text }) => (
  <li>
    <em>
      {title ? <span>{title}: </span> : null}
      {link ? <a href={link}>{link_text}</a> : <span>{link_text}</span>}
    </em>
  </li>
);

export const DetailHeader = ({ img, alt, price, body, children }) => (
  <header className="order-header with-thumb cf row-space-4">
    <div className="gig-pict-102">
      <img
        alt={alt}
        className="img-circle media-object"
        height={80}
        src={img}
        width={80}
      />
      {/*<div class="tutor-name">Yinka O</div>*/}
    </div>

    {body}

    <ul className="order-header-info cf">{children}</ul>
  </header>
);

export const BookingStatus = ({ message }) => (
  <div id="booking-status-section" className="panel-body">
    <div className="text-center">
      <i className="text-primary glyphicon glyphicon-send fa-2x" />
      <h4 className="text-primary font-head">BOOKING STARTED</h4>
      <p>{message}</p>
      <br />
      <div className="headers col-xs-12">
        <h5>Time left to Start lesson</h5>
        <div className="clock flip-clock-wrapper">
          <span className="flip-clock-divider days">
            <span className="flip-clock-label">Days</span>
          </span>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
          <span className="flip-clock-divider hours">
            <span className="flip-clock-label">Hours</span>
            <span className="flip-clock-dot top" />
            <span className="flip-clock-dot bottom" />
          </span>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
          <span className="flip-clock-divider minutes">
            <span className="flip-clock-label">Minutes</span>
            <span className="flip-clock-dot top" />
            <span className="flip-clock-dot bottom" />
          </span>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
          <span className="flip-clock-divider seconds">
            <span className="flip-clock-label">Seconds</span>
            <span className="flip-clock-dot top" />
            <span className="flip-clock-dot bottom" />
          </span>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
          <ul className="flip ">
            <li className="flip-clock-before">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">9</div>
                </div>
              </a>
            </li>
            <li className="flip-clock-active">
              <a href="/bu">
                <div className="up">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
                <div className="down">
                  <div className="shadow" />
                  <div className="inn">0</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const BookingSummaryTable = ({ lesson_info, amount, total, paid }) => (
  <div className="order-gig-details">
    <div className="order-gig-detail">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <td>Booking Summary</td>
              <td className="amount">Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="truncated">{lesson_info}</td>
              <td className="amount">₦{amount}</td>
            </tr>
            <tr className="boldify">
              <td className="truncated">
                Total{" "}
                {paid ? (
                  <span className="label label-success">Paid in full</span>
                ) : null}
              </td>
              <td className="amount"> ₦{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
