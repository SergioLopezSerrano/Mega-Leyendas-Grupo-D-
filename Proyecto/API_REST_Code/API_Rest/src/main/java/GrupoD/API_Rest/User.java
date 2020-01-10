package GrupoD.API_Rest;

public class User 
{
   //Atributos
   private long id;
   private String name;
   private boolean connected;
   private long idGame;
   private long idPlayer;
   
   //Getters y setters
    public long getId() {
		return id;
	}

	public void setId(long i) {
		id = i;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String n) {
		name = n;
	}
	
	public boolean getConnected() {
		return connected;
	}

	public void setConnected(boolean c) {
		connected = c;
	}
	
	public long getIdGame() {
		return idGame;
	}

	public void setIdGame(long i) {
		idGame = i;
	}
	
	public long getIdPlayer() {
		return idPlayer;
	}

	public void setIdPlayer(long i) {
		idPlayer = i;
	}
	
	@Override
	public String toString() {
		return "User [Id:" + id + " IdPlayer: " + idPlayer + " Name:" + name + " Connected:" + connected + "]";
	}
}
