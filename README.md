# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Mi proyecto

El proyecto que presentaré se trata de un cifrador de contraseñas orientado para el uso principalmente de adultos mayores, por esto tiene un uso simplificado y con una fuente grande y legible para mejorar su experiencia. Dentro de la primera página encuentran las instrucciones de uso de la página y al presionar el botón que dice "Comenzar" se despliega la segunda página que tiene el cifrador.
En la segunda página se encuentran con un recuadro para ingresar el número que será el offset en que se cifrará; abajo de esto dos cajas, la primera recibe texto cifrado o a cifrar y la segunda muestra los resultados dependiendo de la acción que se le ordene (cifrar o descifrar); y en la parte inferior de la página se presentan tres botones, el primero "Cifrar", que realiza la acción de cifrar el texto ingresado; el segundo "Descifrar" para cuando se ingrese un texto cifrado este lo descifrará; y el tercer y último "Copiar" botón que se puede utilizar para guardar momentáneamente el texto de la segunda caja en el portapapeles y así poder copiarlo en algún documento o para establecerlo ocmo contraseña en algún sitio web.


## Prototipo

Mediante la herramiente de prototipado Figma, realice un prototipo de alta fidelidad de lo que sería la aplicación, decidiendo realizar una página con colores sobrios para mas claridad y con una primera pantalla con las instrucciones de uso antes de entrar a la página del cifrado. Desde un inicio decidí realizar textos grandes debido a que muchas páginas que son utilizadas por adultos mayores (páginas de bancos, AFPs, redes sociales, etc) tienen fuentes muy pequeñas y en la gran mayoría no presentan mayores instrucciones de uso.

![propotipo-altafidelidad](https://github.com/PalomaZelada/SCL011-Cipher/blob/master/Prototipo.jpg)