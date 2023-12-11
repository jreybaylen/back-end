use crate::lessons::lesson_complete;

/* Reference: 🌟🌟 */
pub fn lesson1() {
    fn borrow_object(s: &String) {
        assert_eq!(s, "hello, ");
    }

    let x = 5;
    let p = &x;
    let s = String::from("hello, ");
    let mut y = s.clone();

    y.push_str("world!");
    borrow_object(&s);

    assert_eq!(x, *p);
    assert_eq!(y, "hello, world!");
    lesson_complete(1);
}

/* Ref: 🌟🌟🌟 */
pub fn lesson2() {
    fn get_addr(r: &char) -> String {
        format!("{:p}", r)
    }

    let c = '中';
    let r1 = &c;
    let ref r2 = c;

    assert_eq!(*r1, *r2);
    assert_eq!(get_addr(r1), get_addr(r2));
    lesson_complete(2);
}

/* Borrowing Rules: 🌟 */
pub fn lesson3() {
    fn borrow_object(_: &mut String) { }

    let s = String::from("hello");
    let r1 = &s;
    let r2 = &s;
    let mut s = String::from("hello ");

    borrow_object(&mut s);
    s.push_str("world");

    assert_eq!(*r1, *r2);
    assert_eq!(s, "hello world");
    lesson_complete(3);
}

/* Non-lexical lifetimes (NLL): 🌟🌟 */
pub fn lesson4() {
    let mut s = String::from("hello, ");
    let r1 = &mut s;

    r1.push_str("world");

    lesson_complete(4);
}
