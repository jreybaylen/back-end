use exercises::display_heading;
use exercises::lessons::{
    variables,
    types,
    char_bool_unit,
    statement_expressions
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

    println!();
}
