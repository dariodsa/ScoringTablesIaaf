package hr.fer.akmaksimir.model;

/**
 * Interface {@link ScoringSystem} specifies what should every implementation
 * implement to specify this strategy. Strategy will be used in calculating the number of 
 * points by the IAAF specifications.
 * 
 * @author dario
 *
 */
public interface ScoringSystem {

    /**
     * Initialize all data structure needed to accessing the points.
     */
    public void init();

    /**
     * Returns the number of points for the given result.
     * 
     * @param result
     *            {@link Result} result
     * @return long, number of points
     */
    public long getPoints(Result result, Athlete athlete);
}
