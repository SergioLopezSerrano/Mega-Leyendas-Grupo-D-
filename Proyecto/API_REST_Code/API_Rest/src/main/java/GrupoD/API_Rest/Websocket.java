package GrupoD.API_Rest;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class Websocket implements WebSocketConfigurer {
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		for (int i = 1; i < 21; i++) {
			registry.addHandler(echoHandler(), "/" + i).setAllowedOrigins("*");
			System.out.println("Sesion Creada: " + i);
		};
	};
	
	@Bean
	public WebsocketController echoHandler() {
		return new WebsocketController();
	};
};
