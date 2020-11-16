import User from './User';
import Subject from './Subject';
import Promo from './Promo';
import Lesson from './Lesson';

export default class Teacher extends User {
    private subjects!: Subject[];
    private lessons!: Lesson[];
    private promos!: Promo[];

}