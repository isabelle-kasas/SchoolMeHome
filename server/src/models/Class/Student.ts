import User from './User';
import Subject from './Subject';
import Promo from './Promo';

export default class Student extends User {
    private subject!: Subject[];
    private promo!: Promo[];
}