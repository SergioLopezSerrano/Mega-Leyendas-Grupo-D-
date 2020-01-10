package GrupoD.API_Rest;

public class Game 
{
	private User user1;
	private User user2;
	private long id;
	
	//Constructor
	public void setId(long i) {
		id = i;
	}
	public long getId() {
		return id;
	}
	
	//Getters y setter
	public void setUser1(User u) {
		user1 = u;
	}
	public void setUser2(User u) {
		user2 = u;
	}
	public User getUser1() {
		return user1;
	}
	public User getUser2() {
		return user2;
	}
}
