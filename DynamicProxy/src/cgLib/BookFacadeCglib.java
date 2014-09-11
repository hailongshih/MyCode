package cgLib;

import java.lang.reflect.Method;

import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

public class BookFacadeCglib implements MethodInterceptor {

	private Object target;
	
	@Override
	public Object intercept(Object obj, Method arg1, Object[] args,
			MethodProxy proxy) throws Throwable {
		// TODO Auto-generated method stub
		System.out.println("adasfʼ");  
        proxy.invokeSuper(obj, args);  
        System.out.println("dsa");  
        return null; 
	}

	/**
	 * @param args
	 */
	public Object getInstance(Object target) {  
        this.target = target;  
        Enhancer enhancer = new Enhancer();  
        enhancer.setSuperclass(this.target.getClass());  
        // �ص�����  
        enhancer.setCallback(this);  
        // �����������  
        return enhancer.create();  
    }

}
