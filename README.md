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
	firsName: 'kelly',
	isIntructor: true,
	favoriteNumbers: [1,2,3,4]
}
```
Por ejemplo, como este objeto literal que estamos almacenando en una variable llamada instructor. Tenemos tres pares clave-valor.

### ¿Cuando utilizar objetos?
- Cuando no necesitamos orden
- Cuándo se desea acceso rápido, inserción y extracción, por lo que hay orden pero casi todo lo demás es muy rápido. 
- Cuando decimos rápido, estamos hablando del tiempo constante para la eliminación, inserción y acceso a los datos.

Los objetos son muy rápidos.
- Insertion = O(1)
- Removal = O(1)
- Searching = O(n)
- Access = O(1)
