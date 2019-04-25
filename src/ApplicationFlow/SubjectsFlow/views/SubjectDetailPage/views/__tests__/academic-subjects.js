import { getAcademicSubjectCategory } from "../../utils";

describe("Academic Subjects", () => {
  it("Single level exists in the subject", () => {
    const testCases = [
      {
        expected: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
        actual: "Secondary Classes"
      },
      {
        expected: ["Nursery 1", "Nursery 2"],
        actual: "Nursery Classes"
      },
      {
        expected: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
        actual: "Undergraduate Classes"
      },
      {
        expected: [
          "Primary 1",
          "Primary 2",
          "Primary 3",
          "Primary 4",
          "Primary 5",
          "Primary 6"
        ],
        actual: "Primary Classes"
      },
      {
        expected: ["JSS 1", "JSS 2", "JSS 3"],
        actual: "Secondary Classes"
      }
    ];
    testCases.forEach(tt => {
      expect(getAcademicSubjectCategory([tt.expected])).toEqual([
        {
          name: tt.actual,
          values: tt.expected
        }
      ]);
    });
  });
  it("Two levels exists in the subject", () => {
    const testCases = [
      [
        { expected: ["Nursery 1", "Nursery 2"], actual: "Nursery Classes" },
        {
          expected: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
          actual: "Secondary Classes"
        }
      ],
      [
        {
          expected: [
            "Primary 1",
            "Primary 2",
            "Primary 3",
            "Primary 4",
            "Primary 5",
            "Primary 6"
          ],
          actual: "Primary Classes"
        },
        {
          expected: [
            "Year 1",
            "Year 2",
            "Year 3",
            "Year 4",
            "Year 5",
            "Year 6"
          ],
          actual: "Undergraduate Classes"
        }
      ],
      [
        { expected: ["Nursery 1", "Nursery 2"], actual: "Nursery Classes" },
        { expected: ["JSS 1", "JSS 2", "JSS 3"], actual: "Secondary Classes" }
      ]
    ];
    testCases.forEach(ele => {
      const arrList = ele.map(x => x.expected);
      expect(getAcademicSubjectCategory(arrList)).toEqual(
        ele.map(x => ({ name: x.actual, values: x.expected }))
      );
    });
  });

  it("Three level exists in the subject", () => {
    const testCases = [
      [
        {
          expected: [
            "Primary 1",
            "Primary 2",
            "Primary 3",
            "Primary 4",
            "Primary 5",
            "Primary 6"
          ],
          actual: "Primary Classes"
        },
        {
          expected: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
          actual: "Secondary Classes"
        },
        {
          expected: [
            "Year 1",
            "Year 2",
            "Year 3",
            "Year 4",
            "Year 5",
            "Year 6"
          ],
          actual: "Undergraduate Classes"
        }
      ]
    ];
    testCases.forEach(ele => {
      const arrList = ele.map(x => x.expected);
      expect(getAcademicSubjectCategory(arrList)).toEqual(
        ele.map(x => ({
          name: x.actual,
          values: x.expected
        }))
      );
    });
  });
  it("Scenario where the levels belong to the same category e.g JSS and SSS", () => {
    expect(
      getAcademicSubjectCategory([
        ["JSS 1", "JSS 2", "JSS 3"],
        ["SSS 1", "SSS 2", "SSS 3"]
      ])
    ).toEqual([
      {
        name: "Secondary Classes",
        values: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"]
      }
    ]);
  });
});
