use exercises::display_heading;
use exercises::lessons::{
    variables,
    types,
    char_bool_unit,
    statement_expressions,
    functions,
    ownership,
    reference_borrowing,
    string
};

fn main() {
    println!("\nWelcome to Rust World!");

    display_heading("Variables");
    variables::lesson1();
    variables::lesson2();
    variables::lesson3();
    variables::lesson4();
    variables::lesson5();

    display_heading("Types");
    types::lesson1();
    types::lesson2();
    types::lesson3();
    types::lesson4();

    display_heading("Char, Bool, and Unit");
    char_bool_unit::lesson1();
    char_bool_unit::lesson2();
    char_bool_unit::lesson3();

    display_heading("Statements and Expressions");
    statement_expressions::lesson1();

    display_heading("Functions");
    functions::lesson1();
    functions::lesson2();

    display_heading("Ownership");
    ownership::lesson1();
    ownership::lesson2();
    ownership::lesson3();

    display_heading("Referencing and Barrowing");
    reference_borrowing::lesson1();
    reference_borrowing::lesson2();
    reference_borrowing::lesson3();
    reference_borrowing::lesson4();

    display_heading("String");
    string::lesson1();

    println!();
}
