import {LectureLink} from '../courses';
import {TestLink} from '../tests';
import {TaskBlock} from '../tests/tests';
import {TaskTypes} from '../../enums/tests';

export const fakeLectures: Array<LectureLink> = [
    {id: 1, title: 'first lecture'},
    {id: 2, title: 'second lecture'},
    {id: 3, title: 'third lecture'},
    {id: 4, title: 'fourth lecture'},
];

export const fakeTestLinks: Array<TestLink> = [
    {id: 1, title: 'Тест #1', mark: '4.0'},
    {id: 2, title: 'Тест #2', mark: '3.5'},
];

export const fakeBlocks: Array<TaskBlock> = [
    {value: null, task: { question: {
        questionId: 1, answers: [], text: 'hello there'
            }, type: TaskTypes.MANUAL, taskId: 1
        }},
    {value: null, task: { question: {
                questionId: 1, answers: [], text: 'hello there'
            }, type: TaskTypes.SELECT, taskId: 1
        }},
    {value: null, task: { question: {
                questionId: 1, answers: [], text: 'hello there'
            }, type: TaskTypes.MULTISELECT, taskId: 1
        }}
];
