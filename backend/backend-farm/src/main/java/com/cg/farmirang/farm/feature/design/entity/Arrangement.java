package com.cg.farmirang.farm.feature.design.entity;

import com.cg.farmirang.farm.feature.design.dto.CropCoordinateAndCropIdDto;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@ToString
@Document(collection="design_arrangement")
@Getter @Setter
public class Arrangement {
    @Id
    private String id;
    private char[][] arrangement;
    private int[][] designArrangement;
    private List<CropCoordinateAndCropIdDto> cropNumberAndNameList;

    @Builder
    public Arrangement(char[][] arrangement) {
        this.arrangement = arrangement;
    }
}
