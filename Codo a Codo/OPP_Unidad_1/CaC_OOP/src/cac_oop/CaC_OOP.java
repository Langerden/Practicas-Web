/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cac_oop;

import java.util.Scanner;

/**
 *
 * @author Denuchan
 */
public class CaC_OOP {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Please, complete this information");

        System.out.print("Name: ");
        String name = scan.nextLine();

        while (name.isEmpty() || name.startsWith(" ")) {
            System.out.print("Please, write your name correctly: ");
            name = scan.nextLine();
        }

        System.out.print("Lastname: ");
        String lastname = scan.nextLine();
        while (lastname.isEmpty() || lastname.startsWith(" ")) {
            System.out.print("Please, write your lastname correctly: ");
            lastname = scan.nextLine();
        }

        System.out.print("Age: ");
        int age = 0;

        while (age == 0) {
            try {
                age = Integer.parseInt(scan.nextLine());
                while (age <= 18 || age >= 110) {
                    System.out.print("Age must be grater than 18 and less than 110: ");
                    age = Integer.parseInt(scan.nextLine());
                }
            } catch (NumberFormatException numEx) {
                System.out.print("ERROR, please write a number: ");
                age = 0;
            }
        }

        System.out.print("Hobby: ");
        String hobby = scan.nextLine();
        while (hobby.isEmpty() || hobby.startsWith(" ")) {
            System.out.print("Please, write your lastname hobby: ");
            hobby = scan.nextLine();
        }

        Person user = new Person(name, lastname, age, hobby);
        System.out.println(user.toString());
    }

}
