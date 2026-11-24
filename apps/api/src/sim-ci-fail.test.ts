import { describe, expect, it } from "vitest";

// sim-matrix ci-fail: a unit test that fails, so tests.yml (npm test) is red on the epic's QA branch.
// The app itself is fine: build, start and the QA suite pass; only CI fails.
describe("sim-matrix ci-fail", () => {
  it("expects a greeting the app never gives", () => {
    expect("Hello sim").toBe("Hi sim");
  });
});
