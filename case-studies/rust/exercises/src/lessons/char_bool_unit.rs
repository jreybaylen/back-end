use std::mem::size_of_val;
use crate::lessons::lesson_complete;

/* Char: 🌟 */
pub fn lesson1() {
    assert_eq!(size_of_val(&'a'), 4); 
    assert_eq!(size_of_val(&'中'), 4); 
    lesson_complete(1); 
}

/* Bool: 🌟 */
pub fn lesson2() {
    let f: bool = false;
    let t = true;

    assert_eq!(!t, f);
    assert_eq!(!t, t && f);
    lesson_complete(2); 
}

/* Unit Type: 🌟🌟 */
pub fn lesson3() {
    fn implicitly_ret_unit() { }

    let v: () = ();
    let _v = (2, 3);

    assert!(size_of_val(&v) == 0);
    assert_eq!(v, implicitly_ret_unit());
    lesson_complete(3); 
}
