package com.cg.farmirang.design.feature.design.repository;

import com.cg.farmirang.design.feature.design.entity.Crop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CropRepository extends JpaRepository<Crop, Integer> {

    // TODO : NoSuchMethodError 뜸;;
//    @Query("SELECT t.id,t.name, " +
//            "CASE WHEN :substring IN (SELECT UNNEST(FUNCTION('string_to_array', t.sowingTime, ',')) AS st) THEN true ELSE false END AS isRecommended, " +
//            "t.ridgeSpacing, t.cropSpacing,t.ridgeSpacing * t.cropSpacing AS area " +
//            "FROM Crop t " +
//            "ORDER BY " +
//            "CASE WHEN :substring IN (SELECT UNNEST(FUNCTION('string_to_array', t.sowingTime, ',')) AS st) THEN 0 ELSE 1 END, " +
//            "t.sowingTime")
//    List<Object[]> findCropInfoAndCropArea(@Param("substring") String startMonth);



}