package Shapes;

public class UnitUtils extends Rectangle {
	
	
	
	public UnitUtils() {
		
	}
	 
	
	public double convertPerim() {
//		double Per = perimetrs;
		double converted = 0;
		if (mervA.equals(mervB)) 
		{
			converted = perimetrs;
					}
		else if (mervA == Units.Millimeters) {
			switch (mervB) {
			case Centimeters:
				converted = perimetrs * 0.1;
				break;
			case Meter:
				converted = perimetrs * 0.001;
				break;
			}
		}
		else if (mervA == Units.Centimeters) {
			switch (mervB) {
			case Millimeters:
				converted = perimetrs * 10;
				break;
			case Meter:
				converted = perimetrs * 0.01;
				break;
			}
		}
		
		else if (mervA == Units.Meter) {
			switch (mervB) {
			case Millimeters:
				converted = perimetrs * 1000;
				break;
			case Centimeters:
				converted = perimetrs * 100;
				break;
			}
		}
		
		return converted;
	}
	

}
