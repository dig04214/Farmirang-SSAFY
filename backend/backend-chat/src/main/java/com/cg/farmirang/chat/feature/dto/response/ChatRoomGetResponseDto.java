package com.cg.farmirang.chat.feature.dto.response;

import lombok.*;

@Builder @Data
public class ChatRoomGetResponseDto {
    private String chatRoomId;
    private String nickname;
}
