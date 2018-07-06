package hr.fer.akmaksimir.model.scoresystem;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import hr.fer.akmaksimir.model.Result;
import hr.fer.akmaksimir.model.ScoringSystem;
import hr.fer.akmaksimir.model.enumerations.AgeCategories;
import hr.fer.akmaksimir.model.enumerations.Discipline;
import hr.fer.akmaksimir.model.enumerations.Gender;
import hr.fer.akmaksimir.model.scoresystem.structures.Pair;
import hr.fer.akmaksimir.model.scoresystem.structures.ResultInformation;

public class ScoringSystem2017 implements ScoringSystem {

    private Path mainPath;
    private String MAIN_PATH = "2017/iaaf";
    private String EXTENSION = ".txt";

    private static Map<ResultInformation, List<Pair>> resultsToPoints = new HashMap<>();
    
    public ScoringSystem2017() {
        ClassLoader classLoader = getClass().getClassLoader();
        mainPath = Paths.get(classLoader.getResource(MAIN_PATH).getPath());
    }

    
    @Override
    public void init() {
        for(Discipline discipline : Discipline.values()) {
            for(Gender gender : Gender.values()) {
                for(AgeCategories ageCategories : AgeCategories.values()) {
                    
                    String disciplineName = discipline.getName();
                    String genderName = gender.getName();
                    String ageName = ageCategories.getName();
                    
                    List<Pair> pairs = new ArrayList<>();
                    
                    Path scoringPath = Paths.get(mainPath.toString(), disciplineName + "/" + genderName + ageName + EXTENSION);
                    
                    try {
                        List<String> lines = Files.readAllLines(scoringPath);
                        for(String line : lines) {
                            String[] sep = line.split(" ");
                            if(sep.length % 2 != 0) throw new RuntimeException("Wrong file structure " + scoringPath.toString());
                            for(int i=0;i<sep.length;i+=2) {
                                double value = Double.parseDouble(sep[i]);
                                long points = Long.parseLong(sep[i+1]);
                                pairs.add(new Pair(value, points));
                            }
                        }
                    } catch (IOException e) {
                        //e.printStackTrace();
                    }
                    Collections.sort(pairs);
                    resultsToPoints.put(new ResultInformation(ageCategories, gender, discipline), pairs);
                    
                }
            }
        }
        
    }
    
    @Override
    public long getPoints(Result result) {

        ResultInformation resultInformation = new ResultInformation(result);
        List<Pair> points = resultsToPoints.get(resultInformation);
        
        for(Pair pair : points) {
            if(pair.getResult() <= result.getResult()) {
                return pair.getPoints(); 
            }
        }
        
        return 0;
    }

    public static void main(String[] args) {
        new ScoringSystem2017().init();
        
    }

    

}
