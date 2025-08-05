package com.portfolio.controller;
import com.portfolio.model.ChatRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

	@Value("${gemini.api.key}")
	private String geminiApiKey;

    @PostMapping("/gemini")
    @CrossOrigin(origins = "http://localhost:5173")
    public Map<String, String> geminiChat(@RequestBody ChatRequest request) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        Map<String, Object> payload = Map.of(
            "contents", List.of(Map.of("parts", List.of(Map.of("text", request.getMessage()))))
        );

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);

        String geminiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + geminiApiKey;
 
        try {
        	 ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
        		        geminiUrl,
        		        HttpMethod.POST,
        		        entity,
        		        new ParameterizedTypeReference<>() {}
        		    );
        	 	System.out.println(response);
        		    Map<String, Object> body = response.getBody();
        		    if (body == null || !body.containsKey("candidates")) {
        		        return Map.of("reply", "⚠️ No response from Gemini.");
        		    }

        		    List<Map<String, Object>> candidates = (List<Map<String, Object>>) body.get("candidates");
        		    if (candidates == null || candidates.isEmpty()) {
        		        return Map.of("reply", "⚠️ No candidates returned.");
        		    }

        		    Map<String, Object> content = (Map<String, Object>) candidates.get(0).get("content");
        		    if (content == null || !content.containsKey("parts")) {
        		        return Map.of("reply", "⚠️ No content in response.");
        		    }

        		    List<Map<String, Object>> parts = (List<Map<String, Object>>) content.get("parts");
        		    if (parts == null || parts.isEmpty()) {
        		        return Map.of("reply", "⚠️ No parts found in content.");
        		    }

        		    String reply = (String) parts.get(0).get("text");
        		    return Map.of("reply", reply);

        		} catch (Exception e) {
        		    e.printStackTrace(); // optionally log with logger
        		    return Map.of("reply", "⚠️ Gemini API error: " + e.getMessage());
        		}
    }}

