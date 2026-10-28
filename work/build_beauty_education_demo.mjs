import fs from 'node:fs';
import path from 'node:path';

const output = path.resolve(process.argv[2] || 'outputs/beauty_reels_10_plans_education_demo_2026-10-26.html');
const imagePath = path.join(path.dirname(output), 'assets', 'beauty_reels_storyboard_sheet_2026-10-26.png');
const imageData = fs.readFileSync(imagePath).toString('base64');
const ideas = [
  {
    id:1, storyboardRow:1, storyboardTitle:'사진 촬영 조건 맞추기', kind:'교육형', topic:'얼굴 촬영·비교', title:'턱선 사진을 비교할 때 먼저 맞출 촬영 조건', goal:'저장·전문성', viewer:'사진마다 얼굴선이 달라 보여 관리 전후를 어떻게 봐야 할지 궁금한 사람', reference:'https://www.instagram.com/reel/Db2sfc3onfd/', referenceName:'@amazingvictoria_gn · 얼굴·목 고민 캡션', observed:'기존 공개 캡션 기록에서 얼굴 고민과 목·어깨 점검을 함께 다루는 주제를 확인했다. 실제 영상 컷과 전후 비교 방식은 확인하지 못했다.', originality:'변화 결과를 주장하지 않고 카메라 높이·거리·표정이라는 촬영 변수를 직접 맞춰 보는 교육형으로 새로 구성한다.', thumbnail:'사진 비교 전, 이 3개부터', hook:'“같은 얼굴인데 사진이 다르게 보인다면 촬영 조건부터 맞춰요.”', duration:'27초', props:'스마트폰, 삼각대, 바닥 표시 테이프', difficulty:'쉬움', cta:'저장해 두고 촬영할 때 확인', safety:'전후 효과를 증명하는 자료로 오해시키지 않는다. 고객 사진은 별도 동의가 있을 때만 쓴다.',
    instagram:'얼굴 사진은 카메라 높이·거리·표정이 달라지면 비교가 어려워집니다. 촬영 전 세 조건부터 맞춰 보세요. 이 영상은 촬영 방법 안내이며 관리 효과를 입증하지 않습니다. #에스테틱 #피부관리상담 #촬영팁',
    shortsTitle:'턱선 사진 비교 전 맞춰야 할 촬영 조건 3가지',
    shortsDescription:'카메라 높이, 거리, 표정을 맞춰 사진 비교 조건을 일정하게 만드는 방법입니다. 전후 효과를 보장하거나 입증하는 콘텐츠가 아닙니다.',
    scenes:[
      ['0–3초','정면 고정샷. 스마트폰 화면에 서로 다른 높이의 프레임 두 개를 빠르게 보여준다.','“같은 얼굴인데 사진이 다르게 보인다면 촬영 조건부터 맞춰요.”','사진 비교 전 3가지','두 화면을 좌우로 붙이는 비교 컷'],
      ['3–9초','삼각대 높이를 눈높이에 맞추고 렌즈 위치에 작은 스티커를 붙인다.','“첫째, 카메라 높이는 눈높이로 고정.”','① 카메라 높이','높이가 바뀌는 장면을 짧게 비교'],
      ['9–16초','바닥 테이프 표시 위에 촬영자 발 위치를 놓는다.','“둘째, 촬영 거리도 바닥 표시로 맞춰요.”','② 촬영 거리','테이프 마크에 맞춰 점프 컷'],
      ['16–27초','정면에서 표정과 조명을 고정한 뒤 체크리스트를 보여준다.','“셋째, 표정과 조명도 같게. 이 조건이 달라지면 변화처럼 보일 수 있어요.”','③ 표정·조명 / 저장','마지막 2초 세 항목을 한 화면에 정리']
    ],
    priorityDetail:{prep:'스마트폰·삼각대·바닥 테이프. 인물은 원장 본인으로 촬영하고 같은 장소의 조명을 고정합니다.',order:'1) 첫 화면 좌우 비교 2) 렌즈 높이 표시 3) 바닥 거리 표시 4) 표정·조명 고정 후 체크리스트 5) 저장 CTA. 고객 전후 사진은 사용하지 않습니다.'}
  },
  {
    id:2, kind:'교육형', topic:'세안 루틴', title:'세안 뒤 당김을 설명할 때 적어둘 정보', goal:'저장·상담 준비', viewer:'세안 뒤 불편한 느낌이 있지만 상담 때 무엇을 설명할지 막막한 사람', reference:'https://www.instagram.com/reel/DeyujVnBRCG/', referenceName:'사용자 지정 최근 레퍼런스', observed:'이 레퍼런스의 현재 영상 장면·캡션은 이번 조사에서 재확인되지 않았다. 주제 근거가 아니라 구조 참고 링크로만 둔다.', originality:'제품 추천이나 피부 진단 대신 상담에 가져갈 관찰 기록을 설명하는 새 교육 콘텐츠다.', thumbnail:'상담 전에 이 3가지만 메모', hook:'“세안 뒤 당김, 제품 이름보다 이 정보가 먼저예요.”', duration:'25초', props:'메모 카드 3장, 본인이 쓰는 세안제(선택)', difficulty:'쉬움', cta:'메모 항목 저장', safety:'피부 질환이나 원인을 영상으로 진단하지 않는다. 증상이 지속되거나 심하면 의료진 상담을 권한다.',
    instagram:'세안 뒤 불편한 느낌이 반복된다면 시작 시점, 최근 바꾼 제품, 사용 빈도를 메모해 상담 때 설명해 보세요. 특정 제품이 원인이라고 단정하는 내용은 아닙니다. #피부상담 #세안루틴 #에스테틱',
    shortsTitle:'세안 후 당김 상담 전에 메모할 3가지',
    shortsDescription:'불편이 시작된 때, 최근 바꾼 제품, 사용 빈도를 정리해 상담에 활용하는 방법입니다.',
    scenes:[
      ['0–3초','메모 카드에 제품명 대신 물음표를 크게 적는다.','“세안 뒤 당김, 제품 이름보다 이 정보가 먼저예요.”','원인을 단정하지 않는 기록법','메모 카드가 렌즈 가까이 들어오며 시작'],
      ['3–9초','카드 1에 시작 날짜 대신 아침·저녁 구분을 적는다.','“언제 주로 느끼는지 적고,”','① 느끼는 시점','아침/저녁 카드 전환'],
      ['9–16초','최근 바꾼 제품 칸과 사용 빈도 칸을 차례로 가리킨다.','“최근 바꾼 제품과 사용 빈도를 적어요.”','② 최근 변경 ③ 빈도','항목별 체크 표시'],
      ['16–25초','카드 세 장을 한 프레임에 놓고 원장 정면.','“이 기록은 진단이 아니라 상담을 구체적으로 시작하는 데 쓰세요.”','기록은 상담 참고 / 저장','세 항목을 정지 화면으로 2초 노출']
    ]
  },
  {
    id:3, kind:'교육형', topic:'관리 압 소통', title:'“세게 해주세요” 대신 압을 정확히 말하는 법', goal:'저장·안전한 소통', viewer:'관리 강도를 표현하기 어렵거나 아프면 참아야 하는지 걱정하는 사람', reference:'https://www.instagram.com/reel/DdkuGTTTkwI/', referenceName:'@spahara_academy · 관리 기본기 교육', observed:'기존 공개 기록에서 수직 압과 체중 이동을 설명하는 교육 주제를 확인했다. 교육 계정의 모집 CTA와 실제 장면은 확인 범위에서 구분한다.', originality:'기술 설명을 고객이 바로 쓸 수 있는 피드백 문장으로 바꾸고, 세게 받을수록 좋다는 오해를 유도하지 않는다.', thumbnail:'압은 이렇게 말해요', hook:'“‘세게요’보다 이 말이 관리 중엔 더 정확해요.”', duration:'24초', props:'1·2·3 숫자 카드, 손바닥 모형', difficulty:'쉬움', cta:'표현 예시 저장', safety:'통증을 참으면 효과가 커진다는 주장을 하지 않는다.',
    instagram:'관리 중 압이 불편하면 “한 단계 낮춰주세요”, “이 부위는 피해주세요”처럼 바로 알려주세요. 세기는 목표가 아니라 서로 확인할 선호입니다. #수기관리 #관리상담 #에스테틱',
    shortsTitle:'마사지 압이 불편할 때 이렇게 말하세요',
    shortsDescription:'“한 단계 낮춰주세요” 또는 “이 부위는 피해주세요”처럼 구체적으로 말하는 예시입니다.',
    scenes:[
      ['0–3초','세기 숫자 카드 1·2·3을 나란히 놓는다.','“‘세게요’보다 이 말이 관리 중엔 더 정확해요.”','압 표현 예시','3번 카드에서 1번으로 빠르게 포커스 이동'],
      ['3–9초','카드 1을 들고 원장 정면.','“가벼운 쪽을 원하면 ‘한 단계 낮춰주세요.’”','① 한 단계 낮춰주세요','문장만 화면 중앙 자막'],
      ['9–16초','카드 2를 들고 손으로 특정 부위를 가리킨다.','“불편한 부위는 ‘여기는 피해주세요.’”','② 이 부위는 피해주세요','손짓과 자막을 동시 전환'],
      ['16–24초','손을 멈추는 동작 후 정면.','“불편하면 참지 말고 바로 알려주세요.”','③ 바로 말하기 / 저장','마지막 2초 세 문장을 한 번 더 표시']
    ]
  },
  {
    id:4, kind:'교육형', topic:'두피 상담', title:'헤드스파 전 확인할 것과 진단이 필요한 것', goal:'전문성·상담 신뢰', viewer:'두피 관리가 처음이거나 관리 전에 상태를 먼저 설명하고 싶은 사람', reference:'https://www.instagram.com/spahara_academy/reels/', referenceName:'@spahara_academy 공개 릴스 목록', observed:'계정의 교육형 관리 콘텐츠는 이전 공개 조사에서 확인했다. 이번 주 최신 목록과 두피 관련 개별 영상은 재확인하지 못했다.', originality:'샵에서 묻는 생활·선호 질문과 의료 진단을 화면의 두 칸으로 구분한다.', thumbnail:'헤드스파 상담 vs 진단', hook:'“헤드스파 상담은 두피 진단과 같은 말이 아닙니다.”', duration:'30초', props:'상담 카드, 두피 모형 또는 거울, 두 칸 보드', difficulty:'쉬움', cta:'질문 카드 저장', safety:'두피 상태를 진단하거나 질환·탈모를 관리로 치료한다고 말하지 않는다.',
    instagram:'샵 상담은 불편이 언제부터였는지, 최근 바꾼 제품이 있는지, 어떤 접촉이 편한지 확인하는 과정입니다. 진단이 필요하거나 증상이 심하면 의료진 상담을 먼저 고려해 주세요. #두피관리 #헤드스파 #상담안내',
    shortsTitle:'헤드스파 상담과 두피 진단은 다릅니다',
    shortsDescription:'샵에서 확인하는 사용 이력과 관리 선호, 의료진에게 맡겨야 할 진단을 구분합니다.',
    scenes:[
      ['0–3초','보드 왼쪽에 상담, 오른쪽에 진단이라고 적은 두 칸을 한 번에 보여준다.','“헤드스파 상담은 두피 진단과 같은 말이 아닙니다.”','상담 ≠ 진단','두 칸 사이에 선을 그으며 시작'],
      ['3–10초','상담 칸의 최근 제품·불편 시점 카드를 가리킨다.','“샵에서는 사용 제품과 불편한 시점, 관리 선호를 물어요.”','샵에서 확인: 사용 이력·선호','세 카드가 순서대로 나타남'],
      ['10–20초','진단 칸은 비워두고 두피 모형을 내려놓는다.','“이 정보만으로 원인이나 질환을 판단하지 않습니다.”','샵 상담은 진단이 아닙니다','진단 칸에 금지 표시 대신 설명 문구를 넣음'],
      ['20–30초','원장 정면, 안전 문구를 읽을 수 있게 유지한다.','“증상이 심하거나 오래가면 의료진에게 먼저 확인하세요.”','심하거나 오래가는 증상은 의료 상담','마지막 3초 질문 카드 저장 안내']
    ]
  },
  {
    id:5, kind:'교육형', topic:'촬영 동의·기록', title:'관리 전후 사진을 찍기 전에 확인할 세 가지', goal:'신뢰·저장', viewer:'관리 기록 사진의 사용 범위와 비교 조건이 궁금한 고객', reference:'https://www.instagram.com/reel/DcBCLdOolhR/', referenceName:'@amazingvictoria_gn · 얼굴 고민 체크 캡션', observed:'이전 공개 캡션 기록에서 얼굴 고민을 체크하고 상담으로 연결하는 구조를 확인했다. 사진 촬영·동의 장면이 실제 영상에 있었다고 보지는 않는다.', originality:'결과 홍보 대신 촬영 동의·사용 목적·비교 조건을 고객 관점에서 설명하는 교육 콘텐츠다.', thumbnail:'사진 촬영 전 꼭 확인', hook:'“관리 사진, 찍기 전에 이 세 가지를 확인하세요.”', duration:'28초', props:'촬영 동의서 빈 양식, 휴대전화, 촬영 표시 카드', difficulty:'쉬움', cta:'촬영 전 확인사항 저장', safety:'실제 고객 얼굴·개인 정보·동의서를 촬영하지 않는다. 동의는 별도로 명확하게 받는다.',
    instagram:'관리 사진을 찍는다면 촬영 목적과 게시 여부, 사용 범위를 각각 확인하세요. 촬영에 동의하지 않아도 상담과 관리는 진행되어야 합니다. 실제 고객 자료는 별도 동의와 권한 없이 사용하지 않습니다. #에스테틱 #촬영동의 #고객신뢰',
    shortsTitle:'에스테틱 관리 사진 촬영 전 확인할 3가지',
    shortsDescription:'촬영 목적, 게시 여부, 사용 범위를 나눠 확인하는 고객 동의 안내입니다.',
    scenes:[
      ['0–3초','빈 동의서와 휴대전화를 테이블 위에 놓고 렌즈를 향해 손바닥을 보인다.','“관리 사진, 찍기 전에 이 세 가지를 확인하세요.”','촬영 전에 먼저 확인','서류를 덮은 상태로 시작'],
      ['3–10초','빈 양식의 목적 칸만 보여준다.','“첫째, 왜 찍는지.”','① 촬영 목적','이름·연락처 칸은 프레임 밖'],
      ['10–18초','게시 여부 카드 두 장을 나란히 둔다.','“둘째, 기록용인지 게시용인지.”','② 게시 여부','두 카드 중 하나에만 초점을 맞춤'],
      ['18–28초','사용 범위 카드를 보여주고 휴대전화 카메라를 내려놓는다.','“셋째, 어디에 얼마나 쓰는지. 동의하지 않으셔도 괜찮습니다.”','③ 사용 범위 · 거절 가능','카메라를 내려놓으며 마무리']
    ]
  },
  {
    id:6, storyboardRow:0, storyboardTitle:'목·어깨 압 확인', kind:'시연형', topic:'목·어깨 압 확인', title:'목·어깨 관리 압을 맞추는 실제 순서', goal:'시청 유지·상담 신뢰', viewer:'수기 관리가 아플까 봐 걱정되거나 압 조절 과정을 보고 싶은 사람', reference:'https://www.instagram.com/reel/Dcz9y0gzsh_/', referenceName:'@spahara_academy · 목·어깨 근육 위치 교육', observed:'기존 보고서에서 목·어깨 근육 위치를 설명하는 캡션 주제를 확인했다. 실제 시술 컷·압·효과는 확인하지 못했다.', originality:'근육 설명을 복제하지 않고, 샵에서 압을 확인하는 안전한 서비스 절차를 모형으로 새로 보여준다.', thumbnail:'강도보다 먼저 확인하는 순서', hook:'“손을 대기 전에, 압부터 맞춥니다.”', duration:'29초', props:'상체 모형 또는 본인 팔, 손 소독제, 압 카드', difficulty:'쉬움', cta:'상담 때 원하는 압 말하기', safety:'목 앞쪽이나 통증 부위를 강하게 누르는 장면을 만들지 않는다. 효과를 보장하지 않는다.',
    instagram:'수기 관리는 시작 전에 피할 부위와 편한 압을 확인하고, 진행 중에도 조절할 수 있습니다. 아프면 바로 멈춰 달라고 말씀해 주세요. #목어깨관리 #수기관리 #압조절',
    shortsTitle:'목·어깨 관리 압 확인, 이렇게 진행합니다',
    shortsDescription:'접촉 전 질문, 가벼운 시작, 진행 중 확인의 순서를 모형으로 보여드립니다.',
    scenes:[
      ['0–3초','상체 모형 위에 손을 대기 직전 멈춘 클로즈업.','“손을 대기 전에, 압부터 맞춥니다.”','먼저 묻고 시작','손끝이 닿기 전 프리즈 프레임'],
      ['3–9초','원장 정면에서 압 카드와 피할 부위 카드를 보여준다.','“피할 곳과 편한 압을 먼저 여쭤봐요.”','① 범위·선호 확인','질문 카드 탑뷰로 전환'],
      ['9–18초','상체 모형에 손바닥 전체를 가볍게 댄다.','“넓고 가볍게 시작하고, 불편한 곳은 피합니다.”','② 가볍게 접촉','실제 고객 없이 동일 구도로 촬영'],
      ['18–29초','손을 멈추고 엄지 신호를 기다리는 연출 후 정면.','“진행 중에도 편한지 확인하고 필요하면 바로 조절해요.”','③ 확인·조절 / 아프면 말하기','질문 자막을 2초 두고 CTA']
    ],
    priorityDetail:{prep:'상체 모형 또는 원장 본인 팔, 깨끗한 타월, 압 선호 카드. 고객이 아닌 모형으로 촬영하면 동의·개인정보 이슈 없이 재현할 수 있습니다.',order:'1) 닿기 전 멈춤 2) 피할 부위와 압 질문 3) 넓고 가볍게 접촉 4) 중간 확인 5) 멈춤/조절. 같은 탑뷰와 측면 클로즈업을 번갈아 찍습니다.'}
  },
  {
    id:7, kind:'시연형', topic:'발 관리', title:'발 모형으로 보여주는 첫 접촉과 압 확인', goal:'시청 유지·저장', viewer:'발 관리는 아플 것 같아 망설이거나 처음 받는 사람', reference:'https://www.instagram.com/reel/DdJG7PHTAJo/', referenceName:'@spahara_academy · 발 관리 압과 손 위치', observed:'기존 공개 기록에서 발바닥 압과 손 위치를 설명하는 교육 주제를 확인했다. 원본의 실제 동작·압 세기와 성과 원인은 확인하지 못했다.', originality:'특정 압점이나 효과를 주장하지 않고 첫 접촉, 질문, 조절을 모형으로 재구성한다.', thumbnail:'발 관리 시작은 이렇게', hook:'“발 관리 첫 동작, 세게 누르는 장면부터 찍지 마세요.”', duration:'26초', props:'발 모형, 타월, 세 단계 카드', difficulty:'쉬움', cta:'처음 방문 전 저장', safety:'통증·부기·순환 개선을 보장하거나 질환 치료를 암시하지 않는다.',
    instagram:'발 관리는 시작 전에 불편한 부위와 피할 곳, 편한 압을 확인합니다. 모형으로 첫 접촉 과정을 보여드렸어요. #발관리 #수기관리 #첫방문',
    shortsTitle:'발 관리 첫 접촉과 압 확인 과정',
    shortsDescription:'발 모형으로 관리 범위를 설명하고 가볍게 접촉한 뒤 압을 확인하는 순서를 보여드립니다.',
    scenes:[
      ['0–3초','발 모형 옆에 세 단계 카드를 놓고 첫 카드만 뒤집는다.','“발 관리 첫 동작, 세게 누르는 장면부터 찍지 마세요.”','첫 장면은 압 자랑이 아닙니다','카드를 뒤집는 소리로 시작'],
      ['3–9초','모형 옆에서 피할 부위를 가리키는 카드.','“먼저 불편하거나 피하고 싶은 곳을 확인하고,”','① 범위 확인','표시 카드에서 모형으로 팬 이동'],
      ['9–17초','손바닥 넓은 면을 모형에 가볍게 접촉한다.','“첫 접촉은 넓고 가볍게 보여줍니다.”','② 가볍게 시작','탑뷰 고정, 세게 누르지 않음'],
      ['17–26초','손을 멈춘 뒤 편안함을 묻는 자막을 크게 띄운다.','“진행 전후에 압이 편한지 물어보고 조절해요.”','③ 묻고 조절 / 저장','질문 자막을 화면 가득 보여준 뒤 마무리']
    ]
  },
  {
    id:8, storyboardRow:2, storyboardTitle:'헤드스파 온도 확인', kind:'시연형', topic:'헤드스파', title:'헤드스파 물 온도 확인을 화면에 보여주는 법', goal:'신뢰·프로필 방문', viewer:'헤드스파가 처음이라 진행 과정과 물 온도 조절이 궁금한 사람', reference:'https://www.instagram.com/spahara_academy/reels/', referenceName:'@spahara_academy 공개 릴스 목록', observed:'프로필의 교육·관리 분야와 이전 공개 릴스 목록은 참고했지만, 물 온도 확인 장면이나 그 성과는 확인하지 못했다.', originality:'특정 온도 수치나 효능을 말하지 않고, 묻기·멈추기·재확인이라는 서비스 절차를 새로 촬영한다.', thumbnail:'온도는 시작 전·중간에 확인', hook:'“온도 확인은 물을 틀기 전부터 시작해요.”', duration:'28초', props:'빈 샴푸대, 수전, 타월, 온도 숫자 없는 카드', difficulty:'쉬움', cta:'헤드스파 과정 프로필에서 보기', safety:'한 가지 온도가 모두에게 맞는다고 말하지 않는다. 실제 고객이 등장하면 별도 촬영·게시 동의를 확인한다.',
    instagram:'헤드스파는 시작 전과 진행 중에 물 온도가 편한지 확인하고 요청에 따라 멈추거나 조절합니다. 특정 온도가 모두에게 맞는다는 뜻은 아닙니다. #헤드스파 #두피관리 #관리과정',
    shortsTitle:'헤드스파 물 온도는 언제 확인할까?',
    shortsDescription:'빈 샴푸대에서 시작 전 질문, 조절, 진행 중 재확인 순서를 보여드립니다.',
    scenes:[
      ['0–3초','수전 손잡이 앞에서 손이 멈춘 클로즈업.','“온도 확인은 물을 틀기 전부터 시작해요.”','먼저 묻고 시작','손잡이를 돌리기 직전 멈춤'],
      ['3–10초','빈 샴푸대와 의자를 함께 담은 미디엄 샷.','“시작 전에 편한 온도인지 먼저 여쭤봅니다.”','① 시작 전 확인','질문 후 한 박자 기다리는 컷'],
      ['10–18초','수전과 손잡이를 같은 프레임에 두고 조절한다.','“원하시는 쪽으로 조절하고 물을 확인해요.”','② 조절','온도 숫자나 수치를 화면에 표시하지 않음'],
      ['18–28초','물을 잠시 멈춘 뒤 다시 켜고 빈 의자 방향으로 확인 질문.','“진행 중에도 다시 확인합니다. 불편하면 바로 말씀해 주세요.”','③ 중간 재확인 / 과정 보기','수전을 끄며 끝내고 CTA는 2초']
    ],
    priorityDetail:{prep:'빈 샴푸대, 타월, 휴대전화 삼각대. 물 온도 숫자·고객 얼굴 없이 촬영합니다.',order:'1) 손잡이 앞 정지 2) 시작 전 질문 3) 조절 손동작 4) 중간에 잠시 멈춤 5) 재확인. 물소리와 질문 사이의 짧은 정적을 살립니다.'}
  },
  {
    id:9, kind:'시연형', topic:'클렌징', title:'실리콘 모형으로 보여주는 클렌징 준비와 마무리', goal:'시청 유지·저장', viewer:'샵에서 얼굴 관리가 어떻게 진행되는지 알고 싶은 첫 고객', reference:'https://www.instagram.com/reel/DeyujVnBRCG/', referenceName:'사용자 지정 최근 레퍼런스', observed:'레퍼런스의 상세 영상은 현재 재확인되지 않았다. 아래 동작은 원본 장면을 옮기지 않은 신규 시연 제안이다.', originality:'고객 얼굴 대신 실리콘 모형과 샵에서 실제 사용하는 제품으로 절차만 보여준다. 제품 효능은 다루지 않는다.', thumbnail:'클렌징 과정 4컷', hook:'“얼굴 관리 시작 전에, 제품보다 먼저 확인하는 순서.”', duration:'27초', props:'실리콘 얼굴 모형, 실제 샵 제품, 타월, 깨끗한 손', difficulty:'쉬움', cta:'관리 절차 저장', safety:'제품 라벨과 샵의 위생 절차를 따른다. 사용량·효과를 임의로 보편화하지 않는다.',
    instagram:'클렌징은 고객 동의와 제품 확인 후 진행합니다. 오늘은 얼굴 모형으로 준비·설명·진행·마무리 순서만 보여드립니다. 제품별 사용법은 해당 제품 안내를 따릅니다. #클렌징 #피부관리 #에스테틱',
    shortsTitle:'에스테틱 클렌징 시작 전 확인 과정',
    shortsDescription:'실리콘 모형으로 제품 확인, 진행 전 설명, 클렌징, 타월 정리 순서를 보여드립니다.',
    scenes:[
      ['0–3초','실리콘 얼굴 모형과 제품을 분리해 놓은 탑뷰.','“얼굴 관리 시작 전에, 제품보다 먼저 확인하는 순서.”','고객 동의 → 제품 확인 → 시작','제품을 아직 열지 않은 프레임'],
      ['3–9초','제품 라벨을 확인하고 모형 옆에 둔다.','“오늘 사용할 제품과 진행 순서를 먼저 설명합니다.”','① 제품·순서 설명','라벨의 개인 정보 없는 면만 촬영'],
      ['9–17초','모형에 소량을 덜어 실제 샵 방식대로 천천히 펴 바른다.','“동의와 사용 방법을 확인한 다음 시작해요.”','② 동의 후 진행','손 움직임이 보이는 측면 클로즈업'],
      ['17–27초','깨끗한 타월을 사용해 모형을 닦고 도구를 정리한다.','“마무리까지 제품 안내와 위생 절차에 맞춰 진행합니다.”','③ 마무리·정리','타월 접는 동작으로 다음 컷 마무리']
    ],
    priorityDetail:{prep:'실리콘 얼굴 모형, 매장 승인 제품, 타월, 깨끗한 도구. 실제 고객의 얼굴·차트·제품 사용 기록은 촬영하지 않습니다.',order:'1) 제품을 닫힌 상태로 보여주기 2) 라벨·사용 절차 확인 3) 모형에 시연 4) 타월로 마무리 5) 도구 정리. 실제 매장 절차와 제품 안내를 우선합니다.'}
  },
  {
    id:10, kind:'시연형', topic:'도구·위생', title:'관리대 세팅을 시작부터 끝까지 한 번에 보여주기', goal:'신뢰·완주율', viewer:'관리실의 준비 과정과 도구 사용을 궁금해하는 사람', reference:'https://www.instagram.com/reel/Daz9ks1B33I/', referenceName:'사용자 지정 관리 시연 레퍼런스', observed:'이 링크의 최신 공개 수치·상세 장면은 이번 조사에서 재확인하지 못했다. 위생 절차는 레퍼런스의 확인된 성과로 주장하지 않는다.', originality:'관리 장면 대신 시작 전 준비 루틴을 원테이크와 짧은 삽입 컷으로 보여주는 신규 아이디어다.', thumbnail:'고객 맞이 전 관리대 준비', hook:'“다음 고객을 맞기 전에 관리대는 이렇게 준비합니다.”', duration:'25초', props:'매장 표준 준비물, 새 타월, 실제 도구 트레이', difficulty:'보통', cta:'준비 과정 더 보기', safety:'매장의 실제 세척·소독 지침을 따르고, 특정 절차가 법적 기준이라고 임의로 주장하지 않는다.',
    instagram:'다음 고객을 맞기 전 매장의 표준 절차에 따라 관리대를 준비합니다. 사용 도구와 소모품은 실제 운영 기준에 맞춰 보여드립니다. #에스테틱 #관리실 #준비과정',
    shortsTitle:'고객 맞이 전 에스테틱 관리대 준비 과정',
    shortsDescription:'매장의 실제 표준 절차를 따라 타월과 도구를 준비하고 정돈하는 과정을 보여드립니다.',
    scenes:[
      ['0–3초','정돈 전 관리대를 와이드 샷으로 보여준다.','“다음 고객을 맞기 전에 관리대는 이렇게 준비합니다.”','고객 맞이 전 25초','정돈 전 상태를 1초 보여주고 타이머 시작'],
      ['3–9초','손 위생 후 새 타월을 펴는 탑뷰.','“먼저 매장 절차에 따라 손과 작업 공간을 준비합니다.”','① 매장 기준대로 준비','손동작을 끊지 않는 빠른 컷'],
      ['9–17초','도구 트레이와 실제 매장 표준 준비물을 정해진 위치에 둔다.','“도구와 소모품은 정해진 방식대로 세팅하고,”','② 도구·소모품 세팅','각 도구 이름을 실제 품목에 맞게 표시'],
      ['17–25초','완성된 관리대를 와이드 샷으로 보여주고 카메라를 멈춘다.','“사용 후 정리와 소독도 매장 기준에 맞춰 진행합니다.”','③ 완료 전 확인','전후 화면은 같은 구도, 과장 효과 없이 마무리']
    ]
  }
];

