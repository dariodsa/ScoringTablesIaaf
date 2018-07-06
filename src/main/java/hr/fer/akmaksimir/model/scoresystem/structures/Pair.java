package hr.fer.akmaksimir.model.scoresystem.structures;

public class Pair implements Comparable<Pair> {
    private double result;
    private long points;
    
    public Pair(double result, long points) {
        this.result = result;
        this.points = points;
    }

    public double getResult() {
        return result;
    }

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
