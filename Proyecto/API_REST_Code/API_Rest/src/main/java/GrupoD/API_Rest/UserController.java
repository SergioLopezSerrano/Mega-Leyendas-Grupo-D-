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
@RequestMapping("/users")
public class UserController {
	
	Map<Long, User> users = new ConcurrentHashMap<>(); 
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public User newUser(@RequestBody String name) {
		
		name = name.substring(1, name.length() - 1);
		
		long id = 1;
		User usuario;
		boolean encontrado = false;
		
		do {
			
			usuario = users.get(id);
			
			if (usuario != null) {
				if (!usuario.getConnected()) {
					if (usuario.getName().equals(name)) {
						encontrado = true;
					};
				};
			} else {
				encontrado = true;
			};
			
			id = id + 1;
		}while(!encontrado);
		
		id = id - 1;
		usuario = new User();
		usuario.setId(id);
		usuario.setName(name);
		usuario.setConnected(true);
		usuario.setIdGame(0);
		usuario.setIdPlayer(0);

		users.put(id, usuario);

		return usuario;
	}
	
	@GetMapping
	public Collection<User> users() {
		return users.values();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> getUser(@PathVariable long id) {

		User savedUser = users.get(id);

		if (savedUser != null) {
			return new ResponseEntity<>(savedUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User updatedUser) {

		User savedUser = users.get(updatedUser.getId());

		if (savedUser != null) {

			users.put(id, updatedUser);

			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable long id) {

		User user = users.get(id);

		if (user != null) {
			users.remove(user.getId());
			return new ResponseEntity<>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
