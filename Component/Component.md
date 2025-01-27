<h1 align="center">React Learning - Component</h1>

![Social Media Preview Image](../image/component.png)

# İçindekiler
- [Component](#component)
- [İç İçe Bileşen Kullanımı](#iç-içe-bileşen-kullanımı)
- [Dipnot](#dipnot)
- [Class Component](#class-component)
- [Kaynakça](#kaynakça)

# Component
<p style="text-align: justify">React uygulamaları bileşenlerden oluşur. Bir bileşen, kendi mantığı ve görünümü olan bir UI (kullanıcı arayüzü) parçasıdır. React bileşenleri JavaScript Fonksiyonlarıdır. </p>

````jsx
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
````

<p style="text-align: justify">React ile oluşturulmuş buton bileşeni</p>

# İç İçe Bileşen Kullanımı

````jsx

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

````

<p style="text-align: justify"><code style="color: #404756">MyButton</code> adlı bileşen farklı bir bileşen içinde kullanılmış. </p>

# Dipnot
<blockquote>
<h4>ℹ️ Bilgi</h4>
<p style="text-align: justify">Bir bileşen başka bir bileşenin içinde kullanılabilir</p>
</blockquote>
<br>

<blockquote>
<h4>⚠️ Uyarı </h4>
<p style="text-align: justify">Bileşen adlandırırken ilk harfi daima büyük harfle başlamalıdır. React küçük harfle başlayan bileşenlere DOM (Document Object Model) etiketi gibi davranır.</p>
</blockquote>

# Class Component
<p style="text-align: justify">Sınıf Bileşenleri, ES6 (EcmaScript) sınıflarıdır. Karmaşık kullanıcı arayüzü mantığı için durum yönetimi ve yaşam döngüsü yöntemlerine izin verirler. Sınıf Bileşeni kullanımı pek tercih edilmeyip Function (Fonksiyon) Bileşen kullanılması önerilmektedir.</p>

````jsx
class MyButton extends React.Component {
    render() {
        return <button>I'm a button</button>
    }
}
````

<p style="text-align: justify">Class Component ile oluşturulmuş bileşen bunu çalıştırmak için ise:</p>

````jsx
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MyButton/>)
````

<p style="text-align: justify">Bu konu detaylı olup bölüm bölüm anlatılacaktır.</p>

# Kaynakça
- [React.dev Document](https://react.dev/learn)
- [JSX in Depth](https://legacy.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)
- [React Class Components
  ](https://www.geeksforgeeks.org/reactjs-class-components/)