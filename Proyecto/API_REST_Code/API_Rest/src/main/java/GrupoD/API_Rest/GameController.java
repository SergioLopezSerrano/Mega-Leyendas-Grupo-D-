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
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Game newGame(@RequestBody User user) {
		
		long id = 1;
		Game juego;
		boolean encontrado = false;
		
		do {
			juego = games.get(id);
			if (juego == null) {
				encontrado = true; 
			};
			
			id = id + 1;
		}while(!encontrado);
		
		id = id - 1;
		juego = new Game();
		juego.setId(id);
		user.setIdGame(id);
		user.setIdPlayer(1);
		juego.setUser1(user);
		juego.setUser2(null);
		games.put(id, juego);
		
		return juego;
	}
	
	@GetMapping
	public Collection<Game> games() {
		return games.values();
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
	
	@PutMapping("/{id}")
	public ResponseEntity<Game> updateGame(@PathVariable long id, @RequestBody User user) {
			
		Game savedGame = games.get(id);

		if (savedGame != null) {
			
			user.setIdGame(id);
			user.setIdPlayer(2);
			savedGame.setUser2(user);
			
			games.put(id, savedGame);
							
			return new ResponseEntity<>(savedGame, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Game> deleteUser(@PathVariable long id) {

		Game game = games.get(id);

		if (game != null) {
			games.remove(game.getId());
			return new ResponseEntity<>(game, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
