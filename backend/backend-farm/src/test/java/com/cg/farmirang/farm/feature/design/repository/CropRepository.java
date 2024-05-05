package com.cg.farmirang.farm.feature.design.repository;

import com.cg.farmirang.farm.feature.design.entity.Crop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CropRepository extends JpaRepository<Crop, Integer> {
    @Query("SELECT c FROM Crop c WHERE c.id IN :cropIds AND c.height >= 100 ORDER BY c.isRepeated DESC, c.height DESC")
    List<Crop> findByHeightGreaterThanEqualOrderByIsRepeatedDescHeightDesc(@Param("cropIds") List<Integer> cropIds);

    @Query("SELECT c FROM Crop c WHERE c.id IN :cropIds AND c.height < 100 ORDER BY c.isRepeated DESC, c.height DESC")
    List<Crop> findByHeightLessThanOrderByIsRepeatedDescHeightDesc(@Param("cropIds") List<Integer> cropIds);

}
