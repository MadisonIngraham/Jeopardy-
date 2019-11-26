export default class Question {
  constructor(data) {
    this._id = data._id;
    this.answer = data.answer;
    this.question = data.question;
    this.value = data.value;
  }

  get Template() {
    return `
    <div class="col-12 text-center"><h3>${this.question}</h3></div>
    <div class="col-12 text-center"><h4>${this.answer}</h4></div>
    <div class="col-12 text-center"><h4>${this.value}</h4></div>
    `;
  }
}
