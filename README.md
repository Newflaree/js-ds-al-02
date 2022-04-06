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
Entonces, el gran punto de venta de los Arrays, por supuesto, es que están ordenadas porque hay un orden intrínseco a los datos a diferencia de un objeto donde las cosas flotan en una masa gelatinosa. Y eso a menudo es muy útil si necesitamos un orden, pero puede tener un costo para algunas de las operaciones.

De todos modos, aquí hay dos Arrays diferentes, por supuesto, puede almacenar lo que quiera y hay diferentes tipos de datos. Cada elemento tiene un índice, un valor numérico que le corresponde.

En general, los Arrays se utilizan cuando se necesita orden. Si no necesita orden, entonces probablemente no quiera usar un Array si solo está tratando de almacenar datos aleatorios juntos. Todavía podría usar un Array, pero si realmente está tratando de optimizar el rendimiento, hay otras opciones. E incluso si necesita orden, varemos algunas otras estructuras surgiendo como una lista individualmente vinculada y una lista doblemente vinculada que todavía codifica el orden. Es una estructura de lista donde cada elemento está en un lugar particular y todos están conectados en un orden. Pero a veces pueden funcionar mejor que los Arrays, según lo que necesite. Por lo tanto, los Arrays no son la única estructura de datos de orden en la tierra. Son solo los únicos que obtenemos de forma gratuita en JS, de todos modos, el enlace viene después.

Entonces, cuando necesita un orden, puede usar una variedad, por supuesto, pero a menudo puede tener un costo dependiendo de lo que intenta hacer, especialmente en lo que respecta a la inserción y extracción, puede complicar las cosas. Por lo tanto, acceder a los datos de un Array siempre es muy rápido. Searching - O(N) y Access - O(1).


```
let names = [ 'Michael', 'Melissa', 'Andrea' ];
//                0         1          2
```
Cuando digo acceder, lo que quiero decir es que si tenemos este Array con tres elementos llamados name. Si se pide names[0], eso será muy rápido, es un tiempo constante.

Entonces, una idea erronea que he visto que muchos estudiantes tienen cuando trienes un Array de 10000 elementos y pides el elemento nueve mil, digamos que JS no está pasando por cada elemento al contar 9000 y acceder a cada elemento y luego obtener el que necesita y dárselo. Se podría decir que hay un atajo directo a cada elemento. Si tiene un número, si tiene un índice y la matriz tiene esa longitud, por supuesto, esa es la única condición. Puede saltar inmediatamente a los datos, por lo tanto, no importa cuánto dura el Array. No importa si está mirando el último elemento, el elemento central o el primer elemento, el tiempo es constante.

Así que ahora que está fuera del camino, hablemos de inserción y extracción. Realmente depende de dónde estamos insertando, comencemos con la inserción y tiene que ver con este orden como hemos mencionado. Cada elemento tiene un índice que le corresponde y si quiero agregar algo y decir que quiero agregar el nombre Raj, si lo agrego hasta el final, como haciendo un push sobre el Array, el tiempo constante es O(1) y eso es porque realmente no hay nada. Podemos agregar al final del Array y le damos un nuevo índice. Es algo así como agregar un object, es tiempo constante, es muy simple.
```
let names = [ 'Michael', 'Melissa', 'Andrea', 'Raj' ];
//                0         1          2        3
```

El problema surge cuando intentamos insertar al comienzo de un Array y la razón de eso tiene que ver con estos índices. Si se intenta inserta a Raj al inicio ya se puede ver qué pasa. En este caso Michael ya no sería el elemento 0 y pasaría a ser el elemento 1. Por lo tanto, tenemos que volver a indexar cada elemento del Array. Esto es simple para un Array de 4 elementos pero si estamos hablando de miles y miles de elementos, reindexar cada uno de ellos no es una tarea trivialj. Entonces, si estámos insertando al comienzo de un Array, estamos hablando de un O(n) del tiempo final porque tenemos que hacer algo una vez por cada elemento.
```
let names = [ 'Raj', 'Michael', 'Melissa', 'Andrea' ];
//              0         1          2        3
```
Ahora eso no significa que sea exactamente una operación para cada elemento. La cantidad de tiempo que tarda aproximadamente crece en proporción con el tamaño del Array. Y está bien, así que insertarlo al pricipio es problemático.

Lo mismo ocurre para eliminar desde el pricipio. Si tenemos a Raj al principio, digamos que esta es nuestra configuración. Si eliminamos a Raj, tenemos que volver a indexar nuevamente en la otra dirección que necesitamos para establecer el índice de Michael en adelante, todos bajan uno. Entonces podemos ver cómo esto se vuelve difícil.

- Al momento de agregar o eliminar desde el pricipio de un Array es mejor evaluarlo si se puede. Pero a menudo es significativo agregar al comienzo de un Array. A menos, por supuesto, que sea un Array vacío, en cuyo caso agragar al principio o al final es lo mismo.

- Entonces, hablamos de inserción y extracción. Depende de dónde estamos insertando, siempre insertar o quitar desde el pricipio es peor que agragar al final y eliminar desde el final.

- El acceso es rápido sin importar dónde, si estamos hablando de 10000 elementos, acceder al elemento medio es tan rápido como acceder al segundo elemento y luego buscar lo más rápido que podemos hacer es O(n). Discutiremos esto en la sección de búsqueda, todos escribimos nuestra propia búsqueda básica en JS si estamos hablando de un Array no ordemado donde hay un orden en los datos. Si quisiera saber si hubiera dicho otros 10000 nombres aquí y quisiera saber si Robbie estaba allí, tenemos que verificar potencialmente cada elemento. A medida que la cantidad de elementos crece en ese Array, también lo hace el tiempo potencialmente necesario para encontrar ese elemento. Pasamos mucho tiempo hablando sobre la búsqueda y las posibles optimizaciones que puede hacer específicamente cuando se ordenan sus datos, pero eso surge más tarde.













