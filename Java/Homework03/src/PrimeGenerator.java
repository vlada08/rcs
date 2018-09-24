import java.util.Scanner;

public class PrimeGenerator {

	public static void main(String[] args) {
//		1) Prasa lietotājam ievadīt cik pirmsskaitļus secīgus pirmsskaitļus tas vēlas uzģenerēt(sākot no 1) - 
//limitējat lietotāja iespējas no 0 - 100
//	2) Izvadiet uz ekrāna ar komatu atdalītus tik pirmskauitļus cik lietotājs pieprasīja
//	Piemēram, ievada 11, tad programma izvada 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
		
		Scanner scanner = new Scanner(System.in);
		int count = 0;
		
		while(count<1 || count>100) {
		System.out.println("ievadiet pirmskaitlu skaitli: ");
		 count = scanner.nextInt();
		if(count<1 || count>100)
		{
			System.out.println("Nepareiza ievade, meginiet velreiz");
		}
		}
		
		int[] primary = new int[count];
		int ind = 0;
		int i =0;
		int num =1;
		while (i < primary.length) {
			ind = 0;
			for(int j = 2;j<num;j++) 
			{
				if (num % j == 0) {
					ind = 1;
				}
			}
			if (ind == 0) {
				primary[i]=num;
				System.out.print(primary[i]+", ");
				i++;
			}
			num++;	
		}
		
		
		

	}
}
