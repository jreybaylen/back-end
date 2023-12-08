use exercises::display_heading;
use exercises::lessons::{
    variables,
    types
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

    println!();
}
