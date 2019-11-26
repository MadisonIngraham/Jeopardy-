import _questionsService from "../Services/QuestionsService.js";
import _store from "../store.js";

//Private
function _draw() {
  let template = "";
  let questions = _store.State.questions;
  questions.forEach(question => {
    template += question.Template;
  });
  document.querySelector("#question-view").innerHTML = template;
}

//Public
export default class QuestionsController {
  constructor() {
    _store.subscribe("questions", _draw);
    _draw();
  }
}
