use rand::Rng;
use colored::*;
use std::{
    io::stdin,
    cmp::Ordering
};

fn main() {
    println!("\n--- Welcome to Rust Gessing Game! ---\n");
    println!("Guess the Number: ");

    loop {
        let mut guess_number: String = String::new();

        stdin()
            .read_line(&mut guess_number)
            .expect("Invalid Input. Please try again!");

        let secret_number: u32 = rand::thread_rng().gen_range(1..=100);
        let guess_number: u32 = match guess_number.trim().parse() {
            Ok(guess) => guess,
            Err(_) => {
                println!("\nResult: {}\n", format!("Invalid Input").red());

                continue
            }
        };

        match guess_number.cmp(&secret_number) {
            Ordering::Less => {
                println!("\nResult: {}\n", format!("{guess_number} is too small!").yellow());
            },
            Ordering::Equal => {
                println!("\nResult: {}\n", format!("You Win!").green());

                break;
            },
            Ordering::Greater => {
                println!("\nResult: {}\n", format!("{guess_number} is too large!").yellow());
            }
        }
    }
}
