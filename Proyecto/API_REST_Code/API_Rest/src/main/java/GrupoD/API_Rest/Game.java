package GrupoD.API_Rest;

public class Game 
{
	//Atributos
	private long id;
	private User user1;
	private User user2;
	
	//Getters y setter
	public void setId(long i) {
		id = i;
	}
	
	public long getId() {
		return id;
	}
	
	public void setUser1(User u) {
		user1 = u;
	}
	
	public User getUser1() {
		return user1;
	}
	
	public void setUser2(User u) {
		user2 = u;
	}
	
	public User getUser2() {
		return user2;
	}
}
