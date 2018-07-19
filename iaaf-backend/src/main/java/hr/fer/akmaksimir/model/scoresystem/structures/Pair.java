package hr.fer.akmaksimir.model.scoresystem.structures;

/**
 * Class Pair implements {@link Comparable} and it compares with each other
 * looking at the result property. It encapsulate pair of a accomplished result and 
 * it's number of points according to the IAAF rules.
 * @author dario
 *
 */
public class Pair implements Comparable<Pair> {
    
    /**
     * result
     */
    private double result;
    /**
     * point by the IAAF
     */
    private long points;
    
    /**
     * Constructs Pair with the given parameters.
     * @param result result
     * @param points number of points for the given result
     */
    public Pair(double result, long points) {
        this.result = result;
        this.points = points;
    }
    
    /**
     * Returns the result.
     * @return result, double value
     */
    public double getResult() {
        return result;
    }

    /**
     * Returns the number of points.
     * @return number of points
     */
    public long getPoints() {
        return points;
    }

    @Override
    public int compareTo(Pair p) {
        return Double.compare(p.getResult(), result);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        long temp;
        temp = Double.doubleToLongBits(this.result);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Pair other = (Pair) obj;
        if (Double.doubleToLongBits(result) != Double.doubleToLongBits(other.result))
            return false;
        return true;
    }
    
    
    
}
