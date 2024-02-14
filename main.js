// Thay đổi nội dung búc thư ở đây
var letterContent = "Happy Valentine Day eiu. Cảm ơn em đã bên a trong năm qua, a đã rất may mắn khi quen được em và yêu em. Ở bên em a cảm thấy mình luôn vui vẻ hạnh phúc. Chúc cho tình yêu chúng mình mãi luôn bền lâu, cùng nhau vượt qua khó khăn. Năm nay valentine vào tết nên mình không có gặp nhau được, cũng chưa có tặng socola được cho em, nhưng a nghĩ những lời này còn ngọt hơn socola. Chúc cho cô gái của a luôn xinh đẹp, vui vẻ, hạnh phúc. Có chuyện gì a làm em buồn thì phải nói a biết chưa. Anh không có giỏi văn vẻ nên a nói ít nhưng tình cảm của a đong đầy.Mãi yêu ebe của a.                        Năng Hà"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})