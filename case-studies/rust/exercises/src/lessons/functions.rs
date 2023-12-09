use crate::lessons::lesson_complete;

/* Functions: 🌟🌟🌟 */
pub fn lesson1() {
    fn sum(x: i32, y: i32) -> i32 {
        x + y
    }

    let (x, y) = (1, 2);
    let s = sum(x, y);

    assert_eq!(s, 3);
    lesson_complete(1);
}

/* Diverging Functions: 🌟🌟 */
pub fn lesson2() {
    let b = true;
    let v = match b {
        true => 1,
        false => {
            println!("Success!");
            panic!("we have no value for `false`, but we can panic");
        }
    };

    assert_eq!(v, 1);
    lesson_complete(2);
}
