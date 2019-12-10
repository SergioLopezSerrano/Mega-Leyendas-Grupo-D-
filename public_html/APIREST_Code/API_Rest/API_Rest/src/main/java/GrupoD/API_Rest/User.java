package GrupoD.API_Rest;

public class User 
{
   //Atributos
   private long id;
   private String name;
   private boolean connected;
   
   //Getters y setters
    public long getId() {
		return id;
	}

	public void setId(long idAux) {
		id = idAux;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String nameAux) {
		name = nameAux;
	}
	
	public boolean getConnected() {
		return connected;
	}

	public void setConnected(boolean conAux) {
		connected = conAux;
	}
	
	@Override
	public String toString() {
		return "User [Id=" + id + ", Name=" + name + ", Connected=" + connected + "]";
	}
}
