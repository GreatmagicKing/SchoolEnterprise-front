export interface QuestionsDetails {
  questionsId: number;
  questionsTitle: string;
  questionsData: string;
  questionsAuthor: string;
  questionsTime: string;
  questionsType: string;
  authorName: string;
  html: string;
  js: string;
  java: string;
  ts: string;
  angular: string;
  myBatis: string;
  sql: string;
  junit: string;
  answer: [
    {
      answerName: string;
      answerData: string;
    }
  ];
}
