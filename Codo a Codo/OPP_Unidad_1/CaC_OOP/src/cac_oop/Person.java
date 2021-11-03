/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cac_oop;

/**
 *
 * @author Denuchan
 */
public class Person {
    
    private String name;
    private String lastName;
    private int age;
    private String hobby;

    public Person(String name, String lastName, int age, String hobby) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.hobby = hobby;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    @Override
    public String toString() {
        return "\nUser Info \n"  + "----------\n" + "Name: " + this.getName() + "\nLastName: " + this.getLastName() + "\nAge: " + this.getAge() + "\nHobby: " + this.getHobby();
    }
    
    
    
}
