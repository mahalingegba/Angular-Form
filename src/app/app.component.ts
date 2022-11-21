import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  questions = [];
  totalRecords;
  pages;
  originalquestions = [];
  selectedanswers;

  getQuestions() {
    return [
      {
        question: 'Capital of India',
        answers: [
          { answer: 'Mumbai', isAnswer: false },
          { answer: 'Delhi', isAnswer: true },
          { answer: 'Chennai', isAnswer: false },
        ],
      },
      {
        question: 'Capital of USA',
        answers: [
          { answer: 'Wasington DC', isAnswer: true },
          { answer: 'NewYork', isAnswer: false },
          { answer: 'Seattle', isAnswer: false },
        ],
      },
      {
        question: 'Capital of England',
        answers: [
          { answer: 'London', isAnswer: true },
          { answer: 'Bermingham', isAnswer: false },
          { answer: 'Liverpool', isAnswer: false },
        ],
      },
      {
        question: 'Capital of Germany',
        answers: [
          { answer: 'Munich', isAnswer: false },
          { answer: 'Berlin', isAnswer: true },
          { answer: 'Hamburg', isAnswer: false },
        ],
      },
      {
        question: 'Capital of Russia',
        answers: [
          { answer: 'Novosibirsk ', isAnswer: false },
          { answer: 'St Petersburg', isAnswer: false },
          { answer: 'Moscow ', isAnswer: true },
        ],
      },
      {
        question: 'Capital of China',
        answers: [
          { answer: 'Sanghai ', isAnswer: false },
          { answer: 'Beijing', isAnswer: true },
          { answer: 'Tainjin ', isAnswer: false },
        ],
      },
    ];
  }
  ngOnInit() {
    this.totalRecords = this.getQuestions().length;
    this.pages = this.totalRecords / 2;
    this.originalquestions = this.getQuestions();
    this.questions = this.originalquestions.slice(0, 2);
  }

  cp(value) {
    let v = value * 2;
    this.questions = this.originalquestions.slice(v, v + 2);
  }

  dataChange(value) {
    console.log(this.originalquestions);
    const indexUpdateQue = this.originalquestions.findIndex(
      (element) => element.question === value.q.question
    );
    for (let p in this.originalquestions[indexUpdateQue].answers) {
      if (
        this.originalquestions[indexUpdateQue].answers[p].answer === value.na
      ) {
        console.log('1');
        this.originalquestions[indexUpdateQue].answers[p].isAnswer = true;
      } else {
        console.log('9');
        this.originalquestions[indexUpdateQue].answers[p].isAnswer = false;
      }
    }
    console.log(this.originalquestions);
  }
}
