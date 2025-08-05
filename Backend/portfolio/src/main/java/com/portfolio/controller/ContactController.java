package com.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import com.portfolio.model.ContactRequest;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String ownerEmail;

    @PostMapping("/send")
    public String sendEmail(@RequestBody ContactRequest request) {
        // Email to owner
        SimpleMailMessage ownerMsg = new SimpleMailMessage();
        ownerMsg.setTo(ownerEmail);
        ownerMsg.setSubject("New Contact Form Submission");
        ownerMsg.setText("From: " + request.getName() + "\nEmail: " + request.getEmail() + "\n\nMessage:\n" + request.getMessage());
        mailSender.send(ownerMsg);

        // Confirmation to user
        SimpleMailMessage userMsg = new SimpleMailMessage();
        userMsg.setTo(request.getEmail());
        userMsg.setSubject("Thanks for contacting Sathvik Reddy Kamidi");
        userMsg.setText("Hi " + request.getName() + ",\n\nThanks for reaching out! I have received your message and will get back to you shortly.\n\nRegards,\nSathvik");
        mailSender.send(userMsg);

        return "Emails sent";
    }
}
