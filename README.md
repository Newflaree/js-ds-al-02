# Analizando Rendimiento de Arrays y Objects
## Introducción
En esta sección tomaremos lo que acabamos de aprender hablando de la notación big-O, analizando la complejidad del tiempo y el espacio, el rendimiento del código toma ese contenido y lo aplica a lo que ya conocemos. Entonces, antes de llegar a los algoritmos avanzados y las estructuras de clasificación y datos locos, hablemos de lo que obtenemos de forma gratuita. Lo básico en JS, por lo que cosas como Arrays y Objects construidos en bucles de métodos.
- ¿Cómo se desempeñan?
- ¿Cuáles son las cosas fáciles, las cosas rápidas que podemos hacer a un Array?
- Cuál es el método que podría ser más lento de lo que cabría esperar?

### Objetivos
- Comprender cómo funcionan los objetos y los Array a través del lente del Big-O. ¿Hay una forma rápida de insertar en un Array o una más lenta?
- Explique por qué agregar elementos al comienzo de un Array es costoso y hablaremos sobre por qué es así y cómo funciona, si hay alternativas o si hay una mejor manera de insertar y luego compara y contrasta el tiempo de ejecución para Arrays y Objects, pero también están integrados los métodos. Hay muchos de estos métodos que obtenemos de forma gratuita, al igual que el tipo de JS incorporado para un Array, para cada objeto existe un par clave-propiedad.
- En esta sección vamos a tener la oportunidad de aprovechar lo que hemos aprendido sobre big-O y aplicarlo a algo tangible.

## El Big-O de los objetos
Comencemos hablando de objetos que hablan de ellos a través de la lente de Big O y el rendimiento. Por lo tanto, son estructuras de datos desordenadas y todo se almacena en pares de clave-valor.
```
let instructor = {
	firstName: 'kelly',
	isIntructor: true,
	favoriteNumbers: [1,2,3,4]
}
```
Por ejemplo, como este objeto literal que estamos almacenando en una variable llamada instructor. Tenemos tres pares clave-valor.

### ¿Cuando utilizar objetos?
- Cuando no necesitamos orden
- Cuándo se desea acceso rápido, inserción y extracción, por lo que hay orden pero casi todo lo demás es muy rápido. Cuando decimos rápido, estamos hablando del tiempo constante para la eliminación, inserción y acceso a los datos.

Los objetos son muy rápidos.
- Insertion = O(1)
- Removal = O(1)
- Searching = O(n)
- Access = O(1)

Más adelante en el curso tenemos una sección que se lla hash maps donde realmente aprenderemos una estructura de datos que explica cómo funcionan los objetos detrás de escena, cómo se almacenan realmente las cosas.

### ¿Qué sucede cuando decimos que el instructor debe primer nombre establecido en kelly?
### ¿Qué hace realmente JS?
Una computadora no necesariamente puede acceder a un lugar en la memoria llamado firtName, por lo que hay algunos pasos adicionales involucrados en el camino. Hay un tema llamado hashing del que hablamos más adelante en el curso, pero todo lo que necesitas saber es que JS puede agregar algo a un objeto y almacenar una nueva información en tiempo constante.
También es capaz de recuperar algo en tiempo constante y también puede actualizar algo en tiempo contante, que es realmente lo mismo que recuperarlo, solo lo estás cambiando.

Para todas las operaciones básicas no hay orden, por lo que no hay princiío del objeto, no hay final, por lo que no importa dónde inserte porque no hay dónde. Simplemente se agrega usando una llave. Por lo que la eliminación de inserción y el acceso son constantes y muy rápidos si desea más información.

Recuerda que hay una sección sobre tablas de hash y mapas de hash donde vamos a eso y comprenderás mejor, con suerte, compredenderás cómo es el costo y la búsqueda del tiempo, sin embargo, es inactivo y es tiempo lineal. Y cuando decimos que buscar no significa buscar una llave. Por ejemplo, primer nombre, porque como ya hemos visto, acceder a la información con una clave es tiempo contante. De lo que estoy hablando es de verificar si una determinada información tiene algún valor en alguna parte. Si quisiéramos saber si almacenamos algo lugar de nuestro objeto, tendríamos que verificar el nombre de cuál es su valor y luego lo miraremos. Si le preguntamos al instructor ¿Cuál es tu valor? nos dirá true, Por lo tanto, es verdadero, pero potencialmente se sabe que la cantidad de propiedades allí crece y crece, al igual que la cantidad de tiempo que lleva hacer eso.

Así que ahora pasamos a algunos de los métodos por los que los objetos vienen con cosas como valores de claves y entradas.
- Object.keys = O(n)
- Object.values = O(n)
- Object.entries = O(n)
- hasOwnProperty = O(1)

Entonces, si volvemos a nuestro ejemplo y echamos un vistazo a las claves de objetos de los estados clave y luego pasamos el objeto:
```
Object.keys(instructor);
```
Si lo hacemos por instructor obtenemos un Array con las keys. Esto es así todo el tiempo porque, como la cantidad de elementos que hay allí, vamos a tener que visitar cada cosa una vez y agregarla a este Array. Si hay 100 cosas, son 100 operaciones que debemos hacer. Es un O(n).

Ahora vamos con los entries:
```
Object.entries(instructor);
```

Técnicamente, las entradas son un poco más de trabajo que potencialmente tienen que compilar la key y el value. Pero todo se simplifica para terminar y al final del día recordar.

Por último, tenemos una propiedad propia y es un poco diferente a una propiedad como el primer nombre, no tiene un nombre y esto es un tiempo constante y con suerte eso hace sentir por qué es tiempo constante. esta devuelve un booleano y es O(1).
```
instructor.hasOwnProperty('firstName')
```

Si podemos acceder a la información en tiempo constante, si tenemos el nombre de la clave, queremos el valor. También deberíamos poder verificar si existe un kay más menos al mismo tiempo. Sin embargo, no hay orden y veremos la aparición de Arrays. Los Arrays pueden ser bastante rápidos para muchas cosas, pero el orden también puede relentizarlas dependiendo de lo que estamos haciendo. Entonces los objetos son básicos. Funcionan muy bien en muchas situaciones.


 
Entonces, en resumen, los objetos son realmente rápidos para casi todo.


## ¿Cuándo son lentos los Arrays?

