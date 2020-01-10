package GrupoD.API_Rest;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/games")
public class GameController {

	Map<Long, Game> games = new ConcurrentHashMap<>();
	
	@GetMapping
	public Collection<Game> games() {
		return games.values();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Game newGame(@RequestBody Game game) {

		long id = 1;
		Game juego;
		boolean encontrado = false;
		do {
			juego = games.get(id);
			if (juego == null) {
				encontrado = true; //se ha encontrado una partida vacia
			};
			
			id = id + 1;
		}while(!encontrado);
		id = id - 1;
		juego.setId(id);
		games.put(id, game);

		return game;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Game> getGame(@PathVariable long id) {

		Game savedGame = games.get(id);

		if (savedGame != null) {
			return new ResponseEntity<>(savedGame, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
