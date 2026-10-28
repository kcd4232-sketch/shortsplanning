# 뷰티 릴스·쇼츠 촬영 기획

교육을 배우고 싶게 만드는 콘텐츠와 관리를 받아보고 싶게 만드는 콘텐츠를 기획하는 Codex 프로젝트입니다. 각 기획에는 주제·후킹·타깃 근육점·핵심 메시지·CTA 요약, 컷별 대사·자막·편집 지시와 사람 시안 이미지가 들어 있습니다.

## 결과물 보기

| 파일 | 내용 |
|---|---|
| [새 기획 5편 HTML](outputs/beauty_reels_new5_shareable_2026-10-28.html) | 아래팔 두 손 역할, 견갑 주변 위치 교육, 종아리 시연, 손·아래팔 시연, 허벅지 손길 속도 선택. 교육형 2편·시연형 3편 |
| [이전 승인 기획 5편 HTML](outputs/beauty_reels_5_scenarios_shareable_2026-10-28.html) | 종아리 위치 교육, 손목 자세 교육, 발·목어깨·옆구리 관리 시연 |

HTML은 사진을 파일 안에 내장해 한 파일만 다른 기기로 보내도 본문과 사진을 볼 수 있습니다. GitHub에서는 파일을 다운로드한 뒤 기기의 브라우저로 여세요. 레퍼런스 링크를 열 때만 인터넷 연결이 필요합니다.

## 작업 자료

- [V2.3 작업 지침](outputs/beauty_reels_automation_prompt_v2_3.md): 조사 범위, 5편 구성, 이미지와 공유형 HTML 기준
- [Codex 스킬 원본](skills/beauty-reels-planning/SKILL.md): 이 프로젝트의 재사용 작업 지침
- [새 5편 원고 JSON](outputs/beauty_reels_new5_data_2026-10-28.json): `{meta, ideas}` 구조의 편집 원고
- [이전 5편 원고 JSON](outputs/beauty_reels_5_scenarios_recent_data_2026-10-26.json): 이전 승인 원고
- [새 기획의 창작 근거](outputs/beauty_reels_new5_basis_2026-10-28.md): 확인된 레퍼런스 주제와 창작 확장, 해부학 참고 자료
- `outputs/assets/`: 생성 원본 PNG와 HTML 재생성에 사용하는 JPEG
- `work/`: HTML 생성·검증 스크립트

이전 버전 HTML·지침·시안은 작업 기록으로 보존했습니다. 후속 작업은 V2.3과 최신 사용자 지시를 따릅니다. ZIP과 동일 자료를 복제한 작업 묶음 폴더, 브라우저 세션·로그는 Git 추적에서 제외합니다.

## HTML 재생성

Node.js가 설치된 환경에서 프로젝트 루트에서 실행합니다. 별도 npm 패키지는 필요하지 않습니다.

```powershell
node work/build_beauty_5_scenarios.mjs outputs/beauty_reels_new5_shareable_2026-10-28.html outputs/beauty_reels_new5_data_2026-10-28.json
node work/verify_beauty_anatomy_html.mjs outputs/beauty_reels_new5_shareable_2026-10-28.html
```

이전 승인 5편을 재생성하려면 다음 명령을 사용합니다.

```powershell
node work/build_beauty_5_scenarios.mjs outputs/beauty_reels_5_scenarios_shareable_2026-10-28.html
node work/verify_beauty_anatomy_html.mjs outputs/beauty_reels_5_scenarios_shareable_2026-10-28.html
```

검증 스크립트는 5편, 서로 다른 이미지 15장, 이미지 내장 여부와 해부학 설명 섹션을 검사합니다.

## 자료의 확인 범위

레퍼런스 주제의 근거는 2026-10-23 공개 조사 기록입니다. 2026-10-28에 새 원고와 이미지를 작성했다는 사실이 최신 Instagram 게시물·팔로워·조회수를 재확인했다는 뜻은 아닙니다. 새 동작과 모든 대본·컷은 창작 제안이며 실제 원본 장면과 구분해 표시했습니다.

사진은 성인 사람을 묘사한 생성 시안으로 실제 고객이나 관리 결과가 아닙니다. 근육·근막 오버레이는 대략적 위치 개념도이며 실제 자극 깊이·치료 효과의 증거가 아닙니다. 실제 촬영에서는 출연자의 동의와 서비스 제공 범위를 확인합니다. 조사·작업에 Chrome 브라우저를 사용하지 않습니다.
