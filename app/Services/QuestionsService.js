import _store from "../store.js";
import Question from "../Models/Question.js";

let _questionApi = axios.create({
  baseURL: "http://jservice.io/api/random",
  timeout: 3000
});

class QuestionsService {
  loadQuestions() {
    _questionApi.get("").then(res => {
      console.log(res);
      let questions = res.data.map(q => new Question(q));
      _store.commit("questions", questions);
    });
  }

  constructor() {
    console.log("hello from car service");
    this.loadQuestions();
  }
}

const service = new QuestionsService();
export default service;
