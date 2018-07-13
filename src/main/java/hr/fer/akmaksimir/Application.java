package hr.fer.akmaksimir;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Class is a starting point of a spring application.
 * 
 * @author dario
 *
 */
@SpringBootApplication
public class Application {

    /**
     * Method serves as an entry point into the program.
     * 
     * @param args
     *            - command line arguments that should be left empty
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

