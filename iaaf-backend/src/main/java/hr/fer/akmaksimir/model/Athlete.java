package hr.fer.akmaksimir.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonFormat;

import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Gender;

@Entity
@Table(name = "Athlete")
public class Athlete {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column
	@Size(min=3, max = 25)
	private String firstName;
	
	@Column
	@Size(min=3, max = 25)
	private String lastName;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date dateOfBirth;
	
	@Column
	@Size(min=3, max = 25)
	private String country;
	@Column
	@Size(min=3, max = 25)
	private String club;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Column
	private long competitionId;
	@Column
	private String bib;
	
	@Enumerated(EnumType.STRING)
	@Nullable
	private AgeCategories ageCategories;
	
	public Athlete() {
	}

	public Athlete(long id, @Size(min = 3, max = 25) String firstName, @Size(min = 3, max = 25) String lastName,
			Date dateOfBirth, @Size(min = 3, max = 25) String country, @Size(min = 3, max = 25) String club,
			Gender gender, long competitionId, String bib) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.club = club;
		this.gender = gender;
		this.competitionId = competitionId;
		this.bib = bib;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getClub() {
		return club;
	}

	public void setClub(String club) {
		this.club = club;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public long getCompetitionId() {
		return competitionId;
	}

	public void setCompetitionId(long competitionId) {
		this.competitionId = competitionId;
	}

	public String getBib() {
		return bib;
	}

	public void setBib(String bib) {
		this.bib = bib;
	}

	public AgeCategories getAgeCategories() {
		return ageCategories;
	}

	public void setAgeCategories(AgeCategories ageCategories) {
		this.ageCategories = ageCategories;
	}
	
	
}
