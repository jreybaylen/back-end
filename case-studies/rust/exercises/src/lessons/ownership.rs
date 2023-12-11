use crate::lessons::lesson_complete;

/* Ownership: 🌟🌟 */
pub fn lesson1() {
    let x: String = String::from("hello, world");
    let y: &String = &x;
    let z: String = x.clone();

    assert_eq!(x, *y);
    assert_eq!(x, z);
    lesson_complete(1);
}

/* Mutability: 🌟🌟🌟 */
pub fn lesson2() {
    let x: Box<u8> = Box::new(5);
    let mut y: Box<u8> = Box::new(5);

    *y = 4;

    assert_eq!(*x, 5);
    assert_eq!(*y, 4);
    lesson_complete(2);
}

/* Partial Move: 🌟🌟 */
pub fn lesson3() {
    let s = (String::from("hello"), String::from("world"));
    let t = (String::from("hello"), String::from("world"));
    let u = t.0;
    let (s1, s2) = s;

    assert_eq!(u, "hello");
    assert_eq!(s1, "hello");
    assert_eq!(s2, "world");
    lesson_complete(3);
}
