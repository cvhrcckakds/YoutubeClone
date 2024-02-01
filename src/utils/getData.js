import axios from "axios";
//yapacağımız tüm api isteklerinin başına bu url eklenecek
axios.defaults.baseURL="https://yt-api.p.rapidapi.com"

//https://rapidapi.com/ytjar/api/yt-api homeFeedi seçip code snippetsden elde edilen veriler. Üye değilsen ya da sınırı aştysan test yazan yerden ücretsiz kısma üyelik oluşturabilirsin
const options = {
    params:{geo:"TR", lang: "tr"}, //bu hangi ülkenin videoları gelsin istiyorsak ekliyoruz
    headers: {
        'X-RapidAPI-Key': '9820fea049msh33e7b77b7648e0cp1e5cb4jsna67ef3cf1fce',
        // 'b3a8459b6dmsh64bb6d176f81af1p174ce5jsnf58fa4be6dcf', //429 hatası ile aiden istek hakkı bittiğini gösterir yeni bir hesap açıp api key değişiyor onu buradaki ile değiştir
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }
    };

  //parametre olarak aldığı url'e api isteği atıp elde ettiği sonucu dönd. yardımcı fonks
export const getData = async(path) =>{
    try{
    const response = await axios.get(path, options);
    return response.data; 
    }catch(err) {
        console.log(err)
    }
 
    
}