export default class Question {
  constructor({ id, answer, question, value }) {
    this.id = id;
    this.answer = answer;
    this.question = question;
    this.value = value;
  }

  get Template() {
    return `
    <div class="col-12 text-center"><h3>${this.question}</h3></div>
    <div class="col-12 text-center"><h4>${this.answer}</h4></div>
    `;
  }
}
