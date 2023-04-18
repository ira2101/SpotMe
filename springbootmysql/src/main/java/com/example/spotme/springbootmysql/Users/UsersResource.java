package com.example.spotme.springbootmysql.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import com.google.gson.Gson;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/users")

public class UsersResource {

    @Autowired
    UsersRepository usersRepository;

    @PostMapping(value = "/addUser")
    public List<Users> addUser(@RequestBody Users user) {
            int ret = usersRepository.save(user);
            if (ret == 0) {
                return null;
            }
        return null;
    }
    @GetMapping(value = "/getAllUsers")
    public List<Users> getAllUsers() {
        return usersRepository.getAllUsers();
    }
    @PutMapping(value = "/forgotpassword/{password}/{email}")
    public String updatePassword( @PathVariable String password, @PathVariable String email) {
        // String email = user.getEmail();
        int ret = usersRepository.updatePassword(password, email);
        if (ret == -1) {
            return "Error";
        }
        return "Password has been changed successfully!";
    }
    @DeleteMapping(value = "/deleteAccount/{email}") 
    public String deleteAccount(@PathVariable String email) {
        // String username = user.getUserName();
        int ret = usersRepository.remove(email);
        if (ret == -1) {
            return "Error";
        }
        return "Account has been deleted successfully!";
    }
    @PutMapping(value = "/updateProfile/{email}/{username}/{password}/{firstname}/{lastname}")
    public String updateProfile(@PathVariable String email, @PathVariable String username,
            @PathVariable String password, @PathVariable String firstname, @PathVariable String lastname) {
        // String email = user.getEmail();
        int ret = usersRepository.updateProf(email, username, password, firstname, lastname);
        if (ret == 0) {
            return "Error";
        }
        return "Profile has been successfully updated!";
    }
    @GetMapping(value = "/getAll/{email}")
    public List<Users> findbyUsername(@PathVariable String email) {
        return usersRepository.findbyUsername(email);
    }
    @GetMapping(value = "/logIn/{email}/{password}")
    public int logIn(@PathVariable String email, @PathVariable String password) {
        List<Users> users = findbyUsername(email);
        if(users.size() != 0) {
            for(int i = 0; i < users.size(); i++) {
                if(users.get(i).getUserPassword().equals(password)) {
                    System.out.println("here!!!");
                    return 0;
                } 
            }
            
        }
        return 1;
    }
    @PostMapping(value = "/insertLocation",
    produces={ "application/json" },
    consumes={ "multipart/form-data" })
    public List<Location> insertLocation(
            @RequestParam("image") MultipartFile file,
            @RequestParam("location") String location
    ) throws IOException {
            System.out.println(location);
            Gson gson = new Gson();
            Location loc = gson.fromJson(location, Location.class);
            System.out.println(loc.toString());
            loc.setPictures(file.getBytes());
            int ret = usersRepository.insertLocation(loc);
            if (ret == 0) {
                return null;
            }
        return null;
    }

    @DeleteMapping(value = "/deleteLocation/{email}/{parking_name}")
    public int deleteLocation(@PathVariable String email, @PathVariable String parking_name) {
        int ret = usersRepository.deleteLocation(email, parking_name);
        return ret;
    }

    @RequestMapping(value = "/updateLocation/{email}/{price}/{car_type}/{parking_name}/{description}", method ={RequestMethod.GET, RequestMethod.PUT})
    public int updateLocation(@PathVariable String email, @PathVariable String price, @PathVariable String car_type, @PathVariable String parking_name, @PathVariable String description) {
        List<Location> location = usersRepository.getLocation(email, parking_name);
        if(price.equals("null")) {
            price = location.get(0).getPrice();
        }
        if(car_type.equals("null")) {
            car_type = location.get(0).getCar_type();
        }
        if(description.equals("null")) {
            description = location.get(0).getDescription();
        }
        int ret = usersRepository.updateLocation(email, price, car_type, parking_name, description);
        return ret;
    }
    @GetMapping(value = "/getLocation/{email}/{parking_name}")
    public List<Location> getLocation(@PathVariable String email, @PathVariable String parking_name) {
        return usersRepository.getLocation(email, parking_name);
    }
    @GetMapping(value = "/getLocationByEmail/{email}")
    public List<Location> getLocationByEmail(@PathVariable String email) {
        return usersRepository.getLocationByEmail(email);
    }
    @PostMapping(value = "/insertBooking")
    public int insertBooking(@RequestBody Bookings booking) {
        int ret = usersRepository.insertBooking(booking);
        return ret; 
    }

