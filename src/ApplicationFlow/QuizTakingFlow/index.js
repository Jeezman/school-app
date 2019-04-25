import React from "react";
import "../fonts/index";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./reducer";
import { generateLoadableComponent, NavBar } from "./views/components/index";
import Timer from "./Timer";

const QuizResultRoute = connect(mapStateToProps)(
  ({
    logic,
    relevantDetails,
    generateResultForTest,
    clearTimer,
    navigateTo,
    displayNotification,
    ...rest
  }) => (
    <Route
      {...rest}
      render={({ match }) => {
        const Component = generateLoadableComponent({
          loader: () => import("./views/ResultComponent")
        });
        const isTrue = logic(match.params.subject_slug);
        if (!!isTrue === false) {
          displayNotification(
            "Please select a subject for which you have indicated to take a test on!",
            "error"
          );
        }
        return isTrue ? (
          <Component
            details={relevantDetails}
            clearTimer={clearTimer}
            navigateTo={navigateTo}
            getResult={generateResultForTest}
          />
        ) : (
          <Redirect to="/subjects/subject-list" />
        );
      }}
    />
  )
);

const QuizQuestionRoute = connect(mapStateToProps, mapDispatchToProps)(
  ({
    logic,
    questions,
    nextQuestion,
    checkResult,
    answerToCurrentQuestion,
    addSitting,
    goToQuestion,
    populateAnswer,
    timerComponent,
    displayNotification,
    ...rest
  }) => (
    <Route
      {...rest}
      render={({ match, history }) => {
        const ComponentPage = generateLoadableComponent({
          loader: () => import(`./views/QuizComponent`)
        });
        const index = parseInt(match.params.index, 10);
        const navigateTo = (bool = true) => {
          // getCurrentIndex()
          nextQuestion(index, history, goToQuestion, bool);
        };
        const onCheckResult = () => {
          checkResult(addSitting, history);
        };

        const isTrue = logic(match.params.subject_slug, true);
        if (!!isTrue === false) {
          displayNotification(
            "Please select a subject for which you have indicated to take a test on!",
            "error"
          );
        }
        return index > 0 && index <= questions.length && isTrue ? (
          <ComponentPage
            no={index}
            question={questions[index - 1]}
            lastQuestion={questions.length}
            currentAnswer={answerToCurrentQuestion(index)}
            nextQuestion={() => navigateTo()}
            previousQuestion={() => navigateTo(false)}
            selectAnswer={answer => populateAnswer(index, answer)}
            handleSubmit={onCheckResult}
            timerComponent={timerComponent(index)}
          />
        ) : (
          <Redirect to="/subjects/subject-list" />
        );
      }}
    />
  )
);

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: null
    };
  }
  nextQuestion = (forward = true) => {
    const { history, goToQuestion, nextQuestion } = this.props;
    nextQuestion(history, goToQuestion, forward);
  };
  goToNextScreen = no => {
    this.nextQuestion();
  };

  navigateToNextStep = () => {
    this.unblock();
    this.props.history.push("/subjects/subject-list");
  };
  getCurrentIndex = () => {
    const { match: { params }, getCurrentIndex } = this.props;
    getCurrentIndex(params.index);
  };
  populateAnswer = (question, value) => {
    this.props.populateAnswer(question, value);
  };

  componentDidMount() {
    const { history, data, subject, startQuiz } = this.props;
    startQuiz();

    this.unblock = history.block((location, action) => {
      let urls = data.questions.map(
        (q, index) => `/quiz/${subject.slug}/question/${index + 1}`
      );
      urls.push(`/quiz/${subject.slug}/result`);
      // debugger;
      if (urls.indexOf(location.pathname) === -1) {
        return "Are you sure you want to leave this page?";
      }
    });

    this.getCurrentIndex();
  }

  clearTimer = () => clearInterval(this.forceUpdateInterval);

  componentWillUnmount() {
    // clearInterval(this.forceUpdateInterval);
    this.unblock();
  }
  quizCompleted = () => {
    this.props.history.push(`/quiz/${this.props.subject}/result`);
  };
  render() {
    const { data, subject, displayNotification } = this.props;
    return (
      <div>
        <NavBar inverse heading={`${subject.name} Test`} />

        <Switch>
          <QuizQuestionRoute
            exact
            path={`/quiz/:subject_slug/question/:index`}
            questions={data.questions}
            displayNotification={displayNotification}
            timerComponent={index => (
              <Timer
                quizCompleted={this.quizCompleted}
                text={`Question ${index} of ${data.questions.length}`}
              />
            )}
          />

          <QuizResultRoute
            path={`/quiz/:subject_slug/result`}
            clearTimer={this.clearTimer}
            navigateTo={this.navigateToNextStep}
            displayNotification={displayNotification}
          />

          <Route
            path="/quiz"
            render={({ match }) => {
              return <Redirect to={`/quiz/${subject.slug}/question/1`} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
