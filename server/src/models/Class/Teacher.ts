//TEacher class

import Lesson from "./Lesson";
import User from "./User";

export default class Teacher extends User {
    private subjects!: Subject[];
    private lessons!: Lesson[];
    private promos!: Promo[];

}