const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link = (url, label) => '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + ' ↗</a>';
const categories = ['교육형', '시연형'];
const index = ideas.map((x) => '<a class="index-link" href="#idea-' + x.id + '"><b>' + String(x.id).padStart(2,'0') + '</b><span>' + esc(x.title) + '</span><small>' + esc(x.kind) + '</small></a>').join('');
function renderIdea(x) {
  const rows = x.scenes.map((s) => '<tr><th>' + esc(s[0]) + '</th><td>' + esc(s[1]) + '</td><td>' + esc(s[2]) + '</td><td>' + esc(s[3]) + '</td><td>' + esc(s[4]) + '</td></tr>').join('');
  const deep = x.priorityDetail ? '<div class="priority-detail"><b>우선 촬영 지시</b><p><b>준비:</b> ' + esc(x.priorityDetail.prep) + '</p><p><b>순서:</b> ' + esc(x.priorityDetail.order) + '</p></div>' : '';
  const visual = typeof x.storyboardRow === 'number' ? '<figure class="storyboard-visual"><div class="visual-strip">' + [0,1,2,3].map((col) => '<div class="visual-frame" role="img" aria-label="' + esc(x.storyboardTitle + ' 시안 컷 ' + (col + 1)) + '" style="background-position:' + (col * 100 / 3) + '% ' + (x.storyboardRow * 100 / 2) + '%"></div>').join('') + '</div><figcaption><b>' + esc(x.storyboardTitle) + '</b> · 생성 이미지 시안입니다. 실제 고객이나 촬영 결과가 아닙니다.</figcaption></figure>' : '';
  return '<details class="idea" id="idea-' + x.id + '" data-kind="' + esc(x.kind) + '" ' + (x.priorityDetail ? 'open' : '') + '>' +
    '<summary><span class="number">' + String(x.id).padStart(2,'0') + '</span><span class="summary"><small>' + esc(x.kind) + ' · ' + esc(x.topic) + (x.priorityDetail ? ' · 우선 촬영' : '') + '</small><strong>' + esc(x.title) + '</strong></span><span class="plus">＋</span></summary>' +
    '<div class="body"><div class="meta"><div><small>목표</small><b>' + esc(x.goal) + '</b></div><div><small>타깃 고민</small><b>' + esc(x.viewer) + '</b></div><div><small>길이·난이도</small><b>' + esc(x.duration) + ' · ' + esc(x.difficulty) + '</b></div><div><small>준비물</small><b>' + esc(x.props) + '</b></div></div>' +
    '<div class="source-grid"><section class="observed"><small>기존 조사에서 확인한 참고</small><p>' + esc(x.observed) + '</p><p>' + link(x.reference, x.referenceName) + '</p></section><section class="proposal"><small>이번에 새로 제안한 부분</small><p>' + esc(x.originality) + '</p></section></div>' +
    '<div class="hook"><small>썸네일: ' + esc(x.thumbnail) + '</small><strong>' + esc(x.hook) + '</strong><small>훅·대사·촬영은 새 제안입니다. 원본 영상의 확인된 첫 3초를 옮긴 것이 아닙니다.</small></div>' +
    visual + '<h3>컷별 촬영 순서: 한 컷씩 찍고 표를 따라 붙이세요</h3><div class="table-wrap"><table><thead><tr><th>시간</th><th>촬영 위치·손동작</th><th>원장 대사</th><th>화면 자막</th><th>편집 순서·효과</th></tr></thead><tbody>' + rows + '</tbody></table></div>' + deep +
    '<div class="publish"><section><h3>Instagram 캡션</h3><p>' + esc(x.instagram) + '</p></section><section><h3>YouTube Shorts</h3><p><b>제목:</b> ' + esc(x.shortsTitle) + '</p><p><b>설명:</b> ' + esc(x.shortsDescription) + '</p></section></div>' +
    '<div class="end"><p><b>한 가지 주 CTA</b> ' + esc(x.cta) + '</p><p><b>촬영·표현 주의</b> ' + esc(x.safety) + '</p></div></div></details>';
}
const cards = ideas.map(renderIdea).join('');
const css = '*,*:before,*:after{box-sizing:border-box}body{margin:0;background:#f5f3ef;color:#272624;font:16px/1.65 "Malgun Gothic","Apple SD Gothic Neo",Arial,sans-serif}main{max-width:1120px;margin:auto;padding:24px 18px 64px}a{color:#176b67}.hero{background:linear-gradient(120deg,#243f3b,#356c65 65%,#795163);color:#fff;padding:36px;border-radius:22px}.hero small{color:#d8f2e6;font-weight:700}.hero h1{font-size:clamp(30px,4vw,48px);line-height:1.14;margin:8px 0}.hero p{max-width:780px;margin:8px 0}.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.chip{border:1px solid #ffffff70;border-radius:99px;padding:4px 12px;font-size:13px}.notice,.panel,.idea{background:#fff;border:1px solid #e3ddd7;border-radius:16px;margin:16px 0;padding:22px}.notice{border-left:5px solid #c08a45;background:#fff9ed}.panel h2{margin:0 0 10px}.lede{font-size:18px}.recipe,.priority-grid,.meta,.source-grid,.publish{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.recipe{grid-template-columns:repeat(3,minmax(0,1fr))}.recipe article,.priority-grid article,.meta>div,.source-grid section,.publish section{border:1px solid #e8e3df;background:#fcfbfa;border-radius:12px;padding:14px}.recipe article b,.priority-grid b{display:block}.toolbar{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}.toolbar button{border:1px solid #d9d1ca;background:#fff;border-radius:99px;padding:8px 14px;font:inherit;cursor:pointer}.toolbar button.active{background:#285f59;color:#fff}.index{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.index-link{display:flex;align-items:center;gap:10px;border:1px solid #e6dfd9;background:#fff;border-radius:10px;padding:10px 12px;text-decoration:none;color:#262523}.index-link b{color:#a64e68}.index-link small{margin-left:auto;color:#28645d;white-space:nowrap}.idea{padding:0;overflow:hidden;scroll-margin:12px}.idea[hidden]{display:none}.idea summary{list-style:none;display:flex;align-items:center;gap:13px;padding:17px 19px;cursor:pointer}.idea summary::-webkit-details-marker{display:none}.idea[open] summary{border-bottom:1px solid #e8e2dd}.number{display:grid;place-items:center;width:38px;height:38px;background:#f7e8ed;color:#9b465f;border-radius:50%;font-weight:800;flex:none}.summary{display:flex;flex-direction:column}.summary small{color:#23645d}.summary strong{font-size:18px;line-height:1.35}.plus{margin-left:auto;color:#9b465f;font-size:25px}.body{padding:18px 20px 22px}.meta{grid-template-columns:repeat(4,minmax(0,1fr));margin-bottom:12px}.meta small,.source-grid small,.hook small{display:block;color:#68625d;font-size:12px}.meta b{display:block;font-size:14px;line-height:1.5}.source-grid{margin:12px 0}.observed{background:#e9f5f0!important}.proposal{background:#fbedf1!important}.source-grid p{font-size:14px;margin:6px 0}.hook{padding:16px;border:1px solid #e3c9d1;background:#fff8fa;border-radius:12px;margin:14px 0}.hook strong{display:block;font-size:20px;margin:5px 0}.storyboard-visual{margin:16px 0;padding:14px;border:1px solid #e5ddd7;border-radius:12px;background:#fbfaf8}.visual-strip{display:flex;gap:8px;overflow-x:auto;padding-bottom:8px}.visual-frame{flex:0 0 118px;height:236px;border-radius:8px;background-image:var(--story-sheet);background-size:400% 300%;background-repeat:no-repeat;background-color:#eee}.storyboard-visual figcaption{font-size:13px;color:#665f5a;margin-top:7px}.table-wrap{overflow:auto}table{border-collapse:collapse;width:100%;min-width:800px;font-size:13px}th,td{padding:10px;border-bottom:1px solid #e7e1dc;text-align:left;vertical-align:top}thead{background:#f3efeb}th:first-child{min-width:72px}.priority-detail{margin:15px 0;padding:15px;background:#e9f5f0;border-radius:12px}.priority-detail p{margin:6px 0}.publish{margin:12px 0}.publish h3{font-size:16px;margin:0 0 8px}.publish p,.end p{font-size:14px;margin:5px 0}.end{padding:12px 15px;background:#f6f3ef;border-radius:10px}.end p{margin:4px 0}.checklist{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.checklist div{background:#faf8f6;padding:9px 11px;border-radius:8px}.footer{text-align:center;color:#706a64;font-size:13px;margin-top:24px}.small{font-size:13px;color:#6c665f}@media(max-width:760px){main{padding:10px 10px 40px}.hero{padding:26px 21px}.notice,.panel{padding:17px}.recipe,.priority-grid,.meta,.source-grid,.publish,.index,.checklist{grid-template-columns:1fr}.body{padding:14px}.summary strong{font-size:16px}.index-link small{font-size:11px}}@media print{body{background:#fff}main{max-width:none;padding:0}.hero{background:#fff;color:#000;padding:10px;border-radius:0}.hero small{color:#000}.toolbar{display:none}.panel,.idea{break-inside:avoid;border-color:#aaa;margin:8px 0}.body{display:block!important}.table-wrap{overflow:visible}table{min-width:0;font-size:9px}th,td{padding:5px}.index-link{color:#000}.idea[hidden]{display:block!important}}';
const embeddedCss = css.replace('*,*:before', ':root{--story-sheet:url(data:image/png;base64,' + imageData + ')}*,*:before');
const topThree = [ideas[5], ideas[0], ideas[7]].map((x, i) => '<article><small>' + (i + 1) + '순위 · ' + esc(x.kind) + '</small><b><a href="#idea-' + x.id + '">' + String(x.id).padStart(2,'0') + ' · ' + esc(x.title) + '</a></b><p>' + esc(x.priorityDetail.prep) + '</p><p><b>실행:</b> ' + esc(x.priorityDetail.order) + '</p></article>').join('');
const html = '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>뷰티 릴스·쇼츠 교육형·시연형 10편 기획</title><style>' + embeddedCss + '</style></head><body><main>' +
  '<header class="hero"><small>기획 방향 개정 · 2026.10.26 · 교육형 5편 + 시연형 5편</small><h1>보여주고 설명하는<br>뷰티 릴스·쇼츠 10편</h1><p>고객이 실제로 보고 이해할 수 있는 교육과정·관리 시연으로 기획했습니다. 고객 관심형을 별도 유형으로 두지 않고, 필요한 상담 CTA는 교육·시연 안에 한 가지만 넣었습니다.</p><div class="chips"><span class="chip">교육형 5편</span><span class="chip">시연형 5편</span><span class="chip">우선 촬영 3편 표시</span><span class="chip">모바일·인쇄 대응</span></div></header>' +
  '<section class="notice"><b>자료 상태:</b> 새 기획은 촬영 제안입니다. 레퍼런스의 조회수와 캡션은 2026-10-23 기존 보고서의 스냅샷이며, 2026-10-26 최신 공개 수치는 접속 경로 문제로 검증되지 않았습니다. 원본 영상의 실제 첫 3초·편집·성과 원인을 안다고 주장하지 않습니다. 아래 참고 링크는 방향을 살피기 위한 것이며 새 대사와 컷은 독창적으로 작성했습니다.</section>' +
  '<section class="panel"><h2>이번 개정에서 달라진 기준</h2><p class="lede">이전 기획의 상담·DM 안내형 몇 편을 실제로 보여주고 설명하는 콘텐츠로 바꿨습니다.</p><div class="recipe"><article><small>교육형 5</small><b>시청자가 가져갈 정보 한 가지</b><p>촬영 조건, 피부 기록, 압 표현, 두피 상담 범위, 촬영 동의를 다룹니다.</p></article><article><small>시연형 5</small><b>손이나 도구가 하는 일</b><p>목·어깨, 발, 헤드스파, 클렌징, 관리대 준비를 실제 순서로 보여줍니다.</p></article><article><small>공통 기준</small><b>한 영상에 한 주 CTA</b><p>저장·상담·프로필 확인 중 한 가지만 사용하고, 효과 보장과 원인 단정은 피합니다.</p></article></div></section>' +
  '<section class="panel"><h2>우선 촬영할 3편</h2><div class="priority-grid">' + topThree + '</div></section>' +
  '<section class="panel"><h2>촬영 전 체크</h2><div class="checklist"><div>□ 세로 9:16, 첫 화면에 핵심 행동이나 질문 배치</div><div>□ 원장 1명·스마트폰·모형/도구로 촬영</div><div>□ 장면당 자막은 짧고 행동과 일치하게</div><div>□ 고객이 나오면 촬영·게시 동의를 별도로 확인</div><div>□ 실제 제품 안내와 매장 절차를 우선</div><div>□ 효과·진단·전후 결과 과장 문구 제거</div></div></section>' +
  '<section class="panel easy-guide"><h2>처음 찍어도 따라 하는 순서</h2><ol><li><b>휴대전화 세팅:</b> 세로 9:16, 렌즈를 닦고 기본 1배 줌으로 고정합니다. 말하는 얼굴은 눈높이, 손동작은 손과 도구가 함께 보이도록 위에서 촬영합니다.</li><li><b>컷을 따로 찍기:</b> 표의 시간마다 녹화를 끊습니다. 촬영 버튼을 누른 뒤 1초 멈추고 행동과 대사를 하고, 끝난 뒤에도 1초 멈춘 다음 종료합니다.</li><li><b>대사 읽기:</b> 표의 대사를 한 문장씩 자연스럽게 말합니다. 틀리면 처음부터 다시 찍지 말고 그 컷만 다시 찍습니다. 목소리는 평소 말투로, 빠르지 않게 읽습니다.</li><li><b>자막 붙이기:</b> 화면 자막 칸의 문장을 그대로 씁니다. 한 화면 두 줄 이내, 얼굴·손동작을 가리지 않는 위치에 놓습니다.</li><li><b>편집하기:</b> 컷을 시간 순서대로 붙이고 말 앞뒤의 긴 공백만 자릅니다. 기본은 깔끔한 컷 전환으로 두고, 표에 적힌 강조 지시만 추가합니다.</li><li><b>마지막 확인:</b> 소리 없이 봐도 자막으로 이해되는지, 대사와 화면 행동이 맞는지, CTA가 하나인지 확인합니다.</li></ol><p class="small">첫 영상은 완벽하게 한 번에 찍으려 하지 말고, 컷마다 2회 촬영해 자연스러운 테이크를 고르세요.</p></section>' +
  '<section class="panel"><h2>빠른 목차</h2><div class="index">' + index + '</div></section>' +
  '<div class="toolbar"><button class="active" data-filter="all">전체 10편</button><button data-filter="교육형">교육형 5편</button><button data-filter="시연형">시연형 5편</button><button id="expand">모두 펼치기</button><button id="print">인쇄</button></div>' + cards +
  '<section class="panel"><h2>게시 후 비교표</h2><div class="table-wrap"><table><thead><tr><th>시점</th><th>콘텐츠 지표</th><th>고객 유입</th><th>다음 조정</th></tr></thead><tbody><tr><th>24시간</th><td>조회수·평균 시청 지속·팔로우</td><td>프로필 방문·DM 문의</td><td>첫 장면이 주제를 바로 보여줬는지</td></tr><tr><th>72시간</th><td>조회수·저장·공유·댓글</td><td>문의 내용과 출처</td><td>교육형과 시연형의 저장·완주 차이</td></tr><tr><th>7일</th><td>최종 조회수·저장률</td><td>실제 상담·예약</td><td>다음 촬영 비율과 CTA</td></tr></tbody></table></div><p class="small">자체 계정의 인사이트와 예약 기록으로만 계산합니다. 조회수와 예약 사이의 인과는 별도 기록 없이 단정하지 않습니다.</p></section>' +
  '<footer class="footer">단일 HTML · 외부 글꼴·스크립트·스타일 의존 없음 · 2026-10-26 기획 방향 개정</footer></main><script>' +
  'const cards=[...document.querySelectorAll(".idea")];document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");cards.forEach(c=>c.hidden=b.dataset.filter!=="all"&&c.dataset.kind!==b.dataset.filter)}));document.querySelectorAll(".index-link").forEach(a=>a.addEventListener("click",()=>{cards.forEach(c=>c.hidden=false);const d=document.querySelector(a.getAttribute("href"));if(d)d.open=true}));document.getElementById("expand").addEventListener("click",e=>{const open=cards.some(c=>!c.open);cards.forEach(c=>c.open=open);e.currentTarget.textContent=open?"모두 접기":"모두 펼치기"});document.getElementById("print").addEventListener("click",()=>{cards.forEach(c=>{c.hidden=false;c.open=true});window.print()});window.addEventListener("beforeprint",()=>cards.forEach(c=>{c.hidden=false;c.open=true}));' +
  '</script></body></html>';
fs.mkdirSync(path.dirname(output), {recursive:true});
fs.writeFileSync(output, html, 'utf8');
console.log(JSON.stringify({output, plans:ideas.length, education:ideas.filter(x=>x.kind==='교육형').length, demonstrations:ideas.filter(x=>x.kind==='시연형').length}));


