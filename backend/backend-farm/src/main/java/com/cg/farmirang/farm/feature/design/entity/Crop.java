package com.cg.farmirang.farm.feature.design.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Comparator;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@ToString
public class Crop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "crop_id")
    private Integer id;

    private String name;
    private Integer ridgeSpacing;
    private Integer cropSpacing;
    private String companionPlant;
    private String competetivePlant;
    private String sowingTime;
    private String harvestingTime;
    private Boolean isRepeated;
    private Integer height;
    private Double minTemperature;
    private Double maxTemperature;
    private Double minHumidity;
    private Double maxHumidity;
    private Double minFieldHumidity;
    private Double maxFieldHumidity;

    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    @Builder
    public Crop(String name, Integer ridgeSpacing, Integer cropSpacing, String companionPlant, String competetivePlant, String sowingTime, String harvestingTime, Boolean isRepeated, Integer height, Double minTemperature, Double maxTemperature, Double minHumidity, Double maxHumidity, Double minFieldHumidity, Double maxFieldHumidity, Difficulty difficulty) {
        this.name = name;
        this.ridgeSpacing = ridgeSpacing;
        this.cropSpacing = cropSpacing;
        this.companionPlant = companionPlant;
        this.competetivePlant = competetivePlant;
        this.sowingTime = sowingTime;
        this.harvestingTime = harvestingTime;
        this.isRepeated = isRepeated;
        this.height = height;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
        this.minHumidity = minHumidity;
        this.maxHumidity = maxHumidity;
        this.minFieldHumidity = minFieldHumidity;
        this.maxFieldHumidity = maxFieldHumidity;
        this.difficulty = difficulty;
    }
}
