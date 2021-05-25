package br.com.taskapp.taskapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TaskappApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(TaskappApplication.class, args);
		System.out.println("Running TaskappApplication");
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Running CommandLineRunner");
	}

	@Configuration
	public class WebConfiguration implements WebMvcConfigurer {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**").allowedMethods("*");
		}
	}
	
}
