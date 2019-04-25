import DATA from "./data";
import {
  ADD_SITTING_RESULT,
  mapStateToProps as subjectListProps
} from "../SubjectsFlow/views/SubjectListPage/reducers.js";
//action
export const SELECT_ANSWER = "SELECT_ANSWER";
const DECREASE_DURATION = "DECREASE_DURATION";
export const SET_CURRENT_INDEX = "SET_CURRENT_INDEX";
export const INCREMENT_QUESTION = "INCREMENT_QUESTION";
export const START_QUIZ = "START_QUIZ";
export const SUBJECT_TO_TEST = "SUBJECT_TO_TEST";

const initialState = {
  subject: { slug: "chess", name: "Chess", dateSelected: new Date() },
  currentIndex: 1,
  answers: {},
  timer: {
    startTime: null,
    elapsedSeconds: 0
  }
};
const answersReducer = (state = {}, action) => {
  if (action.type) {
    return { ...state, [action.question]: action.value };
  }
  return state;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECT_TO_TEST:
      return {
        ...state,
        subject: {
          ...action.value,
          dateSelected: new Date()
        },
        currentIndex: 1
      };

    case INCREMENT_QUESTION:
      const elapsedSeconds = Date.now() - state.timer.startTime;
      return {
        ...state,
        currentIndex: state.currentIndex + parseInt(action.counter, 10),
        timer: {
          ...state.timer,
          elapsedSeconds
        }
      };
    case START_QUIZ:
      if (state.timer.startTime) {
        return state;
      }
      return {
        ...state,
        timer: { ...state.timer, startTime: Date.now() }
      };

    case SET_CURRENT_INDEX:
      return { ...state, currentIndex: parseInt(action.currentIndex, 10) };
    case "Toggle":
      return {
        ...state
      };
    case SELECT_ANSWER:
      const elapsedSeconds2 = Date.now() - state.timer.startTime;
      return {
        ...state,
        answers: answersReducer(state.answers, action),
        timer: { ...state.timer, elapsedSeconds: elapsedSeconds2 }
      };
    default:
      return state;
  }
};
export const mapDispatchToProps = dispatch => ({
  addSitting: ({ subjectName, score, passed, percentile }) =>
    dispatch({
      type: ADD_SITTING_RESULT,
      value: {
        subjectName,
        score,
        passed,
        percentile
      }
    }),
  startQuiz: () => dispatch({ type: START_QUIZ }),
  getCurrentIndex: (index = 1) => {
    const currentIndex = index || 1;
    dispatch({ type: SET_CURRENT_INDEX, currentIndex });
  },
  goToQuestion: updateCounter =>
    dispatch({ type: INCREMENT_QUESTION, counter: updateCounter }),
  populateAnswer: (question, value) => {
    dispatch({ type: SELECT_ANSWER, question, value });
  }
});
export const mapStateToProps = (state, ownProps) => {
  const quiz_data = state.quiz;
  const currentSittings = state.subjects["subject-list"];
  const subject = quiz_data.subject;
  const answerToCurrentQuestion = no => state.quiz.answers[no];
  let data = DATA.quiz;
  data.duration = 240000;
  const gradeTest = () => {
    const correct = data.questions.map((q, index) => {
      let answer = q.answers.findIndex(x => x.correct);
      let options = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E"
      };
      answer = options[answer];
      return quiz_data.answers[index + 1] === answer;
    });
    const result = correct.filter(x => x).length * 100 / data.questions.length;
    return result;
  };
  const elapsedSeconds = data.duration - state.quiz.timer.elapsedSeconds;
  // debugger;
  const name = "Godwin Benson";
  const time = "Jun 23rd, 2017";
  const durationInMins = (data.duration / 1000 / 60) % 60;
  const relevantDetails = {
    name: subject.name.toUpperCase(),
    description: `Taken by ${name} on ${time}`,
    percentile: 10,
    position: "130th out of all 123403 test takers",
    timeToCompile: duration =>
      `${duration} minute(s) (${durationInMins} minutes allowed)`
  };
  const getResultValues = () => {
    const testScore = gradeTest();
    const passed = testScore > data.pass_mark;
    const duration = subject.dateSelected - Date.now(); //Todo: capture correct value
    const percentile = 10;
    return {
      subjectName: subject.name,
      score: testScore,
      passed,
      duration,
      percentile
    };
  };
  const generateResultForTest = () => {
    const { passed, score, duration } = getResultValues();
    return {
      didPassTest: passed,
      percentage_score: score,
      duration: Math.abs(parseFloat((duration / 1000 / 60) % 60).toFixed(0))
    };
  };
  const checkResult = (addSitting, history) => {
    gradeTest();
    const { duration, ...rest } = getResultValues();
    addSitting(rest);
    let url = `/quiz/${subject.slug}/result`;
    history.push(url);
  };
  const nextQuestion = (index, history, goToQuestion, forward) => {
    const currentIndex = index || 1;
    let updateCounter = 0;
    const increment_condition = currentIndex < data.questions.length;
    const decrement_condition = currentIndex > 1;

    if (forward && increment_condition) {
      updateCounter = 1;
    }
    if (forward === false && decrement_condition) {
      updateCounter = -1;
    }
    goToQuestion(updateCounter);
    let url = `/quiz/${subject.slug}/question/${currentIndex + updateCounter}`;
    history.push(url);
  };
  return {
    data,
    subject,
    newDuration: elapsedSeconds,
    currentIndex: quiz_data.currentIndex || 1,
    answerToCurrentQuestion,
    gradeTest,
    relevantDetails,
    getResultValues,
    generateResultForTest,
    checkResult,
    nextQuestion,
    logic: (slug, canTakeQuiz = false) =>
      subjectListProps(state).subjectExists(slug, canTakeQuiz),
    ...ownProps
  };
};

export default reducer;
