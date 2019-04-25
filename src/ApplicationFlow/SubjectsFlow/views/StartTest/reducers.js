export const mapStateToProps = (state, ownProps) => {
  const { history } = ownProps;
  const currentSubject = state.quiz.subject;
  const duration = 10;
  const endTime = formatDate(
    addMinutes(currentSubject.dateSelected, 60 * 24 * 3)
  );
  if (!!currentSubject === false) {
    history.push(`/subjects/subject-list`);
  }
  return {
    currentSubject,
    endTime,
    duration,
    ...ownProps
  };
};

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
function formatDate(date) {
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var time = date.toTimeString().split(" ")[0];
  return `${day}/${monthIndex + 1}/${year}, ${time} (${getTimeZone(date)})`;
}
function getTimeZone(date) {
  var result = "unknown";
  result = date
    .toTimeString()
    .match(new RegExp("[A-Z](?!.*[(])", "g"))
    .join("");
  if (result === "WCAST") return "WAT";
  return result;
}
