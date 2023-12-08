use crate::lessons::lesson_complete;

pub fn lesson1() {
    let x: i32 = 6;
    let mut y: i32 = 5;
    let z = 10;

    assert_eq!(y, 5);

    y = x;

    assert_eq!(y, 6);
    assert_eq!(z, 10);
    lesson_complete(1);
}
