package hr.fer.akmaksimir.model;

public interface ScoringSystem {
    
    public void init();
    public long getPoints(Result result);
}
