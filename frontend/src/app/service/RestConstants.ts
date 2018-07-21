export class RestConstants {

	private static PREFIX : string = "http://127.0.0.1:8080/";
	private static REST_API_PREFIX: string = RestConstants.PREFIX + "api/";
	
	public static CHECK_USER : string = RestConstants.REST_API_PREFIX + "user";

	public static LIST_GENDERS : string = RestConstants.REST_API_PREFIX + "listGenders";
	public static LIST_CATEGORIES : string = RestConstants.REST_API_PREFIX + "listCategories";
	public static LIST_DISCIPLINES : string = RestConstants.REST_API_PREFIX + "listDisciplines";
	public static LIST_MEASURMENT : string = RestConstants.REST_API_PREFIX + "listMeasurment";
	
	public static ADD_ATHLETE : string = RestConstants.REST_API_PREFIX + "athlete/add";
	public static ADD_COMPETITION : string = RestConstants.REST_API_PREFIX + "competitions/add";
	public static ADD_RESULT : string = RestConstants.REST_API_PREFIX + "result/add";

	public static GET_COMPETITIONS : string = RestConstants.REST_API_PREFIX + "competitions";
	public static GET_COMPETITION_INFO : string = RestConstants.REST_API_PREFIX + "competitions";

	public static GET_RESULTS : string = RestConstants.REST_API_PREFIX + "result/getCompetitionId/";
	public static GET_POINTS : string = RestConstants.REST_API_PREFIX + "getPoints";
	public static GET_ATHLETES_COMP : string = RestConstants.REST_API_PREFIX + "athlete/withCompetititonId";
	public static GET_ATHLETE_COMPID_AND_BIB : string = RestConstants.REST_API_PREFIX + "athlete/withCompetitionIdAndBib";
	public static GET_ATHLETE_INFO : string = RestConstants.REST_API_PREFIX + "athlete/id";

	public static DELETE_RESULT : string = RestConstants.REST_API_PREFIX + "result/deleteResult";
	
	public static UPDATE_RESULT : string = RestConstants.REST_API_PREFIX + "result/updateResult";

}