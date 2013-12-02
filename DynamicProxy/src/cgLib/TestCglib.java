package cgLib;

public class TestCglib {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		BookFacadeCglib cglib=new BookFacadeCglib();  
        
		BookFacadeImpl bookCglib=(BookFacadeImpl)cglib.getInstance(new BookFacadeImpl());  
        
        bookCglib.addBook();  
	}

}
