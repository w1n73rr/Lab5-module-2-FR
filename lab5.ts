document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загрузилась");

    function getCurrentDate(): void {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        
        console.log(`Текущее время (через 10 секунд): ${hours}:${minutes}:${seconds}`);
    }

    setTimeout(getCurrentDate, 10000); 
});


function createMessageFunction(message: string) {
    return function () {
        console.log("Сообщение из замыкания: " + message);
    };
}


const helloFunc = createMessageFunction("Привет, мир!");
const byeFunc = createMessageFunction("До свидания!");


helloFunc(); 
byeFunc();   
