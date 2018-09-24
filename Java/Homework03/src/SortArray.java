import java.util.Random;
import java.util.Scanner;

public class SortArray {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		int MasSize = 0;
		
		while(MasSize<=0) {
		System.out.println("ievadiet masiva izmeru: ");
		 MasSize = scanner.nextInt();
		if(MasSize<=0)
		{
			System.out.println("Nepareiza ievade, meginiet velreiz");
		}
		}
		
		int[] NewArray = new int[MasSize];
		Random rnd =new Random();
		for (int i = 0;i<MasSize;i++) {
			NewArray[i] = 10 + rnd.nextInt(90);
		}
		
		
		for(int i =0;i<MasSize;i++) {
			System.out.print(NewArray[i]);
			if (i<MasSize -1) {
				System.out.print(", ");
			} 
		}
		
		//sort ascend.
		System.out.println();
		System.out.println("Sorting: ");
		for (int i =0; i<MasSize; i++) {
			
			for (int j = i+1 ;j<MasSize;j++) {
				if (NewArray[i] > NewArray[j]) {
					int pap = NewArray[i];
					NewArray[i] = NewArray[j];
					NewArray[j] = pap;
				}
				
			}
			System.out.print(NewArray[i]);
			if (i<MasSize -1) {
				System.out.print(", ");
			} 
		}
		
		
		
		
		
		
		
		
		scanner.close();
		
	}

}
