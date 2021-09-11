export interface TestDetails {
  testId: number;
  testName: string;
  testType: string;
  state: string;
  testPart: string;
  arrValueString: string;
  testProblem: [
    {
      problemId: number;
      testData: string;
      testA: string;
      testB: string;
      testC: string;
      testD: string;
    }
  ];
}
