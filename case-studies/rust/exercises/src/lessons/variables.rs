use crate::lessons::lesson_complete;

/* Binding and mutability: 🌟 */
pub fn lesson1() {
    let x: i32 = 5;
    let _y: i32;
    let mut z: i32 = 1;
    
    z += 2; 

    assert_eq!(x, 5);
    assert_eq!(z, 3);
    lesson_complete(1);
}

/* Scope: 🌟 */
pub fn lesson2() {
    {
        let y: i32 = 5;
        
        assert_eq!(y, 5);
    }

    let y: i32 = 3;

    assert_eq!(y, 3);

    lesson_complete(2);
}

/* Shadowing: 🌟🌟 */
pub fn lesson3() {
    let x: i32 = 5;

    {
        let x = 12;

        assert_eq!(x, 12);
    }

    assert_eq!(x, 5);

    let x = 42;

    assert_eq!(x, 42);
    lesson_complete(3);
}

/* Unused variables: 🌟🌟 */
pub fn lesson4() {
    let _x = 1;

    lesson_complete(4);
}

/* Destructuring: 🌟🌟 */
pub fn lesson5() {
    let (mut x, mut y) = (1, 2);

    x += 2;

    assert_eq!(x, 3);
    assert_eq!(y, 2);

    (x, ..) = (3, 4);
    [ .., y ] = [ 1, 2 ];

    assert_eq!([ x, y ], [ 3, 2 ]);
    lesson_complete(5);
}
