import java.util.Random;
import java.util.Scanner;

public class SortArray2D {

	public static void main(String[] args) {
//		1) Prasa lietotājam ievadīt masīvu skaitu cik ģenerēt(10-20) +
//	2) Uzģenerē 2 dimensiju masīvu, kur pirmā dimensija ir lietotāja ievadītais izmērs, bet
//	otrā dimensija katram elementam tiek izvēlēta no gadījumu skaitļu ģenerātora
//	robežās no 10-50 +
//	3) Aizpildam katru masīvu ar gadījuma skaitļiem robežās no 100-999 +
//	4) Vieciet katra individuālā masīva elementu kārtošanu dilstošā secībā
//	5) Aprēķiniet katra individuālā masīva vidējo vērtību+
//	6) Sakārtojiet 2D masīvu pēc katra masīva vidējās vērtības augošā secība+̄
//	7) Izvadam uz ekrāna saturu no masīva ar vislielāko vidējo vērtību	

		Scanner scanner = new Scanner(System.in);
		int dim1 =0;
		while(dim1<10 || dim1>20) {
			System.out.println("ievadiet masiva izmeru: ");
			 dim1 = scanner.nextInt();
			if(dim1<10 || dim1>20)
			{
				System.out.println("Nepareiza ievade, meginiet velreiz");
			}
			}
		
		Random rnd = new Random();
		int dim2 = 10+rnd.nextInt(41);
		//System.out.print(MasValue2(dim1,dim2).length+"  "+MasValue2(dim1,dim2)[0].length); //to check length
		
		int[][] Masivs = new int[dim1][dim2];
		Masivs = MasValue2(dim1,dim2);
		MasIzvade2D(Masivs);
	
		int[][] SortMas = new int[dim1][dim2];
		SortMas = MasSort2D(Masivs);
		System.out.println("Sasortēts masīvs: ");
		MasIzvade2D(SortMas);
		int[] AvgValues = new int[dim1];
		AvgValues = MasAvg2D(Masivs);
		MasIzvade1D(AvgValues); //Vector of Average values;
		System.out.println();
		//MasIzvade1D(MasSortAsc1D(AvgValues));//Vector(Sorted) of Average values
		//get indexes from sorted Vector;
		System.out.println();
		MasIzvade2D(MasSortAsc1D(Masivs,AvgValues));
		System.out.println("Masivs ar vislielako vidējo vērtību: ");
		int[] MasivsMaxAvg = new int[dim2];
		MasivsMaxAvg = MasSortAsc1D(Masivs,AvgValues)[dim1-1];
		MasIzvade1D(MasivsMaxAvg);
		
		//Vector of avg values to check if code is correct
		
	}
	
	public static int[][] MasValue2(int dim1, int dim2) {

		int[][] Mas2D = new int[dim1][dim2];
		Random rnd = new Random();
		for (int i = 0; i<dim1;i++) {
			for(int j = 0; j < dim2; j++) {
				Mas2D[i][j] = 100 + rnd.nextInt(900);
			}
		}
		return Mas2D;
		}
	
	public static void MasIzvade2D(int[][] Masivs) {
		for (int i = 0; i<Masivs.length;i++) {	
			System.out.print("{");
			for(int j = 0; j < Masivs[0].length; j++) {
				System.out.print(Masivs[i][j]+", ");
			}
			System.out.println("}");
		} 
	}
	
	public static void MasIzvade1D(int[] Masivs) {
		for (int i = 0; i< Masivs.length;i++) {
			System.out.print(Masivs[i]+", ");
		}
	}
	
	public static int[][] MasSort2D(int[][] Masivs2D){
		int dim1 = Masivs2D.length;
		int dim2 = Masivs2D[0].length;
		for (int z=0; z < dim1; z++) {
			
			for (int i =0; i<dim2; i++) {
		
				for (int j = i+1 ;j<dim2;j++) {
					if (Masivs2D[z][i] < Masivs2D[z][j]) {
						int pap = Masivs2D[z][i];
						Masivs2D[z][i] = Masivs2D[z][j];
						Masivs2D[z][j] = pap;
					}
			
				}

			}
		}
		return Masivs2D;
		}
	
	public static int[] MasAvg2D(int[][] Masivs2D){
		int dim1 = Masivs2D.length;
		int dim2 = Masivs2D[0].length;
		int[] MasAvg = new int[dim1];
		for (int z=0; z < dim1; z++) {
			int sum = 0;
			int avg = 0;
			for (int i =0; i<dim2; i++) {
				sum = sum + Masivs2D[z][i];
				}
			avg = sum/dim2;
			MasAvg[z]=avg;
		}
		return MasAvg;
		}
	
	public static int[][] MasSortAsc1D(int[][] Masivs2D,int[] Masivs1D) {
		
				
				for (int i =0; i<Masivs1D.length; i++) {
			
					for (int j = i+1 ;j<Masivs1D.length;j++) {
						if (Masivs1D[i] > Masivs1D[j]) {
							int[] pap = Masivs2D[i];
							Masivs2D[i] = Masivs2D[j];
							Masivs2D[j] = pap;
							int pap2 = Masivs1D[i];
							Masivs1D[i] = Masivs1D[j];
							Masivs1D[j] = pap2;
						}
					}
					System.out.print(Masivs1D[i]+", ");
				}
				System.out.println();
				return Masivs2D ;
		}
	
	
	
	
	
	
	
	
	
	
}
