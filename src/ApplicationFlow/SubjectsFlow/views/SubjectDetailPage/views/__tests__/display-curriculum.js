import { displayCurriculum } from "../../utils";

describe("The display of the curriculum component", () => {
  let questions = {
    levels: [
      {
        name: "Nursery",
        classes: ["Nursery 1", "Nursery 2"]
      },
      {
        name: "Primary",
        classes: [
          "Primary 1",
          "Primary 2",
          "Primary 3",
          "Primary 4",
          "Primary 5",
          "Primary 6"
        ]
      },
      {
        name: "JSS",
        classes: ["JSS 1", "JSS 2", "JSS 3"]
      },
      {
        name: "SSS",
        classes: ["SSS 1", "SSS 2", "SSS 3"]
      },
      {
        name: "Undergraduate",
        classes: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"]
      }
    ],
    curriculum: ["British", "American", "Nigerian", "Canadian", "Turkish"],
    curriculum_exclude: ["Undergraduate"]
  };
  it("when only valid curriculum subjects are passed", () => {
    expect(displayCurriculum(["JSS 1", "JSS 2"], questions)).toBeTruthy();
    expect(displayCurriculum(["Year 1", "SSS 1"], questions)).toBeTruthy();
    expect(displayCurriculum(["Year 1"], questions)).toBeFalsy();
    expect(displayCurriculum(["Nursery 1"], questions)).toBeTruthy();
    expect(displayCurriculum(["Primary 1"], questions)).toBeTruthy();
  });
});
