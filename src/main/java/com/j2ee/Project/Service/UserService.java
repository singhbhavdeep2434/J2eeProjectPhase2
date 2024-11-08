package com.j2ee.Project.Service;

import com.j2ee.Project.Model.User;
import com.j2ee.Project.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepo;


    // READ all users and return
    public List<User> returnUser() {
        return userRepo.findAll();
    }

    // CREATE new User
    public void addUser(User user) {
        userRepo.save(user);
    }

    // FETCH user by id
//    public User getUser(int id) {
//        return userRepo.findById(id);
//    }


    public User getUser(int id) {
        try {
            Optional<User> optionalUser = userRepo.findById(id);
            if (optionalUser.isPresent()) {
                return optionalUser.get(); // Get the User object from the Optional
            } else {
                throw new RuntimeException("User not found for id :: " + id); // Handle the case where the user is not found
            }
        } catch (Exception e) {
            throw new RuntimeException("An error occurred while retrieving the user: " + e.getMessage(), e);
        }
    }




    // UPDATES existing user
    public void updateUser(User user) {
        userRepo.save(user);
    }

    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }

}
