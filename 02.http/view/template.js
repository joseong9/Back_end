module.exports = {
    HOME_CONTENTS:
        `웹 개발(web development)은 인터넷(월드 와이드 웹)이나 인트라넷(사설망)을 위한 웹사이트를 개발하는 일을 가리킨다. 
        웹 개발은 가장 단순한 단일 정적 문서의 플레인 텍스트에서부터 가장 복잡한 웹 기반 인터넷 애플리케이션, 전자 비즈니스,  소셜 네트워크 서비스에 이르기까지 개발 범위가 다양하다. 
        일반적으로 웹 개발이라 부를 때는 웹 프로그래밍뿐만 아니라 더 포괄적인 작업인 웹 디자인, 웹 콘텐츠 개발, 클라이언트 사이드/서버 사이드 스크립트 작업, 웹 서버 및 네트워크 보안 구성, 전자 상업 개발을 아우른다.
        `,
    listGen:    function(files) {
        let list = '';
        for (let file of files) {
            const title = file.substring(0, file.length-4);     // .txt를 제외한 나머지
            list += `<li><h3><a href="/?id=${title}">${title}</a></h3></li>`;
        }
        return list;
    },
    buttonGen:  function(title) {
        if (title === undefined) {      // 홈 화면, 생성만 가능
            return `
                <button onclick="location.href='/create'">생성</button>
                <button disabled="disabled">수정</button>
                <button disabled="disabled">삭제</button>
            `;
        } else {                        // 조회 화면, 생성/수정/삭제 가능
            return `
                <button onclick="location.href='/create'">생성</button>
                <button onclick="location.href='/update?id=${title}'">수정</button>
                <button onclick="location.href='/delete?id=${title}'">삭제</button>
            `;
        }
    },
    createForm: function() {
        return `
            <form action="/create" method="post">
                <table>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" name="title"></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea name="content" cols="60" rows="5"></textarea></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;"><input type="submit" value="생성"></td>
                    </tr>
                </table>
            </form>        
        `;
    },
    updateForm: function(title, content) {
        return `
            <form action="/update" method="post">
                <input type="hidden" name="original" value="${title}">
                <table>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" name="title" value="${title}"></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea name="content" cols="60" rows="5">${content}</textarea></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;"><input type="submit" value="수정"></td>
                    </tr>
                </table>
            </form>        
        `;
    },
    deleteForm: function(title) {
        return `
            ${title} 글을 삭제하시겠습니까?<br><br>
            <button onclick="location.href='/deleteConfirm?id=${title}'">삭제</button>
            <button onclick="location.href='/?di=${title}'">취소</button>       
        `;
    },
}