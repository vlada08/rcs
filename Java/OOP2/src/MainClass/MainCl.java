package MainClass;

import Shapes.Rectangle;
import Shapes.UnitUtils;
import Shapes.Units;

public class MainCl {

	public static void main(String[] args) {
		
		Rectangle rectangle =new Rectangle(5,4,Units.Meter, Units.Meter);
//		System.out.println(rectangle);
		
		UnitUtils rectangleConv = new UnitUtils();
		
		System.out.println(rectangleConv.convertPerim());
		

	}

}
