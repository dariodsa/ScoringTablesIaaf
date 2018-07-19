package hr.fer.akmaksimir.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name="RegistredAthlete")

public class RegistredAthlete implements Serializable{
	
	@EmbeddedId CompositKey key;
	@Column
	private String bib;
	
	
	public RegistredAthlete(CompositKey key, String bib) {
	
		this.key = key;
		this.bib = bib;
	}

	public CompositKey getKey() {
		return key;
	}

	public void setKey(CompositKey key) {
		this.key = key;
	}

	public String getBib() {
		return bib;
	}
	public void setBib(String bib) {
		this.bib = bib;
	}




	@Embeddable
	public static class CompositKey implements Serializable{
	    long athleteId;
	    long competitionId;
		
	    public CompositKey(long athleteId, long competitionId) {
			this.athleteId = athleteId;
			this.competitionId = competitionId;
		}

		public long getAthleteId() {
			return athleteId;
		}

		public void setAthleteId(long athleteId) {
			this.athleteId = athleteId;
		}

		public long getCompetitionId() {
			return competitionId;
		}

		public void setCompetitionId(long competitionId) {
			this.competitionId = competitionId;
		}
	    
	}
}
