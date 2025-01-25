# İçindekiler
- [Props](#props)
- [Bileşen](#bileşen)
- [Bileşen Oluşturma](#bileşen-oluşturma)
  - [Function Component](#function-component)
  - [Class Component](#class-component)
- [Kaynakça](#kaynakça)

# Props
<p style="text-align: justify;">
Props, React bileşenlerine geçirilen argümandır.</p>

# Bileşen
<p style="text-align: justify">Bileşenler, kullanıcı arayüzünü ayrıştırarak birbirinden bağımsız ve tekrar kullanılabilen parçalar oluşturmamızı sağlar.</p>

# Bileşen Oluşturma
<blockquote style="text-align: justify">
<h4>ℹ️ <b>Bilgi</b></h4>
<p>React'te iki şekilde bileşen oluşturulabilir. Function component ve Class component. Bu konu daha sonra anlatılacaktır şimdi nasıl yazıldığı gösterilmiştir.</p>
</blockquote>

## Function Component
<p style="text-align: justify">JavaScript fonksiyonu yazarak bileşen oluşturulabilir.</p>

````js
function Welcome (props){
    return(
        <h1>Hello, {props.name}</h1>
    )
}
````

<p style="text-align: justify">Yukarıdaki kodda bir adet props(properties) almış olup geriye React bileşeni döndürecektir. JavaScript fonksiyonu olduğundan fonksiyonel bileşen olarak adlandırılır.</p>

## Class Component

<p style="text-align: justify">Class (sınıf) kullanılarak'da React Bileşeni oluşturulabilir.</p>

````js
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}
````

<p style="text-align: justify">İki bileşen arasında fark yoktur.</p>

# Kaynakça
- [W3Schools](https://www.w3schools.com/react/react_props.asp)

- [Legacy React Docs](https://legacy.reactjs.org/docs/components-and-props.html)