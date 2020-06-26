package GrupoD.API_Rest;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketController extends TextWebSocketHandler {
	
	ConcurrentHashMap<Long, ObjectNode> players = new ConcurrentHashMap<>(); 
	private boolean[] a = new boolean [21];
	private boolean[] b = new boolean [21];
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		//Escribir el mensaje recibido
		System.out.println("Message received: " + message.getPayload());
		
		//Generar un objeto JsonNodo a partir del mensaje
		String msg = message.getPayload();
		ObjectMapper mapper = new ObjectMapper();
		JsonNode node = mapper.readTree(msg);
		
		//Crear el objeto node para enviar
		ObjectNode savingNode = mapper.createObjectNode();
		
		if (node.get("idJugadorPartida").asText().equals("1")) {
			
			savingNode.put("idJugadorPartida", node.get("idJugadorPartida").asText());
			savingNode.put("preparado", node.get("preparado").asText());
			savingNode.put("finalJuego", node.get("finalJuego").asText());
			savingNode.put("personaje", node.get("personaje").asText());
			savingNode.put("escenario", node.get("escenario").asText());
			savingNode.put("tiempo", node.get("tiempo").asText());
			savingNode.put("marcador1", node.get("marcador1").asText());
			savingNode.put("marcador2", node.get("marcador2").asText());
			savingNode.put("posicionX", node.get("posicionX").asText());
			savingNode.put("posicionY", node.get("posicionY").asText());
			savingNode.put("velocidadX", node.get("velocidadX").asText());
			savingNode.put("velocidadY", node.get("velocidadY").asText());
			savingNode.put("aceleracionX", node.get("aceleracionX").asText());
			savingNode.put("aceleracionY", node.get("aceleracionY").asText());
			savingNode.put("posicionPelotaX", node.get("posicionPelotaX").asText());
			savingNode.put("posicionPelotaY", node.get("posicionPelotaY").asText());
			savingNode.put("velocidadPelotaX", node.get("velocidadPelotaX").asText());
			savingNode.put("velocidadPelotaY", node.get("velocidadPelotaY").asText());
			savingNode.put("aceleracionPelotaX", node.get("aceleracionPelotaX").asText());
			savingNode.put("aceleracionPelotaY", node.get("aceleracionPelotaY").asText());
			savingNode.put("Jugador1BolaTocando", node.get("Jugador1BolaTocando").asText());
			savingNode.put("Jugador1BolaCogida", node.get("Jugador1BolaCogida").asText());
			savingNode.put("Jugador2PosicionX", node.get("Jugador2PosicionX").asText());
			savingNode.put("Jugador2PosicionY", node.get("Jugador2PosicionY").asText());
			
			if (node.get("primerContacto").asBoolean()) {
				a[Integer.parseInt(session.getUri().toString().substring(1))] = true;
			} else {
				a[Integer.parseInt(session.getUri().toString().substring(1))] = false;
			};
			
			players.put((long) (0 + Integer.parseInt(session.getUri().toString().substring(1)) * 2), savingNode);
			if (b[Integer.parseInt(session.getUri().toString().substring(1))]) {
				session.sendMessage(new TextMessage(players.get((long) (1 + Integer.parseInt(session.getUri().toString().substring(1)) * 2)).toString()));
			};
			a[Integer.parseInt(session.getUri().toString().substring(1))] = true;
			System.out.println("Session ID: " + session.getId());
			System.out.println("Session URI: " + session.getUri());
		};
		if (node.get("idJugadorPartida").asText().equals("2")) {
			savingNode.put("idJugadorPartida", node.get("idJugadorPartida").asText());
			
			savingNode.put("preparado", node.get("preparado").asText());
			savingNode.put("personaje", node.get("personaje").asText());
			savingNode.put("posicionX", node.get("posicionX").asText());
			savingNode.put("posicionY", node.get("posicionY").asText());
			savingNode.put("velocidadX", node.get("velocidadX").asText());
			savingNode.put("velocidadY", node.get("velocidadY").asText());
			savingNode.put("aceleracionX", node.get("aceleracionX").asText());
			savingNode.put("aceleracionY", node.get("aceleracionY").asText());
			savingNode.put("posicionPelotaX", node.get("posicionPelotaX").asText());
			savingNode.put("posicionPelotaY", node.get("posicionPelotaY").asText());
			savingNode.put("velocidadPelotaX", node.get("velocidadPelotaX").asText());
			savingNode.put("velocidadPelotaY", node.get("velocidadPelotaY").asText());
			savingNode.put("aceleracionPelotaX", node.get("aceleracionPelotaX").asText());
			savingNode.put("aceleracionPelotaY", node.get("aceleracionPelotaY").asText());
			savingNode.put("Jugador2BolaTocando", node.get("Jugador2BolaTocando").asText());
			savingNode.put("Jugador2BolaCogida", node.get("Jugador2BolaCogida").asText());
			savingNode.put("Right", node.get("Right").asText());
			savingNode.put("Left", node.get("Left").asText());
			savingNode.put("Up", node.get("Up").asText());
			savingNode.put("Down", node.get("Down").asText());
			
			if (node.get("primerContacto").asBoolean()) {
				b[Integer.parseInt(session.getUri().toString().substring(1))] = true;
			} else {
				b[Integer.parseInt(session.getUri().toString().substring(1))] = false;
			};
			
			players.put((long) (1 + Integer.parseInt(session.getUri().toString().substring(1)) * 2), savingNode);
			if (a[Integer.parseInt(session.getUri().toString().substring(1))]) {
				session.sendMessage(new TextMessage(players.get((long) (0 + Integer.parseInt(session.getUri().toString().substring(1)) * 2)).toString()));
			};
			b[Integer.parseInt(session.getUri().toString().substring(1))] = true;
			System.out.println("Session ID: " + session.getId());
			System.out.println("Session URI: " + session.getUri());
		};
	};
};