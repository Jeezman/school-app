import React from "react";

var currentYear = new Date().getFullYear();

function range(start, end, step, offset) {
  var len = (Math.abs(end - start) + (offset || 0) * 2) / (step || 1) + 1;
  var direction = start < end ? 1 : -1;
  var startingPoint = start - direction * (offset || 0);
  var stepSize = direction * (step || 1);

  return Array(len)
    .fill(0)
    .map(function(_, index) {
      return startingPoint + stepSize * index;
    });
}
class DateOfBirthForm extends React.Component {
  state = {
    month: "",
    day: "",
    year: ""
  };
  componentDidMount() {
    const { month, day, year } = this.props;
    this.setState({
      month,
      day,
      year
    });
  }

  onformInputChange = (event, value) => {
    var text = event.target.value;
    this.setState({ [value]: text });
  };
  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const days = range(1, 31);
    const years = range(1920, currentYear);

    return (
      <div className="row  row-space-4">
        <label className="col-md-3 col-sm-3 text-right">Birth Date</label>
        <div className="col-md-9 col-sm-9 space-for-mobile">
          <div className="form-inline">
            <div className="form-group">
              <div className="form-group">
                <select
                  id="id_dob_month"
                  name="dob_month"
                  className="form-control"
                  required="required"
                  data-parsley-group="default"
                  data-parsley-error-message="Select a month"
                  data-parsley-id="0574"
                  onChange={e => this.onformInputChange(e, "month")}
                  value={this.state.month}
                >
                  <option value="">Select Month</option>
                  {months.map((month, index) => (
                    <option key={index} month={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <span className="help-block" id="parsley-id-0574" />
              </div>
            </div>
            <div className="form-group">
              <select
                id="id_dob_day"
                name="dob_day"
                className="form-control"
                required="required"
                data-parsley-group="default"
                data-parsley-error-message="Select a day"
                data-parsley-id="5335"
                onChange={e => this.onformInputChange(e, "day")}
                value={this.state.day}
              >
                <option value="">Select Day</option>
                {days.map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <span className="help-block" id="parsley-id-5335" />
            </div>
            <div className="form-group">
              <select
                id="id_dob_year"
                name="dob_year"
                className="form-control"
                required="required"
                data-parsley-group="default"
                data-parsley-error-message="Select a year"
                data-parsley-id="7773"
                onChange={e => this.onformInputChange(e, "year")}
                value={this.state.year}
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <span className="help-block" id="parsley-id-7773" />
            </div>
          </div>
          <div className="input-hint">
            Only you can see this. We use this for analysis and never share with
            other users
          </div>
        </div>
      </div>
    );
  }
}

export default DateOfBirthForm;
