use crate::lessons::lesson_complete;

/* Integer: 🌟🌟🌟 */
fn type_of<T>(_: &T) -> String {
    format!("{}", std::any::type_name::<T>())
}

pub fn lesson1() {
    let x: i32 = 6;
    let mut y: i32 = 5;
    let z: u32 = 10;

    assert_eq!(y, 5);

    y = x;

    assert_eq!(y, 6);
    assert_eq!(z, 10);
    assert_eq!("u32", type_of(&z));
    assert_eq!(i8::MAX, 127); 
    assert_eq!(u8::MAX, 255);

    let v1 = 251_u16 + 8;
    let v2 = u16::checked_add(251, 8).unwrap();
    let v = 1_024 + 0xff + 0o77 + 0b1111_1111;

    assert_eq!(v1, 259);
    assert_eq!(v2, 259);
    assert_eq!(v, 1597);
    lesson_complete(1);
}

/* Floating-Point: 🌟🌟 */
pub fn lesson2() {
    let x: f64 = 1_000.000_1; // ?
    let y: f32 = 0.12; // f32
    let z: f64 = 0.01_f64; // f64

    assert_eq!(type_of(&x), "f64");
    assert_eq!(type_of(&y), "f32");
    assert_eq!(type_of(&z), "f64");
    assert!(0.1 + 0.2 != 0.3);
    assert_eq!((0.1 + 0.2) as f32, 0.3);
    lesson_complete(2);
}

/* Range: 🌟🌟 */
pub fn lesson3() {
    use std::ops::{
        Range,
        RangeInclusive
    };

    let mut sum = 0;

    for i in -3..2 {
        sum += i
    }

    assert_eq!(sum, -5);
    assert_eq!((1..5), Range{ start: 1, end: 5 });
    assert_eq!((1..=5), RangeInclusive::new(1, 5));
    lesson_complete(3);
}

/* Computations: 🌟 */
pub fn lesson4() {
    assert!(1u32 + 2 == 3);
    assert!(1i32 - 2 == -1);
    assert!(1i8 - 2 == -1); 
    assert!(3 * 50 == 150);
    assert!(9.0 / 3.0 == 3.0);
    assert!(24 % 5 == 4);
    assert!(true && false == false);
    assert!(true || false == true);
    assert!(!true == false);
    lesson_complete(4);
}
