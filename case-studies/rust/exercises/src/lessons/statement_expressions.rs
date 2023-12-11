use crate::lessons::lesson_complete;

/* Statements: 🌟🌟 */
pub fn lesson1() {
    fn sum(x: i32, y: i32) -> i32 {
        x + y
    }
    
    let v = {
        let mut x = 1;
        
        x += 2;
        x
    };
    let z = 3;
    let s = sum(1 , 2);

    assert_eq!(s, 3);
    assert_eq!(z, 3);
    assert_eq!(v, 3);
    lesson_complete(1);
}
