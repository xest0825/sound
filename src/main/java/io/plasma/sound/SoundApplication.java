package io.plasma.sound;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.ApplicationPidFileWriter;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@ServletComponentScan
@EnableScheduling
@SpringBootApplication(scanBasePackages = "io.plasma.sound")
public class SoundApplication {

    public static void main(String[] args) {
        SpringApplication application = new SpringApplicationBuilder()
                .sources(SoundApplication.class)
                .listeners(new ApplicationPidFileWriter("./sound.pid"))
                .build();
        application.run(SoundApplication.class, args);
    }

}