    @GetMapping(value = "/findBookings/{email}")
    public List<Bookings> findBookings(@PathVariable String email) {
        return usersRepository.findBookings(email);
    }

    @GetMapping(value = "/findDateBookings/{location}/{parking_date}")
    public List<Bookings> findDateBookings(@PathVariable String location, @PathVariable String parking_date) {
        return usersRepository.findDateBookings(location,parking_date);
    }

    @DeleteMapping(value = "deleteBooking/{email}/{location}/{start_time}/{end_time}/{parking_date}")
    public int deleteBooking(@PathVariable String email, @PathVariable String location, @PathVariable String start_time, @PathVariable String end_time, @PathVariable String parking_date) {
        return usersRepository.deleteBooking(email, location, start_time, end_time, parking_date);
    }

    @PostMapping(value = "/insertImage", 
    produces = { "application/json" }, 
    consumes = { "multipart/form-data" })
    public int insertImage(
        @RequestParam("image")
        MultipartFile file,
        @RequestParam("email")
        String email
        ) throws IOException {
        byte[] data = file.getBytes();
        System.out.println(data);
        return usersRepository.insertImage(data, email);
    }
    @PostMapping(value = "/addReviews")
    public List<Reviews> addReviews(@RequestBody Reviews reviews) {
            int ret = usersRepository.addReviews(reviews);
            if (ret == 0) {
                return null;
            }
        return null;
    }
    @GetMapping(value = "/getReviews")
    public List<Reviews> getReviews() {
        return usersRepository.getReviews();
    }
    @PostMapping(value = "/addCredits/{email}")
    public List<Credits> addCredits(@PathVariable String email) {
            int ret = usersRepository.addCredits(email);
            if (ret == 0) {
                return null;
            }
        return null;
    }
    @GetMapping(value = "/getCredits/{email}")
    public int getCredits(@PathVariable String email) {
        return usersRepository.getCredits(email);
    }
    @PutMapping(value = "/updateCredits/{email}/{amount}")
    public String updateCredits(@PathVariable String email, @PathVariable String amount) {
        // String email = user.getEmail();
        int sum = getCredits(email) - Integer.parseInt(amount);
        int ret = usersRepository.updateCredits(email, String.valueOf(sum));
        if (ret == 0) {
            return "Error";
        }
        return "Credits has been successfully updated!";
    }
    @PostMapping(value = "/addParkingReviews")
    public List<ParkingReviews> addParkingReviews(@RequestBody ParkingReviews parkingReviews) {
            int ret = usersRepository.addParkingReviews(parkingReviews);
            if (ret == 0) {
                return null;
            }
        return null;
    }
    @GetMapping(value = "/getParkingReviews/{parking_name}")
    public double getParkingReviews(@PathVariable String parking_name) {
        List<ParkingReviews> abc = usersRepository.getParkingReviews(parking_name);
        double a = 0;
        double b = 0;
        for(int i = 0; i < abc.size(); i++) {
            a += Integer.parseInt(abc.get(i).getRating());
            b++;
        }
        double c = a/b;
        return c;
    }

    @GetMapping(value = "/getNearbyListings")
    public List<Location> getNearbyListings() {
        return usersRepository.getNearbyListings();
    }


}
