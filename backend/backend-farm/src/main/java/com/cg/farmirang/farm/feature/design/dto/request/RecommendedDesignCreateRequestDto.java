package com.cg.farmirang.farm.feature.design.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Builder
public class RecommendedDesignCreateRequestDto {
    private Integer cropId;
    private Integer quantity;
}
