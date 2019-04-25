import { mapStateToProps } from "../reducers";
import {
  hasAllQuestionsBeenAnswered,
  generateQuestionErrorMessages,
  evaluateResult
} from "../utils";

describe("Answers to Subject Question Can be submitted", () => {
  const state = {
    subjects: {
      "select-subjects": [],
      "subject-list": [
        {
          name: "General Mathematics",
          slug: "general-mathematics",
          passed: true,
          score: 70,
          percentile: 10
        },
        {
          name: "Sociology",
          slug: "sociology",
          passed: true,
          score: 70,
          percentile: 10
        },
        {
          name: "Verbal Reasoning",
          slug: "verbal-reasoning",
          passed: true,
          score: 70,
          percentile: 10
        },
        {
          name: "Sewing and Tailoring",
          slug: "sewing-and-tailoring",
          passed: true,
          score: 70,
          percentile: 10
        },
        {
          name: "IB ( International Baccalaureate)",
          slug: "ib-international-baccalaureate",
          passed: true,
          score: 70,
          percentile: 10
        },
        {
          name: "ASP.NET",
          slug: "aspnet",
          passed: true,
          score: 70,
          percentile: 10
        }
      ]
    }
  };
  describe("Academic Subjects", () => {
    describe("Subject scenario that requires a boolean and a formset", () => {
      let general_mathematics = mapStateToProps(state, {
        slug: "general-mathematics"
      });
      let answers = {
        curriculum: ["British", "American"],
        questions: {
          "JSS-1": ["JSCE", "BECE"],
          "SSS-1": ["NECO"],
          "SSS-2": {
            answer: "Yes",
            formset: [
              { name: "Lagos state", company: "Lagos 2.0", year: "2017" }
            ]
          }
        },
        selectedClasses: ["JSS 2", "SSS 3"]
      };

      it("should Return true when all the questionsfor a single subject is typed", () => {
        expect(
          hasAllQuestionsBeenAnswered(answers, general_mathematics)
        ).toBeTruthy();
      });
      it("should return false when formset isn't populated", () => {
        answers.questions["SSS-2"].formset = [];
        expect(
          hasAllQuestionsBeenAnswered(answers, general_mathematics)
        ).toBeFalsy();
        delete answers.questions["SSS-2"].formset;
        expect(
          hasAllQuestionsBeenAnswered(answers, general_mathematics)
        ).toBeFalsy();
        answers.questions["SSS-2"].formset = [{}];
        expect(
          hasAllQuestionsBeenAnswered(answers, general_mathematics)
        ).toBeFalsy();
        answers.questions["SSS-2"].answer = "No";
        expect(
          hasAllQuestionsBeenAnswered(answers, general_mathematics)
        ).toBeTruthy();
        answers.questions["SSS-2"] = {};
        expect(
          hasAllQuestionsBeenAnswered(answers, general_mathematics)
        ).toBeFalsy();
        const getError = generateQuestionErrorMessages(
          answers,
          general_mathematics
        );
        expect(getError("SSS-2")).toBeTruthy();
      });
    });
    it("should return true when there are custom questions for the academic subject", () => {
      let sociology = mapStateToProps(state, { slug: "sociology" });
      let answers = {
        questions: {
          "5": ["Race, Nationality, and Ethnicity", "Mass Media", "The Family"]
        },
        selectedClasses: ["Year 1", "Year 3"]
      };
      expect(hasAllQuestionsBeenAnswered(answers, sociology)).toBeTruthy();
    });
    describe("When result of a question depends on another question", () => {
      let numeracy = mapStateToProps(state, { slug: "verbal-reasoning" });

      let answers = {
        curriculum: ["British", "American"],
        questions: {
          "Primary-1": "Yes",
          "Primary-2": "3"
        },
        selectedClasses: ["Primary 1", "Primary 2"]
      };
      it("should return true when all questions are answered", () => {
        expect(hasAllQuestionsBeenAnswered(answers, numeracy)).toBeTruthy();
      });
      it("should be false when answer to first question is Yes but no answer on depending q", () => {
        answers.questions["Primary-2"] = "";
        expect(hasAllQuestionsBeenAnswered(answers, numeracy)).toBeFalsy();
        delete answers.questions["Primary-2"];
        expect(hasAllQuestionsBeenAnswered(answers, numeracy)).toBeFalsy();
      });
      it("should return true when the answer to the first question is No but no response for the second q", () => {
        answers.questions = {
          "Primary-1": "No"
        };
        expect(hasAllQuestionsBeenAnswered(answers, numeracy)).toBeTruthy();
      });
    });
  });

  describe("Questions located on the Category only", () => {
    let needle_work = mapStateToProps(state, {
      slug: "sewing-and-tailoring"
    });
    let answers = {
      curriculum: [],
      questions: {
        "1": 3,
        "2": ["Beginner", "Advanced"],
        "3": ["Kids(1-5)"],
        "4": "Yes"
      },
      selectedClasses: []
    };
    it("should return true when all questions are answerd", () => {
      expect(hasAllQuestionsBeenAnswered(answers, needle_work)).toBeTruthy();
    });
    it("should return true when single choice question is not answerd which means the default is assumed", () => {
      answers.questions["1"] = "";
      expect(hasAllQuestionsBeenAnswered(answers, needle_work)).toBeTruthy();
      delete answers.questions["1"];
      expect(hasAllQuestionsBeenAnswered(answers, needle_work)).toBeTruthy();
    });
  });
  describe("Questions located on the Subcategory only", () => {
    let pe = mapStateToProps(state, {
      slug: "ib-international-baccalaureate"
    });
    let answers = { questions: { "1": "Still in progress" } };
    it("should return true when all questions are answered", () => {
      expect(hasAllQuestionsBeenAnswered(answers, pe)).toBeTruthy();
    });
    it("should return false when no answer is provided", () => {
      delete answers.questions["1"];
      expect(hasAllQuestionsBeenAnswered(answers, pe)).toBeFalsy();
    });
  });
  describe("Question located on multiple layers", () => {
    let aspnet = mapStateToProps(state, { slug: "aspnet" });
    let answers = {
      questions: {
        "1": ["Beginner"],
        "2": ["Children (6-12)", "Teenagers (13-19)"],
        "3": [
          { text: "Writing Functions", level: "Beginner" },
          { text: "Classes & Objects", level: "Beginner" }
        ],
        "4": ["Linux", "MacOS", "Windows"]
      }
    };
    it("should return true when all fields are passed", () => {
      expect(hasAllQuestionsBeenAnswered(answers, aspnet)).toBeTruthy();
    });
    it("should return false when a question is removed", () => {
      delete answers.questions["4"];
      expect(evaluateResult(answers, aspnet).length).toEqual(4);
      expect(hasAllQuestionsBeenAnswered(answers, aspnet)).toBeFalsy();
    });
    it("should return false when no question is answerd", () => {
      answers.questions = {};
      expect(hasAllQuestionsBeenAnswered(answers, aspnet)).toBeFalsy();
    });
    describe("Question Errors", () => {
      it("should display the current valid state for the question asked", () => {
        answers = {
          questions: {
            "1": ["Beginner"],
            "2": ["Children (6-12)", "Teenagers (13-19)"],
            "3": [
              { text: "Writing Functions", level: "Beginner" },
              { text: "Classes & Objects", level: "Beginner" }
            ],
            "4": ["Linux", "MacOS", "Windows"]
          }
        };
        const getError = generateQuestionErrorMessages(answers, aspnet);
        expect(getError("1")).toBeFalsy();
        expect(getError("2")).toBeFalsy();
        expect(getError("3")).toBeFalsy();
        expect(getError("4")).toBeFalsy();
      });
      it("Handle the case when there are actually errors for specific questions", () => {
        delete answers.questions["4"];
        const getError = generateQuestionErrorMessages(answers, aspnet);
        expect(getError("1")).toBeFalsy();
        expect(getError("2")).toBeFalsy();

        expect(getError("3")).toBeFalsy();
        expect(getError("4")).toBeTruthy();
      });
      it("Handle the case when all the questions have errors", () => {
        answers.questions = {};
        const getError = generateQuestionErrorMessages(answers, aspnet);
        expect(getError("1")).toBeTruthy();
        expect(getError("2")).toBeTruthy();
        expect(getError("3")).toBeTruthy();
        expect(getError("4")).toBeTruthy();
      });
    });
  });
});
