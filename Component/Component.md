<h1 align="center">React Learning - Component</h1>

![Social Media Preview Image](../image/component.png)

# İçindekiler
- [Component](#component)
- [Class Component](#class-component)
- [İç İçe Bileşen Kullanımı](#iç-içe-bileşen-kullanımı)
- [Dipnot](#dipnot)
- [Bir Bileşenin Yaşam Döngüsü](#bir-bileşenin-yaşam-döngüsü)
  - [Initial Phase - İlk Aşama](#initial-phase)
  - [Mounting Phase - Montaj Aşama](#mounting-phase)
  - [Updating Phase - Güncelleme Aşaması](#updating-phase),
  - [Unmounting Phase - Kaldırma Aşaması](#unmounting-phase)
- [Kaynakça](#kaynakça)

# Component
<p align="justify">React uygulamaları bileşenlerden oluşur. Bir bileşen, kendi mantığı ve görünümü olan bir UI (kullanıcı arayüzü) parçasıdır. React bileşenleri JavaScript Fonksiyonlarıdır. </p>

````jsx
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
````

<p align="justify">React ile oluşturulmuş buton bileşeni</p>


# Class Component
<p align="justify">Sınıf Bileşenleri, ES6 (EcmaScript) sınıflarıdır. Karmaşık kullanıcı arayüzü mantığı için durum yönetimi ve yaşam döngüsü yöntemlerine izin verirler. Sınıf Bileşeni kullanımı pek tercih edilmeyip Function (Fonksiyon) Bileşen kullanılması önerilmektedir.</p>

````jsx
class MyButton extends React.Component {
    render() {
        return <button>I'm a button</button>
    }
}
````

<p align="justify">Class Component ile oluşturulmuş bileşen bunu çalıştırmak için ise:</p>

````jsx
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MyButton/>)
````
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

<p align="justify"><code style="color: #404756">MyButton</code> adlı bileşen farklı bir bileşen içinde kullanılmış. </p>

<br>

````jsx
class App extends React.Component {
  render() {
    return (
            <div>
              <h1>Welcome to my app</h1>
              <MyButton />
            </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
````

# Dipnot
<blockquote>
<h4>ℹ️ Bilgi</h4>
<p style="text-align: justify">Bir bileşen başka bir bileşenin içinde kullanılabilir</p>
</blockquote>
<br>

<blockquote>
<h4>⚠️ Uyarı </h4>
<p align="justify">Bileşen adlandırırken ilk harfi daima büyük harfle başlamalıdır. React küçük harfle başlayan bileşenlere DOM (Document Object Model) etiketi gibi davranır.</p>
</blockquote>

<p style="text-align: justify">Bu konu detaylı olup bölüm bölüm anlatılacaktır.</p>

# Bir Bileşenin Yaşam Döngüsü
<p align="justify">React'te her bileşenin yaşam döngüsü vardır. Bir bileşenin yaşam döngüsü 4 aşamadan oluşur.</p>

- Initial Phase (İlk Aşama)
- Mounting Phase (Montaj Aşama)
- Updating Phase (Güncelleme Aşaması)
- Unmounting Phase (Kaldırma Aşaması)

## Initial Phase
<p align="justify">Bir React bileşeninin yaşam döngüsünün başlangıç aşamasıdır. Bu aşama yalnızca bir kez gerçekleşir.</p>

## Mounting Phase
<p align="justify">Bu aşamada bir bileşenin örneği oluşturulur ve DOM'a eklenir. Aşağıdaki yöntemler bu aşamada devreye girer</p>

## Updating Phase
<p align="justify">Bu aşamada props veya state değeri değiştiği aşamadır. Bileşen yeni değer alarak güncellenir.</p>

## Unmounting Phase
<p align="justify">Yaşam döngüsünde son aşamadır. Bileşen yok edildiğinde ve DOM yapısından kaldırılır.</p>


# Kaynakça
- [React.dev Document](https://react.dev/learn)
- [JSX in Depth](https://legacy.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)
- [React Class Components
  ](https://www.geeksforgeeks.org/reactjs-class-components/)
- [React Component Lifecycle](https://www.javatpoint.com/react-component-life-cycle)
- [React Lifecycle
  ](https://www.geeksforgeeks.org/reactjs-lifecycle-components/)
- [React Lifecycle Methods- How and When to use them
  ](https://designtechworld.medium.com/react-lifecycle-methods-how-and-when-to-use-them-d0f4522a7cba)