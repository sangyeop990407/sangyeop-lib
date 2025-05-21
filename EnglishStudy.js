 let currentPage = 0;
    let pageSize = 2; // 한 페이지당 단어 수

    function adjustPageSize(step) {
    pageSize += step;
    document.getElementById("rowNum01").innerText = pageSize;
    document.getElementById("rowNum02").innerText = pageSize;
    
    // 최소 1개 이상 보여야 함
    if (pageSize < 1) pageSize = 1;
    document.getElementById("rowNum01").innerText = pageSize;
    document.getElementById("rowNum02").innerText = pageSize;
    
    renderTable();
    focuse();
}

    const wordArry = [
        ["abandon", "ǝbǽndǝn", "포기하다"],
        ["abandoned", "əbӕndənd", "버림받은"],
        ["ability", "əbíləti", "능력"],
        ["abnormal", "æbnɔ́ːrməl", "비정상적인"],
        ["absolute", "ǽbsəlùːt", "절대적인"],
        ["absorb", "æbzɔ́ːrb", "흡수하다"],
        ["abstract", "ǽbstrӕkt", "추상적인"],
        ["abuse", "əbjúːs", "남용하다"],
        ["academic", "ӕkədémik", "학문의"],
        ["accept", "æksépt", "받아들이다"],
        ["access", "ǽkses", "접근"],
        ["accident", "ǽksidənt", "사고"],
        ["accompany", "əkʌ́mpəni", "동반하다"],
        ["accomplish", "əkɑ́mpliʃ", "성취하다"],
        ["according", "əkɔ́ːrdiŋ", "~에 따르면"],
        ["account", "əkáunt", "계좌 / 설명하다"],
        ["accurate", "ǽkjurət", "정확한"],
        ["accuse", "əkjúːz", "고발하다"],
        ["achieve", "ətʃíːv", "이루다"],
        ["acknowledge", "æknɑ́lidʒ", "인정하다"],
        ["acquire", "əkwáiər", "얻다"],
        ["active", "ǽktiv", "활동적인"],
        ["actual", "ǽktʃuəl", "실제의"],
        ["adapt", "ədǽpt", "적응하다"],
        ["addict", "ǽdikt", "중독자"],
        ["address", "ədrés", "주소 / 연설하다"],
        ["adjust", "ədʒʌ́st", "조정하다"],
        ["admire", "ædmáiər", "존경하다"],
        ["admit", "ædmít", "인정하다"],
        ["adopt", "ədɑ́pt", "입양하다 / 채택하다"],
        ["adult", "ǽdʌlt", "성인"],
        ["advance", "ædvǽns", "진보하다"],
        ["advantage", "ædvǽntidʒ", "이점"],
        ["advice", "ædváis", "충고"],
        ["affect", "əfékt", "영향을 미치다"],
        ["afford", "əfɔ́ːrd", "~할 여유가 있다"],
        ["afraid", "əfréid", "두려워하는"],
        ["agency", "éidʒənsi", "기관"],
        ["agenda", "ədʒéndə", "의제"],
        ["aggressive", "əgréːsiv", "공격적인"],
        ["agree", "əgríː", "동의하다"],
        ["aid", "éid", "도움"],
        ["aim", "éim", "목표"],
        ["airline", "ɛ́ərlàin", "항공사"],
        ["alarm", "əlɑ́ːrm", "경고 / 놀람"],
        ["alcohol", "ǽlkəhɔ̀ːl", "알코올"],
        ["alive", "əláiv", "살아있는"],
        ["allow", "əláu", "허락하다"],
        ["almost", "ɔ́ːlmoust", "거의"],
        ["alone", "əlóun", "혼자의"],
        ["alphabet", "ǽlfəbèt", "알파벳"],
        ["already", "ɔːlrédi", "이미"],
        ["alternative", "ɔːltə́ːrnətiv", "대안"],
        ["amazing", "əméiziŋ", "놀라운"],
        ["ambition", "æmbíʃən", "야망"],
        ["amount", "əmáunt", "양 / 총액"],
        ["amuse", "əmjúːz", "즐겁게 하다"],
        ["analysis", "ənǽləsis", "분석"],
        ["ancestor", "ǽnsestər", "조상"],
        ["ancient", "éinʃənt", "고대의"],
        ["anger", "ǽŋgər", "화"],
        ["angle", "ǽŋgl", "각도"],
        ["announce", "ənáuns", "발표하다"],
        ["annual", "ǽnjuəl", "매년의"],
        ["anxiety", "ӕŋzáiəti", "불안"],
        ["apology", "əpɑ́lədʒi", "사과"],
        ["appear", "əpíər", "나타나다"],
        ["apply", "əplái", "신청하다 / 적용하다"],
        ["appoint", "əpɔ́int", "임명하다"],
        ["approach", "əpróutʃ", "접근하다"],
        ["appropriate", "əpróupriət", "적절한"],
        ["approve", "əprúːv", "승인하다"],
        ["area", "ɛ́əriə", "지역 / 영역"],
        ["argue", "ɑ́ːrgjuː", "논쟁하다"],
        ["arise", "əráiz", "발생하다"],
        ["arrange", "əréindʒ", "정리하다 / 준비하다"],
        ["arrest", "ərést", "체포하다"],
        ["arrive", "əráiv", "도착하다"],
        ["article", "ɑ́ːrtikl", "기사 / 물품"],
        ["artist", "ɑ́ːrtist", "예술가"],
        ["ashamed", "əʃéimd", "부끄러워하는"],
        ["aspect", "ǽspekt", "측면"],
        ["assign", "əsáin", "할당하다"],
        ["assist", "əsíst", "도와주다"],
        ["associate", "əsóuʃièit", "연관짓다"],
        ["assume", "əsjúːm", "추정하다"],
        ["athlete", "ǽθliːt", "운동선수"],
        ["atmosphere", "ǽtməsfìər", "대기 / 분위기"],
        ["attempt", "ətémpt", "시도하다"],
        ["attend", "əténd", "참석하다"],
        ["attract", "ətrǽkt", "끌다"],
        ["authority", "əθɔ́ːrəti", "권위 / 당국"],
        ["available", "əvéiləbl", "이용 가능한"],
        ["average", "ǽvəridʒ", "평균"],
        ["avoid", "əvɔ́id", "피하다"],
        ["award", "əwɔ́ːrd", "상 / 수여하다"],
        ["aware", "əwɛ́ər", "알고 있는"],
        ["awesome", "ɔ́ːsəm", "멋진"],
        ["background", "bǽkgràund", "배경"],
        ["balance", "bǽləns", "균형"],
        ["ban", "bæn", "금지하다"],
        ["bankrupt", "bǽŋkrʌpt", "파산한"]
    ];

    function focuse(){
        document.getElementById("first").focus();
    }

    window.onload = () => {
        renderTable();
        focuse();
    };

    // 엔터로 다음 input 이동
    document.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            let inputs = Array.from(document.querySelectorAll('input[type="text"]'));
            let idx = inputs.indexOf(document.activeElement);
            if(idx !== -1){
                playSoundOnInput(inputs[idx]); // 현재 칸만 검사 + 점수 계산
                if(idx < inputs.length - 1){
                    inputs[idx + 1].focus();
                }
            }
        }
    });

    function playSoundOnInput(inputElement){
        const className = inputElement.className; // ex: word1
        const match = className.match(/word(\d+)/);
        if (!match) return;

        const idx = parseInt(match[1]) - 1; // 단어 index
        const userInput = inputElement.value.trim();
        const correctAnswer = wordArry[idx][0];

        // 정답 여부에 따라 소리 재생
        if(userInput === correctAnswer){
            document.getElementById("correctSound").currentTime = 0;
            document.getElementById("correctSound").play();
        } else {
            document.getElementById("wrongSound").currentTime = 0;
            document.getElementById("wrongSound").play();
        }

        // 전체 단어 입력란 수집해서 점수 계산
        const inputs = document.querySelectorAll(`.${className}`);
        let score = 0;
        inputs.forEach(input => {
            if(input.value.trim() === correctAnswer){
                score += 10;
            }
        });

        const scoreBox = document.getElementById(`score${idx + 1}`);
        if(score === 100){
            scoreBox.value = score + "점 축하합니다!";
        } else {
            scoreBox.value = score + "점";
        }
    }

    function renderTable(){
        const table = document.querySelector('.table1');
        table.innerHTML = `
            <tr>
                <td>번호</td>
                <td colspan="4">단어</td>
                <td colspan="4">발음</td>
                <td colspan="4">뜻</td>
            </tr>
        `;

        const start = currentPage * pageSize;
        const end = Math.min(start + pageSize, wordArry.length);

        for(let i = start; i < end; i++){
            const [word, pron, mean] = wordArry[i];
            const className = `word${i + 1}`;
            const scoreId = `score${i + 1}`;
            table.innerHTML += `
                <tr>
                    <td rowspan="4">${i + 1}</td>
                    <td colspan="4">${word}</td>
                    <td colspan="4">${pron}</td>
                    <td colspan="4">${mean}</td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="${className}" id="${i === 0 ? "first" : ""}"></td>
                    <td colspan="3"><input type="text" class="${className}"></td>
                    <td colspan="3"><input type="text" class="${className}"></td>
                    <td colspan="3"><input type="text" class="${className}"></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="${className}"></td>
                    <td colspan="3"><input type="text" class="${className}"></td>
                    <td colspan="3"><input type="text" class="${className}"></td>
                    <td colspan="3"><input type="text" class="${className}"></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="${className}"></td>
                    <td colspan="3"><input type="text" class="${className}"></td>
                    <td colspan="6"><input type="text" id="${scoreId}" readonly></td>
                </tr>
            `;
        }

        // 페이징 버튼 추가
        table.innerHTML += `
            <tr>
                <td colspan="13" style="text-align:center;">
                    <button onclick="prevPage()" ${currentPage === 0 ? 'disabled' : ''}>이전</button>
                    <span>페이지 ${currentPage + 1} / ${Math.ceil(wordArry.length / pageSize)}</span>
                    <button onclick="nextPage()" ${end >= wordArry.length ? 'disabled' : ''}>다음</button>
                </td>
            </tr>
        `;
    }

    function nextPage(){
        if((currentPage + 1) * pageSize < wordArry.length){
            currentPage++;
            renderTable();
            focuse();
        }
    }

    function prevPage(){
        if(currentPage > 0){
            currentPage--;
            renderTable();
            focuse();
        }
    }