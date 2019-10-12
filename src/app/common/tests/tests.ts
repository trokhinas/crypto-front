import {TaskTypes} from '../../enums/tests';

export interface Answer {
    answerId: number;
    text: string;
    correct: boolean;
}

export interface Question {
    questionId: number;
    text: string;
    answers: Array<Answer>;
}

export interface TestTask {
    taskId: number;
    type: TaskTypes;
    question: Question;
}

export interface Test {
    testId: number;
    title: string;
    tasks: Array<TestTask>;
}

export interface TaskBlock<T = any> {
    task: TestTask;
    value?: T;
}
