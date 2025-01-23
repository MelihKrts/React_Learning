# State
<p style="text-align: justify">State (Durum) bileşen hakkında veri veya bilgi içermek için kullanılan yerleşik React nesnesidir. Değişiklik ilgili bileşenin davranışını ve nasıl oluşacağını belirler.</p>

````js
class Greetings extends React.Component{
    state = {
        name:"World"
    }
    
    updateName(){
        this.setState({name:"Simplilearn"})
    }
    
    render(){
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}
````
- Kullanıcı eylemi veya ağ değişikliğine göre durum değişebilir
- Durum değiştiğinde React bileşeni tekrar işler
- this.setState() durum nesnesinin değerini değiştirmek için kullanılır.

# Kaynakça
- [ReactJS Durumu: SetState, Props ve Durum Açıklaması
  ](https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state)
- [TypeScript React useState Hook](https://www.robinwieruch.de/typescript-react-usestate/)