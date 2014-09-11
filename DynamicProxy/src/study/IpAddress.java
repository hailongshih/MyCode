package study;

import java.net.InetAddress;


public class IpAddress {

	
	private static byte[] ip;
	
	/**
	 * @param args
	 */
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub

		InetAddress addr = InetAddress.getLocalHost();
		ip=addr.getAddress();//获得本机IP
		System.out.println(addr.getLocalHost());
		for (int i = 0; i < ip.length; i++) {
			System.out.print(ip[i]+" ");
		}
	}

}
